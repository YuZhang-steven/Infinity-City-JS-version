export default class Slides {
    constructor() {
        this.slideIndex = 1
    }

    // Next/previous controls
    plusSlides(n) {
        showSlides(this.slideIndex += n)
    }

    //dots linked slides
    currentSlide(n) {
        showSlides(this.slideIndex = n)
    }

    showSlides(n) {
        let i;

        //get a html collection
        let slides = document.getElementsByClassName("mySlides")

        let dot = document.getElementsByClassName("dot")

        //wrap funtion
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { this.slideIndex = slides.length }

        //set all other slides to undisplay
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        //set all other dots as nonactive
        for (i = 0; i < dot.length; i++) {
            dot[i].className = dot[i].className.replace(" active", "");
        }

        slides[this.slideIndex - 1].style.display = "block"
        dot[this.slideIndex - 1].className += " active"
    }

}