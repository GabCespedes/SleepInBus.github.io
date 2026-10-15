(function () {
  const config = window.APP_CONFIG || {};
  document.documentElement.style.setProperty("--accent", config.primaryColor || "#7647eb");
  document.querySelectorAll("[data-app-name]").forEach((element) => { element.textContent = config.name || "SleepInBus"; });
  document.querySelectorAll("[data-developer-name]").forEach((element) => { element.textContent = config.developerName || "Nome da sua empresa ou do responsável"; });
  document.querySelectorAll("[data-Suporte-email]").forEach((element) => { element.textContent = config.SuporteEmail || "Suporte@example.com"; element.href = `mailto:${config.SuporteEmail || "Suporte@example.com"}`; });
  document.querySelectorAll("[data-updated-at]").forEach((element) => { element.textContent = config.updatedAt || ""; });
  const tagline = document.querySelector("[data-tagline]"); if (tagline) tagline.textContent = config.tagline || "";
  const description = document.querySelector("[data-description]"); if (description) description.textContent = config.description || "";
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && document.body.dataset.page === "home" && config.description) metaDescription.content = config.description;
  const storeLink = document.querySelector("[data-app-store-link]"); if (storeLink && config.appStoreUrl && config.appStoreUrl !== "#") storeLink.href = config.appStoreUrl;
  document.title = document.title.replace("SleepInBus", config.name || "SleepInBus");
})();
