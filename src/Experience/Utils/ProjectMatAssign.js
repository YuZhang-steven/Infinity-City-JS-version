import * as THREE from 'three'
import Experience from '../Experience'

/*
project material control
*/
export default class ProjectMatAssign {
    constructor() {
        this.experience = new Experience()
        this.debug = this.experience.debug

        //material store
        this.material_projects = new Map()

        //product color setting
        this.basicColor = 0xffffff
        this.specialColor = 0xff0000
        this.cgColor = 0xE7670F
        this.archColor = 0xff00ff
        this.programingColor = 0xffff00
        this.productColor = 0x0000ff

        // Debug
        if (this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('projectMatiral')
            this.colorDebug()
        }

        this.setMap()
    }



    //based on project type, return a material with correspond color
    getMaterial(type) {
        const material = new THREE.MeshPhongMaterial({
            reflectivity: 0.9,
            shininess: 1,
            specular: this.basicColor,
            color: this.getColor(type)
        })
        this.material_projects.get(type).push(material)
        return material
    }

    //get the type corresbonding color
    getColor(type) {
        if (type === "empty") {
            return this.basicColor
        }
        if (type === "special") {
            return this.specialColor
        }
        else if (type === "computer_graphic") {
            return this.cgColor
        }
        else if (type === "architecture") {
            return this.archColor
        }
        else if (type === "programing") {
            return this.programingColor
        }
        else if (type === "product") {
            return this.productColor
        }
    }

    //set one type of project to have  type color and other types have basic color
    highLighting(type) {

        for (const item of this.material_projects.entries()) {
            //console.log(item)
            if (item[0] !== type) {
                for (let i of item[1]) {
                    i.color.set(this.basicColor)
                }
            } else {
                for (let i of item[1]) {
                    i.color.set(this.getColor(item[0]))
                }
            }
        }
    }

    setColorBack() {

        for (const item of this.material_projects.entries()) {

            for (let i of item[1]) {
                i.color.set(this.getColor(item[0]))
            }
        }
    }

    colorDebug() {
        const debugColor = {}
        debugColor.emptyColor = '#ffffff'
        debugColor.specialColor = '#ffffff'
        debugColor.computer_graphicColor = '#ffffff'
        debugColor.architectureColor = '#ffffff'
        debugColor.programingColor = '#ffffff'
        debugColor.productColor = '#ffffff'


        this.debugFolder
            .addColor(debugColor, 'specialColor')
            .onChange(() => {
                const change = this.material_projects.get("special")
                for (let i of change) {
                    i.color.set(debugColor.specialColor)
                }
            })
        this.debugFolder
            .addColor(debugColor, 'emptyColor')
            .onChange(() => {
                const change = this.material_projects.get("empty")
                for (let i of change) {
                    i.color.set(debugColor.emptyColor)
                }
            })
        this.debugFolder
            .addColor(debugColor, 'computer_graphicColor')
            .onChange(() => {
                const change = this.material_projects.get("computer_graphic")
                for (let i of change) {
                    i.color.set(debugColor.computer_graphicColor)
                }
            })
        this.debugFolder
            .addColor(debugColor, 'architectureColor')
            .onChange(() => {
                const change = this.material_projects.get("architecture")
                for (let i of change) {
                    i.color.set(debugColor.architectureColor)
                }
            })
        this.debugFolder
            .addColor(debugColor, 'programingColor')
            .onChange(() => {
                const change = this.material_projects.get("programing")
                for (let i of change) {
                    i.color.set(debugColor.programingColor)
                }
            })
        this.debugFolder
            .addColor(debugColor, 'productColor')
            .onChange(() => {
                const change = this.material_projects.get("product")
                for (let i of change) {
                    i.color.set(debugColor.productColor)
                }
            })
    }

    setMap() {
        this.material_projects.set("empty", new Array())
        this.material_projects.set("special", new Array())
        this.material_projects.set("computer_graphic", new Array())
        this.material_projects.set("architecture", new Array())
        this.material_projects.set("programing", new Array())
        this.material_projects.set("product", new Array())
    }
}