import image01 from '../../../static/projects/meshEditor/meshEditor001.PNG'
import image02 from '../../../static/projects/meshEditor/meshEditor002.PNG'
import image03 from '../../../static/projects/meshEditor/meshEditor003.PNG'
import image04 from '../../../static/projects/meshEditor/meshEditor004.PNG'
import image05 from '../../../static/projects/meshEditor/meshEditor005.PNG'
//import image02 from '../../../static/projects/meshEditor/meshEditor002.PNG'


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
    }


}
