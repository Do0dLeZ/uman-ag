var arrLang = {
  en: {
    aboutUs: "About Us",
    service: "Our Services",
    scopes: "Scopes"
  },
  ua: {
    aboutUs: "Про нас",
    service: "Послуги",
    scopes: "Напрямки"
  }
};
document.onload = function() {
  console.log("hello");
  $(".translate").click(function() {
    var lang = $(this).attr("id");
    $(".lang").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
};
