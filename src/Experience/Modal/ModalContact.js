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
         <p>yustevenzhang.info@gmail.com</p>
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
         <p>
         Hi, I am Yu Zhang(张钰). 
         I know my name is hard to pronounce, so I usually introduce myself as Steven. 
         First, thanks for waiting a long time for this website to load. 
         Some people would argue a website like this, is not effective to convey information or optimize performance from both design and engineering perspectives. 
         I agree. You can't wait 10s for Google to load your answer today. 
         However, just like me, I imagine you also have a dream to click and explore a miniature city. 
         I know it because I have seen so many adults fully focused on the models in the Lego shop and others have so much fun in Disney land. 
         So, I bet you don't mind waiting longer for this web toy to load.
         This is the way I approach design. Before finding the solutions to questions, always search for the possibility of questions.
         
         </p>
        `
        document.getElementById("selfintro").insertAdjacentHTML("beforeend", html)

        html = `
         <p>
        Trying to create something playful is my goal these years. 
        It is not easy to achieve normally. 
        Frequently, my art and design background will drag me to those elegant and eye-catching stereotypes. 
        They are everywhere in our daily life. 
        I guess the industry in the USA has already formed a system to produce those elegant designs in an efficient pipeline.
        But it is still hard to produce playful designs in the same efficient manner. 
        So, I decide to make my portfolio website like a toy I want to play with. 
         
         </p>
        `
        document.getElementById("selfintro").insertAdjacentHTML("beforeend", html)

        html = `
         <p>
         This website is not intended to show how good I am at coding or web design. 
         It is the first website I have made, so I don't think I can show high-level skills with those tools I used. 
         I like to try new tools and new media to express my idea. They really inspire me to think about design in a new dimension. 
         But in my opinion, showing a media or a tool should notbecome the only goal of any design(Yes, I read books by Robin Evans). 
         </p>
        `
        document.getElementById("selfintro").insertAdjacentHTML("beforeend", html)

        html = `
         <p>
         If you want to know about my experience or skills, you would directly click Linkedin; 
         if you want to know about my personal life, you will search my IG or Facebook. 
         Therefore, I decided to write something meaningful for people who would like to read, 
         rather than, wasting their time with those IG tag paragraphs. 
         Anyway, Free to contact me with any questions. 
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