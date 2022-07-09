import * as THREE from 'three'

/*
project material control
*/
export default class ProjectMatAssign {
    constructor() {

    }

    //based on project type, return a material with correspond color
    getMaterial(type) {
        const material = new THREE.MeshPhongMaterial({
            reflectivity: 0.9,
            shininess: 1,
            specular: 0xffffff,
        })
        if (type === "empty") {
            material.color.set(0xffffff)
        }
        else if (type === "computer_graphic") {
            material.color.set(0xE7670F)
        }
        else if (type === "architecture") {
            material.color.set(0xff00ff)
        }
        else if (type === "programing") {
            material.color.set(0xffff00)
        }
        else if (type === "product") {
            material.color.set(0x0000ff)
        }

        return material
    }
}