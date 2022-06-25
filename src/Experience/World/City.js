import * as THREE from 'three'

import Experience from "../Experience";
export default class City {
    constructor() {
        //Setup
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resource = this.resources.items.ExportTest
        this.landModel = this.resources.items.Land01

        this.landMaterial = this.resources.items.landTexture
        this.landMaterial.flipY = false
        this.landMaterial.encoding = THREE.sRGBEncoding

        this.material = this.resources.items.cityTexture
        this.material.flipY = false
        this.material.encoding = THREE.sRGBEncoding

        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.land = this.landModel.scene
        //console.log(this.model)

        //load material
        const bakedMaterial01 = new THREE.MeshBasicMaterial({

            reflectivity: 0.01,
            map: this.material
        })

        const bakedMaterial02 = new THREE.MeshBasicMaterial({
            reflectivity: 0.01,
            map: this.landMaterial
        })

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.nor
                child.material = bakedMaterial01
            }

        })

        this.land.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.nor
                child.material = bakedMaterial02
            }

        })

        this.scene.add(this.model, this.land)
    }
}