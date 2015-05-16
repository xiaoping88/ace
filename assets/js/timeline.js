define('timeline', ['main'], function(G) {
    var p = {};
    p.init = function() {
		$('[data-toggle="buttons"] .btn').on('click', function(e){
			var target = $(this).find('input[type=radio]');
			var which = parseInt(target.val());
			$('[id*="timeline-"]').addClass('hide');
			$('#timeline-'+which).removeClass('hide');
		});
    }
    return p;
});