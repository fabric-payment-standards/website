/**
 * Simple JavaScript Translation Library
 *
 * Features:
 * - JSON-based translation files
 * - Automatic language detection
 * - Cookie/localStorage persistence
 * - Dynamic language switching with page reload
 */

class I18n {
  constructor() {
    this.currentLang = "en";
    this.translations = {};
    this.defaultLang = "en";
    this.supportedLangs = ["en", "ro", "fr", "es", "pt", "uk", "zh"];

    this.init();
  }

  async init() {
    this.currentLang = this.getLanguage();
    await this.loadTranslations();
    this.applyTranslations();
    this.addLanguageSwitcher();
  }

  getLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    if (urlLang && this.supportedLangs.includes(urlLang)) return urlLang;

    const cookieLang = this.getCookie("i18n_lang");
    if (cookieLang && this.supportedLangs.includes(cookieLang)) return cookieLang;

    const storageLang = localStorage.getItem("i18n_lang");
    if (storageLang && this.supportedLangs.includes(storageLang)) return storageLang;

    const browserLang = (navigator.language || navigator.userLanguage).split("-")[0];
    if (this.supportedLangs.includes(browserLang)) return browserLang;

    return this.defaultLang;
  }

  setLanguage(lang) {
    if (!this.supportedLangs.includes(lang)) {
      console.warn(`Language ${lang} is not supported`);
      return;
    }
    this.setCookie("i18n_lang", lang, 30);
    localStorage.setItem("i18n_lang", lang);
    this.currentLang = lang;

    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.location.href = url.toString();
  }

  async loadTranslations() {
    try {
      const page = this.getCurrentPage();

      // Load common and page-specific translations in parallel
      const [commonRes, pageRes] = await Promise.all([
        fetch(`i18n/commons/${this.currentLang}.json`),
        fetch(`i18n/${page}/${this.currentLang}.json`)
      ]);

      const common = commonRes.ok ? await commonRes.json() : {};
      const pageSpecific = pageRes.ok ? await pageRes.json() : {};

      // Page-specific keys win over common keys if there's overlap
      this.translations = { ...common, ...pageSpecific };

    } catch (error) {
      console.warn("Failed to load translations:", error.message);
      this.translations = {};
    }
  }

  applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      const translation = this.getTranslation(key);
      if (!translation) return;

      if (element.tagName === "INPUT" && element.type === "button") {
        element.value = translation;
      } else if (element.tagName === "INPUT" && ["text", "email"].includes(element.type)) {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(element => {
      const translation = this.getTranslation(element.getAttribute("data-i18n-aria-label"));
      if (translation) element.setAttribute("aria-label", translation);
    });

    document.querySelectorAll("[data-i18n-list]").forEach(element => {
      const translation = this.getTranslation(element.getAttribute("data-i18n-list"));
      if (translation && Array.isArray(translation)) {
        element.innerHTML = "";
        translation.forEach(item => {
          const li = document.createElement("li");
          li.textContent = item;
          element.appendChild(li);
        });
      }
    });

    const titleEl = document.querySelector("title");
    if (titleEl?.getAttribute("data-i18n")) {
      const t = this.getTranslation(titleEl.getAttribute("data-i18n"));
      if (t) document.title = t;
    }
  }

  getTranslation(key) {
    if (!key || !this.translations) return null;
    return key.split(".").reduce((obj, k) => (obj && typeof obj === "object" && k in obj ? obj[k] : null), this.translations);
  }

  /**
   * Build and insert the language switcher into the desktop nav (.nav-inner or .top-bar-content).
   * On mobile the switcher is hidden via CSS (see note below) and instead
   * main.js clones it into the mobile drawer.
   */
  addLanguageSwitcher() {
    // Remove stale instance if it was previously added to body (fallback path)
    const stale = document.getElementById("language-switcher");
    if (stale && stale.parentElement === document.body) stale.remove();

    // If already properly placed, skip
    if (document.getElementById("language-switcher")) return;

    const langNames = {
      en: "English", ro: "Română", fr: "Français",
      es: "Español", pt: "Português", uk: "українська", zh: "普通话"
    };

    const switcher = document.createElement("div");
    switcher.id = "language-switcher";
    switcher.className = "language-switcher";

    const button = document.createElement("button");
    button.className = "language-btn";
    button.setAttribute("aria-label", "Select language");
    button.innerHTML = `
      <span class="language-flag">${this.getFlagEmoji(this.currentLang)}</span>
      <span class="dropdown-arrow">▼</span>
    `;

    const menu = document.createElement("div");
    menu.className = "language-menu";

    this.supportedLangs.forEach(lang => {
      const option = document.createElement("div");
      option.className = "language-option";
      option.innerHTML = `
        <span class="language-flag">${this.getFlagEmoji(lang)}</span>
        <span class="language-name">${langNames[lang]}</span>
        ${lang === this.currentLang ? '<span class="checkmark">✓</span>' : ""}
      `;
      option.onclick = () => this.setLanguage(lang);
      menu.appendChild(option);
    });

    switcher.appendChild(button);
    switcher.appendChild(menu);

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!switcher.contains(e.target)) menu.style.display = "none";
    });

    button.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Prefer inserting into .top-bar-content, then .nav-inner, then body fallback
    const target = document.querySelector(".top-bar-content") || document.querySelector(".nav-inner");
    if (target) {
      target.appendChild(switcher);
    } else {
      // Fallback: fixed to viewport; main.js will still clone into mobile menu
      switcher.style.cssText = "position:fixed;top:20px;right:20px;z-index:1000;";
      document.body.appendChild(switcher);
    }
  }

  getFlagEmoji(lang) {
    return { en: "🇬🇧", ro: "🇷🇴", fr: "🇫🇷", es: "🇪🇸", pt: "🇵🇹", uk: "🇺🇦", zh: "🇨🇳" }[lang] || "🌐";
  }

  getCurrentPage() {
    const filename = window.location.pathname.split("/").pop();
    return filename.replace(".html", "") || "index";
  }

  getCookie(name) {
    const parts = `; ${document.cookie}`.split(`; ${name}=`);
    return parts.length === 2 ? parts.pop().split(";").shift() : null;
  }

  setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value};expires=${expires};path=/`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.i18n = new I18n();
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = I18n;
}