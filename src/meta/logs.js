'use strict';

var path = require('path');
var fs = require('fs');
var winston = require('winston');

var logs = module.exports;

logs.path = path.join(__dirname, '..', '..', 'logs', 'output.log');

logs.get = function (callback) {
	fs.readFile(logs.path, {
		encoding: 'utf-8',
	}, function (err, logs) {
		if (err) {
			winston.error('[meta/logs] Could not retrieve logs: ' + err.message);
		}

		callback(undefined, logs || '');
	});
};

logs.clear = function (callback) {
	fs.truncate(logs.path, 0, callback);
};
