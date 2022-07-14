import '../../../static/projects/meshEditor/meshEditor001.PNG'
import '../../../static/projects/meshEditor/meshEditor002.PNG'
import '../../../static/projects/meshEditor/meshEditor003.PNG'
import '../../../static/projects/meshEditor/meshEditor004.PNG'
import '../../../static/projects/meshEditor/meshEditor005.PNG'

import '../../../static/projects/clothSimulation/clothSimulation001.PNG'
import '../../../static/projects/clothSimulation/clothSimulation002.PNG'
import '../../../static/projects/clothSimulation/clothSimulation003.PNG'
import '../../../static/projects/clothSimulation/clothSimulation004.PNG'
import '../../../static/projects/clothSimulation/clothSimulation005.PNG'
import '../../../static/projects/clothSimulation/clothSimulation006.PNG'
import '../../../static/projects/clothSimulation/clothSimulation007.PNG'



export default class ProjectPath {
    constructor() {
        this.pathMap = new Map()
        this.addAllPath()
    }
    add(name, paths) {
        this.pathMap.set(name, paths)
    }
    get(name) {
        return this.pathMap.get(name)
    }
    addAllPath() {
        this.pathMap.set(
            "meshEditorImg",
            [
                {
                    name: 'Curve01',
                    type: 'picture',
                    path: '/assets/img/meshEditor001.PNG'
                },
                {
                    name: 'picture03',
                    type: 'picture',
                    path: '/assets/img/meshEditor002.PNG'
                }, {
                    name: 'picture04',
                    type: 'picture',
                    path: '/assets/img/meshEditor003.PNG'
                },
                {
                    name: 'picture05',
                    type: 'picture',
                    path: '/assets/img/meshEditor004.PNG'
                }, {
                    name: 'picture06',
                    type: 'picture',
                    path: '/assets/img/meshEditor005.PNG'
                },

            ]
        )
        this.pathMap.set(
            "meshEditorText", [
            {
                type: "name",
                text: "Mesh Editor"
            },
            {
                type: "intro",
                text: "We implement an editor with can show and change the Bezier Curves and Mesh Geometry. We use de Castelijau to represent Bezier curves and also Bezier surfaces. We also use a half-edge structure to store and manipulate the mesh. Through loop subdivision with flipping and splitting edges, the editor can upsample the meshed to get a smoother surface."
            },
            {
                type: "type",
                text: "Computer Graphic"
            },
        ]
        )
        this.pathMap.set(
            "clothSimulationImg",
            [
                {
                    name: 'Curve01',
                    type: 'picture',
                    path: '/assets/img/clothSimulation001.PNG'
                },
                {
                    name: 'picture03',
                    type: 'picture',
                    path: '/assets/img/clothSimulation002.PNG'
                }, {
                    name: 'picture04',
                    type: 'picture',
                    path: '/assets/img/clothSimulation003.PNG'
                },
                {
                    name: 'picture05',
                    type: 'picture',
                    path: '/assets/img/clothSimulation004.PNG'
                }, {
                    name: 'picture06',
                    type: 'picture',
                    path: '/assets/img/clothSimulation005.PNG'
                }, {
                    name: 'picture07',
                    type: 'picture',
                    path: '/assets/img/clothSimulation006.PNG'
                }, {
                    name: 'picture08',
                    type: 'picture',
                    path: '/assets/img/clothSimulation007.PNG'
                },

            ]
        )
        this.pathMap.set(
            "clothSimulationText", [
            {
                type: "name",
                text: "CLOTH SIMULATION"
            },
            {
                type: "intro",
                text: "In this project, I implement a simulation system to simulate the movement of cloth. The system represent cloth as a grid that was composed with point mass and also springs. The system itself also includes gravity, friction, the other collide geometries and also self-collision on the cloth. I also add some basic shades for the geometries using GLSL shader programs, so the simulation scene can render materials real time. "
            },
            {
                type: "type",
                text: "Computer Graphic"
            },
        ]
        )
    }


}
