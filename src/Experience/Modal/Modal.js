
import Experience from "../Experience"
import Slides from "./Slides"

//import * from '../../../static/projects/meshEditor/001.PNG'
export default class Modal {
    constructor() {
        this.experience = new Experience()
        this.slides = new Slides()
        this.path = this.experience.projectPath
        //


        this.modal = document.getElementsByClassName("modal")[0]
        this.modalImg = document.getElementById("img01")
        this.captionText = document.getElementById("modalCaption")
        this.closebutton = document.getElementById("model_close")

    }

    setModal(projectName) {
        const folder = `../../../static/projects/${projectName}`

        this.imageCollection = this.path.get(projectName)
        const slidesNumElement = document.getElementById('slides_number')
        const slidesElement = document.getElementById('modal_image')
        const slidesCaptionElement = document.getElementById('slide_caption')

        const dotsElement = document.getElementById('dots')


        const count = this.imageCollection.length

        //traversal all images, create slides and add dots
        let num = 1 //item count
        for (const item of this.imageCollection) {


            //create slide number
            let html = `
            <div class="slide_numtext">${num} / ${count}</div>
            `;
            slidesNumElement.insertAdjacentHTML("beforeend", html)

            //create image slide
            html = `
            <div id="slide${num}" class="mySlides">
                <img src=${item.path} style="width:100%">
            </div>
            `;
            slidesElement.insertAdjacentHTML("beforeend", html)

            //create slide caption
            html = `
            <div class="image_caption">${item.name}</div>
            `;
            slidesCaptionElement.insertAdjacentHTML("beforeend", html)

            //create dot element
            html = `
            <span id="dot${num}" class="dot"></span>
            `
            dotsElement.insertAdjacentHTML("beforeend", html)
            let curr_dot = document.getElementById(`dot${num}`)

            //add dot element click event
            curr_dot.onclick = () => {
                let n = curr_dot.id.replace(/[^0-9\.]/g, '')
                n = parseInt(n, 10)
                this.slides.showSlides(n)
            }

            //add count
            num++
        }
        console.log(document.getElementById(`dots`))

        //add click event on previous and next buttons.
        let preButton = document.getElementById("prev_button")
        let nextButton = document.getElementById("next_button")

        preButton.onclick = () => {
            this.slides.plusSlides(-1)
        }
        nextButton.onclick = () => {
            this.slides.plusSlides(1)
        }

        //show class and first slide
        this.modal.classList.add("show")
        this.slides.showSlides(1)

        //add closebutton event
        this.closeTrigger()

    }

    //add closebutton event
    closeTrigger() {
        this.closebutton.onclick = () => {
            this.modal.classList.remove("show")

        }
    }
}