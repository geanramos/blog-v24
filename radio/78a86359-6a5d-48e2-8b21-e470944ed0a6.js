    // Array de URLs das imagens
    const imagens = [
      "https://geanramos.com.br/radio/img/fno-dinheiro.jpg",
      "https://geanramos.com.br/img/fno.jpg",
	  "https://geanramos.com.br/radio/img/features1.jpg",
"https://geanramos.com.br/radio/img/features2.jpg",
"https://geanramos.com.br/radio/img/features3.jpg",
"https://geanramos.com.br/radio/img/features4.jpg",
"https://geanramos.com.br/radio/img/features5.jpg",
"https://geanramos.com.br/radio/img/features6.jpg",
"https://geanramos.com.br/radio/img/features7.jpg",
"https://geanramos.com.br/radio/img/features8.jpg",
"https://geanramos.com.br/radio/img/features9.jpg",
"https://geanramos.com.br/radio/img/features10.jpg",

"https://geanramos.com.br/radio/img/pisadinha.jpg",
"https://geanramos.com.br/radio/img/tropical.jpg",
"https://geanramos.com.br/radio/img/pop2k.jpg",
"https://geanramos.com.br/radio/img/lo-fi.jpg",
"https://geanramos.com.br/radio/img/megamix.jpg",
"https://geanramos.com.br/radio/img/boteco-dos-amigos.jpg",
    ];

    // Array de URLs dos links correspondentes
    const links = [
      "https://geanramos.com.br/ig/",
      "https://geanramos.com.br/ig/",
	  "https://geanramos.com.br/radio/pagode.html",
"https://geanramos.com.br/radio/pop.html",
"https://geanramos.com.br/radio/sertanejo.html",
"https://geanramos.com.br/radio/hits-brasil.html",
"https://geanramos.com.br/radio/gospel.html",
"https://geanramos.com.br/radio/rock.html",
"https://geanramos.com.br/radio/libcast.html",
"https://geanramos.com.br/radio/libbel.html",
"https://geanramos.com.br/radio/libmusic.html",
"https://geanramos.com.br/radio/mixfm.html",

"https://geanramos.com.br/radio/pisadinha.html",
"https://geanramos.com.br/radio/tropical.html",
"https://geanramos.com.br/radio/pop2k.html",
"https://geanramos.com.br/radio/lofi.html",
"https://geanramos.com.br/radio/",
"https://geanramos.com.br/radio/bda.html",
    ];

    // Função para exibir um footer-banner aleatório
    function mostrarbannerAleatorio() {
      const indice = Math.floor(Math.random() * imagens.length); // Gera um índice aleatório
      const footerBannerDiv = document.getElementById("footer-banner");

      // Adiciona o footer-banner com o link no HTML
      footerBannerDiv.innerHTML = `
        <a href="${links[indice]}" target="_blank" class="footer-banner">
          <img src="${imagens[indice]}" alt="banner">
        </a>
      `;
    }

    // Chama a função ao carregar a página
    mostrarbannerAleatorio();

    // Função para trocar o banner a cada 10 segundos
    setInterval(mostrarbannerAleatorio, 10000); // Troca de banner a cada 10000 milissegundos (5 segundos)
  