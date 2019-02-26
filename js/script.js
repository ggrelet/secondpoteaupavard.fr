$(document).ready(function(){


	$("#vid").prop('muted', true);

	$("#mute-video").jrumble({
		x: 2,
		y: 10,
		rotation: 5,
		speed: 100
	});

	var demoStart = function(){

		if( $("#vid").prop('muted') ) {
			$('#mute-video').trigger('startRumble');
		}
		setTimeout(demoStop, 1000);
	};

	var demoStop = function(){
		$('#mute-video').trigger('stopRumble');
		setTimeout(demoStart, 4000);
	};

	demoStop();

	$("#fullscreen-video").click( function (){
		$("#vid").requestFullscreen();
	});

	$("#mute-video").click( function (){
		if( $("#vid").prop('muted') ){
			$("#mute-icon").removeClass();
			$("#mute-icon").toggleClass('fas fa-volume-up fa-stack-1x fa-inverse');
		    $('#mute-video').trigger('stopRumble');
		    $("#vid").prop('muted', false)
		} else {
			$("#mute-icon").removeClass();
			$("#mute-icon").toggleClass('fas fa-volume-mute fa-stack-1x fa-inverse');	
			$('#mute-video').trigger('startRumble');
			$("#vid").prop('muted', true)
		}
	});
});

