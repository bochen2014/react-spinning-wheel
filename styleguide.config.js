const path=require('path');

module.exports = {
    sections: [
        {
            name: 'Introduction',
            content: 'docs/introduction.md'
        },
        {
            name: 'Documentation',
            sections: [
                {
                    name: 'Installation',
                    content: 'docs/installation.md'
                },
                {
                    configuration: "Configuration",
                    content: "docs/configuration.md"
                }
            ]
        },
        {
            name: 'UI Components',
            content: 'docs/ui.md',
            components: 'src/components/*.js'
        }
    ],
    webpackConfig: require('./sample/webpack.config.js'),
    require: [
        path.join(__dirname, 'src/style-guidist/styles.less'),
    ],
    serverPort:3000
}