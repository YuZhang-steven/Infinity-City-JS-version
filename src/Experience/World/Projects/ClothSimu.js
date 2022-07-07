import * as THREE from 'three'

import Experience from '../../Experience'
import LocationCalculation from '../../Utils/LocationCalculation'
import LocationCalculationPJ from '../../Utils/LocationCalculationPJ'


export default class ClothSimu {
    constructor() {
        //basic Information
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.locCal = new LocationCalculationPJ()
        this.time = this.experience.time
        this.interactionManager = this.experience.interactive.instance
        this.matAssign = this.experience.matAssign
        this.projectType = "computer_graphic"


        //instance copy information
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
        //console.log(this.model)


        const material = this.matAssign.getMaterial(this.projectType)
        //console.log(material)

        //Array to save alll instances model
        this.instances = [];

        //event manager monitor array:check if the object already in a event situation
        let objectsHover = [];

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                //add Material
                child.material = material
                this.modelInstance = new THREE.InstancedMesh(child.geometry, material, this.num_instances)

                //add instance to the scene
                this.scene.add(this.modelInstance)

                console.log(child)

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
        this.scene.add(this.model)

    }
    setAnimation() {
        this.animation = {}

        // this.animation.mixer01 = new THREE.AnimationMixer(this.modelInstance)
        // this.animation.action01 = this.animation.mixer01.clipAction(this.projectModel.animations[0])
        // this.animation.action01.play()

        this.animation.mixer02 = new THREE.AnimationMixer(this.model)
        this.animation.action02 = this.animation.mixer02.clipAction(this.projectModel.animations[0])
        this.animation.action02.play()
    }
    update() {
        // this.animation.mixer01.update(this.time.delta * 0.0001)
        this.animation.mixer02.update(this.time.delta * 0.0001)
    }
}