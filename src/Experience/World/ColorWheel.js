import * as THREE from 'three'
import Experience from "../Experience";

export default class ColorWheel {
    constructor() {
        //Setup
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.interactionManager = this.experience.interactive.instance


        this.resource = this.resources.items.colorWheel

        this.setModel()
        this.setAnimation()

    }

    //model initiate
    setModel() {
        //load model address
        this.model = this.resource.scene

        //add event control
        this.model.addEvent

        //Setting Material
        const material = new THREE.MeshPhongMaterial({

            color: 0x00ffff,
            reflectivity: 0.9,
            shininess: 1,


        })


        //event manager monitor array:chech if the object already in a event situation
        let objectsHover = [];

        this.model.traverse((child) => {
            //add Material
            child.material = material



            //add Event Listener
            this.interactionManager.add(child)

            child.addEventListener('mouseover', (event) => {
                if (!objectsHover.includes(event.target)) {
                    event.target.material.color.set(0x0000ff)
                    objectsHover.push(event.target)
                }
            })
            child.addEventListener('mouseout', (event) => {
                if (objectsHover.includes(event.target)) {
                    event.target.material.color.set(0x00ffff)
                    objectsHover.pop(event.target)
                }
            })



            //child.material.flatShading = false
        })

        this.scene.add(this.model)
        //console.log(this.model)
    }

    //loading Animation in model
    setAnimation() {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        this.animation.action = this.animation.mixer.clipAction(this.resource.animations[0])
        this.animation.action.play()


    }

    update() {
        this.animation.mixer.update(this.time.delta * 0.0001)
    }
}