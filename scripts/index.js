// menu mobile
const btnToggle = document.querySelector(".header-bar");
const menuHeader = document.querySelector(".header-list");
const btnCloseMenu = document.querySelector(".header-close-icon");
const isActive = "is-expand";
btnToggle.addEventListener("click", () => {
  menuHeader.classList.add(isActive);
});

btnCloseMenu.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
});

// tab-content
const itemTabParent = document.querySelectorAll(".exp-item");
const btnTab = document.querySelectorAll(".btn-tab");
const tabItem = document.querySelectorAll(".exp-tab-item");

btnTab.forEach((element) => {
  element.addEventListener("click", (event) => {
    const indexTab = event.target.id;
    tabItem.forEach((element) => {
      element.classList.remove("is-active");
    });
    itemTabParent.forEach((element) => {
      element.classList.remove("is-actived");
    });
    event.target.parentElement.classList.add("is-actived");
    document
      .querySelector(`.exp-tab-item[data-tab='${indexTab}']`)
      .classList.add("is-active");
  });
});

// show popup
const btnPlayNow = document.querySelector("#btn-play-now");
const btnClosePopup = document.querySelector(".header-close-popup");
const popupContent = document.querySelector(".header-popup");

btnPlayNow.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupContent.style.display = "block";
});

btnClosePopup.addEventListener("click", () => {
  popupContent.style.display = "none";
});


