	//var source = "https://live.hunter.fm/rock_normal"
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
            $.getJSON('http://geanramos.42web.io/8d90901c-4d1b-4b79-b61d-9ba88460e614.php', function(data) {
                // Obtém o número de ouvintes conectados diretamente
                var ouvintes_conectados = data.ouvintes_conectados; 

                var ouvintes_conectados = ouvintes_conectados * 5;

                console.log('ouvintes_conectados', ouvintes_conectados);

                // Verifica se há ouvintes conectados e atualiza o DOM
                if (ouvintes_conectados > 0) {
                    $('.info-ouvintes span').html(ouvintes_conectados + ' OUVINTES');
                } else {
                    $('.info-ouvintes span').html('TENTANDO CARREGAR OUVINTES...');
                }

                // Configura a chamada para repetir após 20 segundos
                setTimeout(getOuvintes, 20000);
            }).fail(function() {
                // Caso ocorra um erro na requisição
                $('.info-ouvintes span').html('TENTANDO CARREGAR OUVINTES...');
                setTimeout(getOuvintes, 20000);
            });
        }

        $(document).ready(function(){
            getOuvintes();
        });
