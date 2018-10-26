module.exports = function() {
    var client = 'client',
        clientApp = './client/app'
        dist = 'dist',
        tmp = '.tmp',
        docs = 'documentation',
        landing = 'landing';
    var config = {
        client: client,
        dist: dist,
        tmp: tmp,
        index: client + "/index.html", 
        alljs: [
            client + "/app/**/*.js",
            './*.js'
        ],
        assetsLazyLoad: [
            client + '/node_modules/angular-wizard/dist/angular-wizard.min.js',
            client + '/node_modules/ngmap/build/scripts/ng-map.min.js',
        ],
        assetsToCopy: [
            client + '/node_modules/webfontloader/webfontloader.js',
            client + "/app/**/*.html",
            client + '/assets/**/*',
            client + '/data/**/*',
            client + '/vendors/**/*',
            client + "/node_modules/font-awesome/css/*", 
            client + "/node_modules/font-awesome/fonts/*", 
            client + "/styles/loader.css", 
            client + "/styles/ui/images/*", 
            client + "/favicon.ico"
        ],
        less: [],
        sass: [
            client + "/styles/**/*.scss"
        ],
        js: [
            clientApp + "/**/*.module.js",
            clientApp + "/**/*.js",
            '!' + clientApp + "/**/*.spec.js"
        ],
        docs: docs, 
        docsPug: [
            docs + "/pug/index.pug",
            docs + "/pug/faqs.pug",
            docs + "/pug/layout.pug"
        ],
        allToClean: [
            tmp, 
            ".DS_Store",
            ".sass-cache",
            "node_modules",
            ".git",
            client + "/node_modules",
            docs + "/pug",
            docs + "/layout.html",
            landing + "/pug",
            landing + "/node_modules",
            "readme.md"
        ]
    };

    return config;
};
