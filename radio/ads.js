"use strict";
var { _ppads, _pbjs, googletag, adsbygoogle } = ((n, t, i, r, u) => {
    return t && t.ready
        ? { _ppads: t, _pbjs: i, googletag: r, adsbygoogle: u }
        : ((t.ready = !0),
          (r.cmd = r.cmd || []),
          (i.que = i.que || []),
          (t.performanceOnStart = performance.now()),
          (t.performanceFirstSlotRenderEnded = !1),
          (t.performanceFirstSlotOnLoadEnded = !1),
          (t.current_outstream_id = 1),
          (t.deviceWidth = n.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
          (t.device = /Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || t.deviceWidth < 800 ? "mobile" : "desktop"),
          (t.isIframe = n.frameElement && n.frameElement.clientHeight <= 400),
          (t.rand = Math.floor(Math.random() * 100)),
          (t.slots = {}),
          (t.currentUrl = n.location.origin + n.location.pathname),
          (t.executeParallelAuctionAlongsidePrebid = { requestManager: { aps: !1, prebid: !1 } }),
          (t.document = document),
          (t.formats = { outstreamInText: null }),
          (t.pbjsUserIds = { identityLink: {} }),
          (t.pbjsGetHighestCpmBids = (n, t = {}) => {
              let r = i.getHighestCpmBids(n);
              const u = (n) => ((n = n.filter((n) => n.cpm > 0)), n.sort((n, t) => t.cpm - n.cpm), n);
              return r && r.length ? r : t && t.hasOwnProperty(n) ? u(t[n].bids) : r;
          }),
          (t.parseBool = function (n) {
              return n === "true";
          }),
          (t.hasChild = function (n) {
              return n && n.hasChildNodes && n.hasChildNodes() ? [...n.childNodes].find((n) => n.innerHTML && n.innerHTML.length) : undefined;
          }),
          (t.hasChildAd = function (n) {
              return n && n.hasChildNodes && n.hasChildNodes() ? [...n.childNodes].find((n) => n.innerHTML && n.innerHTML.length && n.hasAttribute && n.hasAttribute("data-premium")) : undefined;
          }),
          (t.createElementFromString = function (n) {
              const t = new DOMParser(),
                  i = t.parseFromString(n, "text/html");
              return i.body.firstChild;
          }),
          (t.getElementByClassName = function (n, t) {
              const i = n.getElementsByClassName(t);
              return i && i[0] ? i[0] : undefined;
          }),
          (t.sanitizeUndefinedString = function (n) {
              return n && n !== "undefined" ? n : undefined;
          }),
          (t.distinctArrayOfString = function (n) {
              return n.filter((n, t, i) => i.indexOf(n) === t);
          }),
          (t.distinctArrayOfObject = function (n, t) {
              return [...new Map(n.map((n) => [n[t], n])).values()].filter((n) => n);
          }),
          (t.isHomePage = function () {
              return document && document.location && document.location.host && (!document.location.pathname || document.location.pathname.length <= 1);
          }),
          (t.debounce = function (n, t) {
              clearTimeout(n._tId);
              n._tId = setTimeout(() => n(), t);
          }),
          (t.throttle = (n, t) => {
              let i = Date.now();
              return (...r) => {
                  i + t - Date.now() < 0 && (n(r), (i = Date.now()));
              };
          }),
          (t.observer = (n, i) => {
              const r = (n) => {
                  n.type && n.addedNodes && n.addedNodes.length && n.type === "childList" && setTimeout(() => i(), 1e3);
              };
              new MutationObserver(
                  t.throttle((n) => {
                      for (let t of n) {
                          if (Array.isArray(t)) {
                              const n = t.flat(Infinity);
                              for (let t = 0; t < n.length; ++t) r(n[t]);
                              continue;
                          }
                          r(t);
                      }
                  }, 1500)
              ).observe(n, { attributes: !1, childList: !0, subtree: !0 });
          }),
          (t.insertAdjacentHTML = (n, t, i) => {
              let r = { Before: "beforebegin", InsideBefore: "afterbegin", InsideAfter: "beforeend", After: "afterend" };
              n.tagName === "BR" && (r = { After: "afterend" });
              n.tagName === "IMG" && (r = { Before: "beforebegin", After: "afterend" });
              n.insertAdjacentHTML(r[t] ? r[t] : r.After, i);
          }),
          (t.numberRoundDown = (n, t) => {
              const i = Math.pow(10, t);
              return parseFloat((Math.floor(n * i) / i).toFixed(3));
          }),
          (t.setStorage = function (n, t) {
              localStorage.setItem(`_ppads_${n}`, t);
          }),
          (t.getStorage = function (n) {
              return localStorage.getItem(`_ppads_${n}`);
          }),
          (t.YandexLogo = (n) => {
              const u = JSON.parse(n.getAttribute(`data-sizes-${t.device}`)),
                  i = "https://static.premiumads.com.br/yandex",
                  f = {
                      "240x400": [
                          `${i}/with-logo/240x400.webp`,
                          `${i}/with-logo/240x400_1.webp`,
                          `${i}/with-logo/240x400_2.webp`,
                          `${i}/with-logo/240x400_3.webp`,
                          `${i}/without-logo/240x400_.webp`,
                          `${i}/without-logo/240x400_1.webp`,
                          `${i}/without-logo/240x400_2.webp`,
                      ],
                      "300x500": [
                          `${i}/with-logo/300x500.webp`,
                          `${i}/with-logo/300x500_1.webp`,
                          `${i}/with-logo/300x500_2.webp`,
                          `${i}/with-logo/300x500_3.webp`,
                          `${i}/without-logo/300x500.webp`,
                          `${i}/without-logo/300x500_1.webp`,
                          `${i}/without-logo/300x500_2.webp`,
                      ],
                      "300x250": [
                          `${i}/with-logo/300x250.webp`,
                          `${i}/with-logo/300x250_1.webp`,
                          `${i}/with-logo/300x250_2.webp`,
                          `${i}/with-logo/300x250_3.webp`,
                          `${i}/without-logo/300x250.webp`,
                          `${i}/without-logo/300x250_1.webp`,
                          `${i}/without-logo/300x250_2.webp`,
                          `${i}/without-logo/300x250_3.webp`,
                      ],
                      "336x280": [
                          `${i}/with-logo/336x280.webp`,
                          `${i}/with-logo/336x280_1.webp`,
                          `${i}/with-logo/336x280_2.webp`,
                          `${i}/with-logo/336x280_3.webp`,
                          `${i}/without-logo/336x280.webp`,
                          `${i}/without-logo/336x280_1.webp`,
                          `${i}/without-logo/336x280_2.webp`,
                          `${i}/without-logo/336x280_3.webp`,
                      ],
                      "728x90": [
                          `${i}/with-logo/728x90.webp`,
                          `${i}/with-logo/728x90_1.webp`,
                          `${i}/with-logo/728x90_2.webp`,
                          `${i}/with-logo/728x90_3.webp`,
                          `${i}/without-logo/728x90.webp`,
                          `${i}/without-logo/728x90_1.webp`,
                          `${i}/without-logo/728x90_2.webp`,
                      ],
                      "970x250": [
                          `${i}/with-logo/970x250.webp`,
                          `${i}/with-logo/970x250_1.webp`,
                          `${i}/with-logo/970x250_2.webp`,
                          `${i}/with-logo/970x250_3.webp`,
                          `${i}/without-logo/970x250.webp`,
                          `${i}/without-logo/970x250_1.webp`,
                          `${i}/without-logo/970x250_2.webp`,
                      ],
                  };
              let r = "";
              for (let n = 0; n < u.length; n++) if (((r = Object.keys(f).find((t) => t === `${u[n][0]}x${u[n][1]}`)), r)) break;
              if (!r || !r.length) return "";
              const e = f[r],
                  o = Math.floor(Math.random() * e.length);
              return `<div><a href="${"https://yandex.com/games?utm_source=distrib&utm_medium=comino-premiumads&clid=4106960"}"><img src="${
                  e[o]
              }" alt="Find anything: webpages, images, music, good. Solve any problem â€” from everyday to a scientific one. Search by text, voice or image." /></a></div>`;
          }),
          (t.element = t.element || {}),
          (t.element.visible = (n) => {
              n.classList.remove("pads-invisible");
          }),
          (t.element.invisible = (n) => {
              n.classList.add("pads-invisible");
          }),
          (t.customScripts = () => {
              try {
              } catch (n) {
                  t.logerror("core", "customScripts", n);
              }
          }),
          (t.isLocal = !1),
          (t.tagurl = "https://tags.premiumads.com.br"),
          (t.tagurlQueryParams = ""),
          (t.DefaultFloorPrice = 0.2),
          (t.queryParamsHas = (n) => location.search.indexOf(n) >= 0 || localStorage.hasOwnProperty(n) || t.tagurlQueryParams.indexOf(n) >= 0 || !1),
          (t.debug = t.queryParamsHas("pp_debug")),
          (t.skipRefresh = t.queryParamsHas("ppads-skip-refresh")),
          (t.build = "2024.7.7189.2"),
          (t.version = "2024.07.07189.2+ba50a45cfee94a9a2fc91a291c834995bd2d1a50"),
          (t.versionCache = "638564424173431571"),
          (t.dominio = "diariofm.dol.com.br"),
          (t.siteid = "5fbb181c-ff16-43de-cbe7-08db1a852102"),
          (t.partnerid = "0b0cebe7-361b-444f-6f80-08d93fe982c9"),
          (t.canonical = ""),
          (t.urlLogo = ""),
          (t.bidders = {
              size_sizeless: [
                  { bidder: "appnexus", params: { placementId: 29418217, allowSmallerSizes: !0 } },
                  { bidder: "criteo", params: { networkId: "7833" } },
                  { bidder: "triplelift", params: { inventoryCode: "PremiumAds_RON_Prebid" } },
              ],
              size_outstream: [{ bidder: "appnexus", params: { placementId: 29418219, video: { minduration: 1, maxduration: 60, skippable: !0, playback_method: ["auto_play_sound_off"], mimes: ["video/mp4", "application/javascript"] } } }],
              size_instream: [{ bidder: "appnexus", params: { placementId: 29418220, video: { minduration: 1, maxduration: 60, skippable: !0, playback_method: ["auto_play_sound_off"], mimes: ["video/mp4", "application/javascript"] } } }],
          }),
          (t.getBidders = function (n) {
              if (!n || !t.bidders || !t.bidders[n]) return [];
              t.onEachABTestInstance(1, (n) => n.module.reload());
              return t.bidders[n];
          }),
          (t.urls = []),
          (t.BlockUrlsJson = [
              { Title: "Elementor WP Plugin", Method: "Contains", Url: "elementor-preview=1", Block: "3", Format: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15", Device: "All" },
              { Title: "Beaver Builder WP Plugin", Method: "Contains", Url: "fl-builder-template", Block: "3", Format: "0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15", Device: "All" },
          ]),
          (t.PolicyUrl = [
              "correiodopovo.com.br",
              "infonet.com.br",
              "futebolinterior.com.br",
              "50emais.com.br",
              "gmconline.com.br/entretenimento/mel-maia-vaza-nude-e-video-intimo-gera-repercussao-na-web/",
              "g5news.com.br",
              "www.bandab.com.br/topicos/curitiba/",
              "www.fogaonet.com/noticia-em-destaque/kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk/",
              "targethd.net",
              "www.lostiempos.com/oh/actualidad/20220221/perfil-asesinos-seriales-bolivianos",
              "fanfiction.com.br/favoritos/historias/offset/80/",
              "galaticosonline.com",
              "www.bandab.com.br/noticias/categoria/fique-sabendo/",
              "www.reportermt.com/entrevista/energia-trocada-durante-transa-pode-ficar-6-meses-no-seu-corpo-veja-video/130307",
              "opopular.com.br/antes-de-ser-morta-na-zona-norte-de-sp-laudo-aponta-que-raissa-foi-estuprada-1.1911815",
              "fanfiction.com.br/capa_perfil/",
              "fanfiction.com.br/favoritos/historias/offset/10/",
              "fanfiction.com.br/imagem_perfil/",
              "tribunadepetropolis.com.br/login/?redirect=classificados/anuncie",
              "joaobidu.com.br/horoscopo/signos/previsao-touro/",
              "www.bemparana.com.br/noticias/homem-e-executado-a-tiros-perto-de-shopping-em-curitiba-veja-video/",
              "www.comprerural.com/produtor-mata-quadrilha-com-submetralhadora-video/",
              "diariodonordeste.verdesmares.com.br/ultima-hora/pais/caso-miguel-crianca-de-7-anos-morre-apos-ser-drogada-e-ter-corpo-jogado-em-rio-pela-mae-no-rs-1.3117906",
              "www.reportermt.com/nacional/grupo-do-pcc-arromba-caixao-para-queimar-corpo-de-rival-apos-execucao/96075",
              "fanfiction.com.br/historia/551816/Entre_beijos_e_paixoes/capitulo/3/",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/26/",
              "fanfiction.com.br/favoritos/historias/offset/30/",
              "fanfiction.com.br/historia/145572/Never_Say_Never/capitulo/11/",
              "fanfiction.com.br/historia/145572/Never_Say_Never/capitulo/8/",
              "fanfiction.com.br/usuario/deletar_conta/",
              "www.zapcatalao.com.br/faca-parte-do-nosso-grupo-do-whatsapp/",
              "www.novanews.com.br/fale-conosco",
              "fanfiction.com.br/historia/448806/E_Se_Tivesse_Acontecido/capitulo/7/",
              "fanfiction.com.br/favoritos/historias/offset/50/",
              "diariodonordeste.verdesmares.com.br/ultima-hora/mundo/restos-mortais-de-russo-sao-encontrados-no-estomago-de-tubarao-no-egito-1.3380480",
              "fanfiction.com.br/historia/45916/Lembre-me/capitulo/10/",
              "fanfiction.com.br/historia/395398/Apenas_Uma_Noite/capitulo/5/",
              "fanfiction.com.br/historia/237053/Let_Me_Take_You_There/capitulo/23/",
              "fanfiction.com.br/historia/632479/Monotonia/capitulo/21/",
              "fanfiction.com.br/favoritos/historias/offset/40/",
              "fanfiction.com.br/historia/719689/Fotografia/capitulo/16/",
              "www.fuxicogospel.com.br/2019/08/pastora-polemica-evangelico-traicao.html",
              "www.comprerural.com/top-10-maiores-fazendas-do-mundo/",
              "fanfiction.com.br/historia/160141/Momentos_de_Prazer/capitulo/3/",
              "fanfiction.com.br/historia/807283/Amor_em_7_Atos/capitulo/1/",
              "fanfiction.com.br/historia/794302/Historias_da_Ecomoda/capitulo/176/",
              "www.hnt.com.br/cuiabanalia/esquenta-xereca-e-levanta-pau-as-bebidas-quentes-do-mercado-do-porto/117003",
              "fanfiction.com.br/historia/237053/Let_Me_Take_You_There/capitulo/9/",
              "fanfiction.com.br/historia/237053/Let_Me_Take_You_There/capitulo/18/",
              "www.reportermt.com/variedades/arrumei-um-amante-tambem-historias-de-quem-descobriu-uma-traicao/146753",
              "diariodonordeste.verdesmares.com.br/opiniao/colunistas/livia-carvalho/perineum-sunning-tomar-sol-na-regiao-intima-viraliza-na-web-saiba-riscos-da-pratica-1.3323506",
              "ric.com.br/prja/saude/homem-que-aplica-injecoes-ilegais-para-ficar-com-enorme-bumbum-pode-morrer/",
              "fanfiction.com.br/historia/175235/Uma_Situacao_Extrema/capitulo/10/",
              "fanfiction.com.br/historia/79682/7_Dias_para_Fazer_Voce_Me_Amar/capitulo/3/",
              "diariodonordeste.verdesmares.com.br/ultima-hora/mundo/crocodilo-mata-homem-que-nadava-em-lago-no-mexico-1.3269487",
              "fanfiction.com.br/historia/79698/Menina_Veneno/capitulo/6/",
              "fanfiction.com.br/historia/432353/Surpresas_da_vida/capitulo/21/",
              "www.bemparana.com.br/noticia/homem-mata-a-propria-mulher-durante-visita-intima-em-presidio-de-sp",
              "www.cadaminuto.com.br/noticia/2019/10/07/relato-de-uma-sugar-baby",
              "clasificados.lostiempos.com/servicios-compania?texto=&page=2",
              "goio.news/noticias/1200/29874/homem-e-assassinado-na-frente-da-filha-no-parana-assista-ao-video",
              "ric.com.br/prja/seguranca/video-passageiro-tenta-pagar-corrida-com-sexo-oral-e-motorista-o-leva-a-delegacia/",
              "fanfiction.com.br/historia/457524/Um_Prazer_Inesperado/capitulo/11/",
              "diariodonordeste.verdesmares.com.br/seguranca/crianca-e-torturada-e-tem-pes-e-maos-amarrados-por-colegas-dentro-de-escola-em-paracuru-veja-video-1.3324957",
              "www.cadaminuto.com.br/noticia/2009/12/07/prostituicao-dispara-em-maceio-veja-fotos-ineditas-e-um-mapa-da-venda-de-sexo-em-alagoas",
              "fanfiction.com.br/historia/734064/Killer_Queen/capitulo/6/",
              "fanfiction.com.br/historia/432353/Surpresas_da_vida/capitulo/27/",
              "fanfiction.com.br/historia/160141/Momentos_de_Prazer/capitulo/4/",
              "www.tudorondonia.com/noticias/porto-velho-policia-militar-registra-triplo-homicidio-proximo-a-unir-video,12084.shtml",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/3/",
              "fanfiction.com.br/historia/632479/Monotonia/capitulo/9/",
              "www.bandab.com.br/fica-a-dica/cinco-vodkas-de-boa-qualidade-para-usar-nos-seus-drinks-no-final-de-semana/",
              "www.vgnoticias.com.br/policia/pf-encontra-mais-de-100-videos-com-criancas-fazendo-sexo-em-celular-de-jovem-em-mt/91918",
              "fanfiction.com.br/historia/184391/Desejos/capitulo/5/",
              "fanfiction.com.br/historia/157711/O_Tutor/capitulo/6/",
              "fanfiction.com.br/historia/719689/Fotografia/",
              "fanfiction.com.br/historia/254754/Submissa_ao_Prazer/capitulo/3/",
              "fanfiction.com.br/historia/188707/Nasce_Uma_Ninfomaniaca",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/24/",
              "www.folhamax.com/mundo/corregedoria-vai-analisar-celular-de-policial-que-fotografou-mulher-nua-em-delegacia/322562",
              "ric.com.br/prja/seguranca/tive-a-lingua-cortada-e-sangrei-por-horas-revela-vitima-de-carcere-e-mutilacoes-no-oeste-do-pr/",
              "diariodonordeste.verdesmares.com.br/seguranca/serie-de-mortes-estaria-ligada-a-rituais-satanicos-1.1949712",
              "www.reportermt.com/variedades/sou-trans-e-sou-casada-ha-10-anos-com-tres-homens/148600",
              "fanfiction.com.br/historia/667788/Contos_Yaoi/capitulo/11/",
              "fanfiction.com.br/historia/152333/Alugando_Hermione_Granger/capitulo/10/",
              "www.reportermt.com/geral/jovem-de-17-anos-internado-com-dengue-grave-tem-erecao-de-18h/203604",
              "www.correiodopovo.com.br/not%C3%ADcias/pol%C3%ADcia/veja-os-v%C3%ADdeos-do-momento-em-que-l%C3%A1zaro-barbosa-foi-encontrado-1.646079",
              "www.correiodopovo.com.br/not%C3%ADcias/cidades/homem-%C3%A9-flagrado-pelado-no-entorno-de-shopping-de-luxo-de-bh-1.939007",
              "fanfiction.com.br/u/91148/",
              "fanfiction.com.br/historia/405581/What_Doors_May_Open/capitulo/26/",
              "fanfiction.com.br/historia/383529/Totalmente_Seu/capitulo/38/",
              "fanfiction.com.br/historia/184391/Desejos/capitulo/4/",
              "fanfiction.com.br/favoritos/historias/offset/150/",
              "plox.com.br/noticia/26/09/2020/video-flagra-momento-em-que-jovem-e-executado-dentro-de-veiculo-em-ipatinga-veja",
              "fanfiction.com.br/historia/328395/Sexo",
              "fanfiction.com.br/historia/693993/Eu_Odeio_Amar_Voce_-_Paulicia_/capitulo/17/",
              "fanfiction.com.br/historia/457524/Um_Prazer_Inesperado/capitulo/12/",
              "fanfiction.com.br/historia/182923/Possible_love/capitulo/15/",
              "www.reportermt.com/geral/video-mostra-momento-em-que-jovens-sao-atropelados-na-saida-de-boate/87639",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/4/",
              "poa24horas.com.br/noticias/2023/02/video-mc-pipokinha-fala-pela-primeira-vez-sobre-assedio-que-sofreu-em-show/",
              "diariodonordeste.verdesmares.com.br/ultima-hora/pais/influencer-que-postou-traicao-do-namorado-em-motel-diz-que-mulher-flagrada-e-casada-me-conhecia-1.3312185",
              "www.fuxicogospel.com.br/2023/02/prazer-a-gente-tem-com-vagabunda-diz-pastor-durante-sermao.html",
              "www.comprerural.com/conheca-a-tecnica-do-sopro-da-vaca-para-produzir-leite-video/",
              "fanfiction.com.br/historia/97430/Its_Not_a_Fairy_Tale/capitulo/17/",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/5/",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/29/",
              "fanfiction.com.br/historia/698382/The_One_With_The_Sex/capitulo/1/",
              "fanfiction.com.br/historia/457524/Um_Prazer_Inesperado/capitulo/9/",
              "fanfiction.com.br/historia/44725/Noites_Quentes/capitulo/1/",
              "fanfiction.com.br/historia/415576/Amor_Desejado/capitulo/9/",
              "ric.com.br/prja/internet/video-policial-mata-homem-a-tiros-apos-parar-ele-por-excesso-de-velocidade/",
              "fanfiction.com.br/historia/432353/Surpresas_da_vida/capitulo/7/",
              "fanfiction.com.br/historia/346931/Mapas_Katanas/capitulo/1/",
              "fanfiction.com.br/favoritos/historias/offset/190/",
              "www.comprerural.com/limousin-a-raca-gigante-com-mais-de-1200-kg-video/",
              "infonet.com.br/noticias/saude/camisinha-e-indispensavel-ate-em-relacionamentos-longos/",
              "infonet.com.br/noticias/cidade/video-mostra-homem-suspeito-de-roubos-sendo-morto-em-boquim/",
              "fanfiction.com.br/historia/457524/Um_Prazer_Inesperado/capitulo/13/",
              "fanfiction.com.br/historia/432353/Surpresas_da_vida/capitulo/13/",
              "fanfiction.com.br/historia/425616/Entregue_A_Submissao/capitulo/3/",
              "www.automaistv.com.br/destaque/ford-maverick-lariat-fx4-avaliacao/",
              "infonet.com.br/entretenimento-infonet/terapeuta-sexual-ministrara-palestra-beneficente-em-aracaju/",
              "fanfiction.com.br/historia/395398/Apenas_Uma_Noite/capitulo/7/",
              "fanfiction.com.br/historia/254754/Submissa_ao_Prazer/capitulo/2/",
              "diariodonordeste.verdesmares.com.br/ultima-hora/mundo/video-mostra-acidente-com-teleferico-que-deixou-14-mortos-na-italia-1.3098487",
              "diariodonordeste.verdesmares.com.br/ultima-hora/mundo/passageiro-filmou-instante-da-queda-do-aviao-no-nepal-confira-video-1.3324208",
              "www.jornaldacidadeonline.com.br/tag/ludmila-lins-grilo",
              "fanfiction.com.br/historia/97430/Its_Not_a_Fairy_Tale/capitulo/27/",
              "www.reportermt.com/papo-reto/video-mostra-presas-rebolando-e-fazendo-quadradinho-dentro-de-cela-em-mt/127620",
              "fanfiction.com.br/historia/97430/Its_Not_a_Fairy_Tale/capitulo/19/",
              "fanfiction.com.br/historia/710390/Katherine_e_Rebekah_fanfiction/capitulo/1/",
              "www.reportermt.com/geral/sem-calcinha-mulher-faz-barraco-em-upa-e-monta-em-homem/195895",
              "www.meionews.com/afazenda/lary-bottino-de-a-fazenda-13-ja-fez-ensaio-sensual-seminua-fotos-427074/slide/53952",
              "poa24horas.com.br/brasil/2023/04/cenas-fortes-preso-ataca-pm-em-delegacia-e-e-morto/",
              "clasificados.lostiempos.com/servicios-compania",
              "fanfiction.com.br/u/77566/historias/offset/105/",
              "fanfiction.com.br/u/131350/",
              "fanfiction.com.br/historia/743249/The_Black_Swan/capitulo/2/",
              "fanfiction.com.br/historia/328794/Love_Is_Evil/capitulo/2/",
              "fanfiction.com.br/categoria/42/naruto/generos_incluir-7/generos_excluir-16/offset/72/",
              "www.vgnoticias.com.br/policia/jogo-de-sinuca-termina-em-chacina-em-bar-de-mt/98597",
              "www.comprerural.com/conheca-o-cavalo-pantaneiro-rustico-e-versatil/",
              "ric.com.br/prja/internet/simone-susinna-divulga-momento-intimo-com-anitta-e-imagem-viraliza/",
              "poa24horas.com.br/mundo/2022/02/video-homem-morre-apos-ser-atacado-por-tubarao-branco-mata-ataque-foi-gravado/",
              "www.novanews.com.br/noticias/colunas",
              "tribunasf.com.br/barbaridade-homem-e-queimado-vivo-em-angra-dos-reis/",
              "pt.plusfiction.com/book/Intense-Love-92977/chapter/XII-Dont-go-away-Dont-break-my-heart-19",
              "jornalmontesclaros.com.br/2015/03/03/video-intimo-de-sabrina-sato-cai-na-web/",
              "gmconline.com.br/noticias/geral/3-guardas-da-mesma-prisao-sao-condenadas-apos-romance-e-sexo-com-detentos/",
              "fanfiction.com.br/historia/97430/Its_Not_a_Fairy_Tale/",
              "fanfiction.com.br/historia/383529/Totalmente_Seu/",
              "www.novanews.com.br/noticias/colunistas",
              "www.meionews.com/afazenda/lary-bottino-de-a-fazenda-13-ja-fez-ensaio-sensual-seminua-fotos-427074/slide/53950",
              "www.folhamax.com/curiosidades/mulher-faz-video-para-amante-e-manda-no-grupo-da-familia-do-esposo/149026",
              "www.cadaminuto.com.br/noticia/2009/10/01/dani-samambaia-nua-no-palco-do-tudo-e-possivel",
              "www.bemparana.com.br/noticias/parana/no-parana-mulher-sai-procurar-o-marido-que-foi-varrer-o-patio-de-casa-e-flagra-ele-fazendo-sexo-com-crianca-de-11-anos/",
              "opopular.com.br/magazine/modelo-e-a-capa-de-maio-da-playboy-1.1077703",
              "opopular.com.br/cidades/lider-religioso-e-preso-suspeito-de-estuprar-menina-apos-mulher-divulgar-video-dele-se-masturbando-e-olhando-a-crianca-1.3069698",
              "diariodonordeste.verdesmares.com.br/ultima-hora/pais/enfermeira-amputa-parte-do-dedo-de-bebe-ao-retirar-atadura-em-hospital-do-rj-1.3347113",
              "www.novanews.com.br/noticias/charges",
              "www.comprerural.com/dicas-de-como-fazer-silagem-de-grao-de-milho-reidratado/",
              "www.cadaminuto.com.br/noticia/2012/09/09/exginasta-romena-deixa-o-esporte-e-vira-prostituta-de-luxo",
              "joaobidu.com.br/masturbacao-feminina-maneiras/",
              "fanfiction.com.br/u/817691/",
              "emoff.correiobraziliense.com.br/tag/mae-flagra-marido-abusando-da-filha/",
              "diariodonordeste.verdesmares.com.br/ultima-hora/pais/pneu-estoura-em-borracharia-e-mata-mecanico-no-rs-veja-video-1.3365213",
              "www.folhamax.com/policia/major-e-afastado-de-comando-do-bombeiros-suspeito-de-assedio-sexual-em-mt/445998",
              "www.bandab.com.br/seguranca/video-criancas-mortas-patio-creche-ataque-blumenau/",
              "opopular.com.br/cidades/professor-e-agredido-com-socos-e-chutes-por-aluno-que-n-o-queria-se-sentar-diz-escola-video-1.3082251",
              "fanfiction.com.br/historia/218274/Luz_Camera_E_Tesao/capitulo/5/",
              "diariodonordeste.verdesmares.com.br/seguranca/grupo-arrasta-adolescente-para-rua-e-a-agride-em-pindoretama-1.2177575",
              "www.folhamax.com/curiosidades/mulher-tem-orgasmo-ao-tatuar-vagina-e-urina-no-rosto-de-tatuador/283838",
              "www.diariocidade.com/mg/belo-horizonte/guia/fakepath-38559780000187/",
              "www.cadaminuto.com.br/noticia/2013/07/01/sem-calcinha-mesmo-de-saia-longa-selena-gomez-mostra-demais-em-show",
              "www.cadaminuto.com.br/noticia/2011/04/14/homem-e-detido-apos-praticar-sexo-com-uma-porca",
              "opopular.com.br/cidades/video-mostra-preso-sendo-torturado-em-inhumas-1.1546796",
              "opopular.com.br/cidades/corpo-devorado-por-jacare-no-rio-araguaia-pode-ser-de-pescador-desaparecido-diz-policia-1.3090109",
          ]),
          (t.PolicyEnforcedJson = [
              "sangue",
              "morta",
              "presa",
              "executou",
              "tiros",
              "morto",
              "feminicidio",
              "agonizar",
              "vitima",
              "baleado",
              "emboscada",
              "morte",
              "morreu",
              "assasinato",
              "condenado",
              "homicidio",
              "violencia",
              "sexual",
              "acidente",
              "agredido",
              "agredida",
              "agressao",
              "bolsonaro",
              "assassinado",
              "seios",
              "sensualiza",
              "bumbum",
              "sexo",
              "suicidio",
              "cocaina",
              "assassino",
              "crime",
              "nua",
              "doloso",
              "drogas",
              "prostituta",
              "policia",
              "prostituicao",
              "estuprada",
              "estupro",
              "odio",
              "guerra",
              "terrorismo",
              "abuso",
              "presidente-da-republica",
              "fake-news",
              "acidentes",
              "presidente-do-brasil",
              "governo-federal",
              "investigacao",
              "brutalidade",
              "manifestacao",
              "suicidio",
              "matou",
              "violencia",
              "cocaina",
              "corpao",
              "morta",
              "morte",
              "assassino",
              "crime",
              "mortes",
              "assedio",
              "crimes",
              "sexuais",
              "nudes",
              "lula",
              "dilma",
              "pornografia",
              "estupro",
              "aborto",
              "intimas",
          ]),
          (t.DfpPrefix = "DIARIOFM_DOL"),
          (t.DfpId = "34073805"),
          (t.McmMI = !1),
          (t.PrebidTimeout = 2500),
          (i.TIMEOUT = t.PrebidTimeout),
          (i.MASTER_TIMEOUT = i.TIMEOUT + 1e3),
          (t.HasRefresh = t.skipRefresh ? !1 : !0),
          (t.PrebidLazyLoad = !1),
          (t.switches = { prebid: !0, apstag: !1 }),
          (t.HasPremiumLazyLoad = !1),
          (t.PremiumLazyLoadViewport = 1),
          (t.PremiumLazyLoadMobileScale = 2),
          (t.googleTagTargets = {}),
          (t.HasSticky = !1),
          (t.JsonSticky = []),
          (t.HasCustomAd = !1),
          (t.HasAnchor = !0),
          (t.AnchorJson = {
              FloorPrice: { Desktop: 0.05, Mobile: 0.05, Version: "v3" },
              Items: [
                  {
                      Title: "ANCHOR",
                      Selector: null,
                      Position: "Footer",
                      Cap: 0,
                      Refresh: 30,
                      HasCloseButton: 1,
                      BackgroundColorCloseButton: "#77353a",
                      BackgroundColor: "#ffffff",
                      DesktopWidth: "Ad",
                      DesktopSizes: [
                          [970, 90],
                          [728, 90],
                      ],
                      MobileSizes: [
                          [320, 100],
                          [320, 50],
                      ],
                  },
              ],
              Version: "v3",
          }),
          (t.AnchorStyle = `#ppBoxAnchor{position:fixed;display:flex;justify-content:center;align-items:center;text-align:center;z-index:2147483641}#ppBoxAnchor .ppAnchorContainer{position:relative;pointer-events:initial}.ppAnchor{border:15px solid transparent;background:#fff;box-shadow:-1px -1px 4px rgba(0,0,0,.2);display:flex;justify-content:center;align-items:center}.openAnchor #ppBoxAnchor{min-height:80px;min-width:320px;width:100%;transition:all 1s ease;pointer-events:none}#ppBoxAnchor .ppAnchorClose{background:#666;cursor:pointer;position:absolute;right:0;z-index:2;height:30px;width:30px;box-shadow:1px 1px 2px rgba(0,0,0,.31);display:none}.openAnchor #ppBoxAnchor .ppAnchorClose{display:block}#ppBoxAnchor .ppAnchorClose span{background:no-repeat url(https://tags.premiumads.com.br/Content/p_icons_3.png) -49px 0;background-size:83px;float:left;width:14px;height:14px;margin:8px}#ppBoxAnchor.ppAnchorHeader .ppAnchorClose{top:100%}#ppBoxAnchor.ppAnchorFooter .ppAnchorClose{bottom:100%}#ppBoxAnchor.ppAnchorHeader{transform:translateY(-100%);top:0}#ppBoxAnchor.ppAnchorFooter{transform:translateY(100%);bottom:0}#ppBoxAnchor .ppAnchorWidthFull .ppAnchor{flex:1}.openAnchor #ppBoxAnchor.ppAnchorHeader{animation:openAnchorHeader .7s both}.openAnchor #ppBoxAnchor.ppAnchorFooter{animation:openAnchorFooter .7s both}@keyframes openAnchorHeader{0%{transform:translateY(-100%)}100%{transform:translateY(0%)}}@keyframes openAnchorFooter{0%{transform:translateY(100%)}100%{transform:translateY(0%)}}.pp-mobile body.openAnchor.anchorHeader,.pp-desktop body.openAnchor.anchorHeader{margin-top:120px}.pp-mobile body.openAnchor.anchorFooter,.pp-desktop body.openAnchor.anchorFooter{margin-bottom:120px}.brid-temp-holder>img{display:none!important}`),
          (t.PremiumAnchorPositions = []),
          (t.PremiumAnchorOpenedEvent = new Event("pp-anchor-opened")),
          (t.PremiumAnchorClosedEvent = new Event("pp-anchor-closed")),
          (t.PremiumAnchor = class {
              constructor() {
                  this.mainElementId = "ppBoxAnchor";
                  this.closeElementId = "closingppAnchor";
                  this.openClass = "openAnchor";
                  this.reload();
              }
              hasIt() {
                  return (t.isValidUrl() && t.HasAnchor && t.AnchorJson && t.AnchorJson.Items && t.AnchorJson.Items.length) || (this.getElement() && !this.isOpen());
              }
              addEvents() {
                  this.hasIt() && n.addEventListener(t.DisplaySlotRenderEndedEventKey, (n) => this.eventDisplaySlotRenderEndedCallback(n), !1);
              }
              eventDisplaySlotRenderEndedCallback(n) {
                  if (n.detail && n.detail.type === "anchor" && n.detail.element && !t.hasReward()) {
                      const i = this.getElement();
                      i && i.setAttribute("loaded", "true");
                      this.expandAnchor();
                  }
              }
              getElement() {
                  return document.getElementById(this.mainElementId);
              }
              reload() {
                  this.unload();
                  this.load();
              }
              load() {
                  this.hasIt() &&
                      (this.styles(),
                      (t.AnchorPriceDesktop = t.formatFloor(t.AnchorJson.FloorPrice.Desktop)),
                      (t.AnchorPriceMobile = t.formatFloor(t.AnchorJson.FloorPrice.Mobile)),
                      t.AnchorJson.Items.forEach((n) => this.forEachItem(n)),
                      this.addEvents());
              }
              unload() {
                  if (this.hasIt()) {
                      n.removeEventListener(t.DisplaySlotRenderEndedEventKey, this.eventDisplaySlotRenderEndedCallback);
                      try {
                          const n = document.querySelectorAll('[data-premium][data-type="anchor"]');
                          if (!n || !n.length) return;
                          for (let i = 0; i < n.length; i++) t.googletagDestroySlot(n[i]), n[i].parentElement.remove();
                      } catch (i) {
                          t.logerror("adsanchor", "removeBeforeCreateAnchor", i);
                      }
                  }
              }
              forEachItem(n) {
                  if (t.hasValidDataSizes(n.MobileSizes, n.DesktopSizes))
                      try {
                          const i = n.Selector ? document.querySelector(n.Selector) : document.body;
                          if (!i) return;
                          i.insertAdjacentHTML("afterbegin", this.htmltag(n));
                          this.addCloseEvent(n);
                          t.PremiumAnchorPositions.includes(n.Position) || t.PremiumAnchorPositions.push(n.Position);
                      } catch (i) {
                          t.logerror("anchor", "load", i);
                      }
              }
              expandAnchor() {
                  document.body.setAttribute("scrolled", "true");
                  let n = this.getElement();
                  n && n.hasAttribute("loaded") && ((n = n.querySelectorAll(".ppAnchor")[0]), n && t.hasChild(n)) && this.open();
              }
              htmltag(n) {
                  let u = document.body,
                      f = `${t.DfpPrefix}_HEADERSTICKY`;
                  t.AnchorCap = n.Cap;
                  let i = 50;
                  n.MobileSizes && (n.MobileSizes.forEach((n) => (i = n[1] > i ? n[1] : i)), u.classList.add(`ppAnchorMobileHeight${i}`));
                  const e = n.BackgroundColor ? `background-color: ${n.BackgroundColor}` : "",
                      o = n.BackgroundColorCloseButton ? `background-color: ${n.BackgroundColorCloseButton}` : "";
                  let r = `<div id="${this.mainElementId}" class="ppAnchor${n.Position}">`;
                  return (
                      (r += `<div class="ppAnchorContainer ppAnchorWidth${n.DesktopWidth} ppAnchorHeight${i}">`),
                      u.classList.add(`anchor${n.Position}`),
                      n.HasCloseButton && (r += `<div id="${this.closeElementId}" class="ppAnchorClose" style="${o}"><span></span></div>`),
                      r +
                          `<div class="ppAnchor" style="${e}" data-sizes-mobile="${JSON.stringify(n.MobileSizes)}" position="${n.Position}" data-sizes-desktop="${JSON.stringify(
                              n.DesktopSizes
                          )}" data-premium data-type="anchor" data-anchor="true" lazyload="false" data-adunit="${f}"></div></div></div></div>`
                  );
              }
              styles() {
                  document.body.insertAdjacentHTML("beforeend", `<style>${t.AnchorStyle}</style>`);
              }
              open() {
                  let i = document.querySelector(".ppAnchorHeader"),
                      r = document.querySelector(".ppAnchorFooter");
                  r ? document.body.classList.add("anchorFooter") : i && document.body.classList.add("anchorHeader");
                  document.body.classList.add(this.openClass);
                  n.dispatchEvent(t.PremiumAnchorOpenedEvent);
              }
              isOpen() {
                  return document.body.classList.contains(this.openClass);
              }
              addCloseEvent(n) {
                  if (n.HasCloseButton) {
                      const t = document.getElementById(this.closeElementId);
                      t.addEventListener("click", () => {
                          this.remove();
                      });
                  }
              }
              remove() {
                  const i = this.getElement();
                  i &&
                      (document.body.classList.remove(this.openClass),
                      n.dispatchEvent(t.PremiumAnchorClosedEvent),
                      n.removeEventListener(t.DisplaySlotRenderEndedEventKey, this.eventDisplaySlotRenderEndedCallback),
                      i.remove(),
                      t.googletagDestroySlot(i));
              }
          }),
          (t.HasReward = !1),
          (t.RewardBlockUrlsPopupJson = {}),
          (t.RewardBlockUrlsJson = []),
          (t.HasFlex = !1),
          (t.GlobalConfigJson = [{ Selector: ".qt-the-content > p", Multiply: 0.5, EachParagraph: 0 }]),
          (t.GlobalElementAttributes = {
              ARTICLE_WRAP: "pp-article-wrap",
              PARAGRAPH_EACH: "pp-each",
              PARAGRAPH_INTEXT: "pp-intext",
              PARAGRAPH_ON_EACH: "pp-on-each",
              PARAGRAPH_OUTSTREAM: "pp-outstream",
              PARAGRAPH_VALID: "ppad",
              VIEWPORT: "pp-viewport",
          }),
          (t.PremiumGlobal = class {
              constructor() {
                  this.ps = null;
                  this.paragraph = null;
                  this.text_init_position = 0;
                  this.viewport = 1;
                  this.height_dobra;
                  this.minTextLength = 30;
                  this.paragraphClientHeight;
                  this.paragraphCount = 0;
                  this.lineBreakCount = 0;
                  this._global = t.GlobalConfigJson;
                  this._outstream;
                  this._outstreams = t.OutstreamJson || { Items: [] };
                  this.load();
              }
              load() {
                  this.setArticleWraps();
              }
              setArticleWraps() {
                  this._global &&
                      this._global.length &&
                      (this._global.filter((n) => n.Selector && n.Selector.trim()).forEach((n) => this.forEachItem(n)),
                      (this.ps = [...document.querySelectorAll(`[${t.GlobalElementAttributes.PARAGRAPH_VALID}]:not([data-fetch="true"]`)]),
                      this.ps.forEach((n) => this.setAsInTextOrOutstream(n)));
              }
              forEachItem(n) {
                  try {
                      const i = (n) => [...new Set([...document.querySelectorAll(`${n}:not([${t.GlobalElementAttributes.ARTICLE_WRAP}])`)])],
                          u = () => {
                              const t = n.Selector.split(" ");
                              return t.find((n) => this.ps.find((t) => t.closest(`${n}:not([data-fetch="true"]`)));
                          },
                          r = (t) => {
                              this.ps = i(`${n.Selector}${t}`);
                          };
                      if ((r(" p"), (this.ps && this.ps.length) || r(""), !this.ps || !this.ps.length)) return;
                      const f = i(u());
                      f.forEach((i) => {
                          i.setAttribute(t.GlobalElementAttributes.ARTICLE_WRAP, n.Selector), i.setAttribute(t.GlobalElementAttributes.PARAGRAPH_EACH, n.EachParagraph > 0);
                      });
                      this.setHeightDobra(n);
                      this.text_init_position = 0;
                      this.viewport = 1;
                      this.ps.forEach((t) => this.forEachItemSelector(t, n.EachParagraph));
                      this.setLastParagraph();
                  } catch (i) {
                      t.logerror("global", "forEachItem", i);
                  }
              }
              setAsInTextOrOutstream(n) {
                  try {
                      const r = this._outstreams.Items.filter((n) => t.HasOutstream && t.hasValidDataSizes(n.MobileSizes, n.DesktopSizes)),
                          i = parseInt(n.getAttribute(t.GlobalElementAttributes.PARAGRAPH_ON_EACH)),
                          u = i ? [...this.ps].filter((n, t) => (t + 1) % i == 0) : [...this.ps];
                      u.forEach((n, i) => {
                          const u = r.find((n) => n.ReplaceIntext && i + 1 === n.ReplacePosition);
                          u ? n.setAttribute(t.GlobalElementAttributes.PARAGRAPH_OUTSTREAM, !0) : t.HasInText && n.setAttribute(t.GlobalElementAttributes.PARAGRAPH_INTEXT, !0);
                      });
                  } catch (i) {
                      t.logerror("global", "setAsInTextOrOutstream", i);
                  }
              }
              forEachItemSelector(n, t) {
                  if (this.isLineBreakTag(n)) return this.forEachLineBreak(n, t);
                  !n.innerText || n.innerText.length < this.minTextLength || ((this.paragraph = n), (this.paragraphClientHeight = this.paragraph.clientHeight), this.setParagraphDataAttribute(t));
              }
              forEachLineBreak(n, t) {
                  if (n.nextSibling && n.nextSibling.nodeValue && !(n.nextSibling.nodeValue.length < this.minTextLength)) {
                      const i = [100, 130, 160],
                          r = Math.floor(Math.random() * i.length);
                      this.paragraph = n;
                      this.paragraphClientHeight = this.lineBreakCount ? i[r] : 0;
                      this.setParagraphDataAttribute(t);
                      this.lineBreakCount++;
                  }
              }
              setParagraphDataAttribute(n) {
                  this.paragraphCount++;
                  this.paragraph.setAttribute(t.GlobalElementAttributes.PARAGRAPH_VALID, !0);
                  this.paragraph.setAttribute(t.GlobalElementAttributes.PARAGRAPH_ON_EACH, n);
                  const i = t.getOffset(this.paragraph),
                      r = i.top + this.paragraphClientHeight - this.text_init_position;
                  r >= this.height_dobra && (this.paragraph.setAttribute(t.GlobalElementAttributes.VIEWPORT, this.viewport), (this.text_init_position = i.top + this.paragraphClientHeight), this.viewport++);
              }
              setHeightDobra(n) {
                  this.height_dobra = t.getViewPort().height;
                  this.height_dobra > 700 && (this.height_dobra = 700);
                  n.Multiply != 0 && (this.height_dobra = this.height_dobra * n.Multiply);
              }
              setLastParagraph() {
                  this.paragraph && (this.paragraph.setAttribute("pp-last-paragraph", "true"), this.viewport == 1 && this.paragraph.setAttribute(t.GlobalElementAttributes.VIEWPORT, this.viewport));
              }
              isLineBreakTag(n) {
                  return n.tagName && n.tagName == "BR" && n.parentNode.tagName != "P";
              }
          }),
          (t.HasOutstream = !0),
          (t.HasOutstreamSlider = !1),
          (t.playlist = []),
          (t.OutstreamJson = {
              FloorPrice: { Desktop: 0.05, Mobile: 0.05, Version: "v3" },
              Items: [
                  {
                      Title: null,
                      FixedElement: 0,
                      Backfill: "banner",
                      CustomBackfill: null,
                      Javascript: null,
                      Slider: !1,
                      DesktopSizes: [
                          [336, 280],
                          [300, 250],
                      ],
                      MobileSizes: [
                          [336, 280],
                          [300, 250],
                      ],
                      PlayerSizeDesktop: [550, 309],
                      PlayerSizeMobile: [336, 189],
                      PlayerSliderSizeDesktop: [400, 225],
                      PlayerSliderSizeMobile: [225, 126],
                      PrioritizeTeads: !1,
                      EnableDirectCampain: !1,
                      Position: null,
                      xOffset: 0,
                      yOffset: 0,
                  },
              ],
              Version: "v3",
          }),
          (t.IFramePlayer = class {
              constructor(n) {
                  if (
                      ((this.version = `?v=20240627`),
                      (this.videojs = { script: `${t.tagurl}/scripts/video.js/video.min.js${this.version}`, style: `${t.tagurl}/scripts/video.js/video-js.min.css${this.version}` }),
                      (this.ima3 = `https://imasdk.googleapis.com/js/sdkloader/ima3${t.debug ? "_debug" : ""}.js`),
                      (this.contribads = { script: `${t.tagurl}/scripts/videojs-contrib-ads/videojs-contrib-ads.min.js${this.version}`, style: `${t.tagurl}/scripts/videojs-contrib-ads/videojs.ads.css${this.version}` }),
                      (this.ima = { script: `${t.tagurl}/scripts/videojs-ima/videojs.ima.min.js${this.version}`, style: `${t.tagurl}/scripts/videojs-ima/videojs.ima.css${this.version}` }),
                      (this.playlist = { script: `${t.tagurl}/scripts/videojs-playlist/videojs-playlist.min.js${this.version}`, style: "" }),
                      (this.playlistUI = { script: `${t.tagurl}/scripts/videojs-playlist-ui/videojs-playlist-ui.min.js${this.version}`, style: `${t.tagurl}/scripts/videojs-playlist-ui/videojs-playlist-ui.css${this.version}` }),
                      (this.animation = new t.StreamPlayerSliderAnimation()),
                      (this.isMobile = t.device === "mobile"),
                      this.width,
                      this.height,
                      this.network,
                      (this.zIndex = 2147483647),
                      (this.element = { visible: !1, animated: !1 }),
                      (this.instream = { on: !1, slider: !1 }),
                      (this.outstream = { on: !1, slider: !1 }),
                      (this.audio = { on: !1, slider: !1 }),
                      (this.container = document.createElement("div")),
                      (this.iframe = document.createElement("iframe")),
                      (this.toggleStarted = !1),
                      (this.args = n),
                      (this.network = this.args && this.args.network ? this.args.network : {}),
                      (this.network.autoplay = this.network.autoplay || !1),
                      (this.network.version = this.network.version || "v1"),
                      t.playlist && t.playlist.length)
                  ) {
                      const n = t.playlist[Math.floor(Math.random() * t.playlist.length)];
                      this.args.network.poster = n.Poster;
                      this.args.network.src = n.Src;
                      this.args.network.title = n.Title;
                      this.args.network.link = n.Link;
                      this.args.network.type = n.Type || "video/mp4";
                  }
                  this.xOffset = this.network.xOffset || 10;
                  this.yOffset = this.network.yOffset || 10;
                  this.position = this.network.Position || "bottom-right";
                  this.setSize();
                  this.style = { width: this.width, height: this.height, zIndex: this.zIndex, xOffset: this.xOffset, yOffset: this.yOffset, position: this.position, ...(this.args.style || {}) };
                  this.instream.on = this.args.format === "instream";
                  this.instream.slider = this.instream.on && t.InstreamJson && t.InstreamJson.Slider;
                  this.outstream.on = this.args.format.indexOf("outstream") > -1;
                  this.outstream.slider = (this.outstream.on && t.OutstreamJson && t.OutstreamJson.Items && t.OutstreamJson.Items.some((n) => n.Slider)) || this.args.format == "outstream-slider";
                  this.audio.on = this.args.format === "audio";
              }
              getWidth() {
                  return this.isMobile ? this.args.size.mobile.width : this.args.size.desktop.width;
              }
              getHeight() {
                  return this.isMobile ? this.args.size.mobile.height : this.args.size.desktop.height;
              }
              getSliderWidth() {
                  return this.isMobile ? this.args.slider.mobile.width : this.args.slider.desktop.width;
              }
              getSliderHeight() {
                  const n = this.getCssSizePlaylist();
                  return (this.isMobile ? this.args.slider.mobile.height : this.args.slider.desktop.height) + n;
              }
              setSize() {
                  this.width = this.getWidth();
                  this.height = this.getHeight();
              }
              getCssSize() {
                  const n = this.getCssSizePlaylist();
                  return `height: ${this.height + n}px;width: ${this.width}px;`;
              }
              getCssSizePlaylist() {
                  let n = 16;
                  return (t.playlist || []).length && t.playlistEnableThumbs && !this.iframe.classList.contains("pp-slider") && (n += 118), n;
              }
              toggle() {
                  if (this.toggleStarted) return this.isVisible();
                  this.toggleStarted = !0;
                  this.isVisible();
              }
              isVisible() {
                  const n = t.isOnViewportOnly(this.container);
                  if (((this.iframe.dataset.visible = n), n && !this.element.visible && (this.element.visible = n), n && this.element.animated)) {
                      this.unanimate();
                      return;
                  }
                  n || !this.element.visible || this.element.animated || this.animate();
              }
              hasSlider() {
                  return this.instream.slider || this.outstream.slider || this.args.format === "outstream-slider";
              }
              animate() {
                  if (this.hasSlider()) {
                      this.iframe.classList.add("pp-slider");
                      this.iframe.style.cssText += `position: fixed;z-index: ${this.zIndex};`;
                      (this.instream.on || this.outstream.on || this.audio.on) && (this.iframe.style.cssText += `width: ${this.getSliderWidth()}px;height: ${this.getSliderHeight()}px;display: block;`);
                      this.animation.add(this.iframe, this.position, this.xOffset, this.yOffset, !this.instream.on && !this.outstream.on && !this.audio.on);
                      this.element.animated = !0;
                      this.iframe.dataset.visible = this.element.animated;
                      const n = this.iframe.contentWindow || this.iframe.contentDocument || this.iframe;
                      n && n.postMessage && n.postMessage({ slider: !0 });
                  }
              }
              unanimate() {
                  if (this.hasSlider()) {
                      this.iframe.classList.remove("pp-slider");
                      this.iframe.style.cssText += `position: initial;z-index: initial;${this.getCssSize()}`;
                      this.animation.remove(this.iframe);
                      this.element.animated = !1;
                      this.iframe.dataset.visible = this.element.animated;
                      const n = this.iframe.contentWindow || this.iframe.contentDocument || this.iframe;
                      n && n.postMessage && n.postMessage({ slider: !1 });
                  }
              }
              mount() {
                  this.container.style.cssText = `border: 0;padding: 0;display: flex;justify-content: center;${this.getCssSize()}`;
                  this.iframe.dataset.visible = t.isOnViewportOnly(this.iframe);
                  this.iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
                  this.iframe.allowfullscreen = !0;
                  this.iframe.frameborder = "0";
                  this.iframe.id = `premiumads-stream-${Math.floor(Math.random() * Date.now())}`;
                  this.iframe.style.cssText = this.container.style.cssText;
                  this.iframe.style.backgroundColor = "transparent";
                  this.iframe.dataset.network = JSON.stringify(this.network);
                  this.iframe.dataset.format = this.args.format;
                  this.iframe.dataset.style = JSON.stringify(this.style);
                  this.iframe.dataset.playerSize = JSON.stringify([this.width, this.height]);
                  this.iframe.dataset.retry = this.args.retryAttemptLimit;
                  (this.instream.on || this.outstream.on || this.audio.on) && this.args.element && this.args.element.appendChild
                      ? ((this.iframe.dataset.media = JSON.stringify({ src: this.args.src || undefined, type: this.args.type || undefined })), this.args.element.appendChild(this.container), this.container.appendChild(this.iframe))
                      : ((this.iframe.style.cssText += `display: none;`), document.body.appendChild(this.iframe), this.animate());
                  this.iframe.bidsBackHandler = this.args.bidsBackHandler ? () => this.args.bidsBackHandler() : () => {};
                  this.args.onClose && (this.iframe.onClose = () => this.args.onClose());
                  t.scroll.que.push(() => this.toggle());
                  const n = this.iframe.contentWindow || this.iframe.contentDocument || this.iframe;
                  n.document.open();
                  n.document.write(`<link rel="stylesheet" href="${this.videojs.style}" />`);
                  n.document.write(`<link rel="stylesheet" href="${this.contribads.style}" />`);
                  n.document.write(`<link rel="stylesheet" href="${this.ima.style}" />`);
                  (t.playlist || []).length && n.document.write(`<link rel="stylesheet" href="${this.playlistUI.style}" />`);
                  n.document.write(`<script type="text/javascript" src="${this.videojs.script}"></script>`);
                  n.document.write(`<script type="text/javascript" src="${this.ima3}"></script>`);
                  n.document.write(`<script type="text/javascript" src="${this.contribads.script}"></script>`);
                  n.document.write(`<script type="text/javascript" src="${this.ima.script}"></script>`);
                  (t.playlist || []).length && (n.document.write(`<script type="text/javascript" src="${this.playlist.script}"></script>`), n.document.write(`<script type="text/javascript" src="${this.playlistUI.script}"></script>`));
                  n.document.write(`<script type="text/javascript" src="${t.tagurl}/stream/player?${t.tagurlQueryParams}&build=${t.build}"></script>`);
                  n.document.close();
              }
              unmount() {
                  this.container && this.container.remove();
                  this.iframe && this.iframe.remove();
              }
          }),
          (t.PremiumOutstream = class {
              constructor() {
                  this._outstream;
                  this._outstreams = t.OutstreamJson || { Items: [] };
                  this._ps = document.querySelectorAll(`[${t.GlobalElementAttributes.PARAGRAPH_VALID}]`);
                  this._styles = t.OutstreamStyle;
                  this._wrap;
                  this._id = "_ppads_video";
                  this._format = "outstream-intext";
                  this.LAST_PARAGRAPH = "pp-last-paragraph";
                  this.hasEndPostIntext = t.HasInText ? t.InTextJson.some((n) => n.QtdeEndPostDesktop > 0 || n.QtdeEndPostMobile > 0) : !1;
                  this.player;
                  this.load();
              }
              load() {
                  const n = this._outstreams && this._outstreams.Items && this._outstreams.Items.length,
                      i = this._ps && this._ps.length;
                  t.isValidUrl() && t.HasOutstream && n && i && (this.setFloorPrice(), this.setDirectCampain(), this._outstreams.Items.forEach((n) => this.forEachItem(n)), this._wrap && this._outstream) && (this.htmlInserts(), this.ads());
              }
              destroy() {
                  this.player && this.player.unmount();
              }
              forEachItem(n) {
                  if (!this._wrap && t.hasValidDataSizes(n.MobileSizes, n.DesktopSizes)) {
                      try {
                          if (((this._wrap = document.querySelector(`[${t.GlobalElementAttributes.ARTICLE_WRAP}]`)), !this._wrap)) return;
                      } catch (i) {
                          t.logerror("outstream", "load", i);
                          return;
                      }
                      this._outstream = n;
                  }
              }
              setFloorPrice() {
                  this._outstreams && this._outstreams.FloorPrice && ((t.OutstreamFloorPriceDesktop = t.formatFloor(this._outstreams.FloorPrice.Desktop)), (t.OutstreamFloorPriceMobile = t.formatFloor(this._outstreams.FloorPrice.Mobile)));
              }
              setDirectCampain() {
                  this._outstreams && this._outstreams.FloorPrice && (t.OutstreamEnableDirectCampain = this._outstreams.EnableDirectCampain);
              }
              htmlInserts() {
                  this.tagVideo || (this._outstream.ReplaceIntext && (this._ps = [...this._ps].filter((n) => n.hasAttribute(t.GlobalElementAttributes.PARAGRAPH_OUTSTREAM))), this._ps.forEach((n, t) => this.forEachParagraph(n, t)));
              }
              forEachParagraph(n, i) {
                  if ((!n.hasAttribute(this.LAST_PARAGRAPH) || !this.hasEndPostIntext) && !n.hasAttribute("data-fetch")) {
                      const r = () => {
                          this.insertDiv(this.next(n, `[${t.GlobalElementAttributes.PARAGRAPH_VALID}]:not(.pp-box-adunit)`));
                      };
                      try {
                          if (n.getAttribute(t.GlobalElementAttributes.PARAGRAPH_OUTSTREAM)) return r();
                          const u = parseInt(this._outstream.FixedElement, 0),
                              f = u ? 0 : 1,
                              e = n.hasAttribute(t.GlobalElementAttributes.VIEWPORT) && n.getAttribute(t.GlobalElementAttributes.VIEWPORT) == f,
                              o = u && i + 1 == u;
                          if (!e && !o) return;
                          r();
                      } catch (u) {
                          t.logerror("outstream intext", "forEachParagraph", u);
                      }
                  }
              }
              next(n, i) {
                  if (n) {
                      const r = (n, t) => n && n.matches && n.matches(t),
                          u = (n) => {
                              const i = n.nextSibling;
                              return (i && i.hasAttribute && i.hasAttribute("data-premium")) || t.hasChildAd(i);
                          };
                      if (r(n, i) && !u(n)) return n;
                      while ((n = n.nextSibling)) if (r(n, i) && !u(n)) return n.hasAttribute(this.LAST_PARAGRAPH) && this.hasEndPostIntext ? null : n;
                  }
              }
              insertDiv(n) {
                  n &&
                      (n.removeAttribute("pp-intext"),
                      n.setAttribute(t.GlobalElementAttributes.PARAGRAPH_OUTSTREAM, !0),
                      n.setAttribute("data-fetch", !0),
                      n.insertAdjacentHTML(n.nodeName == "BR" ? "beforebegin" : "afterend", `<div id="${this.currentDivId}" style="display:flex;justify-content:center;padding:24px 0;flex-direction:column;align-items:center;"></div>`),
                      (t.OutstreamDivInserted = !0));
              }
              get currentDivId() {
                  let n = "";
                  return t.current_outstream_id > 1 && (n = `_${t.current_outstream_id}`), `${this._id}${n}`;
              }
              get tagVideo() {
                  return document.getElementById(this.currentDivId);
              }
              ads() {
                  this.styles();
                  this.pbjs();
              }
              pbjs() {
                  if (this.tagVideo) {
                      let n = this._outstream.PrioritizeTeads === !1 ? !1 : !0;
                      t.TeadsClassic && n && t.loadTeadsScript("https://a.teads.tv/page/" + t.TeadsClassic + "/tag");
                      this.loadPlayer();
                  }
              }
              loadPlayer() {
                  this.player && this.player.unmount();
                  var n = {
                      desktop: { width: this._outstream.PlayerSizeDesktop ? this._outstream.PlayerSizeDesktop[0] : 550, height: this._outstream.PlayerSizeDesktop ? this._outstream.PlayerSizeDesktop[1] : 309 },
                      mobile: { width: this._outstream.PlayerSizeMobile ? this._outstream.PlayerSizeMobile[0] : 336, height: this._outstream.PlayerSizeMobile ? this._outstream.PlayerSizeMobile[1] : 189 },
                      slider: {
                          desktop: { width: this._outstream.PlayerSliderSizeDesktop ? this._outstream.PlayerSliderSizeDesktop[0] : 400, height: this._outstream.PlayerSliderSizeDesktop ? this._outstream.PlayerSliderSizeDesktop[1] : 225 },
                          mobile: { width: this._outstream.PlayerSliderSizeMobile ? this._outstream.PlayerSliderSizeMobile[0] : 225, height: this._outstream.PlayerSliderSizeMobile ? this._outstream.PlayerSliderSizeMobile[1] : 126 },
                      },
                  };
                  const i = {
                      element: this.tagVideo,
                      network: this._outstream,
                      format: this._format,
                      onClose: () => this.bidsBackHandler(),
                      bidsBackHandler: () => this.bidsBackHandler(),
                      retryAttemptLimit: 5,
                      style: { backgroundColor: "#fff", color: "#fff" },
                      size: { desktop: n.desktop, mobile: n.mobile },
                      slider: n.slider,
                  };
                  i.network.autoplay = !0;
                  i.network.version = "v2";
                  this.player = new t.IFramePlayer(i);
                  this.player.mount();
              }
              styles() {
                  document.body.insertAdjacentHTML("beforeend", `<style>${this._styles}</style>`);
              }
              bidsBackHandler() {
                  this.resetTagVideoInnerHTML();
                  switch (this._outstream.Backfill) {
                      case "banner":
                          this.bidsBackHandlerBanner();
                          break;
                      case "other":
                          if (this._outstream.Javascript)
                              try {
                                  setTimeout(() => eval(this._outstream.Javascript));
                              } catch (n) {
                                  t.logerror("outstream intext", "bidsBackHandler", n);
                              }
                          break;
                      case "bannerTeads":
                          this.bidsBackHandlerBanner();
                          this.bidsBackHandlerTeadsClassic();
                          break;
                      default:
                          this.bidsBackHandlerTeadsClassic();
                  }
              }
              bidsBackHandlerBanner() {
                  const n = document.createElement("div");
                  if ((n.setAttribute("id", `P_${t.DfpPrefix}_OUTSTREAM_0`), n.setAttribute("data-premium", ""), n.setAttribute("data-adunit", `${t.DfpPrefix}_OUTSTREAM`), n.setAttribute("data-type", "intext"), t.device === "desktop")) {
                      const t =
                          this._outstream.DesktopSizes && this._outstream.DesktopSizes.length
                              ? this._outstream.DesktopSizes
                              : [
                                    [640, 360],
                                    [336, 280],
                                    [300, 250],
                                    [1, 1],
                                ];
                      n.setAttribute("data-sizes-desktop", JSON.stringify(t));
                  } else {
                      const t =
                          this._outstream.MobileSizes && this._outstream.MobileSizes.length
                              ? this._outstream.MobileSizes
                              : [
                                    [336, 280],
                                    [300, 250],
                                    [1, 1],
                                ];
                      n.setAttribute("data-sizes-mobile", JSON.stringify(t));
                  }
                  this.resetTagVideoInnerHTML();
                  this.tagVideo.insertAdjacentElement("afterend", n);
                  t.LazyDisplay();
              }
              bidsBackHandlerTeadsClassic() {
                  t.TeadsClassic && t.loadTeadsScript("https://a.teads.tv/page/" + t.TeadsClassic + "/tag");
              }
              resetTagVideoInnerHTML() {
                  this.tagVideo.innerHTML = "";
              }
          }),
          (t.HasInText = !0),
          (t.InTextJson = [
              {
                  Title: "INTEXT",
                  Position: "After",
                  QtdeViewport: 0,
                  Skip: 0,
                  QtdeEndPostDesktop: 2,
                  QtdeEndPostMobile: 1,
                  DesktopSizes: [
                      [336, 280],
                      [300, 250],
                  ],
                  MobileSizes: [
                      [336, 280],
                      [300, 250],
                  ],
              },
          ]),
          (t.InTextStyle = `#ppBoxFinalMateria,.ppBoxIntexts{width:100%;display:flex;flex-direction:row;justify-content:center}#ppBoxFinalMateria[ads="2"],.ppBoxIntexts[ads="2"]{justify-content:space-between}.pp-desktop #ppBoxFinalMateria:not([ads="1"]) .pp-box-adunit,.pp-desktop .ppBoxIntexts .pp-box-adunit{width:50%}.PPLoadMore{display:inline-block}`),
          (t.PremiumIntext = class {
              constructor(n = 1) {
                  this._cycle = n;
                  this._intext;
                  this._ps;
                  this._wrap;
                  this.onEach;
                  this._dfpAdunit = `${t.DfpPrefix}_INTEXT_`;
                  this._intexts = t.InTextJson;
                  this._psCount = 1;
                  this._psSelector = '[ppad="true"]:not([data-fetch="true"])';
                  this._styles = t.InTextStyle;
                  this.LAST_PARAGRAPH = "pp-last-paragraph";
                  this.LIMIT_ADUNIT_NUMBER = 15;
                  this.reload();
                  this._cycle == 1 && this.styles();
              }
              reload() {
                  this._wrap = undefined;
                  this.onEach = !1;
                  const n = this._intexts && this._intexts.length;
                  t.isValidUrl() && t.HasInText && n && this.load();
              }
              load() {
                  this._intexts.forEach((n) => this.forEachItem(n));
              }
              forEachItem(n) {
                  if (t.hasValidDataSizes(n.MobileSizes, n.DesktopSizes)) {
                      const i = [...document.querySelectorAll("[pp-article-wrap]:not([data-fetch])")];
                      ((this._intext = n), this._intext) && i.forEach((n) => this.forEachParent(n));
                  }
              }
              forEachParent(n) {
                  try {
                      if (((this._psCount = 1), (this._wrap = n), !this._wrap)) return;
                      this.onEach = this._wrap.getAttribute("pp-each") === "true";
                      this.htmlInserts();
                      this._wrap.setAttribute("data-fetch", !0);
                  } catch (i) {
                      t.logerror("intext", "load", i);
                  }
              }
              htmlInserts() {
                  this._ps = [...this._wrap.querySelectorAll(this._psSelector)].filter((n) => {
                      const t = n.hasAttribute("pp-intext"),
                          i = n.hasAttribute("pp-outstream");
                      return t && !i;
                  });
                  let n = null,
                      i = 0;
                  (t.device == "mobile" && this._intext.QtdeEndPostMobile && (i = parseInt(this._intext.QtdeEndPostMobile)),
                  t.device == "desktop" && this._intext.QtdeEndPostDesktop && (i = parseInt(this._intext.QtdeEndPostDesktop)),
                  (n = i > 0 ? this._wrap.querySelectorAll(`[pp-viewport]:not([${this.LAST_PARAGRAPH}])`) : this._wrap.querySelectorAll("[pp-viewport]")),
                  this.onEach && (n = this._ps.filter((n) => !n.hasAttribute(this.LAST_PARAGRAPH))),
                  n && n.length) && (n.forEach((n, t) => this.forEachParagraph(n, ++t, i > 0)), this.insertTagAtLast(i), this._psCount++);
              }
              forEachParagraph(n, t, i) {
                  if (!(this._intext.Skip >= t)) {
                      const u = n.getAttribute("pp-viewport"),
                          r = i && n.nextElementSibling && n.nextElementSibling.hasAttribute(this.LAST_PARAGRAPH);
                      if (!r) {
                          if (this.onEach && !r) {
                              this.insertTagOnEach(t, n);
                              this._psCount++;
                              return;
                          }
                          u && !r && (this.insertTagOnViewport(parseInt(u), n), this._psCount++);
                      }
                  }
              }
              insertTagOnViewport(n, i) {
                  let r = 0;
                  if ((this._intext.Skip > 0 && (r = parseInt(this._intext.Skip)), n > this.LIMIT_ADUNIT_NUMBER && (n = this.LIMIT_ADUNIT_NUMBER), n > r)) {
                      const u = this.getIdAdUnit(n);
                      let r = this.createHtmlDivPremium(u);
                      this._intext.QtdeViewport == 2 && t.device === "desktop" && (r = `<div class='ppBoxIntexts'>${r}${r}</div>`);
                      this.insertPosition(i, r);
                  }
              }
              insertTagOnEach(n, t) {
                  this.insertPosition(t, this.createHtmlDivPremium(this.getIdAdUnit(n)));
              }
              insertTagAtLast(n) {
                  let i = `<div id="ppBoxFinalMateria" ads="${n}">`;
                  const r = this._wrap.querySelector(`[${this.LAST_PARAGRAPH}]`);
                  if (r) {
                      for (let r = 1; r <= n; r++) {
                          const u = `${t.DfpPrefix}_FINAL_MATERIA_${String(r).padStart(2, "0")}`;
                          i += this.createHtmlDivPremium(u, !0, n);
                          this._psCount++;
                      }
                      try {
                          r.insertAdjacentHTML("afterend", i);
                      } catch (u) {
                          t.logerror("intext", "load", u);
                          return;
                      }
                  }
              }
              getIdAdUnit(n) {
                  return t.IntextFixedAdUnit ? `${t.DfpPrefix}_INTEXT` : (n > this.LIMIT_ADUNIT_NUMBER && (n = this.LIMIT_ADUNIT_NUMBER), n < 10) ? `${this._dfpAdunit}${String(n).padStart(2, "0")}` : `${this._dfpAdunit}${n}`;
              }
              insertPosition(n, t) {
                  n.tagName === "BR"
                      ? n.insertAdjacentHTML("afterend", t)
                      : this._intext.Position == "Before"
                      ? n.insertAdjacentHTML("beforebegin", t)
                      : this._intext.Position == "InsideBefore"
                      ? n.insertAdjacentHTML("aferbegin", t)
                      : this._intext.Position == "InsideAfter"
                      ? n.insertAdjacentHTML("beforeend", t)
                      : n.insertAdjacentHTML("afterend", t);
                  n.setAttribute("data-fetch", !0);
              }
              createHtmlDivPremium(n, i = false, r = 1) {
                  let u = [];
                  this._intext.MobileSizes &&
                      this._intext.MobileSizes.forEach(function (n) {
                          u.push(n);
                      });
                  let f = [];
                  if (
                      (this._intext.DesktopSizes &&
                          this._intext.DesktopSizes.forEach(function (n) {
                              f.push(n);
                          }),
                      i && r > 1 && (u.length && (u = u.filter((n) => n[0] <= 336 && n[0] > 2)), f.length && (f = f.filter((n) => n[0] <= 336 && n[0] > 2))),
                      t.beforeCreateInTextElement)
                  ) {
                      const i = t.beforeCreateInTextElement({ idAdunit: n, mobileSizes: u, desktopSizes: f });
                      n = i.idAdunit || n;
                  }
                  let e = "";
                  u.length && (e = JSON.stringify(u));
                  let o = "";
                  f.length && (o = JSON.stringify(f));
                  let s = `<div data-premium `;
                  return s + ` data-adunit="${n}"data-sizes-mobile="${e}"data-sizes-desktop="${o}"data-type="intext"data-count="${this._psCount}"></div>`;
              }
              styles() {
                  document.body.insertAdjacentHTML("beforeend", `<style>${this._styles}</style>`);
              }
          }),
          (t.HasInImage = !1),
          (t.HasInFeed = !1),
          (t.elements = {}),
          (t.VastTAG = "https://pubads.g.doubleclick.net/gampad/ads?iu=/34073805/DIARIOFM_DOL_INSTREAM&env=vp&tfcd=0&npa=0&sz=400x300%7C640x360%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&impl=s&correlator=&vad_type=linear"),
          (t.USD = 5.44),
          (t.EUR = 5.91),
          (t.AvantisId = "81"),
          (t.ShowHeroesActive = !0),
          (t.SeedtagHasInImage = !0),
          (t.SeedtagId = ""),
          (t.HasTaboola = !1),
          (t.TaboolaElements = []),
          (t.HasMgid = !1),
          (t.MgidElements = []),
          (t.MgidId = ""),
          (t.MgidWidgetId = ""),
          (t.ViadsActive = !0),
          (t.ViadsId = ""),
          (t.PremiumUri = class {
              constructor(i) {
                  this.url1 = n.location.origin + n.location.pathname;
                  this.url2 = document.location && document.location.toString ? document.location.toString() : "";
                  this._blockUrls = i || t.BlockUrlsJson;
                  this.setUri();
              }
              appendVastTag() {
                  t.debug && t.VastTagHelper.append("adtest", "on");
                  t.VastTagHelper.append("ad_type", "video");
                  t.VastTagHelper.append("description_url", encodeURIComponent(n.location.href));
              }
              setUri() {
                  if (n.location.search && n.location.search.indexOf("utm_") >= 0) {
                      const i = new URLSearchParams(n.location.search);
                      t.UtmSource = i.get("utm_source");
                      t.UtmMedium = i.get("utm_medium");
                      t.UtmCampaign = i.get("utm_campaign");
                  }
                  var i = n.location.pathname.replace(/\/?(\?|#|$)/, "/$1");
                  if (
                      ((this.parts = i.split("/").filter(function (n) {
                          return n !== "";
                      })),
                      this.parts[0] === undefined || this.parts[0] === "/" || this.parts[0] === "")
                  ) {
                      t.categoria = "home";
                      return;
                  }
                  this.parts.length && (t.categoria = this.parts[0].substring(0, 40));
                  this.parts.length > 1 && (t.subcategoria = this.parts[1].substring(0, 40));
                  t.link = this.link(this.parts);
              }
              link(n) {
                  var t = n[n.length - 1];
                  return t.substring(0, 40);
              }
              match(n) {
                  let i;
                  const u = n.Url && n.Url.trim(),
                      r = (n.Display || n.Device || "all").toLowerCase(),
                      f = r == "all" || t.device == r;
                  return (
                      (i =
                          n.Method == "Contains"
                              ? this.url1.includes(n.Url) || this.url2.includes(n.Url)
                              : n.Method == "NotContains" && this.parts.length > 1
                              ? !this.url1.includes(n.Url) || !this.url2.includes(n.Url)
                              : n.Method == "NotEquals"
                              ? this.url1 !== n.Url || this.url2 !== n.Url
                              : this.url1 == n.Url || this.url2 == n.Url),
                      u && f && i
                  );
              }
              matchAny() {
                  return !this._blockUrls || !this._blockUrls.length ? !1 : this._blockUrls.find((n) => this.match(n)) ? !0 : !1;
              }
              checkUrlBlockAll() {
                  const n = this._blockUrls;
                  let t = !1;
                  return (
                      n &&
                          n.length &&
                          n.forEach((n) => {
                              if (this.match(n)) {
                                  const i = n.Block.split(",");
                                  if (i.includes("2")) {
                                      t = !0;
                                      return;
                                  }
                              }
                          }),
                      t
                  );
              }
              isValidUrl(n) {
                  let i = this._blockUrls,
                      r = !0;
                  return (
                      i &&
                          i.length &&
                          i.forEach((i) => {
                              if (this.match(i)) {
                                  const f = i.Block.split(",");
                                  if (f.includes("1") || f.includes("2")) {
                                      r = !1;
                                      return;
                                  }
                                  if (i.Format && !n) {
                                      const u = i.Format.split(",");
                                      u.includes("13") && ((t.HasAnchor = !1), (t.AnchorJson = {}));
                                      u.includes("1") && ((t.HasInText = !1), (t.InTextJson = []));
                                      u.includes("5") && ((t.HasInFeed = !1), (t.InFeedJson = {}));
                                      u.includes("4") && ((t.HasFlex = !1), (t.FlexJson = {}));
                                      u.includes("0") && ((t.HasCustomAd = !1), (t.CustomAdJson = []));
                                      u.includes("2") && (t.GlobalConfigJson = []);
                                      u.includes("3") && ((t.HasSticky = !1), (t.JsonSticky = []));
                                      u.includes("6") && ((t.HasOutstream = !1), (t.OutstreamJson = { Items: [] }));
                                      u.includes("7") && (t.HasPosPopup = !1);
                                      u.includes("8") && ((t.HasOutstreamSlider = !1), (t.OutstreamSliderJson = {}));
                                      u.includes("9") && (t.HasInStream = !1);
                                      u.includes("10") && ((t.HasReward = !1), (t.RewardBlockUrlsPopupJson = {}));
                                      u.includes("11") && ((t.HasNative = !1), (t.NativeJson = {}));
                                      u.includes("12") && ((t.hasRadioAd = !1), (t.RadioAdJson = {}));
                                      u.includes("14") && ((t.HasInImage = !1), (t.InImageJson = []));
                                      u.includes("15") && ((t.HasTaboola = !1), (t.TaboolaElements = []), (t.HasMgid = !1), (t.MgidElements = []));
                                  }
                              }
                          }),
                      r
                  );
              }
          }),
          (t.searchForWords = (n, t) => {
              const i = (n) => n.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
                  r = n.find((n) => {
                      const r = n.replace(/\s+/g, " ").trim().split(" ");
                      if (!r) return !1;
                      const u = r.map((n) => i(t).includes(i(n))).filter((n) => n);
                      return u && u.length === r.length;
                  });
              return r ? !0 : !1;
          }),
          (t.searchForUrl = (n, t) => {
              if (!n || !t) return !1;
              const i = t.replace("https://", "").replace("http://", "");
              return n.includes(i);
          }),
          (t.corev4style = {
              id: "ppads-style-202407071892+ba50a45cfee94a9a2fc91a291c834995bd2d1a50",
              content:
                  '<style id="ppads-style-202407071892+ba50a45cfee94a9a2fc91a291c834995bd2d1a50">[data-premium]{display:flex;align-content:center;justify-content:center;position:relative}[data-premium]:empty:before{content:"";background:transparent url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAUCAYAAAB8gkaAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM3QUY3NTExMTFFMTFFQUJBNjBGRDMzODE5Q0Q4OEUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM3QUY3NTAxMTFFMTFFQUJBNjBGRDMzODE5Q0Q4OEUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDA0OTMxMzcxMDVDMTFFQTkzMzI4MUFDMDc5Rjg4MkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDA0OTMxMzgxMDVDMTFFQTkzMzI4MUFDMDc5Rjg4MkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6hSXXgAAABvElEQVR42uSWv0sCYRjHv0qEk0OD2IFLS+BgcB3l7OAvJDLamrRI78hFCFeHlgyaQhtKWtqEk4gw/4A44pIyaCtE6RKJBpekxd43/FVG5dW59MAL9/K+PN/3+b4f3nt0kiR5RFHcr9fr49AojEbjg9/vX0YsFlPK5XJTy6D5qY6eVmSxWKBl0PxUR48hxr8Vq6K0EYYgHGDnB8ka6RXo0jcqxYoiQpiBi5EQyT39urKRL08qXyDPJXCKEpzyJa7cDkz1bqidIBU/xvXbZAYsp9rGAs7kCayzYwBrx7wi4bDWL7QXTiKZJCP8jII8qlIsl8UmY8eSiXybvAhwd9g67rmPgoQss4i0rTW38djmXtSIETDkGh7nurYZuGnw8nkHlIaiIM+Y39lqYBgVd0bASCh6zO4KED4sRXJzWHOP/R0gFIwUF0UzaO1D+7YNCqnCKVdxBWunOlrtgDZSMEYJWda+FYNvoQuKex4xJYNgse1GCtGBASFgZAjGAdsnu00sPEy5BQoLR9yHFWq1IMB1NInQN4CA5/nmMILqDPdtpH/RSqWiqQjNT3SqOtIWeFttgVnDtuCetAWrrwIMAOi2a8B5U104AAAAAElFTkSuQmCC") no-repeat center center;background-size:auto 16px;width:100%;height:100%;position:absolute}[data-premium][data-type="intext"]>div::before,[data-premium][data-type="infeed"]>div::before{content:"PUBLICIDADE";display:block;white-space:nowrap;position:absolute;background-color:#fff;font-size:10px;letter-spacing:1px;color:#555;top:7px;left:50%;transform:translateX(-50%);padding:0 10px;line-height:normal}.pp-sticky{position:fixed;top:0}.pp-sticky-this .ad-text{display:none}.pp-sticky-this-v2{position:-webkit-sticky;position:sticky;top:0}.pp-close-btn{cursor:pointer;position:absolute;right:15px;top:-1px;height:16px;width:16px;box-shadow:1px 1px 2px rgb(0 0 0/31%);background-color:#000;z-index:9999999999}.pp-close-btn span{background-image:url(https://tags.premiumads.com.br/Content/p_icons_3.png);background-size:69px;background-repeat:no-repeat;background-position:-40px 0;float:left;width:12px;height:12px;margin:2px}.pads-invisible{position:fixed!important;right:100vw!important;z-index:-100!important}:root{--themeColorA:#fff;--themeColorB:transparent}#pp_box_player_outstream{transition:.3s height ease-in-out;width:0;height:0;overflow:hidden}.box-drawer-container{position:absolute;background:rgba(0,0,0,.9);margin-top:-70px;width:0;transition:.2s width ease-in-out;overflow:hidden}.pp_open_video .box-drawer-container{width:110px}.pp_open_video .box-drawer-container.unmuted{width:30px}.volume svg{width:30px;height:30px}.volume{float:left;height:31px;cursor:pointer;display:none}.unmuted .volume.unmute{display:none}.unmuted .volume.mute,.volume.unmute{display:block}.unmute.volume:after{content:"Ativar o som";color:#fff;font-size:10px;float:right;margin-top:4px;font-family:Arial,sans-serif;text-transform:uppercase;margin-right:7px}#pp_box_player_outstream #pp_player_outstream{overflow:hidden;height:0;transition:.3s height ease-in-out}.pp-mobile #pp_box_player_outstream.pp_open_video{width:320px;margin-left:-160px;left:50%;position:relative;height:180px}.pp-desktop #pp_box_player_outstream.pp_open_video{width:498px;margin-left:-249px;left:50%;position:relative;height:280px}.pp-desktop #pp_box_player_outstream #pp_player_outstream{height:280px}.pp-mobile #pp_box_player_outstream #pp_player_outstream{height:180px}#pp_box_player_outstream .play-wrapper{display:none!important}.pp_video_close{background-color:rgba(0,0,0,.8);cursor:pointer;position:absolute;right:0;top:0;width:0;margin-top:-24px;overflow:hidden;height:24px;transition:.2s width ease-in-out}.pp_open_video .pp_video_close{width:34px}.pp_video_close span{background-image:url(https://tags.premiumads.com.br/Content/p_icons_3.png);background-size:75px;background-repeat:no-repeat;background-position:-44px 0;float:left;width:14px;height:12px;margin:6px 10px}.ppOutstream div[id^="google"]{display:none}.pp-slider{position:fixed;z-index:2147483647}</style>',
          }),
          (t.StreamPlayerSliderAnimation = class {
              constructor() {
                  this.document;
                  this.element;
                  this.position;
                  this.xOffset;
                  this.yOffset;
                  this.closeButton = 16;
                  this.anchorHeader = t.HasAnchor && t.PremiumAnchorPositions.includes("Header") ? 130 : 0;
                  this.anchorFooter = t.HasAnchor && t.PremiumAnchorPositions.includes("Footer") ? 130 : 0;
              }
              add(i, r, u, f, e = true) {
                  this.document = t.document;
                  this.element = i;
                  this.position = r;
                  this.xOffset = u ? (Number.isInteger(u) ? u || 10 : u) : undefined;
                  this.yOffset = f ? (Number.isInteger(f) ? f || 10 : f) : undefined;
                  this.setScrolled();
                  this.setPosition(e);
                  const o = n || this.element.contentWindow;
                  o &&
                      o.addEventListener &&
                      (o.addEventListener(
                          "pp-anchor-opened",
                          () => {
                              this.setScrolled(), this.updateYOffset();
                          },
                          !1
                      ),
                      o.addEventListener("pp-anchor-closed", () => this.updateYOffset(), !1));
              }
              remove() {}
              setScrolled() {
                  this.scrolled = this.document.body.getAttribute("scrolled") == "true";
              }
              setPosition(n) {
                  const t = this.xOffset ? (Number.isInteger(this.xOffset) ? `${this.xOffset}px` : this.xOffset) : undefined,
                      r = this.top(this.anchorHeader),
                      u = this.bottom(this.anchorFooter),
                      i = n ? "animation" : "no-animation";
                  this.updateYOffset();
                  switch (this.position) {
                      case "right":
                          this.keyframes(0, t, 0, 0);
                          this.element.classList.add(i, "pp_right");
                          break;
                      case "left":
                          this.keyframes(0, 0, 0, t);
                          this.element.classList.add(i, "pp_left");
                          break;
                      case "top-right":
                          this.keyframes(r, t, 0, 0);
                          this.element.classList.add(i, "pp_right");
                          break;
                      case "bottom-right":
                          this.keyframes(0, t, u, 0);
                          this.element.classList.add(i, "pp_right");
                          break;
                      case "top-left":
                          this.keyframes(r, 0, 0, t);
                          this.element.classList.add(i, "pp_left");
                          break;
                      case "bottom-left":
                      default:
                          this.keyframes(0, 0, u, t);
                          this.element.classList.add(i, "pp_left");
                  }
              }
              top(n) {
                  return Number.isInteger(this.yOffset) ? `${this.yOffset + this.closeButton + (n ? this.anchorHeader : 0)}px` : this.yOffset;
              }
              bottom(n) {
                  return Number.isInteger(this.yOffset) ? `${this.yOffset + (n ? this.anchorFooter : 0)}px` : this.yOffset;
              }
              updateYOffset() {
                  this.position.includes("top") ? (this.element.style.top = this.top(this.scrolled)) : this.position.includes("bottom") && (this.element.style.bottom = this.bottom(this.scrolled));
              }
              keyframes(n, t, i, r) {
                  if (((this.uuid = `keyframes-${this.element.id}`), !this.document.getElementById(this.uuid))) {
                      const f = `from{left:-100%} to{left:${r || 0}}`,
                          e = `from{right:-100%} to{right:${t || 0}}`;
                      let u = `@-webkit-keyframes ${this.uuid}-left-to-right {${f}}`;
                      u += `@keyframes ${this.uuid}-left-to-right {${f}}`;
                      u += `@-webkit-keyframes ${this.uuid}-right-to-left {${e}}`;
                      u += `@keyframes ${this.uuid}-right-to-left {${e}}`;
                      u += `#${this.element.id}.pp-slider.pp_left { left:${r || 0} }`;
                      u += `#${this.element.id}.pp-slider.pp_right { right:${t || 0} }`;
                      u += `#${this.element.id}.pp-slider.animation.pp_left { -webkit-animation: ${this.uuid}-left-to-right 3s linear forwards; animation: ${this.uuid}-left-to-right 3s linear forwards; }`;
                      u += `#${this.element.id}.pp-slider.animation.pp_right { -webkit-animation: ${this.uuid}-right-to-left 3s linear forwards; animation: ${this.uuid}-right-to-left 3s linear forwards; }`;
                      this.document.body.insertAdjacentHTML("beforeend", `<style id="${this.uuid}">${u}</style>`);
                  }
              }
          }),
          (t.styleInit = (n) => {
              if (n.href && ((t.styles = t.styles || []), !(t.styles.indexOf(n.href) > -1))) {
                  n.target || t.styles.push(n.href);
                  const i = document.createElement("link");
                  return (
                      (i.rel = "stylesheet"),
                      (i.href = n.href),
                      n.callback &&
                          i.addEventListener(
                              "load",
                              function (t) {
                                  n.callback(null, t);
                              },
                              !1
                          ),
                      i
                  );
              }
          }),
          (t.scriptInit = (n) => {
              if (n.scriptSrc && ((t.scripts = t.scripts || []), !(t.scripts.indexOf(n.scriptSrc) > -1))) {
                  n.target || t.scripts.push(n.scriptSrc);
                  const i = document.createElement("script");
                  return (
                      (i.type = "text/javascript"),
                      n.scriptSrc.indexOf("a.teads.tv/page/") >= 0 && i.classList.add("teads"),
                      (i.src = n.scriptSrc),
                      (i.async = !0),
                      n.scriptSrc.indexOf("cdn.avantisvideo.com") >= 0 ? (i.id = "avantisJS") : n.scriptId && (i.id = n.scriptId),
                      n.callback &&
                          i.addEventListener(
                              "load",
                              function (t) {
                                  n.callback(null, t);
                              },
                              !1
                          ),
                      i
                  );
              }
          }),
          (t.loadStyle = function (n, i) {
              try {
                  const r = t.styleInit({ href: n, callback: i });
                  if (!r) return;
                  document.getElementsByTagName("head")[0].appendChild(r);
              } catch (r) {
                  t.logerror("loaders", "style", r, n);
              }
          }),
          (t.loadScript = function (n, i, r) {
              try {
                  const u = t.scriptInit({ scriptSrc: n, scriptId: r, callback: i });
                  if (!u) return;
                  document.getElementsByTagName("head")[0].appendChild(u);
              } catch (u) {
                  t.logerror("loaders", "script", u, n);
              }
          }),
          (t.loadStyle_v2 = (n) => {
              try {
                  const i = t.styleInit(n);
                  if (!i) return;
                  n.target.appendChild(i);
              } catch (i) {
                  t.logerror("loaders", "style", i, n);
              }
          }),
          (t.loadScript_v2 = (n) => {
              try {
                  const i = t.scriptInit(n);
                  if (!i) return;
                  n.target.appendChild(i);
              } catch (i) {
                  t.logerror("loaders", "script", i, n);
              }
          }),
          (t.loadTeadsScript = (n) => {
              try {
                  const i = { scriptSrc: n, target: document.getElementsByTagName("body")[0] };
                  t.loadScript_v2(i);
              } catch (i) {
                  t.logerror("loaders", "script", i, n);
              }
          }),
          (t.PremiumLazyLoad = t.HasPremiumLazyLoad),
          (t.PbjsUrl = `${t.tagurl}/scripts/pbjs-min.js?v=20240619`),
          (t.schain = { ver: "1.0", complete: 1, nodes: [{ asi: "premiumads.com.br", sid: t.partnerid, hp: 1 }] }),
          (t.schainUrl = "schain=1.0,1!premiumads.com.br," + t.partnerid + ",1"),
          t.isIframe && (t.PrebidLazyLoad = t.PremiumLazyLoad = !1),
          (t.initAdserver = function () {
              r.cmd.push(function () {
                  let n = r
                      .pubads()
                      .getSlots()
                      .filter(function (n) {
                          return n.ppads && !n.loaded && !n.stop;
                      });
                  if (n && n.length) {
                      for (let t = 0; t < n.length; t++) {
                          let i = n[t];
                          i.loaded = !0;
                          r.display(i.getSlotElementId());
                          i.refresh && r.pubads().refresh([i]);
                      }
                      r.pubads().isInitialLoadDisabled() &&
                          ((n = n.filter(function (n) {
                              return !n.refresh;
                          })),
                          n && n.length && r.pubads().refresh(n));
                  }
              });
          }),
          (t.hasValidDataSizes = function (n, i) {
              return t.device === "mobile" && n && n.length > 0 ? !0 : t.device === "desktop" && i && i.length > 0 ? !0 : !1;
          }),
          (t.sizesHas2x2 = function (n) {
              return n.find((n) => n[0] === 2 && n[1] === 2);
          }),
          (t.sizesIsOnly1x1 = function (n) {
              return !Array.isArray(n) || n.length > 1 ? !1 : n.find((n) => n[0] === 1 && n[1] === 1);
          }),
          (t.getMinMaxSize = function (n) {
              if (n && n.length)
                  try {
                      const t = (t, i) => n.reduce((n, r) => (t === "max" ? (n[i] > r[i] ? n : r) : n[i] < r[i] ? n : r)),
                          i = t("max", 0)[0],
                          r = t("min", 0)[0],
                          u = t("max", 1)[1],
                          f = t("min", 1)[1];
                      return { max: [i, u], min: [r, f] };
                  } catch (i) {
                      t.logerror("core", "getMinMaxSize", i);
                      return;
                  }
          }),
          (t.setSize = function (n, i) {
              if (!t.isIframe && i) {
                  const r = t.getMinMaxSize(n);
                  if (r && r.max && r.min) {
                      const u = i.getAttribute("data-type");
                      (u === "intext" || u === "infeed") && ((i.style.padding = "24px 0 20px 0"), (i.style.margin = "30px 0"));
                      u !== "flex" &&
                          u !== "slider" &&
                          u !== "anchor" &&
                          ((i.style.minWidth = r.max[0] + "px"), (i.style.minHeight = r.max[1] + "px"), t.ExpandAds !== !1 && i.clientWidth > 2 && i.clientHeight > 2 && n.push([i.clientWidth, i.clientHeight]));
                  }
              }
          }),
          (t.formatFloor = function (n) {
              return n && n.replace && n.indexOf && n.indexOf(",") > -1 ? n.replace(",", ".") : n;
          }),
          (t.convertFloorPriceToUSD = (n) => {
              const i = 0.01,
                  r = parseFloat((n / t.USD).toFixed(3)),
                  u = t.numberRoundDown(r, 2);
              return u < i ? (r < i ? i : r) : u;
          }),
          (t.convertDefaultFloorPriceToUSD = () => t.convertFloorPriceToUSD(t.DefaultFloorPrice)),
          (t.getFloor = function (n, i) {
              const u = (n) => (!n || isNaN(n) ? r : parseFloat(n)),
                  f = (n) => (t.DefaultFloorPrice > n ? t.DefaultFloorPrice : n),
                  e = (n) => (i && i === "USD" ? t.convertFloorPriceToUSD(n) : n);
              let r = t.DefaultFloorPrice;
              return n
                  ? (t.device === "desktop"
                        ? n.anchor && t.AnchorPriceDesktop
                            ? (r = f(u(t.AnchorPriceDesktop)))
                            : n.outstream && (t.OutstreamFloorPriceDesktop || t.OutstreamSliderFloorPriceDesktop)
                            ? (r = f(Math.max(u(t.OutstreamFloorPriceDesktop), u(t.OutstreamSliderFloorPriceDesktop))))
                            : n.pospopup && t.PosPopupFloorPriceDesktop !== ""
                            ? (r = f(u(t.PosPopupFloorPriceDesktop)))
                            : n.flex && t.FlexPriceDesktop && (r = f(u(t.FlexPriceDesktop)))
                        : n.anchor && t.AnchorPriceMobile
                        ? (r = f(u(t.AnchorPriceMobile)))
                        : n.outstream && (t.OutstreamFloorPriceMobile || t.OutstreamSliderFloorPriceMobile)
                        ? (r = f(Math.max(u(t.OutstreamFloorPriceMobile), u(t.OutstreamSliderFloorPriceMobile))))
                        : n.pospopup && t.PosPopupFloorPriceMobile !== "" && (r = f(u(t.PosPopupFloorPriceMobile))),
                    e(r))
                  : e(r);
          }),
          (t.setGoogleTagTarget = function (n) {
              t.googleTagTargets &&
                  t.googleTagTargets[n.adunit.dfpCode] &&
                  t.googleTagTargets[n.adunit.dfpCode].length &&
                  t.googleTagTargets[n.adunit.dfpCode].forEach((t) => {
                      n.setTargeting(t.key, t.values || t.value);
                  });
          }),
          (t.setTargeting = function (n, i) {
              if ((t.setGoogleTagTarget(n), n.adunit.dataType && n.setTargeting("data_type", n.adunit.dataType), n.adunit.anchor)) {
                  let t = document.getElementById(n.getSlotElementId());
                  t && n.setTargeting("pp_sticky", t.getAttribute("position") === "Footer" ? "bottom" : "top");
              } else n.adunit.sticky && n.setTargeting("pp_sticky", "vertical");
              n.refresh && n.setTargeting("pp_refresh", "true");
              n.count >= 0 && n.setTargeting("pp_loop", n.count < 10 ? "0" + n.count : n.count.toString());
              var r = t.getFloor(n, "BRL");
              !i && r > 0.01 && n.setTargeting("pp_pb", r.toFixed(2));
          }),
          (t.setinitconfigs = () => {
              t.scroll = { que: [] };
              t.scroll.que.push(() => t.LazyDisplay());
              const n = document.querySelector("html"),
                  i = `pp-${t.device}`;
              document.getElementById(t.corev4style.id) || document.head.insertAdjacentHTML("beforeend", t.corev4style.content);
              n.classList.contains(i) || n.classList.add(i);
          }),
          (t.setCustomScripts = () => {
              try {
                  t.customScripts && t.customScripts(i, r);
              } catch (n) {
                  t.logerror("core", "customScripts", n);
              }
          }),
          (t.onEachABTestInstance = (i, r) => {
              if (!n.ppAdsTestInstance || !n.ppAdsTestInstance.length) {
                  t.onEachABTestInstanceNotice || (t.onEachABTestInstanceNotice = !0);
                  return;
              }
              n.ppAdsTestInstance.forEach((n) => {
                  n.config && n.config.type && n.config.type == i && !n.expiry() && r(n);
              });
          }),
          (t.adsInterstitial = function () {
              if (t.isValidUrl() && t.HasPosPopup && (t.device !== "mobile" || t.PosPopupFloorPriceMobile != "") && (t.device !== "desktop" || t.PosPopupFloorPriceDesktop != "")) {
                  const n = `/${t.DfpId}/${t.DfpPrefix}_VIGNETTE`;
                  return {
                      dataType: "interstitial",
                      code: n,
                      dfpCode: n,
                      mediaTypes: {
                          video: { context: "instream", plcmt: 3, placement: 5, playerSize: [[336, 280]], mimes: ["video/mp4"], protocols: [3, 7], api: [0], playbackmethod: [3], skip: 1, maxduration: 120, linearity: 1, useCacheKey: !0 },
                      },
                      ortb2Imp: { instl: 1 },
                      bids: t.getBidders("size_instream"),
                  };
              }
          }),
          (t.loadAll = () => {}),
          (t.log = function () {
              t.debug;
          }),
          (t.logv2 = function () {
              !t.debug;
          }),
          (t.warn = function () {
              !(t.debug || t.isLocal);
          }),
          (t.logerror = function (n, t) {
              console.error(`%cPREMIUM ERROR ${n.toUpperCase()} ${t.toUpperCase()}%c`, "background:red;color:#fff;border-radius:3px;padding:2px 5px;", "color:#fff;font-weight:bold;text-transform:uppercase;", arguments);
          }),
          (t.adsmgid = function () {
              if (t.isValidUrl() && t.HasMgid)
                  try {
                      t.MgidElements.forEach((n) => {
                          const i = document.querySelector(n.Container);
                          if (i) {
                              const r = document.createElement("div");
                              r.setAttribute("data-type", "_mgwidget");
                              r.setAttribute("data-widget-id", t.MgidWidgetId);
                              const u = document.createElement("script");
                              u.innerHTML = '(function(w,q){w[q]=w[q]||[];w[q].push(["_mgc.load"])})(window,"_mgq");';
                              t.loadScript(`https://jsc.mgid.com/site/${t.MgidId}.js`, () => {
                                  switch (n.Mode) {
                                      case "Before":
                                          i.insertAdjacentElement("beforebegin", r);
                                          i.insertAdjacentElement("beforebegin", u);
                                          break;
                                      case "After":
                                          i.insertAdjacentElement("afterend", r);
                                          i.insertAdjacentElement("afterend", u);
                                          break;
                                      case "InsideBefore":
                                          i.prepend(r);
                                          i.prepend(u);
                                          break;
                                      case "InsideAfter":
                                      default:
                                          i.appendChild(r);
                                          i.appendChild(u);
                                  }
                              });
                          }
                      });
                  } catch (n) {
                      t.logerror("PREMIUM MGID", n);
                  }
          }),
          (t.navegg = function (i) {
              var r = "Navegg";
              i[r]
                  ? ((n.naveggReady = n.naveggReady || []), (n.nvg46575 = new Navegg({ acc: 46575 })))
                  : t.loadScript("https://tag.navdmp.com/universal.min.js", function () {
                        i[r] =
                            i[r] ||
                            function (n) {
                                i[r].q = i[r].q || [];
                                i[r].q.push([this, n]);
                            };
                        n.naveggReady = n.naveggReady || [];
                        n.nvg46575 = new Navegg({ acc: 46575 });
                    });
          }),
          (t.loadOutStreamSlider = () => {
              if (t.HasOutstreamSlider && (!t.OutstreamSlider && t.PremiumOutstreamSlider && (t.OutstreamSlider = new t.PremiumOutstreamSlider()), t.OutstreamSlider) && (t.OutstreamSlider.setup(), t.OutstreamSlider.ready)) {
                  let i = !1;
                  n.addEventListener(
                      t.DisplaySlotRenderEndedEventKey,
                      () => {
                          t.hasReward() || i || ((i = !0), t.OutstreamSliderAlways || !t.HasAnchor ? t.OutstreamSlider.loadScript() : t.OutstreamSliderAlways ? t.HasAnchor || t.OutstreamSlider.loadScript() : t.OutstreamSlider.loadScript());
                      },
                      !1
                  );
              }
          }),
          (t.requestAds = function (n, r = false, u = false) {
              n = n.filter((n) => n.adunit && n.adunit.bids && n.adunit.bids.length);
              n.forEach((n) => {
                  n.clearTargeting(), (n.loaded = !1), (n.timestamp = Date.now() + 1e4), r && ((n.refresh = !0), n.count++), t.setTargeting(n, u);
              });
              n.length && (t.switches.prebid || t.switches.apstag)
                  ? (t.apstagRequestHeaderBids(n),
                    t.prebidRequestHeaderBids(n),
                    setTimeout(function () {
                        t.initAdserver();
                    }, i.MASTER_TIMEOUT))
                  : t.initAdserver();
          }),
          (t.reloadAds = function (n) {
              !n ||
                  !n instanceof Array ||
                  n.forEach(function (n) {
                      let i = r
                          .pubads()
                          .getSlots()
                          .filter((n) => n.adunit)
                          .find((t) => t.adunit.dfpCode === n);
                      i && t.requestAds([i], !0);
                  });
          }),
          (t.Seedtag = function () {
              t.SeedtagHasInImage && t.SeedtagId && t.loadScript("https://t.seedtag.com/t/" + t.SeedtagId + ".js");
          }),
          (t.adstaboola = function () {
              if (t.isValidUrl() && t.HasTaboola) {
                  let i = !1;
                  n._taboola = n._taboola || [];
                  n._taboola.push({ tracking: "utm_source=taboola&utm_medium=organicclicks" });
                  t.categoria === "home" ? _taboola.push({ home: "auto" }) : _taboola.push({ article: "auto" });
                  t.TaboolaElements.forEach(function (n) {
                      document.getElementById(n.Container) && ((i = !0), _taboola.push({ mode: n.Mode, container: n.Container, placement: n.Placement, target_type: n.TargetType }));
                  });
                  _taboola.push({ flush: !0 });
                  i && (t.loadScript("https://cdn.taboola.com/libtrc/" + t.TaboolaName + "/loader.js", null, "tb_loader_script"), n.performance && typeof n.performance.mark == "function" && n.performance.mark("tbl_ic"));
              }
          }),
          (t.Teads = function (n) {
              (t.TeadsClassic || t.TeadsPlacementId) &&
                  ((n.teads_analytics = n.teads_analytics || {}),
                  (n.teads_analytics.analytics_tag_id = "PUB_13576"),
                  (n.teads_analytics.share =
                      n.teads_analytics.share ||
                      function () {
                          (n.teads_analytics.shared_data = n.teads_analytics.shared_data || []).push(arguments);
                      }),
                  t.loadTeadsScript("https://a.teads.tv/analytics/tag.js"));
          }),
          (t.checkUrlBlockAll = function () {
              if (t.Uri) return t.Uri.checkUrlBlockAll();
          }),
          (t.isValidUrl = function (n = false) {
              if (t.Uri) return t.Uri.isValidUrl(n);
          }),
          (t.isOnViewport = function (i, r = 0) {
              var u;
              if (!i) return !1;
              if (i.getAttribute("lazyload") && i.getAttribute("lazyload") == "false") return !0;
              u = t.PremiumLazyLoadViewport;
              t.device == "mobile" && t.PremiumLazyLoadMobileScale > 0 && (u = u * t.PremiumLazyLoadMobileScale);
              var f = n.innerHeight || document.documentElement.clientHeight,
                  o = (u + 1) * f,
                  e = i.getBoundingClientRect(),
                  s = f * r;
              return e.top <= o && e.bottom > s;
          }),
          (t.isOnViewportOnly = function (i) {
              if (!i) return !1;
              const u = t.device == "mobile" && t.PremiumLazyLoadMobileScale > 0 ? t.PremiumLazyLoadMobileScale : t.PremiumLazyLoadViewport,
                  r = i.getBoundingClientRect();
              return r.top >= u && r.bottom <= (n.innerHeight || document.documentElement.clientHeight);
          }),
          (t.PremiumFlex = class {
              constructor() {
                  this.reload();
              }
              hasIt() {
                  return t.isValidUrl() && t.HasFlex && t.FlexJson && t.FlexJson.Items && t.FlexJson.Items.length;
              }
              addEvents() {
                  this.hasIt() && n.addEventListener(t.DisplaySlotRenderEndedEventKey, (n) => this.eventDisplaySlotRenderEndedCallback(n), !1);
              }
              eventDisplaySlotRenderEndedCallback(n) {
                  n.detail && n.detail.type === "flex" && n.detail.element && !t.hasReward() && this.open(n.detail.element);
              }
              reload() {
                  this.unload();
                  this.load();
              }
              load() {
                  this.hasIt() &&
                      ((t.FlexPriceDesktop = t.formatFloor(t.FlexJson.FloorPrice.Desktop)),
                      t.FlexJson.Items.forEach((n) => {
                          if (t.hasValidDataSizes(null, n.DesktopSizes)) {
                              const i = this.htmltag(n);
                              this.close(i);
                          }
                      }),
                      this.addEvents());
              }
              unload() {
                  if (this.hasIt()) {
                      n.removeEventListener(t.DisplaySlotRenderEndedEventKey, this.eventDisplaySlotRenderEndedCallback);
                      try {
                          const n = document.querySelectorAll('[data-premium][data-type="flex"]');
                          if (!n || !n.length) return;
                          for (let i = 0; i < n.length; i++) t.googletagDestroySlot(n[i]), n[i].parentElement.remove();
                      } catch (i) {
                          t.logerror("adsflex", "removeBeforeCreateFlex", i);
                      }
                  }
              }
              htmltag(n) {
                  const r = `${t.DfpPrefix}_FLEX`,
                      u = n.FlexPosition == 0,
                      i = document.createElement("div");
                  return (
                      (i.id = `pads-flex-${Date.now()}${Math.floor(Math.random() * 100)}`),
                      i.classList.add("pp_boxnewflex", "pp-slider", "pads-invisible"),
                      (i.innerHTML = `<div class='pp-close-btn'><span></span></div><div class='pp_newflex' data-sizes-desktop='${JSON.stringify(
                          n.DesktopSizes
                      )}' data-premium data-type='flex' lazyload='false' data-adunit='${r}' data-position="${u ? "right" : "left"}"></div>`),
                      document.body.prepend(i),
                      i
                  );
              }
              open(n) {
                  t.element.visible(n.parentNode);
                  const i = new t.StreamPlayerSliderAnimation();
                  i.add(n.parentNode, n.getAttribute("data-position"), undefined, undefined);
              }
              close(n) {
                  n.querySelector(".pp-close-btn").addEventListener("click", () => {
                      t.element.invisible(n), n.remove(), t.googletagDestroySlot(n);
                  });
              }
          }),
          (t.refresh = function (n, i, r) {
              if (n && r && (r || !t.skipRefresh)) {
                  let u = document.getElementById(n.getSlotElementId());
                  u &&
                      setTimeout(() => {
                          t.requestAds([n], !0, r);
                      }, i);
              }
          }),
          (t.renderAdOnMessageReceived = (n) => {
              if (n && n.data && n.data.ppads) {
                  let i;
                  const u = document.querySelectorAll("iframe");
                  for (let t = 0; t < u.length; t++)
                      if (u[t].contentWindow === n.source) {
                          i = u[t];
                          break;
                      }
                  if (i) {
                      const f = i?.parentNode?.parentNode;
                      f && f.tagName !== "BODY" && r.cmd.push(() => t.renderAdWhenElementFound(n.data, f));
                  }
              }
          }),
          (t.renderAdWhenElementFound = (n, i) => {
              const u = r
                  .pubads()
                  .getSlots()
                  .filter((n) => n.getSlotElementId() === i.id);
              u &&
                  u.length &&
                  (r.destroySlots(u),
                  i.removeAttribute("id", ""),
                  i.removeAttribute("data-fetch", ""),
                  i.removeAttribute("data-google-query-id", ""),
                  i.setAttribute("data-premium", ""),
                  i.setAttribute("data-adunit", n.config.adUnit),
                  i.setAttribute("data-sizes", JSON.stringify(n.config.sizes)),
                  t.display());
          }),
          (t.renderAd = () => {
              n.addEventListener("message", (n) => t.renderAdOnMessageReceived(n), !1);
          }),
          (t.DisplaySlot = (n) => {
              const u = [];
              for (var i = 0; i < n.length; i++) {
                  let e = n[i];
                  t.slots.hasOwnProperty(e.code) && r.destroySlots([t.slots[e.code]]);
                  let f;
                  (e.dataType === "interstitial"
                      ? ((f = r.defineOutOfPageSlot(e.code, r.enums.OutOfPageFormat.INTERSTITIAL)), f && f.addService(r.pubads()).setConfig({ interstitial: { triggers: { navBar: !0, unhideWindow: !0 } } }))
                      : e.dataType === "rewarded"
                      ? ((f = r.defineOutOfPageSlot(e.code, r.enums.OutOfPageFormat.REWARDED)), f && f.addService(r.pubads()))
                      : (f = r.defineSlot(e.path, t.sizesHas2x2(e.dfpSizes) ? e.dfpSizes.concat("fluid") : e.dfpSizes, e.code).addService(r.pubads())),
                  f) &&
                      ((f.sizes = e.dfpSizes),
                      (f.pospopup = e.dataType === "interstitial"),
                      (f.flex = e.flex),
                      (f.anchor = e.anchor),
                      (f.outstream = e.outstream),
                      (f.intext = e.intext),
                      (f.count = 0),
                      (f.adunit = e),
                      (f.ppads = !0),
                      t.setTargeting(f),
                      u.push(f),
                      (t.slots[e.code] = f));
              }
              t.onEachABTestInstance(2, (n) => n.module.set(!0));
              return u;
          }),
          (t.DisplaySetID = () => {
              const i = document.querySelectorAll("div[data-premium],div[data-premium-adunit]"),
                  n = {};
              for (let r = 0; r < i.length; r++) {
                  let u = i[r],
                      f = (u.getAttribute("data-adunit") || u.getAttribute("data-premium-adunit") || "PADRAO").replace(/\//g, "_");
                  if (
                      ((f = t.LivePreviewAdUnit(f)), n.hasOwnProperty(f) ? (n[f] += 1) : (n[f] = 0), !u.id) &&
                      (u.setAttribute("id", "P_" + f + "_" + n[f]),
                      u.getAttribute("data-sizes-" + t.device) === "[[1,1]]" ||
                          u.getAttribute("data-sizes-" + t.device) === "[1,1]" ||
                          u.getAttribute("data-smart") ||
                          u.getAttribute("data-pospopup") ||
                          u.getAttribute("data-type") === "flex" ||
                          t.isIframe)
                  ) {
                      u.setAttribute("lazyload", "false");
                      continue;
                  }
              }
              return n;
          }),
          (t.DisplayLazyLoad = () => {
              const i = [],
                  n = document.querySelectorAll("div[data-premium]:not([data-fetch]),div[data-premium-adunit]:not([data-fetch])");
              if (!t.PremiumLazyLoad) return n;
              if (n && n.length !== 0) {
                  for (let r = 0; r < n.length; r++) {
                      let u = n[r];
                      t.isOnViewport(u) && i.push(u);
                  }
                  return i;
              }
          }),
          (t.AdUnitConfigFloors = (n) => {
              const i = {};
              return (i.banner = t.getFloor(n.formats, "USD")), (i.video = t.getFloor(n.formats, "USD")), { floors: { schema: { fields: ["mediaType"] }, values: i, default: t.convertDefaultFloorPriceToUSD() } };
          }),
          (t.DisplayAdUnitBidsIFrame = (n) => {
              const i = n.dataSizes,
                  r = n.bids.concat(t.getBidders("size_sizeless"));
              return { sizes: i, bids: r };
          }),
          (t.DisplayAdUnitBidsFlex = (n) => {
              const i = t.DisplayAdUnitBidsFlexGetSizes(n),
                  r = n.bids.concat(t.getBidders("size_sizeless"));
              return { sizes: i, bids: r };
          }),
          (t.DisplayAdUnitBidsFlexGetSizes = (n) => {
              if (!t.FlexJson || !t.FlexJson.Items || !t.FlexJson.Items.length || t.device == "mobile" || t.deviceWidth < 1366) return [];
              let i = [],
                  r = 0;
              return (
                  n.dataSizes.forEach(function (n) {
                      (n[0] > 120 && t.deviceWidth < 1700) || ((i[r] = n), r++);
                  }),
                  i
              );
          }),
          (t.DisplayAdUnitBidsOutstream = (n) => {
              const i = n.bids.concat(t.getBidders("size_outstream"));
              return (
                  n.dataSizes.forEach(function (i) {
                      t.getViewPort().width >= i[0] && n.sizes.push(i);
                  }),
                  { sizes, bids: i }
              );
          }),
          (t.DisplayAdUnitBidsDefault = (i) => {
              let u = [],
                  r = [];
              for (let t = 0; t < i.dataSizes.length; t++) {
                  let r = i.dataSizes[t],
                      f = "size_",
                      o = 0,
                      e = 0;
                  if (r instanceof Array) {
                      if (typeof r[0] == "string") continue;
                      f = f + r[0] + "x" + r[1];
                      e = r[0];
                      o = r[1];
                  } else {
                      if (typeof r == "string") continue;
                      f = f + i.dataSizes[0] + "x" + i.dataSizes[1];
                      e = i.dataSizes[0];
                      o = i.dataSizes[1];
                  }
                  if ((n.innerWidth || document.documentElement.clientWidth) >= e) u.push([e, o]);
                  else continue;
                  if (!isNaN(r)) break;
              }
              const f = t.getMinMaxSize(u);
              return (
                  t.sizesIsOnly1x1(u) || (r = r.concat(t.getBidders("size_sizeless"))),
                  i.dataType === "intext" ? (r = r.concat(t.getBidders("size_intext"))) : i.dataType === "anchor" ? (r = r.concat(t.getBidders("size_anchor"))) : f && f.max && f.max[1] >= 250 && (r = r.concat(t.getBidders("size_banner"))),
                  { sizes: u, bids: r }
              );
          }),
          (t.LivePreviewAdUnit = (n) => {
              if (t.livepreview && t.livepreview.length) {
                  const n = Math.floor(Math.random() * t.livepreview.length);
                  return `/${t.livepreview[n]}`;
              }
              return n;
          }),
          (t.DisplayAdUnit = (n) => {
              const i = [],
                  r = (n) => {
                      const i = [];
                      t.onEachABTestInstance(2, (t) => {
                          t.module.exists(n.id) || (document.querySelector(`#${n.id}`).closest("[data-premium]").remove(), i.push(n.id));
                      });
                      return i.length;
                  };
              if (n.elements && n.elements.length) {
                  for (let u = 0; u < n.elements.length; u++) {
                      let f = n.elements[u];
                      if (!r(f)) {
                          let w = f.getAttribute("data-type");
                          if (!f.getAttribute("data-fetch")) {
                              f.setAttribute("data-fetch", "true");
                              let h = f.getAttribute("data-adunit") || f.getAttribute("data-premium-adunit") || "PADRAO";
                              if (((h = t.LivePreviewAdUnit(h)), !t.isIframe)) {
                                  const n = f.getAttribute("data-device") || f.getAttribute("data-premium-device") || "all";
                                  if (n !== "all" && n !== t.device) {
                                      f.style.display = "none";
                                      continue;
                                  }
                              }
                              f.setAttribute("i", u);
                              const a = f.getAttribute("data-type") === "outstream" || !1,
                                  v = f.getAttribute("data-type") === "intext" || !1,
                                  l = f.getAttribute("data-type") === "flex" || !1,
                                  b = f.getAttribute("data-anchor") ? !0 : !1,
                                  k = f.getAttribute("data-sticky") ? !0 : !1;
                              let e = [],
                                  o = [],
                                  s = [];
                              try {
                                  const n = f.getAttribute("data-sizes"),
                                      i = f.getAttribute("data-sizes-" + t.device);
                                  if (!n && !i) continue;
                                  e = n ? JSON.parse(n) : i ? JSON.parse(i) : [];
                              } catch (d) {
                                  t.logerror("display", "data-sizes invalido", d);
                              }
                              if ((!e || !e.length) && f.getAttribute("width")) {
                                  const n = f.getAttribute("width"),
                                      t = f.getAttribute("height");
                                  e.push([parseInt(n), parseInt(t)]);
                              }
                              if (e && e.length && (l || f.offsetParent !== null)) {
                                  let y;
                                  if (
                                      ((y = t.isIframe
                                          ? t.DisplayAdUnitBidsIFrame({ dataSizes: e, bids: s })
                                          : l
                                          ? t.DisplayAdUnitBidsFlex({ dataSizes: e, bids: s })
                                          : a
                                          ? t.DisplayAdUnitBidsOutstream({ dataSizes: e, bids: s })
                                          : t.DisplayAdUnitBidsDefault({ dataSizes: e, bids: s, dataType: w })),
                                      (o = y.sizes),
                                      (s = y.bids),
                                      o && o.length)
                                  ) {
                                      t.setSize(o, f);
                                      const p = (h.indexOf("/") > -1 ? "" : "/" + t.DfpId + "/") + h,
                                          c = {
                                              dfpCode: h,
                                              dataType: w,
                                              dfpSizes: o,
                                              path: p,
                                              code: f.id,
                                              bids: s,
                                              anchor: b,
                                              flex: l,
                                              intext: v,
                                              outstream: a,
                                              sticky: k,
                                              rand: t.rand,
                                              mediaTypes: { banner: { sizes: o } },
                                              ortb2Imp: { ext: { gpid: `${p}#${f.id}`, data: { pbadslot: `${p}#${f.id}` } } },
                                              ...t.AdUnitConfigFloors({ formats: { anchor: b, flex: l, intext: v, outstream: a, sticky: k } }),
                                          };
                                      v &&
                                          f.dataset.count === "1" &&
                                          t.McmMI &&
                                          (c.dfpSizes.push([400, 225]),
                                          (c.code = "_ppads_outstream_intext"),
                                          (f.id = "_ppads_outstream_intext"),
                                          (c.mediaTypes.video = {
                                              context: "outstream",
                                              plcmt: 2,
                                              placement: 3,
                                              playerSize: [[336, 280]],
                                              mimes: ["video/mp4"],
                                              protocols: [3, 7],
                                              api: [0],
                                              playbackmethod: [6],
                                              skip: 1,
                                              maxduration: 120,
                                              linearity: 1,
                                          }),
                                          (c.bids = t.getBidders("size_outstream")));
                                      i.push(c);
                                  }
                              }
                          }
                      }
                  }
                  return i;
              }
          }),
          (t.DisplayTarget = () => {
              if ((r.pubads().setTargeting("url", t.dominio), t.isIframe && r.pubads().set("page_url", t.dominio), t.categoria)) {
                  const n = r.pubads().getTargeting("categoria");
                  if ((r.pubads().setTargeting("categoria", [...n, t.categoria]), t.subcategoria)) {
                      const n = r.pubads().getTargeting("subcategoria");
                      r.pubads().setTargeting("subcategoria", [...n, t.subcategoria]);
                  }
                  t.link && r.pubads().setTargeting("link", t.link);
              }
              t.UtmSource && r.pubads().setTargeting("utm_source", t.UtmSource);
              t.UtmMedium && r.pubads().setTargeting("utm_medium", t.UtmMedium);
              t.UtmCampaign && r.pubads().setTargeting("utm_campaign", t.UtmCampaign);
              t.topicos && r.pubads().setTargeting("topicos", t.topicos);
              t.PolicyEnforcedJson && t.PolicyEnforcedJson.length && (t.searchForWords(t.PolicyEnforcedJson, t.currentUrl) || t.searchForUrl(t.PolicyUrl, t.currentUrl)) && r.pubads().setTargeting("pp_policy", "enforced");
              t.setNaveggTargeting();
          }),
          (t.DisplayPubAdsConfig = () => {
              r.pubads().setSafeFrameConfig({ sandbox: !0, allowOverlayExpansion: !0, allowPushExpansion: !0 }),
                  r.pubads().enableLazyLoad({ fetchMarginPercent: -1, renderMarginPercent: t.PremiumLazyLoadViewport * 100, mobileScaling: t.PremiumLazyLoadMobileScale }),
                  r.pubads().setCentering(!0),
                  r.pubads().enableSingleRequest(),
                  r.enableServices();
          }),
          (t.DisplayImpressionViewable = () => {
              t.googletagEventListeners.que.impressionViewable.push((n) => {
                  const t = document.getElementById(n.slot.getSlotElementId());
                  t.getAttribute("data-sticky") || t.hasAttribute("refreshtime");
              });
          }),
          (t.DisplaySlotOnload = () => {
              t.googletagEventListeners.que.slotOnload.push((n) => {
                  n.slot.ppads && (t.performanceFirstSlotOnLoadEnded || (t.Analytic && t.Analytic.performance(`First Ad OnLoad`), (t.performanceFirstSlotOnLoadEnded = !0)));
              });
          }),
          (t.DisplaySlotRenderEndedEventKey = "pp-slot-render-ended"),
          (t.DisplaySlotRenderEndedDispatchEvent = (i) => {
              const r = new CustomEvent(t.DisplaySlotRenderEndedEventKey, { detail: { element: i, type: i ? i.getAttribute("data-type") : "unknown" } });
              n.dispatchEvent(r);
          }),
          (t.DisplaySlotRenderEnded = () => {
              const f = function (n) {
                      return n === "flex" || n === "anchor" || n === "slider";
                  },
                  e = (n) => {
                      if (!f(n.dataset.type)) {
                          const r = t.YandexLogo(n),
                              i = document.createElement("div");
                          i.insertAdjacentHTML("afterbegin", r);
                          n.innerHTML = "";
                          n.appendChild(i);
                      }
                  },
                  o = (n, u) =>
                      i.que.push(() => {
                          let f = t.pbjsGetHighestCpmBids(u.adunit.code);
                          if (f && f.length && f[0].adId) {
                              const t = r(n);
                              i.renderAd(t, f[0].adId);
                              return;
                          }
                          i.requestBids({
                              adUnits: [u.adunit],
                              bidsBackHandler: (o) => {
                                  if (((f = t.pbjsGetHighestCpmBids(u.adunit.code, o)), f && f.length && f[0].adId)) {
                                      const t = r(n);
                                      i.renderAd(t, f[0].adId);
                                  } else e(n);
                              },
                          });
                      }),
                  r = (n, i) => {
                      const f = document.createElement("div");
                      let r = document.createElement("iframe");
                      r.width = n.clientWidth;
                      r.height = n.clientHeight;
                      r.marginWidth = 0;
                      r.marginHeight = 0;
                      r.frameBorder = 0;
                      r.scrolling = "no";
                      t.debug && (r.style.border = "2px dashed #000");
                      f.appendChild(r);
                      n.innerHTML = "";
                      n.appendChild(f);
                      const u = r.contentWindow.document;
                      if (i)
                          try {
                              u.write(i);
                              u.close();
                          } catch (e) {
                              t.logerror("core", "loadPassback", e);
                          }
                      return u;
                  },
                  s = (i, f) => {
                      if ((!(i.clientHeight <= 2) || t.debug) && !t.DisablePassback)
                          if (t.AdsensePublisherId && t.AdsenseAdunitId) {
                              let r = document.createElement("ins");
                              r.classList.add("adsbygoogle");
                              r.style.display = "block";
                              r.style.minWidth = i.clientWidth + "px";
                              r.style.minHeight = i.clientHeight + "px";
                              r.setAttribute("data-ad-client", t.AdsensePublisherId);
                              r.setAttribute("data-ad-slot", t.AdsenseAdunitId);
                              r.setAttribute("data-format", "auto");
                              r.setAttribute("data-full-width-responsive", "true");
                              const f = document.createElement("div");
                              f.appendChild(r);
                              i.innerHTML = "";
                              i.appendChild(f);
                              t.loadScript(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${t.AdsensePublisherId}`);
                              (u = n.adsbygoogle || []).push({});
                          } else t.PassbackCodeSnipet ? r(i, t.PassbackCodeSnipet) : t.DisablePostBid ? e(i) : o(i, f);
                  };
              t.googletagEventListeners.que.slotRenderEnded.push((n) => {
                  const i = document.getElementById(n.slot.getSlotElementId());
                  n.slot.isEmpty = n.isEmpty;
                  n.isEmpty && !n.slot.refresh && (f(i.dataset.type) ? t.refresh(n.slot, 1e3, !0) : s(i, n.slot));
                  n.isEmpty || t.DisplaySlotRenderEndedDispatchEvent(i);
                  t.performanceFirstSlotRenderEnded || (t.Analytic && t.Analytic.performance(`First Ad Render`), (t.performanceFirstSlotRenderEnded = !0));
              });
          }),
          (t.display = function (n) {
              let f = !1;
              const e = () => {
                  f || (setTimeout(() => t.DisplaySlotRenderEndedDispatchEvent(undefined), 8e3), (f = !0));
              };
              if (!t.checkUrlBlockAll()) {
                  t.DisplaySetID();
                  const u = t.DisplayLazyLoad();
                  if (!u || u.length === 0) return e();
                  const i = t.DisplayAdUnit({ lazy: n, elements: u });
                  if (!n) {
                      if (t.adsInterstitial) {
                          const n = t.adsInterstitial();
                          n && i.push(n);
                      }
                      if (t.RewardBidder) {
                          const n = t.RewardBidder();
                          n && i.push(n);
                      }
                  }
                  let o = [];
                  if (i.length === 0) return e();
                  r.cmd.push(() => {
                      ((o = t.DisplaySlot(i)), t.pubadsReady) || (t.DisplayImpressionViewable(), t.DisplaySlotRenderEnded(), t.DisplaySlotOnload(), t.DisplayTarget(), t.DisplayPubAdsConfig(), (t.pubadsReady = !0));
                  });
                  r.cmd.push(function () {
                      !n && t.PrebidLazyLoad && t.PremiumLazyLoad ? t.initAdserver() : t.requestAds(o);
                  });
              }
          }),
          (t.setNaveggTargeting = function () {
              try {
                  let t,
                      i,
                      u = JSON.parse(n.localStorage.getItem("nvgpersona46575")),
                      f = "";
                  for (i in u) (t = "nvg_" + i), (t = t.substring(0, 10)), r.pubads().setTargeting(t, u[i]), (f += `${t}=${u[i]}&`);
              } catch (i) {
                  t.logerror("core", "setNaveggTargeting", i);
              }
          }),
          (t.apstagInit = function () {
              if (t.switches.apstag && !t.apstagready) {
                  t.apstagready = !0;
                  try {
                      apstag.init({ pubID: "331fbd2e-ff5e-4e7c-9de6-7c2166bce7b7", adServer: "googletag", videoAdServer: "DFP", schain: t.schain, bidTimeout: i.TIMEOUT });
                  } catch (n) {
                      t.logerror("core", "apstag.init", n);
                  }
              }
          }),
          (t.BiddersBack = function () {
              t.switches.apstag && t.switches.prebid
                  ? t.executeParallelAuctionAlongsidePrebid.requestManager.aps && t.executeParallelAuctionAlongsidePrebid.requestManager.prebid && t.initAdserver()
                  : t.switches.prebid && t.executeParallelAuctionAlongsidePrebid.requestManager.prebid
                  ? t.initAdserver()
                  : t.switches.apstag && t.executeParallelAuctionAlongsidePrebid.requestManager.aps && t.initAdserver();
          }),
          (t.apstagRequestHeaderBids = function (n) {
              if (t.switches.apstag && n) {
                  t.executeParallelAuctionAlongsidePrebid.requestManager.aps = !1;
                  const i = n
                      .map((n) => {
                          if (!t.sizesIsOnly1x1(n.sizes)) {
                              const r = () => {
                                      const n = t.convertDefaultFloorPriceToUSD() * 100;
                                      return n < 1 ? Math.round(n) : Math.trunc(n);
                                  },
                                  i = { slotID: n.adunit.code, slotName: n.adunit.path, floor: { currency: "USD", value: r() } };
                              return (
                                  n.adunit.dataType === "interstitial" && t.McmMI
                                      ? ((i.mediaType = "video"), (i.slotID = "_ppads_video"))
                                      : n.adunit.intext && n.adunit.mediaTypes.video && t.McmMI
                                      ? ((i.mediaType = "multi-format"), (i.multiFormatProperties = { display: { sizes: n.adunit.dfpSizes }, video: { sizes: [[400, 300]] } }))
                                      : (i.sizes = n.adunit.dfpSizes),
                                  i
                              );
                          }
                      })
                      .filter((n) => n);
                  i &&
                      i.length &&
                      apstag.fetchBids({ slots: i }, function (n) {
                          n.forEach((n) => {
                              if (n.mediaType === "video") {
                                  let i = new URLSearchParams(n.qsParams),
                                      u = i.get("amzniid");
                                  const f = i.get("amznbid");
                                  let t = r
                                      .pubads()
                                      .getSlots()
                                      .filter((n) => n.pospopup);
                                  t && t.length && (t[0].setTargeting("amzniid", u), t[0].setTargeting("amznbid", f));
                              }
                          });
                          r.cmd.push(function () {
                              apstag.setDisplayBids();
                              t.executeParallelAuctionAlongsidePrebid.requestManager.aps = !0;
                              t.BiddersBack();
                          });
                      });
              }
          }),
          (t.prebidRequestHeaderBids = function (n) {
              if (t.switches.prebid && n) {
                  t.executeParallelAuctionAlongsidePrebid.requestManager.prebid = !1;
                  const r = n.map((n) => n.adunit),
                      u = r.map((n) => n.code);
                  i.que.push(function () {
                      i.requestBids({
                          timeout: i.TIMEOUT,
                          adUnits: r,
                          bidsBackHandler: function () {
                              i.setTargetingForGPTAsync(u);
                              t.executeParallelAuctionAlongsidePrebid.requestManager.prebid = !0;
                              t.BiddersBack(n);
                          },
                      });
                  });
              }
          }),
          (t.getSlot = function (n) {
              let t = null;
              return (
                  r
                      .pubads()
                      .getSlots()
                      .forEach(function (i) {
                          i.getSlotElementId().toString() === n && (i.clearTargeting(), (t = i));
                      }),
                  t
              );
          }),
          (t.LazyDisplay = function () {
              t.fetch || ((t.fetch = !0), t.switches.prebid && !i.getConfig && t.loadScript(t.PbjsUrl), t.display(!0), (t.fetch = !1));
          }),
          (t.getViewPort = function () {
              let t = n.innerHeight || document.documentElement.clientHeight,
                  i = n.innerWidth || document.documentElement.clientWidth;
              return { width: i, height: t };
          }),
          (t.getOffset = function (t) {
              var i = t.getBoundingClientRect();
              return { top: i.top + n.scrollY, left: i.left + n.scrollX };
          }),
          (t.hasReward = () => t.Reward && t.Reward.enabled()),
          (t.googletagRefresh = function () {
              if (t.HasRefresh) {
                  const i = (t.RefreshTime || 30) * 1e3,
                      u = 60,
                      f = function (t) {
                          if (t.getAttribute("lazyload") == "false") return !0;
                          const i = n,
                              f = document,
                              e = f.documentElement,
                              o = f.getElementsByTagName("body")[0],
                              p = i.innerWidth || e.clientWidth || o.clientWidth,
                              s = i.innerHeight || e.clientHeight || o.clientHeight,
                              h = { top: i.pageYOffset, bottom: i.pageYOffset + s },
                              r = t.getBoundingClientRect(),
                              c = { top: r.y + i.pageYOffset, bottom: r.y + r.height + i.pageYOffset },
                              l = r.height,
                              v = Math.max(c.bottom, h.bottom) - Math.min(c.top, h.top),
                              y = v - s,
                              a = l - y;
                          return (a <= 0 ? 0 : (a / l) * 100) >= u;
                      };
                  setInterval(() => {
                      if (!n.document.hidden || !t.DisableRefreshOnHiddenDocument) {
                          let i = r
                              .pubads()
                              .getSlots()
                              .filter(function (n) {
                                  return n.ppads && n.adunit;
                              });
                          i.forEach((n) => {
                              let i = document.getElementById(n.getSlotElementId());
                              !i || !f(i) || t.sizesIsOnly1x1(n.sizes) || (n.timestamp && n.timestamp >= Date.now()) || t.requestAds([n], !0, n.isEmpty);
                          });
                      }
                  }, i);
              }
          }),
          (t.googletagDestroySlot = function (n) {
              n.hasAttribute("data-premium") || (n = n.querySelector("[data-premium]"));
              n &&
                  r.cmd.push(function () {
                      r.destroySlots(
                          r
                              .pubads()
                              .getSlots()
                              .filter((t) => t.getSlotElementId() === n.id)
                      );
                  });
          }),
          (t.URLHelper = class {
              static set(n, t, i) {
                  try {
                      if (!n) return n;
                      const r = new URL(n);
                      return i === undefined ? r.searchParams.delete(t) : r.searchParams.set(t, i), r.toString();
                  } catch (r) {
                      return n;
                  }
              }
          }),
          (t.VastTagHelper = class {
              static append(n, i) {
                  t.VastTAG = t.VastTagHelper.add(n, i);
              }
              static add(n, i) {
                  const r = new URL(t.VastTAG);
                  if (n === "cust_params") {
                      const t = new URLSearchParams(i);
                      if (r.searchParams.has(n)) {
                          const i = new URLSearchParams(decodeURIComponent(r.searchParams.get(n))),
                              u = new URLSearchParams({ ...Object.fromEntries(i), ...Object.fromEntries(t) });
                          r.searchParams.set(n, u.toString());
                      } else r.searchParams.append(n, t.toString());
                      return r.toString();
                  }
                  return r.searchParams.has(n) ? r.toString() : (r.searchParams.append(n, i), r.toString());
              }
          }),
          (t.GoogleTagEvents = class {
              constructor() {
                  this.ready = !1;
                  this.que = { impressionViewable: [], slotRenderEnded: [], slotOnload: [], slotVisibilityChanged: [] };
              }
              mount() {
                  this.ready ||
                      (r.cmd.push(() => {
                          this.onImpressionViewable(), this.onSlotRenderEnded(), this.onSlotOnload(), this.onSlotVisibilityChanged();
                      }),
                      (this.ready = !0));
              }
              hasDataPremium(n, i, r) {
                  if (!n || !n.slot) return !1;
                  const u = document.getElementById(n.slot.getSlotElementId());
                  if (!u) return !1;
                  const f = u && u.hasAttribute("data-premium");
                  if (f && t.debug) {
                      u.style.cssText = `position:relative; box-sizing: border-box; border: solid 3px ${r}`;
                      const e = `evt-slot-${n.slot.getSlotElementId()}`;
                      let f = t.getElementByClassName(u, e);
                      f ||
                          ((f = document.createElement("span")),
                          f.classList.add(e),
                          (f.style.cssText = `position: absolute; right: 0; top: 0; background-color: ${r}; color: #ffffff; text-align: right; word-break: break-word; padding: 0 0 3px 3px; font-size: 0.75em;`),
                          u.append(f));
                      u.title = `${i} ${n.slot.getSlotElementId()}`;
                      u.setAttribute("data-event", i);
                      f.innerHTML = u.title;
                      f.style.backgroundColor = r;
                  }
                  return f;
              }
              onImpressionViewable() {
                  const n = "impressionViewable";
                  r.pubads().addEventListener(n, (t) => {
                      if (this.hasDataPremium(t, n, "#F2CB05")) for (let n = 0; n < this.que.impressionViewable.length; ++n) this.que.impressionViewable[n](t);
                  });
              }
              onSlotRenderEnded() {
                  const n = "slotRenderEnded";
                  r.pubads().addEventListener(n, (t) => {
                      if (this.hasDataPremium(t, n, "#F28705")) for (let n = 0; n < this.que.slotRenderEnded.length; ++n) this.que.slotRenderEnded[n](t);
                  });
              }
              onSlotOnload() {
                  const n = "slotOnload";
                  r.pubads().addEventListener(n, (t) => {
                      if (this.hasDataPremium(t, n, "#267365")) for (let n = 0; n < this.que.slotOnload.length; ++n) this.que.slotOnload[n](t);
                  });
              }
              onSlotVisibilityChanged() {
                  const n = "slotVisibilityChanged";
                  r.pubads().addEventListener(n, (t) => {
                      if (this.hasDataPremium(t, n, "#F23030")) for (let n = 0; n < this.que.slotVisibilityChanged.length; ++n) this.que.slotVisibilityChanged[n](t);
                  });
              }
          }),
          (t.RefreshTime = 30),
          (t.DisablePassback = !1),
          (t.PassbackCodeSnipet = ``),
          (t.afterLoadAllFormats = () => {
              t.googletagRefresh(),
                  t.adstaboola(),
                  t.adsmgid(),
                  t.display(),
                  setTimeout(() => {
                      t.navegg && t.navegg(n, document), t.LiveRamp && t.LiveRamp(), t.Teads && t.Teads(n), t.Seedtag && t.Seedtag();
                  }, 5e3);
          }),
          (t.afterReloadAllFormats = () => {
              t.display();
          }),
          (t.loadAllFormats = () => {
              n.frameElement && (t.HasFlex = t.HasAnchor = t.HasPosPopup = t.HasReward = !1),
                  t.PremiumGlobal && (t.Global = new t.PremiumGlobal()),
                  t.HasInText && t.PremiumIntext && (t.InText = new t.PremiumIntext()),
                  t.HasInImage && t.PremiumInImage && (t.InImage = new t.PremiumInImage()),
                  t.HasAnchor && t.PremiumAnchor && (t.Anchor = new t.PremiumAnchor()),
                  t.HasFlex && t.PremiumFlex && (t.formats.flex = new t.PremiumFlex()),
                  t.HasInFeed && t.PremiumInfeed && (t.InFeed = new t.PremiumInfeed()),
                  t.CustomAdFormat && (t.CustomAd = new t.CustomAdFormat(t.CustomAdJson, t.CustomAdStyle)),
                  t.RewardFormat && (t.Reward = new t.RewardFormat()),
                  t.HasInStream && t.PremiumInstream && new t.PremiumInstream(),
                  t.loadOutStreamSlider && t.loadOutStreamSlider(),
                  t.HasRadioAd && t.RadioAd && new t.RadioAd(),
                  t.loadOutstream();
          }),
          (t.loadOutstream = () => {
              let i = !1;
              n.addEventListener(
                  t.DisplaySlotRenderEndedEventKey,
                  () => {
                      t.hasReward() ||
                          i ||
                          ((i = !0),
                          t.formats.outstreamInText && (t.formats.outstreamInText.destroy(), (t.formats.outstreamInText = undefined)),
                          t.HasOutstream && t.PremiumOutstream && !t.formats.outstreamInText && ((t.formats.outstreamInText = new t.PremiumOutstream()), (t.PassbackTeads = () => t.formats.outstreamInText.loadPlayer())));
                  },
                  !1
              );
          }),
          (t.reloadAllFormats = () => {
              t.Global && t.Global.load(),
                  t.InText && t.InText.reload(),
                  t.InImage && t.InImage.reload(),
                  t.Anchor && t.Anchor.reload(),
                  t.formats.flex && t.formats.flex.reload(),
                  t.CustomAd && t.CustomAd.reload(),
                  t.Reward && t.Reward.reload(),
                  t.InFeed && t.InFeed.reload(),
                  t.formats.outstreamInText && (t.formats.outstreamInText.destroy(), (t.formats.outstreamInText = undefined)),
                  t.loadOutStreamSlider && t.loadOutStreamSlider(),
                  t.loadOutstream();
          }),
          (t.load = () => {
              if ((t.setinitconfigs(), t.isIframe)) return t.display();
              try {
                  t.setCustomScripts();
              } catch (n) {
                  t.logerror("load", "customScripts", n);
              }
              t.loadAllFormats();
              t.afterLoadAllFormats();
              t.renderAd();
          }),
          (t.reload = () => {
              if ((t.setinitconfigs(), t.isIframe)) return t.display();
              t.reloadAllFormats();
              t.afterReloadAllFormats();
          }),
          (() => {
              try {
                  t.Config = JSON.parse(localStorage.getItem("_ppads"));
                  t.Config
                      ? (t.Config.Anchor && t.Config.Anchor.Viewed ? t.Config.Anchor.Expires < new Date().getTime() && (t.Config.Anchor.Viewed = !1) : (t.Config.Anchor.Viewed = !1),
                        t.Config.PosPopup && t.Config.PosPopup.Viewed ? t.Config.PosPopup.Expires < new Date().getTime() && (t.Config.PosPopup.Viewed = !1) : (t.Config.PosPopup.Viewed = !1))
                      : (t.Config = { Flex: { Viewed: !1 }, Anchor: { Viewed: !1 }, PosPopup: { Viewed: !1 } });
              } catch (r) {
                  t.Config = { Flex: { Viewed: !1 }, Anchor: { Viewed: !1 }, PosPopup: { Viewed: !1 } };
                  t.logerror("loaders", "config", r);
              }
              n.addEventListener(
                  "scroll",
                  t.throttle(() => {
                      const n = () => {
                          for (let n = 0; n < t.scroll.que.length; ++n) t.scroll.que[n]();
                      };
                      t.debounce(() => n(), 500);
                  }, 500)
              );
              t.loadScript("https://securepubads.g.doubleclick.net/tag/js/gpt.js");
              t.googletagEventListeners = new t.GoogleTagEvents();
              t.googletagEventListeners.mount();
              t.switches.prebid && !t.PrebidLazyLoad && t.loadScript(t.PbjsUrl);
              t.apstagInit();
              t.EnableTagsAnalytics && new t.EnableTagsAnalytics();
              t.spaReadyKey = "pp-spa-ready";
              t.afterSPAChanges = () =>
                  setTimeout(() => {
                      t.reload();
                  });
              t.getLastURL = () => {
                  const i = ["#google_vignette", "#goog_rewarded"];
                  let n = location.href;
                  for (var t = 0; t < i.length; t++) n = n.replace(i[t], "");
                  return n;
              };
              t.lastURL = t.getLastURL();
              t.afterPageChanges = (n) =>
                  setTimeout(() => {
                      const i = document.body.classList;
                      i.contains(t.spaReadyKey) || i.add(t.spaReadyKey);
                      n();
                  });
              setInterval(() => {
                  const n = t.getLastURL();
                  n !== t.lastURL && ((t.lastURL = n), t.afterPageChanges(() => (t.afterSPAChangesCustomScriptCallback ? t.afterSPAChangesCustomScriptCallback() : t.afterSPAChanges())));
              }, 3e3);
              t.switches.prebid &&
                  i.que.push(function () {
                      var n = {
                          bidderTimeout: i.TIMEOUT,
                          debug: t.debug,
                          rubicon: { singleRequest: !0, rendererConfig: { label: "PUBLICIDADE", collapse: !1 } },
                          improvedigital: { singleRequest: !0, usePrebidSizes: !0 },
                          userSync: {
                              filterSettings: { iframe: { bidders: "*", filter: "include" }, image: { bidders: "*", filter: "include" } },
                              syncsPerBidder: 5,
                              syncDelay: 5e3,
                              auctionDelay: 0,
                              userIds: [{ name: "criteo" }, { ...t.pbjsUserIds.identityLink }, { name: "naveggId" }],
                          },
                          priceGranularity: {
                              buckets: [
                                  { max: 3, increment: 0.01 },
                                  { max: 8, increment: 0.05 },
                                  { max: 20, increment: 0.5 },
                                  { max: 35, increment: 1 },
                              ],
                          },
                          enableSendAllBids: !1,
                          schain: { validation: "strict", config: t.schain },
                          maxRequestsPerOrigin: 10,
                          maxNestedIframes: 10,
                          floors: { enforcement: { enforceJS: !0 }, schema: { fields: ["mediaType"] }, currency: "USD" },
                          suppressEmptyKeys: !0,
                          cache: { url: "https://prebid.adnxs.com/pbc/v1/cache", ignoreBidderCacheKey: !0 },
                          enableTIDs: !0,
                      };
                      n.currency = { adServerCurrency: "USD", rates: { USD: { USD: 1, BRL: t.USD, EUR: t.USD / t.EUR } } };
                      i.setConfig(n);
                      i.aliasBidder("appnexus", "appnexusTest");
                      i.bidderSettings = { standard: { storageAllowed: !0 } };
                  });
              t.PremiumUri && ((t.Uri = new t.PremiumUri()), t.Uri.appendVastTag());
              t.load();
          })(),
          { _ppads: t, _pbjs: i, googletag: r, adsbygoogle: u });
})(window, _ppads || {}, window._pbjs || {}, window.googletag || {}, window.adsbygoogle || []);
