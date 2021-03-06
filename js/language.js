const languages = {
  en: {
    chooseLang: "Choose language:",
    //Main titles
    mainTitle: "Recruitment and Immigration Solutions",
    mainSubTitle: "We develop people and businesses by putting them together",
    //Navigation
    menuAboutUs: "About us",
    menuService: "Services",
    menuScopes: "Industries",
    // menuSteps: "Steps",
    menuContacts: "Contacts"
    //About Us Section
  },
  uk: {
    chooseLang: "Виберіть мову:",
    //Main titles
    mainTitle: "Агенство з працевлаштування та імміграції",
    mainSubTitle: "Ми створюємо кар'єри та бізнеси, поєднуючи їх",
    //Navigation
    menuAboutUs: "Про нас",
    menuService: "Послуги",
    menuScopes: "Напрямки",
    // menuSteps: "Кроки",
    menuContacts: "Контакти"
    //About Us Section
  },
  de: {
    chooseLang: "Sprache wählen:",
    //Navigation
    menuAboutUs: "Über uns",
    menuService: "Dienstleistungen",
    menuScopes: "Richtungen",
    menuSteps: "Schritte",
    menuContacts: "Kontakte"
    //About Us Section
  }
};

const browserLanguage = navigator.userLanguage || navigator.language;
const elementsForTranslate = document.querySelectorAll("[text-translate]");

const changeLang = language => {
  for (const element of elementsForTranslate) {
    element.innerHTML =
      languages[language][element.getAttribute("text-translate")];
  }
};

window.onload = () => {
  const firstLetters = browserLanguage.substring(0, 2);
  if (firstLetters === "en" || firstLetters === "uk" || firstLetters === "de") {
    changeLang(firstLetters);
    return;
  }
  changeLang("en");
};

document.addEventListener("DOMContentLoaded", function() {
  const langChangeBtn = document.querySelectorAll(".translate");
  langChangeBtn.forEach(item => {
    item.addEventListener("click", function(e) {
      const langId = this.getAttribute("id");
      changeLang(langId);
    });
  });
});
