let slideIndex = 0;
let prevSlideIndex = 0;

const dots = document.getElementsByClassName("slide-dot");
const slides = document.getElementsByClassName("my-slides");

const plusSlide = n => {
  slideIndex += n;
  console.log(slideIndex);
  if (slideIndex > slides.length - 1) slideIndex = 0;
  else if (slideIndex < 0) slideIndex = slideIndex.length - 1;

  changeSlide(slideIndex);
};

const changeSlide = index => {
  slides[prevSlideIndex].classList.remove("active-slide");
  dots[prevSlideIndex].classList.remove("active");
  slides[index].classList.add("active-slide");
  dots[index].classList.add("active");
  prevSlideIndex = index;
};
