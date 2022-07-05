import Experience from '../Experience.js'
import CityPart1 from './City/CityPart1.js'
import CityPart2 from './City/CityPart2.js'
import clothSimulation from './ClothSimulation.js'
import ColorWheel from './colorWheel.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Fox from './Fox.js'

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            //this.floor = new Floor()
            //this.clothSimulation = new clothSimulation()
            //this.colorWheel = new ColorWheel()
            //this.fox = new Fox()

            this.city1 = new CityPart1()
            this.city2 = new CityPart2()




            this.environment = new Environment()



        })
    }

    update() {
        if (this.fox)
            this.fox.update()
        if (this.colorWheel)
            this.colorWheel.update()
        if (this.clothSimulation)
            this.clothSimulation.update()
    }
}