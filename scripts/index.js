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
const btnMarket = document.querySelector("#btn-market");
const btnMint = document.querySelector("#btn-mint");
const btnFarm = document.querySelector("#btn-farm");
const btnMining = document.querySelector("#btn-mining");

const btnClosePlay = document.querySelector("#close-play");
const btnCloseMarket = document.querySelector("#close-market");
const btnCloseMint = document.querySelector("#close-mint");
const btnCloseFarm = document.querySelector("#close-farm");
const btnCloseMining = document.querySelector("#close-mining");

const popupPlay = document.querySelector("#popup-play");
const popupMarket = document.querySelector("#popup-market");
const popupMint = document.querySelector("#popup-mint");
const popupFarm = document.querySelector("#popup-farm");
const popupMining = document.querySelector("#popup-mining");

btnPlayNow.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupPlay.style.display = "block";
});
btnMarket.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupMarket.style.display = "block";
});
btnMint.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupMint.style.display = "block";
});
btnFarm.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupFarm.style.display = "block";
});
btnMining.addEventListener("click", () => {
  menuHeader.classList.remove(isActive);
  popupMining.style.display = "block";
});

btnClosePlay.addEventListener("click", () => {
  popupPlay.style.display = "none";
});

btnCloseMarket.addEventListener("click", () => {
  popupMarket.style.display = "none";
  console.log('xxx');
});

btnCloseMint.addEventListener("click", () => {
  popupMint.style.display = "none";
});

btnCloseFarm.addEventListener("click", () => {
  popupFarm.style.display = "none";
});
btnCloseMining.addEventListener("click", () => {
  popupMining.style.display = "none";
});


