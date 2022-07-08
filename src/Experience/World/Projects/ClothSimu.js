import * as THREE from 'three'

import Experience from '../../Experience'
import LocationCalculation from '../../Utils/LocationCalculation'



export default class ClothSimu {
    constructor() {
        //basic Information
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.locCal = new LocationCalculation()
        this.time = this.experience.time
        this.interactionManager = this.experience.interactive.instance
        this.matAssign = this.experience.matAssign
        this.projectType = "computer_graphic"


        //instance copy information
        this.instances = []
        this.num_instances = 3
        this.center = new THREE.Vector3()

        //model file location
        this.projectModel = this.resources.items.clothSimu
        //console.log(this.projectModel)

        //setting model call
        this.setModel()
        this.setAnimation()
    }

    /*
    Model setting function
    */
    setModel() {
        this.model = this.projectModel.scene

        const material = this.matAssign.getMaterial(this.projectType)

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
                        event.target.material.color.set(0xffffff)
                        objectsHover.push(event.target)
                    }
                })
                child.addEventListener('mouseout', (event) => {
                    if (objectsHover.includes(event.target)) {
                        event.target.material.color.set(0x00ffff)
                        objectsHover.pop()
                    }
                })

                //add Event Listener to instance model
                this.interactionManager.add(this.modelInstance)

                this.modelInstance.addEventListener('mouseover', (event) => {
                    if (!objectsHover.includes(event.target)) {
                        event.target.material.color.set(0xffffff)
                        objectsHover.push(event.target)
                    }
                })
                this.modelInstance.addEventListener('mouseout', (event) => {
                    if (objectsHover.includes(event.target)) {
                        event.target.material.color.set(0x00ffff)
                        objectsHover.pop()
                    }
                })
            }

        })
        //add major model tohe scene
        this.scene.add(this.model)

    }
    setAnimation() {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        this.animation.action = this.animation.mixer.clipAction(this.projectModel.animations[0])
        this.animation.action.play()
    }
    update() {
        this.animation.mixer.update(this.time.delta * 0.0001)
    }
}