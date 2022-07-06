import * as THREE from 'three'

import Experience from "../../Experience";
import LocationCalculation from '../../Utils/LocationCalculation';
export default class CityPart2 {
    constructor() {
        //Setup
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.locCal = new LocationCalculation()

        this.cityModel = this.resources.items.cityPart2
        this.waterModel = this.resources.items.water02

        this.num_instances = 3
        this.center = new THREE.Vector3()


        this.setModel()
    }

    setModel() {
        this.model = this.cityModel.scene
        this.water = this.waterModel.scene

        //calculater the model center.
        let roadGeometry = this.model.getObjectByName('road02').geometry
        this.center.addVectors(roadGeometry.boundingBox.min, roadGeometry.boundingBox.max)
        this.center.multiplyScalar(0.5)


        //load material
        const cityMaterial = new THREE.MeshBasicMaterial({
            reflectivity: 0.01,
        })

        const testMaterial = new THREE.MeshBasicMaterial({
            color: 0xFF0000,
            reflectivity: 0.01,
        })

        const waterMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.8,
            color: 0x71cdff,
            reflectivity: 0.5,

        })

        //Array to save alll instances model
        this.instances = [];

        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {

                child.material = cityMaterial
                this.modelInstance = new THREE.InstancedMesh(child.geometry, cityMaterial, this.num_instances)
                this.scene.add(this.modelInstance)

                let matricesArray = this.locCal.cal3Matrix(this.center)
                console.log(matricesArray)

                for (let i = 0; i < this.num_instances; i++) {
                    this.modelInstance.setMatrixAt(i, matricesArray[i])
                }

                this.modelInstance.instanceMatrix.needsUpdate = true;
                this.instances.push(this.modelInstance)

            }

        })


        this.water.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.material = waterMaterial

            }

        })


        this.scene.add(this.model, this.water)
        console.log(this.model)
    }
}