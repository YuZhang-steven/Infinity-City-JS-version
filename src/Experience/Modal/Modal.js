
import Experience from "../Experience"

//import * from '../../../static/projects/meshEditor'
export default class Modal {
    constructor() {
        this.experience = new Experience()
        this.path = this.experience.projectPath


        this.modal = document.getElementById("project_modal")
        this.modalImg = document.getElementById("img01")
        this.captionText = document.getElementById("modalCaption")
        this.closebuttion = document.getElementsByClassName("close")[0]

    }

    setModal(projectName) {
        let folder = `../../../static/projects/${projectName}`
        this.imageCollection = this.path.get(projectName)
        let count = this.imageCollection.length
        let num = 1
        console.log(count)
        for (const image of this.imageCollection) {
            let html = `
            <div class="mySlides">
                <div class="numbertext">${num} / ${count}</div>
                <img src=${image.path} style="width:100%">
                <div class="text">${image.name}</div>
            </div>
            `;
        }



        console.log(this.imageCollection)


        this.modal.classList.add("show")
        this.closeTrigger()

    }

    closeTrigger() {
        this.closebuttion.onclick = () => {
            this.modal.classList.remove("show")
        }
    }
}