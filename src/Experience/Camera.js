import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.debug = this.experience.debug

        //infinity effect setting
        this.jumpConst = 4
        this.mergeConst = 2

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('camera')
        }

        this.setInstance()
        this.setControls()
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100)

        this.instance.position.set(4, 2, 0)
        this.scene.add(this.instance)
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
        this.controls.screenSpacePanning = false
        this.controls.maxPolarAngle = Math.PI / 2
        //this.controls.maxAzimuthAngle = 1.2 * Math.PI
        //this.controls.minAzimuthAngle = Math.PI
        //this.controls.target = new THREE.Vector3(2, 1, 1)

        //Debug
        if (this.debug.active) {
            this.debugFolder
                .add(this.controls, 'maxAzimuthAngle')
                .name('maxHorizontalRotate')
                .min(Math.PI)
                .max(2.5 * Math.PI)
                .step(0.2)

            this.debugFolder
                .add(this.controls, 'maxPolarAngle')
                .name('maxVerticalRotate')
                .min(Math.PI / 2)
                .max(2 * Math.PI)
                .step(0.2)
        }
    }

    //infinity effect jump back
    boundaryCheck() {
        /*check the control target, 
        if the x or z coordinator is out of the boundary setting(mergeConst)
        the camara location and target location jump back to another side
        the jump distace is defined by jumpconst
        */
        if (this.controls.target.x > this.mergeConst) {
            this.controls.target.x -= this.jumpConst
            this.instance.position.x -= this.jumpConst
        }
        if (this.controls.target.x < -this.mergeConst) {
            this.controls.target.x += this.jumpConst
            this.instance.position.x += this.jumpConst
        }
        if (this.controls.target.z > this.mergeConst) {
            this.controls.target.z -= this.jumpConst
            this.instance.position.z -= this.jumpConst
        }
        if (this.controls.target.z < -this.mergeConst) {
            this.controls.target.z += this.jumpConst
            this.instance.position.z += this.jumpConst
        }

    }

    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update() {
        //do boundarycheck every update to achive infinity effect
        //this.boundaryCheck()

        this.controls.update()
    }
}