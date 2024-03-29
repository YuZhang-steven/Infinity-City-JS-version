import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Lighting {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Lighting')
        }
        this.setAmbientLight()
        this.setSunLight()
        this.setEnvironmentMap()
    }

    //initiate ambient light
    setAmbientLight() {
        this.ambientLight = new THREE.AmbientLight(0xffffff, 1.5)
        this.scene.add(this.ambientLight)

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.ambientLight, 'intensity')
                .name('ambientLight')
                .min(0)
                .max(4)
                .step(0.001)

        }
    }

    setSunLight() {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 3.5)
        this.sunLight.castShadow = false
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(-0.5, 0.5, - 1)
        this.scene.add(this.sunLight)

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.sunLight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'x')
                .name('sunLightX')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'y')
                .name('sunLightY')
                .min(- 5)
                .max(5)
                .step(0.001)

            this.debugFolder
                .add(this.sunLight.position, 'z')
                .name('sunLightZ')
                .min(- 5)
                .max(5)
                .step(0.001)
        }
    }

    setEnvironmentMap() {
        this.environmentMap = {}
        this.environmentMap.intensity = 2
        this.environmentMap.texture = this.resources.items.hdr_background
        this.environmentMap.texture.mapping = THREE.EquirectangularReflectionMapping

        //this.environmentMap.texture = this.resources.items.environmentMapTexture
        //this.environmentMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.environmentMap.texture
        //this.scene.background = this.environmentMap.texture

        this.environmentMap.updateMaterials = () => {
            this.scene.traverse((child) => {
                if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshBasicMaterial) {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
                else if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshPhongMaterial) {
                    child.material.envMap = this.environmentMap.texture
                    child.material.envMapIntensity = this.environmentMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }
        this.environmentMap.updateMaterials()

        // Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.environmentMap, 'intensity')
                .name('envMapIntensity')
                .min(0)
                .max(4)
                .step(0.001)
                .onChange(this.environmentMap.updateMaterials)
        }
    }
}