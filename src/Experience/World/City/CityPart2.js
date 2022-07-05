import * as THREE from 'three'

import Experience from "../../Experience";
export default class CityPart2 {
    constructor() {
        //Setup
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.cityModel = this.resources.items.cityPart2
        this.waterModel = this.resources.items.water02

        this.setModel()
    }

    setModel() {
        this.model = this.cityModel.scene
        this.water = this.waterModel.scene
        console.log(this.model)

        //load material
        const cityMaterial = new THREE.MeshBasicMaterial({
            reflectivity: 0.01,
        })

        const waterMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.8,
            color: 0x71cdff,
            reflectivity: 0.5,

        })

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = cityMaterial
            }

        })


        this.water.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = waterMaterial

            }

        })

        this.scene.add(this.model, this.land, this.water)
    }
}