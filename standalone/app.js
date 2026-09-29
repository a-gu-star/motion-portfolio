
var module = { exports: {} };
function require() {
  function element(type, props, key) {
    props = props || {};
    if (key !== undefined) props.key = key;
    return React.createElement(type, props);
  }
  return { jsx: element, jsxs: element, Fragment: React.Fragment };
}

"use strict";

var _jsxRuntime = require("C:\\Users\\Administrator\\AppData\\Local\\OpenAI\\Codex\\runtimes\\cua_node\\f1bf3cd3a5929acd\\bin\\node_modules\\playwright/jsx-runtime");
const {
  useEffect,
  useMemo,
  useRef,
  useState
} = React;
const A = './public/assets/';
const compressedMainVideos = {
  'VOLLGAS X 凯斯哈林': 'VOLLGAS X 凯斯哈林_1.mp4',
  'VOLLGAS X 苏炳添': 'VOLLGAS X 苏炳添.mp4?v=20260927-audio',
  '快手-内宣': '快手磁力引擎2025CNY.mp4',
  '人民日报——抗战胜利八十周年漫画': '人民日报——抗战胜利八十周年漫画1.mp4',
  '人民日报——全面小康': '人民日报——全面小康_1.mp4',
  '人民日报——全面小康2': '人民日报——全面小康2_1.mp4',
  '人民日报——全面小康3': '人民日报——全面小康3_1.mp4',
  '人民日报——中国正当潮': '人民日报——中国正当潮_1.mp4',
  '天猫时装周': '天猫时装周_1.mp4',
  '站酷共创': '站酷共创_1.mp4'
};
const projectGroup = (id, title, en, tag, names) => ({
  id,
  title,
  en,
  items: names.map((file, i) => [file.replace(/\.mp4$/i, ''), id === 'threeD' ? '前期策划、分镜构思与动画预剪的详细内容待补充。' : id === 'twoD' ? '二维动态制作区间与个人负责内容待补充。' : '个人动态练习与视觉实验。', tag, `商业项目/${id === 'training' ? '业余训练' : title}/${file}`, `project-posters/${id === 'twoD' ? '2d' : id === 'threeD' ? '3d' : 'lab'}-${String(i + 1).padStart(2, '0')}.jpg`])
});
const twoDProject = (name, clipCount, index, clipBase = name, clipWord = '片段', displayName = name) => {
  const root = `商业项目/二维制作项目/${name}`;
  return [displayName, '二维动态制作区间与个人负责内容待补充。', '2D MOTION', `${root}/${compressedMainVideos[name] || `${name}.mp4`}`, `project-posters/2d-order-${String(index).padStart(2, '0')}.jpg`, Array.from({
    length: clipCount
  }, (_, i) => `${root}/${clipBase}${clipWord}${i + 1}.mp4`)];
};
const twoDItems = [['361°品牌宣传日', 4], ['2024快手磁力大会', 2], ['站酷共创', 3], ['京东X草莓音乐节', 3], ['京东外卖X猪猪侠', 5], ['小红书乐队', 5, undefined, undefined, '小红书【听现场不鸽倡议】'], ['特步X-Sofa Foam', 2], ['艾美特品牌焕新发布会', 4], ['微软小冰X特步', 3], ['BOTTONS Air 产品宣传视频', 2], ['UINPUS LOGO演绎', 2], ['京东-真新话大冒险', 2, undefined, undefined, '京东-真心话大冒险'], ['快手校招片头', 4, '快手校招片头', '片头'], ['快手-内宣', 2, undefined, undefined, '快手磁力引擎2025CNY'], ['快手年终内宣总结', 2], ['VOLLGAS X 凯斯哈林', 2], ['VOLLGAS X 苏炳添', 2], ['小米科技出现', 2], ['天猫时装周', 4], ['淘宝造物节', 4], ['方达律师事务所', 5], ['人民日报——我的宝藏家乡', 2], ['人民日报——中国正当潮', 2], ['人民日报——抗战胜利八十周年漫画', 2]].map(([name, count, clipBase, clipWord, displayName], i) => twoDProject(name, count, i + 1, clipBase, clipWord, displayName));
const xiaokangSeries = [{
  title: '人民日报——全面小康',
  video: '商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康_1.mp4',
  poster: 'project-posters/2d-order-25.jpg',
  clips: ['商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康片段1.mp4', '商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康片段2.mp4', '商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康片段3.mp4']
}, {
  title: '人民日报——全面小康2',
  video: '商业项目/二维制作项目/人民日报——全面小康2/人民日报——全面小康2_1.mp4',
  poster: 'project-posters/2d-order-26.jpg',
  clips: ['商业项目/二维制作项目/人民日报——全面小康2/人民日报——全面小康片段1.mp4']
}, {
  title: '人民日报——全面小康3',
  video: '商业项目/二维制作项目/人民日报——全面小康3/人民日报——全面小康3_1.mp4',
  poster: 'project-posters/2d-order-27.jpg',
  clips: ['商业项目/二维制作项目/人民日报——全面小康3/人民日报——全面小康3片段1.mp4']
}];
const xiaokangItem = twoDProject('人民日报——全面小康', 3, twoDItems.length + 1);
xiaokangItem[0] = '人民日报——全面小康系列';
xiaokangItem[7] = xiaokangSeries;
twoDItems.push(xiaokangItem);
const storyboardFrames = (folder, count) => Array.from({
  length: count
}, (_, i) => `商业项目/三维前期策划项目/${folder}/${i + 1}.png`);
const groups = [{
  id: 'twoD',
  title: '二维制作项目',
  en: '2D PRODUCTION',
  items: twoDItems
}, {
  id: 'threeD',
  title: '三维前期策划项目',
  en: '3D PRE-PRODUCTION',
  items: [['泡泡玛特X东本电车灵悉', '前期策划、分镜构思与动画预剪的详细内容待补充。', '3D PLANNING', '商业项目/三维前期策划项目/1.泡泡玛特X东本电车灵悉/1.泡泡玛特X东本电车灵悉.mp4', 'project-posters/3d-01.jpg', storyboardFrames('1.泡泡玛特X东本电车灵悉', 11), '商业项目/三维前期策划项目/1.泡泡玛特X东本电车灵悉/POP故事版 .mp4'], ['比亚迪海豹06GT x 极品飞车', '前期策划与分镜构思的详细内容待补充。', '3D PLANNING', '商业项目/三维前期策划项目/2.比亚迪海豹GT06 X极品飞车/2.比亚迪海豹GT06X极品飞车.mp4', 'project-posters/3d-02.jpg', storyboardFrames('2.比亚迪海豹GT06 X极品飞车', 10)], ['江苏卫视节目【中华书院】', '前期策划与分镜构思的详细内容待补充。', '3D PLANNING', '商业项目/三维前期策划项目/3.江苏卫视节目【中华书院】/3.江苏卫视节目【中华书院】.mp4', 'project-posters/3d-03.jpg', storyboardFrames('3.江苏卫视节目【中华书院】', 10)], ['安踏Pg7科技跑鞋', '前期策划与分镜构思的详细内容待补充。', '3D PLANNING', '商业项目/三维前期策划项目/4.安踏Pg7科技跑鞋/4.安踏Pg7科技跑鞋.mp4', 'project-posters/3d-04.jpg', storyboardFrames('4.安踏Pg7科技跑鞋', 11)], ['HUAWEI 鸿蒙生态', '前期策划与分镜构思的详细内容待补充。', '3D PLANNING', '商业项目/三维前期策划项目/5.HUAWEI 鸿蒙生态/5.HUAWEI 鸿蒙生态.mp4', 'project-posters/3d-05.jpg', storyboardFrames('5.HUAWEI 鸿蒙生态', 13)]]
}, projectGroup('training', '其它动态', 'OTHER MOTION', 'EXPERIMENT', ['logo孟菲斯风格.mp4', 'Nike-.mp4', '爱心.mp4', '便利logo拼贴风.mp4', '穿梭.mp4', '动补插件训练.mp4', '动态训练.mp4', '公司作品片头宣传1.mp4', '公司作品片头宣传2.mp4', '疾风 .mp4', '节奏练习.mp4', '新年.mp4', '花瓣.mp4', '苹果.mp4', '旋转动态训练.mp4'])];
const cavalry = [['BOOLEAN', '布尔运算.mp4'], ['MOTION TEST', '动态测试.mp4'], ['SIN MOTION', '方块sin运动.mp4'], ['FLOWER', '花朵.mp4'], ['FLUID', '流体.mp4'], ['COLOR TEST', '色彩测试.mp4'], ['IMAGE FIELD', '图片扩散.mp4'], ['GRID WAVE', '网格随方块波动.mp4'], ['TYPE BREAK', '文字散开.mp4'], ['TYPE ROTATE', '文字旋转 .mp4'], ['TYPE ROTATE 02', '文字旋转2.mp4'], ['RIPPLE', '圆形扩散.mp4']];
const projectNarratives = {
  twoD: ['围绕品牌传播内容完成二维动态设计，让信息、节奏与视觉风格保持一致。', '当前先展示项目成片。后续将在这里补充具体制作区间、镜头拆解和个人负责内容。'],
  threeD: ['三维项目的前期策划与视觉预演，用于明确创意方向、镜头结构和制作路径。', '当前先展示项目视频。后续将在这里补充前期分镜、动画预剪、参考整理和方案推进过程。'],
  training: ['工作之外的动态练习与视觉实验，用于测试新的节奏、图形方法和软件能力。', '从单一运动规律或视觉主题出发，通过短周期练习完成动态结果。']
};
const projectDetails = {
  '361°品牌宣传日': {
    overview: '与 UIDStudio 合作，为 361°品牌「减碳加速」制作概念宣传片。影片围绕品牌发布的 CQT 碳临界科技，通过微观材料、科技视觉与产品之间的转换，将抽象的材料技术转化为直观的动态表达。',
    role: '负责项目后期动态制作对接、26s 后 Motion Design 及最终成片剪辑。在既定美术与三维资产基础上，完成镜头衔接、动态图形、转场及节奏设计，并统一影片前后段的动态语言。',
    challenge: '后半段涉及微观材质、科技信息与产品展示等不同视觉尺度，难点在于避免镜头成为单纯的素材拼接。通过动势延续、形态关联与节奏控制串联不同场景，使信息最终由技术性能、产品到品牌自然收束。'
  },
  '2024快手磁力大会': {
    overview: '为 2024 快手磁力大会制作大会视觉影片。本届大会以「智能经营」为主题，整体视觉通过持续流动、延展的动态语言，传递连接、增长与智能经营的概念。',
    role: '负责影片 46s 之后的全部 Motion Design。美术伙伴完成关键视觉与风格设定，我在 AE 中重新拆解和搭建视觉效果，让原本的静态设计真正转化成可以持续运动的动态系统。',
    challenge: '最大的挑战是贯穿后半段的横向流动拖尾。为了避免曲线运动过于机械，我研究并搭建了基于 Sin 函数与 Expression 的动态控制，通过频率、振幅与相位的组合，让大量曲线在持续横移的同时保持自然、错落的流动感，也让效果从手 K 动画变成一套更稳定、可控的动态逻辑。'
  },
  '站酷共创': {
    overview: '为 2022 站酷大会制作大会宣传片。通过不断变化、融合的图形与色彩构建充满生命力的视觉世界，以持续流动的动态语言强化大会年轻、开放的视觉氛围。',
    role: '负责影片 32s—56s 的 Motion Design 及最终成片剪辑。这一段的球体部分没有完整的美术动态设定，因此除了动画制作，也参与了这部分的动态视觉探索，从运动方式到球体内部的色彩效果进行重新设计与搭建。',
    challenge: '难点是让大量球体在保持流畅运动的同时，内部色彩也始终处于自然流动的状态。通过为每个球体叠加多层渐变与动态色彩，并不断调整混合方式、运动速度和饱和度，让颜色足够丰富但不过艳，最终让球体运动与内部色彩流动形成统一的节奏。'
  },
  '京东X草莓音乐节': {
    overview: '为京东 × 草莓音乐节制作联名宣传片。项目结合音乐节年轻、躁动的现场氛围与京东的产品元素，通过强节奏的图形动画与音乐视觉，打造更年轻、更有冲击力的品牌表达。',
    role: '负责项目前期的创意与动态分镜构思制作，并负责影片 13s—26s 的 Motion Design。美术视觉由团队伙伴完成，我主要负责将静态设计转化为完整的动态镜头，并建立这一段的运动方式与转场节奏。',
    challenge: '其中比较有挑战的是镲片翻转镜头：需要在 AE 中模拟具有空间感的 3D 翻转，同时让表面的渐变与高光始终跟随椭圆的透视变化。通过拆分材质层级并重新建立动态关系，让形变、透视与材质变化保持同步，最终在二维视觉风格下实现自然的立体翻转效果。'
  },
  '京东外卖X猪猪侠': {
    overview: '为京东外卖 × 猪猪侠联名制作宣传片。项目起源于网友发现京东外卖骑手服与猪猪侠经典的红黄配色意外“撞衫”，双方顺势把网络热梗变成一次正式联名，让猪猪侠以“外卖骑手”的身份加入京东外卖。',
    role: '负责影片 13s—35s 的 Motion Design。美术视觉由团队伙伴完成，我主要负责将静态设计转化为动态镜头，包括角色与图形动画、镜头衔接以及整体节奏的把控。',
    challenge: '这个项目最大的挑战是时间。从拿到素材到完成整支影片只有 2—3 天，需要在非常紧凑的制作周期里快速消化美术、完成动画并反复调整。在保证交付速度的同时尽量不牺牲动态细节和完成度，最终按时完成了这一段的制作。'
  },
  '小红书【听现场不鸽倡议】': {
    overview: '为小红书乐队主题项目制作动态视觉影片。项目以插画师极具个人风格的视觉作品为基础，通过动画进一步放大插画本身的趣味感与音乐节奏。',
    role: '负责影片前三篇章的 Motion Design。在保留原插画风格的基础上，将人物、图形与场景进行动态拆解，并根据音乐重新建立画面的运动与切换节奏。',
    challenge: '这个项目比较特别的地方是，插画师对动态也有非常明确的个人审美。最初尝试了更加丝滑流畅的运动方式，但后来发现略带卡顿和跳跃感的节奏反而更贴合原画气质，因此主动对部分动画进行抽帧和节奏重构，让 Motion 最终成为插画风格的一部分，而不是单纯让画面“动起来”。'
  },
  '特步X-Sofa Foam': {
    overview: '为特步 × X-SOFA FOAM 跑鞋制作产品宣传片。影片结合二维与三维视觉，以拟人化的“气泡核”表现中底的柔软与回弹，并通过三维镜头展示鞋面的编织与轻盈质感；整体采用马卡龙色系，让科技表达保持年轻、轻松的产品气质。',
    role: '负责开篇 0—2s 拟人角色的挤压动画，以及 6—11s 气泡核从挤压、弹飞到穿梭空间的全部 Motion Design。其中 6—11s 没有完整美术设定，因此也参与了这一段从画面构成到运动方式的动态视觉探索。',
    challenge: '难点是如何让大量气泡既有柔软的挤压回弹感，又能在快速穿梭中建立清晰的空间层次。通过调整形变节奏、弹性曲线，以及前中后景球体的速度差、大小和运动轨迹，让“挤压—释放—弹飞—穿梭”的动作形成连续的力量传递，同时把产品“软弹”的卖点直接转化成动态感受。'
  },
  '艾美特品牌焕新发布会': {
    overview: '为艾美特品牌焕新发布会制作品牌视觉影片。围绕全新的品牌视觉体系，通过 Logo、圆形与线条等核心元素的拆解与重组，将静态的品牌识别转化为持续生长、扩散的动态视觉。',
    role: '负责影片 6s—16s 的 Motion Design，主要完成品牌图形的拆解、重组、延展以及不同视觉形态之间的动态衔接。',
    challenge: '项目制作周期非常紧张，而这一段又包含大量几何图形的连续变化与精细衔接。需要在短时间内快速建立运动逻辑，同时反复调整速度曲线、图形层级与转场节奏，在保证交付效率的同时，让简洁的品牌图形依然保持足够流畅和完整的动态质感。'
  },
  '微软小冰X特步': {
    overview: '为微软小冰 × 特步夏日油画定制系列制作宣传动画。项目通过特步、微软小冰、阿里巴巴三方协作，将不同的个性与情绪转化为自己专属的油画 T 恤，希望每个人都能以自己的方式成为独一无二的创作者。',
    role: '负责影片前 10s 的 Motion Design，以及 20s—24s 百幅艺术作品穿梭镜头的动态制作，将不同风格的视觉素材重新组织为连续的动态叙事。',
    challenge: '结尾穿梭镜头需要在短时间内融合近百幅不同风格的艺术作品。难点不仅是素材量大，更需要控制每幅作品的空间层级、出现节奏与镜头速度，让大量画面快速掠过却不显得杂乱，最终形成一条不断延伸的艺术长廊，把“每个人都有属于自己的艺术表达”推向高潮。'
  },
  'BOTTONS Air 产品宣传视频': {
    overview: '为 BUTTONS Air X 耳机新品制作产品宣传片。影片以高对比的字体、几何图形与产品三维视觉为核心，通过快速切换的动态语言，呈现耳机的设计细节与产品特性。',
    role: '负责影片前 15s 的 Motion Design。美术视觉及部分三维元素由团队伙伴完成，我主要负责将不同素材重新整合，通过版式运动、产品动画与镜头转场建立完整的动态节奏。',
    challenge: '这一段同时包含字体排版、二维图形与多组三维产品素材，视觉形式切换非常频繁。难点在于既要保持快节奏和视觉冲击力，又不能让信息变得杂乱，因此通过运动方向、构图关系与转场节奏串联不同镜头，让二维与三维之间自然接力，同时始终保持产品作为视觉中心。'
  },
  'UINPUS LOGO演绎': {
    overview: '为 UINPUS 制作品牌 Logo 动态演绎，通过液态、渐变、粒子与几何图形等不同视觉语言，对核心的“U”形符号进行多维度动态探索。',
    role: '负责整支影片的剪辑与节奏整合，以及 3s—5s、11s—12s 的 Logo Motion Design。美术视觉由团队伙伴完成，我主要负责将静态设计转化为动态，并统一不同段落之间的节奏与衔接。',
    challenge: '11s—12s 需要在极短时间内完成大量圆形的相切、嵌套与尺度变化，同时叠加多组高饱和色彩。制作时重点控制几何关系、运动节奏与色彩层级，让复杂图形快速变化的同时依然保持干净、有序，并最终自然收束回 Logo。'
  },
  '京东-真心话大冒险': {
    overview: '为京东电脑数码新品栏目「真新话大冒险」制作宣传动画。项目通过趣味挑战、开箱与产品测评等内容，以更年轻、娱乐化的方式呈现数码新品与产品体验。',
    role: '负责影片开篇 0—3s、6—7s 的 Motion Design，以及结尾定版动画。围绕已有美术完成图形、文字与场景的动态演绎，并负责不同信息之间的节奏衔接。',
    challenge: '这支片的单个动态段落都很短，但画面信息密度很高。尤其开篇需要在几秒内完成文字、图形与场景元素的连续变化，因此重点调整了元素出现的先后关系、速度曲线和节奏停顿，让画面保持“快”和“炸”的同时，关键信息依然能够被看清，并与整支影片偏综艺、游戏化的视觉气质保持一致。'
  },
  '快手校招片头': {
    overview: '为快手校园招聘制作活动片头动画。围绕年轻、开放、有趣的校园招聘氛围，将网页、社交、创作、游戏等年轻人熟悉的视觉元素融入快手品牌世界，通过一段不断穿梭的视觉旅程完成活动开场。',
    role: '负责项目的客户沟通、整体创意构思、动态分镜设计及全片 Motion Design。美术视觉由团队伙伴完成，我从前期概念开始参与，并负责将创意与分镜最终完整落地为动态影片。',
    challenge: '最大的挑战是如何把大量不同的场景与视觉元素，在短短十几秒内组织成一个完整的观看体验。因此前期就从动态逻辑出发设计分镜，通过镜头推进、空间穿梭、元素接力串联不同场景，让每次转场既有视觉惊喜，又始终保持统一的运动方向与节奏，最终自然收束到活动主题。'
  },
  '快手磁力引擎2025CNY': {
    overview: '为快手校园招聘制作活动片头动画。围绕年轻、开放、有趣的校园招聘氛围，将网页、社交、创作、游戏等年轻人熟悉的视觉元素融入快手品牌世界，通过一段不断穿梭的视觉旅程完成活动开场。',
    role: '负责项目的客户沟通、整体创意构思、动态分镜设计及全片 Motion Design。美术视觉由团队伙伴完成，我从前期概念开始参与，并负责将创意与分镜最终完整落地为动态影片。',
    challenge: '最大的挑战是如何把大量不同的场景与视觉元素，在短短十几秒内组织成一个完整的观看体验。因此前期就从动态逻辑出发设计分镜，通过镜头推进、空间穿梭、元素接力串联不同场景，让每次转场既有视觉惊喜，又始终保持统一的运动方向与节奏，最终自然收束到活动主题。'
  }
};
Object.assign(projectDetails, {
  '快手磁力引擎2025CNY': {
    overview: '为快手磁力引擎 2025 CNY 制作新春营销宣推影片。项目围绕春节期间不同的内容场景与营销玩法展开，将年味、内容、互动与品牌营销整合成更轻松、有趣的视觉表达。',
    role: '负责项目的客户沟通、整体创意构思、VO 文案、动态分镜设计及部分 Motion Design。从前期需求梳理、脚本与分镜，到后期动态落地，全程参与项目的创意推进。',
    challenge: '这次比较大的挑战反而是如何先把内容讲清楚。面对大量 CNY 营销信息，需要自己重新梳理逻辑并完成 VO 文案，再根据口播的语义和节奏反推分镜与视觉创意。对我来说也是一次从单纯考虑“画面怎么动”，转向思考内容怎么讲、画面怎么配合、整支片子怎么成立的尝试。'
  },
  '快手年终内宣总结': {
    overview: '为快手磁力引擎年度内部总结制作回顾影片。通过动态图形、业务案例与品牌内容的快速切换，将过去一年的产品能力、内容资产与阶段性成果重新整理成更年轻、更具视觉冲击力的年度回顾。',
    role: '负责影片前 12s 的 Motion Design，包括开篇视觉、空间转场以及产品能力相关内容的动态制作，在既定美术基础上完成动态演绎与镜头衔接。',
    challenge: '开篇前两个镜头需要在 AE 中用二维素材模拟三维空间与镜头运动，同时还要让表面的蓝绿色渐变随着形体持续流动。制作时重点处理了透视、层级、视差以及渐变运动之间的关系，让二维元素在没有完整三维制作的情况下依然具有空间纵深和材质流动感，并自然衔接到后面的信息展示。'
  },
  'VOLLGAS X 凯斯哈林': {
    overview: '为 VOLLGAS × Keith Haring 联名能量饮料制作宣传片。项目将 Keith Haring 极具辨识度的街头艺术语言融入产品包装，以大胆的色彩与图形碰撞，呈现 VOLLGAS「艺术 × 能量」的品牌表达。',
    role: '负责整支影片的 Motion Design 及最终剪辑。美术视觉与三维资产由团队伙伴完成，我主要负责将不同形式的素材进行动态整合，并完成全片的镜头衔接、转场与整体节奏设计。',
    challenge: '整片同时包含平面图形、产品三维与大量罐体阵列。制作时重点通过运动方向、重复节奏、构图延续与快速转场建立统一的动态语言，让 Keith Haring 本身强烈的视觉风格贯穿始终，同时在高密度画面中保持产品的视觉中心。'
  },
  'VOLLGAS X 苏炳添': {
    overview: '为 VOLLGAS × 苏炳添制作品牌宣传片。围绕苏炳添的速度与竞技精神，将运动、能量与 VOLLGAS 全力以赴的品牌理念结合，通过高速的文字与线条视觉强化不断向前的力量感。',
    role: '负责影片前 16s 的 Motion Design，主要完成文字动态、图形动画以及贯穿人物运动的线条效果，让 Typography 与苏炳添的奔跑节奏形成统一的视觉语言。',
    challenge: '难点是让大量线条真正产生跟随人物运动的空间感，而不是简单叠加在画面上。制作时根据人物的奔跑方向、速度与身体动作不断调整线条的生成路径、透视与前后层级，让线条随着人物加速、转向和穿梭，在二维画面中建立纵深，同时进一步放大速度与能量爆发的感受。'
  },
  '小米科技出现': {
    overview: '为 2022 小米科技出行季制作品牌宣传片。影片以充满想象力的视觉旅程串联手机、耳机等智能产品，通过不断向前探索的镜头语言，呈现科技产品融入生活与出行场景的品牌体验。',
    role: '负责影片 10s—26s 的 Motion Design，包括场景穿梭、镜头推进、二维元素动画及不同段落之间的转场衔接；其中耳机弹出的三维动画由团队三维伙伴完成，我负责将其整合进整体镜头运动。',
    challenge: '难点在于如何让原地完成的三维耳机动画匹配持续向前推进的镜头。制作时重新调整三维素材在画面中的位移、缩放、透视与出现时机，并结合前后场景的空间关系，让耳机像真实存在于镜头穿越的空间中，使 3D 产品运动与 2D Camera Movement 自然衔接，而不是两个独立动画的简单拼接。'
  },
  '天猫时装周': {
    overview: '为天猫小黑盒时装周制作系列视觉包装，通过时装影像、品牌视觉与动态图形的结合，将不同秀场与时尚内容串联成完整的动态视觉体验。',
    role: '负责项目的客户沟通、动态分镜、转场构思及 Motion Design。美术视觉由团队伙伴完成，我主要基于已有视觉设计规划每个画面的运动方式、镜头衔接与转场逻辑，并完成最终动态制作。'
  },
  '淘宝造物节': {
    overview: '为 2022 淘宝造物节「明日之境」制作活动宣传视频。本届造物节围绕年轻创造力与创新创业展开，通过「创新创业大会 × 创造力大展」集中呈现新产品、新想法与年轻创业者的创造力。',
    role: '负责影片前 12s 的 Motion Design。美术视觉由团队伙伴完成，我主要基于已有设计完成画面元素、文字及图形的动态演绎，并处理前后镜头之间的节奏与衔接。',
    challenge: '这个项目更侧重于对既定视觉的动态转化。在保持原有美术风格的基础上，通过元素出现顺序、运动节奏与镜头衔接，让静态设计自然转化成具有造物节年轻、活跃气质的动态视觉。'
  },
  '方达律师事务所': {
    overview: '为方达律师事务所制作品牌宣传片。影片围绕其专业能力、协作理念与国际化法律服务展开，以简洁、理性的视觉语言呈现品牌信息。',
    role: '负责项目的客户沟通及整支影片的动态分镜创意，并完成 22s—36s、45s—1:30 的 Motion Design。美术视觉由团队伙伴负责，我主要根据文案构思每个段落“如何表达、如何运动、如何衔接”，再配合美术方案完成动态落地。',
    challenge: '难点在于文案本身偏专业和抽象，而影片最终需要用非常简洁的图形语言把概念讲清楚。因此前期分镜需要先拆解每段文案的核心含义，再思考适合的动态关系与视觉隐喻，并与美术配合转化为具体画面，让复杂信息在保持简洁的同时更容易被理解。'
  },
  '人民日报——我的宝藏家乡': {
    overview: '人民日报新媒体推出《我的宝藏家乡》主题策划，邀请来自全国各地的 34 位插画师，为全国 34 个省级行政区分别创作数字插画，以不同的艺术风格描绘各地的自然风光、人文景观与家乡记忆。',
    role: '负责项目的客户沟通、插画动态拆解与转场梳理，包括根据动态需求与美术沟通每幅插画的分层方式，并完成影片 0—39s、1:36—2:06 的 Motion Design。',
    challenge: '34 位插画师的画面在风格、构图和元素上差异很大，难点是如何在保留原作特点的同时，让不同插画自然地连接起来。前期需要逐张分析画面，从人物、建筑、山水、云层等元素中寻找可以承接下一镜的视觉关系，再通过遮挡、形态呼应、运动方向与 Match Cut 设计转场，并提前反推每幅插画需要如何分层，让跨风格切换依然保持流畅。'
  },
  '人民日报——中国正当潮': {
    overview: '人民日报新媒体推出「中国正当潮」主题传播计划，聚焦中国文化、科技与消费领域，通过传统与当代、文化与科技的结合，展现不断发展的中国创造力与新时代风潮。',
    role: '负责影片 0—30s 持续推镜以及 2:27—2:54 持续拉镜的 Motion Design。基于团队已有的美术素材，重新组织不同画面的前后层级与空间关系，完成长镜头的纵深运动与场景穿梭。',
    challenge: '难点在于如何让大量独立的二维美术素材形成足够深的空间纵深。制作时需要重新拆分前、中、后景，通过不同层级的位移速度、缩放比例与视差关系建立空间，再配合持续推进与拉远的 Camera Movement，让镜头像真正穿越不同场景一样自然连续。'
  },
  '人民日报——抗战胜利八十周年漫画': {
    overview: '人民日报社推出「江山如画」系列短视频第一期《不屈》，以 10 余件抗战美术经典作品为基础，通过动态影像重新串联历史画作，纪念中国人民抗日战争暨世界反法西斯战争胜利 80 周年。',
    role: '负责项目的客户沟通、整片串场与转场构思，以及前期素材拆分规划。根据每幅原画的内容设计画面之间的连接方式，并与美术伙伴沟通需要拆分、补全的图层，为后续动态制作建立素材基础。',
    challenge: '项目拿到的原始素材大多是扫描后的单张 JPG，没有现成图层，而且不同画作在构图、笔触和内容上差异很大。需要逐幅分析画面，从人物、山水、烟雾、笔触等元素中寻找前后镜头的连接关系，再反推需要如何拆层与补全，让原本独立的历史画作能够自然过渡，形成连续的动态叙事。'
  },
  '人民日报——全面小康系列': {
    overview: '人民日报新媒体围绕“全面小康”推出系列内容，通过不同人物、生活场景与社会发展切面，记录脱贫攻坚、民生改善与城乡发展的变化，呈现全面小康背景下普通人的真实生活与时代变化。',
    role: '负责系列项目中部分篇章的 Motion Design。基于团队已有的美术视觉完成动态演绎、图形动画与镜头节奏设计，具体负责片段见下方视频。'
  }
});
Object.assign(projectDetails, {
  '泡泡玛特X东本电车灵悉': {
    overview: '为泡泡玛特 × 东风本田灵悉联名项目制作宣传视频。围绕潮玩 IP 与年轻化汽车品牌的跨界结合，通过角色、产品与场景之间的互动，建立更轻松、有趣的联名视觉体验。',
    role: '负责项目的前期创意构思、故事版创意构思及动态分镜剪辑。从联名主题出发梳理影片的整体创意与叙事节奏，将想法转化为具体分镜，并通过动态预演提前验证镜头、转场与整片节奏。'
  },
  '比亚迪海豹06GT x 极品飞车': {
    overview: '为比亚迪海豹06GT ×《极品飞车：集结》联名项目制作宣传视频。项目将现实中的海豹06GT驶入虚拟竞速世界，通过高速驾驶、空间变化与游戏化视觉，呈现车辆的性能与年轻、潮趣属性。',
    role: '负责项目的前期创意构思，围绕“现实汽车 × 虚拟竞速世界”的联名概念，构思车辆进入游戏世界后的场景变化、驾驶动作与镜头语言，并将整体创意转化为可供后续制作执行的完整分镜。'
  },
  '江苏卫视节目【中华书院】': {
    overview: '为江苏卫视文化节目《中华书院》制作节目片头。影片以“书院”为起点，通过书卷、山水、人文与科技等意象的不断演变，将传统文化与当代文明连接起来，呈现中华文化在时代发展中的延续与传承。',
    role: '负责项目的前期创意构思及故事版创意构思。围绕“文化传承与时代演进”梳理片头的整体视觉脉络，构思从传统书院、人文意象到现代科技空间的场景变化与镜头推进，并将概念转化为完整分镜，为后续三维动态制作提供创意基础。'
  },
  '安踏Pg7科技跑鞋': {
    overview: '为安踏 PG7 缓震科技平台构思产品宣传片，以跑步过程中“落地冲击—缓震吸收—能量回弹”为核心，将抽象的中底科技转化为更直观、更具冲击力的视觉体验。',
    role: '负责片子三维部分的前期创意构思及故事版创意构思。围绕 PG7 的缓震科技特点，构思影片整体视觉概念、产品科技的表现方式、场景变化与镜头语言，为后续三维动态制作提供执行基础。'
  },
  'HUAWEI 鸿蒙生态': {
    overview: '为 HUAWEI 鸿蒙智选生态制作品牌宣传视频。影片围绕智慧家庭与多设备协同，通过不同生活场景之间的连接，呈现智能设备融入日常生活后所构建的全场景智慧体验。',
    role: '负责整支影片的前期创意，从“鸿蒙生态”的核心概念出发，梳理不同智能产品与生活场景之间的关系，构思整片的视觉叙事、场景转换与镜头语言，并将创意转化为完整故事板，为后续三维动态制作提供执行基础。'
  }
});
const coverFiles = `02b3fd4471c725c41706c137c5801004.png 05ba54219f85f83517af4635406bb87a.png 0b24da0f5772518f09d84a2e975c3ea7.png 0b5aaf2cb9b508374ab95a935edfa5d4.png 0ef3430d0081cc7c400c32f27279b2ad.png 16db5d205465404c1de97ab3b7028f95.png 1be807fea76ea665cfb78a0120d595cd.png 1f949ea717ba2b537dec61d38ecb035c.png 27b2f2fe6b2f03b3a78f27d50f5fe825.png 2ac639e314b9ae815e673f12f446190a.png 2f7a6d316e19c9c36753e8561197c54b.png 47b939a24008e03251086ac5088688f8.png 56e2b15b2ced7389bf7564a9053ad3ae.png 595293365f176be0355ad92891036188.png 59968f7696c4b0a4b1cdd5b3250c5c70.png 5d09f91efeb1988fdc3e93f748f8bcfc.png 5d801ac10aea5a0911c966613228f2ee.png 5e4b3b334dc381b9a865075e0ee8da1c.png 617c34b2dd10df15b3929a689fbc642c.png 63159821cafa164ca8ca5e22837fe59e.png 63274816142d192708c1efff1eb01149.png 64b45f7f4a1a7dff1e1cf37a57c1efb4.png 664e34b800ce9c708cdc3b888a94b17d.png 6e1ffb9e91799b8b7551dd5250d11f0d.png 7395a3bb83267294e6a99486930d237a.png 7585056c40f24577746cb6cd0d569e7f.png 7ee9ebd7c4a7059b046ec61b0e84f963.png 81c751545a698190378c79d4d04d4cf9.png 8588c79f673f970a6f66d8f3004c1e5c.png 86d673ad04697f7d2c2359fda936c228.png 8a444c90fb13f51696fc078cc9372cdd.png 92d00f23e2527f0a01191aebd16b0485.png 931f4332cf78c96b83b5f0d19ca38f37.png 96c9398966e4f9f81259fdf9c7791b34.png 9abeb4ad4fa03d4a53460b40c4ce99ab.png 9c4f3223f04f898f39660a62e81095ef.png a388b12249fa5a137db943ebef0333da.png a866656593e482fc5d4e61c27c303b33.png aad20f5f4a235e3647fe0ccd2dcaf2d8.png af716fa0f2543c26917498740410d5f1.png b4a99e6ce2b21a4085f5f82732b7cb59.png c941c1a3e1b274bece78fda7a52de5db.png cd715012c4c257d3920138acf0ef7d17.png dd7889274cfee3e25d3baf68dc366cc1.png de7324dc2a18bcbb0982690dfc7c3042.png e938f2560725b1d2a55fae0af4cf917f.png eb941ad790a762e2dba61cb024574d97.png fc9e68c02691988de41a13c4a7932e3d.png fffaca202d8ff0fa34bd108203fe37a7.png`.split(' ');
function CircularGallery({
  bend = 4,
  borderRadius = .05,
  scrollSpeed = 3.9,
  scrollEase = .07
}) {
  const container = useRef(null),
    cards = useRef([]);
  useEffect(() => {
    const el = container.current;
    if (!el) return;
    const scroll = {
        current: 0,
        target: 0
      },
      pointer = {
        down: false,
        start: 0,
        position: 0
      },
      metrics = {
        width: 0,
        card: 0,
        space: 0,
        total: 0
      };
    let raf = 0,
      last = performance.now(),
      hovering = false;
    const resize = () => {
      metrics.width = el.clientWidth;
      metrics.card = Math.max(92, Math.min(142, metrics.width * .115));
      metrics.space = metrics.card + 18;
      metrics.total = metrics.space * coverFiles.length;
    };
    const wheel = e => {
      e.preventDefault();
      scroll.target += Math.sign(e.deltaY || e.deltaX) * scrollSpeed * 42;
    };
    const down = e => {
      pointer.down = true;
      pointer.start = e.clientX;
      pointer.position = scroll.target;
      el.setPointerCapture?.(e.pointerId);
    };
    const move = e => {
      if (pointer.down) scroll.target = pointer.position + (pointer.start - e.clientX) * scrollSpeed * .75;
    };
    const up = () => {
      pointer.down = false;
      scroll.target = Math.round(scroll.target / metrics.space) * metrics.space;
    };
    const tick = now => {
      const dt = Math.min(32, now - last);
      last = now;
      if (!pointer.down && !hovering) scroll.target += scrollSpeed * .035 * dt;
      scroll.current += (scroll.target - scroll.current) * scrollEase;
      const half = metrics.width / 2;
      cards.current.forEach((card, i) => {
        if (!card) return;
        let x = i * metrics.space - scroll.current;
        x = ((x + metrics.total / 2) % metrics.total + metrics.total) % metrics.total - metrics.total / 2;
        const n = Math.max(-1.4, Math.min(1.4, x / Math.max(1, half)));
        const y = Math.abs(n * n) * bend * 20;
        const rotate = -n * bend * 5.5;
        const scale = Math.max(.72, 1 - Math.abs(n) * .16);
        card.style.width = `${metrics.card}px`;
        card.style.transform = `translate3d(calc(-50% + ${x}px),calc(-50% + ${y}px),0) rotateZ(${rotate}deg) scale(${scale})`;
        card.style.opacity = String(Math.max(0, 1 - Math.max(0, Math.abs(n) - .82) * 2.4));
        card.style.zIndex = String(100 - Math.round(Math.abs(n) * 20));
      });
      raf = requestAnimationFrame(tick);
    };
    resize();
    addEventListener('resize', resize);
    el.addEventListener('wheel', wheel, {
      passive: false
    });
    el.addEventListener('pointerdown', down);
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('mouseenter', () => hovering = true);
    el.addEventListener('mouseleave', () => {
      hovering = false;
      up();
    });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener('resize', resize);
      el.removeEventListener('wheel', wheel);
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
    };
  }, [bend, scrollSpeed, scrollEase]);
  return (0, _jsxRuntime.jsxs)("div", {
    className: "circular-gallery",
    ref: container,
    style: {
      '--radius': `${borderRadius * 100}%`
    },
    children: [(0, _jsxRuntime.jsx)("div", {
      className: "gallery-stage",
      children: coverFiles.map((file, i) => (0, _jsxRuntime.jsx)("figure", {
        className: `crop-${i % 7}`,
        ref: node => cards.current[i] = node,
        children: (0, _jsxRuntime.jsx)("img", {
          src: `${A}work-covers/${file}`,
          alt: `作品封面 ${i + 1}`
        })
      }, file))
    }), (0, _jsxRuntime.jsxs)("div", {
      className: "gallery-caption",
      children: [(0, _jsxRuntime.jsx)("b", {
        children: "PROJECT COVERS"
      }), (0, _jsxRuntime.jsx)("span", {
        children: "49 SELECTED FRAMES \xB7 AUTO SCROLL"
      })]
    })]
  });
}
function Header() {
  const [open, setOpen] = useState(false);
  const links = [['top', 'About Me'], ['showreel', 'SHOWREEL'], ['works', 'SELECTED WORKS'], ['cavalry', 'CAVALRY LAB'], ['about', 'Resume']];
  return (0, _jsxRuntime.jsxs)("header", {
    className: "nav-wrap",
    children: [(0, _jsxRuntime.jsxs)("div", {
      className: "nav-meta",
      children: [(0, _jsxRuntime.jsx)("b", {
        children: "A.GU"
      }), (0, _jsxRuntime.jsx)("b", {
        children: "MOTION DESIGNER"
      }), (0, _jsxRuntime.jsx)("b", {
        children: "PERSONAL PORTFOLIO WEBSITE"
      })]
    }), (0, _jsxRuntime.jsxs)("button", {
      className: "nav-toggle",
      onClick: () => setOpen(!open),
      children: ["INDEX ", (0, _jsxRuntime.jsx)("i", {
        children: open ? '×' : '+'
      })]
    }), (0, _jsxRuntime.jsx)("nav", {
      className: open ? 'open' : '',
      children: links.map(([id, t]) => (0, _jsxRuntime.jsx)("a", {
        href: `#${id}`,
        onClick: () => setOpen(false),
        children: t
      }, id))
    })]
  });
}
function ArrowIcon({
  direction = 'up',
  className = ''
}) {
  return (0, _jsxRuntime.jsx)("svg", {
    className: `vector-arrow vector-arrow-${direction} ${className}`.trim(),
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    focusable: "false",
    children: (0, _jsxRuntime.jsx)("path", {
      d: "M5 19L19 5M8 5h11v11",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2.4",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })
  });
}
function LazyLoopVideo({
  src,
  poster,
  className = '',
  ariaLabel
}) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setLoaded(true);
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setLoaded(true);
          requestAnimationFrame(() => el.play().catch(() => {}));
        } else el.pause();
      });
    }, {
      rootMargin: '280px 0px',
      threshold: .01
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (0, _jsxRuntime.jsx)("video", {
    ref: ref,
    className: className,
    src: loaded ? src : undefined,
    poster: poster,
    "aria-label": ariaLabel,
    muted: true,
    loop: true,
    playsInline: true,
    autoPlay: loaded,
    preload: loaded ? 'metadata' : 'none'
  });
}
function Hero() {
  const hero = useRef(null),
    video = useRef(null);
  const targetTime = useRef(0),
    currentTime = useRef(0),
    pointerActive = useRef(false),
    raf = useRef();
  useEffect(() => {
    const trackPointer = e => {
      if (!hero.current || !video.current || !Number.isFinite(video.current.duration)) return;
      const rect = hero.current.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const distance = Math.hypot(dx, dy);
      let angle = Math.atan2(-dy, dx);
      if (angle < 0) angle += Math.PI * 2;
      targetTime.current = distance < .08 ? 0 : Math.min(video.current.duration - .12, 2 + angle / (Math.PI * 2) * 8);
    };
    const enter = () => {
      pointerActive.current = true;
      currentTime.current = video.current?.currentTime || 0;
      video.current?.pause();
    };
    const leave = () => {
      pointerActive.current = false;
      video.current?.pause();
    };
    const tick = () => {
      if (pointerActive.current && video.current?.readyState >= 2) {
        currentTime.current += (targetTime.current - currentTime.current) * .13;
        if (Math.abs(video.current.currentTime - currentTime.current) > .018) video.current.currentTime = currentTime.current;
      }
      raf.current = requestAnimationFrame(tick);
    };
    const el = hero.current;
    el?.addEventListener('mouseenter', enter);
    el?.addEventListener('mousemove', trackPointer, {
      passive: true
    });
    el?.addEventListener('mouseleave', leave);
    tick();
    return () => {
      el?.removeEventListener('mouseenter', enter);
      el?.removeEventListener('mousemove', trackPointer);
      el?.removeEventListener('mouseleave', leave);
      cancelAnimationFrame(raf.current);
    };
  }, []);
  return (0, _jsxRuntime.jsx)("section", {
    id: "top",
    className: "hero-scroll",
    ref: hero,
    children: (0, _jsxRuntime.jsxs)("div", {
      className: "hero-sticky",
      children: [(0, _jsxRuntime.jsxs)("div", {
        className: "hero-video",
        children: [(0, _jsxRuntime.jsx)("img", {
          className: "hero-poster",
          src: A + 'hero-poster.jpg',
          alt: "",
          fetchPriority: "high"
        }), (0, _jsxRuntime.jsx)("video", {
          ref: video,
          src: A + 'hero.mp4',
          poster: A + 'hero-poster.jpg',
          muted: true,
          playsInline: true,
          preload: "metadata"
        })]
      }), (0, _jsxRuntime.jsx)("div", {
        className: "hero-shade"
      }), (0, _jsxRuntime.jsxs)("div", {
        className: "hero-grid",
        children: [(0, _jsxRuntime.jsxs)("div", {
          className: "hero-title",
          children: [(0, _jsxRuntime.jsxs)("h1", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "MOTION"
            }), (0, _jsxRuntime.jsx)("span", {
              children: "DESIGNER"
            })]
          }), (0, _jsxRuntime.jsxs)("a", {
            href: "#works",
            children: ["\u8D70\u8FDB\u6211\u7684\u521B\u4F5C\u4E16\u754C ", (0, _jsxRuntime.jsx)("b", {
              children: (0, _jsxRuntime.jsx)(ArrowIcon, {
                direction: "up"
              })
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            className: "hero-profile",
            children: [(0, _jsxRuntime.jsx)("h2", {
              children: "\u536B\u4E30\u946B"
            }), (0, _jsxRuntime.jsx)("b", {
              children: "\u8D44\u6DF1\u52A8\u6001\u8BBE\u8BA1\u5E08 / \u89C6\u9891\u8BBE\u8BA1\u5E08"
            }), (0, _jsxRuntime.jsxs)("p", {
              children: ["7\u5E74\u5546\u4E1A\u9879\u76EE\u8BBE\u8BA1\u7ECF\u9A8C", (0, _jsxRuntime.jsx)("br", {}), "\u4E13\u6CE8\u54C1\u724C\u52A8\u6001\u89C6\u89C9\u3001\u521B\u610F\u89C6\u9891\u4E0E Motion Graphics"]
            })]
          })]
        }), (0, _jsxRuntime.jsxs)("div", {
          className: "hero-monogram",
          children: ["A.GU", (0, _jsxRuntime.jsx)("br", {}), "PERSONAL", (0, _jsxRuntime.jsx)("br", {}), "PORTFOLIO"]
        }), (0, _jsxRuntime.jsx)("div", {
          className: "hero-smile",
          "aria-label": "\u7B11\u8138\u6807\u5FD7",
          children: (0, _jsxRuntime.jsxs)("span", {
            children: [(0, _jsxRuntime.jsx)("i", {}), (0, _jsxRuntime.jsx)("i", {}), (0, _jsxRuntime.jsx)("b", {})]
          })
        })]
      })]
    })
  });
}
function SectionTitle({
  index,
  en,
  cn
}) {
  return (0, _jsxRuntime.jsxs)("div", {
    className: "section-title",
    children: [(0, _jsxRuntime.jsx)("span", {
      children: index
    }), (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsxs)("h2", {
        children: [en, " ", (0, _jsxRuntime.jsx)(ArrowIcon, {
          direction: "down"
        })]
      }), (0, _jsxRuntime.jsx)("p", {
        children: cn
      })]
    })]
  });
}
function Showreel() {
  const v = useRef(null);
  return (0, _jsxRuntime.jsxs)("section", {
    id: "showreel",
    className: "section reel",
    children: [(0, _jsxRuntime.jsx)(SectionTitle, {
      index: "01",
      en: "SHOWREEL",
      cn: "\u4F5C\u54C1\u526A\u8F91"
    }), (0, _jsxRuntime.jsx)("div", {
      className: "showreel-single",
      children: (0, _jsxRuntime.jsx)("button", {
        className: "reel-frame",
        "aria-label": "\u64AD\u653E\u6216\u6682\u505C SHOWREEL",
        onClick: () => {
          if (v.current.paused) v.current.play();else v.current.pause();
        },
        children: (0, _jsxRuntime.jsx)("video", {
          className: "showreel-main-video",
          ref: v,
          src: "./\u5546\u4E1A\u9879\u76EE/SHOWREEL/\u4E2A\u4EBA\u4F5C\u54C1\u96C6\u526A\u8F910927.mp4",
          poster: A + 'showreel-3s12.jpg',
          playsInline: true,
          preload: "metadata"
        })
      })
    })]
  });
}
function Works() {
  const [selected, setSelected] = useState(null);
  const [expandedFrame, setExpandedFrame] = useState(null);
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);
  useEffect(() => {
    const close = e => {
      if (e.key === 'Escape') setExpandedFrame(null);
    };
    addEventListener('keydown', close);
    return () => removeEventListener('keydown', close);
  }, []);
  const group = selected ? groups.find(g => g.items.includes(selected)) || groups[0] : groups[0];
  const selectedIndex = selected ? group.items.findIndex(item => item === selected) : -1;
  const narrative = projectNarratives[group.id];
  const detail = selected ? projectDetails[selected[0]] : null;
  return (0, _jsxRuntime.jsxs)("section", {
    id: "works",
    className: "section works",
    children: [(0, _jsxRuntime.jsx)(SectionTitle, {
      index: "02",
      en: "SELECTED WORKS",
      cn: "\u5546\u4E1A\u9879\u76EE"
    }), (0, _jsxRuntime.jsx)("div", {
      className: "work-sections",
      children: groups.map((section, sectionIndex) => (0, _jsxRuntime.jsxs)("section", {
        className: "work-group",
        children: [(0, _jsxRuntime.jsxs)("div", {
          className: "work-head",
          children: [(0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsxs)("small", {
              children: ["0", sectionIndex + 1]
            }), (0, _jsxRuntime.jsx)("h3", {
              children: section.title
            })]
          }), (0, _jsxRuntime.jsxs)("p", {
            children: [section.items.length, " PROJECTS / ", section.id === 'training' ? '自动循环播放' : '点击卡片查看详情']
          })]
        }), (0, _jsxRuntime.jsx)("div", {
          className: "work-grid",
          style: {
            '--accent': section.color
          },
          children: section.items.map((it, i) => {
            const content = (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [(0, _jsxRuntime.jsx)("span", {
                className: "project-no",
                children: String(i + 1).padStart(2, '0')
              }), (0, _jsxRuntime.jsx)("div", {
                className: "project-cover",
                children: section.id === 'twoD' ? (0, _jsxRuntime.jsx)("img", {
                  src: `${A}${it[4]}`,
                  alt: "",
                  loading: "lazy",
                  decoding: "async"
                }) : (0, _jsxRuntime.jsx)(LazyLoopVideo, {
                  src: `./${it[3]}`,
                  poster: `${A}${it[4]}`,
                  ariaLabel: it[0]
                })
              }), (0, _jsxRuntime.jsx)("div", {
                className: "project-type",
                children: it[2]
              }), (0, _jsxRuntime.jsx)("h4", {
                children: it[0]
              }), section.id !== 'training' && (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                children: [(0, _jsxRuntime.jsx)("small", {
                  className: "project-click-hint",
                  children: "\u8BE6\u7EC6\u9879\u76EE\u5185\u5BB9\u70B9\u51FB\u89C2\u770B"
                }), (0, _jsxRuntime.jsx)("i", {
                  children: (0, _jsxRuntime.jsx)(ArrowIcon, {
                    direction: "up"
                  })
                })]
              })]
            });
            return section.id === 'training' ? (0, _jsxRuntime.jsx)("article", {
              className: `project passive-project ${it[0] === '动补插件训练' ? 'contain-project' : ''}`,
              children: content
            }, it[0]) : (0, _jsxRuntime.jsx)("button", {
              className: `project ${it[0].includes('宝藏家乡') ? 'treasure-project' : ''}`,
              onClick: () => setSelected(it),
              children: content
            }, it[0]);
          })
        })]
      }, section.id))
    }), selected && (0, _jsxRuntime.jsxs)("div", {
      className: "project-page",
      role: "dialog",
      "aria-modal": "true",
      children: [(0, _jsxRuntime.jsx)("button", {
        className: "project-close",
        onClick: () => {
          setExpandedFrame(null);
          setSelected(null);
        },
        children: "CLOSE \xD7"
      }), (0, _jsxRuntime.jsxs)("div", {
        className: "project-page-inner",
        children: [(0, _jsxRuntime.jsxs)("header", {
          className: group.id === 'twoD' || group.id === 'threeD' ? 'unified-project-title' : '',
          children: [(0, _jsxRuntime.jsxs)("small", {
            children: [group.en, " / ", String(selectedIndex + 1).padStart(2, '0')]
          }), (0, _jsxRuntime.jsx)("h3", {
            children: selected[0]
          }), (0, _jsxRuntime.jsxs)("p", {
            children: [selected[2], " \xB7 MOTION DESIGN"]
          })]
        }), (0, _jsxRuntime.jsxs)("div", {
          className: "project-story",
          children: [(0, _jsxRuntime.jsxs)("article", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "01 / BACKGROUND"
            }), (0, _jsxRuntime.jsx)("h4", {
              children: "\u9879\u76EE\u80CC\u666F"
            }), (0, _jsxRuntime.jsx)("p", {
              children: detail?.overview || narrative[0]
            })]
          }), (0, _jsxRuntime.jsxs)("article", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "02 / MY ROLE"
            }), (0, _jsxRuntime.jsx)("h4", {
              children: "\u4E2A\u4EBA\u804C\u8D23"
            }), (0, _jsxRuntime.jsx)("p", {
              children: detail?.role || selected[1]
            })]
          }), (detail?.challenge || !detail) && (0, _jsxRuntime.jsxs)("article", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "03 / CHALLENGE"
            }), (0, _jsxRuntime.jsx)("h4", {
              children: "\u9879\u76EE\u96BE\u70B9"
            }), (0, _jsxRuntime.jsx)("p", {
              children: detail?.challenge || '在既定品牌表达与交付节奏中寻找清晰的动态解决方案，并独立推进关键画面的测试、调整与落地。'
            })]
          })]
        }), !selected[7] && (0, _jsxRuntime.jsx)("figure", {
          className: "project-video",
          children: (0, _jsxRuntime.jsx)("video", {
            src: `./${selected[3]}`,
            poster: `${A}${selected[4]}`,
            controls: true,
            playsInline: true,
            preload: "metadata",
            autoPlay: group.id !== 'twoD',
            muted: group.id !== 'twoD'
          })
        }), selected[7] ? (0, _jsxRuntime.jsx)("section", {
          className: "series-output",
          children: selected[7].map((episode, episodeIndex) => (0, _jsxRuntime.jsxs)("article", {
            className: "series-episode",
            children: [(0, _jsxRuntime.jsxs)("header", {
              children: [(0, _jsxRuntime.jsxs)("small", {
                children: ["PART ", String(episodeIndex + 1).padStart(2, '0')]
              }), (0, _jsxRuntime.jsx)("h4", {
                children: episode.title
              })]
            }), (0, _jsxRuntime.jsx)("figure", {
              className: "series-main-video",
              children: (0, _jsxRuntime.jsx)("video", {
                src: `./${episode.video}`,
                poster: `${A}${episode.poster}`,
                controls: true,
                playsInline: true,
                preload: "metadata"
              })
            }), (0, _jsxRuntime.jsxs)("div", {
              className: "series-clips",
              children: [(0, _jsxRuntime.jsxs)("div", {
                children: [(0, _jsxRuntime.jsx)("small", {
                  children: "SELECTED MOTION OUTPUTS"
                }), (0, _jsxRuntime.jsx)("h5", {
                  children: "\u52A8\u6001\u7247\u6BB5"
                })]
              }), (0, _jsxRuntime.jsx)("div", {
                className: "gif-grid",
                children: episode.clips.map((clip, i) => (0, _jsxRuntime.jsx)(LazyLoopVideo, {
                  src: `./${clip}`,
                  ariaLabel: `${episode.title} 动态片段 ${i + 1}`
                }, clip))
              })]
            })]
          }, episode.title))
        }) : group.id === 'twoD' && selected[5]?.length > 0 && (0, _jsxRuntime.jsxs)("section", {
          className: "gif-output",
          children: [(0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("small", {
              children: "SELECTED MOTION OUTPUTS"
            }), (0, _jsxRuntime.jsx)("h4", {
              children: "\u52A8\u6001\u7247\u6BB5"
            })]
          }), (0, _jsxRuntime.jsx)("div", {
            className: "gif-grid",
            children: selected[5].map((clip, i) => (0, _jsxRuntime.jsx)(LazyLoopVideo, {
              src: `./${clip}`,
              ariaLabel: `${selected[0]} 动态片段 ${i + 1}`
            }, clip))
          })]
        }), group.id === 'threeD' && (0, _jsxRuntime.jsxs)("section", {
          className: "storyboard-output",
          children: [(0, _jsxRuntime.jsxs)("div", {
            className: "storyboard-heading",
            children: [(0, _jsxRuntime.jsx)("small", {
              children: "STORYBOARD FRAMES"
            }), (0, _jsxRuntime.jsx)("h4", {
              children: "\u5206\u955C\u5355\u56FE"
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            className: "storyboard-grid",
            children: [selected[5].map((frame, i) => (0, _jsxRuntime.jsxs)("button", {
              className: "storyboard-frame",
              onClick: () => setExpandedFrame({
                src: frame,
                index: i,
                title: selected[0]
              }),
              "aria-label": `放大查看 ${selected[0]} 分镜 ${i + 1}`,
              children: [(0, _jsxRuntime.jsx)("img", {
                src: `./${frame}`,
                alt: `${selected[0]} 分镜 ${i + 1}`
              }), (0, _jsxRuntime.jsx)("span", {
                children: String(i + 1).padStart(2, '0')
              })]
            }, frame)), selected[6] && (0, _jsxRuntime.jsxs)("figure", {
              className: "storyboard-motion",
              children: [(0, _jsxRuntime.jsx)(LazyLoopVideo, {
                src: `./${selected[6]}`,
                ariaLabel: `${selected[0]} POP 故事版`
              }), (0, _jsxRuntime.jsx)("span", {
                children: "POP STORYBOARD"
              })]
            })]
          })]
        }), (0, _jsxRuntime.jsxs)("nav", {
          children: [(0, _jsxRuntime.jsxs)("button", {
            disabled: selectedIndex <= 0,
            onClick: () => setSelected(group.items[selectedIndex - 1]),
            children: [(0, _jsxRuntime.jsx)(ArrowIcon, {
              direction: "left"
            }), " PREVIOUS"]
          }), (0, _jsxRuntime.jsxs)("button", {
            disabled: selectedIndex >= group.items.length - 1,
            onClick: () => setSelected(group.items[selectedIndex + 1]),
            children: ["NEXT ", (0, _jsxRuntime.jsx)(ArrowIcon, {
              direction: "right"
            })]
          })]
        })]
      }), expandedFrame && (0, _jsxRuntime.jsxs)("div", {
        className: "frame-lightbox",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "\u5206\u955C\u5927\u56FE\u9884\u89C8",
        onClick: () => setExpandedFrame(null),
        children: [(0, _jsxRuntime.jsx)("button", {
          onClick: () => setExpandedFrame(null),
          children: "CLOSE \xD7"
        }), (0, _jsxRuntime.jsxs)("figure", {
          onClick: e => e.stopPropagation(),
          children: [(0, _jsxRuntime.jsx)("img", {
            src: `./${expandedFrame.src}`,
            alt: `${expandedFrame.title} 分镜 ${expandedFrame.index + 1}`
          }), (0, _jsxRuntime.jsxs)("figcaption", {
            children: [expandedFrame.title, " / FRAME ", String(expandedFrame.index + 1).padStart(2, '0')]
          })]
        })]
      })]
    })]
  });
}
function Cavalry() {
  return (0, _jsxRuntime.jsxs)("section", {
    id: "cavalry",
    className: "section cavalry",
    children: [(0, _jsxRuntime.jsx)(SectionTitle, {
      index: "03",
      en: "CAVALRY LAB",
      cn: "\u8F6F\u4EF6\u7EC3\u4E60"
    }), (0, _jsxRuntime.jsx)("div", {
      className: "lab-intro",
      children: (0, _jsxRuntime.jsx)("span", {
        children: "GENERATIVE TYPE / PROCEDURAL MOTION / 2026"
      })
    }), (0, _jsxRuntime.jsx)("div", {
      className: "lab-grid",
      children: cavalry.map(([name, file], i) => (0, _jsxRuntime.jsxs)("figure", {
        children: [(0, _jsxRuntime.jsx)(LazyLoopVideo, {
          src: A + 'cavalry/' + file,
          ariaLabel: name
        }), (0, _jsxRuntime.jsxs)("figcaption", {
          children: [(0, _jsxRuntime.jsx)("b", {
            children: name
          }), (0, _jsxRuntime.jsxs)("span", {
            children: [String(i + 1).padStart(2, '0'), " / CAVALRY"]
          })]
        })]
      }, file))
    })]
  });
}
function About() {
  return (0, _jsxRuntime.jsxs)("section", {
    id: "about",
    className: "section about",
    children: [(0, _jsxRuntime.jsx)(SectionTitle, {
      index: "04",
      en: "WORK EXPERIENCE",
      cn: "\u4E2A\u4EBA\u5C65\u5386"
    }), (0, _jsxRuntime.jsxs)("div", {
      className: "about-top",
      children: [(0, _jsxRuntime.jsx)("figure", {
        className: "portrait",
        children: (0, _jsxRuntime.jsx)("img", {
          src: A + 'portrait.webp',
          alt: "\u4E2A\u4EBA\u5F62\u8C61",
          loading: "lazy",
          decoding: "async"
        })
      }), (0, _jsxRuntime.jsxs)("div", {
        className: "bio",
        children: [(0, _jsxRuntime.jsx)("small", {
          children: "ABOUT ME"
        }), (0, _jsxRuntime.jsx)("h3", {
          children: "\u8D44\u6DF1\u52A8\u6001\u8BBE\u8BA1\u5E08"
        }), (0, _jsxRuntime.jsxs)("p", {
          children: ["7\u5E74\u5546\u4E1A\u9879\u76EE\u8BBE\u8BA1\u7ECF\u9A8C", (0, _jsxRuntime.jsx)("br", {}), "\u4E13\u6CE8\u54C1\u724C\u52A8\u6001\u89C6\u89C9\u3001\u521B\u610F\u89C6\u9891\u4E0E Motion Graphics"]
        }), (0, _jsxRuntime.jsxs)("div", {
          className: "facts",
          children: [(0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u5DE5\u4F5C\u7ECF\u5386"
            }), (0, _jsxRuntime.jsx)("b", {
              children: "\u5317\u4EAC\u534E\u97EC\u6587\u5316\u4F20\u5A92"
            }), (0, _jsxRuntime.jsx)("small", {
              className: "fact-detail",
              children: "\u52A8\u6001\u8BBE\u8BA1\u5E08\xA0\xA0\uFF5C\xA0\xA02019\u20132022 /\xA0\xA0\u5BFC\u6F14 / \u9879\u76EE\u7ECF\u7406\xA0\xA0\uFF5C\xA0\xA02022\u2013\u81F3\u4ECA"
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u670D\u52A1\u54C1\u724C"
            }), (0, _jsxRuntime.jsx)("b", {
              children: "\u5FEB\u624B / \u4EAC\u4E1C / \u5C0F\u7C73 / 361\xB0 / \u7279\u6B65 / \u5FAE\u8F6F\u5C0F\u51B0 / \u4EBA\u6C11\u65E5\u62A5 / \u827E\u7F8E\u7279 /"
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u8F6F\u4EF6\u80FD\u529B"
            }), (0, _jsxRuntime.jsx)("b", {
              children: "AE / AI / Cavalry\uFF08\u5B66\u4E60\u4E2D\uFF09/ Ps / Pr"
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u6BD5\u4E1A\u9662\u6821"
            }), (0, _jsxRuntime.jsx)("b", {
              children: "\u90D1\u5DDE\u8F7B\u5DE5\u4E1A \xB7 \u6570\u5A92\u4E13\u4E1A"
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u624B\u673A"
            }), (0, _jsxRuntime.jsx)("a", {
              href: "tel:15935755356",
              children: "159 3575 5356"
            })]
          }), (0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u90AE\u7BB1"
            }), (0, _jsxRuntime.jsx)("a", {
              href: "mailto:3072497615@qq.com",
              children: "3072497615@qq.com"
            })]
          })]
        })]
      })]
    }), (0, _jsxRuntime.jsx)("footer", {
      children: (0, _jsxRuntime.jsxs)("a", {
        className: "back",
        href: "#top",
        children: ["BACK TO TOP ", (0, _jsxRuntime.jsx)(ArrowIcon, {
          direction: "top"
        })]
      })
    })]
  });
}
function useScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const textSelector = '.section-title h2,.section-title p,.work-head h3,.work-head p,.project h4,.project-type,.lab-grid figcaption,.project-page header,.project-story article,.series-clips>div:first-child,.gif-output>div:first-child';
    const mediaSelector = '.showreel-single,.project,.lab-grid figure,.project-video,.series-main-video,.gif-grid video,.storyboard-frame,.storyboard-motion';
    const resumeSelector = '.about .bio h3,.about .bio>p,.about .facts div';
    const allSelector = `${textSelector},${mediaSelector},${resumeSelector}`;
    const play = el => {
      if (el.dataset.revealPlayed) return;
      el.dataset.revealPlayed = 'true';
      const media = el.matches(mediaSelector);
      const delay = Number(el.dataset.revealDelay || 0);
      el.animate(media ? [{
        opacity: 0,
        transform: 'translateY(46px) scale(.97)',
        filter: 'blur(6px)'
      }, {
        opacity: 1,
        transform: 'translateY(0) scale(1)',
        filter: 'blur(0)'
      }] : [{
        opacity: 0,
        transform: 'translateY(38px)',
        filter: 'blur(4px)'
      }, {
        opacity: 1,
        transform: 'translateY(0)',
        filter: 'blur(0)'
      }], {
        duration: 1050,
        delay,
        easing: 'cubic-bezier(.16,1,.3,1)',
        fill: 'none'
      });
      observer.unobserve(el);
    };
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      requestAnimationFrame(() => play(entry.target));
    }), {
      threshold: .06,
      rootMargin: '0px 0px -4% 0px'
    });
    const register = (root = document) => {
      root.querySelectorAll?.(allSelector).forEach((el, index) => {
        if (el.dataset.revealReady) return;
        el.dataset.revealReady = 'true';
        el.dataset.revealDelay = String(Math.min(index % 6 * 70, 350));
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) requestAnimationFrame(() => play(el));else observer.observe(el);
      });
    };
    register();
    const mutations = new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType === 1) {
        if (node.matches?.(allSelector)) register(node.parentElement || document);else register(node);
      }
    })));
    mutations.observe(document.getElementById('root'), {
      childList: true,
      subtree: true
    });
    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);
}
function App() {
  useScrollReveal();
  return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: (0, _jsxRuntime.jsxs)("main", {
      children: [(0, _jsxRuntime.jsx)(Header, {}), (0, _jsxRuntime.jsx)(Hero, {}), (0, _jsxRuntime.jsx)(Showreel, {}), (0, _jsxRuntime.jsx)(Works, {}), (0, _jsxRuntime.jsx)(Cavalry, {}), (0, _jsxRuntime.jsx)(About, {})]
    })
  });
}
ReactDOM.render((0, _jsxRuntime.jsx)(App, {}), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWFjdCIsIkEiLCJjb21wcmVzc2VkTWFpblZpZGVvcyIsInByb2plY3RHcm91cCIsImlkIiwidGl0bGUiLCJlbiIsInRhZyIsIm5hbWVzIiwiaXRlbXMiLCJtYXAiLCJmaWxlIiwiaSIsInJlcGxhY2UiLCJTdHJpbmciLCJwYWRTdGFydCIsInR3b0RQcm9qZWN0IiwibmFtZSIsImNsaXBDb3VudCIsImluZGV4IiwiY2xpcEJhc2UiLCJjbGlwV29yZCIsImRpc3BsYXlOYW1lIiwicm9vdCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJ0d29ESXRlbXMiLCJ1bmRlZmluZWQiLCJjb3VudCIsInhpYW9rYW5nU2VyaWVzIiwidmlkZW8iLCJwb3N0ZXIiLCJjbGlwcyIsInhpYW9rYW5nSXRlbSIsInB1c2giLCJzdG9yeWJvYXJkRnJhbWVzIiwiZm9sZGVyIiwiZ3JvdXBzIiwiY2F2YWxyeSIsInByb2plY3ROYXJyYXRpdmVzIiwidHdvRCIsInRocmVlRCIsInRyYWluaW5nIiwicHJvamVjdERldGFpbHMiLCJvdmVydmlldyIsInJvbGUiLCJjaGFsbGVuZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJjb3ZlckZpbGVzIiwic3BsaXQiLCJDaXJjdWxhckdhbGxlcnkiLCJiZW5kIiwiYm9yZGVyUmFkaXVzIiwic2Nyb2xsU3BlZWQiLCJzY3JvbGxFYXNlIiwiY29udGFpbmVyIiwiY2FyZHMiLCJlbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJ0YXJnZXQiLCJwb2ludGVyIiwiZG93biIsInN0YXJ0IiwicG9zaXRpb24iLCJtZXRyaWNzIiwid2lkdGgiLCJjYXJkIiwic3BhY2UiLCJ0b3RhbCIsInJhZiIsImxhc3QiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImhvdmVyaW5nIiwicmVzaXplIiwiY2xpZW50V2lkdGgiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWduIiwiZGVsdGFZIiwiZGVsdGFYIiwiY2xpZW50WCIsInNldFBvaW50ZXJDYXB0dXJlIiwicG9pbnRlcklkIiwibW92ZSIsInVwIiwicm91bmQiLCJ0aWNrIiwiZHQiLCJoYWxmIiwiZm9yRWFjaCIsIngiLCJuIiwieSIsImFicyIsInJvdGF0ZSIsInNjYWxlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiekluZGV4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfanN4UnVudGltZSIsImpzeHMiLCJjbGFzc05hbWUiLCJyZWYiLCJjaGlsZHJlbiIsImpzeCIsIm5vZGUiLCJzcmMiLCJhbHQiLCJIZWFkZXIiLCJvcGVuIiwic2V0T3BlbiIsImxpbmtzIiwib25DbGljayIsInQiLCJocmVmIiwiQXJyb3dJY29uIiwiZGlyZWN0aW9uIiwidHJpbSIsInZpZXdCb3giLCJmb2N1c2FibGUiLCJkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiTGF6eUxvb3BWaWRlbyIsImFyaWFMYWJlbCIsImxvYWRlZCIsInNldExvYWRlZCIsIndpbmRvdyIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInBsYXkiLCJjYXRjaCIsInBhdXNlIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJkaXNjb25uZWN0IiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiLCJhdXRvUGxheSIsInByZWxvYWQiLCJIZXJvIiwiaGVybyIsInRhcmdldFRpbWUiLCJjdXJyZW50VGltZSIsInBvaW50ZXJBY3RpdmUiLCJ0cmFja1BvaW50ZXIiLCJOdW1iZXIiLCJpc0Zpbml0ZSIsImR1cmF0aW9uIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImR4IiwibGVmdCIsImR5IiwiY2xpZW50WSIsInRvcCIsImhlaWdodCIsImRpc3RhbmNlIiwiaHlwb3QiLCJhbmdsZSIsImF0YW4yIiwiUEkiLCJlbnRlciIsImxlYXZlIiwicmVhZHlTdGF0ZSIsImZldGNoUHJpb3JpdHkiLCJTZWN0aW9uVGl0bGUiLCJjbiIsIlNob3dyZWVsIiwidiIsInBhdXNlZCIsIldvcmtzIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImV4cGFuZGVkRnJhbWUiLCJzZXRFeHBhbmRlZEZyYW1lIiwiZG9jdW1lbnQiLCJib2R5Iiwib3ZlcmZsb3ciLCJjbG9zZSIsImtleSIsImdyb3VwIiwiZmluZCIsImciLCJpbmNsdWRlcyIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwibmFycmF0aXZlIiwiZGV0YWlsIiwic2VjdGlvbiIsInNlY3Rpb25JbmRleCIsImNvbG9yIiwiaXQiLCJjb250ZW50IiwiRnJhZ21lbnQiLCJsb2FkaW5nIiwiZGVjb2RpbmciLCJjb250cm9scyIsImVwaXNvZGUiLCJlcGlzb2RlSW5kZXgiLCJjbGlwIiwiZnJhbWUiLCJkaXNhYmxlZCIsInN0b3BQcm9wYWdhdGlvbiIsIkNhdmFscnkiLCJBYm91dCIsInVzZVNjcm9sbFJldmVhbCIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwidGV4dFNlbGVjdG9yIiwibWVkaWFTZWxlY3RvciIsInJlc3VtZVNlbGVjdG9yIiwiYWxsU2VsZWN0b3IiLCJkYXRhc2V0IiwicmV2ZWFsUGxheWVkIiwibWVkaWEiLCJkZWxheSIsInJldmVhbERlbGF5IiwiYW5pbWF0ZSIsImZpbHRlciIsImVhc2luZyIsInVub2JzZXJ2ZSIsInJlZ2lzdGVyIiwicXVlcnlTZWxlY3RvckFsbCIsInJldmVhbFJlYWR5IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJtdXRhdGlvbnMiLCJNdXRhdGlvbk9ic2VydmVyIiwicmVjb3JkcyIsInJlY29yZCIsImFkZGVkTm9kZXMiLCJub2RlVHlwZSIsInBhcmVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTGlzdCIsInN1YnRyZWUiLCJBcHAiLCJSZWFjdERPTSIsInJlbmRlciJdLCJzb3VyY2VzIjpbInN0YW5kYWxvbmUuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gPSBSZWFjdFxuXG5jb25zdCBBID0gJy4vcHVibGljL2Fzc2V0cy8nXG5cbmNvbnN0IGNvbXByZXNzZWRNYWluVmlkZW9zID0ge1xuICAnVk9MTEdBUyBYIOWHr+aWr+WTiOaelyc6J1ZPTExHQVMgWCDlh6/mlq/lk4jmnpdfMS5tcDQnLFxuICAnVk9MTEdBUyBYIOiLj+eCs+a3uyc6J1ZPTExHQVMgWCDoi4/ngrPmt7subXA0P3Y9MjAyNjA5MjctYXVkaW8nLFxuICAn5b+r5omLLeWGheWuoyc6J+W/q+aJi+ejgeWKm+W8leaTjjIwMjVDTlkubXA0JyxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOaKl+aImOiDnOWIqeWFq+WNgeWRqOW5tOa8q+eUuyc6J+S6uuawkeaXpeaKpeKAlOKAlOaKl+aImOiDnOWIqeWFq+WNgeWRqOW5tOa8q+eUuzEubXA0JyxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tyc6J+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6t18xLm1wNCcsXG4gICfkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcyJzon5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3Ml8xLm1wNCcsXG4gICfkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurczJzon5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3M18xLm1wNCcsXG4gICfkurrmsJHml6XmiqXigJTigJTkuK3lm73mraPlvZPmva4nOifkurrmsJHml6XmiqXigJTigJTkuK3lm73mraPlvZPmva5fMS5tcDQnLFxuICAn5aSp54yr5pe26KOF5ZGoJzon5aSp54yr5pe26KOF5ZGoXzEubXA0JyxcbiAgJ+ermemFt+WFseWImyc6J+ermemFt+WFseWIm18xLm1wNCdcbn1cblxuY29uc3QgcHJvamVjdEdyb3VwID0gKGlkLHRpdGxlLGVuLHRhZyxuYW1lcykgPT4gKHtpZCx0aXRsZSxlbixpdGVtczpuYW1lcy5tYXAoKGZpbGUsaSk9PltcbiAgZmlsZS5yZXBsYWNlKC9cXC5tcDQkL2ksJycpLFxuICBpZD09PSd0aHJlZUQnPyfliY3mnJ/nrZbliJLjgIHliIbplZzmnoTmgJ3kuI7liqjnlLvpooTliarnmoTor6bnu4blhoXlrrnlvoXooaXlhYXjgIInOmlkPT09J3R3b0QnPyfkuoznu7TliqjmgIHliLbkvZzljLrpl7TkuI7kuKrkurrotJ/otKPlhoXlrrnlvoXooaXlhYXjgIInOifkuKrkurrliqjmgIHnu4PkuaDkuI7op4bop4nlrp7pqozjgIInLFxuICB0YWcsXG4gIGDllYbkuJrpobnnm64vJHtpZD09PSd0cmFpbmluZyc/J+S4muS9meiuree7gyc6dGl0bGV9LyR7ZmlsZX1gLFxuICBgcHJvamVjdC1wb3N0ZXJzLyR7aWQ9PT0ndHdvRCc/JzJkJzppZD09PSd0aHJlZUQnPyczZCc6J2xhYid9LSR7U3RyaW5nKGkrMSkucGFkU3RhcnQoMiwnMCcpfS5qcGdgXG5dKX0pXG5cbmNvbnN0IHR3b0RQcm9qZWN0ID0gKG5hbWUsIGNsaXBDb3VudCwgaW5kZXgsIGNsaXBCYXNlPW5hbWUsIGNsaXBXb3JkPSfniYfmrrUnLCBkaXNwbGF5TmFtZT1uYW1lKSA9PiB7XG4gIGNvbnN0IHJvb3QgPSBg5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri8ke25hbWV9YFxuICByZXR1cm4gW1xuICAgIGRpc3BsYXlOYW1lLFxuICAgICfkuoznu7TliqjmgIHliLbkvZzljLrpl7TkuI7kuKrkurrotJ/otKPlhoXlrrnlvoXooaXlhYXjgIInLFxuICAgICcyRCBNT1RJT04nLFxuICAgIGAke3Jvb3R9LyR7Y29tcHJlc3NlZE1haW5WaWRlb3NbbmFtZV18fGAke25hbWV9Lm1wNGB9YCxcbiAgICBgcHJvamVjdC1wb3N0ZXJzLzJkLW9yZGVyLSR7U3RyaW5nKGluZGV4KS5wYWRTdGFydCgyLCcwJyl9LmpwZ2AsXG4gICAgQXJyYXkuZnJvbSh7bGVuZ3RoOmNsaXBDb3VudH0sKF8saSk9PmAke3Jvb3R9LyR7Y2xpcEJhc2V9JHtjbGlwV29yZH0ke2krMX0ubXA0YClcbiAgXVxufVxuXG5jb25zdCB0d29ESXRlbXMgPSBbXG4gIFsnMzYxwrDlk4HniYzlrqPkvKDml6UnLDRdLFxuICBbJzIwMjTlv6vmiYvno4HlipvlpKfkvJonLDJdLFxuICBbJ+ermemFt+WFseWImycsM10sXG4gIFsn5Lqs5LicWOiNieiOk+mfs+S5kOiKgicsM10sXG4gIFsn5Lqs5Lic5aSW5Y2WWOeMqueMquS+oCcsNV0sXG4gIFsn5bCP57qi5Lmm5LmQ6ZifJyw1LHVuZGVmaW5lZCx1bmRlZmluZWQsJ+Wwj+e6ouS5puOAkOWQrOeOsOWcuuS4jem4veWAoeiuruOAkSddLFxuICBbJ+eJueatpVgtU29mYSBGb2FtJywyXSxcbiAgWyfoib7nvo7nibnlk4HniYznhJXmlrDlj5HluIPkvJonLDRdLFxuICBbJ+W+rui9r+Wwj+WGsFjnibnmraUnLDNdLFxuICBbJ0JPVFRPTlMgQWlyIOS6p+WTgeWuo+S8oOinhumikScsMl0sXG4gIFsnVUlOUFVTIExPR0/mvJTnu44nLDJdLFxuICBbJ+S6rOS4nC3nnJ/mlrDor53lpKflhpLpmaknLDIsdW5kZWZpbmVkLHVuZGVmaW5lZCwn5Lqs5LicLeecn+W/g+ivneWkp+WGkumZqSddLFxuICBbJ+W/q+aJi+agoeaLm+eJh+WktCcsNCwn5b+r5omL5qCh5oub54mH5aS0Jywn54mH5aS0J10sXG4gIFsn5b+r5omLLeWGheWuoycsMix1bmRlZmluZWQsdW5kZWZpbmVkLCflv6vmiYvno4HlipvlvJXmk44yMDI1Q05ZJ10sXG4gIFsn5b+r5omL5bm057uI5YaF5a6j5oC757uTJywyXSxcbiAgWydWT0xMR0FTIFgg5Yev5pav5ZOI5p6XJywyXSxcbiAgWydWT0xMR0FTIFgg6IuP54Kz5re7JywyXSxcbiAgWyflsI/nsbPnp5HmioDlh7rnjrAnLDJdLFxuICBbJ+WkqeeMq+aXtuijheWRqCcsNF0sXG4gIFsn5reY5a6d6YCg54mp6IqCJyw0XSxcbiAgWyfmlrnovr7lvovluIjkuovliqHmiYAnLDVdLFxuICBbJ+S6uuawkeaXpeaKpeKAlOKAlOaIkeeahOWuneiXj+WutuS5oScsMl0sXG4gIFsn5Lq65rCR5pel5oql4oCU4oCU5Lit5Zu95q2j5b2T5r2uJywyXSxcbiAgWyfkurrmsJHml6XmiqXigJTigJTmipfmiJjog5zliKnlhavljYHlkajlubTmvKvnlLsnLDJdXG5dLm1hcCgoW25hbWUsY291bnQsY2xpcEJhc2UsY2xpcFdvcmQsZGlzcGxheU5hbWVdLGkpPT50d29EUHJvamVjdChuYW1lLGNvdW50LGkrMSxjbGlwQmFzZSxjbGlwV29yZCxkaXNwbGF5TmFtZSkpXG5cbmNvbnN0IHhpYW9rYW5nU2VyaWVzID0gW1xuICB7dGl0bGU6J+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tycsdmlkZW86J+WVhuS4mumhueebri/kuoznu7TliLbkvZzpobnnm64v5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3L+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6t18xLm1wNCcscG9zdGVyOidwcm9qZWN0LXBvc3RlcnMvMmQtb3JkZXItMjUuanBnJyxjbGlwczpbJ+WVhuS4mumhueebri/kuoznu7TliLbkvZzpobnnm64v5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3L+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6t+eJh+autTEubXA0Jywn5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcv5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq354mH5q61Mi5tcDQnLCfllYbkuJrpobnnm64v5LqM57u05Yi25L2c6aG555uuL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6ty/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurfniYfmrrUzLm1wNCddfSxcbiAge3RpdGxlOifkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcyJyx2aWRlbzon5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcyL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzJfMS5tcDQnLHBvc3RlcjoncHJvamVjdC1wb3N0ZXJzLzJkLW9yZGVyLTI2LmpwZycsY2xpcHM6WyfllYbkuJrpobnnm64v5LqM57u05Yi25L2c6aG555uuL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzIv5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq354mH5q61MS5tcDQnXX0sXG4gIHt0aXRsZTon5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3MycsdmlkZW86J+WVhuS4mumhueebri/kuoznu7TliLbkvZzpobnnm64v5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3My/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurczXzEubXA0Jyxwb3N0ZXI6J3Byb2plY3QtcG9zdGVycy8yZC1vcmRlci0yNy5qcGcnLGNsaXBzOlsn5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurczL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzPniYfmrrUxLm1wNCddfVxuXVxuY29uc3QgeGlhb2thbmdJdGVtID0gdHdvRFByb2plY3QoJ+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tycsMyx0d29ESXRlbXMubGVuZ3RoKzEpXG54aWFva2FuZ0l0ZW1bMF0gPSAn5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq357O75YiXJ1xueGlhb2thbmdJdGVtWzddID0geGlhb2thbmdTZXJpZXNcbnR3b0RJdGVtcy5wdXNoKHhpYW9rYW5nSXRlbSlcblxuY29uc3Qgc3Rvcnlib2FyZEZyYW1lcyA9IChmb2xkZXIsY291bnQpID0+IEFycmF5LmZyb20oe2xlbmd0aDpjb3VudH0sKF8saSk9PmDllYbkuJrpobnnm64v5LiJ57u05YmN5pyf562W5YiS6aG555uuLyR7Zm9sZGVyfS8ke2krMX0ucG5nYClcblxuY29uc3QgZ3JvdXBzID0gW1xuICB7aWQ6J3R3b0QnLHRpdGxlOifkuoznu7TliLbkvZzpobnnm64nLGVuOicyRCBQUk9EVUNUSU9OJyxpdGVtczp0d29ESXRlbXN9LFxuICB7aWQ6J3RocmVlRCcsdGl0bGU6J+S4iee7tOWJjeacn+etluWIkumhueebricsZW46JzNEIFBSRS1QUk9EVUNUSU9OJyxpdGVtczpbXG4gICAgWyfms6Hms6HnjpvniblY5Lic5pys55S16L2m54G15oKJJywn5YmN5pyf562W5YiS44CB5YiG6ZWc5p6E5oCd5LiO5Yqo55S76aKE5Ymq55qE6K+m57uG5YaF5a655b6F6KGl5YWF44CCJywnM0QgUExBTk5JTkcnLCfllYbkuJrpobnnm64v5LiJ57u05YmN5pyf562W5YiS6aG555uuLzEu5rOh5rOh546b54m5WOS4nOacrOeUtei9pueBteaCiS8xLuazoeazoeeOm+eJuVjkuJzmnKznlLXovabngbXmgokubXA0JywncHJvamVjdC1wb3N0ZXJzLzNkLTAxLmpwZycsc3Rvcnlib2FyZEZyYW1lcygnMS7ms6Hms6HnjpvniblY5Lic5pys55S16L2m54G15oKJJywxMSksJ+WVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vMS7ms6Hms6HnjpvniblY5Lic5pys55S16L2m54G15oKJL1BPUOaVheS6i+eJiCAubXA0J10sXG4gICAgWyfmr5Tkuprov6rmtbfosbkwNkdUIHgg5p6B5ZOB6aOe6L2mJywn5YmN5pyf562W5YiS5LiO5YiG6ZWc5p6E5oCd55qE6K+m57uG5YaF5a655b6F6KGl5YWF44CCJywnM0QgUExBTk5JTkcnLCfllYbkuJrpobnnm64v5LiJ57u05YmN5pyf562W5YiS6aG555uuLzIu5q+U5Lqa6L+q5rW36LG5R1QwNiBY5p6B5ZOB6aOe6L2mLzIu5q+U5Lqa6L+q5rW36LG5R1QwNljmnoHlk4Hpo57ovaYubXA0JywncHJvamVjdC1wb3N0ZXJzLzNkLTAyLmpwZycsc3Rvcnlib2FyZEZyYW1lcygnMi7mr5Tkuprov6rmtbfosblHVDA2IFjmnoHlk4Hpo57ovaYnLDEwKV0sXG4gICAgWyfmsZ/oi4/ljavop4boioLnm67jgJDkuK3ljY7kuabpmaLjgJEnLCfliY3mnJ/nrZbliJLkuI7liIbplZzmnoTmgJ3nmoTor6bnu4blhoXlrrnlvoXooaXlhYXjgIInLCczRCBQTEFOTklORycsJ+WVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vMy7msZ/oi4/ljavop4boioLnm67jgJDkuK3ljY7kuabpmaLjgJEvMy7msZ/oi4/ljavop4boioLnm67jgJDkuK3ljY7kuabpmaLjgJEubXA0JywncHJvamVjdC1wb3N0ZXJzLzNkLTAzLmpwZycsc3Rvcnlib2FyZEZyYW1lcygnMy7msZ/oi4/ljavop4boioLnm67jgJDkuK3ljY7kuabpmaLjgJEnLDEwKV0sXG4gICAgWyflronouI9QZzfnp5HmioDot5HpnosnLCfliY3mnJ/nrZbliJLkuI7liIbplZzmnoTmgJ3nmoTor6bnu4blhoXlrrnlvoXooaXlhYXjgIInLCczRCBQTEFOTklORycsJ+WVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vNC7lronouI9QZzfnp5HmioDot5HpnosvNC7lronouI9QZzfnp5HmioDot5HpnosubXA0JywncHJvamVjdC1wb3N0ZXJzLzNkLTA0LmpwZycsc3Rvcnlib2FyZEZyYW1lcygnNC7lronouI9QZzfnp5HmioDot5HpnosnLDExKV0sXG4gICAgWydIVUFXRUkg6bi/6JKZ55Sf5oCBJywn5YmN5pyf562W5YiS5LiO5YiG6ZWc5p6E5oCd55qE6K+m57uG5YaF5a655b6F6KGl5YWF44CCJywnM0QgUExBTk5JTkcnLCfllYbkuJrpobnnm64v5LiJ57u05YmN5pyf562W5YiS6aG555uuLzUuSFVBV0VJIOm4v+iSmeeUn+aAgS81LkhVQVdFSSDpuL/okpnnlJ/mgIEubXA0JywncHJvamVjdC1wb3N0ZXJzLzNkLTA1LmpwZycsc3Rvcnlib2FyZEZyYW1lcygnNS5IVUFXRUkg6bi/6JKZ55Sf5oCBJywxMyldXG4gIF19LFxuICBwcm9qZWN0R3JvdXAoJ3RyYWluaW5nJywn5YW25a6D5Yqo5oCBJywnT1RIRVIgTU9USU9OJywnRVhQRVJJTUVOVCcsWydsb2dv5a2f6I+y5pav6aOO5qC8Lm1wNCcsJ05pa2UtLm1wNCcsJ+eIseW/gy5tcDQnLCfkvr/liKlsb2dv5ou86LS06aOOLm1wNCcsJ+epv+airS5tcDQnLCfliqjooaXmj5Lku7borq3nu4MubXA0Jywn5Yqo5oCB6K6t57uDLm1wNCcsJ+WFrOWPuOS9nOWTgeeJh+WktOWuo+S8oDEubXA0Jywn5YWs5Y+45L2c5ZOB54mH5aS05a6j5LygMi5tcDQnLCfnlr7po44gLm1wNCcsJ+iKguWlj+e7g+S5oC5tcDQnLCfmlrDlubQubXA0Jywn6Iqx55OjLm1wNCcsJ+iLueaenC5tcDQnLCfml4vovazliqjmgIHorq3nu4MubXA0J10pXG5dXG5cbmNvbnN0IGNhdmFscnkgPSBbXG4gIFsnQk9PTEVBTicsICfluIPlsJTov5DnrpcubXA0J10sIFsnTU9USU9OIFRFU1QnLCAn5Yqo5oCB5rWL6K+VLm1wNCddLCBbJ1NJTiBNT1RJT04nLCAn5pa55Z2Xc2lu6L+Q5YqoLm1wNCddLFxuICBbJ0ZMT1dFUicsICfoirHmnLUubXA0J10sIFsnRkxVSUQnLCAn5rWB5L2TLm1wNCddLCBbJ0NPTE9SIFRFU1QnLCAn6Imy5b2p5rWL6K+VLm1wNCddLFxuICBbJ0lNQUdFIEZJRUxEJywgJ+WbvueJh+aJqeaVoy5tcDQnXSwgWydHUklEIFdBVkUnLCAn572R5qC86ZqP5pa55Z2X5rOi5YqoLm1wNCddLCBbJ1RZUEUgQlJFQUsnLCAn5paH5a2X5pWj5byALm1wNCddLFxuICBbJ1RZUEUgUk9UQVRFJywgJ+aWh+Wtl+aXi+i9rCAubXA0J10sIFsnVFlQRSBST1RBVEUgMDInLCAn5paH5a2X5peL6L2sMi5tcDQnXSwgWydSSVBQTEUnLCAn5ZyG5b2i5omp5pWjLm1wNCddXG5dXG5cbmNvbnN0IHByb2plY3ROYXJyYXRpdmVzID0ge1xuICB0d29EOiBbJ+WbtOe7leWTgeeJjOS8oOaSreWGheWuueWujOaIkOS6jOe7tOWKqOaAgeiuvuiuoe+8jOiuqeS/oeaBr+OAgeiKguWlj+S4juinhuiniemjjuagvOS/neaMgeS4gOiHtOOAgicsJ+W9k+WJjeWFiOWxleekuumhueebruaIkOeJh+OAguWQjue7reWwhuWcqOi/memHjOihpeWFheWFt+S9k+WItuS9nOWMuumXtOOAgemVnOWktOaLhuino+WSjOS4quS6uui0n+i0o+WGheWuueOAgiddLFxuICB0aHJlZUQ6IFsn5LiJ57u06aG555uu55qE5YmN5pyf562W5YiS5LiO6KeG6KeJ6aKE5ryU77yM55So5LqO5piO56Gu5Yib5oSP5pa55ZCR44CB6ZWc5aS057uT5p6E5ZKM5Yi25L2c6Lev5b6E44CCJywn5b2T5YmN5YWI5bGV56S66aG555uu6KeG6aKR44CC5ZCO57ut5bCG5Zyo6L+Z6YeM6KGl5YWF5YmN5pyf5YiG6ZWc44CB5Yqo55S76aKE5Ymq44CB5Y+C6ICD5pW055CG5ZKM5pa55qGI5o6o6L+b6L+H56iL44CCJ10sXG4gIHRyYWluaW5nOiBbJ+W3peS9nOS5i+WklueahOWKqOaAgee7g+S5oOS4juinhuinieWunumqjO+8jOeUqOS6jua1i+ivleaWsOeahOiKguWlj+OAgeWbvuW9ouaWueazleWSjOi9r+S7tuiDveWKm+OAgicsJ+S7juWNleS4gOi/kOWKqOinhOW+i+aIluinhuinieS4u+mimOWHuuWPke+8jOmAmui/h+efreWRqOacn+e7g+S5oOWujOaIkOWKqOaAgee7k+aenOOAgiddXG59XG5cbmNvbnN0IHByb2plY3REZXRhaWxzID0ge1xuICAnMzYxwrDlk4HniYzlrqPkvKDml6UnOiB7XG4gICAgb3ZlcnZpZXc6J+S4jiBVSURTdHVkaW8g5ZCI5L2c77yM5Li6IDM2McKw5ZOB54mM44CM5YeP56Kz5Yqg6YCf44CN5Yi25L2c5qaC5b+15a6j5Lyg54mH44CC5b2x54mH5Zu057uV5ZOB54mM5Y+R5biD55qEIENRVCDnorPkuLTnlYznp5HmioDvvIzpgJrov4flvq7op4LmnZDmlpnjgIHnp5HmioDop4bop4nkuI7kuqflk4HkuYvpl7TnmoTovazmjaLvvIzlsIbmir3osaHnmoTmnZDmlpnmioDmnK/ovazljJbkuLrnm7Top4LnmoTliqjmgIHooajovr7jgIInLFxuICAgIHJvbGU6J+i0n+i0o+mhueebruWQjuacn+WKqOaAgeWItuS9nOWvueaOpeOAgTI2cyDlkI4gTW90aW9uIERlc2lnbiDlj4rmnIDnu4jmiJDniYfliarovpHjgILlnKjml6Llrprnvo7mnK/kuI7kuInnu7TotYTkuqfln7rnoYDkuIrvvIzlrozmiJDplZzlpLTooZTmjqXjgIHliqjmgIHlm77lvaLjgIHovazlnLrlj4roioLlpY/orr7orqHvvIzlubbnu5/kuIDlvbHniYfliY3lkI7mrrXnmoTliqjmgIHor63oqIDjgIInLFxuICAgIGNoYWxsZW5nZTon5ZCO5Y2K5q615raJ5Y+K5b6u6KeC5p2Q6LSo44CB56eR5oqA5L+h5oGv5LiO5Lqn5ZOB5bGV56S6562J5LiN5ZCM6KeG6KeJ5bC65bqm77yM6Zq+54K55Zyo5LqO6YG/5YWN6ZWc5aS05oiQ5Li65Y2V57qv55qE57Sg5p2Q5ou85o6l44CC6YCa6L+H5Yqo5Yq/5bu257ut44CB5b2i5oCB5YWz6IGU5LiO6IqC5aWP5o6n5Yi25Liy6IGU5LiN5ZCM5Zy65pmv77yM5L2/5L+h5oGv5pyA57uI55Sx5oqA5pyv5oCn6IO944CB5Lqn5ZOB5Yiw5ZOB54mM6Ieq54S25pS25p2f44CCJ1xuICB9LFxuICAnMjAyNOW/q+aJi+ejgeWKm+Wkp+S8mic6IHtcbiAgICBvdmVydmlldzon5Li6IDIwMjQg5b+r5omL56OB5Yqb5aSn5Lya5Yi25L2c5aSn5Lya6KeG6KeJ5b2x54mH44CC5pys5bGK5aSn5Lya5Lul44CM5pm66IO957uP6JCl44CN5Li65Li76aKY77yM5pW05L2T6KeG6KeJ6YCa6L+H5oyB57ut5rWB5Yqo44CB5bu25bGV55qE5Yqo5oCB6K+t6KiA77yM5Lyg6YCS6L+e5o6l44CB5aKe6ZW/5LiO5pm66IO957uP6JCl55qE5qaC5b+144CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYcgNDZzIOS5i+WQjueahOWFqOmDqCBNb3Rpb24gRGVzaWdu44CC576O5pyv5LyZ5Ly05a6M5oiQ5YWz6ZSu6KeG6KeJ5LiO6aOO5qC86K6+5a6a77yM5oiR5ZyoIEFFIOS4remHjeaWsOaLhuino+WSjOaQreW7uuinhuinieaViOaenO+8jOiuqeWOn+acrOeahOmdmeaAgeiuvuiuoeecn+ato+i9rOWMluaIkOWPr+S7peaMgee7rei/kOWKqOeahOWKqOaAgeezu+e7n+OAgicsXG4gICAgY2hhbGxlbmdlOifmnIDlpKfnmoTmjJHmiJjmmK/otK/nqb/lkI7ljYrmrrXnmoTmqKrlkJHmtYHliqjmi5blsL7jgILkuLrkuobpgb/lhY3mm7Lnur/ov5Dliqjov4fkuo7mnLrmorDvvIzmiJHnoJTnqbblubbmkK3lu7rkuobln7rkuo4gU2luIOWHveaVsOS4jiBFeHByZXNzaW9uIOeahOWKqOaAgeaOp+WItu+8jOmAmui/h+mikeeOh+OAgeaMr+W5heS4juebuOS9jeeahOe7hOWQiO+8jOiuqeWkp+mHj+absue6v+WcqOaMgee7reaoquenu+eahOWQjOaXtuS/neaMgeiHqueEtuOAgemUmeiQveeahOa1geWKqOaEn++8jOS5n+iuqeaViOaenOS7juaJiyBLIOWKqOeUu+WPmOaIkOS4gOWll+abtOeos+WumuOAgeWPr+aOp+eahOWKqOaAgemAu+i+keOAgidcbiAgfSxcbiAgJ+ermemFt+WFseWImyc6IHtcbiAgICBvdmVydmlldzon5Li6IDIwMjIg56uZ6YW35aSn5Lya5Yi25L2c5aSn5Lya5a6j5Lyg54mH44CC6YCa6L+H5LiN5pat5Y+Y5YyW44CB6J6N5ZCI55qE5Zu+5b2i5LiO6Imy5b2p5p6E5bu65YWF5ruh55Sf5ZG95Yqb55qE6KeG6KeJ5LiW55WM77yM5Lul5oyB57ut5rWB5Yqo55qE5Yqo5oCB6K+t6KiA5by65YyW5aSn5Lya5bm06L2744CB5byA5pS+55qE6KeG6KeJ5rCb5Zu044CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYcgMzJz4oCUNTZzIOeahCBNb3Rpb24gRGVzaWduIOWPiuacgOe7iOaIkOeJh+WJqui+keOAgui/meS4gOauteeahOeQg+S9k+mDqOWIhuayoeacieWujOaVtOeahOe+juacr+WKqOaAgeiuvuWumu+8jOWboOatpOmZpOS6huWKqOeUu+WItuS9nO+8jOS5n+WPguS4juS6hui/memDqOWIhueahOWKqOaAgeinhuinieaOoue0ou+8jOS7jui/kOWKqOaWueW8j+WIsOeQg+S9k+WGhemDqOeahOiJsuW9qeaViOaenOi/m+ihjOmHjeaWsOiuvuiuoeS4juaQreW7uuOAgicsXG4gICAgY2hhbGxlbmdlOifpmr7ngrnmmK/orqnlpKfph4/nkIPkvZPlnKjkv53mjIHmtYHnlYXov5DliqjnmoTlkIzml7bvvIzlhoXpg6joibLlvankuZ/lp4vnu4jlpITkuo7oh6rnhLbmtYHliqjnmoTnirbmgIHjgILpgJrov4fkuLrmr4/kuKrnkIPkvZPlj6DliqDlpJrlsYLmuJDlj5jkuI7liqjmgIHoibLlvanvvIzlubbkuI3mlq3osIPmlbTmt7flkIjmlrnlvI/jgIHov5DliqjpgJ/luqblkozppbHlkozluqbvvIzorqnpopzoibLotrPlpJ/kuLDlr4zkvYbkuI3ov4foibPvvIzmnIDnu4jorqnnkIPkvZPov5DliqjkuI7lhoXpg6joibLlvanmtYHliqjlvaLmiJDnu5/kuIDnmoToioLlpY/jgIInXG4gIH0sXG4gICfkuqzkuJxY6I2J6I6T6Z+z5LmQ6IqCJzoge1xuICAgIG92ZXJ2aWV3OifkuLrkuqzkuJwgw5cg6I2J6I6T6Z+z5LmQ6IqC5Yi25L2c6IGU5ZCN5a6j5Lyg54mH44CC6aG555uu57uT5ZCI6Z+z5LmQ6IqC5bm06L2744CB6LqB5Yqo55qE546w5Zy65rCb5Zu05LiO5Lqs5Lic55qE5Lqn5ZOB5YWD57Sg77yM6YCa6L+H5by66IqC5aWP55qE5Zu+5b2i5Yqo55S75LiO6Z+z5LmQ6KeG6KeJ77yM5omT6YCg5pu05bm06L2744CB5pu05pyJ5Yay5Ye75Yqb55qE5ZOB54mM6KGo6L6+44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67liY3mnJ/nmoTliJvmhI/kuI7liqjmgIHliIbplZzmnoTmgJ3liLbkvZzvvIzlubbotJ/otKPlvbHniYcgMTNz4oCUMjZzIOeahCBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB6LSf6LSj5bCG6Z2Z5oCB6K6+6K6h6L2s5YyW5Li65a6M5pW055qE5Yqo5oCB6ZWc5aS077yM5bm25bu656uL6L+Z5LiA5q6155qE6L+Q5Yqo5pa55byP5LiO6L2s5Zy66IqC5aWP44CCJyxcbiAgICBjaGFsbGVuZ2U6J+WFtuS4reavlOi+g+acieaMkeaImOeahOaYr+mVsueJh+e/u+i9rOmVnOWktO+8mumcgOimgeWcqCBBRSDkuK3mqKHmi5/lhbfmnInnqbrpl7TmhJ/nmoQgM0Qg57+76L2s77yM5ZCM5pe26K6p6KGo6Z2i55qE5riQ5Y+Y5LiO6auY5YWJ5aeL57uI6Lef6ZqP5qSt5ZyG55qE6YCP6KeG5Y+Y5YyW44CC6YCa6L+H5ouG5YiG5p2Q6LSo5bGC57qn5bm26YeN5paw5bu656uL5Yqo5oCB5YWz57O777yM6K6p5b2i5Y+Y44CB6YCP6KeG5LiO5p2Q6LSo5Y+Y5YyW5L+d5oyB5ZCM5q2l77yM5pyA57uI5Zyo5LqM57u06KeG6KeJ6aOO5qC85LiL5a6e546w6Ieq54S255qE56uL5L2T57+76L2s5pWI5p6c44CCJ1xuICB9LFxuICAn5Lqs5Lic5aSW5Y2WWOeMqueMquS+oCc6IHtcbiAgICBvdmVydmlldzon5Li65Lqs5Lic5aSW5Y2WIMOXIOeMqueMquS+oOiBlOWQjeWItuS9nOWuo+S8oOeJh+OAgumhueebrui1t+a6kOS6jue9keWPi+WPkeeOsOS6rOS4nOWkluWNlumqkeaJi+acjeS4jueMqueMquS+oOe7j+WFuOeahOe6oum7hOmFjeiJsuaEj+WkluKAnOaSnuihq+KAne+8jOWPjOaWuemhuuWKv+aKiue9kee7nOeDreail+WPmOaIkOS4gOasoeato+W8j+iBlOWQje+8jOiuqeeMqueMquS+oOS7peKAnOWkluWNlumqkeaJi+KAneeahOi6q+S7veWKoOWFpeS6rOS4nOWkluWNluOAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mHIDEzc+KAlDM1cyDnmoQgTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieeUseWboumYn+S8meS8tOWujOaIkO+8jOaIkeS4u+imgei0n+i0o+WwhumdmeaAgeiuvuiuoei9rOWMluS4uuWKqOaAgemVnOWktO+8jOWMheaLrOinkuiJsuS4juWbvuW9ouWKqOeUu+OAgemVnOWktOihlOaOpeS7peWPiuaVtOS9k+iKguWlj+eahOaKiuaOp+OAgicsXG4gICAgY2hhbGxlbmdlOifov5nkuKrpobnnm67mnIDlpKfnmoTmjJHmiJjmmK/ml7bpl7TjgILku47mi7/liLDntKDmnZDliLDlrozmiJDmlbTmlK/lvbHniYflj6rmnIkgMuKAlDMg5aSp77yM6ZyA6KaB5Zyo6Z2e5bi457Sn5YeR55qE5Yi25L2c5ZGo5pyf6YeM5b+r6YCf5raI5YyW576O5pyv44CB5a6M5oiQ5Yqo55S75bm25Y+N5aSN6LCD5pW044CC5Zyo5L+d6K+B5Lqk5LuY6YCf5bqm55qE5ZCM5pe25bC96YeP5LiN54m654my5Yqo5oCB57uG6IqC5ZKM5a6M5oiQ5bqm77yM5pyA57uI5oyJ5pe25a6M5oiQ5LqG6L+Z5LiA5q6155qE5Yi25L2c44CCJ1xuICB9LFxuICAn5bCP57qi5Lmm44CQ5ZCs546w5Zy65LiN6bi95YCh6K6u44CRJzoge1xuICAgIG92ZXJ2aWV3OifkuLrlsI/nuqLkuabkuZDpmJ/kuLvpopjpobnnm67liLbkvZzliqjmgIHop4bop4nlvbHniYfjgILpobnnm67ku6Xmj5LnlLvluIjmnoHlhbfkuKrkurrpo47moLznmoTop4bop4nkvZzlk4HkuLrln7rnoYDvvIzpgJrov4fliqjnlLvov5vkuIDmraXmlL7lpKfmj5LnlLvmnKzouqvnmoTotqPlkbPmhJ/kuI7pn7PkuZDoioLlpY/jgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJh+WJjeS4ieevh+eroOeahCBNb3Rpb24gRGVzaWdu44CC5Zyo5L+d55WZ5Y6f5o+S55S76aOO5qC855qE5Z+656GA5LiK77yM5bCG5Lq654mp44CB5Zu+5b2i5LiO5Zy65pmv6L+b6KGM5Yqo5oCB5ouG6Kej77yM5bm25qC55o2u6Z+z5LmQ6YeN5paw5bu656uL55S76Z2i55qE6L+Q5Yqo5LiO5YiH5o2i6IqC5aWP44CCJyxcbiAgICBjaGFsbGVuZ2U6J+i/meS4qumhueebruavlOi+g+eJueWIq+eahOWcsOaWueaYr++8jOaPkueUu+W4iOWvueWKqOaAgeS5n+aciemdnuW4uOaYjuehrueahOS4quS6uuWuoee+juOAguacgOWIneWwneivleS6huabtOWKoOS4nea7kea1geeVheeahOi/kOWKqOaWueW8j++8jOS9huWQjuadpeWPkeeOsOeVpeW4puWNoemhv+WSjOi3s+i3g+aEn+eahOiKguWlj+WPjeiAjOabtOi0tOWQiOWOn+eUu+awlOi0qO+8jOWboOatpOS4u+WKqOWvuemDqOWIhuWKqOeUu+i/m+ihjOaKveW4p+WSjOiKguWlj+mHjeaehO+8jOiuqSBNb3Rpb24g5pyA57uI5oiQ5Li65o+S55S76aOO5qC855qE5LiA6YOo5YiG77yM6ICM5LiN5piv5Y2V57qv6K6p55S76Z2i4oCc5Yqo6LW35p2l4oCd44CCJ1xuICB9LFxuICAn54m55q2lWC1Tb2ZhIEZvYW0nOiB7XG4gICAgb3ZlcnZpZXc6J+S4uueJueatpSDDlyBYLVNPRkEgRk9BTSDot5HpnovliLbkvZzkuqflk4HlrqPkvKDniYfjgILlvbHniYfnu5PlkIjkuoznu7TkuI7kuInnu7Top4bop4nvvIzku6Xmi5/kurrljJbnmoTigJzmsJTms6HmoLjigJ3ooajnjrDkuK3lupXnmoTmn5Tova/kuI7lm57lvLnvvIzlubbpgJrov4fkuInnu7TplZzlpLTlsZXnpLrpnovpnaLnmoTnvJbnu4fkuI7ovbvnm4jotKjmhJ/vvJvmlbTkvZPph4fnlKjpqazljaHpvpnoibLns7vvvIzorqnnp5HmioDooajovr7kv53mjIHlubTovbvjgIHovbvmnb7nmoTkuqflk4HmsJTotKjjgIInLFxuICAgIHJvbGU6J+i0n+i0o+W8gOevhyAw4oCUMnMg5ouf5Lq66KeS6Imy55qE5oyk5Y6L5Yqo55S777yM5Lul5Y+KIDbigJQxMXMg5rCU5rOh5qC45LuO5oyk5Y6L44CB5by56aOe5Yiw56m/5qKt56m66Ze055qE5YWo6YOoIE1vdGlvbiBEZXNpZ27jgILlhbbkuK0gNuKAlDExcyDmsqHmnInlrozmlbTnvo7mnK/orr7lrprvvIzlm6DmraTkuZ/lj4LkuI7kuobov5nkuIDmrrXku47nlLvpnaLmnoTmiJDliLDov5DliqjmlrnlvI/nmoTliqjmgIHop4bop4nmjqLntKLjgIInLFxuICAgIGNoYWxsZW5nZTon6Zq+54K55piv5aaC5L2V6K6p5aSn6YeP5rCU5rOh5pei5pyJ5p+U6L2v55qE5oyk5Y6L5Zue5by55oSf77yM5Y+I6IO95Zyo5b+r6YCf56m/5qKt5Lit5bu656uL5riF5pmw55qE56m66Ze05bGC5qyh44CC6YCa6L+H6LCD5pW05b2i5Y+Y6IqC5aWP44CB5by55oCn5puy57q/77yM5Lul5Y+K5YmN5Lit5ZCO5pmv55CD5L2T55qE6YCf5bqm5beu44CB5aSn5bCP5ZKM6L+Q5Yqo6L2o6L+577yM6K6p4oCc5oyk5Y6L4oCU6YeK5pS+4oCU5by56aOe4oCU56m/5qKt4oCd55qE5Yqo5L2c5b2i5oiQ6L+e57ut55qE5Yqb6YeP5Lyg6YCS77yM5ZCM5pe25oqK5Lqn5ZOB4oCc6L2v5by54oCd55qE5Y2W54K555u05o6l6L2s5YyW5oiQ5Yqo5oCB5oSf5Y+X44CCJ1xuICB9LFxuICAn6Im+576O54m55ZOB54mM54SV5paw5Y+R5biD5LyaJzoge1xuICAgIG92ZXJ2aWV3OifkuLroib7nvo7nibnlk4HniYznhJXmlrDlj5HluIPkvJrliLbkvZzlk4HniYzop4bop4nlvbHniYfjgILlm7Tnu5XlhajmlrDnmoTlk4HniYzop4bop4nkvZPns7vvvIzpgJrov4cgTG9nb+OAgeWchuW9ouS4jue6v+adoeetieaguOW/g+WFg+e0oOeahOaLhuino+S4jumHjee7hO+8jOWwhumdmeaAgeeahOWTgeeJjOivhuWIq+i9rOWMluS4uuaMgee7reeUn+mVv+OAgeaJqeaVo+eahOWKqOaAgeinhuinieOAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mHIDZz4oCUMTZzIOeahCBNb3Rpb24gRGVzaWdu77yM5Li76KaB5a6M5oiQ5ZOB54mM5Zu+5b2i55qE5ouG6Kej44CB6YeN57uE44CB5bu25bGV5Lul5Y+K5LiN5ZCM6KeG6KeJ5b2i5oCB5LmL6Ze055qE5Yqo5oCB6KGU5o6l44CCJyxcbiAgICBjaGFsbGVuZ2U6J+mhueebruWItuS9nOWRqOacn+mdnuW4uOe0p+W8oO+8jOiAjOi/meS4gOauteWPiOWMheWQq+Wkp+mHj+WHoOS9leWbvuW9oueahOi/nue7reWPmOWMluS4jueyvue7huihlOaOpeOAgumcgOimgeWcqOefreaXtumXtOWGheW/q+mAn+W7uueri+i/kOWKqOmAu+i+ke+8jOWQjOaXtuWPjeWkjeiwg+aVtOmAn+W6puabsue6v+OAgeWbvuW9ouWxgue6p+S4jui9rOWcuuiKguWlj++8jOWcqOS/neivgeS6pOS7mOaViOeOh+eahOWQjOaXtu+8jOiuqeeugOa0geeahOWTgeeJjOWbvuW9ouS+neeEtuS/neaMgei2s+Wkn+a1geeVheWSjOWujOaVtOeahOWKqOaAgei0qOaEn+OAgidcbiAgfSxcbiAgJ+W+rui9r+Wwj+WGsFjnibnmraUnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuW+rui9r+Wwj+WGsCDDlyDnibnmraXlpI/ml6XmsrnnlLvlrprliLbns7vliJfliLbkvZzlrqPkvKDliqjnlLvjgILpobnnm67pgJrov4fnibnmraXjgIHlvq7ova/lsI/lhrDjgIHpmL/ph4zlt7Tlt7TkuInmlrnljY/kvZzvvIzlsIbkuI3lkIznmoTkuKrmgKfkuI7mg4Xnu6rovazljJbkuLroh6rlt7HkuJPlsZ7nmoTmsrnnlLsgVCDmgaTvvIzluIzmnJvmr4/kuKrkurrpg73og73ku6Xoh6rlt7HnmoTmlrnlvI/miJDkuLrni6zkuIDml6DkuoznmoTliJvkvZzogIXjgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJh+WJjSAxMHMg55qEIE1vdGlvbiBEZXNpZ27vvIzku6Xlj4ogMjBz4oCUMjRzIOeZvuW5heiJuuacr+S9nOWTgeepv+airemVnOWktOeahOWKqOaAgeWItuS9nO+8jOWwhuS4jeWQjOmjjuagvOeahOinhuiniee0oOadkOmHjeaWsOe7hOe7h+S4uui/nue7reeahOWKqOaAgeWPmeS6i+OAgicsXG4gICAgY2hhbGxlbmdlOifnu5PlsL7nqb/moq3plZzlpLTpnIDopoHlnKjnn63ml7bpl7TlhoXono3lkIjov5Hnmb7luYXkuI3lkIzpo47moLznmoToibrmnK/kvZzlk4HjgILpmr7ngrnkuI3ku4XmmK/ntKDmnZDph4/lpKfvvIzmm7TpnIDopoHmjqfliLbmr4/luYXkvZzlk4HnmoTnqbrpl7TlsYLnuqfjgIHlh7rnjrDoioLlpY/kuI7plZzlpLTpgJ/luqbvvIzorqnlpKfph4/nlLvpnaLlv6vpgJ/mjqDov4fljbTkuI3mmL7lvpfmnYLkubHvvIzmnIDnu4jlvaLmiJDkuIDmnaHkuI3mlq3lu7bkvLjnmoToibrmnK/plb/lu4rvvIzmiorigJzmr4/kuKrkurrpg73mnInlsZ7kuo7oh6rlt7HnmoToibrmnK/ooajovr7igJ3mjqjlkJHpq5jmva7jgIInXG4gIH0sXG4gICdCT1RUT05TIEFpciDkuqflk4HlrqPkvKDop4bpopEnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uiBCVVRUT05TIEFpciBYIOiAs+acuuaWsOWTgeWItuS9nOS6p+WTgeWuo+S8oOeJh+OAguW9seeJh+S7pemrmOWvueavlOeahOWtl+S9k+OAgeWHoOS9leWbvuW9ouS4juS6p+WTgeS4iee7tOinhuinieS4uuaguOW/g++8jOmAmui/h+W/q+mAn+WIh+aNoueahOWKqOaAgeivreiogO+8jOWRiOeOsOiAs+acuueahOiuvuiuoee7huiKguS4juS6p+WTgeeJueaAp+OAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mH5YmNIDE1cyDnmoQgTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieWPiumDqOWIhuS4iee7tOWFg+e0oOeUseWboumYn+S8meS8tOWujOaIkO+8jOaIkeS4u+imgei0n+i0o+WwhuS4jeWQjOe0oOadkOmHjeaWsOaVtOWQiO+8jOmAmui/h+eJiOW8j+i/kOWKqOOAgeS6p+WTgeWKqOeUu+S4jumVnOWktOi9rOWcuuW7uueri+WujOaVtOeahOWKqOaAgeiKguWlj+OAgicsXG4gICAgY2hhbGxlbmdlOifov5nkuIDmrrXlkIzml7bljIXlkKvlrZfkvZPmjpLniYjjgIHkuoznu7Tlm77lvaLkuI7lpJrnu4TkuInnu7Tkuqflk4HntKDmnZDvvIzop4bop4nlvaLlvI/liIfmjaLpnZ7luLjpopHnuYHjgILpmr7ngrnlnKjkuo7ml6LopoHkv53mjIHlv6voioLlpY/lkozop4bop4nlhrLlh7vlipvvvIzlj4jkuI3og73orqnkv6Hmga/lj5jlvpfmnYLkubHvvIzlm6DmraTpgJrov4fov5DliqjmlrnlkJHjgIHmnoTlm77lhbPns7vkuI7ovazlnLroioLlpY/kuLLogZTkuI3lkIzplZzlpLTvvIzorqnkuoznu7TkuI7kuInnu7TkuYvpl7Toh6rnhLbmjqXlipvvvIzlkIzml7blp4vnu4jkv53mjIHkuqflk4HkvZzkuLrop4bop4nkuK3lv4PjgIInXG4gIH0sXG4gICdVSU5QVVMgTE9HT+a8lOe7jic6IHtcbiAgICBvdmVydmlldzon5Li6IFVJTlBVUyDliLbkvZzlk4HniYwgTG9nbyDliqjmgIHmvJTnu47vvIzpgJrov4fmtrLmgIHjgIHmuJDlj5jjgIHnspLlrZDkuI7lh6DkvZXlm77lvaLnrYnkuI3lkIzop4bop4nor63oqIDvvIzlr7nmoLjlv4PnmoTigJxV4oCd5b2i56ym5Y+36L+b6KGM5aSa57u05bqm5Yqo5oCB5o6i57Si44CCJyxcbiAgICByb2xlOifotJ/otKPmlbTmlK/lvbHniYfnmoTliarovpHkuI7oioLlpY/mlbTlkIjvvIzku6Xlj4ogM3PigJQ1c+OAgTExc+KAlDEycyDnmoQgTG9nbyBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB6LSf6LSj5bCG6Z2Z5oCB6K6+6K6h6L2s5YyW5Li65Yqo5oCB77yM5bm257uf5LiA5LiN5ZCM5q616JC95LmL6Ze055qE6IqC5aWP5LiO6KGU5o6l44CCJyxcbiAgICBjaGFsbGVuZ2U6JzExc+KAlDEycyDpnIDopoHlnKjmnoHnn63ml7bpl7TlhoXlrozmiJDlpKfph4/lnIblvaLnmoTnm7jliIfjgIHltYzlpZfkuI7lsLrluqblj5jljJbvvIzlkIzml7blj6DliqDlpJrnu4Tpq5jppbHlkozoibLlvanjgILliLbkvZzml7bph43ngrnmjqfliLblh6DkvZXlhbPns7vjgIHov5DliqjoioLlpY/kuI7oibLlvanlsYLnuqfvvIzorqnlpI3mnYLlm77lvaLlv6vpgJ/lj5jljJbnmoTlkIzml7bkvp3nhLbkv53mjIHlubLlh4DjgIHmnInluo/vvIzlubbmnIDnu4joh6rnhLbmlLbmnZ/lm54gTG9nb+OAgidcbiAgfSxcbiAgJ+S6rOS4nC3nnJ/lv4Por53lpKflhpLpmaknOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuS6rOS4nOeUteiEkeaVsOeggeaWsOWTgeagj+ebruOAjOecn+aWsOivneWkp+WGkumZqeOAjeWItuS9nOWuo+S8oOWKqOeUu+OAgumhueebrumAmui/h+i2o+WRs+aMkeaImOOAgeW8gOeuseS4juS6p+WTgea1i+ivhOetieWGheWuue+8jOS7peabtOW5tOi9u+OAgeWoseS5kOWMlueahOaWueW8j+WRiOeOsOaVsOeggeaWsOWTgeS4juS6p+WTgeS9k+mqjOOAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mH5byA56+HIDDigJQzc+OAgTbigJQ3cyDnmoQgTW90aW9uIERlc2lnbu+8jOS7peWPiue7k+WwvuWumueJiOWKqOeUu+OAguWbtOe7leW3suaciee+juacr+WujOaIkOWbvuW9ouOAgeaWh+Wtl+S4juWcuuaZr+eahOWKqOaAgea8lOe7ju+8jOW5tui0n+i0o+S4jeWQjOS/oeaBr+S5i+mXtOeahOiKguWlj+ihlOaOpeOAgicsXG4gICAgY2hhbGxlbmdlOifov5nmlK/niYfnmoTljZXkuKrliqjmgIHmrrXokL3pg73lvojnn63vvIzkvYbnlLvpnaLkv6Hmga/lr4bluqblvojpq5jjgILlsKTlhbblvIDnr4fpnIDopoHlnKjlh6Dnp5LlhoXlrozmiJDmloflrZfjgIHlm77lvaLkuI7lnLrmma/lhYPntKDnmoTov57nu63lj5jljJbvvIzlm6DmraTph43ngrnosIPmlbTkuoblhYPntKDlh7rnjrDnmoTlhYjlkI7lhbPns7vjgIHpgJ/luqbmm7Lnur/lkozoioLlpY/lgZzpob/vvIzorqnnlLvpnaLkv53mjIHigJzlv6vigJ3lkozigJzngrjigJ3nmoTlkIzml7bvvIzlhbPplK7kv6Hmga/kvp3nhLbog73lpJ/ooqvnnIvmuIXvvIzlubbkuI7mlbTmlK/lvbHniYflgY/nu7zoibrjgIHmuLjmiI/ljJbnmoTop4bop4nmsJTotKjkv53mjIHkuIDoh7TjgIInXG4gIH0sXG4gICflv6vmiYvmoKHmi5vniYflpLQnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuW/q+aJi+agoeWbreaLm+iBmOWItuS9nOa0u+WKqOeJh+WktOWKqOeUu+OAguWbtOe7leW5tOi9u+OAgeW8gOaUvuOAgeaciei2o+eahOagoeWbreaLm+iBmOawm+WbtO+8jOWwhue9kemhteOAgeekvuS6pOOAgeWIm+S9nOOAgea4uOaIj+etieW5tOi9u+S6uueGn+aCieeahOinhuinieWFg+e0oOiejeWFpeW/q+aJi+WTgeeJjOS4lueVjO+8jOmAmui/h+S4gOauteS4jeaWreepv+aireeahOinhuinieaXheeoi+WujOaIkOa0u+WKqOW8gOWcuuOAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5a6i5oi35rKf6YCa44CB5pW05L2T5Yib5oSP5p6E5oCd44CB5Yqo5oCB5YiG6ZWc6K6+6K6h5Y+K5YWo54mHIE1vdGlvbiBEZXNpZ27jgILnvo7mnK/op4bop4nnlLHlm6LpmJ/kvJnkvLTlrozmiJDvvIzmiJHku47liY3mnJ/mpoLlv7XlvIDlp4vlj4LkuI7vvIzlubbotJ/otKPlsIbliJvmhI/kuI7liIbplZzmnIDnu4jlrozmlbTokL3lnLDkuLrliqjmgIHlvbHniYfjgIInLFxuICAgIGNoYWxsZW5nZTon5pyA5aSn55qE5oyR5oiY5piv5aaC5L2V5oqK5aSn6YeP5LiN5ZCM55qE5Zy65pmv5LiO6KeG6KeJ5YWD57Sg77yM5Zyo55+t55+t5Y2B5Yeg56eS5YaF57uE57uH5oiQ5LiA5Liq5a6M5pW055qE6KeC55yL5L2T6aqM44CC5Zug5q2k5YmN5pyf5bCx5LuO5Yqo5oCB6YC76L6R5Ye65Y+R6K6+6K6h5YiG6ZWc77yM6YCa6L+H6ZWc5aS05o6o6L+b44CB56m66Ze056m/5qKt44CB5YWD57Sg5o6l5Yqb5Liy6IGU5LiN5ZCM5Zy65pmv77yM6K6p5q+P5qyh6L2s5Zy65pei5pyJ6KeG6KeJ5oOK5Zac77yM5Y+I5aeL57uI5L+d5oyB57uf5LiA55qE6L+Q5Yqo5pa55ZCR5LiO6IqC5aWP77yM5pyA57uI6Ieq54S25pS25p2f5Yiw5rS75Yqo5Li76aKY44CCJ1xuICB9LFxuICAn5b+r5omL56OB5Yqb5byV5pOOMjAyNUNOWSc6IHtcbiAgICBvdmVydmlldzon5Li65b+r5omL5qCh5Zut5oub6IGY5Yi25L2c5rS75Yqo54mH5aS05Yqo55S744CC5Zu057uV5bm06L2744CB5byA5pS+44CB5pyJ6Laj55qE5qCh5Zut5oub6IGY5rCb5Zu077yM5bCG572R6aG144CB56S+5Lqk44CB5Yib5L2c44CB5ri45oiP562J5bm06L275Lq654af5oKJ55qE6KeG6KeJ5YWD57Sg6J6N5YWl5b+r5omL5ZOB54mM5LiW55WM77yM6YCa6L+H5LiA5q615LiN5pat56m/5qKt55qE6KeG6KeJ5peF56iL5a6M5oiQ5rS75Yqo5byA5Zy644CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTlrqLmiLfmsp/pgJrjgIHmlbTkvZPliJvmhI/mnoTmgJ3jgIHliqjmgIHliIbplZzorr7orqHlj4rlhajniYcgTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieeUseWboumYn+S8meS8tOWujOaIkO+8jOaIkeS7juWJjeacn+amguW/teW8gOWni+WPguS4ju+8jOW5tui0n+i0o+WwhuWIm+aEj+S4juWIhumVnOacgOe7iOWujOaVtOiQveWcsOS4uuWKqOaAgeW9seeJh+OAgicsXG4gICAgY2hhbGxlbmdlOifmnIDlpKfnmoTmjJHmiJjmmK/lpoLkvZXmiorlpKfph4/kuI3lkIznmoTlnLrmma/kuI7op4bop4nlhYPntKDvvIzlnKjnn63nn63ljYHlh6Dnp5LlhoXnu4Tnu4fmiJDkuIDkuKrlrozmlbTnmoTop4LnnIvkvZPpqozjgILlm6DmraTliY3mnJ/lsLHku47liqjmgIHpgLvovpHlh7rlj5Horr7orqHliIbplZzvvIzpgJrov4fplZzlpLTmjqjov5vjgIHnqbrpl7Tnqb/moq3jgIHlhYPntKDmjqXlipvkuLLogZTkuI3lkIzlnLrmma/vvIzorqnmr4/mrKHovazlnLrml6LmnInop4bop4nmg4rllpzvvIzlj4jlp4vnu4jkv53mjIHnu5/kuIDnmoTov5DliqjmlrnlkJHkuI7oioLlpY/vvIzmnIDnu4joh6rnhLbmlLbmnZ/liLDmtLvliqjkuLvpopjjgIInXG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihwcm9qZWN0RGV0YWlscywge1xuICAn5b+r5omL56OB5Yqb5byV5pOOMjAyNUNOWSc6IHtcbiAgICBvdmVydmlldzon5Li65b+r5omL56OB5Yqb5byV5pOOIDIwMjUgQ05ZIOWItuS9nOaWsOaYpeiQpemUgOWuo+aOqOW9seeJh+OAgumhueebruWbtOe7leaYpeiKguacn+mXtOS4jeWQjOeahOWGheWuueWcuuaZr+S4juiQpemUgOeOqeazleWxleW8gO+8jOWwhuW5tOWRs+OAgeWGheWuueOAgeS6kuWKqOS4juWTgeeJjOiQpemUgOaVtOWQiOaIkOabtOi9u+advuOAgeaciei2o+eahOinhuinieihqOi+vuOAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5a6i5oi35rKf6YCa44CB5pW05L2T5Yib5oSP5p6E5oCd44CBVk8g5paH5qGI44CB5Yqo5oCB5YiG6ZWc6K6+6K6h5Y+K6YOo5YiGIE1vdGlvbiBEZXNpZ27jgILku47liY3mnJ/pnIDmsYLmorPnkIbjgIHohJrmnKzkuI7liIbplZzvvIzliLDlkI7mnJ/liqjmgIHokL3lnLDvvIzlhajnqIvlj4LkuI7pobnnm67nmoTliJvmhI/mjqjov5vjgIInLFxuICAgIGNoYWxsZW5nZTon6L+Z5qyh5q+U6L6D5aSn55qE5oyR5oiY5Y+N6ICM5piv5aaC5L2V5YWI5oqK5YaF5a656K6y5riF5qWa44CC6Z2i5a+55aSn6YePIENOWSDokKXplIDkv6Hmga/vvIzpnIDopoHoh6rlt7Hph43mlrDmorPnkIbpgLvovpHlubblrozmiJAgVk8g5paH5qGI77yM5YaN5qC55o2u5Y+j5pKt55qE6K+t5LmJ5ZKM6IqC5aWP5Y+N5o6o5YiG6ZWc5LiO6KeG6KeJ5Yib5oSP44CC5a+55oiR5p2l6K+05Lmf5piv5LiA5qyh5LuO5Y2V57qv6ICD6JmR4oCc55S76Z2i5oCO5LmI5Yqo4oCd77yM6L2s5ZCR5oCd6ICD5YaF5a655oCO5LmI6K6y44CB55S76Z2i5oCO5LmI6YWN5ZCI44CB5pW05pSv54mH5a2Q5oCO5LmI5oiQ56uL55qE5bCd6K+V44CCJ1xuICB9LFxuICAn5b+r5omL5bm057uI5YaF5a6j5oC757uTJzoge1xuICAgIG92ZXJ2aWV3OifkuLrlv6vmiYvno4HlipvlvJXmk47lubTluqblhoXpg6jmgLvnu5PliLbkvZzlm57pob7lvbHniYfjgILpgJrov4fliqjmgIHlm77lvaLjgIHkuJrliqHmoYjkvovkuI7lk4HniYzlhoXlrrnnmoTlv6vpgJ/liIfmjaLvvIzlsIbov4fljrvkuIDlubTnmoTkuqflk4Hog73lipvjgIHlhoXlrrnotYTkuqfkuI7pmLbmrrXmgKfmiJDmnpzph43mlrDmlbTnkIbmiJDmm7TlubTovbvjgIHmm7Tlhbfop4bop4nlhrLlh7vlipvnmoTlubTluqblm57pob7jgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJh+WJjSAxMnMg55qEIE1vdGlvbiBEZXNpZ27vvIzljIXmi6zlvIDnr4fop4bop4njgIHnqbrpl7TovazlnLrku6Xlj4rkuqflk4Hog73lipvnm7jlhbPlhoXlrrnnmoTliqjmgIHliLbkvZzvvIzlnKjml6Llrprnvo7mnK/ln7rnoYDkuIrlrozmiJDliqjmgIHmvJTnu47kuI7plZzlpLTooZTmjqXjgIInLFxuICAgIGNoYWxsZW5nZTon5byA56+H5YmN5Lik5Liq6ZWc5aS06ZyA6KaB5ZyoIEFFIOS4reeUqOS6jOe7tOe0oOadkOaooeaLn+S4iee7tOepuumXtOS4jumVnOWktOi/kOWKqO+8jOWQjOaXtui/mOimgeiuqeihqOmdoueahOiTnee7v+iJsua4kOWPmOmaj+edgOW9ouS9k+aMgee7rea1geWKqOOAguWItuS9nOaXtumHjeeCueWkhOeQhuS6humAj+inhuOAgeWxgue6p+OAgeinhuW3ruS7peWPiua4kOWPmOi/kOWKqOS5i+mXtOeahOWFs+ezu++8jOiuqeS6jOe7tOWFg+e0oOWcqOayoeacieWujOaVtOS4iee7tOWItuS9nOeahOaDheWGteS4i+S+neeEtuWFt+acieepuumXtOe6tea3seWSjOadkOi0qOa1geWKqOaEn++8jOW5tuiHqueEtuihlOaOpeWIsOWQjumdoueahOS/oeaBr+WxleekuuOAgidcbiAgfSxcbiAgJ1ZPTExHQVMgWCDlh6/mlq/lk4jmnpcnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uiBWT0xMR0FTIMOXIEtlaXRoIEhhcmluZyDogZTlkI3og73ph4/ppa7mlpnliLbkvZzlrqPkvKDniYfjgILpobnnm67lsIYgS2VpdGggSGFyaW5nIOaegeWFt+i+qOivhuW6pueahOihl+WktOiJuuacr+ivreiogOiejeWFpeS6p+WTgeWMheijhe+8jOS7peWkp+iDhueahOiJsuW9qeS4juWbvuW9oueisOaSnu+8jOWRiOeOsCBWT0xMR0FT44CM6Im65pyvIMOXIOiDvemHj+OAjeeahOWTgeeJjOihqOi+vuOAgicsXG4gICAgcm9sZTon6LSf6LSj5pW05pSv5b2x54mH55qEIE1vdGlvbiBEZXNpZ24g5Y+K5pyA57uI5Ymq6L6R44CC576O5pyv6KeG6KeJ5LiO5LiJ57u06LWE5Lqn55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB6LSf6LSj5bCG5LiN5ZCM5b2i5byP55qE57Sg5p2Q6L+b6KGM5Yqo5oCB5pW05ZCI77yM5bm25a6M5oiQ5YWo54mH55qE6ZWc5aS06KGU5o6l44CB6L2s5Zy65LiO5pW05L2T6IqC5aWP6K6+6K6h44CCJyxcbiAgICBjaGFsbGVuZ2U6J+aVtOeJh+WQjOaXtuWMheWQq+W5s+mdouWbvuW9ouOAgeS6p+WTgeS4iee7tOS4juWkp+mHj+e9kOS9k+mYteWIl+OAguWItuS9nOaXtumHjeeCuemAmui/h+i/kOWKqOaWueWQkeOAgemHjeWkjeiKguWlj+OAgeaehOWbvuW7tue7reS4juW/q+mAn+i9rOWcuuW7uueri+e7n+S4gOeahOWKqOaAgeivreiogO+8jOiuqSBLZWl0aCBIYXJpbmcg5pys6Lqr5by654OI55qE6KeG6KeJ6aOO5qC86LSv56m/5aeL57uI77yM5ZCM5pe25Zyo6auY5a+G5bqm55S76Z2i5Lit5L+d5oyB5Lqn5ZOB55qE6KeG6KeJ5Lit5b+D44CCJ1xuICB9LFxuICAnVk9MTEdBUyBYIOiLj+eCs+a3uyc6IHtcbiAgICBvdmVydmlldzon5Li6IFZPTExHQVMgw5cg6IuP54Kz5re75Yi25L2c5ZOB54mM5a6j5Lyg54mH44CC5Zu057uV6IuP54Kz5re755qE6YCf5bqm5LiO56ue5oqA57K+56We77yM5bCG6L+Q5Yqo44CB6IO96YeP5LiOIFZPTExHQVMg5YWo5Yqb5Lul6LW055qE5ZOB54mM55CG5b+157uT5ZCI77yM6YCa6L+H6auY6YCf55qE5paH5a2X5LiO57q/5p2h6KeG6KeJ5by65YyW5LiN5pat5ZCR5YmN55qE5Yqb6YeP5oSf44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYfliY0gMTZzIOeahCBNb3Rpb24gRGVzaWdu77yM5Li76KaB5a6M5oiQ5paH5a2X5Yqo5oCB44CB5Zu+5b2i5Yqo55S75Lul5Y+K6LSv56m/5Lq654mp6L+Q5Yqo55qE57q/5p2h5pWI5p6c77yM6K6pIFR5cG9ncmFwaHkg5LiO6IuP54Kz5re755qE5aWU6LeR6IqC5aWP5b2i5oiQ57uf5LiA55qE6KeG6KeJ6K+t6KiA44CCJyxcbiAgICBjaGFsbGVuZ2U6J+mavueCueaYr+iuqeWkp+mHj+e6v+adoeecn+ato+S6p+eUn+i3n+maj+S6uueJqei/kOWKqOeahOepuumXtOaEn++8jOiAjOS4jeaYr+eugOWNleWPoOWKoOWcqOeUu+mdouS4iuOAguWItuS9nOaXtuagueaNruS6uueJqeeahOWllOi3keaWueWQkeOAgemAn+W6puS4jui6q+S9k+WKqOS9nOS4jeaWreiwg+aVtOe6v+adoeeahOeUn+aIkOi3r+W+hOOAgemAj+inhuS4juWJjeWQjuWxgue6p++8jOiuqee6v+adoemaj+edgOS6uueJqeWKoOmAn+OAgei9rOWQkeWSjOepv+aire+8jOWcqOS6jOe7tOeUu+mdouS4reW7uueri+e6tea3se+8jOWQjOaXtui/m+S4gOatpeaUvuWkp+mAn+W6puS4juiDvemHj+eIhuWPkeeahOaEn+WPl+OAgidcbiAgfSxcbiAgJ+Wwj+exs+enkeaKgOWHuueOsCc6IHtcbiAgICBvdmVydmlldzon5Li6IDIwMjIg5bCP57Gz56eR5oqA5Ye66KGM5a2j5Yi25L2c5ZOB54mM5a6j5Lyg54mH44CC5b2x54mH5Lul5YWF5ruh5oOz6LGh5Yqb55qE6KeG6KeJ5peF56iL5Liy6IGU5omL5py644CB6ICz5py6562J5pm66IO95Lqn5ZOB77yM6YCa6L+H5LiN5pat5ZCR5YmN5o6i57Si55qE6ZWc5aS06K+t6KiA77yM5ZGI546w56eR5oqA5Lqn5ZOB6J6N5YWl55Sf5rS75LiO5Ye66KGM5Zy65pmv55qE5ZOB54mM5L2T6aqM44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYcgMTBz4oCUMjZzIOeahCBNb3Rpb24gRGVzaWdu77yM5YyF5ous5Zy65pmv56m/5qKt44CB6ZWc5aS05o6o6L+b44CB5LqM57u05YWD57Sg5Yqo55S75Y+K5LiN5ZCM5q616JC95LmL6Ze055qE6L2s5Zy66KGU5o6l77yb5YW25Lit6ICz5py65by55Ye655qE5LiJ57u05Yqo55S755Sx5Zui6Zif5LiJ57u05LyZ5Ly05a6M5oiQ77yM5oiR6LSf6LSj5bCG5YW25pW05ZCI6L+b5pW05L2T6ZWc5aS06L+Q5Yqo44CCJyxcbiAgICBjaGFsbGVuZ2U6J+mavueCueWcqOS6juWmguS9leiuqeWOn+WcsOWujOaIkOeahOS4iee7tOiAs+acuuWKqOeUu+WMuemFjeaMgee7reWQkeWJjeaOqOi/m+eahOmVnOWktOOAguWItuS9nOaXtumHjeaWsOiwg+aVtOS4iee7tOe0oOadkOWcqOeUu+mdouS4reeahOS9jeenu+OAgee8qeaUvuOAgemAj+inhuS4juWHuueOsOaXtuacuu+8jOW5tue7k+WQiOWJjeWQjuWcuuaZr+eahOepuumXtOWFs+ezu++8jOiuqeiAs+acuuWDj+ecn+WunuWtmOWcqOS6jumVnOWktOepv+i2iueahOepuumXtOS4re+8jOS9vyAzRCDkuqflk4Hov5DliqjkuI4gMkQgQ2FtZXJhIE1vdmVtZW50IOiHqueEtuihlOaOpe+8jOiAjOS4jeaYr+S4pOS4queLrOeri+WKqOeUu+eahOeugOWNleaLvOaOpeOAgidcbiAgfSxcbiAgJ+WkqeeMq+aXtuijheWRqCc6IHtcbiAgICBvdmVydmlldzon5Li65aSp54yr5bCP6buR55uS5pe26KOF5ZGo5Yi25L2c57O75YiX6KeG6KeJ5YyF6KOF77yM6YCa6L+H5pe26KOF5b2x5YOP44CB5ZOB54mM6KeG6KeJ5LiO5Yqo5oCB5Zu+5b2i55qE57uT5ZCI77yM5bCG5LiN5ZCM56eA5Zy65LiO5pe25bCa5YaF5a655Liy6IGU5oiQ5a6M5pW055qE5Yqo5oCB6KeG6KeJ5L2T6aqM44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTlrqLmiLfmsp/pgJrjgIHliqjmgIHliIbplZzjgIHovazlnLrmnoTmgJ3lj4ogTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieeUseWboumYn+S8meS8tOWujOaIkO+8jOaIkeS4u+imgeWfuuS6juW3suacieinhuinieiuvuiuoeinhOWIkuavj+S4queUu+mdoueahOi/kOWKqOaWueW8j+OAgemVnOWktOihlOaOpeS4jui9rOWcuumAu+i+ke+8jOW5tuWujOaIkOacgOe7iOWKqOaAgeWItuS9nOOAgidcbiAgfSxcbiAgJ+a3mOWunemAoOeJqeiKgic6IHtcbiAgICBvdmVydmlldzon5Li6IDIwMjIg5reY5a6d6YCg54mp6IqC44CM5piO5pel5LmL5aKD44CN5Yi25L2c5rS75Yqo5a6j5Lyg6KeG6aKR44CC5pys5bGK6YCg54mp6IqC5Zu057uV5bm06L275Yib6YCg5Yqb5LiO5Yib5paw5Yib5Lia5bGV5byA77yM6YCa6L+H44CM5Yib5paw5Yib5Lia5aSn5LyaIMOXIOWIm+mAoOWKm+Wkp+WxleOAjembhuS4reWRiOeOsOaWsOS6p+WTgeOAgeaWsOaDs+azleS4juW5tOi9u+WIm+S4muiAheeahOWIm+mAoOWKm+OAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mH5YmNIDEycyDnmoQgTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieeUseWboumYn+S8meS8tOWujOaIkO+8jOaIkeS4u+imgeWfuuS6juW3suacieiuvuiuoeWujOaIkOeUu+mdouWFg+e0oOOAgeaWh+Wtl+WPiuWbvuW9oueahOWKqOaAgea8lOe7ju+8jOW5tuWkhOeQhuWJjeWQjumVnOWktOS5i+mXtOeahOiKguWlj+S4juihlOaOpeOAgicsXG4gICAgY2hhbGxlbmdlOifov5nkuKrpobnnm67mm7Tkvqfph43kuo7lr7nml6Llrprop4bop4nnmoTliqjmgIHovazljJbjgILlnKjkv53mjIHljp/mnInnvo7mnK/po47moLznmoTln7rnoYDkuIrvvIzpgJrov4flhYPntKDlh7rnjrDpobrluo/jgIHov5DliqjoioLlpY/kuI7plZzlpLTooZTmjqXvvIzorqnpnZnmgIHorr7orqHoh6rnhLbovazljJbmiJDlhbfmnInpgKDnianoioLlubTovbvjgIHmtLvot4PmsJTotKjnmoTliqjmgIHop4bop4njgIInXG4gIH0sXG4gICfmlrnovr7lvovluIjkuovliqHmiYAnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuaWuei+vuW+i+W4iOS6i+WKoeaJgOWItuS9nOWTgeeJjOWuo+S8oOeJh+OAguW9seeJh+WbtOe7leWFtuS4k+S4muiDveWKm+OAgeWNj+S9nOeQhuW/teS4juWbvemZheWMluazleW+i+acjeWKoeWxleW8gO+8jOS7peeugOa0geOAgeeQhuaAp+eahOinhuinieivreiogOWRiOeOsOWTgeeJjOS/oeaBr+OAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5a6i5oi35rKf6YCa5Y+K5pW05pSv5b2x54mH55qE5Yqo5oCB5YiG6ZWc5Yib5oSP77yM5bm25a6M5oiQIDIyc+KAlDM2c+OAgTQ1c+KAlDE6MzAg55qEIE1vdGlvbiBEZXNpZ27jgILnvo7mnK/op4bop4nnlLHlm6LpmJ/kvJnkvLTotJ/otKPvvIzmiJHkuLvopoHmoLnmja7mlofmoYjmnoTmgJ3mr4/kuKrmrrXokL3igJzlpoLkvZXooajovr7jgIHlpoLkvZXov5DliqjjgIHlpoLkvZXooZTmjqXigJ3vvIzlho3phY3lkIjnvo7mnK/mlrnmoYjlrozmiJDliqjmgIHokL3lnLDjgIInLFxuICAgIGNoYWxsZW5nZTon6Zq+54K55Zyo5LqO5paH5qGI5pys6Lqr5YGP5LiT5Lia5ZKM5oq96LGh77yM6ICM5b2x54mH5pyA57uI6ZyA6KaB55So6Z2e5bi4566A5rSB55qE5Zu+5b2i6K+t6KiA5oqK5qaC5b+16K6y5riF5qWa44CC5Zug5q2k5YmN5pyf5YiG6ZWc6ZyA6KaB5YWI5ouG6Kej5q+P5q615paH5qGI55qE5qC45b+D5ZCr5LmJ77yM5YaN5oCd6ICD6YCC5ZCI55qE5Yqo5oCB5YWz57O75LiO6KeG6KeJ6ZqQ5Za777yM5bm25LiO576O5pyv6YWN5ZCI6L2s5YyW5Li65YW35L2T55S76Z2i77yM6K6p5aSN5p2C5L+h5oGv5Zyo5L+d5oyB566A5rSB55qE5ZCM5pe25pu05a655piT6KKr55CG6Kej44CCJ1xuICB9LFxuICAn5Lq65rCR5pel5oql4oCU4oCU5oiR55qE5a6d6JeP5a625LmhJzoge1xuICAgIG92ZXJ2aWV3OifkurrmsJHml6XmiqXmlrDlqpLkvZPmjqjlh7rjgIrmiJHnmoTlrp3ol4/lrrbkuaHjgIvkuLvpopjnrZbliJLvvIzpgoDor7fmnaXoh6rlhajlm73lkITlnLDnmoQgMzQg5L2N5o+S55S75biI77yM5Li65YWo5Zu9IDM0IOS4quecgee6p+ihjOaUv+WMuuWIhuWIq+WIm+S9nOaVsOWtl+aPkueUu++8jOS7peS4jeWQjOeahOiJuuacr+mjjuagvOaPj+e7mOWQhOWcsOeahOiHqueEtumjjuWFieOAgeS6uuaWh+aZr+inguS4juWutuS5oeiusOW/huOAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5a6i5oi35rKf6YCa44CB5o+S55S75Yqo5oCB5ouG6Kej5LiO6L2s5Zy65qKz55CG77yM5YyF5ous5qC55o2u5Yqo5oCB6ZyA5rGC5LiO576O5pyv5rKf6YCa5q+P5bmF5o+S55S755qE5YiG5bGC5pa55byP77yM5bm25a6M5oiQ5b2x54mHIDDigJQzOXPjgIExOjM24oCUMjowNiDnmoQgTW90aW9uIERlc2lnbuOAgicsXG4gICAgY2hhbGxlbmdlOiczNCDkvY3mj5LnlLvluIjnmoTnlLvpnaLlnKjpo47moLzjgIHmnoTlm77lkozlhYPntKDkuIrlt67lvILlvojlpKfvvIzpmr7ngrnmmK/lpoLkvZXlnKjkv53nlZnljp/kvZznibnngrnnmoTlkIzml7bvvIzorqnkuI3lkIzmj5LnlLvoh6rnhLblnLDov57mjqXotbfmnaXjgILliY3mnJ/pnIDopoHpgJDlvKDliIbmnpDnlLvpnaLvvIzku47kurrnianjgIHlu7rnrZHjgIHlsbHmsLTjgIHkupHlsYLnrYnlhYPntKDkuK3lr7vmib7lj6/ku6Xmib/mjqXkuIvkuIDplZznmoTop4bop4nlhbPns7vvvIzlho3pgJrov4fpga7mjKHjgIHlvaLmgIHlkbzlupTjgIHov5DliqjmlrnlkJHkuI4gTWF0Y2ggQ3V0IOiuvuiuoei9rOWcuu+8jOW5tuaPkOWJjeWPjeaOqOavj+W5heaPkueUu+mcgOimgeWmguS9leWIhuWxgu+8jOiuqei3qOmjjuagvOWIh+aNouS+neeEtuS/neaMgea1geeVheOAgidcbiAgfSxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOS4reWbveato+W9k+a9ric6IHtcbiAgICBvdmVydmlldzon5Lq65rCR5pel5oql5paw5aqS5L2T5o6o5Ye644CM5Lit5Zu95q2j5b2T5r2u44CN5Li76aKY5Lyg5pKt6K6h5YiS77yM6IGa54Sm5Lit5Zu95paH5YyW44CB56eR5oqA5LiO5raI6LS56aKG5Z+f77yM6YCa6L+H5Lyg57uf5LiO5b2T5Luj44CB5paH5YyW5LiO56eR5oqA55qE57uT5ZCI77yM5bGV546w5LiN5pat5Y+R5bGV55qE5Lit5Zu95Yib6YCg5Yqb5LiO5paw5pe25Luj6aOO5r2u44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYcgMOKAlDMwcyDmjIHnu63mjqjplZzku6Xlj4ogMjoyN+KAlDI6NTQg5oyB57ut5ouJ6ZWc55qEIE1vdGlvbiBEZXNpZ27jgILln7rkuo7lm6LpmJ/lt7LmnInnmoTnvo7mnK/ntKDmnZDvvIzph43mlrDnu4Tnu4fkuI3lkIznlLvpnaLnmoTliY3lkI7lsYLnuqfkuI7nqbrpl7TlhbPns7vvvIzlrozmiJDplb/plZzlpLTnmoTnurXmt7Hov5DliqjkuI7lnLrmma/nqb/moq3jgIInLFxuICAgIGNoYWxsZW5nZTon6Zq+54K55Zyo5LqO5aaC5L2V6K6p5aSn6YeP54us56uL55qE5LqM57u0576O5pyv57Sg5p2Q5b2i5oiQ6Laz5aSf5rex55qE56m66Ze057q15rex44CC5Yi25L2c5pe26ZyA6KaB6YeN5paw5ouG5YiG5YmN44CB5Lit44CB5ZCO5pmv77yM6YCa6L+H5LiN5ZCM5bGC57qn55qE5L2N56e76YCf5bqm44CB57yp5pS+5q+U5L6L5LiO6KeG5beu5YWz57O75bu656uL56m66Ze077yM5YaN6YWN5ZCI5oyB57ut5o6o6L+b5LiO5ouJ6L+c55qEIENhbWVyYSBNb3ZlbWVudO+8jOiuqemVnOWktOWDj+ecn+ato+epv+i2iuS4jeWQjOWcuuaZr+S4gOagt+iHqueEtui/nue7reOAgidcbiAgfSxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOaKl+aImOiDnOWIqeWFq+WNgeWRqOW5tOa8q+eUuyc6IHtcbiAgICBvdmVydmlldzon5Lq65rCR5pel5oql56S+5o6o5Ye644CM5rGf5bGx5aaC55S744CN57O75YiX55+t6KeG6aKR56ys5LiA5pyf44CK5LiN5bGI44CL77yM5LulIDEwIOS9meS7tuaKl+aImOe+juacr+e7j+WFuOS9nOWTgeS4uuWfuuehgO+8jOmAmui/h+WKqOaAgeW9seWDj+mHjeaWsOS4suiBlOWOhuWPsueUu+S9nO+8jOe6quW/teS4reWbveS6uuawkeaKl+aXpeaImOS6ieaaqOS4lueVjOWPjeazleilv+aWr+aImOS6ieiDnOWIqSA4MCDlkajlubTjgIInLFxuICAgIHJvbGU6J+i0n+i0o+mhueebrueahOWuouaIt+ayn+mAmuOAgeaVtOeJh+S4suWcuuS4jui9rOWcuuaehOaAne+8jOS7peWPiuWJjeacn+e0oOadkOaLhuWIhuinhOWIkuOAguagueaNruavj+W5heWOn+eUu+eahOWGheWuueiuvuiuoeeUu+mdouS5i+mXtOeahOi/nuaOpeaWueW8j++8jOW5tuS4jue+juacr+S8meS8tOayn+mAmumcgOimgeaLhuWIhuOAgeihpeWFqOeahOWbvuWxgu+8jOS4uuWQjue7reWKqOaAgeWItuS9nOW7uueri+e0oOadkOWfuuehgOOAgicsXG4gICAgY2hhbGxlbmdlOifpobnnm67mi7/liLDnmoTljp/lp4vntKDmnZDlpKflpJrmmK/miavmj4/lkI7nmoTljZXlvKAgSlBH77yM5rKh5pyJ546w5oiQ5Zu+5bGC77yM6ICM5LiU5LiN5ZCM55S75L2c5Zyo5p6E5Zu+44CB56yU6Kem5ZKM5YaF5a655LiK5beu5byC5b6I5aSn44CC6ZyA6KaB6YCQ5bmF5YiG5p6Q55S76Z2i77yM5LuO5Lq654mp44CB5bGx5rC044CB54Of6Zu+44CB56yU6Kem562J5YWD57Sg5Lit5a+75om+5YmN5ZCO6ZWc5aS055qE6L+e5o6l5YWz57O777yM5YaN5Y+N5o6o6ZyA6KaB5aaC5L2V5ouG5bGC5LiO6KGl5YWo77yM6K6p5Y6f5pys54us56uL55qE5Y6G5Y+y55S75L2c6IO95aSf6Ieq54S26L+H5rih77yM5b2i5oiQ6L+e57ut55qE5Yqo5oCB5Y+Z5LqL44CCJ1xuICB9LFxuICAn5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq357O75YiXJzoge1xuICAgIG92ZXJ2aWV3OifkurrmsJHml6XmiqXmlrDlqpLkvZPlm7Tnu5XigJzlhajpnaLlsI/lurfigJ3mjqjlh7rns7vliJflhoXlrrnvvIzpgJrov4fkuI3lkIzkurrnianjgIHnlJ/mtLvlnLrmma/kuI7npL7kvJrlj5HlsZXliIfpnaLvvIzorrDlvZXohLHotKvmlLvlnZrjgIHmsJHnlJ/mlLnlloTkuI7ln47kuaHlj5HlsZXnmoTlj5jljJbvvIzlkYjnjrDlhajpnaLlsI/lurfog4zmma/kuIvmma7pgJrkurrnmoTnnJ/lrp7nlJ/mtLvkuI7ml7bku6Plj5jljJbjgIInLFxuICAgIHJvbGU6J+i0n+i0o+ezu+WIl+mhueebruS4remDqOWIhuevh+eroOeahCBNb3Rpb24gRGVzaWdu44CC5Z+65LqO5Zui6Zif5bey5pyJ55qE576O5pyv6KeG6KeJ5a6M5oiQ5Yqo5oCB5ryU57uO44CB5Zu+5b2i5Yqo55S75LiO6ZWc5aS06IqC5aWP6K6+6K6h77yM5YW35L2T6LSf6LSj54mH5q616KeB5LiL5pa56KeG6aKR44CCJ1xuICB9XG59KVxuXG5PYmplY3QuYXNzaWduKHByb2plY3REZXRhaWxzLCB7XG4gICfms6Hms6HnjpvniblY5Lic5pys55S16L2m54G15oKJJzoge1xuICAgIG92ZXJ2aWV3OifkuLrms6Hms6Hnjpvnibkgw5cg5Lic6aOO5pys55Sw54G15oKJ6IGU5ZCN6aG555uu5Yi25L2c5a6j5Lyg6KeG6aKR44CC5Zu057uV5r2u546pIElQIOS4juW5tOi9u+WMluaxvei9puWTgeeJjOeahOi3qOeVjOe7k+WQiO+8jOmAmui/h+inkuiJsuOAgeS6p+WTgeS4juWcuuaZr+S5i+mXtOeahOS6kuWKqO+8jOW7uueri+abtOi9u+advuOAgeaciei2o+eahOiBlOWQjeinhuinieS9k+mqjOOAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5YmN5pyf5Yib5oSP5p6E5oCd44CB5pWF5LqL54mI5Yib5oSP5p6E5oCd5Y+K5Yqo5oCB5YiG6ZWc5Ymq6L6R44CC5LuO6IGU5ZCN5Li76aKY5Ye65Y+R5qKz55CG5b2x54mH55qE5pW05L2T5Yib5oSP5LiO5Y+Z5LqL6IqC5aWP77yM5bCG5oOz5rOV6L2s5YyW5Li65YW35L2T5YiG6ZWc77yM5bm26YCa6L+H5Yqo5oCB6aKE5ryU5o+Q5YmN6aqM6K+B6ZWc5aS044CB6L2s5Zy65LiO5pW054mH6IqC5aWP44CCJ1xuICB9LFxuICAn5q+U5Lqa6L+q5rW36LG5MDZHVCB4IOaegeWTgemjnui9pic6IHtcbiAgICBvdmVydmlldzon5Li65q+U5Lqa6L+q5rW36LG5MDZHVCDDl+OAiuaegeWTgemjnui9pu+8mumbhue7k+OAi+iBlOWQjemhueebruWItuS9nOWuo+S8oOinhumikeOAgumhueebruWwhueOsOWunuS4reeahOa1t+ixuTA2R1TpqbblhaXomZrmi5/nq57pgJ/kuJbnlYzvvIzpgJrov4fpq5jpgJ/pqb7pqbbjgIHnqbrpl7Tlj5jljJbkuI7muLjmiI/ljJbop4bop4nvvIzlkYjnjrDovabovobnmoTmgKfog73kuI7lubTovbvjgIHmva7otqPlsZ7mgKfjgIInLFxuICAgIHJvbGU6J+i0n+i0o+mhueebrueahOWJjeacn+WIm+aEj+aehOaAne+8jOWbtOe7leKAnOeOsOWunuaxvei9piDDlyDomZrmi5/nq57pgJ/kuJbnlYzigJ3nmoTogZTlkI3mpoLlv7XvvIzmnoTmgJ3ovabovobov5vlhaXmuLjmiI/kuJbnlYzlkI7nmoTlnLrmma/lj5jljJbjgIHpqb7pqbbliqjkvZzkuI7plZzlpLTor63oqIDvvIzlubblsIbmlbTkvZPliJvmhI/ovazljJbkuLrlj6/kvpvlkI7nu63liLbkvZzmiafooYznmoTlrozmlbTliIbplZzjgIInXG4gIH0sXG4gICfmsZ/oi4/ljavop4boioLnm67jgJDkuK3ljY7kuabpmaLjgJEnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuaxn+iLj+WNq+inhuaWh+WMluiKguebruOAiuS4reWNjuS5pumZouOAi+WItuS9nOiKguebrueJh+WktOOAguW9seeJh+S7peKAnOS5pumZouKAneS4uui1t+eCue+8jOmAmui/h+S5puWNt+OAgeWxseawtOOAgeS6uuaWh+S4juenkeaKgOetieaEj+ixoeeahOS4jeaWrea8lOWPmO+8jOWwhuS8oOe7n+aWh+WMluS4juW9k+S7o+aWh+aYjui/nuaOpei1t+adpe+8jOWRiOeOsOS4reWNjuaWh+WMluWcqOaXtuS7o+WPkeWxleS4reeahOW7tue7reS4juS8oOaJv+OAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5YmN5pyf5Yib5oSP5p6E5oCd5Y+K5pWF5LqL54mI5Yib5oSP5p6E5oCd44CC5Zu057uV4oCc5paH5YyW5Lyg5om/5LiO5pe25Luj5ryU6L+b4oCd5qKz55CG54mH5aS055qE5pW05L2T6KeG6KeJ6ISJ57uc77yM5p6E5oCd5LuO5Lyg57uf5Lmm6Zmi44CB5Lq65paH5oSP6LGh5Yiw546w5Luj56eR5oqA56m66Ze055qE5Zy65pmv5Y+Y5YyW5LiO6ZWc5aS05o6o6L+b77yM5bm25bCG5qaC5b+16L2s5YyW5Li65a6M5pW05YiG6ZWc77yM5Li65ZCO57ut5LiJ57u05Yqo5oCB5Yi25L2c5o+Q5L6b5Yib5oSP5Z+656GA44CCJ1xuICB9LFxuICAn5a6J6LiPUGc356eR5oqA6LeR6Z6LJzoge1xuICAgIG92ZXJ2aWV3OifkuLrlronouI8gUEc3IOe8k+mch+enkeaKgOW5s+WPsOaehOaAneS6p+WTgeWuo+S8oOeJh++8jOS7pei3keatpei/h+eoi+S4reKAnOiQveWcsOWGsuWHu+KAlOe8k+mch+WQuOaUtuKAlOiDvemHj+WbnuW8ueKAneS4uuaguOW/g++8jOWwhuaKveixoeeahOS4reW6leenkeaKgOi9rOWMluS4uuabtOebtOinguOAgeabtOWFt+WGsuWHu+WKm+eahOinhuinieS9k+mqjOOAgicsXG4gICAgcm9sZTon6LSf6LSj54mH5a2Q5LiJ57u06YOo5YiG55qE5YmN5pyf5Yib5oSP5p6E5oCd5Y+K5pWF5LqL54mI5Yib5oSP5p6E5oCd44CC5Zu057uVIFBHNyDnmoTnvJPpnIfnp5HmioDnibnngrnvvIzmnoTmgJ3lvbHniYfmlbTkvZPop4bop4nmpoLlv7XjgIHkuqflk4Hnp5HmioDnmoTooajnjrDmlrnlvI/jgIHlnLrmma/lj5jljJbkuI7plZzlpLTor63oqIDvvIzkuLrlkI7nu63kuInnu7TliqjmgIHliLbkvZzmj5DkvpvmiafooYzln7rnoYDjgIInXG4gIH0sXG4gICdIVUFXRUkg6bi/6JKZ55Sf5oCBJzoge1xuICAgIG92ZXJ2aWV3OifkuLogSFVBV0VJIOm4v+iSmeaZuumAieeUn+aAgeWItuS9nOWTgeeJjOWuo+S8oOinhumikeOAguW9seeJh+WbtOe7leaZuuaFp+WutuW6reS4juWkmuiuvuWkh+WNj+WQjO+8jOmAmui/h+S4jeWQjOeUn+a0u+WcuuaZr+S5i+mXtOeahOi/nuaOpe+8jOWRiOeOsOaZuuiDveiuvuWkh+iejeWFpeaXpeW4uOeUn+a0u+WQjuaJgOaehOW7uueahOWFqOWcuuaZr+aZuuaFp+S9k+mqjOOAgicsXG4gICAgcm9sZTon6LSf6LSj5pW05pSv5b2x54mH55qE5YmN5pyf5Yib5oSP77yM5LuO4oCc6bi/6JKZ55Sf5oCB4oCd55qE5qC45b+D5qaC5b+15Ye65Y+R77yM5qKz55CG5LiN5ZCM5pm66IO95Lqn5ZOB5LiO55Sf5rS75Zy65pmv5LmL6Ze055qE5YWz57O777yM5p6E5oCd5pW054mH55qE6KeG6KeJ5Y+Z5LqL44CB5Zy65pmv6L2s5o2i5LiO6ZWc5aS06K+t6KiA77yM5bm25bCG5Yib5oSP6L2s5YyW5Li65a6M5pW05pWF5LqL5p2/77yM5Li65ZCO57ut5LiJ57u05Yqo5oCB5Yi25L2c5o+Q5L6b5omn6KGM5Z+656GA44CCJ1xuICB9XG59KVxuXG5jb25zdCBjb3ZlckZpbGVzID0gYDAyYjNmZDQ0NzFjNzI1YzQxNzA2YzEzN2M1ODAxMDA0LnBuZyAwNWJhNTQyMTlmODVmODM1MTdhZjQ2MzU0MDZiYjg3YS5wbmcgMGIyNGRhMGY1NzcyNTE4ZjA5ZDg0YTJlOTc1YzNlYTcucG5nIDBiNWFhZjJjYjliNTA4Mzc0YWI5NWE5MzVlZGZhNWQ0LnBuZyAwZWYzNDMwZDAwODFjYzdjNDAwYzMyZjI3Mjc5YjJhZC5wbmcgMTZkYjVkMjA1NDY1NDA0YzFkZTk3YWIzYjcwMjhmOTUucG5nIDFiZTgwN2ZlYTc2ZWE2NjVjZmI3OGEwMTIwZDU5NWNkLnBuZyAxZjk0OWVhNzE3YmEyYjUzN2RlYzYxZDM4ZWNiMDM1Yy5wbmcgMjdiMmYyZmU2YjJmMDNiM2E3OGYyN2Q1MGY1ZmU4MjUucG5nIDJhYzYzOWUzMTRiOWFlODE1ZTY3M2YxMmY0NDYxOTBhLnBuZyAyZjdhNmQzMTZlMTljOWMzNjc1M2U4NTYxMTk3YzU0Yi5wbmcgNDdiOTM5YTI0MDA4ZTAzMjUxMDg2YWM1MDg4Njg4ZjgucG5nIDU2ZTJiMTViMmNlZDczODliZjc1NjRhOTA1M2FkM2FlLnBuZyA1OTUyOTMzNjVmMTc2YmUwMzU1YWQ5Mjg5MTAzNjE4OC5wbmcgNTk5NjhmNzY5NmM0YjBhNGIxY2RkNWIzMjUwYzVjNzAucG5nIDVkMDlmOTFlZmViMTk4OGZkYzNlOTNmNzQ4ZjhiY2ZjLnBuZyA1ZDgwMWFjMTBhZWE1YTA5MTFjOTY2NjEzMjI4ZjJlZS5wbmcgNWU0YjNiMzM0ZGMzODFiOWE4NjUwNzVlMGVlOGRhMWMucG5nIDYxN2MzNGIyZGQxMGRmMTViMzkyOWE2ODlmYmM2NDJjLnBuZyA2MzE1OTgyMWNhZmExNjRjYThjYTVlMjI4MzdmZTU5ZS5wbmcgNjMyNzQ4MTYxNDJkMTkyNzA4YzFlZmZmMWViMDExNDkucG5nIDY0YjQ1ZjdmNGExYTdkZmYxZTFjZjM3YTU3YzFlZmI0LnBuZyA2NjRlMzRiODAwY2U5YzcwOGNkYzNiODg4YTk0YjE3ZC5wbmcgNmUxZmZiOWU5MTc5OWI4Yjc1NTFkZDUyNTBkMTFmMGQucG5nIDczOTVhM2JiODMyNjcyOTRlNmE5OTQ4NjkzMGQyMzdhLnBuZyA3NTg1MDU2YzQwZjI0NTc3NzQ2Y2I2Y2QwZDU2OWU3Zi5wbmcgN2VlOWViZDdjNGE3MDU5YjA0NmVjNjFiMGU4NGY5NjMucG5nIDgxYzc1MTU0NWE2OTgxOTAzNzhjNzlkNGQwNGQ0Y2Y5LnBuZyA4NTg4Yzc5ZjY3M2Y5NzBhNmY2NmQ4ZjMwMDRjMWU1Yy5wbmcgODZkNjczYWQwNDY5N2Y3ZDJjMjM1OWZkYTkzNmMyMjgucG5nIDhhNDQ0YzkwZmIxM2Y1MTY5NmZjMDc4Y2M5MzcyY2RkLnBuZyA5MmQwMGYyM2UyNTI3ZjBhMDExOTFhZWJkMTZiMDQ4NS5wbmcgOTMxZjQzMzJjZjc4Yzk2YjgzYjVmMGQxOWNhMzhmMzcucG5nIDk2YzkzOTg5NjZlNGY5ZjgxMjU5ZmRmOWM3NzkxYjM0LnBuZyA5YWJlYjRhZDRmYTAzZDRhNTM0NjBiNDBjNGNlOTlhYi5wbmcgOWM0ZjMyMjNmMDRmODk4ZjM5NjYwYTYyZTgxMDk1ZWYucG5nIGEzODhiMTIyNDlmYTVhMTM3ZGI5NDNlYmVmMDMzM2RhLnBuZyBhODY2NjU2NTkzZTQ4MmZjNWQ0ZTYxYzI3YzMwM2IzMy5wbmcgYWFkMjBmNWY0YTIzNWUzNjQ3ZmUwY2NkMmRjYWYyZDgucG5nIGFmNzE2ZmEwZjI1NDNjMjY5MTc0OTg3NDA0MTBkNWYxLnBuZyBiNGE5OWU2Y2UyYjIxYTQwODVmNWY4MjczMmI3Y2I1OS5wbmcgYzk0MWMxYTNlMWIyNzRiZWNlNzhmZGE3YTUyZGU1ZGIucG5nIGNkNzE1MDEyYzRjMjU3ZDM5MjAxMzhhY2YwZWY3ZDE3LnBuZyBkZDc4ODkyNzRjZmVlM2UyNWQzYmFmNjhkYzM2NmNjMS5wbmcgZGU3MzI0ZGMyYTE4YmNiYjA5ODI2OTBkZmM3YzMwNDIucG5nIGU5MzhmMjU2MDcyNWIxZDJhNTVmYWUwYWY0Y2Y5MTdmLnBuZyBlYjk0MWFkNzkwYTc2MmUyZGJhNjFjYjAyNDU3NGQ5Ny5wbmcgZmM5ZTY4YzAyNjkxOTg4ZGU0MWExM2M0YTc5MzJlM2QucG5nIGZmZmFjYTIwMmQ4ZmYwZmEzNGJkMTA4MjAzZmUzN2E3LnBuZ2Auc3BsaXQoJyAnKVxuXG5mdW5jdGlvbiBDaXJjdWxhckdhbGxlcnkoe2JlbmQ9NCxib3JkZXJSYWRpdXM9LjA1LHNjcm9sbFNwZWVkPTMuOSxzY3JvbGxFYXNlPS4wN30pe1xuICBjb25zdCBjb250YWluZXIgPSB1c2VSZWYobnVsbCksIGNhcmRzID0gdXNlUmVmKFtdKVxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zdCBlbD1jb250YWluZXIuY3VycmVudFxuICAgIGlmKCFlbCkgcmV0dXJuXG4gICAgY29uc3Qgc2Nyb2xsPXtjdXJyZW50OjAsdGFyZ2V0OjB9LCBwb2ludGVyPXtkb3duOmZhbHNlLHN0YXJ0OjAscG9zaXRpb246MH0sIG1ldHJpY3M9e3dpZHRoOjAsY2FyZDowLHNwYWNlOjAsdG90YWw6MH1cbiAgICBsZXQgcmFmPTAsIGxhc3Q9cGVyZm9ybWFuY2Uubm93KCksIGhvdmVyaW5nPWZhbHNlXG4gICAgY29uc3QgcmVzaXplPSgpPT57bWV0cmljcy53aWR0aD1lbC5jbGllbnRXaWR0aDttZXRyaWNzLmNhcmQ9TWF0aC5tYXgoOTIsTWF0aC5taW4oMTQyLG1ldHJpY3Mud2lkdGgqLjExNSkpO21ldHJpY3Muc3BhY2U9bWV0cmljcy5jYXJkKzE4O21ldHJpY3MudG90YWw9bWV0cmljcy5zcGFjZSpjb3ZlckZpbGVzLmxlbmd0aH1cbiAgICBjb25zdCB3aGVlbD1lPT57ZS5wcmV2ZW50RGVmYXVsdCgpO3Njcm9sbC50YXJnZXQrPU1hdGguc2lnbihlLmRlbHRhWXx8ZS5kZWx0YVgpKnNjcm9sbFNwZWVkKjQyfVxuICAgIGNvbnN0IGRvd249ZT0+e3BvaW50ZXIuZG93bj10cnVlO3BvaW50ZXIuc3RhcnQ9ZS5jbGllbnRYO3BvaW50ZXIucG9zaXRpb249c2Nyb2xsLnRhcmdldDtlbC5zZXRQb2ludGVyQ2FwdHVyZT8uKGUucG9pbnRlcklkKX1cbiAgICBjb25zdCBtb3ZlPWU9PntpZihwb2ludGVyLmRvd24pc2Nyb2xsLnRhcmdldD1wb2ludGVyLnBvc2l0aW9uKyhwb2ludGVyLnN0YXJ0LWUuY2xpZW50WCkqc2Nyb2xsU3BlZWQqLjc1fVxuICAgIGNvbnN0IHVwPSgpPT57cG9pbnRlci5kb3duPWZhbHNlO3Njcm9sbC50YXJnZXQ9TWF0aC5yb3VuZChzY3JvbGwudGFyZ2V0L21ldHJpY3Muc3BhY2UpKm1ldHJpY3Muc3BhY2V9XG4gICAgY29uc3QgdGljaz1ub3c9PntcbiAgICAgIGNvbnN0IGR0PU1hdGgubWluKDMyLG5vdy1sYXN0KTtsYXN0PW5vd1xuICAgICAgaWYoIXBvaW50ZXIuZG93biYmIWhvdmVyaW5nKXNjcm9sbC50YXJnZXQrPXNjcm9sbFNwZWVkKi4wMzUqZHRcbiAgICAgIHNjcm9sbC5jdXJyZW50Kz0oc2Nyb2xsLnRhcmdldC1zY3JvbGwuY3VycmVudCkqc2Nyb2xsRWFzZVxuICAgICAgY29uc3QgaGFsZj1tZXRyaWNzLndpZHRoLzJcbiAgICAgIGNhcmRzLmN1cnJlbnQuZm9yRWFjaCgoY2FyZCxpKT0+e1xuICAgICAgICBpZighY2FyZClyZXR1cm5cbiAgICAgICAgbGV0IHg9aSptZXRyaWNzLnNwYWNlLXNjcm9sbC5jdXJyZW50XG4gICAgICAgIHg9KCh4K21ldHJpY3MudG90YWwvMiklbWV0cmljcy50b3RhbCttZXRyaWNzLnRvdGFsKSVtZXRyaWNzLnRvdGFsLW1ldHJpY3MudG90YWwvMlxuICAgICAgICBjb25zdCBuPU1hdGgubWF4KC0xLjQsTWF0aC5taW4oMS40LHgvTWF0aC5tYXgoMSxoYWxmKSkpXG4gICAgICAgIGNvbnN0IHk9TWF0aC5hYnMobipuKSpiZW5kKjIwXG4gICAgICAgIGNvbnN0IHJvdGF0ZT0tbipiZW5kKjUuNVxuICAgICAgICBjb25zdCBzY2FsZT1NYXRoLm1heCguNzIsMS1NYXRoLmFicyhuKSouMTYpXG4gICAgICAgIGNhcmQuc3R5bGUud2lkdGg9YCR7bWV0cmljcy5jYXJkfXB4YFxuICAgICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybT1gdHJhbnNsYXRlM2QoY2FsYygtNTAlICsgJHt4fXB4KSxjYWxjKC01MCUgKyAke3l9cHgpLDApIHJvdGF0ZVooJHtyb3RhdGV9ZGVnKSBzY2FsZSgke3NjYWxlfSlgXG4gICAgICAgIGNhcmQuc3R5bGUub3BhY2l0eT1TdHJpbmcoTWF0aC5tYXgoMCwxLU1hdGgubWF4KDAsTWF0aC5hYnMobiktLjgyKSoyLjQpKVxuICAgICAgICBjYXJkLnN0eWxlLnpJbmRleD1TdHJpbmcoMTAwLU1hdGgucm91bmQoTWF0aC5hYnMobikqMjApKVxuICAgICAgfSlcbiAgICAgIHJhZj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcbiAgICB9XG4gICAgcmVzaXplKCk7YWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJyxyZXNpemUpO2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJyx3aGVlbCx7cGFzc2l2ZTpmYWxzZX0pO2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJyxkb3duKTtlbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsbW92ZSk7ZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJyx1cCk7ZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsdXApO2VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCgpPT5ob3ZlcmluZz10cnVlKTtlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywoKT0+e2hvdmVyaW5nPWZhbHNlO3VwKCl9KTtyYWY9cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spXG4gICAgcmV0dXJuKCk9PntjYW5jZWxBbmltYXRpb25GcmFtZShyYWYpO3JlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScscmVzaXplKTtlbC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsd2hlZWwpO2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJyxkb3duKTtlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVybW92ZScsbW92ZSk7ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJyx1cCk7ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsdXApfVxuICB9LFtiZW5kLHNjcm9sbFNwZWVkLHNjcm9sbEVhc2VdKVxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJjaXJjdWxhci1nYWxsZXJ5XCIgcmVmPXtjb250YWluZXJ9IHN0eWxlPXt7Jy0tcmFkaXVzJzpgJHtib3JkZXJSYWRpdXMqMTAwfSVgfX0+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJnYWxsZXJ5LXN0YWdlXCI+e2NvdmVyRmlsZXMubWFwKChmaWxlLGkpPT48ZmlndXJlIGNsYXNzTmFtZT17YGNyb3AtJHtpJTd9YH0gcmVmPXtub2RlPT5jYXJkcy5jdXJyZW50W2ldPW5vZGV9IGtleT17ZmlsZX0+PGltZyBzcmM9e2Ake0F9d29yay1jb3ZlcnMvJHtmaWxlfWB9IGFsdD17YOS9nOWTgeWwgemdoiAke2krMX1gfS8+PC9maWd1cmU+KX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktY2FwdGlvblwiPjxiPlBST0pFQ1QgQ09WRVJTPC9iPjxzcGFuPjQ5IFNFTEVDVEVEIEZSQU1FUyDCtyBBVVRPIFNDUk9MTDwvc3Bhbj48L2Rpdj5cbiAgPC9kaXY+XG59XG5cbmZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGxpbmtzID0gW1sndG9wJywnQWJvdXQgTWUnXSxbJ3Nob3dyZWVsJywnU0hPV1JFRUwnXSxbJ3dvcmtzJywnU0VMRUNURUQgV09SS1MnXSxbJ2NhdmFscnknLCdDQVZBTFJZIExBQiddLFsnYWJvdXQnLCdSZXN1bWUnXV1cbiAgcmV0dXJuIDxoZWFkZXIgY2xhc3NOYW1lPVwibmF2LXdyYXBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1tZXRhXCI+PGI+QS5HVTwvYj48Yj5NT1RJT04gREVTSUdORVI8L2I+PGI+UEVSU09OQUwgUE9SVEZPTElPIFdFQlNJVEU8L2I+PC9kaXY+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXYtdG9nZ2xlXCIgb25DbGljaz17KCkgPT4gc2V0T3Blbighb3Blbil9PklOREVYIDxpPntvcGVuID8gJ8OXJyA6ICcrJ308L2k+PC9idXR0b24+XG4gICAgPG5hdiBjbGFzc05hbWU9e29wZW4gPyAnb3BlbicgOiAnJ30+e2xpbmtzLm1hcCgoW2lkLHRdKT0+PGEga2V5PXtpZH0gaHJlZj17YCMke2lkfWB9IG9uQ2xpY2s9eygpPT5zZXRPcGVuKGZhbHNlKX0+e3R9PC9hPil9PC9uYXY+XG4gIDwvaGVhZGVyPlxufVxuXG5mdW5jdGlvbiBBcnJvd0ljb24oe2RpcmVjdGlvbj0ndXAnLCBjbGFzc05hbWU9Jyd9KSB7XG4gIHJldHVybiA8c3ZnIGNsYXNzTmFtZT17YHZlY3Rvci1hcnJvdyB2ZWN0b3ItYXJyb3ctJHtkaXJlY3Rpb259ICR7Y2xhc3NOYW1lfWAudHJpbSgpfSB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZm9jdXNhYmxlPVwiZmFsc2VcIj5cbiAgICA8cGF0aCBkPVwiTTUgMTlMMTkgNU04IDVoMTF2MTFcIiBmaWxsPVwibm9uZVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiMi40XCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cbiAgPC9zdmc+XG59XG5cbmZ1bmN0aW9uIExhenlMb29wVmlkZW8oe3NyYywgcG9zdGVyLCBjbGFzc05hbWU9JycsIGFyaWFMYWJlbH0pIHtcbiAgY29uc3QgcmVmPXVzZVJlZihudWxsKVxuICBjb25zdCBbbG9hZGVkLHNldExvYWRlZF09dXNlU3RhdGUoZmFsc2UpXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGVsPXJlZi5jdXJyZW50XG4gICAgaWYoIWVsKXJldHVyblxuICAgIGlmKCEoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpKXtzZXRMb2FkZWQodHJ1ZSk7cmV0dXJufVxuICAgIGNvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57XG4gICAgICBlbnRyaWVzLmZvckVhY2goZW50cnk9PntcbiAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3Rpbmcpe3NldExvYWRlZCh0cnVlKTtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PmVsLnBsYXkoKS5jYXRjaCgoKT0+e30pKX1cbiAgICAgICAgZWxzZSBlbC5wYXVzZSgpXG4gICAgICB9KVxuICAgIH0se3Jvb3RNYXJnaW46JzI4MHB4IDBweCcsdGhyZXNob2xkOi4wMX0pXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgICByZXR1cm4oKT0+b2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gIH0sW10pXG4gIHJldHVybiA8dmlkZW8gcmVmPXtyZWZ9IGNsYXNzTmFtZT17Y2xhc3NOYW1lfSBzcmM9e2xvYWRlZD9zcmM6dW5kZWZpbmVkfSBwb3N0ZXI9e3Bvc3Rlcn0gYXJpYS1sYWJlbD17YXJpYUxhYmVsfSBtdXRlZCBsb29wIHBsYXlzSW5saW5lIGF1dG9QbGF5PXtsb2FkZWR9IHByZWxvYWQ9e2xvYWRlZD8nbWV0YWRhdGEnOidub25lJ30vPlxufVxuXG5mdW5jdGlvbiBIZXJvKCkge1xuICBjb25zdCBoZXJvID0gdXNlUmVmKG51bGwpLCB2aWRlbyA9IHVzZVJlZihudWxsKVxuICBjb25zdCB0YXJnZXRUaW1lID0gdXNlUmVmKDApLCBjdXJyZW50VGltZSA9IHVzZVJlZigwKSwgcG9pbnRlckFjdGl2ZSA9IHVzZVJlZihmYWxzZSksIHJhZiA9IHVzZVJlZigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdHJhY2tQb2ludGVyID0gZSA9PiB7XG4gICAgICBpZighaGVyby5jdXJyZW50IHx8ICF2aWRlby5jdXJyZW50IHx8ICFOdW1iZXIuaXNGaW5pdGUodmlkZW8uY3VycmVudC5kdXJhdGlvbikpIHJldHVyblxuICAgICAgY29uc3QgcmVjdCA9IGhlcm8uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgY29uc3QgZHggPSAoZS5jbGllbnRYIC0gKHJlY3QubGVmdCArIHJlY3Qud2lkdGggLyAyKSkgLyAocmVjdC53aWR0aCAvIDIpXG4gICAgICBjb25zdCBkeSA9IChlLmNsaWVudFkgLSAocmVjdC50b3AgKyByZWN0LmhlaWdodCAvIDIpKSAvIChyZWN0LmhlaWdodCAvIDIpXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZHgsIGR5KVxuICAgICAgbGV0IGFuZ2xlID0gTWF0aC5hdGFuMigtZHksIGR4KVxuICAgICAgaWYoYW5nbGUgPCAwKSBhbmdsZSArPSBNYXRoLlBJICogMlxuICAgICAgdGFyZ2V0VGltZS5jdXJyZW50ID0gZGlzdGFuY2UgPCAuMDggPyAwIDogTWF0aC5taW4odmlkZW8uY3VycmVudC5kdXJhdGlvbiAtIC4xMiwgMiArIGFuZ2xlIC8gKE1hdGguUEkgKiAyKSAqIDgpXG4gICAgfVxuICAgIGNvbnN0IGVudGVyID0gKCkgPT4geyBwb2ludGVyQWN0aXZlLmN1cnJlbnQgPSB0cnVlOyBjdXJyZW50VGltZS5jdXJyZW50ID0gdmlkZW8uY3VycmVudD8uY3VycmVudFRpbWUgfHwgMDsgdmlkZW8uY3VycmVudD8ucGF1c2UoKSB9XG4gICAgY29uc3QgbGVhdmUgPSAoKSA9PiB7IHBvaW50ZXJBY3RpdmUuY3VycmVudCA9IGZhbHNlOyB2aWRlby5jdXJyZW50Py5wYXVzZSgpIH1cbiAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgaWYocG9pbnRlckFjdGl2ZS5jdXJyZW50ICYmIHZpZGVvLmN1cnJlbnQ/LnJlYWR5U3RhdGUgPj0gMil7XG4gICAgICAgIGN1cnJlbnRUaW1lLmN1cnJlbnQgKz0gKHRhcmdldFRpbWUuY3VycmVudCAtIGN1cnJlbnRUaW1lLmN1cnJlbnQpICogLjEzXG4gICAgICAgIGlmKE1hdGguYWJzKHZpZGVvLmN1cnJlbnQuY3VycmVudFRpbWUgLSBjdXJyZW50VGltZS5jdXJyZW50KSA+IC4wMTgpIHZpZGVvLmN1cnJlbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZS5jdXJyZW50XG4gICAgICB9XG4gICAgICByYWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICAgIH1cbiAgICBjb25zdCBlbCA9IGhlcm8uY3VycmVudFxuICAgIGVsPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZW50ZXIpXG4gICAgZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRyYWNrUG9pbnRlciwge3Bhc3NpdmU6dHJ1ZX0pXG4gICAgZWw/LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBsZWF2ZSlcbiAgICB0aWNrKClcbiAgICByZXR1cm4gKCkgPT4geyBlbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGVudGVyKTsgZWw/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRyYWNrUG9pbnRlcik7IGVsPy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmUpOyBjYW5jZWxBbmltYXRpb25GcmFtZShyYWYuY3VycmVudCkgfVxuICB9LCBbXSlcbiAgcmV0dXJuIDxzZWN0aW9uIGlkPVwidG9wXCIgY2xhc3NOYW1lPVwiaGVyby1zY3JvbGxcIiByZWY9e2hlcm99PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1zdGlja3lcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby12aWRlb1wiPjxpbWcgY2xhc3NOYW1lPVwiaGVyby1wb3N0ZXJcIiBzcmM9e0ErJ2hlcm8tcG9zdGVyLmpwZyd9IGFsdD1cIlwiIGZldGNoUHJpb3JpdHk9XCJoaWdoXCIvPjx2aWRlbyByZWY9e3ZpZGVvfSBzcmM9e0ErJ2hlcm8ubXA0J30gcG9zdGVyPXtBKydoZXJvLXBvc3Rlci5qcGcnfSBtdXRlZCBwbGF5c0lubGluZSBwcmVsb2FkPVwibWV0YWRhdGFcIi8+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc2hhZGVcIi8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tZ3JpZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGl0bGVcIj5cbiAgICAgICAgICA8aDE+PHNwYW4+TU9USU9OPC9zcGFuPjxzcGFuPkRFU0lHTkVSPC9zcGFuPjwvaDE+XG4gICAgICAgICAgPGEgaHJlZj1cIiN3b3Jrc1wiPui1sOi/m+aIkeeahOWIm+S9nOS4lueVjCA8Yj48QXJyb3dJY29uIGRpcmVjdGlvbj1cInVwXCIvPjwvYj48L2E+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXByb2ZpbGVcIj48aDI+5Y2r5Liw6ZGrPC9oMj48Yj7otYTmt7HliqjmgIHorr7orqHluIggLyDop4bpopHorr7orqHluIg8L2I+PHA+N+W5tOWVhuS4mumhueebruiuvuiuoee7j+mqjDxici8+5LiT5rOo5ZOB54mM5Yqo5oCB6KeG6KeJ44CB5Yib5oSP6KeG6aKR5LiOIE1vdGlvbiBHcmFwaGljczwvcD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1tb25vZ3JhbVwiPkEuR1U8YnIvPlBFUlNPTkFMPGJyLz5QT1JURk9MSU88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNtaWxlXCIgYXJpYS1sYWJlbD1cIueskeiEuOagh+W/l1wiPjxzcGFuPjxpLz48aS8+PGIvPjwvc3Bhbj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG59XG5cbmZ1bmN0aW9uIFNlY3Rpb25UaXRsZSh7aW5kZXgsIGVuLCBjbn0pIHsgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPjxzcGFuPntpbmRleH08L3NwYW4+PGRpdj48aDI+e2VufSA8QXJyb3dJY29uIGRpcmVjdGlvbj1cImRvd25cIi8+PC9oMj48cD57Y259PC9wPjwvZGl2PjwvZGl2PiB9XG5cbmZ1bmN0aW9uIFNob3dyZWVsKCl7XG4gIGNvbnN0IHY9dXNlUmVmKG51bGwpXG4gIHJldHVybiA8c2VjdGlvbiBpZD1cInNob3dyZWVsXCIgY2xhc3NOYW1lPVwic2VjdGlvbiByZWVsXCI+PFNlY3Rpb25UaXRsZSBpbmRleD1cIjAxXCIgZW49XCJTSE9XUkVFTFwiIGNuPVwi5L2c5ZOB5Ymq6L6RXCIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd3JlZWwtc2luZ2xlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlZWwtZnJhbWVcIiBhcmlhLWxhYmVsPVwi5pKt5pS+5oiW5pqC5YGcIFNIT1dSRUVMXCIgb25DbGljaz17KCk9PntpZih2LmN1cnJlbnQucGF1c2VkKXYuY3VycmVudC5wbGF5KCk7ZWxzZSB2LmN1cnJlbnQucGF1c2UoKX19PlxuICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwic2hvd3JlZWwtbWFpbi12aWRlb1wiIHJlZj17dn0gc3JjPVwiLi/llYbkuJrpobnnm64vU0hPV1JFRUwv5Liq5Lq65L2c5ZOB6ZuG5Ymq6L6RMDkyNy5tcDRcIiBwb3N0ZXI9e0ErJ3Nob3dyZWVsLTNzMTIuanBnJ30gcGxheXNJbmxpbmUgcHJlbG9hZD1cIm1ldGFkYXRhXCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbn1cblxuZnVuY3Rpb24gV29ya3MoKXtcbiAgY29uc3QgW3NlbGVjdGVkLHNldFNlbGVjdGVkXT11c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZXhwYW5kZWRGcmFtZSxzZXRFeHBhbmRlZEZyYW1lXT11c2VTdGF0ZShudWxsKVxuICB1c2VFZmZlY3QoKCk9Pntkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93PXNlbGVjdGVkPydoaWRkZW4nOicnO3JldHVybigpPT57ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz0nJ319LFtzZWxlY3RlZF0pXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGNsb3NlPWU9PntpZihlLmtleT09PSdFc2NhcGUnKXNldEV4cGFuZGVkRnJhbWUobnVsbCl9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsY2xvc2UpXG4gICAgcmV0dXJuKCk9PnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGNsb3NlKVxuICB9LFtdKVxuICBjb25zdCBncm91cD1zZWxlY3RlZD9ncm91cHMuZmluZChnPT5nLml0ZW1zLmluY2x1ZGVzKHNlbGVjdGVkKSl8fGdyb3Vwc1swXTpncm91cHNbMF1cbiAgY29uc3Qgc2VsZWN0ZWRJbmRleD1zZWxlY3RlZD9ncm91cC5pdGVtcy5maW5kSW5kZXgoaXRlbT0+aXRlbT09PXNlbGVjdGVkKTotMVxuICBjb25zdCBuYXJyYXRpdmU9cHJvamVjdE5hcnJhdGl2ZXNbZ3JvdXAuaWRdXG4gIGNvbnN0IGRldGFpbD1zZWxlY3RlZD9wcm9qZWN0RGV0YWlsc1tzZWxlY3RlZFswXV06bnVsbFxuICByZXR1cm4gPHNlY3Rpb24gaWQ9XCJ3b3Jrc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gd29ya3NcIj48U2VjdGlvblRpdGxlIGluZGV4PVwiMDJcIiBlbj1cIlNFTEVDVEVEIFdPUktTXCIgY249XCLllYbkuJrpobnnm65cIi8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLXNlY3Rpb25zXCI+e2dyb3Vwcy5tYXAoKHNlY3Rpb24sc2VjdGlvbkluZGV4KT0+PHNlY3Rpb24gY2xhc3NOYW1lPVwid29yay1ncm91cFwiIGtleT17c2VjdGlvbi5pZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstaGVhZFwiPjxkaXY+PHNtYWxsPjB7c2VjdGlvbkluZGV4KzF9PC9zbWFsbD48aDM+e3NlY3Rpb24udGl0bGV9PC9oMz48L2Rpdj48cD57c2VjdGlvbi5pdGVtcy5sZW5ndGh9IFBST0pFQ1RTIC8ge3NlY3Rpb24uaWQ9PT0ndHJhaW5pbmcnPyfoh6rliqjlvqrnjq/mkq3mlL4nOifngrnlh7vljaHniYfmn6XnnIvor6bmg4UnfTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1ncmlkXCIgc3R5bGU9e3snLS1hY2NlbnQnOnNlY3Rpb24uY29sb3J9fT57c2VjdGlvbi5pdGVtcy5tYXAoKGl0LGkpPT57XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ9PD48c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LW5vXCI+e1N0cmluZyhpKzEpLnBhZFN0YXJ0KDIsJzAnKX08L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNvdmVyXCI+e3NlY3Rpb24uaWQ9PT0ndHdvRCc/PGltZyBzcmM9e2Ake0F9JHtpdFs0XX1gfSBhbHQ9XCJcIiBsb2FkaW5nPVwibGF6eVwiIGRlY29kaW5nPVwiYXN5bmNcIi8+OjxMYXp5TG9vcFZpZGVvIHNyYz17YC4vJHtpdFszXX1gfSBwb3N0ZXI9e2Ake0F9JHtpdFs0XX1gfSBhcmlhTGFiZWw9e2l0WzBdfS8+fTwvZGl2PjxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10eXBlXCI+e2l0WzJdfTwvZGl2PjxoND57aXRbMF19PC9oND57c2VjdGlvbi5pZCE9PSd0cmFpbmluZycmJjw+PHNtYWxsIGNsYXNzTmFtZT1cInByb2plY3QtY2xpY2staGludFwiPuivpue7humhueebruWGheWuueeCueWHu+inguecizwvc21hbGw+PGk+PEFycm93SWNvbiBkaXJlY3Rpb249XCJ1cFwiLz48L2k+PC8+fTwvPlxuICAgICAgICByZXR1cm4gc2VjdGlvbi5pZD09PSd0cmFpbmluZydcbiAgICAgICAgICA/IDxhcnRpY2xlIGNsYXNzTmFtZT17YHByb2plY3QgcGFzc2l2ZS1wcm9qZWN0ICR7aXRbMF09PT0n5Yqo6KGl5o+S5Lu26K6t57uDJz8nY29udGFpbi1wcm9qZWN0JzonJ31gfSBrZXk9e2l0WzBdfT57Y29udGVudH08L2FydGljbGU+XG4gICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT17YHByb2plY3QgJHtpdFswXS5pbmNsdWRlcygn5a6d6JeP5a625LmhJyk/J3RyZWFzdXJlLXByb2plY3QnOicnfWB9IGtleT17aXRbMF19IG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RlZChpdCl9Pntjb250ZW50fTwvYnV0dG9uPlxuICAgICAgfSl9PC9kaXY+XG4gICAgPC9zZWN0aW9uPil9PC9kaXY+XG4gICAge3NlbGVjdGVkJiY8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcGFnZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcm9qZWN0LWNsb3NlXCIgb25DbGljaz17KCk9PntzZXRFeHBhbmRlZEZyYW1lKG51bGwpO3NldFNlbGVjdGVkKG51bGwpfX0+Q0xPU0Ugw5c8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlLWlubmVyXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtncm91cC5pZD09PSd0d29EJ3x8Z3JvdXAuaWQ9PT0ndGhyZWVEJz8ndW5pZmllZC1wcm9qZWN0LXRpdGxlJzonJ30+PHNtYWxsPntncm91cC5lbn0gLyB7U3RyaW5nKHNlbGVjdGVkSW5kZXgrMSkucGFkU3RhcnQoMiwnMCcpfTwvc21hbGw+PGgzPntzZWxlY3RlZFswXX08L2gzPjxwPntzZWxlY3RlZFsyXX0gwrcgTU9USU9OIERFU0lHTjwvcD48L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXN0b3J5XCI+PGFydGljbGU+PHNwYW4+MDEgLyBCQUNLR1JPVU5EPC9zcGFuPjxoND7pobnnm67og4zmma88L2g0PjxwPntkZXRhaWw/Lm92ZXJ2aWV3fHxuYXJyYXRpdmVbMF19PC9wPjwvYXJ0aWNsZT48YXJ0aWNsZT48c3Bhbj4wMiAvIE1ZIFJPTEU8L3NwYW4+PGg0PuS4quS6uuiBjOi0ozwvaDQ+PHA+e2RldGFpbD8ucm9sZXx8c2VsZWN0ZWRbMV19PC9wPjwvYXJ0aWNsZT57KGRldGFpbD8uY2hhbGxlbmdlfHwhZGV0YWlsKSYmPGFydGljbGU+PHNwYW4+MDMgLyBDSEFMTEVOR0U8L3NwYW4+PGg0PumhueebrumavueCuTwvaDQ+PHA+e2RldGFpbD8uY2hhbGxlbmdlfHwn5Zyo5pei5a6a5ZOB54mM6KGo6L6+5LiO5Lqk5LuY6IqC5aWP5Lit5a+75om+5riF5pmw55qE5Yqo5oCB6Kej5Yaz5pa55qGI77yM5bm254us56uL5o6o6L+b5YWz6ZSu55S76Z2i55qE5rWL6K+V44CB6LCD5pW05LiO6JC95Zyw44CCJ308L3A+PC9hcnRpY2xlPn08L2Rpdj5cbiAgICAgICAgeyFzZWxlY3RlZFs3XSYmPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9qZWN0LXZpZGVvXCI+PHZpZGVvIHNyYz17YC4vJHtzZWxlY3RlZFszXX1gfSBwb3N0ZXI9e2Ake0F9JHtzZWxlY3RlZFs0XX1gfSBjb250cm9scyBwbGF5c0lubGluZSBwcmVsb2FkPVwibWV0YWRhdGFcIiBhdXRvUGxheT17Z3JvdXAuaWQhPT0ndHdvRCd9IG11dGVkPXtncm91cC5pZCE9PSd0d29EJ30vPjwvZmlndXJlPn1cbiAgICAgICAge3NlbGVjdGVkWzddPzxzZWN0aW9uIGNsYXNzTmFtZT1cInNlcmllcy1vdXRwdXRcIj57c2VsZWN0ZWRbN10ubWFwKChlcGlzb2RlLGVwaXNvZGVJbmRleCk9PjxhcnRpY2xlIGNsYXNzTmFtZT1cInNlcmllcy1lcGlzb2RlXCIga2V5PXtlcGlzb2RlLnRpdGxlfT5cbiAgICAgICAgICA8aGVhZGVyPjxzbWFsbD5QQVJUIHtTdHJpbmcoZXBpc29kZUluZGV4KzEpLnBhZFN0YXJ0KDIsJzAnKX08L3NtYWxsPjxoND57ZXBpc29kZS50aXRsZX08L2g0PjwvaGVhZGVyPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic2VyaWVzLW1haW4tdmlkZW9cIj48dmlkZW8gc3JjPXtgLi8ke2VwaXNvZGUudmlkZW99YH0gcG9zdGVyPXtgJHtBfSR7ZXBpc29kZS5wb3N0ZXJ9YH0gY29udHJvbHMgcGxheXNJbmxpbmUgcHJlbG9hZD1cIm1ldGFkYXRhXCIvPjwvZmlndXJlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyaWVzLWNsaXBzXCI+PGRpdj48c21hbGw+U0VMRUNURUQgTU9USU9OIE9VVFBVVFM8L3NtYWxsPjxoNT7liqjmgIHniYfmrrU8L2g1PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZ2lmLWdyaWRcIj57ZXBpc29kZS5jbGlwcy5tYXAoKGNsaXAsaSk9PjxMYXp5TG9vcFZpZGVvIGtleT17Y2xpcH0gc3JjPXtgLi8ke2NsaXB9YH0gYXJpYUxhYmVsPXtgJHtlcGlzb2RlLnRpdGxlfSDliqjmgIHniYfmrrUgJHtpKzF9YH0vPil9PC9kaXY+PC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT4pfTwvc2VjdGlvbj46Z3JvdXAuaWQ9PT0ndHdvRCcmJnNlbGVjdGVkWzVdPy5sZW5ndGg+MCYmPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ2lmLW91dHB1dFwiPjxkaXY+PHNtYWxsPlNFTEVDVEVEIE1PVElPTiBPVVRQVVRTPC9zbWFsbD48aDQ+5Yqo5oCB54mH5q61PC9oND48L2Rpdj48ZGl2IGNsYXNzTmFtZT1cImdpZi1ncmlkXCI+e3NlbGVjdGVkWzVdLm1hcCgoY2xpcCxpKT0+PExhenlMb29wVmlkZW8ga2V5PXtjbGlwfSBzcmM9e2AuLyR7Y2xpcH1gfSBhcmlhTGFiZWw9e2Ake3NlbGVjdGVkWzBdfSDliqjmgIHniYfmrrUgJHtpKzF9YH0vPil9PC9kaXY+PC9zZWN0aW9uPn1cbiAgICAgICAge2dyb3VwLmlkPT09J3RocmVlRCcmJjxzZWN0aW9uIGNsYXNzTmFtZT1cInN0b3J5Ym9hcmQtb3V0cHV0XCI+PGRpdiBjbGFzc05hbWU9XCJzdG9yeWJvYXJkLWhlYWRpbmdcIj48c21hbGw+U1RPUllCT0FSRCBGUkFNRVM8L3NtYWxsPjxoND7liIbplZzljZXlm748L2g0PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwic3Rvcnlib2FyZC1ncmlkXCI+XG4gICAgICAgICAge3NlbGVjdGVkWzVdLm1hcCgoZnJhbWUsaSk9PjxidXR0b24gY2xhc3NOYW1lPVwic3Rvcnlib2FyZC1mcmFtZVwiIGtleT17ZnJhbWV9IG9uQ2xpY2s9eygpPT5zZXRFeHBhbmRlZEZyYW1lKHtzcmM6ZnJhbWUsaW5kZXg6aSx0aXRsZTpzZWxlY3RlZFswXX0pfSBhcmlhLWxhYmVsPXtg5pS+5aSn5p+l55yLICR7c2VsZWN0ZWRbMF19IOWIhumVnCAke2krMX1gfT48aW1nIHNyYz17YC4vJHtmcmFtZX1gfSBhbHQ9e2Ake3NlbGVjdGVkWzBdfSDliIbplZwgJHtpKzF9YH0vPjxzcGFuPntTdHJpbmcoaSsxKS5wYWRTdGFydCgyLCcwJyl9PC9zcGFuPjwvYnV0dG9uPil9XG4gICAgICAgICAge3NlbGVjdGVkWzZdJiY8ZmlndXJlIGNsYXNzTmFtZT1cInN0b3J5Ym9hcmQtbW90aW9uXCI+PExhenlMb29wVmlkZW8gc3JjPXtgLi8ke3NlbGVjdGVkWzZdfWB9IGFyaWFMYWJlbD17YCR7c2VsZWN0ZWRbMF19IFBPUCDmlYXkuovniYhgfS8+PHNwYW4+UE9QIFNUT1JZQk9BUkQ8L3NwYW4+PC9maWd1cmU+fVxuICAgICAgICA8L2Rpdj48L3NlY3Rpb24+fVxuICAgICAgICA8bmF2PjxidXR0b24gZGlzYWJsZWQ9e3NlbGVjdGVkSW5kZXg8PTB9IG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RlZChncm91cC5pdGVtc1tzZWxlY3RlZEluZGV4LTFdKX0+PEFycm93SWNvbiBkaXJlY3Rpb249XCJsZWZ0XCIvPiBQUkVWSU9VUzwvYnV0dG9uPjxidXR0b24gZGlzYWJsZWQ9e3NlbGVjdGVkSW5kZXg+PWdyb3VwLml0ZW1zLmxlbmd0aC0xfSBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0ZWQoZ3JvdXAuaXRlbXNbc2VsZWN0ZWRJbmRleCsxXSl9Pk5FWFQgPEFycm93SWNvbiBkaXJlY3Rpb249XCJyaWdodFwiLz48L2J1dHRvbj48L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2V4cGFuZGVkRnJhbWUmJjxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtbGlnaHRib3hcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsPVwi5YiG6ZWc5aSn5Zu+6aKE6KeIXCIgb25DbGljaz17KCk9PnNldEV4cGFuZGVkRnJhbWUobnVsbCl9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRFeHBhbmRlZEZyYW1lKG51bGwpfT5DTE9TRSDDlzwvYnV0dG9uPlxuICAgICAgICA8ZmlndXJlIG9uQ2xpY2s9e2U9PmUuc3RvcFByb3BhZ2F0aW9uKCl9PjxpbWcgc3JjPXtgLi8ke2V4cGFuZGVkRnJhbWUuc3JjfWB9IGFsdD17YCR7ZXhwYW5kZWRGcmFtZS50aXRsZX0g5YiG6ZWcICR7ZXhwYW5kZWRGcmFtZS5pbmRleCsxfWB9Lz48ZmlnY2FwdGlvbj57ZXhwYW5kZWRGcmFtZS50aXRsZX0gLyBGUkFNRSB7U3RyaW5nKGV4cGFuZGVkRnJhbWUuaW5kZXgrMSkucGFkU3RhcnQoMiwnMCcpfTwvZmlnY2FwdGlvbj48L2ZpZ3VyZT5cbiAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj59XG4gIDwvc2VjdGlvbj5cbn1cblxuZnVuY3Rpb24gQ2F2YWxyeSgpeyByZXR1cm4gPHNlY3Rpb24gaWQ9XCJjYXZhbHJ5XCIgY2xhc3NOYW1lPVwic2VjdGlvbiBjYXZhbHJ5XCI+PFNlY3Rpb25UaXRsZSBpbmRleD1cIjAzXCIgZW49XCJDQVZBTFJZIExBQlwiIGNuPVwi6L2v5Lu257uD5LmgXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImxhYi1pbnRyb1wiPjxzcGFuPkdFTkVSQVRJVkUgVFlQRSAvIFBST0NFRFVSQUwgTU9USU9OIC8gMjAyNjwvc3Bhbj48L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJsYWItZ3JpZFwiPntjYXZhbHJ5Lm1hcCgoW25hbWUsZmlsZV0saSk9PjxmaWd1cmUga2V5PXtmaWxlfT48TGF6eUxvb3BWaWRlbyBzcmM9e0ErJ2NhdmFscnkvJytmaWxlfSBhcmlhTGFiZWw9e25hbWV9Lz48ZmlnY2FwdGlvbj48Yj57bmFtZX08L2I+PHNwYW4+e1N0cmluZyhpKzEpLnBhZFN0YXJ0KDIsJzAnKX0gLyBDQVZBTFJZPC9zcGFuPjwvZmlnY2FwdGlvbj48L2ZpZ3VyZT4pfTwvZGl2PlxuICA8L3NlY3Rpb24+IH1cblxuZnVuY3Rpb24gQWJvdXQoKXtyZXR1cm4gPHNlY3Rpb24gaWQ9XCJhYm91dFwiIGNsYXNzTmFtZT1cInNlY3Rpb24gYWJvdXRcIj48U2VjdGlvblRpdGxlIGluZGV4PVwiMDRcIiBlbj1cIldPUksgRVhQRVJJRU5DRVwiIGNuPVwi5Liq5Lq65bGl5Y6GXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0LXRvcFwiPlxuICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwicG9ydHJhaXRcIj48aW1nIHNyYz17QSsncG9ydHJhaXQud2VicCd9IGFsdD1cIuS4quS6uuW9ouixoVwiIGxvYWRpbmc9XCJsYXp5XCIgZGVjb2Rpbmc9XCJhc3luY1wiLz48L2ZpZ3VyZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1wiPjxzbWFsbD5BQk9VVCBNRTwvc21hbGw+PGgzPui1hOa3seWKqOaAgeiuvuiuoeW4iDwvaDM+PHA+N+W5tOWVhuS4mumhueebruiuvuiuoee7j+mqjDxici8+5LiT5rOo5ZOB54mM5Yqo5oCB6KeG6KeJ44CB5Yib5oSP6KeG6aKR5LiOIE1vdGlvbiBHcmFwaGljczwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmFjdHNcIj48ZGl2PjxzcGFuPuW3peS9nOe7j+WOhjwvc3Bhbj48Yj7ljJfkuqzljY7pn6zmlofljJbkvKDlqpI8L2I+PHNtYWxsIGNsYXNzTmFtZT1cImZhY3QtZGV0YWlsXCI+5Yqo5oCB6K6+6K6h5biIJm5ic3A7Jm5ic3A7772cJm5ic3A7Jm5ic3A7MjAxOeKAkzIwMjIgLyZuYnNwOyZuYnNwO+WvvOa8lCAvIOmhueebrue7j+eQhiZuYnNwOyZuYnNwO++9nCZuYnNwOyZuYnNwOzIwMjLigJPoh7Pku4o8L3NtYWxsPjwvZGl2PjxkaXY+PHNwYW4+5pyN5Yqh5ZOB54mMPC9zcGFuPjxiPuW/q+aJiyAvIOS6rOS4nCAvIOWwj+exsyAvIDM2McKwIC8g54m55q2lIC8g5b6u6L2v5bCP5YawIC8g5Lq65rCR5pel5oqlIC8g6Im+576O54m5IC88L2I+PC9kaXY+PGRpdj48c3Bhbj7ova/ku7bog73lips8L3NwYW4+PGI+QUUgLyBBSSAvIENhdmFscnnvvIjlrabkuaDkuK3vvIkvIFBzIC8gUHI8L2I+PC9kaXY+PGRpdj48c3Bhbj7mr5XkuJrpmaLmoKE8L3NwYW4+PGI+6YOR5bee6L275bel5LiaIMK3IOaVsOWqkuS4k+S4mjwvYj48L2Rpdj48ZGl2PjxzcGFuPuaJi+acujwvc3Bhbj48YSBocmVmPVwidGVsOjE1OTM1NzU1MzU2XCI+MTU5IDM1NzUgNTM1NjwvYT48L2Rpdj48ZGl2PjxzcGFuPumCrueusTwvc3Bhbj48YSBocmVmPVwibWFpbHRvOjMwNzI0OTc2MTVAcXEuY29tXCI+MzA3MjQ5NzYxNUBxcS5jb208L2E+PC9kaXY+PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8Zm9vdGVyPjxhIGNsYXNzTmFtZT1cImJhY2tcIiBocmVmPVwiI3RvcFwiPkJBQ0sgVE8gVE9QIDxBcnJvd0ljb24gZGlyZWN0aW9uPVwidG9wXCIvPjwvYT48L2Zvb3Rlcj5cbiAgPC9zZWN0aW9uPn1cblxuZnVuY3Rpb24gdXNlU2Nyb2xsUmV2ZWFsKCl7XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMpcmV0dXJuXG4gICAgY29uc3QgdGV4dFNlbGVjdG9yPScuc2VjdGlvbi10aXRsZSBoMiwuc2VjdGlvbi10aXRsZSBwLC53b3JrLWhlYWQgaDMsLndvcmstaGVhZCBwLC5wcm9qZWN0IGg0LC5wcm9qZWN0LXR5cGUsLmxhYi1ncmlkIGZpZ2NhcHRpb24sLnByb2plY3QtcGFnZSBoZWFkZXIsLnByb2plY3Qtc3RvcnkgYXJ0aWNsZSwuc2VyaWVzLWNsaXBzPmRpdjpmaXJzdC1jaGlsZCwuZ2lmLW91dHB1dD5kaXY6Zmlyc3QtY2hpbGQnXG4gICAgY29uc3QgbWVkaWFTZWxlY3Rvcj0nLnNob3dyZWVsLXNpbmdsZSwucHJvamVjdCwubGFiLWdyaWQgZmlndXJlLC5wcm9qZWN0LXZpZGVvLC5zZXJpZXMtbWFpbi12aWRlbywuZ2lmLWdyaWQgdmlkZW8sLnN0b3J5Ym9hcmQtZnJhbWUsLnN0b3J5Ym9hcmQtbW90aW9uJ1xuICAgIGNvbnN0IHJlc3VtZVNlbGVjdG9yPScuYWJvdXQgLmJpbyBoMywuYWJvdXQgLmJpbz5wLC5hYm91dCAuZmFjdHMgZGl2J1xuICAgIGNvbnN0IGFsbFNlbGVjdG9yPWAke3RleHRTZWxlY3Rvcn0sJHttZWRpYVNlbGVjdG9yfSwke3Jlc3VtZVNlbGVjdG9yfWBcbiAgICBjb25zdCBwbGF5PShlbCk9PntcbiAgICAgIGlmKGVsLmRhdGFzZXQucmV2ZWFsUGxheWVkKXJldHVyblxuICAgICAgZWwuZGF0YXNldC5yZXZlYWxQbGF5ZWQ9J3RydWUnXG4gICAgICBjb25zdCBtZWRpYT1lbC5tYXRjaGVzKG1lZGlhU2VsZWN0b3IpXG4gICAgICBjb25zdCBkZWxheT1OdW1iZXIoZWwuZGF0YXNldC5yZXZlYWxEZWxheXx8MClcbiAgICAgIGVsLmFuaW1hdGUobWVkaWFcbiAgICAgICAgP1t7b3BhY2l0eTowLHRyYW5zZm9ybTondHJhbnNsYXRlWSg0NnB4KSBzY2FsZSguOTcpJyxmaWx0ZXI6J2JsdXIoNnB4KSd9LHtvcGFjaXR5OjEsdHJhbnNmb3JtOid0cmFuc2xhdGVZKDApIHNjYWxlKDEpJyxmaWx0ZXI6J2JsdXIoMCknfV1cbiAgICAgICAgOlt7b3BhY2l0eTowLHRyYW5zZm9ybTondHJhbnNsYXRlWSgzOHB4KScsZmlsdGVyOidibHVyKDRweCknfSx7b3BhY2l0eToxLHRyYW5zZm9ybTondHJhbnNsYXRlWSgwKScsZmlsdGVyOidibHVyKDApJ31dLFxuICAgICAgICB7ZHVyYXRpb246MTA1MCxkZWxheSxlYXNpbmc6J2N1YmljLWJlemllciguMTYsMSwuMywxKScsZmlsbDonbm9uZSd9KVxuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH1cbiAgICBjb25zdCBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57XG4gICAgICBpZighZW50cnkuaXNJbnRlcnNlY3RpbmcpcmV0dXJuXG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCk9PnBsYXkoZW50cnkudGFyZ2V0KSlcbiAgICB9KSx7dGhyZXNob2xkOi4wNixyb290TWFyZ2luOicwcHggMHB4IC00JSAwcHgnfSlcbiAgICBjb25zdCByZWdpc3Rlcj0ocm9vdD1kb2N1bWVudCk9PntcbiAgICAgIHJvb3QucXVlcnlTZWxlY3RvckFsbD8uKGFsbFNlbGVjdG9yKS5mb3JFYWNoKChlbCxpbmRleCk9PntcbiAgICAgICAgaWYoZWwuZGF0YXNldC5yZXZlYWxSZWFkeSlyZXR1cm5cbiAgICAgICAgZWwuZGF0YXNldC5yZXZlYWxSZWFkeT0ndHJ1ZSdcbiAgICAgICAgZWwuZGF0YXNldC5yZXZlYWxEZWxheT1TdHJpbmcoTWF0aC5taW4oKGluZGV4JTYpKjcwLDM1MCkpXG4gICAgICAgIGNvbnN0IHJlY3Q9ZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgaWYocmVjdC5ib3R0b20+MCYmcmVjdC50b3A8d2luZG93LmlubmVySGVpZ2h0KXJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+cGxheShlbCkpXG4gICAgICAgIGVsc2Ugb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgICAgIH0pXG4gICAgfVxuICAgIHJlZ2lzdGVyKClcbiAgICBjb25zdCBtdXRhdGlvbnM9bmV3IE11dGF0aW9uT2JzZXJ2ZXIocmVjb3Jkcz0+cmVjb3Jkcy5mb3JFYWNoKHJlY29yZD0+cmVjb3JkLmFkZGVkTm9kZXMuZm9yRWFjaChub2RlPT57XG4gICAgICBpZihub2RlLm5vZGVUeXBlPT09MSl7XG4gICAgICAgIGlmKG5vZGUubWF0Y2hlcz8uKGFsbFNlbGVjdG9yKSlyZWdpc3Rlcihub2RlLnBhcmVudEVsZW1lbnR8fGRvY3VtZW50KVxuICAgICAgICBlbHNlIHJlZ2lzdGVyKG5vZGUpXG4gICAgICB9XG4gICAgfSkpKVxuICAgIG11dGF0aW9ucy5vYnNlcnZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jykse2NoaWxkTGlzdDp0cnVlLHN1YnRyZWU6dHJ1ZX0pXG4gICAgcmV0dXJuKCk9PntvYnNlcnZlci5kaXNjb25uZWN0KCk7bXV0YXRpb25zLmRpc2Nvbm5lY3QoKX1cbiAgfSxbXSlcbn1cblxuZnVuY3Rpb24gQXBwKCl7dXNlU2Nyb2xsUmV2ZWFsKCk7cmV0dXJuIDw+PG1haW4+PEhlYWRlci8+PEhlcm8vPjxTaG93cmVlbC8+PFdvcmtzLz48Q2F2YWxyeS8+PEFib3V0Lz48L21haW4+PC8+fVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNO0VBQUVBLFNBQVM7RUFBRUMsT0FBTztFQUFFQyxNQUFNO0VBQUVDO0FBQVMsQ0FBQyxHQUFHQyxLQUFLO0FBRXRELE1BQU1DLENBQUMsR0FBRyxrQkFBa0I7QUFFNUIsTUFBTUMsb0JBQW9CLEdBQUc7RUFDM0IsZ0JBQWdCLEVBQUMsc0JBQXNCO0VBQ3ZDLGVBQWUsRUFBQyxvQ0FBb0M7RUFDcEQsT0FBTyxFQUFDLG1CQUFtQjtFQUMzQixrQkFBa0IsRUFBQyx1QkFBdUI7RUFDMUMsWUFBWSxFQUFDLGtCQUFrQjtFQUMvQixhQUFhLEVBQUMsbUJBQW1CO0VBQ2pDLGFBQWEsRUFBQyxtQkFBbUI7RUFDakMsYUFBYSxFQUFDLG1CQUFtQjtFQUNqQyxPQUFPLEVBQUMsYUFBYTtFQUNyQixNQUFNLEVBQUM7QUFDVCxDQUFDO0FBRUQsTUFBTUMsWUFBWSxHQUFHQSxDQUFDQyxFQUFFLEVBQUNDLEtBQUssRUFBQ0MsRUFBRSxFQUFDQyxHQUFHLEVBQUNDLEtBQUssTUFBTTtFQUFDSixFQUFFO0VBQUNDLEtBQUs7RUFBQ0MsRUFBRTtFQUFDRyxLQUFLLEVBQUNELEtBQUssQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLElBQUksRUFBQ0MsQ0FBQyxLQUFHLENBQ3RGRCxJQUFJLENBQUNFLE9BQU8sQ0FBQyxTQUFTLEVBQUMsRUFBRSxDQUFDLEVBQzFCVCxFQUFFLEtBQUcsUUFBUSxHQUFDLHlCQUF5QixHQUFDQSxFQUFFLEtBQUcsTUFBTSxHQUFDLHFCQUFxQixHQUFDLGNBQWMsRUFDeEZHLEdBQUcsRUFDSCxRQUFRSCxFQUFFLEtBQUcsVUFBVSxHQUFD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
