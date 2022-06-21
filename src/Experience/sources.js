export default [
    {
        name: 'environmentMapTexture',
        type: 'cubeTexture',
        path:
            [
                'textures/environmentMap/px.jpg',
                'textures/environmentMap/nx.jpg',
                'textures/environmentMap/py.jpg',
                'textures/environmentMap/ny.jpg',
                'textures/environmentMap/pz.jpg',
                'textures/environmentMap/nz.jpg'
            ]
    },
    {
        name: 'grassColorTexture',
        type: 'texture',
        path: 'textures/dirt/color.jpg'
    },
    {
        name: 'grassNormalTexture',
        type: 'texture',
        path: 'textures/dirt/normal.jpg'
    },
    {
        name: 'foxModel',
        type: 'gltfModel',
        path: 'models/Fox/glTF/Fox.gltf'
    },
    {
        name: 'hdr_background',
        type: 'hdrTexture',
        path: 'textures/hdrmap/small_hangar_01_1k.hdr'
    },
    {
        name: 'ExportTest',
        type: 'gltfModel',
        path: 'models/city/ExportTest.glb'
    },
    {
        name: 'cityTexture',
        type: 'texture',
        path: 'models/city/Majormaterial.jpg'
    },
    {
        name: 'colorWheel',
        type: 'gltfModel',
        path: 'models/colorWheel/ColorWheel.glb'
    },

]