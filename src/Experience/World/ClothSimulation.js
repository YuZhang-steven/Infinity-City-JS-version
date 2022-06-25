import * as THREE from 'three'
import Experience from '../Experience.js'

export default class clothSimulation {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time

        // Resource
        this.resource = this.resources.items.clothSimulation

        this.setModel()
        this.setAnimation()
    }

    setModel() {
        this.model = this.resource.scene
        this.model.scale.set(0.02, 0.02, 0.02)


        this.scene.add(this.model)
        /*
          this.model.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                  //child.material.shading = THREE.SmoothShading
                  child.castShadow = true
              }
          })
          */
    }

    setAnimation() {
        this.animation = {}

        // Mixer
        this.animation.mixer = new THREE.AnimationMixer(this.model)

        // Actions
        this.animation.actions = this.animation.mixer.clipAction(this.resource.animations[0])
        this.animation.actions.play()

    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.001)
    }
}