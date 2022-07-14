import * as THREE from 'three'

/*
project material control
*/
export default class ProjectMatAssign {
    constructor() {
        //material store
        this.material_projects = new Map()

        //product color setting
        this.basicColor = 0xffffff
        this.cgColor = 0xE7670F
        this.archColor = 0xff00ff
        this.programingColor = 0xffff00
        this.productColor = 0x0000ff


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
        for (let key in this.material_projects) {
            if (key !== type) {
                for (let i in this.material_projects[key]) {
                    i.color.set(this.basicColor)
                }
            } else {
                for (let i in this.material_projects[key]) {
                    i.color.set(this.getColor(key))
                }
            }
        }
    }

    setColorBack() {
        for (let key in this.material_projects) {

            for (let i in this.material_projects[key]) {
                i.color.set(this.getColor(key))
            }
        }
    }


    setMap() {
        this.material_projects.set("empty", new Array())
        this.material_projects.set("computer_graphic", new Array())
        this.material_projects.set("architecture", new Array())
        this.material_projects.set("programing", new Array())
        this.material_projects.set("product", new Array())
    }
}