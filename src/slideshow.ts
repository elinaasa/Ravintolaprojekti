var timeOut: number = 2000;
var slideIndex: number = 0;
var autoOn: boolean = true;

autoSlides();

function autoSlides(): void {
  timeOut = timeOut - 20;

  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 20);
}

function prevSlide(): void {
timeOut = 2000;

const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
const dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

for (let i: number = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
}
slideIndex--;

if (slideIndex > slides.length) {
    slideIndex = 1;
}
if (slideIndex == 0) {
    slideIndex = 3;
}
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides(): void {
timeOut = 2000;

const slides: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
const dots: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

for (let i: number = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
}
slideIndex++;

if (slideIndex > slides.length) {
    slideIndex = 1;
}
slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}