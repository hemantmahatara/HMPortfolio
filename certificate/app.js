var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

const slides = document.querySelectorAll(".slide")
var counter = 0;
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () =>{
    counter --
    slideImage()
}

const goNext = () =>{
    counter ++
    slideImage()
}
const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}