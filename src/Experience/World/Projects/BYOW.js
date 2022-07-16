import * as THREE from 'three'

import Experience from '../../Experience'
import LocationCalculation from '../../Utils/LocationCalculation'



export default class BYOW {
    constructor() {
        //project information
        this.projectType = "programing"
        this.projectName = "BYOW"

        //basic Information
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.locCal = new LocationCalculation()
        this.time = this.experience.time
        this.interactionManager = this.experience.interactive.instance
        this.matAssign = this.experience.matAssign
        this.modalPage = this.experience.modalPage


        //instance copy information
        this.instances = []
        this.num_instances = 3
        this.center = new THREE.Vector3()

        //model file location
        this.projectModel = this.resources.items.BYOW

        //setting model call
        this.setModel()
        this.setAnimation()
    }

    /*
    Model setting function
    */
    setModel() {
        this.model = this.projectModel.scene

        //call material assignment function to get the right material and record the color information
        const material = this.matAssign.getMaterial(this.projectType)
        const color_ori = material.color.getHex()


        //event manager monitor array:check if the object already in a event situation
        let objectsHover = []

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                //add Material
                child.material = material

                //create instance
                this.modelInstance = new THREE.InstancedMesh(child.geometry, material, this.num_instances)

                //add instance to the scene
                this.scene.add(this.modelInstance)

                //calculate tranlation matrix
                let matricesArray = this.locCal.cal3Matrix(child.position)

                //add matrix to each instance
                for (let i = 0; i < this.num_instances; i++) {
                    this.modelInstance.setMatrixAt(i, matricesArray[i])
                }

                //marked change and add the instance model to the array
                this.modelInstance.instanceMatrix.needsUpdate = true;
                this.instances.push(this.modelInstance)

                //add Event Listener to major model
                this.interactionManager.add(child)

                child.addEventListener('mouseover', (event) => {

                    if (!objectsHover.includes(event.target)) {
                        material.color.set(0xffffff)
                        objectsHover.push(event.target)
                    }
                })
                child.addEventListener('mouseout', (event) => {
                    if (objectsHover.includes(event.target)) {
                        material.color.set(color_ori)
                        objectsHover.pop()
                    }
                })
                child.addEventListener('mousedown', (event) => {
                    if (objectsHover.includes(event.target)) {
                        this.modalPage.setModal(this.projectName)
                    }
                })


            }

        })
        //add major model tohe scene
        this.scene.add(this.model)

    }
    setAnimation() {
        this.animation = {}
        this.animation.mixer01 = new THREE.AnimationMixer()
        this.animation.mixer02 = new THREE.AnimationMixer()
        this.animation.mixer03 = new THREE.AnimationMixer()
        this.animation.mixer04 = new THREE.AnimationMixer()
        this.animation.action01 = this.animation.mixer01.clipAction(this.projectModel.animations[0], this.model.children[0])
        this.animation.action02 = this.animation.mixer02.clipAction(this.projectModel.animations[1], this.model.children[1])
        this.animation.action03 = this.animation.mixer03.clipAction(this.projectModel.animations[2], this.model.children[2])
        this.animation.action04 = this.animation.mixer04.clipAction(this.projectModel.animations[3], this.model.children[3])
        this.animation.action01.play()
        this.animation.action02.play()
        this.animation.action03.play()
        this.animation.action04.play()
    }
    update() {
        this.animation.mixer01.update(this.time.delta * 0.0004)
        this.animation.mixer02.update(this.time.delta * 0.0004)
        this.animation.mixer03.update(this.time.delta * 0.0004)
        this.animation.mixer04.update(this.time.delta * 0.0004)
    }
}