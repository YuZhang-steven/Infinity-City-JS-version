import Project from "./Project";

export default class ClifPavilion extends Project {
    setBasicInfo() {
        this.projectType = "architecture"
        this.projectName = 'clifPavilion'
        this.projectModel = this.resources.items.clifPavilion
    }
}