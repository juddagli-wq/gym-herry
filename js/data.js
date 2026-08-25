window.GYM = window.GYM || {};

GYM.GROUPS = [
  { id: "gogus", title: "Göğüs", emoji: "🫁", color: "#ff6b4a" },
  { id: "omuz", title: "Omuz", emoji: "🏋️", color: "#ffb020" },
  { id: "sirt", title: "Sırt / Kanat", emoji: "🦅", color: "#3dd6c6" },
  { id: "onkol", title: "Ön Kol", emoji: "💪", color: "#7aa2ff" },
  { id: "arkakol", title: "Arka Kol", emoji: "🔥", color: "#c084fc" },
  { id: "bacak", title: "Bacak", emoji: "🦵", color: "#4ade80" },
  { id: "bel", title: "Bel", emoji: "🎯", color: "#f472b6" }
];

GYM.DAYS = [
  {
    id: "a",
    name: "Gün A",
    subtitle: "Göğüs + sırt + bel",
    exercises: [
      "incline-press",
      "incline-fly",
      "db-press",
      "chest-machine",
      "pulley-row",
      "lat-pulldown",
      "tbar-row",
      "crunch",
      "leg-raise"
    ]
  },
  {
    id: "b",
    name: "Gün B",
    subtitle: "Omuz + ön kol + bel",
    exercises: [
      "shoulder-press",
      "lateral-raise",
      "front-raise",
      "upright-row",
      "halat",
      "scott-curl",
      "incline-curl",
      "alt-curl",
      "crunch",
      "leg-raise"
    ]
  },
  {
    id: "c",
    name: "Gün C",
    subtitle: "Arka kol + bacak + bel",
    exercises: [
      "pushdown",
      "hammer",
      "close-bench",
      "leg-ext",
      "leg-press",
      "leg-curl",
      "abductor",
      "crunch",
      "leg-raise"
    ]
  }
];

