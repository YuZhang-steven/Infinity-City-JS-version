import * as THREE from 'three'
import Experience from '../Experience.js'
import { InteractionManager } from "three.interactive"

export default class Interactive {
    constructor() {
        this.experience = new Experience()
        this.camera = this.experience.camera.instance
        this.renderer = this.experience.renderer.instance
        this.domElement = this.renderer.domElement

        this.setInstance()
    }

    setInstance() {
        this.instance = new InteractionManager(
            this.renderer,
            this.camera,
            this.domElement
        )
    }
}