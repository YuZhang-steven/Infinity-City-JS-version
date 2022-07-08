import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Fog {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Fog')
        }
        this.setFog()

    }

    setFog() {

        const color = 0xFFFFFF
        const near = 6
        const far = 8

        this.scene.fog = new THREE.Fog(color, near, far)
        this.scene.background = new THREE.Color(color)

        // Debug
        if (this.debug.active) {
            const debugColor = {}
            debugColor.fogColor = '#ffffff'

            this.debugFolder
                .add(this.scene.fog, 'near')
                .name('near')
                .min(0)
                .max(8)
                .step(0.001)

            this.debugFolder
                .add(this.scene.fog, 'far')
                .name('far')
                .min(0)
                .max(20)
                .step(0.001)

            this.debugFolder
                .addColor(debugColor, 'fogColor')
                .onChange(() => {
                    let newColor = new THREE.Color(debugColor.fogColor)

                    this.scene.fog.color = newColor
                    this.scene.background = newColor
                })


        }
    }
}