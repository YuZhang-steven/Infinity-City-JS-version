import * as THREE from 'three'

import Experience from '../../Experience'
import LocationCalculation from '../../Utils/LocationCalculation'

/*
The prototype class for all projects

always override method:
 setBasicInfo()

Special Material override Methods:
 setMaterial()
 geoMatAdd(child)

 Animation Overrire Methods:
 setAnimation()
 loadAnimation()
*/
export default class Project {

    constructor() {
        //project information
        this.projectType = ""
        this.projectName = ''
        this.projectModel = null

        this.objectsHover = []
        this.materialList = []
        this.animationList = []

        //link to other objects
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

        //setting model call
        this.setBasicInfo()
        this.setMaterial()
        this.setModel()
        this.setAnimation()

        //setting direct link
        if (window.location.hash === this.projectName) {
            this.directLink()
        }

    }


    /*
   Setingthe unique information for every project, need to be overwrited
    */
    setBasicInfo() {
        this.projectType = ""
        this.projectName = ''
        this.projectModel = null
    }

    /*
    Model setting function
    */
    setModel() {
        //extract geometry from model file
        const model = this.projectModel.scene

        //traversal all geometry child
        model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                //add Material
                child.material = this.geoMatAdd(child)

                //create instance
                let modelInstance = new THREE.InstancedMesh(
                    child.geometry,
                    child.material,
                    this.num_instances
                )

                //add instance to the scene
                this.scene.add(modelInstance)

                //calculate tranlation matrix
                let matricesArray = this.locCal.cal3Matrix(child.position)


                //add matrix to each instance
                for (let i = 0; i < this.num_instances; i++) {
                    modelInstance.setMatrixAt(i, matricesArray[i])
                }

                //marked change and add the instance model to the array
                modelInstance.instanceMatrix.needsUpdate = true;
                this.instances.push(modelInstance)


                //set event lisener to instance and model
                this.setEvent(modelInstance, this.material.color.getHex())
                this.setEvent(child, this.material.color.getHex())
            }

        })

        //add major model tohe scene
        this.scene.add(model)
    }

    /*
     get the basic material for this project

     //neet to override with shader material
    */
    setMaterial() {
        //call material assignment function to get the right material and record the color information
        this.material = this.matAssign.getMaterial(this.projectType)
        this.materialList.push(this.material)
    }


    /*
    add Material to each geometry part of the model

    //neet to override with more than two material

    */
    geoMatAdd(child) {
        return this.material
    }


    /*
    add Event Listener to input child
    */
    setEvent(child, color_ori) {
        //add to eventManager
        this.interactionManager.add(child)

        //mouse move color change
        child.addEventListener('mouseover', (event) => {
            if (!this.objectsHover.includes(event.target)) {
                for (let mat of this.materialList) {
                    mat.color.set(this.matAssign.basicColor)
                }
                this.objectsHover.push(event.target)
            }
        })

        child.addEventListener('mouseout', (event) => {
            if (this.objectsHover.includes(event.target)) {
                for (let mat of this.materialList) {
                    mat.color.set(color_ori)
                }
                this.objectsHover.pop()
            }
        })

        //mouse click open the project page
        this.addClickEvent(child)
    }

    /*
   add Event Listener click show information
   */
    addClickEvent(child) {
        //mouse click open the project page
        child.addEventListener('mousedown', (event) => {
            if (this.objectsHover.includes(event.target)) {
                this.modalPage.setModal(this.projectName)
            }
        })
    }

    /*
    Setting animation, default is empty
    when the project have gltf animation, call loadAnimation()
    */
    setAnimation() {

    }

    loadAnimation() {


        let animation = {}
        animation.mixer = new THREE.AnimationMixer(this.projectModel.scene)
        animation.action = animation.mixer.clipAction(this.projectModel.animations[0])
        animation.action.play()
        this.animationList.push(animation)

    }

    /*
    Update function for animation
    */
    update() {
        this.animationList.forEach((item) => {
            item.mixer.update(this.time.delta * 0.0004)
        }
        )

    }

    /*
    set project info Page
    */
    directLink() {
        this.modalPage.setModal(this.projectName)
    }


}