	var dernierHexLigne = -1;
	var dernierHexCol = -1;

	function naviguerVersSelectMobile(){
		//dernierHexLigne
		//dernierHexCol

		$('#hex' + dernierHexLigne + dernierHexCol+' .hex-init').click();
	}

	function afficherEffet(numLigne, numCol, isMobile) {
		if(dernierHexLigne != numLigne || dernierHexCol !=  numCol){
			eteindreEffet(dernierHexLigne, dernierHexCol);

			dernierHexLigne = numLigne;
			dernierHexCol = numCol;

			var hexagone = $('#hex' + numLigne + numCol+' .hex-init');
			var title_color = hexagone.parent().attr("data-color");
			var title_name = hexagone.parent().attr("data-title");
			var desc_name = hexagone.parent().attr("data-content");

			function hex_description() {
				$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
				$('.' + desc_name).siblings().removeClass('desc-active');
				setTimeout(function() {
					$('.' + desc_name).addClass('desc-active');
					$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", {
						stagger: 300
					});
					$('.code-title, .desc-active span').velocity({
						color: title_color
					}, {
						queue: false
					});
					$('.code-title').text(title_name)
				}, 0);
			}

			hex_description();

			$(this).parent().addClass('hexactive');
			$('.hexactive').velocity({
				scaleX: "1.1",
				scaleY: "1.1"
			}, {
				duration: 200
			});

			if(isMobile){
				$(this).parent().addClass('mobile-hexactive');
			}else{
				$(this).parent().removeClass('mobile-hexactive');
			}
		}
	}

	function eteindreEffet(numLigne, numCol) {
		if (numLigne != -1 && numCol != -1) {
			$('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
		}
	}

	animationEnabled = false;



	$(document).ready(function() {

		setTimeout(function(){
			animationEnabled = true;
		},2000);
		/*Appeler la fonction afficherEffet() 
		 Le faire avec après un laps de temps supérieur 		
		 $(".hoverblock").velocity("fadeOut", { delay: 500, duration: 0 });
		 */

		function hex_initial_animation() {
			$(".hex-wrap,.hover-notify").velocity("transition.expandIn", {
				stagger: 150
			});
			$(".hex-wrap").velocity("callout.pulse");
			$(".hoverblock").velocity("fadeOut", {
				delay: 500,
				duration: 0
			});
		}
		hex_initial_animation();

		var hoverdetect = setInterval(function() {
			hovernotify()
		}, 500);

		function hovernotify() {
			$(".hover-notify").velocity("callout.tada");
		}

		function myStopFunction() {
			$(".hover-notify").velocity('stop', true).velocity("fadeOut");
			clearInterval(hoverdetect);
		}

		$(".hex-init").mouseenter(function() {

			if(! animationEnabled) return;

			myStopFunction();

			var title_color = $(this).parent().attr("data-color");
			var title_name = $(this).parent().attr("data-title");
			var desc_name = $(this).parent().attr("data-content");
			// 
			function hex_description() {
				$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
				$('.' + desc_name).siblings().removeClass('desc-active');
				setTimeout(function() {
					$('.' + desc_name).addClass('desc-active');
					$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", {
						stagger: 300
					});
					$('.code-title, .desc-active span').velocity({
						color: title_color
					}, {
						queue: false
					});
					$('.code-title').text(title_name)
				}, 0);
			}
			hex_description();

			$(this).parent().addClass('hexactive');
			$('.hexactive').velocity({
				scaleX: "1.1",
				scaleY: "1.1"
			}, {
				duration: 200
			});

			var id = $(this).parent().attr('id');

			id = id.split('hex');

			dernierHexLigne = id[1][0];
			dernierHexCol = id[1][1];

		}).mouseleave(function() {

			if(! animationEnabled) return;

			$('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
		});

	});