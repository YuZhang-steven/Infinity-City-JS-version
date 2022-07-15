import * as THREE from 'three'


import sources from './sources.js'

import Debug from './Utils/Debug.js'
import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'
import Interactive from './Utils/Interactive.js'
import ProjectMatAssign from './Utils/ProjectMatAssign.js'
import Modal from './Modal/Modal.js'
import ProjectPath from './Utils/path.js'
import LoadingPage from './World/others/LoadingPage.js'
import DropdownManu from './World/others/DropdownManu.js'

let instance = null

export default class Experience {
    constructor(_canvas) {
        // Singleton
        if (instance) {
            return instance
        }
        instance = this

        // Global access
        window.experience = this

        // Options
        this.canvas = _canvas

        //loading page
        this.loadPage = new LoadingPage()

        //dropdownManu
        this.dropdownManu = new DropdownManu()

        // Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.interactive = new Interactive()
        this.matAssign = new ProjectMatAssign()
        this.projectPath = new ProjectPath()



        this.world = new World()
        this.modalPage = new Modal()
        //console.log(this.matAssign.material_projects)

        //loading ready event
        this.resources.on('ready', () => {
            this.loadPage.loadReady()
        })

        // Resize event
        this.sizes.on('resize', () => {
            this.resize()
        })

        // Time tick event
        this.time.on('tick', () => {
            this.update()
        })
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update()
        this.world.update()
        this.interactive.update()
        this.renderer.update()

    }

    destroy() {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        this.scene.traverse((child) => {
            // Test if it's a mesh
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose()

                // Loop through the material properties
                for (const key in child.material) {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if (value && typeof value.dispose === 'function') {
                        value.dispose()
                    }
                }
            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if (this.debug.active)
            this.debug.ui.destroy()
    }
}