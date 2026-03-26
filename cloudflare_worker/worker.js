let errorStep = "1";
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Max-Age": "86400",
}
async function verifyRecaptcha(token, ip, rCaptchaKey) {
    const res = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: rCaptchaKey,
                response: token,
                remoteip: ip,
            }),
        }
    );

    return res.json();
}

async function sendTelegramMessage(botToken, chatId, contact) {
    // Format the message as multi-line text
    let messageText = "";
    for (const [key, value] of Object.entries(contact)) {
        messageText += `*${key}:* ${value || "-"}\n`;
    }

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: chatId,
                text: messageText,
                parse_mode: "Markdown", // makes the keys bold
            }),
        });

        const data = await res.json();
        if (!data.ok) {
            throw new Error(`Telegram API error: ${data.description}`);
        }

        return data;
    } catch (err) {
        console.error("Failed to send Telegram message:", err);
        return null;
    }
}


export default {
    async fetch(request, env) {
        const recaptchaKeys = {
            "fabricpaymentstandards.org": env.FPSF_RECAPTCHA_SECRET,
            // "anothersite.tld": env.ANOTHER_SITE_RECAPTCHA_SECRET,
        }
        if (request.method === "OPTIONS") {
            return new Response(null, {
                headers: {
                    "Access-Control-Allow-Origin": "https://gleams.io",
                    "Access-Control-Allow-Methods": "POST, OPTIONS",
                    "Access-Control-Allow-Headers": "Content-Type",
                },
            });
        }

        if (request.method !== "POST") {
            return new Response(`Method ${request.method} Not Allowed. Full Request: ${JSON.stringify(request)}`, { status: 405, headers });
        }

        const formData = await request.formData();

        const formId = formData.get("form_id")?.trim();
        const name = formData.get("name")?.trim();
        const phone = formData.get("phone_number")?.trim();
        const email = formData.get("email")?.trim();
        const company = formData.get("company_name")?.trim();
        const country = formData.get("country_name")?.trim();
        const message = formData.get("message")?.trim();
        const captchaToken = formData.get("g-recaptcha-response");

        if (!formId || !name || !email || !message || !captchaToken) {
            return new Response("Missing required fields", { status: 400, headers });
        }

        const secret = recaptchaKeys[formId];
        if (!secret) {
            return new Response("Invalid form", { status: 400, headers });
        }

        // Verify reCAPTCHA
        const ip = request.headers.get("CF-Connecting-IP");
        const captcha = await verifyRecaptcha(captchaToken, ip, secret);

        if (
            !captcha.success ||
            captcha.score < 0.5
        ) {
            return new Response(`Captcha verification failed.`, { status: 403, headers });
        }

        try {
            const newContact = {
                "Website": formId,
                "Person Name": name,
                "Phone": phone,
                "Email": email,
                "Company name": company,
                "Country Name": country,
                "Message": message
            };
            await sendTelegramMessage(
                env.TELEGRAM_BOT_TOKEN,
                env.TELEGRAM_CHAT_ID,
                newContact
            );
        } catch (error) {
            //Ignore errors and continue
        }

        try {
            await env.db1_contact_form_z3f.prepare(`
      INSERT INTO web_messages
      (form_id, name, phone_number, email, company_name, country_name, message)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(
                formId,
                name,
                phone,
                email,
                company,
                country,
                message
            ).run();
            return new Response("OK", { status: 200, headers });
        } catch (e) {
            return new Response("Database error", { status: 500, headers });
        }
    },
};
