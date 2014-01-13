/* 
	spa.js
	Root namespace module
*/

/*jslint
	browser: true,
	continue: true,
	devel: true,
	indent: 4,
	maxerr: 50,
	newcap: true,
	nomen: true,
	plusplus: true,
	regexp: true,
	sloppy: true,
	vars: false,
	white: true
*/
/*global $, spa */

var spa = (function () {
	var initModule = function ( $container ) {
		$container.html('<h1 style="display: inline-block; margin: 25px;">' + 'testing spa' + '</spa>');
	};

	return {
		initModule: initModule
	};
}());