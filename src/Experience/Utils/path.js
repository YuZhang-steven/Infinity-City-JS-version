import '../../../static/projects/meshEditor/meshEditor001.PNG'
import '../../../static/projects/meshEditor/meshEditor002.PNG'
import '../../../static/projects/meshEditor/meshEditor003.PNG'
import '../../../static/projects/meshEditor/meshEditor004.PNG'
import '../../../static/projects/meshEditor/meshEditor005.PNG'

import '../../../static/projects/clothSimulation/clothSimulation001.PNG'
import '../../../static/projects/clothSimulation/clothSimulation002.jpg'
import '../../../static/projects/clothSimulation/clothSimulation003.jpg'
import '../../../static/projects/clothSimulation/clothSimulation004.jpg'
import '../../../static/projects/clothSimulation/clothSimulation005.jpg'
import '../../../static/projects/clothSimulation/clothSimulation006.jpg'


import '../../../static/others/photos1.jpg'
import '../../../static/others/anti-wechat-50.png'
import '../../../static/others/github-50.png'
import '../../../static/others/instagram-50.png'
import '../../../static/others/linkedin-50.png'

import '../../../static/others/frontPage.jpg'
import '../../../static/others/Zi16x16.png'
import '../../../static/others/Zi32x32.png'



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
                    name: 'Fabric with Wind',
                    type: 'picture',
                    path: '/assets/img/clothSimulation001.PNG'
                },
                {
                    name: 'Cloth Structure System',
                    type: 'picture',
                    path: '/assets/img/clothSimulation002.jpg'
                },
                {
                    name: 'Gravity Simulation via Numerical Integration',
                    type: 'picture',
                    path: '/assets/img/clothSimulation003.jpg'
                },
                {
                    name: 'Collision with Other Geometries',
                    type: 'picture',
                    path: '/assets/img/clothSimulation004.jpg'
                }, {
                    name: 'Shader System',
                    type: 'picture',
                    path: '/assets/img/clothSimulation005.jpg'
                }, {
                    name: 'Wind Simulation',
                    type: 'picture',
                    path: '/assets/img/clothSimulation006.jpg'
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
                text: "A C++ simulation system to simulate the movement of the cloth. The system represents cloth as grids with the mass on each point and spring on each line. The system can simulate gravity, friction, and collisions with other geometries. There are also basic shaders coded with GLSL to allow the simulation scene to be rendered in real-time. "
            },
            {
                type: "type",
                text: "Computer Graphic"
            },
        ]
        )
        this.pathMap.set(
            "about", [
            {
                type: "photo",
                text: "photo1",
                path: '/assets/img/photos1.jpg'
            },
            {
                name: 'anti_wechat',
                type: 'icon',
                path: '/assets/img/anti-wechat-50.png'
            },
            {
                name: 'instagram',
                type: 'icon',
                path: '/assets/img/instagram-50.png'
            },
            {
                name: 'github',
                type: 'icon',
                path: '/assets/img/github-50.png'
            },
            {
                name: 'linkedin',
                type: 'icon',
                path: '/assets/img/linkedin-50.png'
            },
        ]
        )
        this.pathMap.set(
            "others", [
            {
                type: "photo",
                text: "frontPage",
                path: '/assets/img/frontPage.jpg'
            },
            {
                type: "photo",
                text: "icon16x16.png",
                path: '/assets/img/Zi16x16.png'
            },
            {
                type: "photo",
                text: "icon32x32.png",
                path: '/assets/img/Zi16x16.png'
            },
        ]
        )
    }


}
