    // Array de URLs das imagens
    const imagens = [
      "https://i1.wp.com/radiomixfm.com.br/wp-content/uploads/2021/08/botao-app.jpg",
      "https://i1.wp.com/radiomixfm.com.br/wp-content/uploads/2021/08/botao-youtube-1.jpg",
      "https://i1.wp.com/aovivo.radiomixfm.com.br/imagens/bg-escuro-player.jpg?resize=360,90",
      "https://geanramos.com.br/img/fno.jpg",
      "https://ntanet.org/wp-content/uploads/2021/09/NTA_2021_Banner_1029_256-360x90.png"
    ];

    // Array de URLs dos links correspondentes
    const links = [
      "https://goo.gl/X1zq32",
      "https://www.youtube.com/radiomixfm?sub_confirmation=1",
      "https://geanramos.com.br/ig/",
      "https://geanramos.com.br/ig/",
      "https://geanramos.com.br/ig/"
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
  