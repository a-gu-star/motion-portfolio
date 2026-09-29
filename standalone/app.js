
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
      children: [(0, _jsxRuntime.jsx)("div", {
        className: "hero-video",
        children: (0, _jsxRuntime.jsx)("video", {
          ref: video,
          src: A + 'hero.mp4',
          muted: true,
          playsInline: true,
          preload: "auto"
        })
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
              children: "\u52A8\u6001\u8BBE\u8BA1\u5E08 / \u89C6\u9891\u8BBE\u8BA1\u5E08"
            }), (0, _jsxRuntime.jsxs)("p", {
              children: ["7\u5E74\u5546\u4E1A\u9879\u76EE\u8BBE\u8BA1\u7ECF\u9A8C", (0, _jsxRuntime.jsx)("br", {}), "\u4E8C\u7EF4\u52A8\u6001\u8BBE\u8BA1 / \u52A8\u6001\u5206\u955C / \u54C1\u724C\u5185\u5BB9 / \u540E\u671F\u5236\u4F5C / \u521B\u610F\u6784\u601D"]
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
                  alt: ""
                }) : (0, _jsxRuntime.jsx)("video", {
                  src: `./${it[3]}`,
                  poster: `${A}${it[4]}`,
                  muted: true,
                  autoPlay: true,
                  loop: true,
                  playsInline: true,
                  preload: "auto",
                  onCanPlay: e => e.currentTarget.play().catch(() => {})
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
                children: episode.clips.map((clip, i) => (0, _jsxRuntime.jsx)("video", {
                  src: `./${clip}`,
                  "aria-label": `${episode.title} 动态片段 ${i + 1}`,
                  muted: true,
                  autoPlay: true,
                  loop: true,
                  playsInline: true,
                  preload: "auto",
                  onCanPlay: e => e.currentTarget.play().catch(() => {})
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
            children: selected[5].map((clip, i) => (0, _jsxRuntime.jsx)("video", {
              src: `./${clip}`,
              "aria-label": `${selected[0]} 动态片段 ${i + 1}`,
              muted: true,
              autoPlay: true,
              loop: true,
              playsInline: true,
              preload: "auto",
              onCanPlay: e => e.currentTarget.play().catch(() => {})
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
              children: [(0, _jsxRuntime.jsx)("video", {
                src: `./${selected[6]}`,
                "aria-label": `${selected[0]} POP 故事版`,
                muted: true,
                autoPlay: true,
                loop: true,
                playsInline: true,
                preload: "auto",
                onCanPlay: e => e.currentTarget.play().catch(() => {})
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
        children: [(0, _jsxRuntime.jsx)("video", {
          src: A + 'cavalry/' + file,
          muted: true,
          loop: true,
          playsInline: true,
          autoPlay: true,
          preload: "metadata"
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
          src: A + 'portrait.png',
          alt: "\u4E2A\u4EBA\u5F62\u8C61"
        })
      }), (0, _jsxRuntime.jsxs)("div", {
        className: "bio",
        children: [(0, _jsxRuntime.jsx)("small", {
          children: "ABOUT ME"
        }), (0, _jsxRuntime.jsx)("h3", {
          children: "1800\u7EBF\u8BBE\u8BA1\u5973\u5DE5"
        }), (0, _jsxRuntime.jsx)("p", {
          children: "7\u5E74\u5546\u4E1A\u9879\u76EE\u7ECF\u9A8C\uFF0C\u4E13\u6CE8\u52A8\u6001\u8BBE\u8BA1\u3001\u89C6\u9891\u8BBE\u8BA1\u4E0E\u4E8C\u7EF4\u52A8\u753B\u3002\u53C2\u4E0E\u4ECE\u521B\u610F\u3001\u5206\u955C\u5230\u540E\u671F\u6574\u5408\u7684\u5B8C\u6574\u6D41\u7A0B\uFF0C\u8BA9\u6BCF\u4E2A\u955C\u5934\u8868\u8FBE\u5F97\u66F4\u51C6\u786E\u3002"
        }), (0, _jsxRuntime.jsxs)("div", {
          className: "facts",
          children: [(0, _jsxRuntime.jsxs)("div", {
            children: [(0, _jsxRuntime.jsx)("span", {
              children: "\u5DE5\u4F5C\u7ECF\u5386"
            }), (0, _jsxRuntime.jsx)("b", {
              children: "\u5317\u4EAC\u534E\u97EC\u6587\u5316\u4F20\u5A92"
            }), (0, _jsxRuntime.jsx)("small", {
              className: "fact-detail",
              children: "\u52A8\u6001\u8BBE\u8BA1\u5E08\xA0\xA0\uFF5C\xA0\xA02019\u20132020 / \u5BFC\u6F14 / \u9879\u76EE\u7ECF\u7406\xA0\xA0\uFF5C\xA0\xA02020\u2013\u81F3\u4ECA"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJSZWFjdCIsIkEiLCJjb21wcmVzc2VkTWFpblZpZGVvcyIsInByb2plY3RHcm91cCIsImlkIiwidGl0bGUiLCJlbiIsInRhZyIsIm5hbWVzIiwiaXRlbXMiLCJtYXAiLCJmaWxlIiwiaSIsInJlcGxhY2UiLCJTdHJpbmciLCJwYWRTdGFydCIsInR3b0RQcm9qZWN0IiwibmFtZSIsImNsaXBDb3VudCIsImluZGV4IiwiY2xpcEJhc2UiLCJjbGlwV29yZCIsImRpc3BsYXlOYW1lIiwicm9vdCIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJ0d29ESXRlbXMiLCJ1bmRlZmluZWQiLCJjb3VudCIsInhpYW9rYW5nU2VyaWVzIiwidmlkZW8iLCJwb3N0ZXIiLCJjbGlwcyIsInhpYW9rYW5nSXRlbSIsInB1c2giLCJzdG9yeWJvYXJkRnJhbWVzIiwiZm9sZGVyIiwiZ3JvdXBzIiwiY2F2YWxyeSIsInByb2plY3ROYXJyYXRpdmVzIiwidHdvRCIsInRocmVlRCIsInRyYWluaW5nIiwicHJvamVjdERldGFpbHMiLCJvdmVydmlldyIsInJvbGUiLCJjaGFsbGVuZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJjb3ZlckZpbGVzIiwic3BsaXQiLCJDaXJjdWxhckdhbGxlcnkiLCJiZW5kIiwiYm9yZGVyUmFkaXVzIiwic2Nyb2xsU3BlZWQiLCJzY3JvbGxFYXNlIiwiY29udGFpbmVyIiwiY2FyZHMiLCJlbCIsImN1cnJlbnQiLCJzY3JvbGwiLCJ0YXJnZXQiLCJwb2ludGVyIiwiZG93biIsInN0YXJ0IiwicG9zaXRpb24iLCJtZXRyaWNzIiwid2lkdGgiLCJjYXJkIiwic3BhY2UiLCJ0b3RhbCIsInJhZiIsImxhc3QiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImhvdmVyaW5nIiwicmVzaXplIiwiY2xpZW50V2lkdGgiLCJNYXRoIiwibWF4IiwibWluIiwid2hlZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzaWduIiwiZGVsdGFZIiwiZGVsdGFYIiwiY2xpZW50WCIsInNldFBvaW50ZXJDYXB0dXJlIiwicG9pbnRlcklkIiwibW92ZSIsInVwIiwicm91bmQiLCJ0aWNrIiwiZHQiLCJoYWxmIiwiZm9yRWFjaCIsIngiLCJuIiwieSIsImFicyIsInJvdGF0ZSIsInNjYWxlIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5IiwiekluZGV4IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJfanN4UnVudGltZSIsImpzeHMiLCJjbGFzc05hbWUiLCJyZWYiLCJjaGlsZHJlbiIsImpzeCIsIm5vZGUiLCJzcmMiLCJhbHQiLCJIZWFkZXIiLCJvcGVuIiwic2V0T3BlbiIsImxpbmtzIiwib25DbGljayIsInQiLCJocmVmIiwiQXJyb3dJY29uIiwiZGlyZWN0aW9uIiwidHJpbSIsInZpZXdCb3giLCJmb2N1c2FibGUiLCJkIiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiSGVybyIsImhlcm8iLCJ0YXJnZXRUaW1lIiwiY3VycmVudFRpbWUiLCJwb2ludGVyQWN0aXZlIiwidHJhY2tQb2ludGVyIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJkdXJhdGlvbiIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJkeCIsImxlZnQiLCJkeSIsImNsaWVudFkiLCJ0b3AiLCJoZWlnaHQiLCJkaXN0YW5jZSIsImh5cG90IiwiYW5nbGUiLCJhdGFuMiIsIlBJIiwiZW50ZXIiLCJwYXVzZSIsImxlYXZlIiwicmVhZHlTdGF0ZSIsIm11dGVkIiwicGxheXNJbmxpbmUiLCJwcmVsb2FkIiwiU2VjdGlvblRpdGxlIiwiY24iLCJTaG93cmVlbCIsInYiLCJwYXVzZWQiLCJwbGF5IiwiV29ya3MiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZXhwYW5kZWRGcmFtZSIsInNldEV4cGFuZGVkRnJhbWUiLCJkb2N1bWVudCIsImJvZHkiLCJvdmVyZmxvdyIsImNsb3NlIiwia2V5IiwiZ3JvdXAiLCJmaW5kIiwiZyIsImluY2x1ZGVzIiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJuYXJyYXRpdmUiLCJkZXRhaWwiLCJzZWN0aW9uIiwic2VjdGlvbkluZGV4IiwiY29sb3IiLCJpdCIsImNvbnRlbnQiLCJGcmFnbWVudCIsImF1dG9QbGF5IiwibG9vcCIsIm9uQ2FuUGxheSIsImN1cnJlbnRUYXJnZXQiLCJjYXRjaCIsImNvbnRyb2xzIiwiZXBpc29kZSIsImVwaXNvZGVJbmRleCIsImNsaXAiLCJmcmFtZSIsImRpc2FibGVkIiwic3RvcFByb3BhZ2F0aW9uIiwiQ2F2YWxyeSIsIkFib3V0IiwidXNlU2Nyb2xsUmV2ZWFsIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ0ZXh0U2VsZWN0b3IiLCJtZWRpYVNlbGVjdG9yIiwicmVzdW1lU2VsZWN0b3IiLCJhbGxTZWxlY3RvciIsImRhdGFzZXQiLCJyZXZlYWxQbGF5ZWQiLCJtZWRpYSIsImRlbGF5IiwicmV2ZWFsRGVsYXkiLCJhbmltYXRlIiwiZmlsdGVyIiwiZWFzaW5nIiwib2JzZXJ2ZXIiLCJ1bm9ic2VydmUiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsInJlZ2lzdGVyIiwicXVlcnlTZWxlY3RvckFsbCIsInJldmVhbFJlYWR5IiwiYm90dG9tIiwiaW5uZXJIZWlnaHQiLCJvYnNlcnZlIiwibXV0YXRpb25zIiwiTXV0YXRpb25PYnNlcnZlciIsInJlY29yZHMiLCJyZWNvcmQiLCJhZGRlZE5vZGVzIiwibm9kZVR5cGUiLCJwYXJlbnRFbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiZGlzY29ubmVjdCIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sInNvdXJjZXMiOlsic3RhbmRhbG9uZS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSA9IFJlYWN0XG5cbmNvbnN0IEEgPSAnLi9wdWJsaWMvYXNzZXRzLydcblxuY29uc3QgY29tcHJlc3NlZE1haW5WaWRlb3MgPSB7XG4gICdWT0xMR0FTIFgg5Yev5pav5ZOI5p6XJzonVk9MTEdBUyBYIOWHr+aWr+WTiOael18xLm1wNCcsXG4gICdWT0xMR0FTIFgg6IuP54Kz5re7JzonVk9MTEdBUyBYIOiLj+eCs+a3uy5tcDQ/dj0yMDI2MDkyNy1hdWRpbycsXG4gICflv6vmiYst5YaF5a6jJzon5b+r5omL56OB5Yqb5byV5pOOMjAyNUNOWS5tcDQnLFxuICAn5Lq65rCR5pel5oql4oCU4oCU5oqX5oiY6IOc5Yip5YWr5Y2B5ZGo5bm05ryr55S7Jzon5Lq65rCR5pel5oql4oCU4oCU5oqX5oiY6IOc5Yip5YWr5Y2B5ZGo5bm05ryr55S7MS5tcDQnLFxuICAn5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3Jzon5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3XzEubXA0JyxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzInOifkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcyXzEubXA0JyxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzMnOifkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurczXzEubXA0JyxcbiAgJ+S6uuawkeaXpeaKpeKAlOKAlOS4reWbveato+W9k+a9ric6J+S6uuawkeaXpeaKpeKAlOKAlOS4reWbveato+W9k+a9rl8xLm1wNCcsXG4gICflpKnnjKvml7boo4XlkagnOiflpKnnjKvml7boo4XlkahfMS5tcDQnLFxuICAn56uZ6YW35YWx5YibJzon56uZ6YW35YWx5YibXzEubXA0J1xufVxuXG5jb25zdCBwcm9qZWN0R3JvdXAgPSAoaWQsdGl0bGUsZW4sdGFnLG5hbWVzKSA9PiAoe2lkLHRpdGxlLGVuLGl0ZW1zOm5hbWVzLm1hcCgoZmlsZSxpKT0+W1xuICBmaWxlLnJlcGxhY2UoL1xcLm1wNCQvaSwnJyksXG4gIGlkPT09J3RocmVlRCc/J+WJjeacn+etluWIkuOAgeWIhumVnOaehOaAneS4juWKqOeUu+mihOWJqueahOivpue7huWGheWuueW+heihpeWFheOAgic6aWQ9PT0ndHdvRCc/J+S6jOe7tOWKqOaAgeWItuS9nOWMuumXtOS4juS4quS6uui0n+i0o+WGheWuueW+heihpeWFheOAgic6J+S4quS6uuWKqOaAgee7g+S5oOS4juinhuinieWunumqjOOAgicsXG4gIHRhZyxcbiAgYOWVhuS4mumhueebri8ke2lkPT09J3RyYWluaW5nJz8n5Lia5L2Z6K6t57uDJzp0aXRsZX0vJHtmaWxlfWAsXG4gIGBwcm9qZWN0LXBvc3RlcnMvJHtpZD09PSd0d29EJz8nMmQnOmlkPT09J3RocmVlRCc/JzNkJzonbGFiJ30tJHtTdHJpbmcoaSsxKS5wYWRTdGFydCgyLCcwJyl9LmpwZ2Bcbl0pfSlcblxuY29uc3QgdHdvRFByb2plY3QgPSAobmFtZSwgY2xpcENvdW50LCBpbmRleCwgY2xpcEJhc2U9bmFtZSwgY2xpcFdvcmQ9J+eJh+autScsIGRpc3BsYXlOYW1lPW5hbWUpID0+IHtcbiAgY29uc3Qgcm9vdCA9IGDllYbkuJrpobnnm64v5LqM57u05Yi25L2c6aG555uuLyR7bmFtZX1gXG4gIHJldHVybiBbXG4gICAgZGlzcGxheU5hbWUsXG4gICAgJ+S6jOe7tOWKqOaAgeWItuS9nOWMuumXtOS4juS4quS6uui0n+i0o+WGheWuueW+heihpeWFheOAgicsXG4gICAgJzJEIE1PVElPTicsXG4gICAgYCR7cm9vdH0vJHtjb21wcmVzc2VkTWFpblZpZGVvc1tuYW1lXXx8YCR7bmFtZX0ubXA0YH1gLFxuICAgIGBwcm9qZWN0LXBvc3RlcnMvMmQtb3JkZXItJHtTdHJpbmcoaW5kZXgpLnBhZFN0YXJ0KDIsJzAnKX0uanBnYCxcbiAgICBBcnJheS5mcm9tKHtsZW5ndGg6Y2xpcENvdW50fSwoXyxpKT0+YCR7cm9vdH0vJHtjbGlwQmFzZX0ke2NsaXBXb3JkfSR7aSsxfS5tcDRgKVxuICBdXG59XG5cbmNvbnN0IHR3b0RJdGVtcyA9IFtcbiAgWyczNjHCsOWTgeeJjOWuo+S8oOaXpScsNF0sXG4gIFsnMjAyNOW/q+aJi+ejgeWKm+Wkp+S8micsMl0sXG4gIFsn56uZ6YW35YWx5YibJywzXSxcbiAgWyfkuqzkuJxY6I2J6I6T6Z+z5LmQ6IqCJywzXSxcbiAgWyfkuqzkuJzlpJbljZZY54yq54yq5L6gJyw1XSxcbiAgWyflsI/nuqLkuabkuZDpmJ8nLDUsdW5kZWZpbmVkLHVuZGVmaW5lZCwn5bCP57qi5Lmm44CQ5ZCs546w5Zy65LiN6bi95YCh6K6u44CRJ10sXG4gIFsn54m55q2lWC1Tb2ZhIEZvYW0nLDJdLFxuICBbJ+iJvue+jueJueWTgeeJjOeEleaWsOWPkeW4g+S8micsNF0sXG4gIFsn5b6u6L2v5bCP5YawWOeJueatpScsM10sXG4gIFsnQk9UVE9OUyBBaXIg5Lqn5ZOB5a6j5Lyg6KeG6aKRJywyXSxcbiAgWydVSU5QVVMgTE9HT+a8lOe7jicsMl0sXG4gIFsn5Lqs5LicLeecn+aWsOivneWkp+WGkumZqScsMix1bmRlZmluZWQsdW5kZWZpbmVkLCfkuqzkuJwt55yf5b+D6K+d5aSn5YaS6ZmpJ10sXG4gIFsn5b+r5omL5qCh5oub54mH5aS0Jyw0LCflv6vmiYvmoKHmi5vniYflpLQnLCfniYflpLQnXSxcbiAgWyflv6vmiYst5YaF5a6jJywyLHVuZGVmaW5lZCx1bmRlZmluZWQsJ+W/q+aJi+ejgeWKm+W8leaTjjIwMjVDTlknXSxcbiAgWyflv6vmiYvlubTnu4jlhoXlrqPmgLvnu5MnLDJdLFxuICBbJ1ZPTExHQVMgWCDlh6/mlq/lk4jmnpcnLDJdLFxuICBbJ1ZPTExHQVMgWCDoi4/ngrPmt7snLDJdLFxuICBbJ+Wwj+exs+enkeaKgOWHuueOsCcsMl0sXG4gIFsn5aSp54yr5pe26KOF5ZGoJyw0XSxcbiAgWyfmt5jlrp3pgKDnianoioInLDRdLFxuICBbJ+aWuei+vuW+i+W4iOS6i+WKoeaJgCcsNV0sXG4gIFsn5Lq65rCR5pel5oql4oCU4oCU5oiR55qE5a6d6JeP5a625LmhJywyXSxcbiAgWyfkurrmsJHml6XmiqXigJTigJTkuK3lm73mraPlvZPmva4nLDJdLFxuICBbJ+S6uuawkeaXpeaKpeKAlOKAlOaKl+aImOiDnOWIqeWFq+WNgeWRqOW5tOa8q+eUuycsMl1cbl0ubWFwKChbbmFtZSxjb3VudCxjbGlwQmFzZSxjbGlwV29yZCxkaXNwbGF5TmFtZV0saSk9PnR3b0RQcm9qZWN0KG5hbWUsY291bnQsaSsxLGNsaXBCYXNlLGNsaXBXb3JkLGRpc3BsYXlOYW1lKSlcblxuY29uc3QgeGlhb2thbmdTZXJpZXMgPSBbXG4gIHt0aXRsZTon5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3Jyx2aWRlbzon5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcv5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3XzEubXA0Jyxwb3N0ZXI6J3Byb2plY3QtcG9zdGVycy8yZC1vcmRlci0yNS5qcGcnLGNsaXBzOlsn5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurcv5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq354mH5q61MS5tcDQnLCfllYbkuJrpobnnm64v5LqM57u05Yi25L2c6aG555uuL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6ty/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurfniYfmrrUyLm1wNCcsJ+WVhuS4mumhueebri/kuoznu7TliLbkvZzpobnnm64v5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3L+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6t+eJh+autTMubXA0J119LFxuICB7dGl0bGU6J+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzInLHZpZGVvOifllYbkuJrpobnnm64v5LqM57u05Yi25L2c6aG555uuL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzIv5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3Ml8xLm1wNCcscG9zdGVyOidwcm9qZWN0LXBvc3RlcnMvMmQtb3JkZXItMjYuanBnJyxjbGlwczpbJ+WVhuS4mumhueebri/kuoznu7TliLbkvZzpobnnm64v5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3Mi/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurfniYfmrrUxLm1wNCddfSxcbiAge3RpdGxlOifkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurczJyx2aWRlbzon5ZWG5Lia6aG555uuL+S6jOe7tOWItuS9nOmhueebri/kurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurczL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzNfMS5tcDQnLHBvc3RlcjoncHJvamVjdC1wb3N0ZXJzLzJkLW9yZGVyLTI3LmpwZycsY2xpcHM6WyfllYbkuJrpobnnm64v5LqM57u05Yi25L2c6aG555uuL+S6uuawkeaXpeaKpeKAlOKAlOWFqOmdouWwj+W6tzMv5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3M+eJh+autTEubXA0J119XG5dXG5jb25zdCB4aWFva2FuZ0l0ZW0gPSB0d29EUHJvamVjdCgn5Lq65rCR5pel5oql4oCU4oCU5YWo6Z2i5bCP5bq3JywzLHR3b0RJdGVtcy5sZW5ndGgrMSlcbnhpYW9rYW5nSXRlbVswXSA9ICfkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurfns7vliJcnXG54aWFva2FuZ0l0ZW1bN10gPSB4aWFva2FuZ1Nlcmllc1xudHdvREl0ZW1zLnB1c2goeGlhb2thbmdJdGVtKVxuXG5jb25zdCBzdG9yeWJvYXJkRnJhbWVzID0gKGZvbGRlcixjb3VudCkgPT4gQXJyYXkuZnJvbSh7bGVuZ3RoOmNvdW50fSwoXyxpKT0+YOWVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vJHtmb2xkZXJ9LyR7aSsxfS5wbmdgKVxuXG5jb25zdCBncm91cHMgPSBbXG4gIHtpZDondHdvRCcsdGl0bGU6J+S6jOe7tOWItuS9nOmhueebricsZW46JzJEIFBST0RVQ1RJT04nLGl0ZW1zOnR3b0RJdGVtc30sXG4gIHtpZDondGhyZWVEJyx0aXRsZTon5LiJ57u05YmN5pyf562W5YiS6aG555uuJyxlbjonM0QgUFJFLVBST0RVQ1RJT04nLGl0ZW1zOltcbiAgICBbJ+azoeazoeeOm+eJuVjkuJzmnKznlLXovabngbXmgoknLCfliY3mnJ/nrZbliJLjgIHliIbplZzmnoTmgJ3kuI7liqjnlLvpooTliarnmoTor6bnu4blhoXlrrnlvoXooaXlhYXjgIInLCczRCBQTEFOTklORycsJ+WVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vMS7ms6Hms6HnjpvniblY5Lic5pys55S16L2m54G15oKJLzEu5rOh5rOh546b54m5WOS4nOacrOeUtei9pueBteaCiS5tcDQnLCdwcm9qZWN0LXBvc3RlcnMvM2QtMDEuanBnJyxzdG9yeWJvYXJkRnJhbWVzKCcxLuazoeazoeeOm+eJuVjkuJzmnKznlLXovabngbXmgoknLDExKSwn5ZWG5Lia6aG555uuL+S4iee7tOWJjeacn+etluWIkumhueebri8xLuazoeazoeeOm+eJuVjkuJzmnKznlLXovabngbXmgokvUE9Q5pWF5LqL54mIIC5tcDQnXSxcbiAgICBbJ+avlOS6mui/qua1t+ixuTA2R1QgeCDmnoHlk4Hpo57ovaYnLCfliY3mnJ/nrZbliJLkuI7liIbplZzmnoTmgJ3nmoTor6bnu4blhoXlrrnlvoXooaXlhYXjgIInLCczRCBQTEFOTklORycsJ+WVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vMi7mr5Tkuprov6rmtbfosblHVDA2IFjmnoHlk4Hpo57ovaYvMi7mr5Tkuprov6rmtbfosblHVDA2WOaegeWTgemjnui9pi5tcDQnLCdwcm9qZWN0LXBvc3RlcnMvM2QtMDIuanBnJyxzdG9yeWJvYXJkRnJhbWVzKCcyLuavlOS6mui/qua1t+ixuUdUMDYgWOaegeWTgemjnui9picsMTApXSxcbiAgICBbJ+axn+iLj+WNq+inhuiKguebruOAkOS4reWNjuS5pumZouOAkScsJ+WJjeacn+etluWIkuS4juWIhumVnOaehOaAneeahOivpue7huWGheWuueW+heihpeWFheOAgicsJzNEIFBMQU5OSU5HJywn5ZWG5Lia6aG555uuL+S4iee7tOWJjeacn+etluWIkumhueebri8zLuaxn+iLj+WNq+inhuiKguebruOAkOS4reWNjuS5pumZouOAkS8zLuaxn+iLj+WNq+inhuiKguebruOAkOS4reWNjuS5pumZouOAkS5tcDQnLCdwcm9qZWN0LXBvc3RlcnMvM2QtMDMuanBnJyxzdG9yeWJvYXJkRnJhbWVzKCczLuaxn+iLj+WNq+inhuiKguebruOAkOS4reWNjuS5pumZouOAkScsMTApXSxcbiAgICBbJ+Wuiei4j1BnN+enkeaKgOi3kemeiycsJ+WJjeacn+etluWIkuS4juWIhumVnOaehOaAneeahOivpue7huWGheWuueW+heihpeWFheOAgicsJzNEIFBMQU5OSU5HJywn5ZWG5Lia6aG555uuL+S4iee7tOWJjeacn+etluWIkumhueebri80LuWuiei4j1BnN+enkeaKgOi3kemeiy80LuWuiei4j1BnN+enkeaKgOi3kemeiy5tcDQnLCdwcm9qZWN0LXBvc3RlcnMvM2QtMDQuanBnJyxzdG9yeWJvYXJkRnJhbWVzKCc0LuWuiei4j1BnN+enkeaKgOi3kemeiycsMTEpXSxcbiAgICBbJ0hVQVdFSSDpuL/okpnnlJ/mgIEnLCfliY3mnJ/nrZbliJLkuI7liIbplZzmnoTmgJ3nmoTor6bnu4blhoXlrrnlvoXooaXlhYXjgIInLCczRCBQTEFOTklORycsJ+WVhuS4mumhueebri/kuInnu7TliY3mnJ/nrZbliJLpobnnm64vNS5IVUFXRUkg6bi/6JKZ55Sf5oCBLzUuSFVBV0VJIOm4v+iSmeeUn+aAgS5tcDQnLCdwcm9qZWN0LXBvc3RlcnMvM2QtMDUuanBnJyxzdG9yeWJvYXJkRnJhbWVzKCc1LkhVQVdFSSDpuL/okpnnlJ/mgIEnLDEzKV1cbiAgXX0sXG4gIHByb2plY3RHcm91cCgndHJhaW5pbmcnLCflhbblroPliqjmgIEnLCdPVEhFUiBNT1RJT04nLCdFWFBFUklNRU5UJyxbJ2xvZ2/lrZ/oj7Lmlq/po47moLwubXA0JywnTmlrZS0ubXA0Jywn54ix5b+DLm1wNCcsJ+S+v+WIqWxvZ2/mi7zotLTpo44ubXA0Jywn56m/5qKtLm1wNCcsJ+WKqOihpeaPkuS7tuiuree7gy5tcDQnLCfliqjmgIHorq3nu4MubXA0Jywn5YWs5Y+45L2c5ZOB54mH5aS05a6j5LygMS5tcDQnLCflhazlj7jkvZzlk4HniYflpLTlrqPkvKAyLm1wNCcsJ+eWvumjjiAubXA0Jywn6IqC5aWP57uD5LmgLm1wNCcsJ+aWsOW5tC5tcDQnLCfoirHnk6MubXA0Jywn6Iu55p6cLm1wNCcsJ+aXi+i9rOWKqOaAgeiuree7gy5tcDQnXSlcbl1cblxuY29uc3QgY2F2YWxyeSA9IFtcbiAgWydCT09MRUFOJywgJ+W4g+WwlOi/kOeuly5tcDQnXSwgWydNT1RJT04gVEVTVCcsICfliqjmgIHmtYvor5UubXA0J10sIFsnU0lOIE1PVElPTicsICfmlrnlnZdzaW7ov5DliqgubXA0J10sXG4gIFsnRkxPV0VSJywgJ+iKseactS5tcDQnXSwgWydGTFVJRCcsICfmtYHkvZMubXA0J10sIFsnQ09MT1IgVEVTVCcsICfoibLlvanmtYvor5UubXA0J10sXG4gIFsnSU1BR0UgRklFTEQnLCAn5Zu+54mH5omp5pWjLm1wNCddLCBbJ0dSSUQgV0FWRScsICfnvZHmoLzpmo/mlrnlnZfms6LliqgubXA0J10sIFsnVFlQRSBCUkVBSycsICfmloflrZfmlaPlvIAubXA0J10sXG4gIFsnVFlQRSBST1RBVEUnLCAn5paH5a2X5peL6L2sIC5tcDQnXSwgWydUWVBFIFJPVEFURSAwMicsICfmloflrZfml4vovawyLm1wNCddLCBbJ1JJUFBMRScsICflnIblvaLmianmlaMubXA0J11cbl1cblxuY29uc3QgcHJvamVjdE5hcnJhdGl2ZXMgPSB7XG4gIHR3b0Q6IFsn5Zu057uV5ZOB54mM5Lyg5pKt5YaF5a655a6M5oiQ5LqM57u05Yqo5oCB6K6+6K6h77yM6K6p5L+h5oGv44CB6IqC5aWP5LiO6KeG6KeJ6aOO5qC85L+d5oyB5LiA6Ie044CCJywn5b2T5YmN5YWI5bGV56S66aG555uu5oiQ54mH44CC5ZCO57ut5bCG5Zyo6L+Z6YeM6KGl5YWF5YW35L2T5Yi25L2c5Yy66Ze044CB6ZWc5aS05ouG6Kej5ZKM5Liq5Lq66LSf6LSj5YaF5a6544CCJ10sXG4gIHRocmVlRDogWyfkuInnu7Tpobnnm67nmoTliY3mnJ/nrZbliJLkuI7op4bop4npooTmvJTvvIznlKjkuo7mmI7noa7liJvmhI/mlrnlkJHjgIHplZzlpLTnu5PmnoTlkozliLbkvZzot6/lvoTjgIInLCflvZPliY3lhYjlsZXnpLrpobnnm67op4bpopHjgILlkI7nu63lsIblnKjov5nph4zooaXlhYXliY3mnJ/liIbplZzjgIHliqjnlLvpooTliarjgIHlj4LogIPmlbTnkIblkozmlrnmoYjmjqjov5vov4fnqIvjgIInXSxcbiAgdHJhaW5pbmc6IFsn5bel5L2c5LmL5aSW55qE5Yqo5oCB57uD5Lmg5LiO6KeG6KeJ5a6e6aqM77yM55So5LqO5rWL6K+V5paw55qE6IqC5aWP44CB5Zu+5b2i5pa55rOV5ZKM6L2v5Lu26IO95Yqb44CCJywn5LuO5Y2V5LiA6L+Q5Yqo6KeE5b6L5oiW6KeG6KeJ5Li76aKY5Ye65Y+R77yM6YCa6L+H55+t5ZGo5pyf57uD5Lmg5a6M5oiQ5Yqo5oCB57uT5p6c44CCJ11cbn1cblxuY29uc3QgcHJvamVjdERldGFpbHMgPSB7XG4gICczNjHCsOWTgeeJjOWuo+S8oOaXpSc6IHtcbiAgICBvdmVydmlldzon5LiOIFVJRFN0dWRpbyDlkIjkvZzvvIzkuLogMzYxwrDlk4HniYzjgIzlh4/norPliqDpgJ/jgI3liLbkvZzmpoLlv7XlrqPkvKDniYfjgILlvbHniYflm7Tnu5Xlk4HniYzlj5HluIPnmoQgQ1FUIOeis+S4tOeVjOenkeaKgO+8jOmAmui/h+W+ruinguadkOaWmeOAgeenkeaKgOinhuinieS4juS6p+WTgeS5i+mXtOeahOi9rOaNou+8jOWwhuaKveixoeeahOadkOaWmeaKgOacr+i9rOWMluS4uuebtOingueahOWKqOaAgeihqOi+vuOAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu5ZCO5pyf5Yqo5oCB5Yi25L2c5a+55o6l44CBMjZzIOWQjiBNb3Rpb24gRGVzaWduIOWPiuacgOe7iOaIkOeJh+WJqui+keOAguWcqOaXouWumue+juacr+S4juS4iee7tOi1hOS6p+WfuuehgOS4iu+8jOWujOaIkOmVnOWktOihlOaOpeOAgeWKqOaAgeWbvuW9ouOAgei9rOWcuuWPiuiKguWlj+iuvuiuoe+8jOW5tue7n+S4gOW9seeJh+WJjeWQjuauteeahOWKqOaAgeivreiogOOAgicsXG4gICAgY2hhbGxlbmdlOiflkI7ljYrmrrXmtonlj4rlvq7op4LmnZDotKjjgIHnp5HmioDkv6Hmga/kuI7kuqflk4HlsZXnpLrnrYnkuI3lkIzop4bop4nlsLrluqbvvIzpmr7ngrnlnKjkuo7pgb/lhY3plZzlpLTmiJDkuLrljZXnuq/nmoTntKDmnZDmi7zmjqXjgILpgJrov4fliqjlir/lu7bnu63jgIHlvaLmgIHlhbPogZTkuI7oioLlpY/mjqfliLbkuLLogZTkuI3lkIzlnLrmma/vvIzkvb/kv6Hmga/mnIDnu4jnlLHmioDmnK/mgKfog73jgIHkuqflk4HliLDlk4HniYzoh6rnhLbmlLbmnZ/jgIInXG4gIH0sXG4gICcyMDI05b+r5omL56OB5Yqb5aSn5LyaJzoge1xuICAgIG92ZXJ2aWV3OifkuLogMjAyNCDlv6vmiYvno4HlipvlpKfkvJrliLbkvZzlpKfkvJrop4bop4nlvbHniYfjgILmnKzlsYrlpKfkvJrku6XjgIzmmbrog73nu4/okKXjgI3kuLrkuLvpopjvvIzmlbTkvZPop4bop4npgJrov4fmjIHnu63mtYHliqjjgIHlu7blsZXnmoTliqjmgIHor63oqIDvvIzkvKDpgJLov57mjqXjgIHlop7plb/kuI7mmbrog73nu4/okKXnmoTmpoLlv7XjgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJhyA0NnMg5LmL5ZCO55qE5YWo6YOoIE1vdGlvbiBEZXNpZ27jgILnvo7mnK/kvJnkvLTlrozmiJDlhbPplK7op4bop4nkuI7po47moLzorr7lrprvvIzmiJHlnKggQUUg5Lit6YeN5paw5ouG6Kej5ZKM5pCt5bu66KeG6KeJ5pWI5p6c77yM6K6p5Y6f5pys55qE6Z2Z5oCB6K6+6K6h55yf5q2j6L2s5YyW5oiQ5Y+v5Lul5oyB57ut6L+Q5Yqo55qE5Yqo5oCB57O757uf44CCJyxcbiAgICBjaGFsbGVuZ2U6J+acgOWkp+eahOaMkeaImOaYr+i0r+epv+WQjuWNiuauteeahOaoquWQkea1geWKqOaLluWwvuOAguS4uuS6humBv+WFjeabsue6v+i/kOWKqOi/h+S6juacuuaisO+8jOaIkeeglOeptuW5tuaQreW7uuS6huWfuuS6jiBTaW4g5Ye95pWw5LiOIEV4cHJlc3Npb24g55qE5Yqo5oCB5o6n5Yi277yM6YCa6L+H6aKR546H44CB5oyv5bmF5LiO55u45L2N55qE57uE5ZCI77yM6K6p5aSn6YeP5puy57q/5Zyo5oyB57ut5qiq56e755qE5ZCM5pe25L+d5oyB6Ieq54S244CB6ZSZ6JC955qE5rWB5Yqo5oSf77yM5Lmf6K6p5pWI5p6c5LuO5omLIEsg5Yqo55S75Y+Y5oiQ5LiA5aWX5pu056iz5a6a44CB5Y+v5o6n55qE5Yqo5oCB6YC76L6R44CCJ1xuICB9LFxuICAn56uZ6YW35YWx5YibJzoge1xuICAgIG92ZXJ2aWV3OifkuLogMjAyMiDnq5nphbflpKfkvJrliLbkvZzlpKfkvJrlrqPkvKDniYfjgILpgJrov4fkuI3mlq3lj5jljJbjgIHono3lkIjnmoTlm77lvaLkuI7oibLlvanmnoTlu7rlhYXmu6HnlJ/lkb3lipvnmoTop4bop4nkuJbnlYzvvIzku6XmjIHnu63mtYHliqjnmoTliqjmgIHor63oqIDlvLrljJblpKfkvJrlubTovbvjgIHlvIDmlL7nmoTop4bop4nmsJvlm7TjgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJhyAzMnPigJQ1NnMg55qEIE1vdGlvbiBEZXNpZ24g5Y+K5pyA57uI5oiQ54mH5Ymq6L6R44CC6L+Z5LiA5q6155qE55CD5L2T6YOo5YiG5rKh5pyJ5a6M5pW055qE576O5pyv5Yqo5oCB6K6+5a6a77yM5Zug5q2k6Zmk5LqG5Yqo55S75Yi25L2c77yM5Lmf5Y+C5LiO5LqG6L+Z6YOo5YiG55qE5Yqo5oCB6KeG6KeJ5o6i57Si77yM5LuO6L+Q5Yqo5pa55byP5Yiw55CD5L2T5YaF6YOo55qE6Imy5b2p5pWI5p6c6L+b6KGM6YeN5paw6K6+6K6h5LiO5pCt5bu644CCJyxcbiAgICBjaGFsbGVuZ2U6J+mavueCueaYr+iuqeWkp+mHj+eQg+S9k+WcqOS/neaMgea1geeVhei/kOWKqOeahOWQjOaXtu+8jOWGhemDqOiJsuW9qeS5n+Wni+e7iOWkhOS6juiHqueEtua1geWKqOeahOeKtuaAgeOAgumAmui/h+S4uuavj+S4queQg+S9k+WPoOWKoOWkmuWxgua4kOWPmOS4juWKqOaAgeiJsuW9qe+8jOW5tuS4jeaWreiwg+aVtOa3t+WQiOaWueW8j+OAgei/kOWKqOmAn+W6puWSjOmlseWSjOW6pu+8jOiuqeminOiJsui2s+Wkn+S4sOWvjOS9huS4jei/h+iJs++8jOacgOe7iOiuqeeQg+S9k+i/kOWKqOS4juWGhemDqOiJsuW9qea1geWKqOW9ouaIkOe7n+S4gOeahOiKguWlj+OAgidcbiAgfSxcbiAgJ+S6rOS4nFjojYnojpPpn7PkuZDoioInOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuS6rOS4nCDDlyDojYnojpPpn7PkuZDoioLliLbkvZzogZTlkI3lrqPkvKDniYfjgILpobnnm67nu5PlkIjpn7PkuZDoioLlubTovbvjgIHouoHliqjnmoTnjrDlnLrmsJvlm7TkuI7kuqzkuJznmoTkuqflk4HlhYPntKDvvIzpgJrov4flvLroioLlpY/nmoTlm77lvaLliqjnlLvkuI7pn7PkuZDop4bop4nvvIzmiZPpgKDmm7TlubTovbvjgIHmm7TmnInlhrLlh7vlipvnmoTlk4HniYzooajovr7jgIInLFxuICAgIHJvbGU6J+i0n+i0o+mhueebruWJjeacn+eahOWIm+aEj+S4juWKqOaAgeWIhumVnOaehOaAneWItuS9nO+8jOW5tui0n+i0o+W9seeJhyAxM3PigJQyNnMg55qEIE1vdGlvbiBEZXNpZ27jgILnvo7mnK/op4bop4nnlLHlm6LpmJ/kvJnkvLTlrozmiJDvvIzmiJHkuLvopoHotJ/otKPlsIbpnZnmgIHorr7orqHovazljJbkuLrlrozmlbTnmoTliqjmgIHplZzlpLTvvIzlubblu7rnq4vov5nkuIDmrrXnmoTov5DliqjmlrnlvI/kuI7ovazlnLroioLlpY/jgIInLFxuICAgIGNoYWxsZW5nZTon5YW25Lit5q+U6L6D5pyJ5oyR5oiY55qE5piv6ZWy54mH57+76L2s6ZWc5aS077ya6ZyA6KaB5ZyoIEFFIOS4reaooeaLn+WFt+acieepuumXtOaEn+eahCAzRCDnv7vovazvvIzlkIzml7borqnooajpnaLnmoTmuJDlj5jkuI7pq5jlhYnlp4vnu4jot5/pmo/mpK3lnIbnmoTpgI/op4blj5jljJbjgILpgJrov4fmi4bliIbmnZDotKjlsYLnuqflubbph43mlrDlu7rnq4vliqjmgIHlhbPns7vvvIzorqnlvaLlj5jjgIHpgI/op4bkuI7mnZDotKjlj5jljJbkv53mjIHlkIzmraXvvIzmnIDnu4jlnKjkuoznu7Top4bop4npo47moLzkuIvlrp7njrDoh6rnhLbnmoTnq4vkvZPnv7vovazmlYjmnpzjgIInXG4gIH0sXG4gICfkuqzkuJzlpJbljZZY54yq54yq5L6gJzoge1xuICAgIG92ZXJ2aWV3OifkuLrkuqzkuJzlpJbljZYgw5cg54yq54yq5L6g6IGU5ZCN5Yi25L2c5a6j5Lyg54mH44CC6aG555uu6LW35rqQ5LqO572R5Y+L5Y+R546w5Lqs5Lic5aSW5Y2W6aqR5omL5pyN5LiO54yq54yq5L6g57uP5YW455qE57qi6buE6YWN6Imy5oSP5aSW4oCc5pKe6KGr4oCd77yM5Y+M5pa56aG65Yq/5oqK572R57uc54Ot5qKX5Y+Y5oiQ5LiA5qyh5q2j5byP6IGU5ZCN77yM6K6p54yq54yq5L6g5Lul4oCc5aSW5Y2W6aqR5omL4oCd55qE6Lqr5Lu95Yqg5YWl5Lqs5Lic5aSW5Y2W44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYcgMTNz4oCUMzVzIOeahCBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB6LSf6LSj5bCG6Z2Z5oCB6K6+6K6h6L2s5YyW5Li65Yqo5oCB6ZWc5aS077yM5YyF5ous6KeS6Imy5LiO5Zu+5b2i5Yqo55S744CB6ZWc5aS06KGU5o6l5Lul5Y+K5pW05L2T6IqC5aWP55qE5oqK5o6n44CCJyxcbiAgICBjaGFsbGVuZ2U6J+i/meS4qumhueebruacgOWkp+eahOaMkeaImOaYr+aXtumXtOOAguS7juaLv+WIsOe0oOadkOWIsOWujOaIkOaVtOaUr+W9seeJh+WPquaciSAy4oCUMyDlpKnvvIzpnIDopoHlnKjpnZ7luLjntKflh5HnmoTliLbkvZzlkajmnJ/ph4zlv6vpgJ/mtojljJbnvo7mnK/jgIHlrozmiJDliqjnlLvlubblj43lpI3osIPmlbTjgILlnKjkv53or4HkuqTku5jpgJ/luqbnmoTlkIzml7blsL3ph4/kuI3nibrnibLliqjmgIHnu4boioLlkozlrozmiJDluqbvvIzmnIDnu4jmjInml7blrozmiJDkuobov5nkuIDmrrXnmoTliLbkvZzjgIInXG4gIH0sXG4gICflsI/nuqLkuabjgJDlkKznjrDlnLrkuI3puL3lgKHorq7jgJEnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuWwj+e6ouS5puS5kOmYn+S4u+mimOmhueebruWItuS9nOWKqOaAgeinhuinieW9seeJh+OAgumhueebruS7peaPkueUu+W4iOaegeWFt+S4quS6uumjjuagvOeahOinhuinieS9nOWTgeS4uuWfuuehgO+8jOmAmui/h+WKqOeUu+i/m+S4gOatpeaUvuWkp+aPkueUu+acrOi6q+eahOi2o+WRs+aEn+S4jumfs+S5kOiKguWlj+OAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mH5YmN5LiJ56+H56ug55qEIE1vdGlvbiBEZXNpZ27jgILlnKjkv53nlZnljp/mj5LnlLvpo47moLznmoTln7rnoYDkuIrvvIzlsIbkurrnianjgIHlm77lvaLkuI7lnLrmma/ov5vooYzliqjmgIHmi4bop6PvvIzlubbmoLnmja7pn7PkuZDph43mlrDlu7rnq4vnlLvpnaLnmoTov5DliqjkuI7liIfmjaLoioLlpY/jgIInLFxuICAgIGNoYWxsZW5nZTon6L+Z5Liq6aG555uu5q+U6L6D54m55Yir55qE5Zyw5pa55piv77yM5o+S55S75biI5a+55Yqo5oCB5Lmf5pyJ6Z2e5bi45piO56Gu55qE5Liq5Lq65a6h576O44CC5pyA5Yid5bCd6K+V5LqG5pu05Yqg5Lid5ruR5rWB55WF55qE6L+Q5Yqo5pa55byP77yM5L2G5ZCO5p2l5Y+R546w55Wl5bim5Y2h6aG/5ZKM6Lez6LeD5oSf55qE6IqC5aWP5Y+N6ICM5pu06LS05ZCI5Y6f55S75rCU6LSo77yM5Zug5q2k5Li75Yqo5a+56YOo5YiG5Yqo55S76L+b6KGM5oq95bin5ZKM6IqC5aWP6YeN5p6E77yM6K6pIE1vdGlvbiDmnIDnu4jmiJDkuLrmj5LnlLvpo47moLznmoTkuIDpg6jliIbvvIzogIzkuI3mmK/ljZXnuq/orqnnlLvpnaLigJzliqjotbfmnaXigJ3jgIInXG4gIH0sXG4gICfnibnmraVYLVNvZmEgRm9hbSc6IHtcbiAgICBvdmVydmlldzon5Li654m55q2lIMOXIFgtU09GQSBGT0FNIOi3kemei+WItuS9nOS6p+WTgeWuo+S8oOeJh+OAguW9seeJh+e7k+WQiOS6jOe7tOS4juS4iee7tOinhuinie+8jOS7peaLn+S6uuWMlueahOKAnOawlOazoeaguOKAneihqOeOsOS4reW6leeahOaflOi9r+S4juWbnuW8ue+8jOW5tumAmui/h+S4iee7tOmVnOWktOWxleekuumei+mdoueahOe8lue7h+S4jui9u+ebiOi0qOaEn++8m+aVtOS9k+mHh+eUqOmprOWNoem+meiJsuezu++8jOiuqeenkeaKgOihqOi+vuS/neaMgeW5tOi9u+OAgei9u+advueahOS6p+WTgeawlOi0qOOAgicsXG4gICAgcm9sZTon6LSf6LSj5byA56+HIDDigJQycyDmi5/kurrop5LoibLnmoTmjKTljovliqjnlLvvvIzku6Xlj4ogNuKAlDExcyDmsJTms6HmoLjku47mjKTljovjgIHlvLnpo57liLDnqb/moq3nqbrpl7TnmoTlhajpg6ggTW90aW9uIERlc2lnbuOAguWFtuS4rSA24oCUMTFzIOayoeacieWujOaVtOe+juacr+iuvuWumu+8jOWboOatpOS5n+WPguS4juS6hui/meS4gOauteS7jueUu+mdouaehOaIkOWIsOi/kOWKqOaWueW8j+eahOWKqOaAgeinhuinieaOoue0ouOAgicsXG4gICAgY2hhbGxlbmdlOifpmr7ngrnmmK/lpoLkvZXorqnlpKfph4/msJTms6Hml6LmnInmn5Tova/nmoTmjKTljovlm57lvLnmhJ/vvIzlj4jog73lnKjlv6vpgJ/nqb/moq3kuK3lu7rnq4vmuIXmmbDnmoTnqbrpl7TlsYLmrKHjgILpgJrov4fosIPmlbTlvaLlj5joioLlpY/jgIHlvLnmgKfmm7Lnur/vvIzku6Xlj4rliY3kuK3lkI7mma/nkIPkvZPnmoTpgJ/luqblt67jgIHlpKflsI/lkozov5Dliqjovajov7nvvIzorqnigJzmjKTljovigJTph4rmlL7igJTlvLnpo57igJTnqb/moq3igJ3nmoTliqjkvZzlvaLmiJDov57nu63nmoTlipvph4/kvKDpgJLvvIzlkIzml7bmiorkuqflk4HigJzova/lvLnigJ3nmoTljZbngrnnm7TmjqXovazljJbmiJDliqjmgIHmhJ/lj5fjgIInXG4gIH0sXG4gICfoib7nvo7nibnlk4HniYznhJXmlrDlj5HluIPkvJonOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuiJvue+jueJueWTgeeJjOeEleaWsOWPkeW4g+S8muWItuS9nOWTgeeJjOinhuinieW9seeJh+OAguWbtOe7leWFqOaWsOeahOWTgeeJjOinhuinieS9k+ezu++8jOmAmui/hyBMb2dv44CB5ZyG5b2i5LiO57q/5p2h562J5qC45b+D5YWD57Sg55qE5ouG6Kej5LiO6YeN57uE77yM5bCG6Z2Z5oCB55qE5ZOB54mM6K+G5Yir6L2s5YyW5Li65oyB57ut55Sf6ZW/44CB5omp5pWj55qE5Yqo5oCB6KeG6KeJ44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYcgNnPigJQxNnMg55qEIE1vdGlvbiBEZXNpZ27vvIzkuLvopoHlrozmiJDlk4HniYzlm77lvaLnmoTmi4bop6PjgIHph43nu4TjgIHlu7blsZXku6Xlj4rkuI3lkIzop4bop4nlvaLmgIHkuYvpl7TnmoTliqjmgIHooZTmjqXjgIInLFxuICAgIGNoYWxsZW5nZTon6aG555uu5Yi25L2c5ZGo5pyf6Z2e5bi457Sn5byg77yM6ICM6L+Z5LiA5q615Y+I5YyF5ZCr5aSn6YeP5Yeg5L2V5Zu+5b2i55qE6L+e57ut5Y+Y5YyW5LiO57K+57uG6KGU5o6l44CC6ZyA6KaB5Zyo55+t5pe26Ze05YaF5b+r6YCf5bu656uL6L+Q5Yqo6YC76L6R77yM5ZCM5pe25Y+N5aSN6LCD5pW06YCf5bqm5puy57q/44CB5Zu+5b2i5bGC57qn5LiO6L2s5Zy66IqC5aWP77yM5Zyo5L+d6K+B5Lqk5LuY5pWI546H55qE5ZCM5pe277yM6K6p566A5rSB55qE5ZOB54mM5Zu+5b2i5L6d54S25L+d5oyB6Laz5aSf5rWB55WF5ZKM5a6M5pW055qE5Yqo5oCB6LSo5oSf44CCJ1xuICB9LFxuICAn5b6u6L2v5bCP5YawWOeJueatpSc6IHtcbiAgICBvdmVydmlldzon5Li65b6u6L2v5bCP5YawIMOXIOeJueatpeWkj+aXpeayueeUu+WumuWItuezu+WIl+WItuS9nOWuo+S8oOWKqOeUu+OAgumhueebrumAmui/h+eJueatpeOAgeW+rui9r+Wwj+WGsOOAgemYv+mHjOW3tOW3tOS4ieaWueWNj+S9nO+8jOWwhuS4jeWQjOeahOS4quaAp+S4juaDhee7qui9rOWMluS4uuiHquW3seS4k+WxnueahOayueeUuyBUIOaBpO+8jOW4jOacm+avj+S4quS6uumDveiDveS7peiHquW3seeahOaWueW8j+aIkOS4uueLrOS4gOaXoOS6jOeahOWIm+S9nOiAheOAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mH5YmNIDEwcyDnmoQgTW90aW9uIERlc2lnbu+8jOS7peWPiiAyMHPigJQyNHMg55m+5bmF6Im65pyv5L2c5ZOB56m/5qKt6ZWc5aS055qE5Yqo5oCB5Yi25L2c77yM5bCG5LiN5ZCM6aOO5qC855qE6KeG6KeJ57Sg5p2Q6YeN5paw57uE57uH5Li66L+e57ut55qE5Yqo5oCB5Y+Z5LqL44CCJyxcbiAgICBjaGFsbGVuZ2U6J+e7k+Wwvuepv+airemVnOWktOmcgOimgeWcqOefreaXtumXtOWGheiejeWQiOi/keeZvuW5heS4jeWQjOmjjuagvOeahOiJuuacr+S9nOWTgeOAgumavueCueS4jeS7heaYr+e0oOadkOmHj+Wkp++8jOabtOmcgOimgeaOp+WItuavj+W5heS9nOWTgeeahOepuumXtOWxgue6p+OAgeWHuueOsOiKguWlj+S4jumVnOWktOmAn+W6pu+8jOiuqeWkp+mHj+eUu+mdouW/q+mAn+aOoOi/h+WNtOS4jeaYvuW+l+adguS5se+8jOacgOe7iOW9ouaIkOS4gOadoeS4jeaWreW7tuS8uOeahOiJuuacr+mVv+W7iu+8jOaKiuKAnOavj+S4quS6uumDveacieWxnuS6juiHquW3seeahOiJuuacr+ihqOi+vuKAneaOqOWQkemrmOa9ruOAgidcbiAgfSxcbiAgJ0JPVFRPTlMgQWlyIOS6p+WTgeWuo+S8oOinhumikSc6IHtcbiAgICBvdmVydmlldzon5Li6IEJVVFRPTlMgQWlyIFgg6ICz5py65paw5ZOB5Yi25L2c5Lqn5ZOB5a6j5Lyg54mH44CC5b2x54mH5Lul6auY5a+55q+U55qE5a2X5L2T44CB5Yeg5L2V5Zu+5b2i5LiO5Lqn5ZOB5LiJ57u06KeG6KeJ5Li65qC45b+D77yM6YCa6L+H5b+r6YCf5YiH5o2i55qE5Yqo5oCB6K+t6KiA77yM5ZGI546w6ICz5py655qE6K6+6K6h57uG6IqC5LiO5Lqn5ZOB54m55oCn44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYfliY0gMTVzIOeahCBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ5Y+K6YOo5YiG5LiJ57u05YWD57Sg55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB6LSf6LSj5bCG5LiN5ZCM57Sg5p2Q6YeN5paw5pW05ZCI77yM6YCa6L+H54mI5byP6L+Q5Yqo44CB5Lqn5ZOB5Yqo55S75LiO6ZWc5aS06L2s5Zy65bu656uL5a6M5pW055qE5Yqo5oCB6IqC5aWP44CCJyxcbiAgICBjaGFsbGVuZ2U6J+i/meS4gOauteWQjOaXtuWMheWQq+Wtl+S9k+aOkueJiOOAgeS6jOe7tOWbvuW9ouS4juWkmue7hOS4iee7tOS6p+WTgee0oOadkO+8jOinhuinieW9ouW8j+WIh+aNoumdnuW4uOmikee5geOAgumavueCueWcqOS6juaXouimgeS/neaMgeW/q+iKguWlj+WSjOinhuinieWGsuWHu+WKm++8jOWPiOS4jeiDveiuqeS/oeaBr+WPmOW+l+adguS5se+8jOWboOatpOmAmui/h+i/kOWKqOaWueWQkeOAgeaehOWbvuWFs+ezu+S4jui9rOWcuuiKguWlj+S4suiBlOS4jeWQjOmVnOWktO+8jOiuqeS6jOe7tOS4juS4iee7tOS5i+mXtOiHqueEtuaOpeWKm++8jOWQjOaXtuWni+e7iOS/neaMgeS6p+WTgeS9nOS4uuinhuinieS4reW/g+OAgidcbiAgfSxcbiAgJ1VJTlBVUyBMT0dP5ryU57uOJzoge1xuICAgIG92ZXJ2aWV3OifkuLogVUlOUFVTIOWItuS9nOWTgeeJjCBMb2dvIOWKqOaAgea8lOe7ju+8jOmAmui/h+a2suaAgeOAgea4kOWPmOOAgeeykuWtkOS4juWHoOS9leWbvuW9ouetieS4jeWQjOinhuinieivreiogO+8jOWvueaguOW/g+eahOKAnFXigJ3lvaLnrKblj7fov5vooYzlpJrnu7TluqbliqjmgIHmjqLntKLjgIInLFxuICAgIHJvbGU6J+i0n+i0o+aVtOaUr+W9seeJh+eahOWJqui+keS4juiKguWlj+aVtOWQiO+8jOS7peWPiiAzc+KAlDVz44CBMTFz4oCUMTJzIOeahCBMb2dvIE1vdGlvbiBEZXNpZ27jgILnvo7mnK/op4bop4nnlLHlm6LpmJ/kvJnkvLTlrozmiJDvvIzmiJHkuLvopoHotJ/otKPlsIbpnZnmgIHorr7orqHovazljJbkuLrliqjmgIHvvIzlubbnu5/kuIDkuI3lkIzmrrXokL3kuYvpl7TnmoToioLlpY/kuI7ooZTmjqXjgIInLFxuICAgIGNoYWxsZW5nZTonMTFz4oCUMTJzIOmcgOimgeWcqOaegeefreaXtumXtOWGheWujOaIkOWkp+mHj+WchuW9oueahOebuOWIh+OAgeW1jOWll+S4juWwuuW6puWPmOWMlu+8jOWQjOaXtuWPoOWKoOWkmue7hOmrmOmlseWSjOiJsuW9qeOAguWItuS9nOaXtumHjeeCueaOp+WItuWHoOS9leWFs+ezu+OAgei/kOWKqOiKguWlj+S4juiJsuW9qeWxgue6p++8jOiuqeWkjeadguWbvuW9ouW/q+mAn+WPmOWMlueahOWQjOaXtuS+neeEtuS/neaMgeW5suWHgOOAgeacieW6j++8jOW5tuacgOe7iOiHqueEtuaUtuadn+WbniBMb2dv44CCJ1xuICB9LFxuICAn5Lqs5LicLeecn+W/g+ivneWkp+WGkumZqSc6IHtcbiAgICBvdmVydmlldzon5Li65Lqs5Lic55S16ISR5pWw56CB5paw5ZOB5qCP55uu44CM55yf5paw6K+d5aSn5YaS6Zmp44CN5Yi25L2c5a6j5Lyg5Yqo55S744CC6aG555uu6YCa6L+H6Laj5ZGz5oyR5oiY44CB5byA566x5LiO5Lqn5ZOB5rWL6K+E562J5YaF5a6577yM5Lul5pu05bm06L2744CB5aix5LmQ5YyW55qE5pa55byP5ZGI546w5pWw56CB5paw5ZOB5LiO5Lqn5ZOB5L2T6aqM44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYflvIDnr4cgMOKAlDNz44CBNuKAlDdzIOeahCBNb3Rpb24gRGVzaWdu77yM5Lul5Y+K57uT5bC+5a6a54mI5Yqo55S744CC5Zu057uV5bey5pyJ576O5pyv5a6M5oiQ5Zu+5b2i44CB5paH5a2X5LiO5Zy65pmv55qE5Yqo5oCB5ryU57uO77yM5bm26LSf6LSj5LiN5ZCM5L+h5oGv5LmL6Ze055qE6IqC5aWP6KGU5o6l44CCJyxcbiAgICBjaGFsbGVuZ2U6J+i/meaUr+eJh+eahOWNleS4quWKqOaAgeauteiQvemDveW+iOefre+8jOS9hueUu+mdouS/oeaBr+WvhuW6puW+iOmrmOOAguWwpOWFtuW8gOevh+mcgOimgeWcqOWHoOenkuWGheWujOaIkOaWh+Wtl+OAgeWbvuW9ouS4juWcuuaZr+WFg+e0oOeahOi/nue7reWPmOWMlu+8jOWboOatpOmHjeeCueiwg+aVtOS6huWFg+e0oOWHuueOsOeahOWFiOWQjuWFs+ezu+OAgemAn+W6puabsue6v+WSjOiKguWlj+WBnOmhv++8jOiuqeeUu+mdouS/neaMgeKAnOW/q+KAneWSjOKAnOeCuOKAneeahOWQjOaXtu+8jOWFs+mUruS/oeaBr+S+neeEtuiDveWkn+iiq+eci+a4he+8jOW5tuS4juaVtOaUr+W9seeJh+WBj+e7vOiJuuOAgea4uOaIj+WMlueahOinhuinieawlOi0qOS/neaMgeS4gOiHtOOAgidcbiAgfSxcbiAgJ+W/q+aJi+agoeaLm+eJh+WktCc6IHtcbiAgICBvdmVydmlldzon5Li65b+r5omL5qCh5Zut5oub6IGY5Yi25L2c5rS75Yqo54mH5aS05Yqo55S744CC5Zu057uV5bm06L2744CB5byA5pS+44CB5pyJ6Laj55qE5qCh5Zut5oub6IGY5rCb5Zu077yM5bCG572R6aG144CB56S+5Lqk44CB5Yib5L2c44CB5ri45oiP562J5bm06L275Lq654af5oKJ55qE6KeG6KeJ5YWD57Sg6J6N5YWl5b+r5omL5ZOB54mM5LiW55WM77yM6YCa6L+H5LiA5q615LiN5pat56m/5qKt55qE6KeG6KeJ5peF56iL5a6M5oiQ5rS75Yqo5byA5Zy644CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTlrqLmiLfmsp/pgJrjgIHmlbTkvZPliJvmhI/mnoTmgJ3jgIHliqjmgIHliIbplZzorr7orqHlj4rlhajniYcgTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieeUseWboumYn+S8meS8tOWujOaIkO+8jOaIkeS7juWJjeacn+amguW/teW8gOWni+WPguS4ju+8jOW5tui0n+i0o+WwhuWIm+aEj+S4juWIhumVnOacgOe7iOWujOaVtOiQveWcsOS4uuWKqOaAgeW9seeJh+OAgicsXG4gICAgY2hhbGxlbmdlOifmnIDlpKfnmoTmjJHmiJjmmK/lpoLkvZXmiorlpKfph4/kuI3lkIznmoTlnLrmma/kuI7op4bop4nlhYPntKDvvIzlnKjnn63nn63ljYHlh6Dnp5LlhoXnu4Tnu4fmiJDkuIDkuKrlrozmlbTnmoTop4LnnIvkvZPpqozjgILlm6DmraTliY3mnJ/lsLHku47liqjmgIHpgLvovpHlh7rlj5Horr7orqHliIbplZzvvIzpgJrov4fplZzlpLTmjqjov5vjgIHnqbrpl7Tnqb/moq3jgIHlhYPntKDmjqXlipvkuLLogZTkuI3lkIzlnLrmma/vvIzorqnmr4/mrKHovazlnLrml6LmnInop4bop4nmg4rllpzvvIzlj4jlp4vnu4jkv53mjIHnu5/kuIDnmoTov5DliqjmlrnlkJHkuI7oioLlpY/vvIzmnIDnu4joh6rnhLbmlLbmnZ/liLDmtLvliqjkuLvpopjjgIInXG4gIH0sXG4gICflv6vmiYvno4HlipvlvJXmk44yMDI1Q05ZJzoge1xuICAgIG92ZXJ2aWV3OifkuLrlv6vmiYvmoKHlm63mi5vogZjliLbkvZzmtLvliqjniYflpLTliqjnlLvjgILlm7Tnu5XlubTovbvjgIHlvIDmlL7jgIHmnInotqPnmoTmoKHlm63mi5vogZjmsJvlm7TvvIzlsIbnvZHpobXjgIHnpL7kuqTjgIHliJvkvZzjgIHmuLjmiI/nrYnlubTovbvkurrnhp/mgonnmoTop4bop4nlhYPntKDono3lhaXlv6vmiYvlk4HniYzkuJbnlYzvvIzpgJrov4fkuIDmrrXkuI3mlq3nqb/moq3nmoTop4bop4nml4XnqIvlrozmiJDmtLvliqjlvIDlnLrjgIInLFxuICAgIHJvbGU6J+i0n+i0o+mhueebrueahOWuouaIt+ayn+mAmuOAgeaVtOS9k+WIm+aEj+aehOaAneOAgeWKqOaAgeWIhumVnOiuvuiuoeWPiuWFqOeJhyBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5LuO5YmN5pyf5qaC5b+15byA5aeL5Y+C5LiO77yM5bm26LSf6LSj5bCG5Yib5oSP5LiO5YiG6ZWc5pyA57uI5a6M5pW06JC95Zyw5Li65Yqo5oCB5b2x54mH44CCJyxcbiAgICBjaGFsbGVuZ2U6J+acgOWkp+eahOaMkeaImOaYr+WmguS9leaKiuWkp+mHj+S4jeWQjOeahOWcuuaZr+S4juinhuinieWFg+e0oO+8jOWcqOefreefreWNgeWHoOenkuWGhee7hOe7h+aIkOS4gOS4quWujOaVtOeahOingueci+S9k+mqjOOAguWboOatpOWJjeacn+WwseS7juWKqOaAgemAu+i+keWHuuWPkeiuvuiuoeWIhumVnO+8jOmAmui/h+mVnOWktOaOqOi/m+OAgeepuumXtOepv+aireOAgeWFg+e0oOaOpeWKm+S4suiBlOS4jeWQjOWcuuaZr++8jOiuqeavj+asoei9rOWcuuaXouacieinhuinieaDiuWWnO+8jOWPiOWni+e7iOS/neaMgee7n+S4gOeahOi/kOWKqOaWueWQkeS4juiKguWlj++8jOacgOe7iOiHqueEtuaUtuadn+WIsOa0u+WKqOS4u+mimOOAgidcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHByb2plY3REZXRhaWxzLCB7XG4gICflv6vmiYvno4HlipvlvJXmk44yMDI1Q05ZJzoge1xuICAgIG92ZXJ2aWV3OifkuLrlv6vmiYvno4HlipvlvJXmk44gMjAyNSBDTlkg5Yi25L2c5paw5pil6JCl6ZSA5a6j5o6o5b2x54mH44CC6aG555uu5Zu057uV5pil6IqC5pyf6Ze05LiN5ZCM55qE5YaF5a655Zy65pmv5LiO6JCl6ZSA546p5rOV5bGV5byA77yM5bCG5bm05ZGz44CB5YaF5a6544CB5LqS5Yqo5LiO5ZOB54mM6JCl6ZSA5pW05ZCI5oiQ5pu06L275p2+44CB5pyJ6Laj55qE6KeG6KeJ6KGo6L6+44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTlrqLmiLfmsp/pgJrjgIHmlbTkvZPliJvmhI/mnoTmgJ3jgIFWTyDmlofmoYjjgIHliqjmgIHliIbplZzorr7orqHlj4rpg6jliIYgTW90aW9uIERlc2lnbuOAguS7juWJjeacn+mcgOaxguais+eQhuOAgeiEmuacrOS4juWIhumVnO+8jOWIsOWQjuacn+WKqOaAgeiQveWcsO+8jOWFqOeoi+WPguS4jumhueebrueahOWIm+aEj+aOqOi/m+OAgicsXG4gICAgY2hhbGxlbmdlOifov5nmrKHmr5TovoPlpKfnmoTmjJHmiJjlj43ogIzmmK/lpoLkvZXlhYjmiorlhoXlrrnorrLmuIXmpZrjgILpnaLlr7nlpKfph48gQ05ZIOiQpemUgOS/oeaBr++8jOmcgOimgeiHquW3semHjeaWsOais+eQhumAu+i+keW5tuWujOaIkCBWTyDmlofmoYjvvIzlho3moLnmja7lj6Pmkq3nmoTor63kuYnlkozoioLlpY/lj43mjqjliIbplZzkuI7op4bop4nliJvmhI/jgILlr7nmiJHmnaXor7TkuZ/mmK/kuIDmrKHku47ljZXnuq/ogIPomZHigJznlLvpnaLmgI7kuYjliqjigJ3vvIzovazlkJHmgJ3ogIPlhoXlrrnmgI7kuYjorrLjgIHnlLvpnaLmgI7kuYjphY3lkIjjgIHmlbTmlK/niYflrZDmgI7kuYjmiJDnq4vnmoTlsJ3or5XjgIInXG4gIH0sXG4gICflv6vmiYvlubTnu4jlhoXlrqPmgLvnu5MnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuW/q+aJi+ejgeWKm+W8leaTjuW5tOW6puWGhemDqOaAu+e7k+WItuS9nOWbnumhvuW9seeJh+OAgumAmui/h+WKqOaAgeWbvuW9ouOAgeS4muWKoeahiOS+i+S4juWTgeeJjOWGheWuueeahOW/q+mAn+WIh+aNou+8jOWwhui/h+WOu+S4gOW5tOeahOS6p+WTgeiDveWKm+OAgeWGheWuuei1hOS6p+S4jumYtuauteaAp+aIkOaenOmHjeaWsOaVtOeQhuaIkOabtOW5tOi9u+OAgeabtOWFt+inhuinieWGsuWHu+WKm+eahOW5tOW6puWbnumhvuOAgicsXG4gICAgcm9sZTon6LSf6LSj5b2x54mH5YmNIDEycyDnmoQgTW90aW9uIERlc2lnbu+8jOWMheaLrOW8gOevh+inhuinieOAgeepuumXtOi9rOWcuuS7peWPiuS6p+WTgeiDveWKm+ebuOWFs+WGheWuueeahOWKqOaAgeWItuS9nO+8jOWcqOaXouWumue+juacr+WfuuehgOS4iuWujOaIkOWKqOaAgea8lOe7juS4jumVnOWktOihlOaOpeOAgicsXG4gICAgY2hhbGxlbmdlOiflvIDnr4fliY3kuKTkuKrplZzlpLTpnIDopoHlnKggQUUg5Lit55So5LqM57u057Sg5p2Q5qih5ouf5LiJ57u056m66Ze05LiO6ZWc5aS06L+Q5Yqo77yM5ZCM5pe26L+Y6KaB6K6p6KGo6Z2i55qE6JOd57u/6Imy5riQ5Y+Y6ZqP552A5b2i5L2T5oyB57ut5rWB5Yqo44CC5Yi25L2c5pe26YeN54K55aSE55CG5LqG6YCP6KeG44CB5bGC57qn44CB6KeG5beu5Lul5Y+K5riQ5Y+Y6L+Q5Yqo5LmL6Ze055qE5YWz57O777yM6K6p5LqM57u05YWD57Sg5Zyo5rKh5pyJ5a6M5pW05LiJ57u05Yi25L2c55qE5oOF5Ya15LiL5L6d54S25YW35pyJ56m66Ze057q15rex5ZKM5p2Q6LSo5rWB5Yqo5oSf77yM5bm26Ieq54S26KGU5o6l5Yiw5ZCO6Z2i55qE5L+h5oGv5bGV56S644CCJ1xuICB9LFxuICAnVk9MTEdBUyBYIOWHr+aWr+WTiOaelyc6IHtcbiAgICBvdmVydmlldzon5Li6IFZPTExHQVMgw5cgS2VpdGggSGFyaW5nIOiBlOWQjeiDvemHj+mlruaWmeWItuS9nOWuo+S8oOeJh+OAgumhueebruWwhiBLZWl0aCBIYXJpbmcg5p6B5YW36L6o6K+G5bqm55qE6KGX5aS06Im65pyv6K+t6KiA6J6N5YWl5Lqn5ZOB5YyF6KOF77yM5Lul5aSn6IOG55qE6Imy5b2p5LiO5Zu+5b2i56Kw5pKe77yM5ZGI546wIFZPTExHQVPjgIzoibrmnK8gw5cg6IO96YeP44CN55qE5ZOB54mM6KGo6L6+44CCJyxcbiAgICByb2xlOifotJ/otKPmlbTmlK/lvbHniYfnmoQgTW90aW9uIERlc2lnbiDlj4rmnIDnu4jliarovpHjgILnvo7mnK/op4bop4nkuI7kuInnu7TotYTkuqfnlLHlm6LpmJ/kvJnkvLTlrozmiJDvvIzmiJHkuLvopoHotJ/otKPlsIbkuI3lkIzlvaLlvI/nmoTntKDmnZDov5vooYzliqjmgIHmlbTlkIjvvIzlubblrozmiJDlhajniYfnmoTplZzlpLTooZTmjqXjgIHovazlnLrkuI7mlbTkvZPoioLlpY/orr7orqHjgIInLFxuICAgIGNoYWxsZW5nZTon5pW054mH5ZCM5pe25YyF5ZCr5bmz6Z2i5Zu+5b2i44CB5Lqn5ZOB5LiJ57u05LiO5aSn6YeP572Q5L2T6Zi15YiX44CC5Yi25L2c5pe26YeN54K56YCa6L+H6L+Q5Yqo5pa55ZCR44CB6YeN5aSN6IqC5aWP44CB5p6E5Zu+5bu257ut5LiO5b+r6YCf6L2s5Zy65bu656uL57uf5LiA55qE5Yqo5oCB6K+t6KiA77yM6K6pIEtlaXRoIEhhcmluZyDmnKzouqvlvLrng4jnmoTop4bop4npo47moLzotK/nqb/lp4vnu4jvvIzlkIzml7blnKjpq5jlr4bluqbnlLvpnaLkuK3kv53mjIHkuqflk4HnmoTop4bop4nkuK3lv4PjgIInXG4gIH0sXG4gICdWT0xMR0FTIFgg6IuP54Kz5re7Jzoge1xuICAgIG92ZXJ2aWV3OifkuLogVk9MTEdBUyDDlyDoi4/ngrPmt7vliLbkvZzlk4HniYzlrqPkvKDniYfjgILlm7Tnu5Xoi4/ngrPmt7vnmoTpgJ/luqbkuI7nq57mioDnsr7npZ7vvIzlsIbov5DliqjjgIHog73ph4/kuI4gVk9MTEdBUyDlhajlipvku6XotbTnmoTlk4HniYznkIblv7Xnu5PlkIjvvIzpgJrov4fpq5jpgJ/nmoTmloflrZfkuI7nur/mnaHop4bop4nlvLrljJbkuI3mlq3lkJHliY3nmoTlipvph4/mhJ/jgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJh+WJjSAxNnMg55qEIE1vdGlvbiBEZXNpZ27vvIzkuLvopoHlrozmiJDmloflrZfliqjmgIHjgIHlm77lvaLliqjnlLvku6Xlj4rotK/nqb/kurrnianov5DliqjnmoTnur/mnaHmlYjmnpzvvIzorqkgVHlwb2dyYXBoeSDkuI7oi4/ngrPmt7vnmoTlpZTot5HoioLlpY/lvaLmiJDnu5/kuIDnmoTop4bop4nor63oqIDjgIInLFxuICAgIGNoYWxsZW5nZTon6Zq+54K55piv6K6p5aSn6YeP57q/5p2h55yf5q2j5Lqn55Sf6Lef6ZqP5Lq654mp6L+Q5Yqo55qE56m66Ze05oSf77yM6ICM5LiN5piv566A5Y2V5Y+g5Yqg5Zyo55S76Z2i5LiK44CC5Yi25L2c5pe25qC55o2u5Lq654mp55qE5aWU6LeR5pa55ZCR44CB6YCf5bqm5LiO6Lqr5L2T5Yqo5L2c5LiN5pat6LCD5pW057q/5p2h55qE55Sf5oiQ6Lev5b6E44CB6YCP6KeG5LiO5YmN5ZCO5bGC57qn77yM6K6p57q/5p2h6ZqP552A5Lq654mp5Yqg6YCf44CB6L2s5ZCR5ZKM56m/5qKt77yM5Zyo5LqM57u055S76Z2i5Lit5bu656uL57q15rex77yM5ZCM5pe26L+b5LiA5q2l5pS+5aSn6YCf5bqm5LiO6IO96YeP54iG5Y+R55qE5oSf5Y+X44CCJ1xuICB9LFxuICAn5bCP57Gz56eR5oqA5Ye6546wJzoge1xuICAgIG92ZXJ2aWV3OifkuLogMjAyMiDlsI/nsbPnp5HmioDlh7rooYzlraPliLbkvZzlk4HniYzlrqPkvKDniYfjgILlvbHniYfku6XlhYXmu6Hmg7PosaHlipvnmoTop4bop4nml4XnqIvkuLLogZTmiYvmnLrjgIHogLPmnLrnrYnmmbrog73kuqflk4HvvIzpgJrov4fkuI3mlq3lkJHliY3mjqLntKLnmoTplZzlpLTor63oqIDvvIzlkYjnjrDnp5HmioDkuqflk4Hono3lhaXnlJ/mtLvkuI7lh7rooYzlnLrmma/nmoTlk4HniYzkvZPpqozjgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJhyAxMHPigJQyNnMg55qEIE1vdGlvbiBEZXNpZ27vvIzljIXmi6zlnLrmma/nqb/moq3jgIHplZzlpLTmjqjov5vjgIHkuoznu7TlhYPntKDliqjnlLvlj4rkuI3lkIzmrrXokL3kuYvpl7TnmoTovazlnLrooZTmjqXvvJvlhbbkuK3ogLPmnLrlvLnlh7rnmoTkuInnu7TliqjnlLvnlLHlm6LpmJ/kuInnu7TkvJnkvLTlrozmiJDvvIzmiJHotJ/otKPlsIblhbbmlbTlkIjov5vmlbTkvZPplZzlpLTov5DliqjjgIInLFxuICAgIGNoYWxsZW5nZTon6Zq+54K55Zyo5LqO5aaC5L2V6K6p5Y6f5Zyw5a6M5oiQ55qE5LiJ57u06ICz5py65Yqo55S75Yy56YWN5oyB57ut5ZCR5YmN5o6o6L+b55qE6ZWc5aS044CC5Yi25L2c5pe26YeN5paw6LCD5pW05LiJ57u057Sg5p2Q5Zyo55S76Z2i5Lit55qE5L2N56e744CB57yp5pS+44CB6YCP6KeG5LiO5Ye6546w5pe25py677yM5bm257uT5ZCI5YmN5ZCO5Zy65pmv55qE56m66Ze05YWz57O777yM6K6p6ICz5py65YOP55yf5a6e5a2Y5Zyo5LqO6ZWc5aS056m/6LaK55qE56m66Ze05Lit77yM5L2/IDNEIOS6p+WTgei/kOWKqOS4jiAyRCBDYW1lcmEgTW92ZW1lbnQg6Ieq54S26KGU5o6l77yM6ICM5LiN5piv5Lik5Liq54us56uL5Yqo55S755qE566A5Y2V5ou85o6l44CCJ1xuICB9LFxuICAn5aSp54yr5pe26KOF5ZGoJzoge1xuICAgIG92ZXJ2aWV3OifkuLrlpKnnjKvlsI/pu5Hnm5Lml7boo4XlkajliLbkvZzns7vliJfop4bop4nljIXoo4XvvIzpgJrov4fml7boo4XlvbHlg4/jgIHlk4HniYzop4bop4nkuI7liqjmgIHlm77lvaLnmoTnu5PlkIjvvIzlsIbkuI3lkIznp4DlnLrkuI7ml7blsJrlhoXlrrnkuLLogZTmiJDlrozmlbTnmoTliqjmgIHop4bop4nkvZPpqozjgIInLFxuICAgIHJvbGU6J+i0n+i0o+mhueebrueahOWuouaIt+ayn+mAmuOAgeWKqOaAgeWIhumVnOOAgei9rOWcuuaehOaAneWPiiBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB5Z+65LqO5bey5pyJ6KeG6KeJ6K6+6K6h6KeE5YiS5q+P5Liq55S76Z2i55qE6L+Q5Yqo5pa55byP44CB6ZWc5aS06KGU5o6l5LiO6L2s5Zy66YC76L6R77yM5bm25a6M5oiQ5pyA57uI5Yqo5oCB5Yi25L2c44CCJ1xuICB9LFxuICAn5reY5a6d6YCg54mp6IqCJzoge1xuICAgIG92ZXJ2aWV3OifkuLogMjAyMiDmt5jlrp3pgKDnianoioLjgIzmmI7ml6XkuYvlooPjgI3liLbkvZzmtLvliqjlrqPkvKDop4bpopHjgILmnKzlsYrpgKDnianoioLlm7Tnu5XlubTovbvliJvpgKDlipvkuI7liJvmlrDliJvkuJrlsZXlvIDvvIzpgJrov4fjgIzliJvmlrDliJvkuJrlpKfkvJogw5cg5Yib6YCg5Yqb5aSn5bGV44CN6ZuG5Lit5ZGI546w5paw5Lqn5ZOB44CB5paw5oOz5rOV5LiO5bm06L275Yib5Lia6ICF55qE5Yib6YCg5Yqb44CCJyxcbiAgICByb2xlOifotJ/otKPlvbHniYfliY0gMTJzIOeahCBNb3Rpb24gRGVzaWdu44CC576O5pyv6KeG6KeJ55Sx5Zui6Zif5LyZ5Ly05a6M5oiQ77yM5oiR5Li76KaB5Z+65LqO5bey5pyJ6K6+6K6h5a6M5oiQ55S76Z2i5YWD57Sg44CB5paH5a2X5Y+K5Zu+5b2i55qE5Yqo5oCB5ryU57uO77yM5bm25aSE55CG5YmN5ZCO6ZWc5aS05LmL6Ze055qE6IqC5aWP5LiO6KGU5o6l44CCJyxcbiAgICBjaGFsbGVuZ2U6J+i/meS4qumhueebruabtOS+p+mHjeS6juWvueaXouWumuinhuinieeahOWKqOaAgei9rOWMluOAguWcqOS/neaMgeWOn+aciee+juacr+mjjuagvOeahOWfuuehgOS4iu+8jOmAmui/h+WFg+e0oOWHuueOsOmhuuW6j+OAgei/kOWKqOiKguWlj+S4jumVnOWktOihlOaOpe+8jOiuqemdmeaAgeiuvuiuoeiHqueEtui9rOWMluaIkOWFt+aciemAoOeJqeiKguW5tOi9u+OAgea0u+i3g+awlOi0qOeahOWKqOaAgeinhuinieOAgidcbiAgfSxcbiAgJ+aWuei+vuW+i+W4iOS6i+WKoeaJgCc6IHtcbiAgICBvdmVydmlldzon5Li65pa56L6+5b6L5biI5LqL5Yqh5omA5Yi25L2c5ZOB54mM5a6j5Lyg54mH44CC5b2x54mH5Zu057uV5YW25LiT5Lia6IO95Yqb44CB5Y2P5L2c55CG5b+15LiO5Zu96ZmF5YyW5rOV5b6L5pyN5Yqh5bGV5byA77yM5Lul566A5rSB44CB55CG5oCn55qE6KeG6KeJ6K+t6KiA5ZGI546w5ZOB54mM5L+h5oGv44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTlrqLmiLfmsp/pgJrlj4rmlbTmlK/lvbHniYfnmoTliqjmgIHliIbplZzliJvmhI/vvIzlubblrozmiJAgMjJz4oCUMzZz44CBNDVz4oCUMTozMCDnmoQgTW90aW9uIERlc2lnbuOAgue+juacr+inhuinieeUseWboumYn+S8meS8tOi0n+i0o++8jOaIkeS4u+imgeagueaNruaWh+ahiOaehOaAneavj+S4quauteiQveKAnOWmguS9leihqOi+vuOAgeWmguS9lei/kOWKqOOAgeWmguS9leihlOaOpeKAne+8jOWGjemFjeWQiOe+juacr+aWueahiOWujOaIkOWKqOaAgeiQveWcsOOAgicsXG4gICAgY2hhbGxlbmdlOifpmr7ngrnlnKjkuo7mlofmoYjmnKzouqvlgY/kuJPkuJrlkozmir3osaHvvIzogIzlvbHniYfmnIDnu4jpnIDopoHnlKjpnZ7luLjnroDmtIHnmoTlm77lvaLor63oqIDmiormpoLlv7XorrLmuIXmpZrjgILlm6DmraTliY3mnJ/liIbplZzpnIDopoHlhYjmi4bop6Pmr4/mrrXmlofmoYjnmoTmoLjlv4PlkKvkuYnvvIzlho3mgJ3ogIPpgILlkIjnmoTliqjmgIHlhbPns7vkuI7op4bop4npmpDllrvvvIzlubbkuI7nvo7mnK/phY3lkIjovazljJbkuLrlhbfkvZPnlLvpnaLvvIzorqnlpI3mnYLkv6Hmga/lnKjkv53mjIHnroDmtIHnmoTlkIzml7bmm7TlrrnmmJPooqvnkIbop6PjgIInXG4gIH0sXG4gICfkurrmsJHml6XmiqXigJTigJTmiJHnmoTlrp3ol4/lrrbkuaEnOiB7XG4gICAgb3ZlcnZpZXc6J+S6uuawkeaXpeaKpeaWsOWqkuS9k+aOqOWHuuOAiuaIkeeahOWuneiXj+WutuS5oeOAi+S4u+mimOetluWIku+8jOmCgOivt+adpeiHquWFqOWbveWQhOWcsOeahCAzNCDkvY3mj5LnlLvluIjvvIzkuLrlhajlm70gMzQg5Liq55yB57qn6KGM5pS/5Yy65YiG5Yir5Yib5L2c5pWw5a2X5o+S55S777yM5Lul5LiN5ZCM55qE6Im65pyv6aOO5qC85o+P57uY5ZCE5Zyw55qE6Ieq54S26aOO5YWJ44CB5Lq65paH5pmv6KeC5LiO5a625Lmh6K6w5b+G44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTlrqLmiLfmsp/pgJrjgIHmj5LnlLvliqjmgIHmi4bop6PkuI7ovazlnLrmorPnkIbvvIzljIXmi6zmoLnmja7liqjmgIHpnIDmsYLkuI7nvo7mnK/msp/pgJrmr4/luYXmj5LnlLvnmoTliIblsYLmlrnlvI/vvIzlubblrozmiJDlvbHniYcgMOKAlDM5c+OAgTE6MzbigJQyOjA2IOeahCBNb3Rpb24gRGVzaWdu44CCJyxcbiAgICBjaGFsbGVuZ2U6JzM0IOS9jeaPkueUu+W4iOeahOeUu+mdouWcqOmjjuagvOOAgeaehOWbvuWSjOWFg+e0oOS4iuW3ruW8guW+iOWkp++8jOmavueCueaYr+WmguS9leWcqOS/neeVmeWOn+S9nOeJueeCueeahOWQjOaXtu+8jOiuqeS4jeWQjOaPkueUu+iHqueEtuWcsOi/nuaOpei1t+adpeOAguWJjeacn+mcgOimgemAkOW8oOWIhuaekOeUu+mdou+8jOS7juS6uueJqeOAgeW7uuetkeOAgeWxseawtOOAgeS6keWxguetieWFg+e0oOS4reWvu+aJvuWPr+S7peaJv+aOpeS4i+S4gOmVnOeahOinhuinieWFs+ezu++8jOWGjemAmui/h+mBruaMoeOAgeW9ouaAgeWRvOW6lOOAgei/kOWKqOaWueWQkeS4jiBNYXRjaCBDdXQg6K6+6K6h6L2s5Zy677yM5bm25o+Q5YmN5Y+N5o6o5q+P5bmF5o+S55S76ZyA6KaB5aaC5L2V5YiG5bGC77yM6K6p6Leo6aOO5qC85YiH5o2i5L6d54S25L+d5oyB5rWB55WF44CCJ1xuICB9LFxuICAn5Lq65rCR5pel5oql4oCU4oCU5Lit5Zu95q2j5b2T5r2uJzoge1xuICAgIG92ZXJ2aWV3OifkurrmsJHml6XmiqXmlrDlqpLkvZPmjqjlh7rjgIzkuK3lm73mraPlvZPmva7jgI3kuLvpopjkvKDmkq3orqHliJLvvIzogZrnhKbkuK3lm73mlofljJbjgIHnp5HmioDkuI7mtojotLnpoobln5/vvIzpgJrov4fkvKDnu5/kuI7lvZPku6PjgIHmlofljJbkuI7np5HmioDnmoTnu5PlkIjvvIzlsZXnjrDkuI3mlq3lj5HlsZXnmoTkuK3lm73liJvpgKDlipvkuI7mlrDml7bku6Ppo47mva7jgIInLFxuICAgIHJvbGU6J+i0n+i0o+W9seeJhyAw4oCUMzBzIOaMgee7reaOqOmVnOS7peWPiiAyOjI34oCUMjo1NCDmjIHnu63mi4nplZznmoQgTW90aW9uIERlc2lnbuOAguWfuuS6juWboumYn+W3suacieeahOe+juacr+e0oOadkO+8jOmHjeaWsOe7hOe7h+S4jeWQjOeUu+mdoueahOWJjeWQjuWxgue6p+S4juepuumXtOWFs+ezu++8jOWujOaIkOmVv+mVnOWktOeahOe6tea3sei/kOWKqOS4juWcuuaZr+epv+aireOAgicsXG4gICAgY2hhbGxlbmdlOifpmr7ngrnlnKjkuo7lpoLkvZXorqnlpKfph4/ni6znq4vnmoTkuoznu7Tnvo7mnK/ntKDmnZDlvaLmiJDotrPlpJ/mt7HnmoTnqbrpl7TnurXmt7HjgILliLbkvZzml7bpnIDopoHph43mlrDmi4bliIbliY3jgIHkuK3jgIHlkI7mma/vvIzpgJrov4fkuI3lkIzlsYLnuqfnmoTkvY3np7vpgJ/luqbjgIHnvKnmlL7mr5TkvovkuI7op4blt67lhbPns7vlu7rnq4vnqbrpl7TvvIzlho3phY3lkIjmjIHnu63mjqjov5vkuI7mi4nov5znmoQgQ2FtZXJhIE1vdmVtZW5077yM6K6p6ZWc5aS05YOP55yf5q2j56m/6LaK5LiN5ZCM5Zy65pmv5LiA5qC36Ieq54S26L+e57ut44CCJ1xuICB9LFxuICAn5Lq65rCR5pel5oql4oCU4oCU5oqX5oiY6IOc5Yip5YWr5Y2B5ZGo5bm05ryr55S7Jzoge1xuICAgIG92ZXJ2aWV3OifkurrmsJHml6XmiqXnpL7mjqjlh7rjgIzmsZ/lsbHlpoLnlLvjgI3ns7vliJfnn63op4bpopHnrKzkuIDmnJ/jgIrkuI3lsYjjgIvvvIzku6UgMTAg5L2Z5Lu25oqX5oiY576O5pyv57uP5YW45L2c5ZOB5Li65Z+656GA77yM6YCa6L+H5Yqo5oCB5b2x5YOP6YeN5paw5Liy6IGU5Y6G5Y+y55S75L2c77yM57qq5b+15Lit5Zu95Lq65rCR5oqX5pel5oiY5LqJ5pqo5LiW55WM5Y+N5rOV6KW/5pav5oiY5LqJ6IOc5YipIDgwIOWRqOW5tOOAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5a6i5oi35rKf6YCa44CB5pW054mH5Liy5Zy65LiO6L2s5Zy65p6E5oCd77yM5Lul5Y+K5YmN5pyf57Sg5p2Q5ouG5YiG6KeE5YiS44CC5qC55o2u5q+P5bmF5Y6f55S755qE5YaF5a656K6+6K6h55S76Z2i5LmL6Ze055qE6L+e5o6l5pa55byP77yM5bm25LiO576O5pyv5LyZ5Ly05rKf6YCa6ZyA6KaB5ouG5YiG44CB6KGl5YWo55qE5Zu+5bGC77yM5Li65ZCO57ut5Yqo5oCB5Yi25L2c5bu656uL57Sg5p2Q5Z+656GA44CCJyxcbiAgICBjaGFsbGVuZ2U6J+mhueebruaLv+WIsOeahOWOn+Wni+e0oOadkOWkp+WkmuaYr+aJq+aPj+WQjueahOWNleW8oCBKUEfvvIzmsqHmnInnjrDmiJDlm77lsYLvvIzogIzkuJTkuI3lkIznlLvkvZzlnKjmnoTlm77jgIHnrJTop6blkozlhoXlrrnkuIrlt67lvILlvojlpKfjgILpnIDopoHpgJDluYXliIbmnpDnlLvpnaLvvIzku47kurrnianjgIHlsbHmsLTjgIHng5/pm77jgIHnrJTop6bnrYnlhYPntKDkuK3lr7vmib7liY3lkI7plZzlpLTnmoTov57mjqXlhbPns7vvvIzlho3lj43mjqjpnIDopoHlpoLkvZXmi4blsYLkuI7ooaXlhajvvIzorqnljp/mnKzni6znq4vnmoTljoblj7LnlLvkvZzog73lpJ/oh6rnhLbov4fmuKHvvIzlvaLmiJDov57nu63nmoTliqjmgIHlj5nkuovjgIInXG4gIH0sXG4gICfkurrmsJHml6XmiqXigJTigJTlhajpnaLlsI/lurfns7vliJcnOiB7XG4gICAgb3ZlcnZpZXc6J+S6uuawkeaXpeaKpeaWsOWqkuS9k+WbtOe7leKAnOWFqOmdouWwj+W6t+KAneaOqOWHuuezu+WIl+WGheWuue+8jOmAmui/h+S4jeWQjOS6uueJqeOAgeeUn+a0u+WcuuaZr+S4juekvuS8muWPkeWxleWIh+mdou+8jOiusOW9leiEsei0q+aUu+WdmuOAgeawkeeUn+aUueWWhOS4juWfjuS5oeWPkeWxleeahOWPmOWMlu+8jOWRiOeOsOWFqOmdouWwj+W6t+iDjOaZr+S4i+aZrumAmuS6uueahOecn+WunueUn+a0u+S4juaXtuS7o+WPmOWMluOAgicsXG4gICAgcm9sZTon6LSf6LSj57O75YiX6aG555uu5Lit6YOo5YiG56+H56ug55qEIE1vdGlvbiBEZXNpZ27jgILln7rkuo7lm6LpmJ/lt7LmnInnmoTnvo7mnK/op4bop4nlrozmiJDliqjmgIHmvJTnu47jgIHlm77lvaLliqjnlLvkuI7plZzlpLToioLlpY/orr7orqHvvIzlhbfkvZPotJ/otKPniYfmrrXop4HkuIvmlrnop4bpopHjgIInXG4gIH1cbn0pXG5cbk9iamVjdC5hc3NpZ24ocHJvamVjdERldGFpbHMsIHtcbiAgJ+azoeazoeeOm+eJuVjkuJzmnKznlLXovabngbXmgoknOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuazoeazoeeOm+eJuSDDlyDkuJzpo47mnKznlLDngbXmgonogZTlkI3pobnnm67liLbkvZzlrqPkvKDop4bpopHjgILlm7Tnu5Xmva7njqkgSVAg5LiO5bm06L275YyW5rG96L2m5ZOB54mM55qE6Leo55WM57uT5ZCI77yM6YCa6L+H6KeS6Imy44CB5Lqn5ZOB5LiO5Zy65pmv5LmL6Ze055qE5LqS5Yqo77yM5bu656uL5pu06L275p2+44CB5pyJ6Laj55qE6IGU5ZCN6KeG6KeJ5L2T6aqM44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTliY3mnJ/liJvmhI/mnoTmgJ3jgIHmlYXkuovniYjliJvmhI/mnoTmgJ3lj4rliqjmgIHliIbplZzliarovpHjgILku47ogZTlkI3kuLvpopjlh7rlj5HmorPnkIblvbHniYfnmoTmlbTkvZPliJvmhI/kuI7lj5nkuovoioLlpY/vvIzlsIbmg7Pms5XovazljJbkuLrlhbfkvZPliIbplZzvvIzlubbpgJrov4fliqjmgIHpooTmvJTmj5DliY3pqozor4HplZzlpLTjgIHovazlnLrkuI7mlbTniYfoioLlpY/jgIInXG4gIH0sXG4gICfmr5Tkuprov6rmtbfosbkwNkdUIHgg5p6B5ZOB6aOe6L2mJzoge1xuICAgIG92ZXJ2aWV3OifkuLrmr5Tkuprov6rmtbfosbkwNkdUIMOX44CK5p6B5ZOB6aOe6L2m77ya6ZuG57uT44CL6IGU5ZCN6aG555uu5Yi25L2c5a6j5Lyg6KeG6aKR44CC6aG555uu5bCG546w5a6e5Lit55qE5rW36LG5MDZHVOmptuWFpeiZmuaLn+ernumAn+S4lueVjO+8jOmAmui/h+mrmOmAn+mpvumptuOAgeepuumXtOWPmOWMluS4jua4uOaIj+WMluinhuinie+8jOWRiOeOsOi9pui+hueahOaAp+iDveS4juW5tOi9u+OAgea9rui2o+WxnuaAp+OAgicsXG4gICAgcm9sZTon6LSf6LSj6aG555uu55qE5YmN5pyf5Yib5oSP5p6E5oCd77yM5Zu057uV4oCc546w5a6e5rG96L2mIMOXIOiZmuaLn+ernumAn+S4lueVjOKAneeahOiBlOWQjeamguW/te+8jOaehOaAnei9pui+hui/m+WFpea4uOaIj+S4lueVjOWQjueahOWcuuaZr+WPmOWMluOAgempvumptuWKqOS9nOS4jumVnOWktOivreiogO+8jOW5tuWwhuaVtOS9k+WIm+aEj+i9rOWMluS4uuWPr+S+m+WQjue7reWItuS9nOaJp+ihjOeahOWujOaVtOWIhumVnOOAgidcbiAgfSxcbiAgJ+axn+iLj+WNq+inhuiKguebruOAkOS4reWNjuS5pumZouOAkSc6IHtcbiAgICBvdmVydmlldzon5Li65rGf6IuP5Y2r6KeG5paH5YyW6IqC55uu44CK5Lit5Y2O5Lmm6Zmi44CL5Yi25L2c6IqC55uu54mH5aS044CC5b2x54mH5Lul4oCc5Lmm6Zmi4oCd5Li66LW354K577yM6YCa6L+H5Lmm5Y2344CB5bGx5rC044CB5Lq65paH5LiO56eR5oqA562J5oSP6LGh55qE5LiN5pat5ryU5Y+Y77yM5bCG5Lyg57uf5paH5YyW5LiO5b2T5Luj5paH5piO6L+e5o6l6LW35p2l77yM5ZGI546w5Lit5Y2O5paH5YyW5Zyo5pe25Luj5Y+R5bGV5Lit55qE5bu257ut5LiO5Lyg5om/44CCJyxcbiAgICByb2xlOifotJ/otKPpobnnm67nmoTliY3mnJ/liJvmhI/mnoTmgJ3lj4rmlYXkuovniYjliJvmhI/mnoTmgJ3jgILlm7Tnu5XigJzmlofljJbkvKDmib/kuI7ml7bku6PmvJTov5vigJ3morPnkIbniYflpLTnmoTmlbTkvZPop4bop4nohInnu5zvvIzmnoTmgJ3ku47kvKDnu5/kuabpmaLjgIHkurrmlofmhI/osaHliLDnjrDku6Pnp5HmioDnqbrpl7TnmoTlnLrmma/lj5jljJbkuI7plZzlpLTmjqjov5vvvIzlubblsIbmpoLlv7XovazljJbkuLrlrozmlbTliIbplZzvvIzkuLrlkI7nu63kuInnu7TliqjmgIHliLbkvZzmj5DkvpvliJvmhI/ln7rnoYDjgIInXG4gIH0sXG4gICflronouI9QZzfnp5HmioDot5HpnosnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uuWuiei4jyBQRzcg57yT6ZyH56eR5oqA5bmz5Y+w5p6E5oCd5Lqn5ZOB5a6j5Lyg54mH77yM5Lul6LeR5q2l6L+H56iL5Lit4oCc6JC95Zyw5Yay5Ye74oCU57yT6ZyH5ZC45pS24oCU6IO96YeP5Zue5by54oCd5Li65qC45b+D77yM5bCG5oq96LGh55qE5Lit5bqV56eR5oqA6L2s5YyW5Li65pu055u06KeC44CB5pu05YW35Yay5Ye75Yqb55qE6KeG6KeJ5L2T6aqM44CCJyxcbiAgICByb2xlOifotJ/otKPniYflrZDkuInnu7Tpg6jliIbnmoTliY3mnJ/liJvmhI/mnoTmgJ3lj4rmlYXkuovniYjliJvmhI/mnoTmgJ3jgILlm7Tnu5UgUEc3IOeahOe8k+mch+enkeaKgOeJueeCue+8jOaehOaAneW9seeJh+aVtOS9k+inhuinieamguW/teOAgeS6p+WTgeenkeaKgOeahOihqOeOsOaWueW8j+OAgeWcuuaZr+WPmOWMluS4jumVnOWktOivreiogO+8jOS4uuWQjue7reS4iee7tOWKqOaAgeWItuS9nOaPkOS+m+aJp+ihjOWfuuehgOOAgidcbiAgfSxcbiAgJ0hVQVdFSSDpuL/okpnnlJ/mgIEnOiB7XG4gICAgb3ZlcnZpZXc6J+S4uiBIVUFXRUkg6bi/6JKZ5pm66YCJ55Sf5oCB5Yi25L2c5ZOB54mM5a6j5Lyg6KeG6aKR44CC5b2x54mH5Zu057uV5pm65oWn5a625bqt5LiO5aSa6K6+5aSH5Y2P5ZCM77yM6YCa6L+H5LiN5ZCM55Sf5rS75Zy65pmv5LmL6Ze055qE6L+e5o6l77yM5ZGI546w5pm66IO96K6+5aSH6J6N5YWl5pel5bi455Sf5rS75ZCO5omA5p6E5bu655qE5YWo5Zy65pmv5pm65oWn5L2T6aqM44CCJyxcbiAgICByb2xlOifotJ/otKPmlbTmlK/lvbHniYfnmoTliY3mnJ/liJvmhI/vvIzku47igJzpuL/okpnnlJ/mgIHigJ3nmoTmoLjlv4PmpoLlv7Xlh7rlj5HvvIzmorPnkIbkuI3lkIzmmbrog73kuqflk4HkuI7nlJ/mtLvlnLrmma/kuYvpl7TnmoTlhbPns7vvvIzmnoTmgJ3mlbTniYfnmoTop4bop4nlj5nkuovjgIHlnLrmma/ovazmjaLkuI7plZzlpLTor63oqIDvvIzlubblsIbliJvmhI/ovazljJbkuLrlrozmlbTmlYXkuovmnb/vvIzkuLrlkI7nu63kuInnu7TliqjmgIHliLbkvZzmj5DkvpvmiafooYzln7rnoYDjgIInXG4gIH1cbn0pXG5cbmNvbnN0IGNvdmVyRmlsZXMgPSBgMDJiM2ZkNDQ3MWM3MjVjNDE3MDZjMTM3YzU4MDEwMDQucG5nIDA1YmE1NDIxOWY4NWY4MzUxN2FmNDYzNTQwNmJiODdhLnBuZyAwYjI0ZGEwZjU3NzI1MThmMDlkODRhMmU5NzVjM2VhNy5wbmcgMGI1YWFmMmNiOWI1MDgzNzRhYjk1YTkzNWVkZmE1ZDQucG5nIDBlZjM0MzBkMDA4MWNjN2M0MDBjMzJmMjcyNzliMmFkLnBuZyAxNmRiNWQyMDU0NjU0MDRjMWRlOTdhYjNiNzAyOGY5NS5wbmcgMWJlODA3ZmVhNzZlYTY2NWNmYjc4YTAxMjBkNTk1Y2QucG5nIDFmOTQ5ZWE3MTdiYTJiNTM3ZGVjNjFkMzhlY2IwMzVjLnBuZyAyN2IyZjJmZTZiMmYwM2IzYTc4ZjI3ZDUwZjVmZTgyNS5wbmcgMmFjNjM5ZTMxNGI5YWU4MTVlNjczZjEyZjQ0NjE5MGEucG5nIDJmN2E2ZDMxNmUxOWM5YzM2NzUzZTg1NjExOTdjNTRiLnBuZyA0N2I5MzlhMjQwMDhlMDMyNTEwODZhYzUwODg2ODhmOC5wbmcgNTZlMmIxNWIyY2VkNzM4OWJmNzU2NGE5MDUzYWQzYWUucG5nIDU5NTI5MzM2NWYxNzZiZTAzNTVhZDkyODkxMDM2MTg4LnBuZyA1OTk2OGY3Njk2YzRiMGE0YjFjZGQ1YjMyNTBjNWM3MC5wbmcgNWQwOWY5MWVmZWIxOTg4ZmRjM2U5M2Y3NDhmOGJjZmMucG5nIDVkODAxYWMxMGFlYTVhMDkxMWM5NjY2MTMyMjhmMmVlLnBuZyA1ZTRiM2IzMzRkYzM4MWI5YTg2NTA3NWUwZWU4ZGExYy5wbmcgNjE3YzM0YjJkZDEwZGYxNWIzOTI5YTY4OWZiYzY0MmMucG5nIDYzMTU5ODIxY2FmYTE2NGNhOGNhNWUyMjgzN2ZlNTllLnBuZyA2MzI3NDgxNjE0MmQxOTI3MDhjMWVmZmYxZWIwMTE0OS5wbmcgNjRiNDVmN2Y0YTFhN2RmZjFlMWNmMzdhNTdjMWVmYjQucG5nIDY2NGUzNGI4MDBjZTljNzA4Y2RjM2I4ODhhOTRiMTdkLnBuZyA2ZTFmZmI5ZTkxNzk5YjhiNzU1MWRkNTI1MGQxMWYwZC5wbmcgNzM5NWEzYmI4MzI2NzI5NGU2YTk5NDg2OTMwZDIzN2EucG5nIDc1ODUwNTZjNDBmMjQ1Nzc3NDZjYjZjZDBkNTY5ZTdmLnBuZyA3ZWU5ZWJkN2M0YTcwNTliMDQ2ZWM2MWIwZTg0Zjk2My5wbmcgODFjNzUxNTQ1YTY5ODE5MDM3OGM3OWQ0ZDA0ZDRjZjkucG5nIDg1ODhjNzlmNjczZjk3MGE2ZjY2ZDhmMzAwNGMxZTVjLnBuZyA4NmQ2NzNhZDA0Njk3ZjdkMmMyMzU5ZmRhOTM2YzIyOC5wbmcgOGE0NDRjOTBmYjEzZjUxNjk2ZmMwNzhjYzkzNzJjZGQucG5nIDkyZDAwZjIzZTI1MjdmMGEwMTE5MWFlYmQxNmIwNDg1LnBuZyA5MzFmNDMzMmNmNzhjOTZiODNiNWYwZDE5Y2EzOGYzNy5wbmcgOTZjOTM5ODk2NmU0ZjlmODEyNTlmZGY5Yzc3OTFiMzQucG5nIDlhYmViNGFkNGZhMDNkNGE1MzQ2MGI0MGM0Y2U5OWFiLnBuZyA5YzRmMzIyM2YwNGY4OThmMzk2NjBhNjJlODEwOTVlZi5wbmcgYTM4OGIxMjI0OWZhNWExMzdkYjk0M2ViZWYwMzMzZGEucG5nIGE4NjY2NTY1OTNlNDgyZmM1ZDRlNjFjMjdjMzAzYjMzLnBuZyBhYWQyMGY1ZjRhMjM1ZTM2NDdmZTBjY2QyZGNhZjJkOC5wbmcgYWY3MTZmYTBmMjU0M2MyNjkxNzQ5ODc0MDQxMGQ1ZjEucG5nIGI0YTk5ZTZjZTJiMjFhNDA4NWY1ZjgyNzMyYjdjYjU5LnBuZyBjOTQxYzFhM2UxYjI3NGJlY2U3OGZkYTdhNTJkZTVkYi5wbmcgY2Q3MTUwMTJjNGMyNTdkMzkyMDEzOGFjZjBlZjdkMTcucG5nIGRkNzg4OTI3NGNmZWUzZTI1ZDNiYWY2OGRjMzY2Y2MxLnBuZyBkZTczMjRkYzJhMThiY2JiMDk4MjY5MGRmYzdjMzA0Mi5wbmcgZTkzOGYyNTYwNzI1YjFkMmE1NWZhZTBhZjRjZjkxN2YucG5nIGViOTQxYWQ3OTBhNzYyZTJkYmE2MWNiMDI0NTc0ZDk3LnBuZyBmYzllNjhjMDI2OTE5ODhkZTQxYTEzYzRhNzkzMmUzZC5wbmcgZmZmYWNhMjAyZDhmZjBmYTM0YmQxMDgyMDNmZTM3YTcucG5nYC5zcGxpdCgnICcpXG5cbmZ1bmN0aW9uIENpcmN1bGFyR2FsbGVyeSh7YmVuZD00LGJvcmRlclJhZGl1cz0uMDUsc2Nyb2xsU3BlZWQ9My45LHNjcm9sbEVhc2U9LjA3fSl7XG4gIGNvbnN0IGNvbnRhaW5lciA9IHVzZVJlZihudWxsKSwgY2FyZHMgPSB1c2VSZWYoW10pXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGVsPWNvbnRhaW5lci5jdXJyZW50XG4gICAgaWYoIWVsKSByZXR1cm5cbiAgICBjb25zdCBzY3JvbGw9e2N1cnJlbnQ6MCx0YXJnZXQ6MH0sIHBvaW50ZXI9e2Rvd246ZmFsc2Usc3RhcnQ6MCxwb3NpdGlvbjowfSwgbWV0cmljcz17d2lkdGg6MCxjYXJkOjAsc3BhY2U6MCx0b3RhbDowfVxuICAgIGxldCByYWY9MCwgbGFzdD1wZXJmb3JtYW5jZS5ub3coKSwgaG92ZXJpbmc9ZmFsc2VcbiAgICBjb25zdCByZXNpemU9KCk9PnttZXRyaWNzLndpZHRoPWVsLmNsaWVudFdpZHRoO21ldHJpY3MuY2FyZD1NYXRoLm1heCg5MixNYXRoLm1pbigxNDIsbWV0cmljcy53aWR0aCouMTE1KSk7bWV0cmljcy5zcGFjZT1tZXRyaWNzLmNhcmQrMTg7bWV0cmljcy50b3RhbD1tZXRyaWNzLnNwYWNlKmNvdmVyRmlsZXMubGVuZ3RofVxuICAgIGNvbnN0IHdoZWVsPWU9PntlLnByZXZlbnREZWZhdWx0KCk7c2Nyb2xsLnRhcmdldCs9TWF0aC5zaWduKGUuZGVsdGFZfHxlLmRlbHRhWCkqc2Nyb2xsU3BlZWQqNDJ9XG4gICAgY29uc3QgZG93bj1lPT57cG9pbnRlci5kb3duPXRydWU7cG9pbnRlci5zdGFydD1lLmNsaWVudFg7cG9pbnRlci5wb3NpdGlvbj1zY3JvbGwudGFyZ2V0O2VsLnNldFBvaW50ZXJDYXB0dXJlPy4oZS5wb2ludGVySWQpfVxuICAgIGNvbnN0IG1vdmU9ZT0+e2lmKHBvaW50ZXIuZG93bilzY3JvbGwudGFyZ2V0PXBvaW50ZXIucG9zaXRpb24rKHBvaW50ZXIuc3RhcnQtZS5jbGllbnRYKSpzY3JvbGxTcGVlZCouNzV9XG4gICAgY29uc3QgdXA9KCk9Pntwb2ludGVyLmRvd249ZmFsc2U7c2Nyb2xsLnRhcmdldD1NYXRoLnJvdW5kKHNjcm9sbC50YXJnZXQvbWV0cmljcy5zcGFjZSkqbWV0cmljcy5zcGFjZX1cbiAgICBjb25zdCB0aWNrPW5vdz0+e1xuICAgICAgY29uc3QgZHQ9TWF0aC5taW4oMzIsbm93LWxhc3QpO2xhc3Q9bm93XG4gICAgICBpZighcG9pbnRlci5kb3duJiYhaG92ZXJpbmcpc2Nyb2xsLnRhcmdldCs9c2Nyb2xsU3BlZWQqLjAzNSpkdFxuICAgICAgc2Nyb2xsLmN1cnJlbnQrPShzY3JvbGwudGFyZ2V0LXNjcm9sbC5jdXJyZW50KSpzY3JvbGxFYXNlXG4gICAgICBjb25zdCBoYWxmPW1ldHJpY3Mud2lkdGgvMlxuICAgICAgY2FyZHMuY3VycmVudC5mb3JFYWNoKChjYXJkLGkpPT57XG4gICAgICAgIGlmKCFjYXJkKXJldHVyblxuICAgICAgICBsZXQgeD1pKm1ldHJpY3Muc3BhY2Utc2Nyb2xsLmN1cnJlbnRcbiAgICAgICAgeD0oKHgrbWV0cmljcy50b3RhbC8yKSVtZXRyaWNzLnRvdGFsK21ldHJpY3MudG90YWwpJW1ldHJpY3MudG90YWwtbWV0cmljcy50b3RhbC8yXG4gICAgICAgIGNvbnN0IG49TWF0aC5tYXgoLTEuNCxNYXRoLm1pbigxLjQseC9NYXRoLm1heCgxLGhhbGYpKSlcbiAgICAgICAgY29uc3QgeT1NYXRoLmFicyhuKm4pKmJlbmQqMjBcbiAgICAgICAgY29uc3Qgcm90YXRlPS1uKmJlbmQqNS41XG4gICAgICAgIGNvbnN0IHNjYWxlPU1hdGgubWF4KC43MiwxLU1hdGguYWJzKG4pKi4xNilcbiAgICAgICAgY2FyZC5zdHlsZS53aWR0aD1gJHttZXRyaWNzLmNhcmR9cHhgXG4gICAgICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtPWB0cmFuc2xhdGUzZChjYWxjKC01MCUgKyAke3h9cHgpLGNhbGMoLTUwJSArICR7eX1weCksMCkgcm90YXRlWigke3JvdGF0ZX1kZWcpIHNjYWxlKCR7c2NhbGV9KWBcbiAgICAgICAgY2FyZC5zdHlsZS5vcGFjaXR5PVN0cmluZyhNYXRoLm1heCgwLDEtTWF0aC5tYXgoMCxNYXRoLmFicyhuKS0uODIpKjIuNCkpXG4gICAgICAgIGNhcmQuc3R5bGUuekluZGV4PVN0cmluZygxMDAtTWF0aC5yb3VuZChNYXRoLmFicyhuKSoyMCkpXG4gICAgICB9KVxuICAgICAgcmFmPXJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICAgIH1cbiAgICByZXNpemUoKTthZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLHJlc2l6ZSk7ZWwuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLHdoZWVsLHtwYXNzaXZlOmZhbHNlfSk7ZWwuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLGRvd24pO2VsLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJyxtb3ZlKTtlbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLHVwKTtlbC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJyx1cCk7ZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsKCk9PmhvdmVyaW5nPXRydWUpO2VsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCgpPT57aG92ZXJpbmc9ZmFsc2U7dXAoKX0pO3JhZj1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcbiAgICByZXR1cm4oKT0+e2NhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7cmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJyxyZXNpemUpO2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJyx3aGVlbCk7ZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLGRvd24pO2VsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJtb3ZlJyxtb3ZlKTtlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLHVwKTtlbC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJyx1cCl9XG4gIH0sW2JlbmQsc2Nyb2xsU3BlZWQsc2Nyb2xsRWFzZV0pXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImNpcmN1bGFyLWdhbGxlcnlcIiByZWY9e2NvbnRhaW5lcn0gc3R5bGU9e3snLS1yYWRpdXMnOmAke2JvcmRlclJhZGl1cyoxMDB9JWB9fT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbGxlcnktc3RhZ2VcIj57Y292ZXJGaWxlcy5tYXAoKGZpbGUsaSk9PjxmaWd1cmUgY2xhc3NOYW1lPXtgY3JvcC0ke2klN31gfSByZWY9e25vZGU9PmNhcmRzLmN1cnJlbnRbaV09bm9kZX0ga2V5PXtmaWxlfT48aW1nIHNyYz17YCR7QX13b3JrLWNvdmVycy8ke2ZpbGV9YH0gYWx0PXtg5L2c5ZOB5bCB6Z2iICR7aSsxfWB9Lz48L2ZpZ3VyZT4pfTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FsbGVyeS1jYXB0aW9uXCI+PGI+UFJPSkVDVCBDT1ZFUlM8L2I+PHNwYW4+NDkgU0VMRUNURUQgRlJBTUVTIMK3IEFVVE8gU0NST0xMPC9zcGFuPjwvZGl2PlxuICA8L2Rpdj5cbn1cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgbGlua3MgPSBbWyd0b3AnLCdBYm91dCBNZSddLFsnc2hvd3JlZWwnLCdTSE9XUkVFTCddLFsnd29ya3MnLCdTRUxFQ1RFRCBXT1JLUyddLFsnY2F2YWxyeScsJ0NBVkFMUlkgTEFCJ10sWydhYm91dCcsJ1Jlc3VtZSddXVxuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9XCJuYXYtd3JhcFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LW1ldGFcIj48Yj5BLkdVPC9iPjxiPk1PVElPTiBERVNJR05FUjwvYj48Yj5QRVJTT05BTCBQT1JURk9MSU8gV0VCU0lURTwvYj48L2Rpdj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdi10b2dnbGVcIiBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKCFvcGVuKX0+SU5ERVggPGk+e29wZW4gPyAnw5cnIDogJysnfTwvaT48L2J1dHRvbj5cbiAgICA8bmF2IGNsYXNzTmFtZT17b3BlbiA/ICdvcGVuJyA6ICcnfT57bGlua3MubWFwKChbaWQsdF0pPT48YSBrZXk9e2lkfSBocmVmPXtgIyR7aWR9YH0gb25DbGljaz17KCk9PnNldE9wZW4oZmFsc2UpfT57dH08L2E+KX08L25hdj5cbiAgPC9oZWFkZXI+XG59XG5cbmZ1bmN0aW9uIEFycm93SWNvbih7ZGlyZWN0aW9uPSd1cCcsIGNsYXNzTmFtZT0nJ30pIHtcbiAgcmV0dXJuIDxzdmcgY2xhc3NOYW1lPXtgdmVjdG9yLWFycm93IHZlY3Rvci1hcnJvdy0ke2RpcmVjdGlvbn0gJHtjbGFzc05hbWV9YC50cmltKCl9IHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxuICAgIDxwYXRoIGQ9XCJNNSAxOUwxOSA1TTggNWgxMXYxMVwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlV2lkdGg9XCIyLjRcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIvPlxuICA8L3N2Zz5cbn1cblxuZnVuY3Rpb24gSGVybygpIHtcbiAgY29uc3QgaGVybyA9IHVzZVJlZihudWxsKSwgdmlkZW8gPSB1c2VSZWYobnVsbClcbiAgY29uc3QgdGFyZ2V0VGltZSA9IHVzZVJlZigwKSwgY3VycmVudFRpbWUgPSB1c2VSZWYoMCksIHBvaW50ZXJBY3RpdmUgPSB1c2VSZWYoZmFsc2UpLCByYWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRyYWNrUG9pbnRlciA9IGUgPT4ge1xuICAgICAgaWYoIWhlcm8uY3VycmVudCB8fCAhdmlkZW8uY3VycmVudCB8fCAhTnVtYmVyLmlzRmluaXRlKHZpZGVvLmN1cnJlbnQuZHVyYXRpb24pKSByZXR1cm5cbiAgICAgIGNvbnN0IHJlY3QgPSBoZXJvLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IGR4ID0gKGUuY2xpZW50WCAtIChyZWN0LmxlZnQgKyByZWN0LndpZHRoIC8gMikpIC8gKHJlY3Qud2lkdGggLyAyKVxuICAgICAgY29uc3QgZHkgPSAoZS5jbGllbnRZIC0gKHJlY3QudG9wICsgcmVjdC5oZWlnaHQgLyAyKSkgLyAocmVjdC5oZWlnaHQgLyAyKVxuICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSlcbiAgICAgIGxldCBhbmdsZSA9IE1hdGguYXRhbjIoLWR5LCBkeClcbiAgICAgIGlmKGFuZ2xlIDwgMCkgYW5nbGUgKz0gTWF0aC5QSSAqIDJcbiAgICAgIHRhcmdldFRpbWUuY3VycmVudCA9IGRpc3RhbmNlIDwgLjA4ID8gMCA6IE1hdGgubWluKHZpZGVvLmN1cnJlbnQuZHVyYXRpb24gLSAuMTIsIDIgKyBhbmdsZSAvIChNYXRoLlBJICogMikgKiA4KVxuICAgIH1cbiAgICBjb25zdCBlbnRlciA9ICgpID0+IHsgcG9pbnRlckFjdGl2ZS5jdXJyZW50ID0gdHJ1ZTsgY3VycmVudFRpbWUuY3VycmVudCA9IHZpZGVvLmN1cnJlbnQ/LmN1cnJlbnRUaW1lIHx8IDA7IHZpZGVvLmN1cnJlbnQ/LnBhdXNlKCkgfVxuICAgIGNvbnN0IGxlYXZlID0gKCkgPT4geyBwb2ludGVyQWN0aXZlLmN1cnJlbnQgPSBmYWxzZTsgdmlkZW8uY3VycmVudD8ucGF1c2UoKSB9XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIGlmKHBvaW50ZXJBY3RpdmUuY3VycmVudCAmJiB2aWRlby5jdXJyZW50Py5yZWFkeVN0YXRlID49IDIpe1xuICAgICAgICBjdXJyZW50VGltZS5jdXJyZW50ICs9ICh0YXJnZXRUaW1lLmN1cnJlbnQgLSBjdXJyZW50VGltZS5jdXJyZW50KSAqIC4xM1xuICAgICAgICBpZihNYXRoLmFicyh2aWRlby5jdXJyZW50LmN1cnJlbnRUaW1lIC0gY3VycmVudFRpbWUuY3VycmVudCkgPiAuMDE4KSB2aWRlby5jdXJyZW50LmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWUuY3VycmVudFxuICAgICAgfVxuICAgICAgcmFmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljaylcbiAgICB9XG4gICAgY29uc3QgZWwgPSBoZXJvLmN1cnJlbnRcbiAgICBlbD8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGVudGVyKVxuICAgIGVsPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0cmFja1BvaW50ZXIsIHtwYXNzaXZlOnRydWV9KVxuICAgIGVsPy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgbGVhdmUpXG4gICAgdGljaygpXG4gICAgcmV0dXJuICgpID0+IHsgZWw/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlbnRlcik7IGVsPy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0cmFja1BvaW50ZXIpOyBlbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGxlYXZlKTsgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmLmN1cnJlbnQpIH1cbiAgfSwgW10pXG4gIHJldHVybiA8c2VjdGlvbiBpZD1cInRvcFwiIGNsYXNzTmFtZT1cImhlcm8tc2Nyb2xsXCIgcmVmPXtoZXJvfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tc3RpY2t5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdmlkZW9cIj48dmlkZW8gcmVmPXt2aWRlb30gc3JjPXtBKydoZXJvLm1wNCd9IG11dGVkIHBsYXlzSW5saW5lIHByZWxvYWQ9XCJhdXRvXCIvPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNoYWRlXCIvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWdyaWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXRpdGxlXCI+XG4gICAgICAgICAgPGgxPjxzcGFuPk1PVElPTjwvc3Bhbj48c3Bhbj5ERVNJR05FUjwvc3Bhbj48L2gxPlxuICAgICAgICAgIDxhIGhyZWY9XCIjd29ya3NcIj7otbDov5vmiJHnmoTliJvkvZzkuJbnlYwgPGI+PEFycm93SWNvbiBkaXJlY3Rpb249XCJ1cFwiLz48L2I+PC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1wcm9maWxlXCI+PGgyPuWNq+S4sOmRqzwvaDI+PGI+5Yqo5oCB6K6+6K6h5biIIC8g6KeG6aKR6K6+6K6h5biIPC9iPjxwPjflubTllYbkuJrpobnnm67orr7orqHnu4/pqow8YnIvPuS6jOe7tOWKqOaAgeiuvuiuoSAvIOWKqOaAgeWIhumVnCAvIOWTgeeJjOWGheWuuSAvIOWQjuacn+WItuS9nCAvIOWIm+aEj+aehOaAnTwvcD48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1tb25vZ3JhbVwiPkEuR1U8YnIvPlBFUlNPTkFMPGJyLz5QT1JURk9MSU88L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXNtaWxlXCIgYXJpYS1sYWJlbD1cIueskeiEuOagh+W/l1wiPjxzcGFuPjxpLz48aS8+PGIvPjwvc3Bhbj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG59XG5cbmZ1bmN0aW9uIFNlY3Rpb25UaXRsZSh7aW5kZXgsIGVuLCBjbn0pIHsgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi10aXRsZVwiPjxzcGFuPntpbmRleH08L3NwYW4+PGRpdj48aDI+e2VufSA8QXJyb3dJY29uIGRpcmVjdGlvbj1cImRvd25cIi8+PC9oMj48cD57Y259PC9wPjwvZGl2PjwvZGl2PiB9XG5cbmZ1bmN0aW9uIFNob3dyZWVsKCl7XG4gIGNvbnN0IHY9dXNlUmVmKG51bGwpXG4gIHJldHVybiA8c2VjdGlvbiBpZD1cInNob3dyZWVsXCIgY2xhc3NOYW1lPVwic2VjdGlvbiByZWVsXCI+PFNlY3Rpb25UaXRsZSBpbmRleD1cIjAxXCIgZW49XCJTSE9XUkVFTFwiIGNuPVwi5L2c5ZOB5Ymq6L6RXCIvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvd3JlZWwtc2luZ2xlXCI+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInJlZWwtZnJhbWVcIiBhcmlhLWxhYmVsPVwi5pKt5pS+5oiW5pqC5YGcIFNIT1dSRUVMXCIgb25DbGljaz17KCk9PntpZih2LmN1cnJlbnQucGF1c2VkKXYuY3VycmVudC5wbGF5KCk7ZWxzZSB2LmN1cnJlbnQucGF1c2UoKX19PlxuICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwic2hvd3JlZWwtbWFpbi12aWRlb1wiIHJlZj17dn0gc3JjPVwiLi/llYbkuJrpobnnm64vU0hPV1JFRUwv5Liq5Lq65L2c5ZOB6ZuG5Ymq6L6RMDkyNy5tcDRcIiBwb3N0ZXI9e0ErJ3Nob3dyZWVsLTNzMTIuanBnJ30gcGxheXNJbmxpbmUgcHJlbG9hZD1cIm1ldGFkYXRhXCIvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbn1cblxuZnVuY3Rpb24gV29ya3MoKXtcbiAgY29uc3QgW3NlbGVjdGVkLHNldFNlbGVjdGVkXT11c2VTdGF0ZShudWxsKVxuICBjb25zdCBbZXhwYW5kZWRGcmFtZSxzZXRFeHBhbmRlZEZyYW1lXT11c2VTdGF0ZShudWxsKVxuICB1c2VFZmZlY3QoKCk9Pntkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93PXNlbGVjdGVkPydoaWRkZW4nOicnO3JldHVybigpPT57ZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdz0nJ319LFtzZWxlY3RlZF0pXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnN0IGNsb3NlPWU9PntpZihlLmtleT09PSdFc2NhcGUnKXNldEV4cGFuZGVkRnJhbWUobnVsbCl9XG4gICAgYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsY2xvc2UpXG4gICAgcmV0dXJuKCk9PnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLGNsb3NlKVxuICB9LFtdKVxuICBjb25zdCBncm91cD1zZWxlY3RlZD9ncm91cHMuZmluZChnPT5nLml0ZW1zLmluY2x1ZGVzKHNlbGVjdGVkKSl8fGdyb3Vwc1swXTpncm91cHNbMF1cbiAgY29uc3Qgc2VsZWN0ZWRJbmRleD1zZWxlY3RlZD9ncm91cC5pdGVtcy5maW5kSW5kZXgoaXRlbT0+aXRlbT09PXNlbGVjdGVkKTotMVxuICBjb25zdCBuYXJyYXRpdmU9cHJvamVjdE5hcnJhdGl2ZXNbZ3JvdXAuaWRdXG4gIGNvbnN0IGRldGFpbD1zZWxlY3RlZD9wcm9qZWN0RGV0YWlsc1tzZWxlY3RlZFswXV06bnVsbFxuICByZXR1cm4gPHNlY3Rpb24gaWQ9XCJ3b3Jrc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gd29ya3NcIj48U2VjdGlvblRpdGxlIGluZGV4PVwiMDJcIiBlbj1cIlNFTEVDVEVEIFdPUktTXCIgY249XCLllYbkuJrpobnnm65cIi8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLXNlY3Rpb25zXCI+e2dyb3Vwcy5tYXAoKHNlY3Rpb24sc2VjdGlvbkluZGV4KT0+PHNlY3Rpb24gY2xhc3NOYW1lPVwid29yay1ncm91cFwiIGtleT17c2VjdGlvbi5pZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstaGVhZFwiPjxkaXY+PHNtYWxsPjB7c2VjdGlvbkluZGV4KzF9PC9zbWFsbD48aDM+e3NlY3Rpb24udGl0bGV9PC9oMz48L2Rpdj48cD57c2VjdGlvbi5pdGVtcy5sZW5ndGh9IFBST0pFQ1RTIC8ge3NlY3Rpb24uaWQ9PT0ndHJhaW5pbmcnPyfoh6rliqjlvqrnjq/mkq3mlL4nOifngrnlh7vljaHniYfmn6XnnIvor6bmg4UnfTwvcD48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1ncmlkXCIgc3R5bGU9e3snLS1hY2NlbnQnOnNlY3Rpb24uY29sb3J9fT57c2VjdGlvbi5pdGVtcy5tYXAoKGl0LGkpPT57XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ9PD48c3BhbiBjbGFzc05hbWU9XCJwcm9qZWN0LW5vXCI+e1N0cmluZyhpKzEpLnBhZFN0YXJ0KDIsJzAnKX08L3NwYW4+PGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWNvdmVyXCI+e3NlY3Rpb24uaWQ9PT0ndHdvRCc/PGltZyBzcmM9e2Ake0F9JHtpdFs0XX1gfSBhbHQ9XCJcIi8+Ojx2aWRlbyBzcmM9e2AuLyR7aXRbM119YH0gcG9zdGVyPXtgJHtBfSR7aXRbNF19YH0gbXV0ZWQgYXV0b1BsYXkgbG9vcCBwbGF5c0lubGluZSBwcmVsb2FkPVwiYXV0b1wiIG9uQ2FuUGxheT17ZT0+ZS5jdXJyZW50VGFyZ2V0LnBsYXkoKS5jYXRjaCgoKT0+e30pfS8+fTwvZGl2PjxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC10eXBlXCI+e2l0WzJdfTwvZGl2PjxoND57aXRbMF19PC9oND57c2VjdGlvbi5pZCE9PSd0cmFpbmluZycmJjw+PHNtYWxsIGNsYXNzTmFtZT1cInByb2plY3QtY2xpY2staGludFwiPuivpue7humhueebruWGheWuueeCueWHu+inguecizwvc21hbGw+PGk+PEFycm93SWNvbiBkaXJlY3Rpb249XCJ1cFwiLz48L2k+PC8+fTwvPlxuICAgICAgICByZXR1cm4gc2VjdGlvbi5pZD09PSd0cmFpbmluZydcbiAgICAgICAgICA/IDxhcnRpY2xlIGNsYXNzTmFtZT17YHByb2plY3QgcGFzc2l2ZS1wcm9qZWN0ICR7aXRbMF09PT0n5Yqo6KGl5o+S5Lu26K6t57uDJz8nY29udGFpbi1wcm9qZWN0JzonJ31gfSBrZXk9e2l0WzBdfT57Y29udGVudH08L2FydGljbGU+XG4gICAgICAgICAgOiA8YnV0dG9uIGNsYXNzTmFtZT17YHByb2plY3QgJHtpdFswXS5pbmNsdWRlcygn5a6d6JeP5a625LmhJyk/J3RyZWFzdXJlLXByb2plY3QnOicnfWB9IGtleT17aXRbMF19IG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RlZChpdCl9Pntjb250ZW50fTwvYnV0dG9uPlxuICAgICAgfSl9PC9kaXY+XG4gICAgPC9zZWN0aW9uPil9PC9kaXY+XG4gICAge3NlbGVjdGVkJiY8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtcGFnZVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLW1vZGFsPVwidHJ1ZVwiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcm9qZWN0LWNsb3NlXCIgb25DbGljaz17KCk9PntzZXRFeHBhbmRlZEZyYW1lKG51bGwpO3NldFNlbGVjdGVkKG51bGwpfX0+Q0xPU0Ugw5c8L2J1dHRvbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1wYWdlLWlubmVyXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtncm91cC5pZD09PSd0d29EJ3x8Z3JvdXAuaWQ9PT0ndGhyZWVEJz8ndW5pZmllZC1wcm9qZWN0LXRpdGxlJzonJ30+PHNtYWxsPntncm91cC5lbn0gLyB7U3RyaW5nKHNlbGVjdGVkSW5kZXgrMSkucGFkU3RhcnQoMiwnMCcpfTwvc21hbGw+PGgzPntzZWxlY3RlZFswXX08L2gzPjxwPntzZWxlY3RlZFsyXX0gwrcgTU9USU9OIERFU0lHTjwvcD48L2hlYWRlcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LXN0b3J5XCI+PGFydGljbGU+PHNwYW4+MDEgLyBCQUNLR1JPVU5EPC9zcGFuPjxoND7pobnnm67og4zmma88L2g0PjxwPntkZXRhaWw/Lm92ZXJ2aWV3fHxuYXJyYXRpdmVbMF19PC9wPjwvYXJ0aWNsZT48YXJ0aWNsZT48c3Bhbj4wMiAvIE1ZIFJPTEU8L3NwYW4+PGg0PuS4quS6uuiBjOi0ozwvaDQ+PHA+e2RldGFpbD8ucm9sZXx8c2VsZWN0ZWRbMV19PC9wPjwvYXJ0aWNsZT57KGRldGFpbD8uY2hhbGxlbmdlfHwhZGV0YWlsKSYmPGFydGljbGU+PHNwYW4+MDMgLyBDSEFMTEVOR0U8L3NwYW4+PGg0PumhueebrumavueCuTwvaDQ+PHA+e2RldGFpbD8uY2hhbGxlbmdlfHwn5Zyo5pei5a6a5ZOB54mM6KGo6L6+5LiO5Lqk5LuY6IqC5aWP5Lit5a+75om+5riF5pmw55qE5Yqo5oCB6Kej5Yaz5pa55qGI77yM5bm254us56uL5o6o6L+b5YWz6ZSu55S76Z2i55qE5rWL6K+V44CB6LCD5pW05LiO6JC95Zyw44CCJ308L3A+PC9hcnRpY2xlPn08L2Rpdj5cbiAgICAgICAgeyFzZWxlY3RlZFs3XSYmPGZpZ3VyZSBjbGFzc05hbWU9XCJwcm9qZWN0LXZpZGVvXCI+PHZpZGVvIHNyYz17YC4vJHtzZWxlY3RlZFszXX1gfSBwb3N0ZXI9e2Ake0F9JHtzZWxlY3RlZFs0XX1gfSBjb250cm9scyBwbGF5c0lubGluZSBwcmVsb2FkPVwibWV0YWRhdGFcIiBhdXRvUGxheT17Z3JvdXAuaWQhPT0ndHdvRCd9IG11dGVkPXtncm91cC5pZCE9PSd0d29EJ30vPjwvZmlndXJlPn1cbiAgICAgICAge3NlbGVjdGVkWzddPzxzZWN0aW9uIGNsYXNzTmFtZT1cInNlcmllcy1vdXRwdXRcIj57c2VsZWN0ZWRbN10ubWFwKChlcGlzb2RlLGVwaXNvZGVJbmRleCk9PjxhcnRpY2xlIGNsYXNzTmFtZT1cInNlcmllcy1lcGlzb2RlXCIga2V5PXtlcGlzb2RlLnRpdGxlfT5cbiAgICAgICAgICA8aGVhZGVyPjxzbWFsbD5QQVJUIHtTdHJpbmcoZXBpc29kZUluZGV4KzEpLnBhZFN0YXJ0KDIsJzAnKX08L3NtYWxsPjxoND57ZXBpc29kZS50aXRsZX08L2g0PjwvaGVhZGVyPlxuICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwic2VyaWVzLW1haW4tdmlkZW9cIj48dmlkZW8gc3JjPXtgLi8ke2VwaXNvZGUudmlkZW99YH0gcG9zdGVyPXtgJHtBfSR7ZXBpc29kZS5wb3N0ZXJ9YH0gY29udHJvbHMgcGxheXNJbmxpbmUgcHJlbG9hZD1cIm1ldGFkYXRhXCIvPjwvZmlndXJlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyaWVzLWNsaXBzXCI+PGRpdj48c21hbGw+U0VMRUNURUQgTU9USU9OIE9VVFBVVFM8L3NtYWxsPjxoNT7liqjmgIHniYfmrrU8L2g1PjwvZGl2PjxkaXYgY2xhc3NOYW1lPVwiZ2lmLWdyaWRcIj57ZXBpc29kZS5jbGlwcy5tYXAoKGNsaXAsaSk9Pjx2aWRlbyBrZXk9e2NsaXB9IHNyYz17YC4vJHtjbGlwfWB9IGFyaWEtbGFiZWw9e2Ake2VwaXNvZGUudGl0bGV9IOWKqOaAgeeJh+autSAke2krMX1gfSBtdXRlZCBhdXRvUGxheSBsb29wIHBsYXlzSW5saW5lIHByZWxvYWQ9XCJhdXRvXCIgb25DYW5QbGF5PXtlPT5lLmN1cnJlbnRUYXJnZXQucGxheSgpLmNhdGNoKCgpPT57fSl9Lz4pfTwvZGl2PjwvZGl2PlxuICAgICAgICA8L2FydGljbGU+KX08L3NlY3Rpb24+Omdyb3VwLmlkPT09J3R3b0QnJiZzZWxlY3RlZFs1XT8ubGVuZ3RoPjAmJjxzZWN0aW9uIGNsYXNzTmFtZT1cImdpZi1vdXRwdXRcIj48ZGl2PjxzbWFsbD5TRUxFQ1RFRCBNT1RJT04gT1VUUFVUUzwvc21hbGw+PGg0PuWKqOaAgeeJh+autTwvaDQ+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJnaWYtZ3JpZFwiPntzZWxlY3RlZFs1XS5tYXAoKGNsaXAsaSk9Pjx2aWRlbyBrZXk9e2NsaXB9IHNyYz17YC4vJHtjbGlwfWB9IGFyaWEtbGFiZWw9e2Ake3NlbGVjdGVkWzBdfSDliqjmgIHniYfmrrUgJHtpKzF9YH0gbXV0ZWQgYXV0b1BsYXkgbG9vcCBwbGF5c0lubGluZSBwcmVsb2FkPVwiYXV0b1wiIG9uQ2FuUGxheT17ZT0+ZS5jdXJyZW50VGFyZ2V0LnBsYXkoKS5jYXRjaCgoKT0+e30pfS8+KX08L2Rpdj48L3NlY3Rpb24+fVxuICAgICAgICB7Z3JvdXAuaWQ9PT0ndGhyZWVEJyYmPHNlY3Rpb24gY2xhc3NOYW1lPVwic3Rvcnlib2FyZC1vdXRwdXRcIj48ZGl2IGNsYXNzTmFtZT1cInN0b3J5Ym9hcmQtaGVhZGluZ1wiPjxzbWFsbD5TVE9SWUJPQVJEIEZSQU1FUzwvc21hbGw+PGg0PuWIhumVnOWNleWbvjwvaDQ+PC9kaXY+PGRpdiBjbGFzc05hbWU9XCJzdG9yeWJvYXJkLWdyaWRcIj5cbiAgICAgICAgICB7c2VsZWN0ZWRbNV0ubWFwKChmcmFtZSxpKT0+PGJ1dHRvbiBjbGFzc05hbWU9XCJzdG9yeWJvYXJkLWZyYW1lXCIga2V5PXtmcmFtZX0gb25DbGljaz17KCk9PnNldEV4cGFuZGVkRnJhbWUoe3NyYzpmcmFtZSxpbmRleDppLHRpdGxlOnNlbGVjdGVkWzBdfSl9IGFyaWEtbGFiZWw9e2DmlL7lpKfmn6XnnIsgJHtzZWxlY3RlZFswXX0g5YiG6ZWcICR7aSsxfWB9PjxpbWcgc3JjPXtgLi8ke2ZyYW1lfWB9IGFsdD17YCR7c2VsZWN0ZWRbMF19IOWIhumVnCAke2krMX1gfS8+PHNwYW4+e1N0cmluZyhpKzEpLnBhZFN0YXJ0KDIsJzAnKX08L3NwYW4+PC9idXR0b24+KX1cbiAgICAgICAgICB7c2VsZWN0ZWRbNl0mJjxmaWd1cmUgY2xhc3NOYW1lPVwic3Rvcnlib2FyZC1tb3Rpb25cIj48dmlkZW8gc3JjPXtgLi8ke3NlbGVjdGVkWzZdfWB9IGFyaWEtbGFiZWw9e2Ake3NlbGVjdGVkWzBdfSBQT1Ag5pWF5LqL54mIYH0gbXV0ZWQgYXV0b1BsYXkgbG9vcCBwbGF5c0lubGluZSBwcmVsb2FkPVwiYXV0b1wiIG9uQ2FuUGxheT17ZT0+ZS5jdXJyZW50VGFyZ2V0LnBsYXkoKS5jYXRjaCgoKT0+e30pfS8+PHNwYW4+UE9QIFNUT1JZQk9BUkQ8L3NwYW4+PC9maWd1cmU+fVxuICAgICAgICA8L2Rpdj48L3NlY3Rpb24+fVxuICAgICAgICA8bmF2PjxidXR0b24gZGlzYWJsZWQ9e3NlbGVjdGVkSW5kZXg8PTB9IG9uQ2xpY2s9eygpPT5zZXRTZWxlY3RlZChncm91cC5pdGVtc1tzZWxlY3RlZEluZGV4LTFdKX0+PEFycm93SWNvbiBkaXJlY3Rpb249XCJsZWZ0XCIvPiBQUkVWSU9VUzwvYnV0dG9uPjxidXR0b24gZGlzYWJsZWQ9e3NlbGVjdGVkSW5kZXg+PWdyb3VwLml0ZW1zLmxlbmd0aC0xfSBvbkNsaWNrPXsoKT0+c2V0U2VsZWN0ZWQoZ3JvdXAuaXRlbXNbc2VsZWN0ZWRJbmRleCsxXSl9Pk5FWFQgPEFycm93SWNvbiBkaXJlY3Rpb249XCJyaWdodFwiLz48L2J1dHRvbj48L25hdj5cbiAgICAgIDwvZGl2PlxuICAgICAge2V4cGFuZGVkRnJhbWUmJjxkaXYgY2xhc3NOYW1lPVwiZnJhbWUtbGlnaHRib3hcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1tb2RhbD1cInRydWVcIiBhcmlhLWxhYmVsPVwi5YiG6ZWc5aSn5Zu+6aKE6KeIXCIgb25DbGljaz17KCk9PnNldEV4cGFuZGVkRnJhbWUobnVsbCl9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5zZXRFeHBhbmRlZEZyYW1lKG51bGwpfT5DTE9TRSDDlzwvYnV0dG9uPlxuICAgICAgICA8ZmlndXJlIG9uQ2xpY2s9e2U9PmUuc3RvcFByb3BhZ2F0aW9uKCl9PjxpbWcgc3JjPXtgLi8ke2V4cGFuZGVkRnJhbWUuc3JjfWB9IGFsdD17YCR7ZXhwYW5kZWRGcmFtZS50aXRsZX0g5YiG6ZWcICR7ZXhwYW5kZWRGcmFtZS5pbmRleCsxfWB9Lz48ZmlnY2FwdGlvbj57ZXhwYW5kZWRGcmFtZS50aXRsZX0gLyBGUkFNRSB7U3RyaW5nKGV4cGFuZGVkRnJhbWUuaW5kZXgrMSkucGFkU3RhcnQoMiwnMCcpfTwvZmlnY2FwdGlvbj48L2ZpZ3VyZT5cbiAgICAgIDwvZGl2Pn1cbiAgICA8L2Rpdj59XG4gIDwvc2VjdGlvbj5cbn1cblxuZnVuY3Rpb24gQ2F2YWxyeSgpeyByZXR1cm4gPHNlY3Rpb24gaWQ9XCJjYXZhbHJ5XCIgY2xhc3NOYW1lPVwic2VjdGlvbiBjYXZhbHJ5XCI+PFNlY3Rpb25UaXRsZSBpbmRleD1cIjAzXCIgZW49XCJDQVZBTFJZIExBQlwiIGNuPVwi6L2v5Lu257uD5LmgXCIvPlxuICA8ZGl2IGNsYXNzTmFtZT1cImxhYi1pbnRyb1wiPjxzcGFuPkdFTkVSQVRJVkUgVFlQRSAvIFBST0NFRFVSQUwgTU9USU9OIC8gMjAyNjwvc3Bhbj48L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9XCJsYWItZ3JpZFwiPntjYXZhbHJ5Lm1hcCgoW25hbWUsZmlsZV0saSk9PjxmaWd1cmUga2V5PXtmaWxlfT48dmlkZW8gc3JjPXtBKydjYXZhbHJ5LycrZmlsZX0gbXV0ZWQgbG9vcCBwbGF5c0lubGluZSBhdXRvUGxheSBwcmVsb2FkPVwibWV0YWRhdGFcIi8+PGZpZ2NhcHRpb24+PGI+e25hbWV9PC9iPjxzcGFuPntTdHJpbmcoaSsxKS5wYWRTdGFydCgyLCcwJyl9IC8gQ0FWQUxSWTwvc3Bhbj48L2ZpZ2NhcHRpb24+PC9maWd1cmU+KX08L2Rpdj5cbiAgPC9zZWN0aW9uPiB9XG5cbmZ1bmN0aW9uIEFib3V0KCl7cmV0dXJuIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJzZWN0aW9uIGFib3V0XCI+PFNlY3Rpb25UaXRsZSBpbmRleD1cIjA0XCIgZW49XCJXT1JLIEVYUEVSSUVOQ0VcIiBjbj1cIuS4quS6uuWxpeWOhlwiLz5cbiAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC10b3BcIj5cbiAgICA8ZmlndXJlIGNsYXNzTmFtZT1cInBvcnRyYWl0XCI+PGltZyBzcmM9e0ErJ3BvcnRyYWl0LnBuZyd9IGFsdD1cIuS4quS6uuW9ouixoVwiLz48L2ZpZ3VyZT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJpb1wiPjxzbWFsbD5BQk9VVCBNRTwvc21hbGw+PGgzPjE4MDDnur/orr7orqHlpbPlt6U8L2gzPjxwPjflubTllYbkuJrpobnnm67nu4/pqozvvIzkuJPms6jliqjmgIHorr7orqHjgIHop4bpopHorr7orqHkuI7kuoznu7TliqjnlLvjgILlj4LkuI7ku47liJvmhI/jgIHliIbplZzliLDlkI7mnJ/mlbTlkIjnmoTlrozmlbTmtYHnqIvvvIzorqnmr4/kuKrplZzlpLTooajovr7lvpfmm7Tlh4bnoa7jgII8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZhY3RzXCI+PGRpdj48c3Bhbj7lt6XkvZznu4/ljoY8L3NwYW4+PGI+5YyX5Lqs5Y2O6Z+s5paH5YyW5Lyg5aqSPC9iPjxzbWFsbCBjbGFzc05hbWU9XCJmYWN0LWRldGFpbFwiPuWKqOaAgeiuvuiuoeW4iCZuYnNwOyZuYnNwO++9nCZuYnNwOyZuYnNwOzIwMTnigJMyMDIwIC8g5a+85ryUIC8g6aG555uu57uP55CGJm5ic3A7Jm5ic3A7772cJm5ic3A7Jm5ic3A7MjAyMOKAk+iHs+S7ijwvc21hbGw+PC9kaXY+PGRpdj48c3Bhbj7mnI3liqHlk4HniYw8L3NwYW4+PGI+5b+r5omLIC8g5Lqs5LicIC8g5bCP57GzIC8gMzYxwrAgLyDnibnmraUgLyDlvq7ova/lsI/lhrAgLyDkurrmsJHml6XmiqUgLyDoib7nvo7nibkgLzwvYj48L2Rpdj48ZGl2PjxzcGFuPui9r+S7tuiDveWKmzwvc3Bhbj48Yj5BRSAvIEFJIC8gQ2F2YWxyee+8iOWtpuS5oOS4re+8iS8gUHMgLyBQcjwvYj48L2Rpdj48ZGl2PjxzcGFuPuavleS4mumZouagoTwvc3Bhbj48Yj7pg5Hlt57ovbvlt6XkuJogwrcg5pWw5aqS5LiT5LiaPC9iPjwvZGl2PjxkaXY+PHNwYW4+5omL5py6PC9zcGFuPjxhIGhyZWY9XCJ0ZWw6MTU5MzU3NTUzNTZcIj4xNTkgMzU3NSA1MzU2PC9hPjwvZGl2PjxkaXY+PHNwYW4+6YKu566xPC9zcGFuPjxhIGhyZWY9XCJtYWlsdG86MzA3MjQ5NzYxNUBxcS5jb21cIj4zMDcyNDk3NjE1QHFxLmNvbTwvYT48L2Rpdj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxmb290ZXI+PGEgY2xhc3NOYW1lPVwiYmFja1wiIGhyZWY9XCIjdG9wXCI+QkFDSyBUTyBUT1AgPEFycm93SWNvbiBkaXJlY3Rpb249XCJ0b3BcIi8+PC9hPjwvZm9vdGVyPlxuICA8L3NlY3Rpb24+fVxuXG5mdW5jdGlvbiB1c2VTY3JvbGxSZXZlYWwoKXtcbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcylyZXR1cm5cbiAgICBjb25zdCB0ZXh0U2VsZWN0b3I9Jy5zZWN0aW9uLXRpdGxlIGgyLC5zZWN0aW9uLXRpdGxlIHAsLndvcmstaGVhZCBoMywud29yay1oZWFkIHAsLnByb2plY3QgaDQsLnByb2plY3QtdHlwZSwubGFiLWdyaWQgZmlnY2FwdGlvbiwucHJvamVjdC1wYWdlIGhlYWRlciwucHJvamVjdC1zdG9yeSBhcnRpY2xlLC5zZXJpZXMtY2xpcHM+ZGl2OmZpcnN0LWNoaWxkLC5naWYtb3V0cHV0PmRpdjpmaXJzdC1jaGlsZCdcbiAgICBjb25zdCBtZWRpYVNlbGVjdG9yPScuc2hvd3JlZWwtc2luZ2xlLC5wcm9qZWN0LC5sYWItZ3JpZCBmaWd1cmUsLnByb2plY3QtdmlkZW8sLnNlcmllcy1tYWluLXZpZGVvLC5naWYtZ3JpZCB2aWRlbywuc3Rvcnlib2FyZC1mcmFtZSwuc3Rvcnlib2FyZC1tb3Rpb24nXG4gICAgY29uc3QgcmVzdW1lU2VsZWN0b3I9Jy5hYm91dCAuYmlvIGgzLC5hYm91dCAuYmlvPnAsLmFib3V0IC5mYWN0cyBkaXYnXG4gICAgY29uc3QgYWxsU2VsZWN0b3I9YCR7dGV4dFNlbGVjdG9yfSwke21lZGlhU2VsZWN0b3J9LCR7cmVzdW1lU2VsZWN0b3J9YFxuICAgIGNvbnN0IHBsYXk9KGVsKT0+e1xuICAgICAgaWYoZWwuZGF0YXNldC5yZXZlYWxQbGF5ZWQpcmV0dXJuXG4gICAgICBlbC5kYXRhc2V0LnJldmVhbFBsYXllZD0ndHJ1ZSdcbiAgICAgIGNvbnN0IG1lZGlhPWVsLm1hdGNoZXMobWVkaWFTZWxlY3RvcilcbiAgICAgIGNvbnN0IGRlbGF5PU51bWJlcihlbC5kYXRhc2V0LnJldmVhbERlbGF5fHwwKVxuICAgICAgZWwuYW5pbWF0ZShtZWRpYVxuICAgICAgICA/W3tvcGFjaXR5OjAsdHJhbnNmb3JtOid0cmFuc2xhdGVZKDQ2cHgpIHNjYWxlKC45NyknLGZpbHRlcjonYmx1cig2cHgpJ30se29wYWNpdHk6MSx0cmFuc2Zvcm06J3RyYW5zbGF0ZVkoMCkgc2NhbGUoMSknLGZpbHRlcjonYmx1cigwKSd9XVxuICAgICAgICA6W3tvcGFjaXR5OjAsdHJhbnNmb3JtOid0cmFuc2xhdGVZKDM4cHgpJyxmaWx0ZXI6J2JsdXIoNHB4KSd9LHtvcGFjaXR5OjEsdHJhbnNmb3JtOid0cmFuc2xhdGVZKDApJyxmaWx0ZXI6J2JsdXIoMCknfV0sXG4gICAgICAgIHtkdXJhdGlvbjoxMDUwLGRlbGF5LGVhc2luZzonY3ViaWMtYmV6aWVyKC4xNiwxLC4zLDEpJyxmaWxsOidub25lJ30pXG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfVxuICAgIGNvbnN0IG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT5lbnRyaWVzLmZvckVhY2goZW50cnk9PntcbiAgICAgIGlmKCFlbnRyeS5pc0ludGVyc2VjdGluZylyZXR1cm5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKT0+cGxheShlbnRyeS50YXJnZXQpKVxuICAgIH0pLHt0aHJlc2hvbGQ6LjA2LHJvb3RNYXJnaW46JzBweCAwcHggLTQlIDBweCd9KVxuICAgIGNvbnN0IHJlZ2lzdGVyPShyb290PWRvY3VtZW50KT0+e1xuICAgICAgcm9vdC5xdWVyeVNlbGVjdG9yQWxsPy4oYWxsU2VsZWN0b3IpLmZvckVhY2goKGVsLGluZGV4KT0+e1xuICAgICAgICBpZihlbC5kYXRhc2V0LnJldmVhbFJlYWR5KXJldHVyblxuICAgICAgICBlbC5kYXRhc2V0LnJldmVhbFJlYWR5PSd0cnVlJ1xuICAgICAgICBlbC5kYXRhc2V0LnJldmVhbERlbGF5PVN0cmluZyhNYXRoLm1pbigoaW5kZXglNikqNzAsMzUwKSlcbiAgICAgICAgY29uc3QgcmVjdD1lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICBpZihyZWN0LmJvdHRvbT4wJiZyZWN0LnRvcDx3aW5kb3cuaW5uZXJIZWlnaHQpcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT5wbGF5KGVsKSlcbiAgICAgICAgZWxzZSBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICAgICAgfSlcbiAgICB9XG4gICAgcmVnaXN0ZXIoKVxuICAgIGNvbnN0IG11dGF0aW9ucz1uZXcgTXV0YXRpb25PYnNlcnZlcihyZWNvcmRzPT5yZWNvcmRzLmZvckVhY2gocmVjb3JkPT5yZWNvcmQuYWRkZWROb2Rlcy5mb3JFYWNoKG5vZGU9PntcbiAgICAgIGlmKG5vZGUubm9kZVR5cGU9PT0xKXtcbiAgICAgICAgaWYobm9kZS5tYXRjaGVzPy4oYWxsU2VsZWN0b3IpKXJlZ2lzdGVyKG5vZGUucGFyZW50RWxlbWVudHx8ZG9jdW1lbnQpXG4gICAgICAgIGVsc2UgcmVnaXN0ZXIobm9kZSlcbiAgICAgIH1cbiAgICB9KSkpXG4gICAgbXV0YXRpb25zLm9ic2VydmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSx7Y2hpbGRMaXN0OnRydWUsc3VidHJlZTp0cnVlfSlcbiAgICByZXR1cm4oKT0+e29ic2VydmVyLmRpc2Nvbm5lY3QoKTttdXRhdGlvbnMuZGlzY29ubmVjdCgpfVxuICB9LFtdKVxufVxuXG5mdW5jdGlvbiBBcHAoKXt1c2VTY3JvbGxSZXZlYWwoKTtyZXR1cm4gPD48bWFpbj48SGVhZGVyLz48SGVyby8+PFNob3dyZWVsLz48V29ya3MvPjxDYXZhbHJ5Lz48QWJvdXQvPjwvbWFpbj48Lz59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXG4iXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU07RUFBRUEsU0FBUztFQUFFQyxPQUFPO0VBQUVDLE1BQU07RUFBRUM7QUFBUyxDQUFDLEdBQUdDLEtBQUs7QUFFdEQsTUFBTUMsQ0FBQyxHQUFHLGtCQUFrQjtBQUU1QixNQUFNQyxvQkFBb0IsR0FBRztFQUMzQixnQkFBZ0IsRUFBQyxzQkFBc0I7RUFDdkMsZUFBZSxFQUFDLG9DQUFvQztFQUNwRCxPQUFPLEVBQUMsbUJBQW1CO0VBQzNCLGtCQUFrQixFQUFDLHVCQUF1QjtFQUMxQyxZQUFZLEVBQUMsa0JBQWtCO0VBQy9CLGFBQWEsRUFBQyxtQkFBbUI7RUFDakMsYUFBYSxFQUFDLG1CQUFtQjtFQUNqQyxhQUFhLEVBQUMsbUJBQW1CO0VBQ2pDLE9BQU8sRUFBQyxhQUFhO0VBQ3JCLE1BQU0sRUFBQztBQUNULENBQUM7QUFFRCxNQUFNQyxZQUFZLEdBQUdBLENBQUNDLEVBQUUsRUFBQ0MsS0FBSyxFQUFD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
