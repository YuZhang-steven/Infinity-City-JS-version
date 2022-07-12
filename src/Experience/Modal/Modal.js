
import Experience from "../Experience"
import Slides from "./Slides"

//import * from '../../../static/projects/meshEditor/001.PNG'
export default class Modal {
    constructor() {
        this.experience = new Experience()
        this.path = this.experience.projectPath
        this.slidesControl = new Slides()


        this.modal = document.getElementById("project_modal")
        this.modalImg = document.getElementById("img01")
        this.captionText = document.getElementById("modalCaption")
        this.closebuttion = document.getElementsByClassName("close")[0]

    }

    setModal(projectName) {
        const folder = `../../../static/projects/${projectName}`

        this.imageCollection = this.path.get(projectName)
        const preElement = document.getElementById('modal_image')

        const count = this.imageCollection.length

        let num = 1

        for (const item of this.imageCollection) {


            let html = `
            <div id="slide${num}" class="mySlides">
                <div class="numbertext">${num} / ${count}</div>
                <img src=${item.path} style="width:100%">
                <div class="text">${item.name}</div>
            </div>
            `;


            preElement.insertAdjacentHTML("beforeend", html)

            num++
        }


        console.log(document.getElementsByClassName("mySlides")[0])


        this.modal.classList.add("show")
        this.slidesControl.showSlides(1)
        this.closeTrigger()

    }

    closeTrigger() {
        this.closebuttion.onclick = () => {
            this.modal.classList.remove("show")
        }
    }
}