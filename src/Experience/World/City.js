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
        this.waterModel = this.resources.items.water01

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
        this.water = this.waterModel.scene
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
        const waterMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.7,
            color: 0x71cdff,
            reflectivity: 0.7,

        })

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = bakedMaterial01
            }

        })

        this.land.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = bakedMaterial02
            }

        })
        this.water.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = waterMaterial
                //child.position.z += 0.1
            }

        })

        this.scene.add(this.model, this.land, this.water)
    }
}