// language
const arrLang = {
  en: {
    // play: "play now",
    // market: "marketplace",
    // mint: "mint",
    // farm: "farm",
    // mining: "mining",
    // map: "RoadMap",
    // learn: "learn more",
    s1_1: "PARAVERSE NFT PLAY TO EARN GAME",
    s1_2: "After entering Paraverse, players can earn tokens through games and contributions to the ecosystem. Players can collect, train and trade Para monster, at the same time direct them to do adventure and battle to improve player's own game skills and strive to become the most dazzling Para monster trainer on the Paraverse.",
    s2_1: "EXPLORE THE PARAVERSE WORLD",
    s2_2: "Para monsters are super-powered creatures that live on Paraverse World. Each Para monster has a unique superpower, unique appearance and rarity. There are also super rare Para monsters waiting for you to discover.",
    s4_1: "MAPS",
    s4_2: "Worlds with diverse landscapes from deserts, ruined cities, deep seas... help you satisfy the power of discovery.In particular, each map will have interactions with Para monsters with different attributes to increase or limit strength.",
    s5_1: "GAMEPLAY",
    s5_2: "Collect, evolve, and trade unique NFT heroes to build the best adventure team. Rise through the ranks to claim tournament rewards!",
    s5_3: "Players start with basic non-NFT heroes. By playing, they can collect materials, armors and loot-boxes.",
    s5_4: "Free heroes & armors can be minted into NFT using Paraverse Token.",
    s5_5: "Gaming is not only for fun, it can earn you money: Play-to-earn with dynamic farming system and active market, every heroes/items can be minted into NFT.",
    s5_6: "Assets for rent",
    s5_7: "Solve blockchain & NFT games problem: enable users to put their assets for rent with high credibility.",
    s6_1: "EXCITING FUTURE",
    s6_2: "Our vision is to create a charming collection and metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Create your own unique digital world avatar in Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bring a different experience and gameplay to Paraverse Metaverse through AR and VR technology! Take your Para monster to explore and fight in the real world!",
  },
  ja: {
    s1_1: "PARAVERSE NFT ゲームを稼ぐためにプレイ",
    s1_2: "Paraverseに入った後、プレイヤーはゲームやエコシステムへの貢献を通じてトークンを獲得できます。 プレイヤーはParaモンスターを集め、訓練し、交換すると同時に、冒険と戦いをしてプレイヤー自身のゲームスキルを向上させ、Paraverseで最も魅力的なParaモンスタートレーナーになるように努力することができます。",
    s2_1: "PARAVERSEの世界を探検する",
    s2_2: "Paraモンスターは、Paraverse世界に生息する超強力なクリーチャーです。 それぞれのパラモンスターは、ユニークなスーパーパワー、ユニークな外観と希少性を持っています。あなたが発見するのを待っている超レアなParaモンスターもいます。",
    s4_1: "マップ",
    s4_2: "砂漠、廃墟の街、深海など、さまざまな風景が広がる世界は、発見の力を満足させるのに役立ちます。特に、各マップは、強度を増減するために、異なる属性を持つParaモンスターと相互作用します。",
    s5_1: "ゲームプレイ",
    s5_2: "ユニークなNFTヒーローを集め、進化させ、交換して、最高のアドベンチャーチームを作りましょう。 ランクを上げてトーナメントの報酬を獲得しましょう！",
    s5_3: "プレイヤーは基本的なnon-NFTヒーローから始めます。 プレイすることで、材料、鎧、戦利品ボックスを集めることができます。",
    s5_4: "無料のヒーローと鎧は、Paraverseトークンを使用してNFTにミントすることができます。",
    s5_5: "ゲームは楽しみのためだけでなく、お金を稼ぐこともできます。ダイナミックな農業システムと活発な市場でプレイして稼ぐことができ、すべてのヒーロー/アイテムをNFTに組み込むことができます。",
    s5_6: "賃貸資産",
    s5_7: "Blockchain&NFTゲームの問題を解決する：ユーザーが自分の資産を高い信頼性で賃貸できるようにします。",
    s6_1: "エキサイティングな未来",
    s6_2: "私たちのビジョンは、魅力的なコレクションとmetaverseエコシステムを作成することです。",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Paraverse Metaverseで独自のデジタルワールドアバターを作成します。",
    s6_5: "Paraverse Go",
    s6_6: "ARおよびVRテクノロジーを通じて、Paraverse Metaverseに異なる体験とゲームプレイをもたらします！ Paraモンスターを連れて、現実の世界を探索して戦いましょう！",
  },
  ko: {
    s1_1: "게임에서 벌어들이기 위한 PARAVERSE NFT 플레이",
    s1_2: "플레이어는 Paraverse로 들어간 후 게임을 통해 토큰을 획득하고 생태계에 기여할 수 있습니다. 플레이어는  Para 몬스터를 수집, 훈련, 거래할 수 있으며 동시에 모험과 배틀을 지휘하여 자신의 게임 능력을 향상시키고, Paraverse에서 가장 눈부신 Para 몬스터 트레이너가 되도록 노력할 수 있습니다.",
    s2_1: "PARAVERSE 세계를 탐험하세요",
    s2_2: "Para 몬스터들은 Paraverse 세계에 사는 초능력을 가진 생명체입니다. 각 Para 몬스터마다 독특한 초능력, 독특한 생김새, 희귀성이 있습니다. 여러분이 발견해주기를 기다리는 정말 희귀한 Para 몬스터들도 있습니다.",
    s4_1: "맵",
    s4_2: "사막, 폐허가 된 도시, 깊은 바다 속까지 다양한 풍경이 펼쳐지는 세상… 여러분이 발견 능력을 마음껏 사용할 수 있습니다.특히 맵마다 속성이 다른 Para 몬스터들의 상호작용을 통해 힘을 키우거나 제한할 수 있습니다.",
    s5_1: "게임플레이",
    s5_2: "고유한 NFT 영웅을 수집, 발전 및 거래하여 최고의 어드벤처 팀을 구축하세요. 랭킹을 높여 토너먼트 보상을 받으세요!",
    s5_3: "플레이어는 non-NFT 영웅부터 시작합니다. 플레이하면서 재료, 갑옷, 전리품을 모을 수 있습니다.",
    s5_4: "무료 영웅과 갑옷은 Paraverse 토큰을 사용하여 NFT에 주조할 수 있습니다.",
    s5_5: "게임은 재미만을 위한 것이 아니라 돈도 벌 수 있습니다. 역동적인 파밍 시스템과 활성화된 시장을 통해 모든 영웅/아이템을 NFT에 주조할 수 있습니다.",
    s5_6: "자산(Asset) 임대",
    s5_7: "Blockchain & NFT 게임 문제 해결 : 유저들이 높은 신뢰도로 자산(Asset)을 임대할 수 있도록 합니다.",
    s6_1: "신나는 미래",
    s6_2: "우리의 비전은 매력적인 컬렉션과 metaverse 생태계를 만드는 것입니다.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Paraverse Metaverse에서 자신만의 독특한 디지털 월드 아바타를 만들어 보세요.",
    s6_5: "Paraverse Go",
    s6_6: "AR과 VR 기술을 통해 Paraverse Metaverse에 색다른 경험과 게임플레이를 접목해보세요! Para 몬스터를 데리고 현실 세계를 탐험하고 싸우세요!",
  },
  pt: {
    s1_1: "JOGO QUE PAGA PARAVERSE NFT",
    s1_2: "Depois de entrarem no Paraverse, os jogadores podem ganhar tokens através de jogos e contribuições para o ecossistema. Os jogadores podem colecionar, treinar e trocar monstros Para, ao mesmo tempo que os guiam em aventuras e batalhas para melhorar as capacidades de jogo do próprio jogador e esforçar-se para se tornar o mais deslumbrante treinador de monstros Para no Paraverse.",
    s2_1: "EXPLORE O MUNDO PARAVERSE",
    s2_2: "Os monstros Para são criaturas superpoderosas que vivem no Mundo Paraverse. Cada monstro Para tem um superpoder, aparência e raridade únicas. Existem também monstros Para super raros à sua espera para descobrir.",
    s4_1: "MAPAS",
    s4_2: "Mundos com paisagens diversas de desertos, cidades em ruínas, mares profundos... ajudam a satisfazer o desejo de descoberta. Em particular, cada mapa terá interações com monstros Para com atributos diferentes para aumentar ou limitar a força.",
    s5_1: "JOGABILIDADE",
    s5_2: "Colecionar, evoluir, e trocar NFT de heróis únicos para construir a melhor equipa de aventura. Suba nas classificações para receber recompensas do torneio!",
    s5_3: "Os jogadores começam com os heróis básicos não-NFT. Ao jogar, podem recolher materiais, armaduras e caixas de recompensas.",
    s5_4: "Heróis e armaduras gratuitas podem ser cunhadas em NFT utilizando o Token Paraverse.",
    s5_5: "O jogo não é apenas para diversão, pode fazê-lo ganhar dinheiro: Jogar com o sistema de cultivação dinâmica e mercado ativo, todos os heróis/itens podem ser cunhados em NFT.",
    s5_6: "Ativos para aluguer",
    s5_7: "Resolva problemas de blockchain & jogos NFT: permita aos utilizadores colocar os seus bens para aluguer com elevada credibilidade.",
    s6_1: "FUTURO EMPOLGANTE",
    s6_2: "A nossa visão é a de criar uma coleção fascinante e um ecossistema metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Crie o seu próprio avatar único de mundo digital em Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Traga uma experiência e jogabilidade diferente ao Paraverse Metaverse através da tecnologia AR e VR! Leve o seu monstro Para a explorar e lutar no mundo real!",
  },
  es: {
    s1_1: "PARAVERSE NFT JUEGA PARA GANAR",
    s1_2: "Después de ingresar a Paraverse,, los jugadores pueden ganar tokens a través de juegos y contribuciones al ecosistema. Los jugadores podrán recolectar, entrenar e intercambiar monstruos Para, al mismo tiempo que los dirigen a hacer aventuras y batallas para mejorar las habilidades de juego del jugador y esforzarse por convertirse en el entrenador de monstruos Para más deslumbrante de Paraverse.",
    s2_1: "EXPLORA EL MUNDO PARAVERSE",
    s2_2: "Los monstruos Para son criaturas superpoderosas que viven en el Mundo Paraverse. Cada monstruo Para tiene un superpoder único, una apariencia y una rareza únicas. También hay monstruos Para súper raros esperando que los descubras.",
    s4_1: "MAPAS",
    s4_2: "Mundos con paisajes diversos desde desiertos, ciudades en ruinas, mares profundos... le ayuda a satisfacer el poder del descubrimiento. En particular, cada mapa tendrá interacciones con monstruos Para con diferentes atributos para aumentar o limitar la fuerza.",
    s5_1: "JUGABILIDAD",
    s5_2: "Colecciona, evoluciona e intercambia héroes NFT únicos para construir el mejor equipo de aventuras. ¡Sube de rango para reclamar recompensas de torneos!",
    s5_3: "Los jugadores comienzan con héroes básicos que son non-NFT. Al jugar, pueden recolectar materiales, armaduras y cajas de botín.",
    s5_4: "Los héroes y armaduras gratuitos se pueden acuñar en NFT usando Paraverse  Token.",
    s5_5: "Los juegos no son solo por diversión, sino que pueden hacerte ganar dinero: Juega para ganar con un sistema de agricultura dinámico y un mercado activo, cada héroe / artículo se puede acuñar en NFT.",
    s5_6: "Activos en alquiler",
    s5_7: "Resuelva el problema de los juegos blockchain y NFT: permita a los usuarios poner sus activos en alquiler con alta credibilidad.",
    s6_1: "FUTURO EMOCIONANTE",
    s6_2: "Nuestra visión es crear una colección encantadora y un ecosistema metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Crea tu propio avatar único del mundo digital en Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "¡Trae una experiencia y jugabilidad diferentes a Paraverse Metaverse a través de la tecnología AR y VR!  ¡Lleva a tu monstruo Para a explorar y luchar en el mundo real!",
  },
  vi: {
    s1_1: "PARAVERSE NFT PLAY TO EARN GAME",
    s1_2: "After entering Paraverse, players can earn tokens through games and contributions to the ecosystem. Players can collect, train and trade Para monster, at the same time direct them to do adventure and battle to improve player's own game skills and strive to become the most dazzling Para monster trainer on the Paraverse.",
    s2_1: "EXPLORE THE PARAVERSE WORLD",
    s2_2: "Para monsters are super-powered creatures that live on Paraverse World. Each Para monster has a unique superpower, unique appearance and rarity. There are also super rare Para monsters waiting for you to discover.",
    s3_1: "PLAY TO EARN REVOLUTION",
    s4_1: "MAPS",
    s4_2: "Worlds with diverse landscapes from deserts, ruined cities, deep seas... help you satisfy the power of discovery.In particular, each map will have interactions with Para monsters with different attributes to increase or limit strength.",
    s5_1: "GAMEPLAY",
    s5_2: "Collect, evolve, and trade unique NFT heroes to build the best adventure team. Rise through the ranks to claim tournament rewards!",
    s5_3: "Players start with basic non-NFT heroes. By playing, they can collect materials, armors and loot-boxes.",
    s5_4: "Free heroes & armors can be minted into NFT using Paraverse Token.",
    s5_5: "Gaming is not only for fun, it can earn you money: Play-to-earn with dynamic farming system and active market, every heroes/items can be minted into NFT.",
    s5_6: "Assets for rent",
    s5_7: "Solve blockchain & NFT games problem: enable users to put their assets for rent with high credibility.",
    s6_1: "EXCITING FUTURE",
    s6_2: "Our vision is to create a charming collection and metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Create your own unique digital world avatar in Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bring a different experience and gameplay to Paraverse Metaverse through AR and VR technology! Take your Para monster to explore and fight in the real world!",
  },
  id: {
    s1_1: "PARAVERSE NFT MAIN UNTUK MENDAPATKAN PERMAINAN",
    s1_2: "Sesudah memasuki Paraverse, pemain bisa memperoleh token lewat permainan dan kontribusi ke ekosistem. Pemain bisa mengumpulkan, latihan, dan bertukar Para monster, di saat bersamaan memimpin mereka berpetualang dan bertempur untuk meningkatkan keterampilan permainan pemain sendiri dan berjuang untuk menjadi pelatih Para monster yang paling mempesona di Paraverse.",
    s2_1: "JELAJAHI DUNIA PARAVERSE",
    s2_2: "Para monsters merupakan makhluk berkekuatan super yang hidup di Dunia Paraverse. Setiap Para monster punya kekuatan super khas, penampilan yang unik dan langka. Ada juga Para monster paling langka yang menunggu untuk Kamu temukan.",
    s4_1: "PETA",
    s4_2: "Dunia dengan beragam pemandangan dari gurun, kota yang hancur, laut dalam... membantumu memuaskan kekuatan penemuan. Secara khusus, setiap peta akan berinteraksi dengan Para monster dengan atribut berbeda untuk meningkatkan atau membatasi kekuatan.",
    s5_1: "PERMAINAN",
    s5_2: "Kumpulkan, kembangkan, dan tukarkan pahlawan NFT unik untuk membangun tim petualangan terbaik. Naik peringkat untuk mengklaim hadiah turnamen!",
    s5_3: "Pemain mulai dengan pahlawan non-NFT utama. Seiring bermain, mereka bisa mengumpulkan material, armor, dan loot-box.",
    s5_4: "Pahlawan & armor gratis bisa diciptakan menjadi NFT memakai Token Paraverse.",
    s5_5: "Bermain game tidak untuk bersenang-senang saja, tapi juga bisa menghasilkan uang: Main-dan-menghasilkan dengan sistem farming dinamis dan pasar aktif, tiap pahlawan/item bisa diciptakan menjadi NFT.",
    s5_6: "Aset yang disewakan",
    s5_7: "Pecahkan masalah permainan blockchain & NFT: memungkinkan pengguna untuk menyewakan aset mereka dengan kredibilitas tinggi.",
    s6_1: "MASA DEPAN YANG MENARIK",
    s6_2: "Visi kami ialah menciptakan koleksi yang menawan dan ekosistem metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Ciptakan avatar dunia digital unikmu sendiri di Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bawa pengalaman dan permainan yang berbeda ke Paraverse Metaverse lewat teknologi AR dan VR! Pimpin Para monstermu untuk menjelajah dan bertarung di dunia nyata!",
  },
  tr: {
    s1_1: "PARAVERSE NFT KAZANMAK İÇİN OYNA",
    s1_2: "Paraverse'e girdikten sonra, oyuncular oyunlar ve ekosisteme olan katkıları sayesinde tokenler kazanabilirler. Oyuncular Para canavarlarını toplayabilir, eğitebilir ve takas edebilir, aynı zamanda onları oyuncunun kendi oyun becerilerini geliştirmek için onları maceralara ve savaşmaya yönlendirebilir ve Paraverse'deki en göz kamaştırıcı Para canavarı eğitmeni olmaya çabalayabilirler.",
    s2_1: "PARAVERSE DÜNYASINI KEŞFET",
    s2_2: "Para canavarları Paraverse  Dünyası’nda yaşayan süper güçlere sahip yaratıklardır. Her Para canavarının benzersiz bir süper gücü, benzersiz bir görünümü ve enderliği vardır. Ayrıca keşfetmenizi bekleyen süper nadir Para canavarları da var.",
    s4_1: "HARİTALAR",
    s4_2: "Çöllerden, harap şehirlerden, derin denizlere kadar farklı manzaralara sahip dünyalar... keşif gücünüzü tatmin etmenize yardımcı olacaklar. Özellikle, her harita farklı özelliklere sahip Para canavarlarıyla gücünü artırmak veya sınırlamak için etkileşim halinde olacaktır.",
    s5_1: "OYNANIŞ",
    s5_2: "En iyi macera ekibini oluşturmak için eşsiz NFT kahramanlarını toplayın, geliştirin ve takas edin. Turnuva ödüllerini toplamak için sıralamada yükselin!",
    s5_3: "Oyuncular temel non-NFT kahramanlarla başlarlar. Oynayarak malzeme, zırh ve ganimet kutularını toplayabilirler.",
    s5_4: "Paraverse Token kullanılarak NFT'ye ücretsiz kahramanlar ve zırhlar basılabilir",
    s5_5: "Oyun sadece eğlence için değildir, size para kazandırabilir: Dinamik madencilik sistemi ve aktif pazarı ile kazanmak için oynayın, her kahraman/öğe NFT'ye basılabilir.",
    s5_6: "Kiralık varlıklar",
    s5_7: "Blockchain ve NFT oyunlarının sorununu çözün: kullanıcıların varlıklarını yüksek güvenilirlikle kiraya vermelerini sağlayın.",
    s6_1: "GELECEK HEYECAN VERİCİ",
    s6_2: "Vizyonumuz büyüleyici bir koleksiyon ve metaverse ekosistemi oluşturmaktır.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Paraverse Metaverse'de kendi benzersiz dijital dünya avatarını oluştur.",
    s6_5: "Paraverse Go",
    s6_6: "AR ve VR teknolojisiyle Paraverse Metaverse'e farklı bir deneyim ve oynanış kazandır! Gerçek dünyada keşfetmek ve savaşmak için Para canavarınızı alın!",
  },
  de: {
    s1_1: "PARAVERSE NFT PLAY TO EARN GAME",
    s1_2: "After entering Paraverse, players can earn tokens through games and contributions to the ecosystem. Players can collect, train and trade Para monster, at the same time direct them to do adventure and battle to improve player's own game skills and strive to become the most dazzling Para monster trainer on the Paraverse.",
    s2_1: "EXPLORE THE PARAVERSE WORLD",
    s2_2: "Para monsters are super-powered creatures that live on Paraverse World. Each Para monster has a unique superpower, unique appearance and rarity. There are also super rare Para monsters waiting for you to discover.",
    s3_1: "PLAY TO EARN REVOLUTION",
    s4_1: "MAPS",
    s4_2: "Worlds with diverse landscapes from deserts, ruined cities, deep seas... help you satisfy the power of discovery.In particular, each map will have interactions with Para monsters with different attributes to increase or limit strength.",
    s5_1: "GAMEPLAY",
    s5_2: "Collect, evolve, and trade unique NFT heroes to build the best adventure team. Rise through the ranks to claim tournament rewards!",
    s5_3: "Players start with basic non-NFT heroes. By playing, they can collect materials, armors and loot-boxes.",
    s5_4: "Free heroes & armors can be minted into NFT using Paraverse Token.",
    s5_5: "Gaming is not only for fun, it can earn you money: Play-to-earn with dynamic farming system and active market, every heroes/items can be minted into NFT.",
    s5_6: "Assets for rent",
    s5_7: "Solve blockchain & NFT games problem: enable users to put their assets for rent with high credibility.",
    s6_1: "EXCITING FUTURE",
    s6_2: "Our vision is to create a charming collection and metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Create your own unique digital world avatar in Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bring a different experience and gameplay to Paraverse Metaverse through AR and VR technology! Take your Para monster to explore and fight in the real world!",
  },
};

$(function () {
  let userLang = navigator.language || navigator.userLanguage;
  let fomatLangBrower = userLang.split("-")[0];

  if (fomatLangBrower !== "") {
    $(".header-item-link").each(function (index, item) {
      $(this).text(arrLang[fomatLangBrower][$(this).attr("key")]);
    });
  }
  $(".translate").click(function () {
    let lang = $(this).attr("id");
    // $(".language-list").addClass("is-hover");

    $(".header-item-link").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });

    $(".text-translate").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
  // $(".header-language").hover(function () {
  //   $(".language-list").removeClass("is-hover");
  // });
  // $(".header-language").mouseleave(function () {
  //   $(".language-list").addClass("is-hover");
  // });
  // $(".language-list").hover(function () {
  //   $(".language-list").css({ display: "flex" });
  // });
  // $(".language-list").mouseleave(function () {
  //   $(".language-list").css({ display: "none" });
  // });
});
