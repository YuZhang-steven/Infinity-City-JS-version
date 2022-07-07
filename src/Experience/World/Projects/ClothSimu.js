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
        console.log(material)

        this.model.traverse((child) => {
            //add Material
            child.material = material
        })
        this.scene.add(this.model)

    }
    setAnimation() {

    }
}