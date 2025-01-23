    // Array de URLs das imagens
    const imagens = [
      "https://geanramos.com.br/radio/img/ads-fastmoney.jpg",
      "https://geanramos.com.br/radio/img/ads-fastmoney2.jpg",
      "https://geanramos.com.br/radio/img/ads-profissao-afiliado.jpg",
      "https://geanramos.com.br/radio/img/ads-profissao-afiliado2.jpg",
      "https://geanramos.com.br/radio/img/ads-profissao-afiliado3.jpg",
      "https://geanramos.com.br/radio/img/ads-profissao-afiliado4.jpg",
      "https://geanramos.com.br/radio/img/ads-profissao-afiliado5.jpg",
      "https://geanramos.com.br/radio/img/ads-profissao-afiliado6.jpg",
      "https://geanramos.com.br/radio/img/app-atlantico.jpg",
      "https://geanramos.com.br/radio/img/ig-atlantico.jpg",
      "https://geanramos.com.br/radio/img/zap-atlantico.jpg",
      "https://geanramos.com.br/radio/img/fb-atlantico.jpg",
      ];

    // Array de URLs dos links correspondentes
    const links = [
    "https://go.hotmart.com/A1939024g?ap=a838&src=radio",
    "https://go.hotmart.com/A1939024g?ap=a838&src=radio",
    "https://geanramos.com.br/ig/",
    "https://geanramos.com.br/ig/",
    "https://go.hotmart.com/A1939024g?ap=06c5&src=radio",
    "https://go.hotmart.com/A1939024g?ap=06c5&src=radio",
    "https://go.hotmart.com/A1939024g?ap=0fbe&src=radio",
    "https://go.hotmart.com/A1939024g?ap=0fbe&src=radio",
    "https://play.google.com/store/apps/details?id=br.com.devmaker.atlanticofm&hl=pt_BR&gl=US",
    "https://www.instagram.com/radioatlanticofm/",
    "https://wa.me/559185902363",
    "https://www.facebook.com/atlanticofm105/",
    ];

    // Funcao para exibir um footer-banner aleatorio
    function mostrarbannerAleatorio() {
      const indice = Math.floor(Math.random() * imagens.length); // Gera um i­ndice aleatorio
      const footerBannerDiv = document.getElementById("footer-banner");

      // Adiciona o footer-banner com o link no HTML
      footerBannerDiv.innerHTML = `
        <a href="${links[indice]}" target="_blank" class="footer-banner">
          <img src="${imagens[indice]}" alt="OPS!">
        </a>
      `;
    }

    // Chama a funÃ§Ã£o ao carregar a pagina
    mostrarbannerAleatorio();

    // FunÃ§Ã£o para trocar o banner a cada 5 segundos
    setInterval(mostrarbannerAleatorio, 5000); // Troca de banner a cada 5000 milissegundos (5 segundos)
  
