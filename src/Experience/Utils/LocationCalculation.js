import * as THREE from 'three'

/*
Calculate location matrix for instanceMesh.

*/
export default class LocationCalculationPJ {
    constructor() {

    }

    /*
    input original model matrix

    extract location(position) from matrix
    determine the 3 right locations for instances

    export transpotation matrix
     */

    cal3Matrix(position) {
        let offset_num = 6

        //save all three matrices in a array
        let matrices = []


        if (position.x > 0 && position.z > 0) {

            let positionNew01 = new THREE.Vector3(position.x - 0.0 * offset_num, position.y, position.z - 2 * offset_num)
            let matrixNew01 = new THREE.Matrix4()

            matrixNew01.setPosition(positionNew01)
            matrices.push(matrixNew01)

            let positionNew02 = new THREE.Vector3(position.x - 2 * offset_num, position.y, position.z - 0 * offset_num)
            let matrixNew02 = new THREE.Matrix4()
            matrixNew02.setPosition(positionNew02)
            matrices.push(matrixNew02)

            let positionNew03 = new THREE.Vector3(position.x - 2 * offset_num, position.y, position.z - 2 * offset_num)
            let matrixNew03 = new THREE.Matrix4()
            matrixNew03.setPosition(positionNew03)
            matrices.push(matrixNew03)


        } else if (position.x > 0 && position.z < 0) {
            let positionNew01 = new THREE.Vector3(position.x - 2 * offset_num, position.y, position.z + 0 * offset_num)
            let matrixNew01 = new THREE.Matrix4()
            matrixNew01.setPosition(positionNew01)
            matrices.push(matrixNew01)

            let positionNew02 = new THREE.Vector3(position.x - 0 * offset_num, position.y, position.z + 2 * offset_num)
            let matrixNew02 = new THREE.Matrix4()
            matrixNew02.setPosition(positionNew02)
            matrices.push(matrixNew02)

            let positionNew03 = new THREE.Vector3(position.x - 2 * offset_num, position.y, position.z + 2 * offset_num)
            let matrixNew03 = new THREE.Matrix4()
            matrixNew03.setPosition(positionNew03)
            matrices.push(matrixNew03)

        } else if (position.x < 0 && position.z < 0) {
            let positionNew01 = new THREE.Vector3(position.x + 2 * offset_num, position.y, position.z + 0 * offset_num)
            let matrixNew01 = new THREE.Matrix4()
            matrixNew01.setPosition(positionNew01)
            matrices.push(matrixNew01)

            let positionNew02 = new THREE.Vector3(position.x + 0 * offset_num, position.y, position.z + 2 * offset_num)
            let matrixNew02 = new THREE.Matrix4()
            matrixNew02.setPosition(positionNew02)
            matrices.push(matrixNew02)

            let positionNew03 = new THREE.Vector3(position.x + 2 * offset_num, position.y, position.z + 2 * offset_num)
            let matrixNew03 = new THREE.Matrix4()
            matrixNew03.setPosition(positionNew03)
            matrices.push(matrixNew03)


        } else if (position.x < 0 && position.z > 0) {
            let positionNew01 = new THREE.Vector3(position.x + 2 * offset_num, position.y, position.z - 0 * offset_num)
            let matrixNew01 = new THREE.Matrix4()
            matrixNew01.setPosition(positionNew01)
            matrices.push(matrixNew01)

            let positionNew02 = new THREE.Vector3(position.x + 0 * offset_num, position.y, position.z - 2 * offset_num)
            let matrixNew02 = new THREE.Matrix4()
            matrixNew02.setPosition(positionNew02)
            matrices.push(matrixNew02)

            let positionNew03 = new THREE.Vector3(position.x + 2 * offset_num, position.y, position.z - 2 * offset_num)
            let matrixNew03 = new THREE.Matrix4()
            matrixNew03.setPosition(positionNew03)
            matrices.push(matrixNew03)

        }


        return matrices

    }
}