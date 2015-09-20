// package metadata file for Meteor.js
var packageName = 'ionic-material-design-lite';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.0.0-rc-1';
var summary = 'Material Design (lite) style override for Ionic Framework.';
var gitLink = 'https://github.com/iguissouma/ionic-material-design-lite';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
    name: packageName,
    version: version,
    summary: summary,
    git: gitLink,
    documentation: documentationFile
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

    api.addFiles('dist/css/ionic.material-design-lite.css', where); // Files in use
    api.addFiles('dist/js/ionic.material-design-lite.js', where); // Files in use
});