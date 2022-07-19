import '../../../static/projects/meshEditor/meshEditor001.jpg'
import '../../../static/projects/meshEditor/meshEditor002.jpg'
import '../../../static/projects/meshEditor/meshEditor003.jpg'
import '../../../static/projects/meshEditor/meshEditor004.jpg'


import '../../../static/projects/clothSimulation/clothSimulation001.PNG'
import '../../../static/projects/clothSimulation/clothSimulation002.jpg'
import '../../../static/projects/clothSimulation/clothSimulation003.jpg'
import '../../../static/projects/clothSimulation/clothSimulation004.jpg'
import '../../../static/projects/clothSimulation/clothSimulation005.jpg'
import '../../../static/projects/clothSimulation/clothSimulation006.jpg'

import '../../../static/projects/pathTracer/pathTracer001.png'
import '../../../static/projects/pathTracer/pathTracer002.jpg'
import '../../../static/projects/pathTracer/pathTracer003.jpg'
import '../../../static/projects/pathTracer/pathTracer004.jpg'
import '../../../static/projects/pathTracer/pathTracer005.jpg'

import '../../../static/projects/rasterizer/rasterizer001.jpg'
import '../../../static/projects/rasterizer/rasterizer002.jpg'
import '../../../static/projects/rasterizer/rasterizer003.jpg'
import '../../../static/projects/rasterizer/rasterizer004.jpg'

import '../../../static/projects/BYOW/BYOW001.jpg'
import '../../../static/projects/BYOW/BYOW002.jpg'
import '../../../static/projects/BYOW/BYOW003.jpg'
import '../../../static/projects/BYOW/BYOW004.jpg'

import '../../../static/projects/colorWheel/colorWheel001.jpg'
import '../../../static/projects/colorWheel/colorWheel002.jpg'
import '../../../static/projects/colorWheel/colorWheel003.jpg'

import '../../../static/projects/plasticScape/plasticScape001.jpg'
import '../../../static/projects/plasticScape/plasticScape002.jpg'
import '../../../static/projects/plasticScape/plasticScape003.jpg'
import '../../../static/projects/plasticScape/plasticScape004.jpg'
import '../../../static/projects/plasticScape/plasticScape005.jpg'

