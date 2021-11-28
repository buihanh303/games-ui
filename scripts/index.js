$(document).ready(function () {
  $(".customer-list").slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    infinite: false,
    arrows: true,
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fas fa-arrow-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right' aria-hidden='true'></i></button>",
  });
});

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
