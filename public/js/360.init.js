/*boton fullscreen*/
  function toggleFullScreen() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      }
      else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      }
      else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
    else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      }
      else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      }
      else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  };

//::::::::::::::Funciones para el video desde YouTube:::::::::::::

  //Cargamos de forma async

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//Creamos el objeto <iframe>

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player(
    'video', //ID del objeto donde se carga
      {//Parametros de la reproducción
            playerVars: {
                controls: 0,
                disablekb: 1,
                autoplay: 1,
                showinfo: 0,
                rel: 0
            },//Parametros del iframe
          height: '410',
          width: '750',
          videoId: 'aQd41nbQM-U',
          events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
    }
  });
};

var done = false;
//La API carga el video cuando está listo
function onPlayerReady(event) {
 	 event.target.stopVideo();
	// let play = document.getElementsByTagName('play');
  $('.play').click(function() {
 	 event.target.playVideo();
 	 $(this).hide('fade');
   toggleFullScreen();
  });

};

///la API llama esta funcion cuando el player cambia de estado


function onPlayerStateChange(event) {
  //Revisamos si el video terminó
  if ( event.data == YT.PlayerState.ENDED && !done )
  {
    // console.log("terminó");
    done = true;
    // player.playVideo();

  };

  /*eventos cuando se pausa el video*/

  if ( player.getPlayerState() == 2 ){


  }

  /*eventos cuando corre el video*/
   if ( player.getPlayerState() == 1 ){

     done = false;

   }
};

//Iniciamos el listener de los eventos del dispositivo
var init = function() {

    //Find our div containers in the DOM
    var dataContainerOrientation = document.getElementById('dataContainerOrientation');
    var dataContainerMotion = document.getElementById('dataContainerMotion');

    //Check for support for DeviceOrientation event
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', function(event) {
            var alpha = event.alpha; //
            var beta = event.beta;
            var gamma = event.gamma;

            if (alpha != null || beta != null || gamma != null) {
                
                if( alpha > 100 && alpha < 300 ){
                	
                	$('.menu-test')
                		.css({
                			opacity: 1,
                			left: 0
                		});


                }else{
                	$('.menu-test')
                		.removeAttr('style');

                }

            }

        }, false);
    }

}

init();

