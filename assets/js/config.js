
(function (w) {
	var options = {
	    baseUrl:'assets/js/',
	    shim:{
	    	bootstrap: ['jquery'],
	        jqueryuicustom : ['jquery'],
	        touchpunch: ['jquery','jqueryuicustom'],
	        easypiechart: ['jquery'],
	        sparkline: ['jquery'],
	        flot: ['jquery'],
	        flotpie: ['jquery','flot'],
	        flotresize: ['jquery','flot'],
	        aceExtra: ['jquery'],
	        aceElements: ['aceExtra'],
	        ace: ['aceElements'],
	        respond: ['html5shiv']
	    },
	    paths:{		    	
	        jquery:'jquery.2.1.1.min',
	        mobileCustom: 'jquery.mobile.custom.min',
	        bootstrap: 'bootstrap.min',
	        aceExtra: 'ace-extra.min',
	        aceElements: 'ace-elements.min',
	        ace: 'ace.min',
	        excanvas: 'excanvas.min',
	        html5shiv: 'html5shiv.min',
	        respond: 'respond.min',
	        jqueryuicustom : 'jquery-ui.custom.min',
	        touchpunch: 'jquery.ui.touch-punch.min',
	        easypiechart: 'jquery.easypiechart.min',
	        sparkline: 'jquery.sparkline.min',
	        flot: 'jquery.flot.min',
	        flotpie: 'jquery.flot.pie.min',
	        flotresize: 'jquery.flot.resize.min'

	    }
	};

	var jqueryDeps = [];
	var maches = /(MSIE) (\d+)\.(\d+)/i.exec(navigator.userAgent.toLowerCase());
	if (maches && maches[2]){
		var mainVer = maches[2];

		if (mainVer <= 8){
			options.paths.jquery = 'jquery.1.11.1.min';
			jqueryDeps = ['excanvas','respond'];
		}

		if('ontouchstart' in document.documentElement) {
			jqueryDeps.push('mobileCustom');
		}
	}
	if (jqueryDeps.length > 0){
		options.shim.jquery = jqueryDeps;
	}
	requirejs.config(options);

}(this));	