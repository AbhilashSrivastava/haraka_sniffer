// mail.sniff

// documentation via: haraka -c /Users/abhilash.s/Projects/haraka_v1/haraka -h plugins/mail.sniff

// Put your plugin code here
// type: `haraka -h Plugins` for documentation on how to create a plugin
var mailBody = require('.././mailbody');
var msgStr = require('.././messagestream');
exports.hook_data_post = function(next, connection) {
	var data_to_sniff = connection.transaction;
	// send this to queue;
	next();
};
