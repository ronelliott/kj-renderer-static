'use strict';

const fs = require('fs'),
      is = require('is'),
      path = require('path');

module.exports = function($opts) {
    var ext = $opts.extension,
        base = $opts.path;

    return function(template, context, callback) {
        template = is.array(template) ? path.join.apply(null, template) : template;
        var templatePath = (template.indexOf(ext) === -1) ? template + ext : template;
        templatePath = path.resolve(base, templatePath);
        fs.readFile(templatePath, function(err, data) {
            callback(err, err ? null : data.toString());
        });
    };
};
