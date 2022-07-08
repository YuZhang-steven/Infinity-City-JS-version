import Experience from '../Experience.js'
import CityPart1 from './City/CityPart1.js'
import CityPart2 from './City/CityPart2.js'
import CityPart3 from './City/CityPart3.js'
import CityPart4 from './City/CityPart4.js'
import ColorWheel from './colorWheel.js'
import Environment from './Environment.js'

import Fox from './Fox.js'
import ClothSimulation from './Projects/ClothSimulation.js'


export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup

            this.colorWheel = new ColorWheel()
            //this.fox = new Fox()

            this.city1 = new CityPart1()
            this.city2 = new CityPart2()
            this.city3 = new CityPart3()
            this.city4 = new CityPart4()

            this.clothsimulation = new ClothSimulation()


            this.environment = new Environment()



        })
    }

    update() {
        if (this.fox)
            this.fox.update()
        if (this.colorWheel)
            this.colorWheel.update()
        if (this.clothsimulation)
            this.clothsimulation.update()
    }
}