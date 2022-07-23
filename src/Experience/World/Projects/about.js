import Project from "./Project";

export default class About extends Project {
    setBasicInfo() {
        this.projectType = "special"
        this.projectName = 'about'
        this.projectModel = this.resources.items.about
    }

    /*
    direct link create different modal
    */

    directLink() {
        this.experience.aboutPage.setModal()
    }

    /*
    event lisener create different modal
    */
    addClickEvent(child) {
        //mouse click open the project page
        child.addEventListener('mousedown', (event) => {
            if (this.objectsHover.includes(event.target)) {
                this.experience.aboutPage.setModal()
            }
        })
    }
}