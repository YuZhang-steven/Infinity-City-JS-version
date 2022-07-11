
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
            'meshEditor',
            [
                {
                    name: 'Curve01',
                    type: 'picture',
                    path: '../static/projects/meshEditor/001.PNG'
                },
                {
                    name: 'picture03',
                    type: 'picture',
                    path: '../static/projects/meshEditor/003.PNG'
                }, {
                    name: 'picture04',
                    type: 'picture',
                    path: '../static/projects/meshEditor/004.PNG'
                },
                {
                    name: 'picture05',
                    type: 'picture',
                    path: '../static/projects/meshEditor/005.PNG'
                }, {
                    name: 'picture06',
                    type: 'picture',
                    path: '../static/projects/meshEditor/006.PNG'
                },

            ]
        )
    }


}