import '../../../static/projects/clifPavilion/clifPavilion001.jpg'
import '../../../static/projects/clifPavilion/clifPavilion002.jpg'
import '../../../static/projects/clifPavilion/clifPavilion003.jpg'
import '../../../static/projects/clifPavilion/clifPavilion004.jpg'
import '../../../static/projects/clifPavilion/clifPavilion005.jpg'



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
                    name: 'Bezier Curves and Surfaces',
                    type: 'picture',
                    path: '/assets/img/meshEditor001.jpg'
                },
                {
                    name: 'Half-Edge and Normal Sampling to enable smooth shading',
                    type: 'picture',
                    path: '/assets/img/meshEditor002.jpg'
                }, {
                    name: 'Edge Flip and Split',
                    type: 'picture',
                    path: '/assets/img/meshEditor003.jpg'
                },
                {
                    name: 'Loop Subdivision For Mesh Upsampling',
                    type: 'picture',
                    path: '/assets/img/meshEditor004.jpg'
                }
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
                text: "In this project, mypartner Robert Qiu and I implemented an editor that can show and change theBezier Curves and Mesh Geometry. In Bezier curves part, de Casteljau'salgorithm is used to calculate curve shape. The half-edge structure is used tostore mesh data, so the edges on each surface can be deleted and added."
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
            "pathTracerImg",
            [
                {
                    name: 'Render Result',
                    type: 'picture',
                    path: '/assets/img/pathTracer001.png'
                },
                {
                    name: 'BVH Structure and Normal Rendering',
                    type: 'picture',
                    path: '/assets/img/pathTracer002.jpg'
                },
                {
                    name: 'Ray Tracing and GI',
                    type: 'picture',
                    path: '/assets/img/pathTracer003.jpg'
                },
                {
                    name: 'Depth of Field',
                    type: 'picture',
                    path: '/assets/img/pathTracer004.jpg'
                }, {
                    name: 'Microfacet Matiral',
                    type: 'picture',
                    path: '/assets/img/pathTracer005.jpg'
                },

            ]
        )
        this.pathMap.set(
            "pathTracerText", [
            {
                type: "name",
                text: "Ray Tracing Render"
            },
            {
                type: "intro",
                text: "A C++ Raytracing render Engine. It uses the basicpath tracing algorithm to render the scene. The render uses BVH structure to optimize theray-triangle intersection time and can support GI and Adaptive Sampling. It canalso achieve the depth of field effect to simulate the physical camera focus point.The material can be microfacet material  "
            },
            {
                type: "type",
                text: "Computer Graphic"
            },
        ]
        )

        this.pathMap.set(
            "rasterizerImg",
            [
                {
                    name: 'Rasterizing triangle and coloring with Barycentric coordinates',
                    type: 'picture',
                    path: '/assets/img/rasterizer001.jpg'
                },
                {
                    name: 'Transforms Matrix',
                    type: 'picture',
                    path: '/assets/img/rasterizer002.jpg'
                },
                {
                    name: 'Pixel sampling:Bilinear Sampling',
                    type: 'picture',
                    path: '/assets/img/rasterizer003.jpg'
                },
                {
                    name: 'Level sampling: Nearst & Bilinear',
                    type: 'picture',
                    path: '/assets/img/rasterizer004.jpg'
                },

            ]
        )

        this.pathMap.set(
            "rasterizerText", [
            {
                type: "name",
                text: "Rasterizer"
            },
            {
                type: "intro",
                text: "A Rasterizer implemented with C++. can raster points, lines, and triangles with textures"
            },
            {
                type: "type",
                text: "Computer Graphic"
            },
        ]
        )

        this.pathMap.set(
            "BYOWImg",
            [
                {
                    name: 'Generating maze with random seeds',
                    type: 'picture',
                    path: '/assets/img/BYOW001.jpg'
                },
                {
                    name: 'The plyer can only see part of the map',
                    type: 'picture',
                    path: '/assets/img/BYOW002.jpg'
                },
                {
                    name: 'The map with "bridge building" and "deleting wall" chances',
                    type: 'picture',
                    path: '/assets/img/BYOW003.jpg'
                },
                {
                    name: 'The Basic Logic to Generating Map',
                    type: 'picture',
                    path: '/assets/img/BYOW004.jpg'
                },

            ]
        )

        this.pathMap.set(
            "BYOWText", [
            {
                type: "name",
                text: "Build Your Own World"
            },
            {
                type: "intro",
                text: "The final project in CS61B Data Structure class. I use Java to design an algorithm that will generate a dungeon map by giving seeds. I also designed basic UI and also some interaction with the characters. "
            },
            {
                type: "type",
                text: "Other Programming"
            },
        ]
        )

        this.pathMap.set(
            "colorWheelImg",
            [
                {
                    name: 'Final Prototype',
                    type: 'picture',
                    path: '/assets/img/colorWheel001.jpg'
                },
                {
                    name: 'Color-Sound Matching Table',
                    type: 'picture',
                    path: '/assets/img/colorWheel002.jpg'
                },
                {
                    name: 'Model Diagram',
                    type: 'picture',
                    path: '/assets/img/colorWheel003.jpg'
                }
            ]
        )

        this.pathMap.set(
            "colorWheelText", [
            {
                type: "name",
                text: "Color Wheel"
            },
            {
                type: "intro",
                text: "Teamed with Elnaz Tafrihi and Shuang Yan, We try to design a new instrument that people can use color to play music. The color sensor on the instrument will detect the color on the disk and play the sound. People can change the combination of the color cube to compose the music.  Final product implemented with Arduino and C++. "
            },
            {
                type: "type",
                text: "Product"
            },
        ]
        )


        this.pathMap.set(
            "clifPavilionImg",
            [
                {
                    name: 'Final Prototype Support Reaction And Stress [kN]',
                    type: 'picture',
                    path: '/assets/img/clifPavilion001.jpg'
                },
                {
                    name: 'Basic Design Strategy',
                    type: 'picture',
                    path: '/assets/img/clifPavilion002.jpg'
                },
                {
                    name: 'Galapagos Optimization',
                    type: 'picture',
                    path: '/assets/img/clifPavilion003.jpg'
                },
                {
                    name: 'Three Optizizations',
                    type: 'picture',
                    path: '/assets/img/clifPavilion004.jpg'
                },
                {
                    name: 'Final Structure Analysis',
                    type: 'picture',
                    path: '/assets/img/clifPavilion005.jpg'
                }
            ]
        )

        this.pathMap.set(
            "clifPavilionText", [
            {
                type: "name",
                text: "Pavilion on the Clif"
            },
            {
                type: "intro",
                text: "Teamed with Tya Abe and Sam Gebb, in this structure analysis project, We designed a cantilever pavilion on the cliff. We use Karamba3D to generate the structure performance and use it as the constraint to let Galapagos find the possible geometry solutions. "
            },
            {
                type: "type",
                text: "Architecture"
            }
        ]
        )

        this.pathMap.set(
            "plasticScapeImg",
            [
                {
                    name: 'Community Emergency Building Hub',
                    type: 'picture',
                    path: '/assets/img/plasticScape001.jpg'
                },
                {
                    name: 'Drone Based Plastic Building',
                    type: 'picture',
                    path: '/assets/img/plasticScape002.jpg'
                },
                {
                    name: 'Temporary Structure to Change LandScape',
                    type: 'picture',
                    path: '/assets/img/plasticScape003.jpg'
                },
                {
                    name: 'Nature and Urban in Same Landscape',
                    type: 'picture',
                    path: '/assets/img/plasticScape004.jpg'
                },
                {
                    name: 'Interior and Exterior Merging',
                    type: 'picture',
                    path: '/assets/img/plasticScape005.jpg'
                }
            ]
        )

        this.pathMap.set(
            "plasticScapeText", [
            {
                type: "name",
                text: "PLASTIC-SCAPE"
            },
            {
                type: "intro",
                text: `
                More than 300 million tons of plastic are produced each year, of which only 18% are recycled. Our project suggests utilization of such unrated resources, approaching global warming as a chance to restore the balance between human living space and natural habitat of other species.
                To achieve that, recycling plastics replace construction materials. A small recycling apparatus is installed in each community while other machines are used to remold plastic trash in a form that a drone-based 3d printer can use. From now on, these drones will take over construction of temporary infrastructures that will shape the dryland following the frequently occurring floods. As sea level is gradually rising, the infrastructure also will increase in height layer by layer. 
                These plastic infrastructures will also serve as scaffolds for plants to grow. Soil and sand coming from the floods will deposit on the infrastructures supplying them with nutrients. As time passes, plants and plastic structures will form the new landscape and will reshape current city networks. Nature will intrude the originally isolated interiors of buildings while old man-made infrastructures will provide habitat for other species.
                Rather than seeking to preserve the human living environment, the consequence of global warming might be a chance to invite nature into human infrastructure again. After many years of negotiation and reshaping, the human living space and nature will achieve a new balance.
                `
            },
            {
                type: "type",
                text: "Architecture"
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
