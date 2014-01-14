/* 
	spa.shell.js
	Shell module for SPA
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

spa.shell = (function () {
	// Begin module scope variables
	var configMap = {
		main_html: '<div class="spa-shell-head"><div class="spa-shell-head-logo"></div><div class="spa-shell-head-acct"></div><div class="spa-shell-head-search"></div></div><div class="spa-shell-main"><div class="spa-shell-main-nav"></div><div class="spa-shell-main-content"></div></div><div class="spa-shell-foot"></div><div class="spa-shell-chat"></div><div class="spa-shell-modal"></div>'
	},
	stateMap = {
		$container: null
	},
	jqueryMap = {},
	setJqueryMap, initModule;
	// End module scope variables
	// Begin utility methods
	// End utility methods
	// Begin DOM methods
	// Begin DOM method /setJqueryMap/
	setJqueryMap = function () {
		var $container = stateMap.$container;
		jqueryMap = {
			$container: $container
		};
	};
	// End DOM method /setJqueryMap/
	// End DOM methods
	// Begin event handlers
	// End event handlers
	// Begin public methods
	// Begin public method /initModule/
	initModule = function ($container) {
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
	}
	// End public method /initModule/

	return {
		initModule: initModule
	};
	// End public methods	
}());