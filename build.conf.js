{
    baseUrl: '.',
    optimize: 'none',
    name: 'lib/almond',
    include: ['src/MY_PROJECT_START'],
    out: 'build/built/MyProjectBuilt.js',
    wrap: {
        startFile: 'build/intro.js',
        endFile: 'build/outro.js'
    }
}