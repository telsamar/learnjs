const path = require('path');
const Dotenv = require('dotenv-webpack');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@path_components': resolvePath('./src/components'),
            '@path_store': resolvePath('./src/store'),
            '@path_services': resolvePath('./src/services'),
            '@path_main': resolvePath('./src/'),
        },
    },
    babel: {
        plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
    },

}