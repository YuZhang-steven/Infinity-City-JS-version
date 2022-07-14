
import Experience from "../Experience"
import Slides from "./Slides"

//import * from '../../../static/projects/meshEditor/001.PNG'
export default class Modal {
    constructor() {
        this.experience = new Experience()
        this.slides = new Slides()
        this.path = this.experience.projectPath

        //Modal Element(Static)
        this.modal = document.getElementsByClassName("modal")[0]
        this.captionText = document.getElementById("modalCaption")
        this.closebutton = document.getElementById("model_close")

        //Slides change related Element(dynamicly change)
        //build new when each time the modal open
        this.slidesNumElement = document.getElementById('slides_number')
        this.slidesElement = document.getElementById('modal_image')
        this.slidesCaptionElement = document.getElementById('slide_caption')
        this.dotsElement = document.getElementById('dots')

        //project related Element(dynamicly change)
        //build new when each time the modal open
        this.projectName = document.getElementById("project_name")
        this.projectText = document.getElementById("project_text")
        this.projectType = document.getElementById("project_type")

    }

    setModal(projectName) {

        this.imageCollection = this.path.get(projectName + "Img")
        this.textCollection = this.path.get(projectName + "Text")

        const count = this.imageCollection.length

        //traversal all images, create slides and add dots
        let num = 1 //item count
        for (const item of this.imageCollection) {


            //create slide number
            let html = `
            <div class="slide_numtext"><P>${num} / ${count}<P></div>
            `;
            this.slidesNumElement.insertAdjacentHTML("beforeend", html)

            //create image slide
            html = `
            <div id="slide${num}" class="mySlides">
                <img src=${item.path} style="width:100%">
            </div>
            `;
            this.slidesElement.insertAdjacentHTML("beforeend", html)

            //create slide caption
            html = `
            <div class="image_caption"><P>${item.name}<P></div>
            `;
            this.slidesCaptionElement.insertAdjacentHTML("beforeend", html)

            //create dot element
            html = `
            <span id="dot${num}" class="dot"></span>
            `
            this.dotsElement.insertAdjacentHTML("beforeend", html)
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


        //add click event on previous and next buttons.
        let preButton = document.getElementById("prev_button")
        let nextButton = document.getElementById("next_button")

        preButton.onclick = () => {
            this.slides.plusSlides(-1)
        }
        nextButton.onclick = () => {
            this.slides.plusSlides(1)
        }


        //add project and text
        for (const item of this.textCollection) {
            if (item.type === "name") {
                let html = `
                            <h1>${item.text}<h1>
                           `
                this.projectName.insertAdjacentHTML("beforeend", html)
            } else if (item.type === "intro") {
                let html = `
                            <p>${item.text}<p>
                           `
                this.projectText.insertAdjacentHTML("beforeend", html)
            } else if (item.type === "type") {
                let html = `
                            <P>${item.text}<P>
                           `
                this.projectType.insertAdjacentHTML("beforeend", html)
            }
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
            //unshow modal page
            this.modal.classList.remove("show")

            //delete all slides information
            this.slidesNumElement.innerHTML = ""
            this.slidesElement.innerHTML = ""
            this.slidesCaptionElement.innerHTML = ""
            this.dotsElement.innerHTML = ""

            //delete project information
            this.projectName.innerHTML = ""
            this.projectText.innerHTML = ""
            this.projectType.innerHTML = ""


        }
    }
}