// menu mobile
const btnToggle = document.querySelector(".header-bar");
const menuHeader = document.querySelector(".header-list");
const btnCloseMenu = document.querySelector(".header-close-icon");
const isActive = "is-expand";
btnToggle.addEventListener("click", () => {
  menuHeader.classList.add(isActive);
});

btnCloseMenu.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
});

// tab-content
const itemTabParent = document.querySelectorAll(".exp-item");
const btnTab = document.querySelectorAll(".btn-tab");
const tabItem = document.querySelectorAll(".exp-tab-item");

btnTab.forEach((element) => {
  element.addEventListener("click", (event) => {
    const indexTab = event.target.id;
    tabItem.forEach((element) => {
      element.classList.remove("is-active");
    });
    itemTabParent.forEach((element) => {
      element.classList.remove("is-actived");
    });
    event.target.parentElement.classList.add("is-actived");
    document
      .querySelector(`.exp-tab-item[data-tab='${indexTab}']`)
      .classList.add("is-active");
  });
});

// show popup
const btnPlayNow = document.querySelector("#btn-play-now");
const btnClosePopup = document.querySelector(".header-close-popup");
const popupContent = document.querySelector(".header-popup");

btnPlayNow.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupContent.style.display = "block";
});

btnClosePopup.addEventListener("click", () => {
  popupContent.style.display = "none";
});

const arrLang = {
  en: {
    play: "play now",
    market: "marketplace",
    mint: "mint",
    farm: "farm",
    mining: "mining",
    learn: "learn more",
  },
  id: {
    play: "main sekarang",
    market: "pasar",
    mint: "daun mint",
    farm: "tanah pertanian",
    mining: "pertambangan",
    learn: "mempelajari",
  },
};

$(function () {
  let userLang = navigator.language || navigator.userLanguage;
  let fomatLangBrower = userLang.split("-")[0];

  if (fomatLangBrower !== "") {
    $(".header-item-link").each(function (index, item) {
      $(this).text(arrLang[fomatLangBrower][$(this).attr("key")]);
    });
  }
  $(".translate").click(function () {
    let lang = $(this).attr("id");
    $(".language-list").css({ display: "none" });

    $(".header-item-link").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
  $(".header-language-text").hover(function () {
    $(".language-list").css({ display: "flex" });
  });
  $(".header-language-text").mouseleave(function () {
    $(".language-list").css({ display: "none" });
  });
  $(".language-list").hover(function () {
    $(".language-list").css({ display: "flex" });
  });
  $(".language-list").mouseleave(function () {
    $(".language-list").css({ display: "none" });
  });
});
