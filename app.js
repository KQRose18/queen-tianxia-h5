const STORAGE_KEY = "queen-tianxia-shortdrama-mvp-v3";
const ASSET_VERSION = "20260623-172049";

const audioManifest = {
  bgm: {
    intro: "assets/audio/bgm/bgm_intro_ascension.mp3",
    home: "assets/audio/bgm/bgm_home_jindeng_study.mp3",
    shen: "assets/audio/bgm/bgm_shenyan_study_romance.mp3",
    xiao: "assets/audio/bgm/bgm_xiaozhao_battlefield.mp3",
    rong: "assets/audio/bgm/bgm_rongyu_banquet.mp3",
    xie: "assets/audio/bgm/bgm_xiechangli_merchant.mp3",
    pei: "assets/audio/bgm/bgm_peiwujiu_rain_assassin.mp3"
  },
  sfx: {
    click: "assets/audio/sfx/ui_click.mp3",
    tab: "assets/audio/sfx/ui_tab.mp3",
    choice: "assets/audio/sfx/choice_select.mp3",
    buy: "assets/audio/sfx/market_buy.mp3",
    sell: "assets/audio/sfx/market_sell.mp3",
    coinSmall: "assets/audio/sfx/sfx_coin_small.mp3",
    coinBig: "assets/audio/sfx/sfx_coin_big.mp3",
    edict: "assets/audio/sfx/edict_stamp.mp3",
    unlock: "assets/audio/sfx/unlock_reveal.mp3",
    affection: "assets/audio/sfx/affection_up.mp3",
    error: "assets/audio/sfx/error_soft.mp3",
    rank: "assets/audio/sfx/rank_up.mp3",
    story: "assets/audio/sfx/story_open.mp3"
  }
};

