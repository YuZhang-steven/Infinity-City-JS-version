import * as THREE from 'three'

import Experience from '../../Experience'
import LocationCalculation from '../../Utils/LocationCalculation'



export default class meshEditor {
    constructor() {
        //basic Information
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.locCal = new LocationCalculation()
        this.time = this.experience.time
        this.interactionManager = this.experience.interactive.instance
        this.matAssign = this.experience.matAssign
        this.projectType = "computer_graphic"
        this.modalPage = this.experience.modalPage

        //shader uniforms
        this.customUniform = {
            uTime: { value: 0 }
        }


        //instance copy information
        this.instances = []
        this.num_instances = 3
        this.center = new THREE.Vector3()

        //model file location
        this.projectModel = this.resources.items.meshEditor
        //console.log(this.projectModel)

        //setting model call
        this.setModel()
        //this.setAnimation()
    }

    /*
    Model setting function
    */
    setModel() {
        this.model = this.projectModel.scene

        //call material assignment function to get the right material and record the color information
        const material = this.matAssign.getMaterial(this.projectType)
        const color_ori = material.color.getHex()

        //change shader parameters for animation 
        const material_cube = this.matAssign.getMaterial(this.projectType)


        material_cube.onBeforeCompile = (shader) => {
            //console.log(shader.uniforms)
            shader.uniforms.uTime = this.customUniform.uTime
            shader.vertexShader = shader.vertexShader.replace(
                '#include <common>',
                `
                    #include <common>

                    uniform float uTime;

                    mat2 get2dRotationMatrix(float _angle){
                        return mat2(cos(_angle), -sin(_angle), sin(_angle), cos(_angle));
                    }
                `

            )
            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                `
                    #include <begin_vertex>

                    float angle = sin(position.y * uTime) * 0.6 + uTime * 0.02;
                    mat2 rotateMatrix = get2dRotationMatrix(angle);

                    transformed.xz = rotateMatrix * transformed.xz;

                `

            )


            //console.log(shader.vertexShader)
        }


        //event manager monitor array:check if the object already in a event situation
        let objectsHover = []

        this.model.traverse((child) => {
            //console.log(child)
            if (child instanceof THREE.Mesh) {
                //add Material
                if (child.name.startsWith("Cube")) {
                    child.material = material_cube
                }
                else {
                    child.material = material
                }

                //create instance
                this.modelInstance = new THREE.InstancedMesh(child.geometry, child.material, this.num_instances)

                //add instance to the scene
                this.scene.add(this.modelInstance)

                //calculate tranlation matrix
                let matricesArray = this.locCal.cal3Matrix(child.position)

                //add matrix to each instance
                for (let i = 0; i < this.num_instances; i++) {
                    this.modelInstance.setMatrixAt(i, matricesArray[i])
                }

                //marked change and add the instance model to the array
                this.modelInstance.instanceMatrix.needsUpdate = true;
                this.instances.push(this.modelInstance)

                //add Event Listener to major model
                this.interactionManager.add(child)

                child.addEventListener('mouseover', (event) => {
                    if (!objectsHover.includes(event.target)) {
                        material.color.set(0xffffff)
                        material_cube.color.set(0xffffff)
                        objectsHover.push(event.target)
                    }
                })
                child.addEventListener('mouseout', (event) => {
                    if (objectsHover.includes(event.target)) {
                        material.color.set(color_ori)
                        material_cube.color.set(color_ori)
                        objectsHover.pop()
                    }
                })
                child.addEventListener('mousedown', (event) => {
                    if (objectsHover.includes(event.target)) {
                        this.modalPage.setModal()
                    }
                })

            }

        })
        //add major model tohe scene
        this.scene.add(this.model)

    }
    setAnimation() {
        this.animation = {}
        this.animation.mixer = new THREE.AnimationMixer(this.model)
        this.animation.action = this.animation.mixer.clipAction(this.projectModel.animations[0])
        this.animation.action.play()
    }
    update() {
        this.customUniform.uTime.value = this.time.elapsed * 0.01
        //this.animation.mixer.update(this.time.delta * 0.0001)
    }
}