// language
const arrLang = {
  en: {
    s0_0: "English",
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
    s5_8: "Crypto war",
    s5_9: "Gameplay involves the crypto market - predict the market fluctuations correctly to earn in-game advantages.",
    s6_1: "EXCITING FUTURE",
    s6_2: "Our vision is to create a charming collection and metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Create your own unique digital world avatar in Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bring a different experience and gameplay to Paraverse Metaverse through AR and VR technology! Take your Para monster to explore and fight in the real world!",
    s7_1: "Battle",
    s7_2: "Collect",
    s7_3: "Earn",
  },
  ja: {
    s0_0: "日本語",
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
    s5_8: "暗号戦争",
    s5_9: "ゲームプレイには暗号市場が含まれます-ゲーム内の利点を獲得するために市場の変動を正しく予測します。",
    s6_1: "エキサイティングな未来",
    s6_2: "私たちのビジョンは、魅力的なコレクションとmetaverseエコシステムを作成することです。",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Paraverse Metaverseで独自のデジタルワールドアバターを作成します。",
    s6_5: "Paraverse Go",
    s6_6: "ARおよびVRテクノロジーを通じて、Paraverse Metaverseに異なる体験とゲームプレイをもたらします！ Paraモンスターを連れて、現実の世界を探索して戦いましょう！",
    s7_1: "戦い",
    s7_2: "収集",
    s7_3: "得る",
  },
  ko: {
    s0_0: "한국어",
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
    s5_8: "암호화 전쟁",
    s5_9: "게임 플레이에는 암호화 시장이 포함됩니다. 시장 변동을 정확하게 예측하여 게임 내 이점을 얻으십시오.",
    s6_1: "신나는 미래",
    s6_2: "우리의 비전은 매력적인 컬렉션과 metaverse 생태계를 만드는 것입니다.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Paraverse Metaverse에서 자신만의 독특한 디지털 월드 아바타를 만들어 보세요.",
    s6_5: "Paraverse Go",
    s6_6: "AR과 VR 기술을 통해 Paraverse Metaverse에 색다른 경험과 게임플레이를 접목해보세요! Para 몬스터를 데리고 현실 세계를 탐험하고 싸우세요!",
    s7_1: "Battle",
    s7_2: "Collect",
    s7_3: "Earn",
  },
  pt: {
    s0_0: "Português",
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
    s5_8: "Guerra criptográfica",
    s5_9: "A jogabilidade envolve o mercado de criptografia - preveja as flutuações do mercado corretamente para ganhar vantagens no jogo.",
    s6_1: "FUTURO EMPOLGANTE",
    s6_2: "A nossa visão é a de criar uma coleção fascinante e um ecossistema metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Crie o seu próprio avatar único de mundo digital em Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Traga uma experiência e jogabilidade diferente ao Paraverse Metaverse através da tecnologia AR e VR! Leve o seu monstro Para a explorar e lutar no mundo real!",
    s7_1: "Batalhe",
    s7_2: "Colete",
    s7_3: "Ganhe",
  },
  es: {
    s0_0: "Español",
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
    s5_8: "Guerra de cripto",
    s5_9: "El juego involucra el mercado de las criptomonedas: predice las fluctuaciones del mercado correctamente para obtener ventajas en el juego.",
    s6_1: "FUTURO EMOCIONANTE",
    s6_2: "Nuestra visión es crear una colección encantadora y un ecosistema metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Crea tu propio avatar único del mundo digital en Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "¡Trae una experiencia y jugabilidad diferentes a Paraverse Metaverse a través de la tecnología AR y VR!  ¡Lleva a tu monstruo Para a explorar y luchar en el mundo real!",
    s7_1: "Batalla",
    s7_2: "Recoger",
    s7_3: "Ganar",
  },
  vi: {
    s0_0: "Tiếng Việt",
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
    s5_8: "Crypto war",
    s5_9: "Gameplay involves the crypto market - predict the market fluctuations correctly to earn in-game advantages.",
    s6_1: "EXCITING FUTURE",
    s6_2: "Our vision is to create a charming collection and metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Create your own unique digital world avatar in Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bring a different experience and gameplay to Paraverse Metaverse through AR and VR technology! Take your Para monster to explore and fight in the real world!",
    s7_1: "Battle",
    s7_2: "Collect",
    s7_3: "Earn",
  },
  id: {
    s0_0: "Indonesia",
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
    s5_8: "Perang kripto",
    s5_9: "Gameplay melibatkan pasar crypto - prediksi fluktuasi pasar dengan benar untuk mendapatkan keuntungan dalam game.",
    s6_1: "MASA DEPAN YANG MENARIK",
    s6_2: "Visi kami ialah menciptakan koleksi yang menawan dan ekosistem metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Ciptakan avatar dunia digital unikmu sendiri di Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bawa pengalaman dan permainan yang berbeda ke Paraverse Metaverse lewat teknologi AR dan VR! Pimpin Para monstermu untuk menjelajah dan bertarung di dunia nyata!",
    s7_1: "Bertarung",
    s7_2: "Mengumpulkan",
    s7_3: "Menghasilkan",
  },
  tr: {
    s0_0: "Türkçe",
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
    s5_8: "Kripto savaşı",
    s5_9: "Oynanış kripto piyasasını içerir - oyun içi avantajlar elde etmek için piyasa dalgalanmalarını doğru tahmin edin.",
    s6_1: "GELECEK HEYECAN VERİCİ",
    s6_2: "Vizyonumuz büyüleyici bir koleksiyon ve metaverse ekosistemi oluşturmaktır.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Paraverse Metaverse'de kendi benzersiz dijital dünya avatarını oluştur.",
    s6_5: "Paraverse Go",
    s6_6: "AR ve VR teknolojisiyle Paraverse Metaverse'e farklı bir deneyim ve oynanış kazandır! Gerçek dünyada keşfetmek ve savaşmak için Para canavarınızı alın!",
    s7_1: "Savaş",
    s7_2: "Toplamak",
    s7_3: "Para kazanmak",
  },
  de: {
    s0_0: "Deutsch",
    s1_1: "PARAVERSE NFT DAS SPIEL ZUM VERDIENEN",
    s1_2: "Nach dem Betreten von Paraverse können die Spieler durch Spiele und Beiträge zum Ökosystem Token verdienen. Die Spieler können Para-Monster sammeln, trainieren und mit ihnen handeln. Gleichzeitig können sie sie zu Abenteuern und Kämpfen anleiten, um ihre eigenen Spielfähigkeiten zu verbessern und danach zu streben, der schillerndste Para-Monster-Trainer im Paraverse zu werden.",
    s2_1: "ERKUNDE DIE WELT DES PARAVERSE",
    s2_2: "Para- Monster sind Kreaturen mit Superkräften, die in der Paraverse-Welt leben. Jedes Para-Monster hat eine einzigartige Superkraft, ein einzigartiges Aussehen und eine besondere Seltenheit. Es gibt auch super seltene Para-Monster, die darauf warten, von dir entdeckt zu werden.",
    s4_1: "KARTEN",
    s4_2: "Welten mit unterschiedlichen Landschaften wie Wüsten, zerstörte Städte, tiefe Meere... helfen dir, deinen Entdeckungsdrang zu befriedigen. Auf jeder Karte gibt es Interaktionen mit Para-Monstern mit unterschiedlichen Attributen, um die Stärke zu erhöhen oder zu begrenzen.",
    s5_1: "GAMEPLAY",
    s5_2: "Sammle, entwickle und tausche einzigartige NFT-Helden, um das beste Abenteuerteam zusammenzustellen. Steige in den Rängen auf, um Turnierbelohnungen zu erhalten!",
    s5_3: "Die Spieler beginnen mit einfachen Nicht-NFT-Helden. Durch das Spielen können sie Materialien, Rüstungen und Lootboxen sammeln.",
    s5_4: "Kostenlose Helden und Rüstungen können mit Paraverse-Token in NFT umgewandelt werden.",
    s5_5: "Spielen macht nicht nur Spaß, man kann damit auch Geld verdienen: Play-to-Earn mit dynamischem Farming-System und aktivem Markt, jeder Held/Gegenstand kann in NFT umgewandelt werden.",
    s5_6: "Assets zum Mieten",
    s5_7: "Lösen Sie das Problem von Blockchain und NFT-Spielen: Ermöglichen Sie es Nutzern, ihre Vermögenswerte mit hoher Glaubwürdigkeit zu vermieten.",
    s5_8: "Krypto-Krieg",
    s5_9: "Das Gameplay umfasst den Kryptomarkt – prognostizieren Sie die Marktschwankungen richtig, um Vorteile im Spiel zu erzielen.",
    s6_1: "AUFREGENDE ZUKUNFT",
    s6_2: "Unsere Vision ist es, eine bezaubernde Sammlung und ein Metaverse-Ökosystem zu schaffen.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Erstelle deinen eigenen einzigartigen Avatar für die digitale Welt im Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Erlebe das Paraverse Metaverse durch AR- und VR-Technologie auf eine neue Art und Weise! Erkunde und kämpfe mit deinem Para-Monster in der realen Welt!",
    s7_1: "Schlacht",
    s7_2: "Sammeln",
    s7_3: "Verdiene",
  },
  pi: {
    s0_0: "Pilipino",
    s1_1: "PARAVERSE NFT MAGLARO PARA KUMITA NG LARO",
    s1_2: "Matapos pumasok sa Paraverse, ang mga manlalaro ay maaaring makakuha ng mga token sa pamamagitan ng mga laro at kontribusyon sa ecosystem. Maaaring kolektahin, sanayin o ipagpalit ng mga manlalaro ang Para monster, o kaya naman ay sanayin ang mga itong makipagsapalaran sa mga labanan upang mas pahusayin ang kakayanan ng manlalaro at kilalanin bilang pinakamagaling na Para monster trainer sa Paraverse.",
    s2_1: "TUKLASIN ANG MUNDO NG PARAVERSE",
    s2_2: "Ang Para monsters ay mga nilalang na may super power na nakatira sa mundo ng  Paraverse . Bawat Para monster ay may taglay na super power, natatanging itsura at kakaiba. May sadyang kakaibang Para monsters rin na naghihintay para matuklasan mo.",
    s4_1: "MGA MAPA",
    s4_2: "Mga mundong may iba’t ibang tanawin mula sa disyerto, nasirang mga syudad, malalim na karagatan ... ay tutulong upang masiyahan ka sa pagtuklas. Ang bawat mapa ay may partikular na pakikipag-ugnayan sa Para monsters na may iba't ibang katangian upang madagdagan o limitahan ang lakas.",
    s5_1: "PAGLALARO",
    s5_2: "Kolektahin, paunlarin, at ipagpalit ang kakaibang bayaning NFT upang makabuo ng pinakamagaling na adventure team. Pataasin ang ranggo upang magkamit ng gantimpala sa tornamento!",
    s5_3: "Magsisimula ang mga manlalaro sa mga pangunahing bayani na non-NFT. Sa pamamagitan ng paglalaro, maaari silang mangolekta ng mga materyales, mga sandata at mga loot-box.",
    s5_4: "Ang mga libreng bayani at sandata ay maaring gawing NFT gamit ang  Paraverse  Token.",
    s5_5: "Ang paglalaro ay hindi lamang para sa kasiyahan, maari ka rin kumita ng pera. Maglaro-para-kumita sa paiba-ibang  sistema ng pagsasaka at aktibong merkado, bawat bayani ay maaring gawing NFT.",
    s5_6: "Ari-ariang pina-aarkila",
    s5_7: "Lutasin ang problema sa laro ng blockchain at NFT: payagan ang mga gumagamit na ipa-arkila ang kanilang mga ari-arian ng may mataas na kredibilidad.",
    s5_8: "Crypto war",
    s5_9: "Kasama sa gameplay ang crypto market - hulaan nang tama ang pagbabagu-bago ng market para makakuha ng mga in-game advantage.",
    s6_1: "SA HINAHARAP",
    s6_2: "Ang aming pananaw ay lumikha ng isang kaakit-akit na koleksyon at metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Lumikha ng iyong kakaibang digital world avatar sa Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Magdala ng kakaibang karansan at paglalaro sa Paraverse Metaverse sa pamamagitan ng AR at VR technology! Dalhin ang iyong Para monster upang tuklasin at labanan ang tunay na mundo!",
    s7_1: "Labanan",
    s7_2: "Mangolekta",
    s7_3: "Kumita",
  },
  ru: {
    s0_0: "русский",
    s1_1: "PARAVERSE NFT ИГРАЙТЕ, ЧТОБЫ ЗАРАБОТАТЬ ИГРУ",
    s1_2: "После входа в Paraverse игроки могут зарабатывать токены с помощью игр и взносов в экосистему. Игроки могут собирать, тренировать и торговать Para-монстрами, в то же время отправляя их в приключения и сражения, чтобы улучшить собственные игровые навыки игрока и стать самым ослепительным тренером Para-монстров в Paraverse.",
    s2_1: "ИССЛЕДУЙТЕ МИР PARAVERSE",
    s2_2: "Para-монстры – это сверхспособные существа, которые живут в Мире Paraverse. Каждый Para-монстр обладает уникальной сверхспособностью, уникальной внешностью и редкостью. Есть также супер редкие Para-монстры, которые ждут, чтобы вы их открыли.",
    s4_1: "КАРТЫ",
    s4_2: "Миры с разнообразными ландшафтами из пустынь, разрушенных городов, глубоких морей... помогут вам удовлетворить жажду открытий. В частности, каждая карта будет взаимодействовать с Para-монстрами с различными атрибутами для увеличения или ограничения силы.",
    s5_1: "ИГРОВОЙ ПРОЦЕСС",
    s5_2: "Собирайте, развивайте и обменивайтесь уникальными героями NFT, чтобы создать лучшую приключенческую команду. Растите в рангах, чтобы претендовать на турнирные награды!",
    s5_3: "Игроки начинают с базовых non-NFT героев. В процессе игры они могут собирать материалы, доспехи и ящики с добычей.",
    s5_4: "Бесплатные герои и доспехи могут быть отчеканены в NFT с помощью Токена Paraverse.",
    s5_5: "Игра предназначена не только для развлечения, она может приносить вам деньги: играйте, чтобы зарабатывать с помощью динамичной системы фермерства и активного рынка, все герои/предметы могут быть отчеканены в NFT.",
    s5_6: "Активы в аренду",
    s5_7: "Решите проблему игр blockchain & NFT : дайте пользователям возможность сдавать свои активы в аренду с высоким уровнем доверия.",
    s5_8: "Kripto savaşı",
    s5_9: "Геймплей связан с рынком криптовалют - правильно прогнозируйте колебания рынка, чтобы заработать внутриигровые преимущества.",
    s6_1: "ЗАХВАТЫВАЮЩЕЕ БУДУЩЕЕ",
    s6_2: "Наше видение состоит в том, чтобы создать очаровательную коллекцию и экосистему metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Создайте свой собственный уникальный аватар цифрового мира в Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Привнесите другой опыт и игровой процесс в Paraverse Metaverse с помощью технологий AR и VR! Возьмите своего Para-монстра, чтобы исследовать и сражаться в реальном мире!",
    s7_1: "Боевой",
    s7_2: "Собирать",
    s7_3: "Зарабатывать",
  },
  zh: {
    s0_0: "繁體中文",
    s1_1: "Paraverse NFT 玩赚游戏",
    s1_2: "进入Paraverse之后，玩家可以通过游戏以及为生态系统做出贡献来赚取代币。玩家可以收集、训练和交易Para怪物，同时让它们冒险和战斗，以提高自己的游戏技能，努力成为Paraverse上最耀眼的Para怪物训练师。",
    s2_1: "探索PARAVERSE世界",
    s2_2: "Para怪物是生活在Paraverse世界的超能力生物。每一个Para怪物都有一个独特的超能力，独特的长相和稀缺性。还有超级稀有的Para怪物等着你去发现。",
    s4_1: "地图",
    s4_2: "世界上充满各种各样的景观，从沙漠、废墟城市、深海……帮助你满足探索的力量。特别值得一提是，每张地图将与具有不同属性的Para怪物会相互影响，以增加或限制其优势。",
    s5_1: "游戏",
    s5_2: "收集、进化和交易独特的NFT英雄，组建最佳冒险团队。通过升级领取比赛奖励!",
    s5_3: "玩家从基本的non-NFT英雄开始。通过游戏，他们可以收集原料、盔甲和战利品盒。",
    s5_4: "可以使用Paraverse 代币将免费的英雄和盔甲铸造成NFT。",
    s5_5: "游戏不仅仅是为了娱乐，它还可以让你赚钱: 通过动态的挖矿系统和活跃的市场，每个英雄/物品都可以被铸造成NFT。",
    s5_6: "资产租赁",
    s5_7: "解决Blockchain和NFT的游戏问题: 让用户能够将他们的资产以较高的可信度进行出租。",
    s5_8: "加密战争",
    s5_9: "游戏玩法涉及加密市场 - 正确预测市场波动以获得游戏优势。",
    s6_1: "激动人心的未来",
    s6_2: "我们的愿景是创造一个吸引人的收藏和metaverse生态系统。",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "在Paraverse Metaverse中创建你自己的独特数字世界化身。",
    s6_5: "Paraverse Go",
    s6_6: "通过AR和VR技术给Paraverse Metaverse带来不同的体验和游戏体验! 带着你的Para怪物在现实世界中探索和战斗吧!",
    s7_1: "戰鬥",
    s7_2: "收集",
    s7_3: "賺取",
  },
  fr: {
    s0_0: "Français",
    s1_1: "PARAVERSE NFT JEU POUR GAGNER",
    s1_2: "Après l’entrée au Paraverse, Les joueurs peuvent gagner des jetons en jouant et en contribuant à l'écosystème. Les joueurs peuvent collecter, entraîner et échanger des monstres Para, tout en les dirigeant dans des aventures et des batailles pour améliorer leurs propres compétences de jeu et s'efforcer de devenir l'entraîneur de monstres Para le plus éblouissant du Paraverse.",
    s2_1: "EXPLORER LE MONDE PARAVERSE",
    s2_2: "Les Para-monstres sont des créatures dotées de super-pouvoirs qui vivent dans le monde Paraverse. Chaque Para-monstre a un superpouvoir unique, une apparence unique et une rareté particulière. Il existe également des Para-monstres super rares qui attendent que vous les découvriez.",
    s4_1: "CARTES",
    s4_2: "Des mondes aux paysages variés : déserts, villes en ruines, mers profondes... vous aideront à satisfaire le pouvoir de la découverte. En particulier, chaque carte aura des interactions avec des monstres Para avec différents attributs pour augmenter ou limiter la force.",
    s5_1: "JEU",
    s5_2: "Collectionnez, faites évoluer et échangez des héros NFT uniques pour constituer la meilleure équipe d'aventure. Gravissez les échelons pour obtenir les récompenses du tournoi !",
    s5_3: "Les joueurs commencent avec des héros de base non NFT. En jouant, ils peuvent collecter des matériaux, des armures et des loot-boxes.",
    s5_4: "Les héros et armures gratuits peuvent être monnayés dans le NFT à l'aide de jetons Paraverse.",
    s5_5: "Le jeu n'est pas seulement un divertissement, il peut vous faire gagner de l'argent : Jouez pour gagner de l'argent avec un système d'agriculture dynamique et un marché actif, chaque héros/article peut être transformé en NFT.",
    s5_6: "Actifs à louer",
    s5_7: "Résoudre le problème des jeux blockchain & NFT : permettre aux utilisateurs de mettre leurs biens en location avec une grande crédibilité.",
    s5_8: "Guerre des cryptos",
    s5_9: "Le gameplay implique le marché de la cryptographie - prédisez correctement les fluctuations du marché pour gagner des avantages dans le jeu.",
    s6_1: "UN AVENIR PASSIONNANT",
    s6_2: "Notre vision est de créer une collection de charme et un écosystème de metaverse.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Créez votre propre avatar numérique unique dans le metaverse Paraverse.",
    s6_5: "Paraverse Go",
    s6_6: "Apportez une expérience et un gameplay différents à Paraverse Metaverse grâce aux technologies AR et VR ! Prenez votre monstre Para pour explorer et combattre dans le monde réel !",
    s7_1: "Bataille",
    s7_2: "Collecter",
    s7_3: "Gagner",
  },
  bn: {
    s0_0: "বাংলাদেশ",
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
    s5_8: "Crypto war",
    s5_9: "Gameplay involves the crypto market - predict the market fluctuations correctly to earn in-game advantages.",
    s6_1: "EXCITING FUTURE",
    s6_2: "Our vision is to create a charming collection and metaverse ecosystem.",
    s6_3: "Paraverse Avatar NFTs",
    s6_4: "Create your own unique digital world avatar in Paraverse Metaverse.",
    s6_5: "Paraverse Go",
    s6_6: "Bring a different experience and gameplay to Paraverse Metaverse through AR and VR technology! Take your Para monster to explore and fight in the real world!",
    s7_1: "Battle",
    s7_2: "Collect",
    s7_3: "Earn",
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
