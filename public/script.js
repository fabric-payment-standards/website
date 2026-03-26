function toggleDropdown(id) {
  const li = document.getElementById(id);
  const isOpen = li.classList.contains('open');
  document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('open'));
  if (!isOpen) li.classList.add('open');
}

async function renderIncludes() {
  try {
    const elements = document.querySelectorAll('[data-include]');
    await Promise.all([...elements].map(async el => {
      const componentName = el.dataset.include;
      const res = await fetch(componentName);
      const html = await res.text();
      el.outerHTML = html;

      if (window.i18n) {
        window.i18n.applyTranslations();
        if (componentName.includes("header")) {
          window.i18n.addLanguageSwitcher();
        }
      }

      if (componentName.includes("header")) {
        initMobileMenu();
      }
    }));
  } catch (error) {
    console.error("Component loading error:", error);
  }
}

let initMobileMenu;

document.addEventListener("DOMContentLoaded", function () {
  renderIncludes();

  // Mobile Menu Toggle
  // Targets .burger (toggle button) and .mobile-menu (drawer) per the CSS
  initMobileMenu = () => {
    const burger = document.querySelector(".burger");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (!burger || !mobileMenu) return;

    burger.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = burger.classList.toggle("open");
      mobileMenu.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", isOpen);
    });

    // Close when a nav link inside the drawer is clicked
    mobileMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("open");
        mobileMenu.classList.remove("open");
        burger.setAttribute("aria-expanded", false);
      });
    });

    // Close when clicking outside the menu / burger
    document.addEventListener("click", (e) => {
      if (!mobileMenu.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove("open");
        mobileMenu.classList.remove("open");
        burger.setAttribute("aria-expanded", false);
      }
    });

    // Inject language switcher into the mobile menu (bottom of the drawer list)
    // so it's accessible without reopening nav on small screens
    injectLangSwitcherInMobileMenu();
  };

  initMobileMenu();

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });


  //  HEADER SCRIPTS  
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-links li')) {
      document.querySelectorAll('.nav-links li').forEach(l => l.classList.remove('open'));
    }
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.clientHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }),
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(
    ".card, .stack-item, .audience-box, .manifesto-content li, .governance-highlights, .prototype-card, .reveal"
  ).forEach(el => {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
    observer.observe(el);
  });

  // Form handling
  // document.addEventListener("submit", (e) => {
  //   if (e.target?.id === "newsletter-form") {
  //     e.preventDefault();
  //     const email = e.target.querySelector('input[type="email"]').value;
  //     alert(`Institutional updates will be sent to: ${email}`);
  //     e.target.reset();
  //   }
  //   if (e.target?.id === "contact-form") {
  //     e.preventDefault();
  //     alert("Thank you for your inquiry. Our institutional team will contact you shortly.");
  //     e.target.reset();
  //   }
  // });
});

/**
 * Clone / move the language switcher into the mobile menu drawer.
 * Called after both the header and i18n are ready.
 */
function injectLangSwitcherInMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!mobileMenu) return;

  // Avoid duplicates
  if (mobileMenu.querySelector(".language-switcher")) return;

  // Wait briefly for i18n to have built the desktop switcher, then clone it
  const tryInject = () => {
    const desktopSwitcher = document.getElementById("language-switcher");
    if (!desktopSwitcher) {
      // i18n not ready yet — retry
      setTimeout(tryInject, 100);
      return;
    }

    const clone = desktopSwitcher.cloneNode(true);
    clone.removeAttribute("id"); // avoid duplicate IDs
    //clone.style.cssText = "padding: 16px 28px; border-top: 1px solid var(--border);";

    // Wire up click handlers on the clone's options
    clone.querySelectorAll(".language-option").forEach(opt => {
      // Read the language name to map back to a lang code
      const nameParts = [...opt.querySelectorAll(".language-name")];
      if (nameParts.length && window.i18n) {
        const nameText = nameParts[0].textContent.trim();
        // Find matching lang code
        const langNames = { en: "English", ro: "Română", fr: "Français", es: "Español", pt: "Português", uk: "українська", zh: "普通话" };
        const lang = Object.keys(langNames).find(k => langNames[k] === nameText);
        if (lang) {
          opt.onclick = () => window.i18n.setLanguage(lang);
        }
      }
    });

    // Toggle the clone's dropdown menu independently
    const cloneBtn = clone.querySelector(".language-btn");
    const cloneMenu = clone.querySelector(".language-menu");
    if (cloneBtn && cloneMenu) {
      cloneBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        cloneMenu.style.display = cloneMenu.style.display === "block" ? "none" : "block";
      });
    }

    mobileMenu.appendChild(clone);
  };

  tryInject();
}