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
