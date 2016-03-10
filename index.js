'use strict';

var extend = require('extend'),
    path = require('path'),
    render = require('./renderer');

module.exports = function($opts) {
    $opts = extend(true, {}, {
        enabled: true,
        extension: '.html',
        inject: '$render',
        path: path.resolve(process.cwd(), 'views'),
    }, $opts);

    return function($$resolver) {
        if ($opts.enabled) {
            if ($opts.inject) {
                $$resolver.add($opts.inject, render($opts));
            }
        }
    };
};
