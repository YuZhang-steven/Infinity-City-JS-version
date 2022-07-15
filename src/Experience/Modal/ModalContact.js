import Experience from "../Experience"

export default class ModalContact {
    constructor() {
        this.experience = new Experience()
        this.path = this.experience.projectPath

        this.modal = document.getElementsByClassName("modal")[0]
        this.closebutton = document.getElementById("model_close")
        this.bigBox = document.getElementById("slides_box")

    }
    setModal() {
        //this.bigBox.style.flexDirection = "row"
        document.getElementById("slidewithbutton").style.display = "none"
        this.imageCollection = this.path.get("about")

        let html = `<div id="about_box">
         <div id="selfandcontact">
                <div id="photo1"></div>
                <div id="mail1"></div>
                <div id="social1"></div>
         </div>
         <div id="selfintro"></div>
         </div>
        
        `

        this.bigBox.insertAdjacentHTML("beforeend", html)

        //insert photo
        html = `
         <img src=${this.imageCollection[0].path} style="width:200px;object-fit: scale-down;">
        `
        document.getElementById("photo1").insertAdjacentHTML("beforeend", html)

        //insert Email
        html = `
         <p>yustevenzhang@gmail.com</p>
        `
        document.getElementById("mail1").insertAdjacentHTML("beforeend", html)

        //add linkedin link
        html = `
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sz0616/"><img src=${this.imageCollection[4].path}  style="width:36px;height:36px;"></a>
        `
        document.getElementById("social1").insertAdjacentHTML("beforeend", html)

        //add IG link
        html = `
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/irrelevantthin/"><img src=${this.imageCollection[2].path}  style="width:36px;height:36px;"></a>
        `
        document.getElementById("social1").insertAdjacentHTML("beforeend", html)

        //add github link
        html = `
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/YuZhang-steven"><img src=${this.imageCollection[3].path}  style="width:36px;height:36px;"></a>
        `
        document.getElementById("social1").insertAdjacentHTML("beforeend", html)

        //add anti wechat link
        html = `
        <a target="_blank" rel="noopener noreferrer" 
        href="https://www.google.com/search?q=Why+you+should+not+use+WeChat"><img src=${this.imageCollection[1].path}  style="width:36px;height:36px;"></a>
        `
        document.getElementById("social1").insertAdjacentHTML("beforeend", html)

        //insert self intro
        html = `
         <p>I am Steven Zhang. First: Thanks for waiting long time for this website loading. 
         
         </p>
        `
        document.getElementById("selfintro").insertAdjacentHTML("beforeend", html)

        this.modal.classList.add("show")

        //add closebutton event
        this.closeTrigger()
    }
    closeTrigger() {
        this.closebutton.onclick = () => {
            //unshow modal page
            this.modal.classList.remove("show")

            //delete all information
            //this.bigBox.style.flexDirection = "column"
            document.getElementById("selfintro").remove()
            document.getElementById("selfandcontact").remove()

            document.getElementById("slidewithbutton").style.display = "flex"
        }
    }
}