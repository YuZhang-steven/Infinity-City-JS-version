export default class Slides {
    constructor() {
        this.slideIndex = 1
        //get a html collection
        this.slides = document.getElementsByClassName("mySlides")
        this.dot = document.getElementsByClassName("dot")
        this.slideNum = document.getElementsByClassName("slide_numtext")
        this.slideCaption = document.getElementsByClassName("image_caption")


    }

    showSlides(n) {


        //wrap funtion
        if (n > this.slides.length) { this.slideIndex = 1 }
        else if (n < 1) { this.slideIndex = this.slides.length }
        else { this.slideIndex = n }

        //set all other slides to undisplay
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
            this.dot[i].className = this.dot[i].className.replace(" active", "");
            this.slideNum[i].style.display = "none";
            this.slideCaption[i].style.display = "none";
        }

        //set current slide
        this.slides[this.slideIndex - 1].style.display = "block"
        this.dot[this.slideIndex - 1].className += " active"
        this.slideNum[this.slideIndex - 1].style.display = "block";
        this.slideCaption[this.slideIndex - 1].style.display = "block";
    }

    // Next/previous controls
    plusSlides(n) {
        this.showSlides(this.slideIndex += n)
    }


}