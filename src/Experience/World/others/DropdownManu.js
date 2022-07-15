import Experience from "../../Experience"

export default class DropdownManu {
    constructor() {
        this.experience = new Experience()

        this.manu = document.getElementsByClassName("myDropdown")[0]
        this.button = document.getElementsByClassName("dropbtn")[0]
        this.projectsTypes = document.getElementsByClassName("project_collection")



        this.about_btn = document.getElementById("manu_about")
        // this.contact_btn = document.getElementById("manu_contact")
        this.project_btn = document.getElementById("manu_project")
        this.setAnimation()
    }
    setAnimation() {
        this.button.onclick = () => {
            if (this.manu.classList.contains('drop-show')) {
                this.manu.classList.remove('drop-show')
            } else {
                this.manu.classList.add('drop-show')
            }
        }
        this.project_btn.onclick = () => {
            for (let item of this.projectsTypes) {
                if (item.classList.contains('drop-show')) {
                    item.classList.remove('drop-show')
                } else {
                    item.classList.add('drop-show')
                }
            }
        }
        this.about_btn.onclick = () => {

            this.experience.aboutPage.setModal()

        }

        for (let item of this.projectsTypes) {
            if (item.id === "project_cg") {

                item.onclick = () => {
                    this.experience.matAssign.highLighting("computer_graphic")
                }
            }
            else if (item.id === "all") {

                item.onclick = () => {
                    this.experience.matAssign.setColorBack()
                }
            } else if (item.id === "project_arch") {

                item.onclick = () => {
                    this.experience.matAssign.highLighting("architecture")
                }
            } else if (item.id === "project_prog") {

                item.onclick = () => {
                    this.experience.matAssign.highLighting("programing")
                }
            } else if (item.id === "project_prod") {

                item.onclick = () => {
                    this.experience.matAssign.highLighting("product")
                }
            }
        }


    }
}