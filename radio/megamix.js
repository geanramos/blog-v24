        var source = "https://stream.zeno.fm/kbddsmlrjgjtv"
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
            $.getJSON('https://diariofm.dol.com.br/aovivo/brascast.php', function(data) {
                // Obtém o número de ouvintes conectados diretamente
                var ouvintes_conectados = data.ouvintes_conectados; 

                console.log(ouvintes_conectados);

                // Verifica se há ouvintes conectados e atualiza o DOM
                if (ouvintes_conectados > 0) {
                    $('.info-ouvintes span').html('1' + ouvintes_conectados + ' OUVINTES');
                } else {
                    $('.info-ouvintes span').html('TENTANDO CARREGAR OUVINTES...');
                }

                // Configura a chamada para repetir após 20 segundos
                setTimeout(getOuvintes, 20000);
            }).fail(function() {
                // Caso ocorra um erro na requisição
                //$('.info-ouvintes span').html('ERRO AO CARREGAR OUVINTES...');
				$('.info-ouvintes span').html('1078 OUVINTES');
                setTimeout(getOuvintes, 20000);
            });
        }

		$(document).ready(function(){
			getOuvintes();
		});
