// package metadata file for Meteor.js
var packageName = 'iguissouma:ionic-material-design-lite';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.0.0-rc-1-3';
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

    var path = Npm.require('path');
    var asset_path = path.join('dist');
    api.addFiles(path.join(asset_path, 'css', 'ionic.material-design-lite.css'), where);
    api.addFiles(path.join(asset_path, 'js', 'ionic.material-design-lite.bundle.js'), where);
    api.addFiles(path.join(asset_path, 'js', 'ionic.material-design-lite.js'), where);

    // fonts
    api.addAssets(path.join(asset_path, 'fonts', '/material-icons/MaterialIcons-Regular.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/material-icons/MaterialIcons-Regular.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Thin.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Thin.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-ThinItalic.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-ThinItalic.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Light.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Light.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-LightItalic.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-LightItalic.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Regular.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Regular.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-RegularItalic.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-RegularItalic.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Medium.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Medium.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-MediumItalic.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-MediumItalic.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Bold.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Bold.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-BoldItalic.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-BoldItalic.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Black.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-Black.woff'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-BlackItalic.woff2'), where);
    api.addAssets(path.join(asset_path, 'fonts', '/roboto/Roboto-BlackItalic.woff'), where);
});