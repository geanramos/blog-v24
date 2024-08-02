   var source = "https://stream.zeno.fm/yxjfrz0xwzxtv"
        var audio = document.createElement("audio");
        audio.src = source;
        audio.onplaying = function () {
            $(".dotted").show();
            $("#pauseBtn").show();
            $(".loading").hide();
            $(".load-hora").hide();
        }
        $("#playBtn").click(function () {
            audio.play();
            $("#playBtn").hide();
            $(".loading").show();
        });
        $("#pauseBtn").click(function () {
            audio.load();
            $("#pauseBtn").hide();
            $("#playBtn").show();
            $(".dotted").hide();
        });
        $('.btn-refresh').click(function () {
            location.reload();
        });

        function getOuvintes() {
//		  $.ajax({
//              url: "https://stream.zeno.fm/yxjfrz0xwzxtv",
//		  }).success(function( msg ) {
//		    $('.info-ouvintes span').html(msg.ouvintes_online[0]+ ' OUVINTES');
//		    setTimeout(getOuvintes, 20000);
//		  }).fail(function () {
//              $('.info-ouvintes span').html('CARREGANDO OUVINTES...');
//		    setTimeout(getOuvintes, 20000);
//		  });
            $.getJSON('https://app.kshost.com.br/japi/9322', function(data) {
                var ouvintes_conectados = data.ouvintes_conectados[0]; // Mostra total de ouvintes conectados
                if (ouvintes_conectados > "") {
                    $('.info-ouvintes span').html(ouvintes_conectados + ' OUVINTES');
                    setTimeout(getOuvintes, 20000);
                } else {
                    $('.info-ouvintes span').html('TENTANDO CARREGAR OUVINTES...');
                    setTimeout(getOuvintes, 20000);
                }
            });
		}

		$(document).ready(function(){
			getOuvintes();
		});
