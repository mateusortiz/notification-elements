module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: true,
                    keepalive: true,
                    port: 3001
                }
            }
        },
        replace: {
            example: {
                src: ['src/*'],
                dest: '/',
                replacements: [{
                    from: '<link rel="import" href="../bower_components/polymer/polymer.html">',
                    to: ''
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', ['connect']);
    grunt.registerTask('build', ['replace']);

};
