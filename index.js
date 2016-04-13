'use strict';

const path = require('path'),
      render = require('./renderer');

module.exports = function($opts) {
    $opts = Object.assign({}, {
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
