export default class DropdownManu {
    constructor() {
        this.manu = document.getElementsByClassName("myDropdown")[0]
        this.button = document.getElementsByClassName("dropbtn")[0]
        this.projectsTypes = document.getElementsByClassName("project_collection")

        console.log(this.projectsTypes)

        this.about_btn = document.getElementById("manu_about")
        this.contact_btn = document.getElementById("manu_contact")
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

    }
}