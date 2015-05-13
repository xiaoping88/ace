
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
	        respond: ['html5shiv'],
	        gritter: ['jquery'],
	        chosen: ['jquery'],
	        bootstrapdatepicker: ['bootstrap'],
	        bootstraptimepicker: ['bootstrap'],
	        bootstrapdatetimepicker: ['bootstrap'],
	        bootstrapcolorpicker: ['bootstrap'],
	       	bootstraptag: ['bootstrap'],
	      	knob: ['jquery'],
	        autosize: ['jquery'],
	        inputlimiter: ['jquery'],
	        maskedinput: ['jquery'],
	       	duallistbox: ['jquery'],
	        raty: ['jquery'],
	        multiselect: ['bootstrap'],
	        select2: ['jquery'],
	        typeahead: ['jquery']

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
	        flotresize: 'jquery.flot.resize.min',
	        moment: 'moment.min',
	        fullcalendar: 'fullcalendar.min',
	        bootbox: 'bootbox.min',
	        gritter: 'jquery.gritter.min',
	        spin: 'spin.min',
	        chosen: 'chosen.jquery.min',
	        fueluxspinner: 'fuelux.spinner.min',
	        bootstrapdatepicker: 'bootstrap-datepicker.min',
	        bootstraptimepicker: 'bootstrap-timepicker.min',
	        bootstrapdatetimepicker: 'bootstrap-datetimepicker.min',
	        daterangepicker: 'daterangepicker.min',
	        bootstrapcolorpicker: 'bootstrap-colorpicker.min',
	        knob: 'jquery.knob.min',
	        autosize: 'jquery.autosize.min',
	        inputlimiter: 'jquery.inputlimiter.1.3.1.min',
	        maskedinput: 'jquery.maskedinput.min',
	        bootstraptag: 'bootstrap-tag.min',
	        duallistbox: 'jquery.bootstrap-duallistbox.min',
	        raty: 'jquery.raty.min',
	        multiselect: 'bootstrap-multiselect.min',
	        select2: 'select2.min',
	        typeahead: 'typeahead.jquery.min',
	        wizard: 'fuelux.wizard.min',
	        jqvalidate: 'jquery.validate.min',
	        additionalmethods: 'additional-methods.min'


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