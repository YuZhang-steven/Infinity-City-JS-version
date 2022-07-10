

export default class Modal {
    constructor() {
        this.modal = document.getElementById("project_modal")
        this.modalImg = document.getElementById("img01")
        this.captionText = document.getElementById("modalCaption")
        this.closebuttion = document.getElementsByClassName("close")[0]
    }

    setModal() {
        this.modal.style.display = "block"
        this.closeTrigger()

    }

    closeTrigger() {
        this.closebuttion.onclick = () => {
            this.modal.style.display = "none"
        }
    }
}