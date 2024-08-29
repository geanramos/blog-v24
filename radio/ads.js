<script>
    // JavaScript para rotatividade dos banners
    const banners = [
      { img: 'https://woodpunchsgraphics.com/cdn/shop/products/Original-GIF_dbaa3924-753c-408e-b951-5ac2468573b6.gif', link: 'https://geanramos.com.br/radio/#01' },
      { img: 'https://woodpunchsgraphics.com/cdn/shop/products/Original-GIF-Blue_b3dccbb4-99c0-46ce-b08a-761efb8d4b69.gif', link: 'https://geanramos.com.br/radio/#02' },
      { img: 'https://woodpunchsgraphics.com/cdn/shop/products/Original-GIF_d996eed6-47a0-49ea-abc6-123e75c0d89e.gif', link: 'https://geanramos.com.br/radio/#03' }
    ];
    const bannerContainer = document.querySelector('.banner');
    const closeButton = document.querySelector('.close-button');

    let currentBannerIndex = 0;

    function rotateBanner() {
      const { img, link } = banners[currentBannerIndex];
      bannerContainer.innerHTML = `
        <a href="${link}" target="_blank">
          <img src="${img}" alt="Banner">
        </a>
        <button class="close-button">Fechar</button>
      `;
      currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    }

    // Rotacionar o banner a cada 5 segundos
    setInterval(rotateBanner, 5000);

    // Ocultar o banner ao clicar no botão
    closeButton.addEventListener('click', () => {
      bannerContainer.style.display = 'none';
    });
  </script>