const months = ["正月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "冬月", "腊月"];
const storyNames = ["初遇", "试探", "暧昧", "拉扯", "独处", "吃醋", "守护", "表白", "专属剧情", "HE"];

const assets = [
  { id: "grain", name: "漕粮", base: 3200, hint: "江南大旱时最容易暴涨" },
  { id: "silk", name: "云锦", base: 5200, hint: "宫宴与使团会推高需求" },
  { id: "salt", name: "盐引", base: 7600, hint: "税法传闻会造成剧烈波动" },
  { id: "arms", name: "兵甲", base: 9800, hint: "边关战事吃紧时硬通货" },
  { id: "edict", name: "密诏", base: 12800, hint: "提前知道谁在暗中押注" },
  { id: "glass", name: "琉璃", base: 6600, hint: "西域风潮一来就会疯涨" }
];

const rumors = [
  { title: "江南大旱", text: "漕粮看涨", target: "grain", stars: "★★★★☆" },
  { title: "西域商路重开", text: "云锦、琉璃需求上涨", target: "silk", stars: "★★★☆☆" },
  { title: "边关战事吃紧", text: "兵甲需求增加", target: "arms", stars: "★★★★★" }
];

const assetAffinity = {
  grain: { shen: 2 },
  silk: { rong: 2 },
  salt: { xie: 2 },
  arms: { xiao: 3 },
  edict: { pei: 2, shen: 1 },
  glass: { rong: 2, xie: 1 }
};

const storyFavorThresholds = {
  shen: [0, 8, 18, 32, 50, 70],
  pei: [0, 8, 20, 32, 50, 70],
  xie: [0, 8, 20, 32, 50, 70],
  xiao: [0, 8, 20, 32, 50, 70],
  rong: [0, 8, 20, 32, 50, 70]
};

const consorts = [
  {
    id: "shen",
    name: "沈砚",
    title: "白切黑首辅",
    img: "assets/consorts/shen-yan.webp",
    unlockImg: "assets/story/unlocks/shen_unlock.webp",
    unlock: "初始解锁",
    line: "奏折重要，还是臣重要？",
    bg: "date"
  },
  {
    id: "pei",
    name: "裴无咎",
    title: "杀手 · 疯批守护",
    img: "assets/consorts/pei-wujiu.webp",
    unlockImg: "assets/story/unlocks/pei_unlock.webp",
    unlock: "财富达到 80,000",
    line: "有人出十万两买您的人头。",
    bg: "opening"
  },
  {
    id: "xie",
    name: "谢长离",
    title: "奸商 · 腹黑会赚钱",
    img: "assets/consorts/xie-changli.webp",
    unlockImg: "assets/story/unlocks/xie_unlock.webp",
    unlock: "财富达到 120,000",
    line: "陛下缺钱，臣缺一个合伙人。",
    bg: "opening"
  },
  {
    id: "xiao",
    name: "萧照",
    title: "疯犬将军",
    img: "assets/consorts/xiao-zhao.webp",
    unlockImg: "assets/story/unlocks/xiao_unlock.webp",
    unlock: "权势达到 32",
    line: "臣的刀，只认陛下一人。",
    bg: "opening"
  },
  {
    id: "rong",
    name: "容与",
    title: "异域皇子",
    img: "assets/consorts/rong-yu.webp",
    unlockImg: "assets/story/unlocks/rong_unlock.webp",
    unlock: "魅力达到 42",
    line: "今夜月色，适合向陛下投降。",
    bg: "opening"
  }
];

const resultImages = {
  shen: "assets/story/results/shen_result_big.webp",
  pei: "assets/story/results/pei_result_big.webp",
  xie: "assets/story/results/xie_result_big.webp",
  xiao: "assets/story/results/xiao_result_big.webp",
  rong: "assets/story/results/rong_result_big.webp",
  money: "assets/story/results/result_money_big.webp",
  edict: "assets/story/results/result_edict_success.webp",
  rank: "assets/story/results/result_rank_up.webp",
  affection: "assets/story/results/result_affection_success_extra.webp"
};

const storyChapters = {
  shen: [
    {
      name: "初遇",
      cg: { image: "assets/story/strips/shen_story_01_strip.webp", position: "center center", size: "auto 100%" },
      line: "首辅大人，怎么，见到朕不行礼？",
      voiceLine: "臣只是怕看久了，会忘了礼数。",
      choices: [
        { text: "抬眼看他", favor: 10, reply: "沈砚指尖一顿，低声说：臣只是怕看久了，会忘了礼数。", voiceLine: "臣只是怕看久了，会忘了礼数。" },
        { text: "敲敲奏折", favor: 6, reply: "沈砚笑意很浅：陛下终于知道，臣比奏折更难批。", voiceLine: "陛下终于知道，臣比奏折更难批。" }
      ]
    },
    {
      name: "试探",
      cg: { image: "assets/story/strips/shen_story_02_strip.webp", position: "center center", size: "auto 100%" },
      line: "臣替陛下看过账册。国库亏空不难补，难补的是人心。",
      choices: [
        { text: "那你补朕的人心", favor: 12, reply: "沈砚垂眸：陛下这句话，臣会记一整夜。", voiceLine: "陛下这句话，臣会记一整夜。" },
        { text: "先补国库", favor: 7, reply: "他把朱笔递来：陛下会算账，臣便放心一半。", voiceLine: "陛下会算账，臣便放心一半。" }
      ]
    },
    {
      name: "失礼",
      cg: { image: "assets/story/strips/shen_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "烛火忽然灭了一半。沈砚扶住你按在奏折上的手，声音仍稳：奏折重要，可臣现在更想犯一次失礼。",
      voiceLine: "奏折重要，可臣现在更想犯一次失礼。",
      choices: [
        { text: "不许退", favor: 18, reply: "他指尖一紧，低声道：陛下再这样命令，臣真的会忘了君臣。", voiceLine: "陛下再这样命令，臣真的会忘了君臣。" },
        { text: "松手", favor: 10, reply: "沈砚立刻退开，却把外袍披到你肩上：臣松手，但心还跪在这里。", voiceLine: "臣松手，但心还跪在这里。" }
      ]
    },
    {
      name: "拉扯",
      cg: { image: "assets/story/strips/shen_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "若有一日，臣与天下相悖，陛下选谁？",
      choices: [
        { text: "先选你，再夺天下", favor: 16, reply: "沈砚眼底暗潮翻涌：这才像臣的女王。", voiceLine: "这才像臣的女王。" },
        { text: "选天下", favor: 6, reply: "他笑得温顺：陛下英明。只是臣会嫉妒。", voiceLine: "陛下英明。只是臣会嫉妒。" }
      ]
    },
    {
      name: "污名",
      cg: { image: "assets/story/strips/shen_story_05_strip.webp", fallback: "assets/story/strips/shen_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "百官跪在殿前逼你交出账册，沈砚却先一步认下所有罪名。夜里他回到御书房，外袍半湿，衣领被雨扯开一线，仍隔着案几问你：陛下，要臣替您脏到哪一步？",
      voiceLine: "陛下，要臣替您脏到哪一步？",
      choices: [
        { text: "不许他认罪", favor: 18, reply: "沈砚轻轻摇头，握住你按在账册上的手背：陛下干净，臣才有资格站在您身边。骂名这种东西，臣来背。", voiceLine: "陛下干净，臣才有资格站在您身边。骂名这种东西，臣来背。" },
        { text: "把账册交给他", favor: 14, reply: "他指腹擦过账册边缘，低声道：臣接了。往后朝堂骂臣，陛下只管赢。", voiceLine: "臣接了。往后朝堂骂臣，陛下只管赢。" }
      ]
    },
    {
      name: "不让",
      cg: { image: "assets/story/strips/shen_story_06_strip.webp", fallback: "assets/story/strips/shen_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "夜半御书房只剩一盏灯。沈砚跪在你案前，终于失了从容：我愿替陛下背万世骂名，但陛下不能把我也推给天下。",
      voiceLine: "我愿替陛下背万世骂名，但陛下不能把我也推给天下。",
      choices: [
        { text: "抬起他的下巴", favor: 20, reply: "他眼尾微红，却顺着你的指尖抬头：臣可以做陛下最干净的刀，也可以做最脏的影子。唯独不能做旁人。", voiceLine: "臣可以做陛下最干净的刀，也可以做最脏的影子。唯独不能做旁人。" },
        { text: "问他想要什么", favor: 18, reply: "沈砚低声笑了一下：臣想要陛下每一次回头，都先看见臣。", voiceLine: "臣想要陛下每一次回头，都先看见臣。" }
      ]
    }
  ],
  pei: [
    {
      name: "雨夜",
      cg: { image: "assets/story/strips/pei_story_01_strip.webp", position: "center center", size: "auto 100%" },
      line: "听说陛下很有钱。有人出十万两买您的人头。",
      choices: [
        { text: "你来杀我？", favor: 9, reply: "裴无咎笑了：若臣真想杀，陛下不会听见第二句话。" },
        { text: "你来保护我？", favor: 14, reply: "刀锋在雨里一转，他说：那得看陛下给不给臣名分。" }
      ]
    },
    {
      name: "试刀",
      cg: { image: "assets/story/strips/pei_story_02_strip.webp", position: "center center", size: "auto 100%" },
      line: "臣的刀很脏，陛下的手却很干净。要不要碰一下？",
      choices: [
        { text: "握住刀柄", favor: 15, reply: "他呼吸一滞：陛下胆子这么大，臣会误会。" },
        { text: "握住他的手", favor: 20, reply: "裴无咎眼神沉下去：这比刀更危险。" }
      ]
    },
    {
      name: "血雨",
      cg: { image: "assets/story/strips/pei_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "雨水顺着裴无咎的刀尖落下。他挡在你窗前，肩上新伤裂开，却笑着问：陛下，怕臣脏了您的梦吗？",
      choices: [
        { text: "替他按住伤口", favor: 20, reply: "他呼吸乱了一瞬，握刀的手却更稳：别心疼臣。臣会误会自己还有命可惜。" },
        { text: "命他进殿", favor: 16, reply: "裴无咎翻窗跪下，雨水滴在地上：臣进来了。今晚谁也别想越过臣。" }
      ]
    },
    {
      name: "暗箭",
      cg: { image: "assets/story/strips/pei_story_04_strip.webp", fallback: "assets/story/strips/pei_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "宫墙雨夜，第三支暗箭擦着你的凤辇飞过。裴无咎从黑暗里落下，黑衣被雨贴在肩背，刀尖滴水，声音比雨还冷：陛下，这宫里有人嫌您活得太久。",
      choices: [
        { text: "让他查", favor: 18, reply: "裴无咎低笑：查可以。若查到陛下舍不得杀的人，臣替您杀。" },
        { text: "让他先包扎", favor: 20, reply: "他看了一眼臂上的伤，像才想起来会疼，任你扯开湿透的袖口：陛下要臣活着查，臣就活着。" }
      ]
    },
    {
      name: "替箭",
      cg: { image: "assets/story/strips/pei_story_05_strip.webp", fallback: "assets/story/strips/pei_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "你刚伸手掀帘，裴无咎忽然扑过来把你护回凤辇，近得能听见他压乱的呼吸。暗箭穿过他肩骨，他却笑：这支箭若中陛下，臣会很没面子。",
      choices: [
        { text: "按住他的伤口", favor: 20, reply: "裴无咎呼吸乱了一瞬，肩背绷紧，仍盯着你笑：陛下手别抖。臣还没替您杀完人。" },
        { text: "命他不许死", favor: 18, reply: "他伏在你袖边，声音发哑：臣听命。杀手最守约，尤其对陛下。" }
      ]
    },
    {
      name: "献刀",
      cg: { image: "assets/story/strips/pei_story_06_strip.webp", fallback: "assets/story/strips/pei_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "雨下到天明，裴无咎跪在宫门前，把自己的刀横放到你脚边：若有一日臣背叛陛下，请陛下亲手杀我。别交给旁人，臣会嫉妒。",
      choices: [
        { text: "接过他的刀", favor: 20, reply: "裴无咎低下头，额头几乎碰到你的裙摆，像终于被驯服：臣的命、刀、夜路，从此都归陛下。" },
        { text: "问他查到了谁", favor: 18, reply: "他抬眼，笑意彻底冷下来：买凶的人不在宫外。陛下，您的龙椅旁边，有一只手伸得太近。" }
      ]
    }],
  xie: [
    {
      name: "账房",
      cg: { image: "assets/story/strips/xie_story_01_strip.webp", position: "center center", size: "auto 100%" },
      line: "陛下缺钱，臣缺一个合伙人。我们很配。",
      choices: [
        { text: "你配得上朕？", favor: 12, reply: "谢长离拨了拨算盘：配不上，但臣很会赚。" },
        { text: "先赚十万两给朕看", favor: 10, reply: "他笑着俯身：成交。利润和心，都归陛下。" }
      ]
    },
    {
      name: "黑心账",
      cg: { image: "assets/story/strips/xie_story_02_strip.webp", position: "center center", size: "auto 100%" },
      line: "银钱眼里过，情义心中留。陛下信哪一句？",
      choices: [
        { text: "信你心中留", favor: 18, reply: "他指尖停在算盘上：这笔账，臣认栽。" },
        { text: "信你会赚钱", favor: 11, reply: "谢长离笑得漂亮：陛下真懂臣。" }
      ]
    },
    {
      name: "密信",
      cg: { image: "assets/story/strips/xie_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "账册暗格里滑出一封密信。谢长离第一次没有笑，算盘珠停在半空：陛下，这一笔若查下去，臣可能赔上命。",
      choices: [
        { text: "压住密信", favor: 20, reply: "他看着你的手，声音低了下去：陛下压的是信，还是臣的命门？" },
        { text: "让他自己交代", favor: 15, reply: "谢长离把暗格全推开：臣黑心，但不蠢。该赔给陛下的，一文都不会少。" }
      ]
    },
    {
      name: "赔本",
      cg: { image: "assets/story/strips/xie_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "他病着守了一夜账，仍笑着把银箱推来：钱赔给陛下，人也赔给陛下，臣这笔买卖亏大了。",
      choices: [
        { text: "喂他喝药", favor: 20, reply: "谢长离低头就着你的手喝下去：亏是亏了，可臣愿意续约。" },
        { text: "只收账不收人", favor: 13, reply: "他咳着笑：陛下真狠。那臣再赚一座金山，换您改口。" }
      ]
    },
    {
      name: "病账",
      cg: { image: "assets/story/strips/xie_story_05_strip.webp", fallback: "assets/story/strips/xie_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "国库账房灯亮了一整夜。谢长离烧得指尖发冷，衣领松散，仍把最后一本假账压在身下，笑着问你：陛下，是先查账，还是先查臣的命？",
      choices: [
        { text: "先喂他喝药", favor: 20, reply: "他低头就着你的手喝下去，唇几乎碰到你指节，声音轻得不像他：陛下这样，臣会以为自己比钱值钱。" },
        { text: "先翻账册", favor: 16, reply: "谢长离闭了闭眼，仍笑：果然是臣看上的买家，心狠，眼准，还要命。" }
      ]
    },
    {
      name: "赔尽",
      cg: { image: "assets/story/strips/xie_story_06_strip.webp", fallback: "assets/story/strips/xie_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "城门将闭，谢长离用半座长安的银路买你一条生路。他第一次没有笑，只把契书和自己的私印一并推到你面前：钱赔给陛下，人也赔给陛下。臣怕的不是亏，是陛下不要臣。",
      choices: [
        { text: "收下契书", favor: 20, reply: "他眼底终于松动：成交。往后臣赚的每一文，都是陛下的退路。" },
        { text: "只收人，不收钱", favor: 18, reply: "谢长离怔住，喉结滚了一下，慢慢把额头抵到你掌心：陛下这笔买卖，臣赔得心甘情愿。" }
      ]
    }
  ],
  xiao: [
    {
      name: "归营",
      cg: { image: "assets/story/strips/xiao_story_01_strip.webp", position: "center center", size: "auto 100%" },
      line: "臣身上都是血，陛下还要靠近？",
      choices: [
        { text: "靠近", favor: 14, reply: "萧照跪得更低：臣的命，早就是陛下的。" },
        { text: "先擦刀", favor: 9, reply: "他抬头看你：刀听话，人也听话。" }
      ]
    },
    {
      name: "疯犬",
      cg: { image: "assets/story/strips/xiao_story_02_strip.webp", position: "center center", size: "auto 100%" },
      line: "满朝都说臣是疯犬。陛下也怕？",
      choices: [
        { text: "朕养得起", favor: 18, reply: "萧照眼尾发红：那臣只咬陛下的敌人。" },
        { text: "怕你受伤", favor: 15, reply: "他沉默很久：这句话，比军令更重。" }
      ]
    },
    {
      name: "活命",
      cg: { image: "assets/story/strips/xiao_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "萧照跪在雪里请命，血从甲缝渗出来：臣可以替陛下死。但若陛下要臣活着回来，臣也领命。",
      choices: [
        { text: "按住他的伤口", favor: 20, reply: "萧照呼吸一滞，眼尾发红：臣不敢死了。陛下的手还在这里。" },
        { text: "命他活着回来", favor: 16, reply: "他单膝跪得更低：臣领命。刀会赢，人也会回来。" }
      ]
    },
    {
      name: "失控",
      cg: { image: "assets/story/strips/xiao_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "他带着断旗回来，手停在你腰侧半寸，像再近一步就会失控。",
      choices: [
        { text: "准他抱一瞬", favor: 20, reply: "萧照只抱了一瞬，低声道：臣记住了。下次不靠战功，也要活着见陛下。" },
        { text: "让他松手", favor: 14, reply: "他立刻退开，却仍盯着你：臣听命。只是心跳，暂时收不回去。" }
      ]
    },
    {
      name: "死讯",
      cg: { image: "assets/story/strips/xiao_story_05_strip.webp", fallback: "assets/story/strips/xiao_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "边关急报送到御前，只剩一面染血断旗和半片黑甲。所有人都说萧照战死，只有旗角压着一行血字：臣若回不来，陛下别看别人。",
      choices: [
        { text: "不信他死", favor: 18, reply: "风把断旗吹到你掌心，血字未干，像他还在咬牙撑着等你下一道命令。" },
        { text: "命人开城搜救", favor: 20, reply: "禁军领命退下，殿外雷声滚过，仿佛有马蹄声从很远的雪里追来。" }
      ]
    },
    {
      name: "活着",
      cg: { image: "assets/story/strips/xiao_story_06_strip.webp", fallback: "assets/story/strips/xiao_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "天亮时，萧照拖着断旗和胜报回到宫门，黑甲裂开，伤口还在渗血。他跪地请罪：臣赢了，但差点没能活着见陛下。请陛下命令臣，往后不许只会为您死。",
      choices: [
        { text: "按住他的伤口", favor: 20, reply: "萧照疼得发颤，却握住你按在伤口上的手：臣记住了。陛下按着的地方，往后不准死。" },
        { text: "准他抱一下", favor: 18, reply: "他只抱了一瞬就松开，盔甲冰冷，呼吸滚烫：臣不敢久抱。怕一松手，又想替陛下去死。" }
      ]
    }
  ],
  rong: [
    {
      name: "宫宴",
      cg: { image: "assets/story/strips/rong_story_01_strip.webp", position: "center center", size: "auto 100%" },
      line: "一杯葡萄酒，换陛下一支舞。",
      choices: [
        { text: "成交", favor: 13, reply: "容与举杯：陛下跳的是舞，臣失的是城池。" },
        { text: "你先臣服", favor: 16, reply: "他俯身吻杯沿：臣早已投降，只等陛下接收。" }
      ]
    },
    {
      name: "异香",
      cg: { image: "assets/story/strips/rong_story_02_strip.webp", position: "center center", size: "auto 100%" },
      line: "这香只在故国王帐点燃。陛下闻见，会梦到臣。",
      choices: [
        { text: "那今晚留下", favor: 19, reply: "容与笑意像酒：陛下真会要臣的命。" },
        { text: "朕不信梦", favor: 10, reply: "他说：那臣便亲自来。" }
      ]
    },
    {
      name: "杯沿",
      cg: { image: "assets/story/strips/rong_story_03_strip.webp", position: "center center", size: "auto 100%" },
      line: "酒盏递来时，容与指尖故意擦过你。笑意还未落，旧国信物忽然出现在宴灯下，他的眼神冷了半分。",
      choices: [
        { text: "不松开酒盏", favor: 20, reply: "容与垂眼看着相触的指尖：陛下这样留人，臣很难不误会。" },
        { text: "问他站哪边", favor: 15, reply: "他收起笑：旧国给臣姓名，陛下给臣退路。臣还在选。" }
      ]
    },
    {
      name: "旧国",
      cg: { image: "assets/story/strips/rong_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "月下风冷，他醉意很浅，偏偏低声问：若臣把旧国赔给陛下，陛下收不收臣？",
      choices: [
        { text: "收下信物", favor: 20, reply: "容与把玉坠放进你掌心：从今夜起，臣的退路在陛下这里。" },
        { text: "让他清醒再说", favor: 15, reply: "他笑着俯近，又停在礼数之外：臣清醒得很，只是终于敢输。" }
      ]
    },
    {
      name: "回头",
      cg: { image: "assets/story/strips/rong_story_05_strip.webp", fallback: "assets/story/strips/rong_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "旧国使者跪在殿下，奉上王印，要容与随他们回去。容与笑着看你，杯中酒却一滴没喝：陛下猜，臣会不会回头？",
      choices: [
        { text: "不许他走", favor: 20, reply: "容与眼底笑意一顿，慢慢走到高台下仰头看你：陛下这句话，比旧国王印更像枷锁。" },
        { text: "让他自己选", favor: 18, reply: "他轻轻晃杯：陛下最残忍。您给臣自由，臣反而舍不得走。" }
      ]
    },
    {
      name: "献国",
      cg: { image: "assets/story/strips/rong_story_06_strip.webp", fallback: "assets/story/strips/rong_story_04_strip.webp", position: "center center", size: "auto 100%" },
      line: "月色下，容与把旧国信物放进你掌心，指尖在你掌纹上停得太久。他笑得像输得很漂亮：旧国给臣王冠，陛下给臣心跳。臣选陛下，但这份献礼，恐怕有人动了手脚。",
      choices: [
        { text: "收下他的信物", favor: 20, reply: "容与垂眸，唇停在你指尖前一寸，礼数停得刚好：从今夜起，臣没有旧国，只有陛下。" },
        { text: "问他怕不怕后悔", favor: 18, reply: "他笑意微哑：后悔也晚了。臣这颗心，已经在陛下掌心里跳过一次。" }
      ]
    }
  ]
};

const edicts = [
  {
    id: "tax",
    name: "减税",
    text: "财富 -2,000，威望 +5。沈砚好感 +4。",
    affinity: { shen: 4 },
    apply(state) {
      if (state.wealth < 2000) return fail("国库不足，户部把奏折悄悄压下了。");
      state.wealth -= 2000;
      state.prestige += 5;
      state.activity += 10;
      return ok("百姓称颂陛下仁政。威望 +5");
    }
  },
  {
    id: "relief",
    name: "开仓赈灾",
    text: "财富 -5,000，魅力 +15，威望 +10。容与好感 +3，沈砚好感 +2。",
    affinity: { rong: 3, shen: 2 },
    apply(state) {
      if (state.wealth < 5000) return fail("赈灾银不够，沈砚只好替你重算账册。");
      state.wealth -= 5000;
      state.charm += 15;
      state.prestige += 10;
      state.activity += 12;
      return ok("雨停时，沈砚替你撑伞走过长街。魅力 +15");
    }
  },
  {
    id: "army",
    name: "扩充边军",
    text: "财富 -3,000，权势 +10。萧照好感 +5。",
    affinity: { xiao: 5 },
    apply(state) {
      if (state.wealth < 3000) return fail("兵部要钱，你只能先让他们喝茶。");
      state.wealth -= 3000;
      state.power += 10;
      state.activity += 8;
      return ok("新甲入库，萧照的名字第一次出现在军报上。权势 +10");
    }
  },
  {
    id: "spy",
    name: "密查旧族",
    text: "财富 -3,500，权势 +5，威望 +3。裴无咎好感 +5。",
    affinity: { pei: 5 },
    apply(state) {
      if (state.wealth < 3500) return fail("暗线没拿到银票，只能继续潜伏。");
      state.wealth -= 3500;
      state.power += 5;
      state.prestige += 3;
      state.activity += 9;
      return ok("暗线出宫，雨夜有人替陛下清掉一支冷箭。");
    }
  },
  {
    id: "trade",
    name: "开放商路",
    text: "财富 -2,500，魅力 +6。谢长离好感 +4，容与好感 +2。",
    affinity: { xie: 4, rong: 2 },
    apply(state) {
      if (state.wealth < 2500) return fail("商路银牌尚未备齐，商队不敢入京。");
      state.wealth -= 2500;
      state.charm += 6;
      state.activity += 8;
      return ok("西域商队入城，账房和宫宴同时热闹起来。");
    }
  }
];

const introSlides = [
  {
    imageClass: "startup",
    html: "<strong class=\"intro-logo\">女王天下</strong><p class=\"intro-subtitle\">凤驾将至，宫门已开。</p>"
  },
  {
    imageClass: "opening-1",
    html: "<p>陛下登基第一年。</p><p>国库空虚，边关不稳，朝中暗流涌动。</p><p>而后宫，也并不安宁。</p>",
    narration: [
      "陛下登基第一年。",
      "国库空虚。边关不稳。",
      "朝中暗流涌动。而后宫，也并不安宁。",
      "这一年，所有人都在等陛下做出选择。"
    ]
  },
  {
    imageClass: "opening-2",
    html: "<strong>沈砚</strong><p>陛下。</p><p>臣等了您很久。</p>",
    narration: [
      "有人跪在殿前，等一道诏令。",
      "有人藏在雨夜，等一次回头。",
      "有人把真心，藏进账册。",
      "有人把刀锋，交到陛下手里。"
    ]
  },
  {
    imageClass: "opening-3",
    html: "<strong>沈砚</strong><p>既然来了。</p><p>臣教您怎么当好这个女王。</p>",
    narration: [
      "财富不是终点。只是打开命运的钥匙。",
      "朝局每月更替。风闻暗藏机会。",
      "市场涨跌无常。胆识决定国库厚薄。",
      "一道诏令，可以安民，也可以树敌。",
      "一场交易，可以暴富，也可能误判。",
      "当财富，权势，魅力与威望，累积到极致。",
      "新的命运，便会出现。",
      "请陛下入局。",
      "这一局，天下与真心，都在等您亲手赢下。"
    ]
  }
];

let introIndex = 0;
let playerCallback = null;
let state = loadState();
let activeBgm = null;
let audioUnlocked = false;
let pendingBgmKey = null;
let storyUnlockTimer = null;
let preferredTtsVoice = null;
let ttsAudioManifest = {};
let activeVoiceAudio = null;
let narrationToken = 0;
const sfxPool = {};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const fmt = (value) => Math.round(value).toLocaleString("zh-CN");

function createState() {
  const next = {
    month: 0,
    wealth: 50000,
    power: 18,
    charm: 22,
    prestige: 16,
    activity: 0,
    energy: 3,
    tickets: 1,
    activeConsort: "shen",
    bgmMuted: false,
    ttsEnabled: true,
    guided: false,
    edictDone: false,
    tutorialDone: false,
    inventory: {},
    prices: {},
    unlocked: {},
    favor: {},
    story: {},
    resultSeen: {
      storyFirst: {},
      storyKey: {},
      money: false,
      edict: false,
      rank: false
    },
    daily: { trade: false, date: false, edict: false }
  };

  assets.forEach((asset) => {
    next.inventory[asset.id] = 0;
    next.prices[asset.id] = asset.base;
  });
  consorts.forEach((consort) => {
    next.unlocked[consort.id] = consort.id === "shen";
    next.favor[consort.id] = consort.id === "shen" ? 5 : 0;
    next.story[consort.id] = consort.id === "shen" ? 1 : 0;
  });
  return next;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return createState();
    const base = createState();
    return {
      ...base,
      ...saved,
      inventory: { ...base.inventory, ...saved.inventory },
      prices: { ...base.prices, ...saved.prices },
      unlocked: { ...base.unlocked, ...saved.unlocked },
      favor: { ...base.favor, ...saved.favor },
      story: { ...base.story, ...saved.story },
      resultSeen: {
        ...base.resultSeen,
        ...saved.resultSeen,
        storyFirst: { ...base.resultSeen.storyFirst, ...saved.resultSeen?.storyFirst },
        storyKey: { ...base.resultSeen.storyKey, ...saved.resultSeen?.storyKey }
      },
      daily: { ...base.daily, ...saved.daily }
    };
  } catch {
    return createState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function voiceKey(name, line) {
  const input = `${name}|${line}`.replace(/\s+/g, " ").trim();
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `v_${(hash >>> 0).toString(36)}`;
}

async function loadTtsAudioManifest() {
  try {
    const response = await fetch(`assets/voice/manifest.json?v=${ASSET_VERSION}`);
    if (!response.ok) return;
    ttsAudioManifest = await response.json();
    updateTtsToggleLabel();
  } catch {
    ttsAudioManifest = {};
  }
}

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  Object.entries(audioManifest.sfx).forEach(([key, src]) => {
    const audio = new Audio(src);
    audio.preload = "auto";
    audio.addEventListener("error", () => {
      delete sfxPool[key];
    }, { once: true });
    sfxPool[key] = audio;
  });
}

function playSfx(key) {
  if (!audioUnlocked) return;
  const sound = sfxPool[key];
  if (!sound) return;
  sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playBgm(key) {
  if (state.bgmMuted) {
    pendingBgmKey = null;
    if (activeBgm) activeBgm.pause();
    return;
  }
  const src = audioManifest.bgm[key];
  if (!src) return;
  if (activeBgm?.dataset.key === key) {
    activeBgm.play().then(() => {
      pendingBgmKey = null;
    }).catch(() => {
      pendingBgmKey = key;
    });
    return;
  }
  if (activeBgm) {
    activeBgm.pause();
    activeBgm.currentTime = 0;
  }
  activeBgm = new Audio(src);
  activeBgm.dataset.key = key;
  activeBgm.loop = true;
  activeBgm.volume = key === "intro" ? 0.46 : 0.38;
  activeBgm.play().then(() => {
    pendingBgmKey = null;
  }).catch(() => {
    pendingBgmKey = key;
  });
}

function resumePendingBgm() {
  if (!pendingBgmKey) return;
  const key = pendingBgmKey;
  pendingBgmKey = null;
  playBgm(key);
}

function setBgmMuted(muted) {
  state.bgmMuted = muted;
  $("#audioToggleBtn").textContent = muted ? "音乐关" : "音乐开";
  if (muted) {
    if (activeBgm) activeBgm.pause();
    pendingBgmKey = null;
  } else {
    playBgm("home");
  }
  saveState();
}

function setTtsEnabled(enabled) {
  state.ttsEnabled = enabled;
  updateTtsToggleLabel();
  if (!enabled) stopTts();
  saveState();
}

function hasTtsAudioFiles() {
  return Object.keys(ttsAudioManifest || {}).length > 0;
}

function updateTtsToggleLabel() {
  const button = $("#ttsToggleBtn");
  if (!button) return;
  if (!state.ttsEnabled) {
    button.textContent = "语音关";
    return;
  }
  button.textContent = hasTtsAudioFiles() ? "真人语音开" : "语音开";
}

function initTtsVoice() {
  if (!("speechSynthesis" in window)) return;
  const voices = window.speechSynthesis.getVoices();
  preferredTtsVoice =
    voices.find((voice) => /zh|cmn|Chinese|Mandarin/i.test(`${voice.lang} ${voice.name}`)) ||
    voices.find((voice) => /^zh/i.test(voice.lang)) ||
    null;
}

function ttsProfile(name) {
  return {
    "沈砚": { rate: 0.82, pitch: 0.78 },
    "萧照": { rate: 0.78, pitch: 0.62 },
    "容与": { rate: 0.88, pitch: 0.9 },
    "谢长离": { rate: 0.9, pitch: 0.82 },
    "裴无咎": { rate: 0.74, pitch: 0.58 },
    "朝局": { rate: 0.88, pitch: 0.76 }
  }[name] || { rate: 0.86, pitch: 0.76 };
}

function stopTts() {
  narrationToken += 1;
  if (activeVoiceAudio) {
    activeVoiceAudio.pause();
    activeVoiceAudio.currentTime = 0;
    activeVoiceAudio = null;
  }
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
}

function voiceFallbackRoleDir(name) {
  return {
    "沈砚": "shen",
    "萧照": "xiao",
    "容与": "rong",
    "谢长离": "xie",
    "裴无咎": "pei"
  }[name] || "";
}

function stableVoiceIndex(name, line, length) {
  if (!length) return 0;
  let h = 2166136261;
  const text = `${name}|${line}`;
  for (const ch of text) {
    h ^= ch.codePointAt(0);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return h % length;
}

function shouldUseFallbackVoice(line) {
  return !line.includes("朕");
}

function getFallbackVoiceSrc(name, line) {
  if (!shouldUseFallbackVoice(line)) return "";
  const roleDir = voiceFallbackRoleDir(name);
  if (!roleDir) return "";
  const pool = Object.values(ttsAudioManifest || {})
    .filter((src) => src.includes(`/generated/${roleDir}/`))
    .sort();
  return pool[stableVoiceIndex(name, line, pool.length)] || "";
}

function playTtsAudioFile(name, line) {
  const candidates = [line];
  const colonIndex = Math.max(line.lastIndexOf("："), line.lastIndexOf(":"));
  if (colonIndex >= 0 && colonIndex < line.length - 1) {
    candidates.push(line.slice(colonIndex + 1).trim());
  }
  const quoteMatch = line.match(/[“"「](.+?)[”"」]/);
  if (quoteMatch) candidates.push(quoteMatch[1].trim());
  const exactSrc = candidates.map((item) => ttsAudioManifest[voiceKey(name, item)]).find(Boolean);
  const src = exactSrc || getFallbackVoiceSrc(name, line);
  if (!src) return false;
  stopTts();
  activeVoiceAudio = new Audio(src);
  activeVoiceAudio.volume = name === "旁白" ? 0.92 : 0.96;
  activeVoiceAudio.play().then(() => {
    if (name !== "旁白") showToast(`${name} 真人语音播放中`, 2400);
  }).catch(() => {});
  return true;
}
function speakLine(name, line) {
  if (!state.ttsEnabled) return;
  playTtsAudioFile(name, line);
}

function playNarrationQueue(lines = []) {
  narrationToken += 1;
  const token = narrationToken;
  if (!state.ttsEnabled || !lines.length) return;
  const playNext = (index) => {
    if (token !== narrationToken || index >= lines.length) return;
    const src = ttsAudioManifest[voiceKey("旁白", lines[index])];
    if (!src) {
      playNext(index + 1);
      return;
    }
    if (activeVoiceAudio) {
      activeVoiceAudio.pause();
      activeVoiceAudio.currentTime = 0;
    }
    activeVoiceAudio = new Audio(src);
    activeVoiceAudio.volume = 0.92;
    activeVoiceAudio.onended = () => playNext(index + 1);
    activeVoiceAudio.onerror = () => playNext(index + 1);
    activeVoiceAudio.play().catch(() => {});
  };
  playNext(0);
}

function speakBrowserTts(name, line) {
  return false;
}
function ok(text) {
  return { ok: true, text };
}

function fail(text) {
  return { ok: false, text };
}

function currentMonth() {
  return months[state.month % 12];
}

function score() {
  const favorTotal = Object.values(state.favor).reduce((sum, value) => sum + value, 0);
  const harem = Object.values(state.unlocked).filter(Boolean).length;
  return Math.round(state.wealth + state.power * 1200 + state.charm * 980 + state.prestige * 1050 + favorTotal * 520 + harem * 9000);
}

function rankings() {
  return [
    { name: "你 · 大胤女王", score: score(), mine: true },
    { name: "长乐女帝", score: 286000 },
    { name: "昭华殿主", score: 218000 },
    { name: "云台新君", score: 168000 },
    { name: "金阙贵主", score: 128000 }
  ].sort((a, b) => b.score - a.score);
}

function rankPosition() {
  return rankings().findIndex((item) => item.mine) + 1;
}

function grantAffinity(affinity, multiplier = 1) {
  const gains = [];
  const unlocks = [];
  Object.entries(affinity || {}).forEach(([id, value]) => {
    if (!state.unlocked[id]) return;
    const consort = consorts.find((item) => item.id === id);
    const beforeChapter = getUnlockedChapterIndex(id);
    const amount = Math.max(1, Math.round(value * multiplier));
    state.favor[id] = Math.min(100, (state.favor[id] || 0) + amount);
    const afterChapter = getUnlockedChapterIndex(id);
    gains.push(`${consort.name}好感 +${amount}`);
    if (afterChapter > beforeChapter) {
      const chapter = getChapter(id, afterChapter);
      unlocks.push({ id, name: consort.name, chapter: chapter.name, chapterIndex: afterChapter });
    }
  });
  if (gains.length) playSfx("affection");
  if (unlocks.length) showStoryUnlockBar(unlocks[unlocks.length - 1]);
  return gains.join(" · ");
}

function affinityLabel(affinity) {
  return Object.entries(affinity || {}).map(([id, value]) => {
    const consort = consorts.find((item) => item.id === id);
    return `${consort.name}+${value}`;
  }).join(" / ");
}

function getChapterIndex(id) {
  const unlocked = getUnlockedChapterIndex(id);
  const chapters = storyChapters[id] || [];
  const current = Math.max(1, state.story[id] || 1) - 1;
  return Math.min(Math.max(0, current), unlocked, Math.max(0, chapters.length - 1));
}

function isStoryComplete(id) {
  return (state.story[id] || 1) > (storyChapters[id]?.length || 1);
}

function getNextUnwatchedIndex(id) {
  return Math.min(Math.max(0, (state.story[id] || 1) - 1), (storyChapters[id]?.length || 1) - 1);
}

function getUnlockedChapterIndex(id) {
  const thresholds = storyFavorThresholds[id] || [0];
  const favor = state.favor[id] || 0;
  let unlocked = 0;
  thresholds.forEach((need, index) => {
    if (favor >= need) unlocked = index;
  });
  return Math.min(unlocked, (storyChapters[id]?.length || 1) - 1);
}

function nextChapterNeed(id, index) {
  return (storyFavorThresholds[id] || [])[index] ?? 999;
}

function getHomeConsortId() {
  if (state.unlocked[state.activeConsort] && !isStoryComplete(state.activeConsort)) return state.activeConsort;
  const next = consorts.find((consort) => state.unlocked[consort.id] && !isStoryComplete(consort.id));
  return next?.id || state.activeConsort || "shen";
}

function getChapter(id, index = getChapterIndex(id)) {
  const chapters = storyChapters[id] || storyChapters.shen;
  return chapters[Math.min(index, chapters.length - 1)] || chapters[0];
}

function chapterCg(id, index) {
  const consort = consorts.find((item) => item.id === id);
  const chapter = getChapter(id, index);
  return {
    image: chapter.cg?.image || consort.img,
    fallback: chapter.cg?.fallback || consort.img,
    position: chapter.cg?.position || "center 26%",
    size: chapter.cg?.size || "contain",
    strip: chapter.cg?.image?.includes("/strips/") || false,
    progress: index / Math.max(1, (storyChapters[id]?.length || 1) - 1)
  };
}

function bgmForConsort(id) {
  return audioManifest.bgm[id] ? id : "home";
}

function startIntro() {
  renderIntro();
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && $("#introScreen") && !$("#introScreen").classList.contains("hidden")) {
      playBgm("intro");
    }
  });
  $("#introNext").addEventListener("click", nextIntro);
  $("#introScreen").addEventListener("click", nextIntro);
}

function nextIntro(event) {
  event.stopPropagation();
  unlockAudio();
  if (introIndex === 0) {
    state.bgmMuted = false;
    $("#audioToggleBtn").textContent = "音乐开";
  }
  resumePendingBgm();
  playBgm("intro");
  playSfx("story");
  introIndex += 1;
  if (introIndex < introSlides.length) {
    renderIntro();
    return;
  }
  stopTts();
  $("#introScreen").classList.add("hidden");
  $("#gameScreen").classList.remove("hidden");
  playBgm("home");
  renderAll();
  if (!state.tutorialDone) {
    setTimeout(() => {
      openPlayer("沈砚", "国库只剩五万两。再这样下去，臣只能把自己卖了。", [
        {
          text: "那先去市场赚钱",
          action: () => {
            closePlayer();
            state.guided = true;
            showTab("market");
            $("#guideArrow").classList.remove("hidden");
          }
        }
      ], "date");
    }, 380);
  }
}

function renderIntro() {
  const slide = introSlides[introIndex];
  const isStartup = slide.imageClass === "startup";
  $("#introImage").className = `intro-image ${slide.imageClass}`;
  $("#introScreen").classList.toggle("is-startup", isStartup);
  $("#introNext").classList.toggle("hidden", !isStartup);
  $("#introText").innerHTML = slide.html;
}

function showTab(tab) {
  playSfx("tab");
  $$(".panel-view").forEach((panel) => panel.classList.add("hidden"));
  $(`#${tab}Panel`)?.classList.remove("hidden");
  $$(".nav-button").forEach((button) => button.classList.toggle("is-active", button.dataset.tab === tab));
  if (tab !== "market") $("#guideArrow").classList.add("hidden");
}

function renderAll() {
  $("#audioToggleBtn").textContent = state.bgmMuted ? "音乐关" : "音乐开";
  updateTtsToggleLabel();
  renderStatus();
  renderMarket();
  renderEdicts();
  renderConsorts();
  renderStories();
  renderRank();
  saveState();
}

function renderStatus() {
  $("#monthLabel").textContent = `登基第一年 · ${currentMonth()}`;
  $("#wealthStat").textContent = fmt(state.wealth);
  $("#powerStat").textContent = state.power;
  $("#charmStat").textContent = state.charm;
  $("#prestigeStat").textContent = state.prestige;
  $("#cashLabel").textContent = `国库 ${fmt(state.wealth)}`;
  $("#haremCount").textContent = `${Object.values(state.unlocked).filter(Boolean).length}/5`;
  $("#ticketLabel").textContent = `剧情券 ${state.tickets}`;
  $("#rankLabel").textContent = `第 ${rankPosition()}`;
  const activeId = getHomeConsortId();
  const activeConsort = consorts.find((item) => item.id === activeId);
  const activeChapter = getChapter(activeId);
  $("#currentChapter").textContent = `${activeConsort.name} ${String(getChapterIndex(activeId) + 1).padStart(2, "0")} ${activeChapter.name}`;
  $("#homeTitle").textContent = `${activeConsort.name} · ${activeChapter.name}`;
  $("#homeLine").textContent = activeChapter.line;
  $(".home-visual").style.backgroundImage = `linear-gradient(180deg, rgba(16, 9, 8, 0.05), rgba(16, 9, 8, 0.52) 56%, #100908 90%), url("${activeConsort.img}?v=${ASSET_VERSION}")`;
  $(".home-visual").style.backgroundPosition = "center 18%";
}

function renderMarket() {
  $("#rumorList").innerHTML = rumors.map((rumor) => `
    <article class="rumor-card">
      <strong>${rumor.title}</strong>
      <span>${rumor.text}</span>
      <div class="stars">${rumor.stars}</div>
    </article>
  `).join("");

  $("#assetList").innerHTML = assets.map((asset) => {
    const diff = state.prices[asset.id] - asset.base;
    return `
      <article class="asset-card">
        <div class="asset-head">
          <div>
            <strong class="asset-name">${asset.name}</strong>
            <span class="asset-meta">持有 ${state.inventory[asset.id]} · ${asset.hint}</span>
            <span class="asset-meta">情感倾向：${affinityLabel(assetAffinity[asset.id])}</span>
          </div>
          <div class="price">${fmt(state.prices[asset.id])}</div>
        </div>
        <span class="asset-meta">较常价 ${diff >= 0 ? "+" : ""}${fmt(diff)}</span>
        <div class="asset-actions">
          <button class="asset-button buy" type="button" data-buy="${asset.id}">买入</button>
          <button class="asset-button sell" type="button" data-sell="${asset.id}">卖出</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderEdicts() {
  $("#edictStatus").textContent = state.edictDone ? "已批" : "未批";
  $("#edictList").innerHTML = edicts.map((edict) => `
    <article class="edict-card edict-${edict.id}">
      <div class="edict-content">
        <h3>${edict.name}</h3>
        <p>${edict.text}</p>
        <span class="edict-affinity">${affinityLabel(edict.affinity)}</span>
      </div>
      <div class="edict-actions">
        <button class="edict-button" type="button" data-edict="${edict.id}" ${state.edictDone ? "disabled" : ""}>批此诏令</button>
      </div>
    </article>
  `).join("");
}

function renderConsorts() {
  $("#consortList").innerHTML = consorts.map((consort) => {
    const unlocked = state.unlocked[consort.id];
    const chapter = getChapter(consort.id);
    return `
      <article class="consort-card ${unlocked ? "" : "is-locked"}">
        <img src="${consort.img}?v=${ASSET_VERSION}" alt="${consort.name}" />
        <div class="consort-body">
          <h3>${consort.name}</h3>
          <p>${consort.title} · ${unlocked ? `好感 ${state.favor[consort.id]} · ${chapter.name}` : consort.unlock}</p>
          <button class="date-button" type="button" data-date="${consort.id}" ${unlocked ? "" : "disabled"}>${unlocked ? "继续他的剧情" : "未解锁"}</button>
        </div>
      </article>
    `;
  }).join("");
}

function renderStories() {
  $("#storyList").innerHTML = consorts.filter((consort) => state.unlocked[consort.id]).map((consort) => {
    const unlockedChapter = getUnlockedChapterIndex(consort.id);
    const nextUnwatched = getNextUnwatchedIndex(consort.id);
    const complete = isStoryComplete(consort.id);
    const totalChapters = storyChapters[consort.id].length;
    const watchedCount = complete ? totalChapters : Math.min(nextUnwatched, totalChapters);
    const unlockedCount = Math.max(watchedCount, Math.min(unlockedChapter + 1, totalChapters));
    const canContinue = !complete && nextUnwatched <= unlockedChapter;
    const cards = storyChapters[consort.id].map((chapter, index) => {
      const replay = complete || index < nextUnwatched;
      const unlocked = index <= unlockedChapter || replay;
      const current = canContinue && index === nextUnwatched;
      const playable = unlocked && (replay || current);
      const stateLabel = !unlocked ? "未解锁" : replay ? "已观看" : "未观看";
      const lockedText = index > unlockedChapter
        ? `好感达到 ${nextChapterNeed(consort.id, index)} 解锁。`
        : "先完成上一段剧情。";
      return `
        <button class="story-card ${current ? "is-current" : ""} ${replay ? "is-watched" : ""} ${unlocked && !replay ? "is-unwatched" : ""}" type="button" data-story="${consort.id}" data-chapter="${index}" id="story-${consort.id}-${index}" ${playable ? "" : "disabled"}>
          <strong>${String(index + 1).padStart(2, "0")} ${chapter.name}<i class="story-state">${stateLabel}</i></strong>
          <span>${playable ? chapter.line : lockedText}</span>
        </button>
      `;
    }).join("");
    return `
      <article class="story-group">
        <div class="story-group-head">
          <strong>${consort.name}</strong>
          <span>已看 ${watchedCount}/${totalChapters} · 可看 ${unlockedCount}/${totalChapters} · 好感 ${state.favor[consort.id]}</span>
        </div>
        ${cards}
      </article>
    `;
  }).join("");
}

function renderRank() {
  $("#taskList").innerHTML = [
    state.daily.trade ? "交易已完成" : "完成 1 次交易",
    state.daily.date ? "已见男宠" : "见男宠 1 次",
    state.daily.edict ? "奏折已批" : "批奏折"
  ].map((task) => `<span class="task-pill">${task}</span>`).join("");

  $("#rankList").innerHTML = rankings().map((item, index) => `
    <article class="rank-card">
      <div class="rank-no">${index + 1}</div>
      <div>
        <strong>${item.name}</strong>
        <span>${item.mine ? "国力、财富、男宠好感综合分" : "模拟在线女王，仍在争榜"}</span>
      </div>
      <span class="tag">${fmt(item.score)}</span>
    </article>
  `).join("");
}

function buyAsset(assetId) {
  const asset = assets.find((item) => item.id === assetId);
  const price = state.prices[assetId];
  if (state.wealth < price) {
    playSfx("error");
    toast("国库不足");
    return;
  }
  playSfx("buy");
  playSfx("coinSmall");
  state.wealth -= price;
  state.inventory[assetId] += 1;
  state.activity += 2;
  state.daily.trade = true;

  if (state.guided) {
    state.guided = false;
    state.tutorialDone = true;
    $("#guideArrow").classList.add("hidden");
    state.wealth += 1000;
    const beforeChapter = getUnlockedChapterIndex("shen");
    state.favor.shen += 3;
    const afterChapter = getUnlockedChapterIndex("shen");
    if (afterChapter > beforeChapter) {
      showStoryUnlockBar({ id: "shen", name: "沈砚", chapter: getChapter("shen", afterChapter).name, chapterIndex: afterChapter });
    }
    playSfx("affection");
    playSfx("coinSmall");
    toast("+1,000 财富 · 沈砚好感 +3");
    setTimeout(() => {
      openPlayer("沈砚", "不错。看来陛下还没昏庸到无药可救。", [
        { text: "本宫会赚更多", action: closePlayer }
      ], "date");
    }, 520);
  } else {
    const affinityText = grantAffinity(assetAffinity[assetId], 1);
    toast(affinityText ? `买入 ${asset.name} · ${affinityText}` : `买入 ${asset.name}`);
  }

  nextMarketMonth();
  checkUnlocks();
  renderAll();
}

function sellAsset(assetId) {
  const asset = assets.find((item) => item.id === assetId);
  if (state.inventory[assetId] <= 0) {
    playSfx("error");
    toast("尚未持有");
    return;
  }
  const beforeRank = rankPosition();
  const multiplier = 1.12 + Math.random() * 0.68;
  let gain = Math.round(state.prices[assetId] * multiplier);
  if (state.unlocked.xie && ["silk", "glass"].includes(assetId)) gain = Math.round(gain * 1.12);
  state.inventory[assetId] -= 1;
  state.wealth += gain;
  state.activity += 3;
  state.daily.trade = true;
  playSfx("sell");
  playSfx("coinBig");
  coinRain();
  toast(`+${fmt(gain)} 两`);
  nextMarketMonth();
  checkUnlocks();
  renderAll();
  if (rankPosition() < beforeRank && shouldShowGenericResult("rank")) {
    showGenericResult("rank", "万国榜上升", "金榜重排，女王之名又向前一步。");
  } else if (shouldShowGenericResult("money")) {
    showGenericResult("money", "国库暴涨", `卖出${asset.name}，入账 ${fmt(gain)} 两。`);
  }
}

function nextMarketMonth() {
  state.month = (state.month + 1) % 12;
  state.edictDone = false;
  state.energy = Math.min(3, state.energy + 1);
  state.tickets = Math.min(3, state.tickets + 1);
  state.daily = { trade: state.daily.trade, date: false, edict: false };
  assets.forEach((asset) => {
    const hot = rumors.find((rumor) => rumor.target === asset.id) ? 0.18 : 0;
    const rate = 0.7 + Math.random() * 1.1 + hot;
    state.prices[asset.id] = Math.max(1400, Math.round(asset.base * rate));
  });
}

function applyEdict(id) {
  if (state.edictDone) {
    playSfx("error");
    toast("本月诏令已批");
    return;
  }
  const beforeRank = rankPosition();
  const edict = edicts.find((item) => item.id === id);
  const result = edict.apply(state);
  playSfx(result.ok ? "edict" : "error");
  if (result.ok) {
    state.edictDone = true;
    state.daily.edict = true;
    const affinityText = grantAffinity(edict.affinity, 1);
    toast(affinityText ? `${result.text} · ${affinityText}` : result.text);
    checkUnlocks();
  } else {
    toast(result.text);
  }
  renderAll();
  if (result.ok) {
    if (rankPosition() < beforeRank && shouldShowGenericResult("rank")) {
      showGenericResult("rank", "万国榜上升", "这一道诏令之后，天下终于开始重新看见你。");
    } else if (shouldShowGenericResult("edict")) {
      showGenericResult("edict", "诏令已定", "玉玺落下，朝局因此改写。");
    }
  }
}

function startDate(id, spendResource = true, requestedChapter = getChapterIndex(id)) {
  const consort = consorts.find((item) => item.id === id);
  if (!state.unlocked[id]) return;
  state.activeConsort = id;
  if (spendResource) {
    if (isStoryComplete(id)) {
      playSfx("error");
      toast(`${consort.name}当前剧情已完结`);
      return;
    }
    const nextUnwatched = getNextUnwatchedIndex(id);
    const unlockedChapter = getUnlockedChapterIndex(id);
    if (nextUnwatched > unlockedChapter) {
      playSfx("error");
      toast(`${consort.name}好感达到 ${nextChapterNeed(id, nextUnwatched)} 解锁下一集`);
      return;
    }
  }
  if (spendResource) {
    if (state.energy <= 0 && state.tickets <= 0) {
      playSfx("error");
      toast("体力和剧情券不足");
      return;
    }
    if (state.energy > 0) state.energy -= 1;
    else state.tickets -= 1;
  }

  const chapterIndex = Math.min(requestedChapter, getChapterIndex(id));
  const chapter = getChapter(id, chapterIndex);
  const choices = chapter.choices.map((choice) => ({
    text: choice.text,
    action: () => finishChoice(id, choice.favor, choice.reply, chapterIndex, choice.voiceLine)
  }));
  playBgm(bgmForConsort(id));
  openPlayer(consort.name, chapter.line, choices, chapterCg(id, chapterIndex), chapter.voiceLine || chapter.line);
  playSfx("story");
  renderAll();
}

function finishChoice(id, favor, reply, chapterIndex = getChapterIndex(id), voiceLine = null) {
  const consort = consorts.find((item) => item.id === id);
  lockPlayerChoices();
  const wasCurrent = chapterIndex >= getChapterIndex(id);
  if (wasCurrent) {
    state.story[id] = Math.min(storyChapters[id].length + 1, Math.max(1, state.story[id]) + 1);
  }
  state.activity += 5;
  state.daily.date = true;
  playSfx("choice");
  const nextIndex = getChapterIndex(id);
  const hasNext = wasCurrent && nextIndex > chapterIndex && nextIndex < storyChapters[id].length;
  const followUpChoices = [
    {
      text: "收下这段回忆",
      action: () => {
        playSfx("story");
        closePlayer();
        if (shouldShowStoryResult(id, chapterIndex)) {
          showStoryResult(id);
        } else {
          toast("剧情已推进");
          checkUnlocks();
          renderAll();
        }
      }
    },
    ...(hasNext ? [{
      text: "继续下一集",
      action: () => {
        startDate(id, true, nextIndex);
      }
    }] : [])
  ];
  advanceStoryView(() => {
    updatePlayerDialog(consort.name, reply, followUpChoices);
    if (voiceLine) speakLine(consort.name, voiceLine);
  });
}

function shouldShowStoryResult(id, chapterIndex) {
  const firstSeen = state.resultSeen.storyFirst[id];
  if (!firstSeen) {
    state.resultSeen.storyFirst[id] = true;
    saveState();
    return true;
  }
  const chapterNo = chapterIndex + 1;
  const isKeyNode = chapterNo === 3 || chapterNo === 6 || chapterNo === 10;
  const key = `${id}-${chapterNo}`;
  if (isKeyNode && !state.resultSeen.storyKey[key]) {
    state.resultSeen.storyKey[key] = true;
    saveState();
    return true;
  }
  return false;
}

function shouldShowGenericResult(type) {
  if (type === "rank") {
    if (state.resultSeen.rank) return false;
    state.resultSeen.rank = true;
    saveState();
    return true;
  }
  if (type === "money") {
    if (state.resultSeen.money) return false;
    state.resultSeen.money = true;
    saveState();
    return true;
  }
  if (type === "edict") {
    if (state.resultSeen.edict) return false;
    state.resultSeen.edict = true;
    saveState();
    return true;
  }
  return true;
}

function playStory(id, requestedChapter) {
  state.activeConsort = id;
  const isReplay = requestedChapter < getNextUnwatchedIndex(id) || isStoryComplete(id);
  if (!isReplay) {
    if (state.tickets <= 0) {
      playSfx("error");
      toast("剧情券不足");
      return;
    }
    state.tickets -= 1;
  }
  startDate(id, false, requestedChapter);
}

function checkUnlocks() {
  const tests = [
    ["pei", state.wealth >= 80000, "听说陛下很有钱。有人出十万两买您的人头。"],
    ["xie", state.wealth >= 120000, "账房灯未灭，谢长离推来一盘金珠：陛下，和臣做一笔稳赚的买卖。"],
    ["xiao", state.power >= 32, "黑甲将军踏雪入殿：臣的刀，只认陛下一人。"],
    ["rong", state.charm >= 42, "异域乐声入夜，容与举杯笑道：今夜月色，适合向陛下投降。"]
  ];
  const hit = tests.find(([id, pass]) => pass && !state.unlocked[id]);
  if (!hit) return;
  const [id, , text] = hit;
  const consort = consorts.find((item) => item.id === id);
  state.unlocked[id] = true;
  state.favor[id] = 8;
  state.story[id] = 1;
  state.activeConsort = id;
  $("#unlockName").textContent = consort.name;
  $("#unlockText").textContent = text;
  $("#unlockOverlay").style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.84)), url("${consort.unlockImg}?v=${ASSET_VERSION}")`;
  $("#unlockOverlay").style.backgroundPosition = "center 44%";
  $("#unlockOverlay").style.backgroundSize = "auto 118%";
  playSfx("unlock");
  $("#unlockOverlay").classList.remove("hidden");
}

function openPlayer(name, line, choices, bg, voiceLine = line) {
  $("#playerName").textContent = name;
  $("#playerLine").textContent = line;
  const cg = typeof bg === "object" ? bg : { image: bg === "opening" ? "assets/story/opening-shen.webp" : "assets/story/date-shen.webp", position: "center 46%" };
  $("#storyPlayer").classList.toggle("strip-mode", Boolean(cg.strip));
  $("#storyPlayer").classList.remove("is-advancing");
  $("#playerImg").onerror = () => {
    if (cg.fallback && !$("#playerImg").src.includes(cg.fallback)) {
      $("#playerImg").src = `${cg.fallback}?v=${ASSET_VERSION}`;
    }
  };
  $("#playerImg").src = `${cg.image}?v=${ASSET_VERSION}`;
  $("#playerImg").alt = `${name} 剧情 CG`;
  $("#playerImg").onload = () => scrollStripTo(cg.progress || 0);
  $("#playerChoices").innerHTML = choices.map((choice, index) => `<button type="button" data-choice="${index}">${choice.text}</button>`).join("");
  playerCallback = choices;
  $("#storyPlayer").classList.remove("hidden");
  if (voiceLine) speakLine(name, voiceLine);
}

function closePlayer() {
  $("#storyPlayer").classList.add("hidden");
  playerCallback = null;
  stopTts();
  playBgm("home");
}

function showStoryResult(id) {
  const consort = consorts.find((item) => item.id === id) || consorts[0];
  closePlayer();
  $("#resultImage").style.backgroundImage = `url("${(resultImages[id] || resultImages.affection)}?v=${ASSET_VERSION}")`;
  $("#resultTitle").textContent = `${consort.name} · 情意渐深`;
  $("#resultText").textContent = "这段回忆已收入后宫。下一次见他，也许会更近一步。";
  $("#resultOverlay").classList.remove("hidden");
  checkUnlocks();
  renderAll();
}

function showGenericResult(type, title, text) {
  $("#resultImage").style.backgroundImage = `url("${(resultImages[type] || resultImages.affection)}?v=${ASSET_VERSION}")`;
  $("#resultTitle").textContent = title;
  $("#resultText").textContent = text;
  $("#resultOverlay").classList.remove("hidden");
}

function closeStoryResult() {
  $("#resultOverlay").classList.add("hidden");
  playBgm("home");
}

function updatePlayerDialog(name, line, choices) {
  $("#playerName").textContent = name;
  $("#playerLine").textContent = line;
  $("#playerChoices").innerHTML = choices.map((choice, index) => `<button type="button" data-choice="${index}">${choice.text}</button>`).join("");
  playerCallback = choices;
  $("#storyPlayer").classList.remove("is-advancing");
}

function lockPlayerChoices() {
  playerCallback = null;
  $("#storyPlayer").classList.add("is-advancing");
  $("#playerChoices").querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });
}

function advanceStoryView(done) {
  const player = $("#storyPlayer");
  const isStrip = player.classList.contains("strip-mode");
  const delay = isStrip ? 420 : 180;
  if (isStrip) {
    scrollStripNext(0.48);
  }
  window.setTimeout(done, delay);
}

function toast(message) {
  showToast(message);
}

function showToast(message, duration = 1350) {
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  $("#toastLayer").appendChild(el);
  setTimeout(() => el.remove(), duration);
}

function showStoryUnlockBar(unlock) {
  const bar = $("#storyUnlockBar");
  $("#storyUnlockText").innerHTML = `<b>${unlock.name} 新剧情已解锁</b><em>《${unlock.chapter}》正在等陛下临幸</em>`;
  bar.dataset.storyGuide = unlock.id;
  bar.dataset.storyChapter = String(unlock.chapterIndex ?? getUnlockedChapterIndex(unlock.id));
  bar.classList.remove("hidden");
  toast(`新剧情已解锁：${unlock.name}《${unlock.chapter}》`);
  clearTimeout(storyUnlockTimer);
  storyUnlockTimer = setTimeout(() => {
    bar.classList.add("hidden");
  }, 18000);
}

function focusStoryCard(id, chapterIndex) {
  const panel = $("#storyPanel");
  const target = document.getElementById(`story-${id}-${chapterIndex}`);
  if (!panel || !target) return;
  $$(".story-card.is-guided").forEach((card) => card.classList.remove("is-guided"));
  target.classList.add("is-guided");
  panel.scrollTo({
    top: Math.max(0, target.offsetTop - panel.clientHeight * 0.34),
    behavior: "smooth"
  });
  window.setTimeout(() => target.classList.remove("is-guided"), 3600);
}

function coinRain() {
  for (let i = 0; i < 38; i += 1) {
    const coin = document.createElement("div");
    coin.className = "coin";
    coin.style.left = `${Math.random() * 100}%`;
    coin.style.animationDelay = `${Math.random() * 0.55}s`;
    coin.style.animationDuration = `${1.05 + Math.random() * 0.85}s`;
    $("#toastLayer").appendChild(coin);
    setTimeout(() => coin.remove(), 2200);
  }
}

function scrollStripTo(progress) {
  const box = $("#playerImage");
  const image = $("#playerImg");
  const max = Math.max(0, image.offsetHeight - box.clientHeight);
  box.scrollTo({ top: Math.round(max * Math.min(1, Math.max(0, progress))), behavior: "smooth" });
}

function scrollStripNext(ratio = 0.72) {
  const box = $("#playerImage");
  box.scrollBy({ top: Math.round(box.clientHeight * ratio), behavior: "smooth" });
}

function restart() {
  playSfx("click");
  localStorage.removeItem(STORAGE_KEY);
  state = createState();
  introIndex = 0;
  $("#gameScreen").classList.add("hidden");
  $("#storyPlayer").classList.add("hidden");
  $("#unlockOverlay").classList.add("hidden");
  $("#resultOverlay").classList.add("hidden");
  $("#introScreen").classList.remove("hidden");
  renderIntro();
}

function bindEvents() {
  if ("speechSynthesis" in window) {
    initTtsVoice();
    window.speechSynthesis.onvoiceschanged = initTtsVoice;
  }
  $("#restartBtn").addEventListener("click", restart);
  $("#continueStoryBtn").addEventListener("click", () => startDate(getHomeConsortId()));
  $("#goDateBtn").addEventListener("click", () => showTab("harem"));
  $("#audioToggleBtn").addEventListener("click", () => {
    unlockAudio();
    setBgmMuted(!state.bgmMuted);
  });
  $("#ttsToggleBtn").addEventListener("click", () => {
    unlockAudio();
    setTtsEnabled(!state.ttsEnabled);
    if (state.ttsEnabled && !$("#storyPlayer").classList.contains("hidden")) {
      speakLine($("#playerName").textContent, $("#playerLine").textContent);
    }
  });
  $("#playerImage").addEventListener("click", scrollStripNext);
  $("#unlockClose").addEventListener("click", () => {
    $("#unlockOverlay").classList.add("hidden");
    showTab("harem");
    renderAll();
  });
  $("#resultClose").addEventListener("click", closeStoryResult);

  document.body.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-tab]");
    const buy = event.target.closest("[data-buy]");
    const sell = event.target.closest("[data-sell]");
    const edict = event.target.closest("[data-edict]");
    const date = event.target.closest("[data-date]");
    const story = event.target.closest("[data-story]");
    const storyGuide = event.target.closest("[data-story-guide]");
    const choice = event.target.closest("[data-choice]");

    if (event.target.closest("button")) playSfx("click");
    if (storyGuide) {
      const id = storyGuide.dataset.storyGuide;
      const chapterIndex = Number(storyGuide.dataset.storyChapter || getUnlockedChapterIndex(id));
      state.activeConsort = id || state.activeConsort;
      storyGuide.classList.add("hidden");
      if (!$("#storyPlayer").classList.contains("hidden")) closePlayer();
      showTab("story");
      renderAll();
      window.setTimeout(() => focusStoryCard(id, chapterIndex), 80);
      return;
    }
    if (tab) showTab(tab.dataset.tab);
    if (buy) buyAsset(buy.dataset.buy);
    if (sell) sellAsset(sell.dataset.sell);
    if (edict) applyEdict(edict.dataset.edict);
    if (date) startDate(date.dataset.date);
    if (story) playStory(story.dataset.story, Number(story.dataset.chapter));
    if (choice && playerCallback) playerCallback[Number(choice.dataset.choice)]?.action();
  });
}

bindEvents();
loadTtsAudioManifest();
startIntro();
