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