GYM.EXERCISES = [
  {
    id: "incline-press",
    group: "gogus",
    no: 1,
    name: "Incline Machine",
    nameTr: "Üst göğüs makinesi",
    sets: 4,
    reps: 10,
    rest: 75,
    gif: "media/jHAnWmT.gif",
    primary: ['pectorals'],
    secondary: ['shoulders', 'triceps'],
    anim: "machinePress",
    youtube: "xumdRmtG5x4",
    query: "incline chest press machine nasıl yapılır",
    steps: [
      "Oturun, sırt yastığa yaslansın, tutacaklar üst göğüs hizasında olsun.",
      "Kürekleri yaslağa sıkın, kolları öne-yukarı itin.",
      "Kontrollü geri gelin; dirsekleri kilitlemeden durun."
    ]
  },
  {
    id: "incline-fly",
    group: "gogus",
    no: 2,
    name: "Incline Dumbbell Fly",
    nameTr: "Göğüs yana açış",
    sets: 3,
    reps: 10,
    rest: 60,
    gif: "media/1PLE8e9.gif",
    primary: ['pectorals'],
    secondary: ['shoulders'],
    anim: "inclineFly",
    youtube: "b8DqTO6ak0k",
    query: "incline dumbbell fly nasıl yapılır",
    steps: [
      "Eğik sehpadayken dambılları göğüs hizasında tutun.",
      "Dirsekler hafif kırık, kolları yanlara açarak göğsü esnetin.",
      "Kucaklar gibi kapatın; omuzları öne savurmayın."
    ]
  },
  {
    id: "db-press",
    group: "gogus",
    no: 3,
    name: "Dumbbell Press",
    nameTr: "Düz sırada press",
    sets: 4,
    reps: 10,
    rest: 75,
    gif: "media/EIeI8Vf.gif",
    primary: ['pectorals'],
    secondary: ['shoulders', 'triceps'],
    anim: "flatPress",
    youtube: "VmB1G1K7vNE",
    query: "düz sehpa dumbbell press nasıl yapılır",
    steps: [
      "Düz sehpadayın, dambıllar göğüs yanlarında başlasın.",
      "Ayaklar yerde, bel doğal kavisli kalsın.",
      "Dambılları yukarı itin, tepede birbirine çarpmayın."
    ]
  },
  {
    id: "chest-machine",
    group: "gogus",
    no: 4,
    name: "Bench Press Machine",
    nameTr: "Göğüs press makinesi",
    sets: 4,
    reps: 12,
    rest: 60,
    gif: "media/DOoWcnA.gif",
    primary: ['pectorals'],
    secondary: ['shoulders', 'triceps'],
    anim: "machinePress",
    youtube: "xumdRmtG5x4",
    query: "chest press machine nasıl yapılır",
    steps: [
      "Oturun, sırt yastığa yaslansın, tutacaklar orta göğüs hizasında olsun.",
      "Kürekleri yaslağa sıkın, kolları öne itin.",
      "Kontrollü geri gelin; kilitlenmeden önce durun."
    ]
  },
  {
    id: "shoulder-press",
    group: "omuz",
    no: 1,
    name: "Dumbbell Press",
    nameTr: "Omuz press",
    sets: 4,
    reps: 10,
    rest: 75,
    gif: "media/3d7wHyd.gif",
    primary: ['delts'],
    secondary: ['triceps'],
    anim: "shoulderPress",
    youtube: "qEwKCR5JCog",
    query: "dumbbell shoulder press nasıl yapılır",
    steps: [
      "Oturarak veya ayakta, dambıllar kulak hizasında.",
      "Dirsekler öne bakmasın, hafif yana açık dursun.",
      "Başı çarpmadan yukarı itin, kontrollü indirin."
    ]
  },
  {
    id: "lateral-raise",
    group: "omuz",
    no: 2,
    name: "Side Lateral Raise",
    nameTr: "Omuz yana açış",
    sets: 3,
    reps: 10,
    rest: 50,
    gif: "media/DsgkuIt.gif",
    primary: ['delts'],
    secondary: [],
    anim: "lateralRaise",
    youtube: "3VcKaXpzqRo",
    query: "yan omuz açış lateral raise nasıl yapılır",
    steps: [
      "Dambıllar yanda, avuçlar içe bakın.",
      "Kolları omuz hizasına kadar kaldırın, minik dirsek kırığı koruyun.",
      "Trapezle sallamayın; yavaş indirin."
    ]
  },
  {
    id: "front-raise",
    group: "omuz",
    no: 3,
    name: "Front Raise",
    nameTr: "Ön omuz kaldırma",
    sets: 3,
    reps: 12,
    rest: 50,
    gif: "media/3eGE2JC.gif",
    primary: ['delts'],
    secondary: [],
    anim: "frontRaise",
    youtube: "-t7fuZ0KhDA",
    query: "front raise ön omuz nasıl yapılır",
    steps: [
      "Dambılı uyluk önünde tutun.",
      "Kolu omuz hizasına kadar öne kaldırın.",
      "Belden savurmayın, yavaş indirin."
    ]
  },
  {
    id: "upright-row",
    group: "omuz",
    no: 4,
    name: "Upright Rowing",
    nameTr: "Çeneye çekiş",
    sets: 3,
    reps: 15,
    rest: 50,
    gif: "media/83HoW9X.gif",
    primary: ['delts'],
    secondary: ['traps', 'biceps'],
    anim: "uprightRow",
    youtube: "amCU-J-Md6A",
    query: "upright row çeneye çekiş nasıl yapılır",
    steps: [
      "Barı veya dambılı uyluk önünde tutun.",
      "Dirsekler önde/yukarı, barı göğüs üstüne çekin.",
      "Omuzları kulaklara sıkıştırmayın."
    ]
  },
  {
    id: "lat-pulldown",
    group: "sirt",
    no: 1,
    name: "Lat Pulldown",
    nameTr: "Sırta çekiş",
    sets: 3,
    reps: 12,
    rest: 70,
    gif: "media/eYnzaCm.gif",
    primary: ['lats'],
    secondary: ['biceps', 'forearms'],
    anim: "latPulldown",
    youtube: "CAwf7n6Luuc",
    query: "lat pulldown sırta çekiş nasıl yapılır",
    steps: [
      "Uylukları yastığın altına sıkıştırın, barı omuz genişliğinde tutun.",
      "Göğsü açıp barı üst göğse çekin.",
      "Dirsekler aşağı-geri gitsin; belden sallanmayın."
    ]
  },
  {
    id: "pulley-row",
    group: "sirt",
    no: 2,
    name: "Pulley Row",
    nameTr: "Göğse çekiş",
    sets: 3,
    reps: 12,
    rest: 70,
    gif: "media/fUBheHs.gif",
    primary: ['upper back'],
    secondary: ['biceps', 'lats'],
    anim: "cableRow",
    youtube: "GZbfZ033f74",
    query: "seated cable row göğse çekiş nasıl yapılır",
    steps: [
      "Oturun, dizler hafif kırık, gövde dik.",
      "Tutacağı göbeğe/göğüs altına çekin, kürekleri birleştirin.",
      "Kolları uzatırken sırtı kamburlaştırmayın."
    ]
  },
  {
    id: "tbar-row",
    group: "sirt",
    no: 3,
    name: "T-Bar Row",
    nameTr: "T bar çekiş",
    sets: 4,
    reps: 10,
    rest: 75,
    gif: "media/aaXr7ld.gif",
    primary: ['upper back'],
    secondary: ['biceps', 'lats'],
    anim: "tbarRow",
    youtube: "j3Igk5nyZE4",
    query: "t bar row nasıl yapılır",
    steps: [
      "Kalçadan eğin, sırt düz, dizler yumuşak.",
      "Barı belinize doğru çekin.",
      "Boyun nötr kalsın; koparmayın, kontrollü indirin."
    ]
  },
  {
    id: "halat",
    group: "onkol",
    no: 1,
    name: "Halat",
    nameTr: "Halat ile ön kol",
    sets: 4,
    reps: 12,
    rest: 50,
    gif: "media/HPlPoQA.gif",
    primary: ['biceps'],
    secondary: ['forearms'],
    anim: "ropeCurl",
    youtube: "4vTJHUDB5bI",
    query: "cable rope curl halat ön kol nasıl yapılır",
    steps: [
      "Alçak makaraya halat takın, dirsekler belde sabit.",
      "Avuçlar birbirine bakarak halatı yukarı kıvırın.",
      "Tepede 1 sn sıkın, yavaş indirin."
    ]
  },
  {
    id: "scott-curl",
    group: "onkol",
    no: 2,
    name: "Scott Curl Machine",
    nameTr: "Scott / preacher ön kol",
    sets: 3,
    reps: 10,
    rest: 50,
    gif: "media/7D5bgLT.gif",
    primary: ['biceps'],
    secondary: ['forearms'],
    anim: "preacherCurl",
    youtube: "fjeCJzHYtXg",
    query: "scott curl preacher curl nasıl yapılır",
    steps: [
      "Koltuk altlarını yastığa yaslayın, göğüs pad’e değsin.",
      "Dirsekler sabit, barı yukarı kıvırın.",
      "Dirsekleri kilitlemeden tam inin."
    ]
  },
  {
    id: "incline-curl",
    group: "onkol",
    no: 3,
    name: "Incline Curl",
    nameTr: "Eğik sehpada ön kol",
    sets: 3,
    reps: 10,
    rest: 50,
    gif: "media/ae9UoXQ.gif",
    primary: ['biceps'],
    secondary: ['forearms'],
    anim: "inclineCurl",
    youtube: "soxrZlIl35U",
    query: "incline dumbbell curl nasıl yapılır",
    steps: [
      "Eğik sehpadayın, kollar yanda sarksın.",
      "Dambılları omza doğru kıvırın.",
      "Dirsekleri öne savurmayın."
    ]
  },
  {
    id: "alt-curl",
    group: "onkol",
    no: 5,
    name: "Alternatif Curl",
    nameTr: "Ayakta tek tek",
    sets: 3,
    reps: 10,
    rest: 50,
    gif: "media/BU15nH4.gif",
    primary: ['biceps'],
    secondary: ['forearms'],
    anim: "hammerCurl",
    youtube: "sAq_ocpRh_I",
    query: "alternating dumbbell curl ayakta tek tek nasıl yapılır",
    steps: [
      "Ayakta, dambıllar yanda, avuçlar ileri baksın.",
      "Bir kolu kıvırın, diğerini indirmeden bekletmeyin: tek tek.",
      "Dirsekler belde sabit, gövde sallanmasın."
    ]
  },
  {
    id: "hammer",
    group: "onkol",
    no: 4,
    name: "Çekiç Dumbbell",
    nameTr: "Çekiç tutuş kıvırma",
    sets: 3,
    reps: 10,
    rest: 50,
    gif: "media/2NpxjC1.gif",
    primary: ['biceps'],
    secondary: ['forearms'],
    anim: "hammerCurl",
    youtube: "zC3nLlEvin4",
    query: "hammer curl çekiç dumbbell nasıl yapılır",
    steps: [
      "Avuçlar birbirine baksın (çekiç tutuş).",
      "Dirsekler belde, dambılı omza kıvırın.",
      "Bilek döndürmeyin."
    ]
  },
  {
    id: "pushdown",
    group: "arkakol",
    no: 1,
    name: "Pushdown Lat Machine",
    nameTr: "Arka kol itiş",
    sets: 4,
    reps: 12,
    rest: 50,
    gif: "media/3ZflifB.gif",
    primary: ['triceps'],
    secondary: [],
    anim: "pushdown",
    youtube: "2-LAMcpzODU",
    query: "triceps pushdown arka kol nasıl yapılır",
    steps: [
      "Dirsekleri belde kilitleyin.",
      "Barı veya halatı aşağı itin, tepede tricepsi sıkın.",
      "Dirsekler öne açılmasın."
    ]
  },
  {
    id: "close-bench",
    group: "arkakol",
    no: 2,
    name: "Dar Bench",
    nameTr: "Dar tutuş bench",
    sets: 4,
    reps: 10,
    rest: 75,
    gif: "media/da4cXST.gif",
    primary: ['triceps'],
    secondary: ['chest', 'shoulders'],
    anim: "closeGrip",
    youtube: "nEF0bv2FW94",
    query: "close grip bench press dar bench nasıl yapılır",
    steps: [
      "Tutuş omuz genişliğinden dar olsun, bilekler düz.",
      "Barı alt göğse indirin, dirsekler vücuda yakın.",
      "Tricepslerle itin; omuzları öne alma."
    ]
  },
  {
    id: "leg-ext",
    group: "bacak",
    no: 1,
    name: "Leg Extension",
    nameTr: "Ön bacak",
    sets: 4,
    reps: 12,
    rest: 60,
    gif: "media/my33uHU.gif",
    primary: ['quadriceps'],
    secondary: [],
    anim: "legExtension",
    youtube: "YyvSfVjQeL0",
    query: "leg extension ön bacak nasıl yapılır",
    steps: [
      "Sırt yaslı, yastık ayak bileğinin önünde.",
      "Bacakları düz olana kadar kaldırın, tepede sıkın.",
      "Yavaş indirin, kalçayı koltuktan kaldırmayın."
    ]
  },
  {
    id: "leg-press",
    group: "bacak",
    no: 2,
    name: "Leg Press 45",
    nameTr: "Bacak press",
    sets: 4,
    reps: 12,
    rest: 75,
    gif: "media/10Z2DXU.gif",
    primary: ['quadriceps'],
    secondary: ['glutes', 'hamstrings'],
    anim: "legPress",
    youtube: "IZxyjW7MPJQ",
    query: "45 derece leg press nasıl yapılır",
    steps: [
      "Ayaklar platformda omuz genişliğinde.",
      "Dizleri ~90° kırın, bel yastıktan ayrılmasın.",
      "Topuklardan itin, dizleri patlatmadan durun."
    ]
  },
  {
    id: "leg-curl",
    group: "bacak",
    no: 3,
    name: "Leg Curl",
    nameTr: "Arka bacak",
    sets: 4,
    reps: 12,
    rest: 60,
    gif: "media/17lJ1kr.gif",
    primary: ['hamstrings'],
    secondary: ['calves'],
    anim: "legCurl",
    youtube: "1Tq3QdYUuHs",
    query: "leg curl arka bacak nasıl yapılır",
    steps: [
      "Yüzüstü veya oturarak, yastık aşık kemiğinin üstünde.",
      "Topukları kalçaya çekin.",
      "Kalçayı kaldırmadan yavaş bırakın."
    ]
  },
  {
    id: "abductor",
    group: "bacak",
    no: 4,
    name: "Adductor (Dış bacak)",
    nameTr: "Dış bacak açış",
    sets: 4,
    reps: 12,
    rest: 50,
    gif: "media/CHpahtl.gif",
    primary: ['abductors'],
    secondary: ['glutes'],
    anim: "abductor",
    youtube: "WfYlmI2fvlY",
    query: "hip abduction machine dış bacak nasıl yapılır",
    steps: [
      "Makinede oturun, yastıklar diz dışına gelsin.",
      "Dizleri yana açın, dış kalçayı hissedin.",
      "Kontrollü kapatın. (Kağıtta dış bacak işaretli.)"
    ]
  },
  {
    id: "crunch",
    group: "bel",
    no: 1,
    name: "Crunches",
    nameTr: "Sıkıştırma",
    sets: 3,
    reps: "max",
    rest: 45,
    gif: "media/dTg95eZ.gif",
    primary: ['abs'],
    secondary: ['hip flexors'],
    anim: "crunch",
    youtube: "Xyd_fa5zoEU",
    query: "crunch karın sıkıştırma nasıl yapılır",
    steps: [
      "Sırt üstü, dizler kırık, eller baş yanında.",
      "Kaburgaları leğen kemiğine yaklaştırın.",
      "Boyundan çekmeyin; yorulana kadar (max) tekrar."
    ]
  },
  {
    id: "leg-raise",
    group: "bel",
    no: 2,
    name: "Leg Raiser",
    nameTr: "Yatarak ayak çekme",
    sets: 3,
    reps: "max",
    rest: 45,
    gif: "media/WhuFnR7.gif",
    primary: ['abs'],
    secondary: ['hip flexors'],
    anim: "legRaise",
    youtube: "JB2oyawG9KI",
    query: "lying leg raise yatarak ayak çekme nasıl yapılır",
    steps: [
      "Sırt üstü, eller yanda veya sehpa kenarında.",
      "Bacakları düz (veya hafif kırık) yukarı kaldırın.",
      "Bel yere yapışık kalsın; yavaş indirin. Max tekrar."
    ]
  }
];
