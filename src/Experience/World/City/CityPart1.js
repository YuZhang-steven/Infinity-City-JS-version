import * as THREE from 'three'

import Experience from "../../Experience";
import LocationCalculation from '../../Utils/LocationCalculation';

export default class CityPart1 {
    constructor() {
        /* 
        Setup
        */

        //basic Information
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.locCal = new LocationCalculation()

        //instance copy information
        this.num_instances = 3
        this.center = new THREE.Vector3()

        //model file location
        this.cityModel = this.resources.items.cityPart1

        //texture file location
        this.roadTexture = this.resources.items.roadTexture1
        this.roadTexture.flipY = false
        this.roadTexture.encoding = THREE.sRGBEncoding

        this.cityTexture = this.resources.items.cityTexture1
        this.cityTexture.flipY = false
        this.cityTexture.encoding = THREE.sRGBEncoding

        //setting model call
        this.setModel()
    }

    /*
    Model setting function
    */
    setModel() {
        this.model = this.cityModel.scene

        //calculater the model center.
        let roadGeometry = this.model.getObjectByName('road01').geometry
        this.center.addVectors(roadGeometry.boundingBox.min, roadGeometry.boundingBox.max)
        this.center.multiplyScalar(0.5)

        //load material
        const cityMaterial = new THREE.MeshBasicMaterial({
            reflectivity: 0.01,
            map: this.cityTexture
        })

        const roadMaterial = new THREE.MeshBasicMaterial({
            reflectivity: 0.01,
            map: this.roadTexture
        })
        const waterMaterial = new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.8,
            color: 0x71cdff,
            reflectivity: 0.5,

        })

        //Array to save alll instances model
        this.instances = [];

        //traversing all model parts, creating instances and add material
        this.model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                //add material to different model part and create instance model
                if (child.name.startsWith("road") || child.name.startsWith("lot")) {
                    child.material = roadMaterial
                    this.modelInstance = new THREE.InstancedMesh(child.geometry, roadMaterial, this.num_instances)
                } else if (child.name.startsWith("water")) {
                    child.material = waterMaterial
                    this.modelInstance = new THREE.InstancedMesh(child.geometry, waterMaterial, this.num_instances)
                } else {
                    child.material = cityMaterial
                    this.modelInstance = new THREE.InstancedMesh(child.geometry, cityMaterial, this.num_instances)
                }
                //add instance to the scene
                this.scene.add(this.modelInstance)

                //calculate tranlation matrix
                let matricesArray = this.locCal.cal3Matrix(this.center)

                //add matrix to each instance
                for (let i = 0; i < this.num_instances; i++) {
                    this.modelInstance.setMatrixAt(i, matricesArray[i])
                }

                //marked change and add the instance model to the array
                this.modelInstance.instanceMatrix.needsUpdate = true;
                this.instances.push(this.modelInstance)

            }

        })

        //add the final non-instanced model to the scene
        this.scene.add(this.model)
    }
}