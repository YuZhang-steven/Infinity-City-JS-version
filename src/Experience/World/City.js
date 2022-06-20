import * as THREE from 'three'

import Experience from "../Experience";
export default class City {
    constructor() {
        //Setup
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.ExportTest

        this.material = this.resources.items.cityTexture
        this.material.flipY = false
        this.material.encoding = THREE.sRGBEncoding

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        //console.log(this.model)

        //load material
        const bakedMaterial = new THREE.MeshBasicMaterial({

            reflectivity: 0.1,

            map: this.material
        })

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.nor
                child.material = bakedMaterial
            }

        })

        this.scene.add(this.model)
    }
}