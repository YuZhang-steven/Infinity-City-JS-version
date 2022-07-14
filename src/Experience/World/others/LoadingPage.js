import { gsap } from 'gsap'

import Experience from '../../Experience'

export default class LoadingPage {
    constructor() {
        this.experience = new Experience()
        this.loadingBoard = document.getElementById("loading_page")
        this.loadingBar = document.getElementById("loading_bar")

        this.set()
    }

    //initial loading page
    set() {

    }

    //during loading change call this funtion
    loadProgress(ratio) {
        this.loadingBar.style.transform = `scaleX(${ratio})`
    }

    //after loading ready call this function
    loadReady() {
        gsap.to("#loading_page", { "opacity": 0, duration: 3 })
        gsap.to(this.experience.camera.instance.position, { y: 1, duration: 4 })
        setTimeout(() => {
            this.loadingBoard.innerHTML = ""
        }, 3000);




    }

}