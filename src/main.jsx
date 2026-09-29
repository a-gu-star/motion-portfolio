import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const A = '/assets/'

const compressedMainVideos = {
  'VOLLGAS X 凯斯哈林':'VOLLGAS X 凯斯哈林_1.mp4',
  'VOLLGAS X 苏炳添':'VOLLGAS X 苏炳添.mp4?v=20260927-audio',
  '快手-内宣':'快手磁力引擎2025CNY.mp4',
  '人民日报——抗战胜利八十周年漫画':'人民日报——抗战胜利八十周年漫画1.mp4',
  '人民日报——全面小康':'人民日报——全面小康_1.mp4',
  '人民日报——全面小康2':'人民日报——全面小康2_1.mp4',
  '人民日报——全面小康3':'人民日报——全面小康3_1.mp4',
  '人民日报——中国正当潮':'人民日报——中国正当潮_1.mp4',
  '天猫时装周':'天猫时装周_1.mp4',
  '站酷共创':'站酷共创_1.mp4'
}

const projectGroup = (id,title,en,tag,names) => ({id,title,en,items:names.map((file,i)=>[
  file.replace(/\.mp4$/i,''),
  id==='threeD'?'前期策划、分镜构思与动画预剪的详细内容待补充。':id==='twoD'?'二维动态制作区间与个人负责内容待补充。':'个人动态练习与视觉实验。',
  tag,
  `商业项目/${id==='training'?'业余训练':title}/${file}`,
  `project-posters/${id==='twoD'?'2d':id==='threeD'?'3d':'lab'}-${String(i+1).padStart(2,'0')}.jpg`
])})

const twoDProject = (name, clipCount, index, clipBase=name, clipWord='片段', displayName=name) => {
  const root = `商业项目/二维制作项目/${name}`
  return [
    displayName,
    '二维动态制作区间与个人负责内容待补充。',
    '2D MOTION',
    `${root}/${compressedMainVideos[name]||`${name}.mp4`}`,
    `project-posters/2d-order-${String(index).padStart(2,'0')}.jpg`,
    Array.from({length:clipCount},(_,i)=>`${root}/${clipBase}${clipWord}${i+1}.mp4`)
  ]
}

const twoDItems = [
  ['361°品牌宣传日',4],
  ['2024快手磁力大会',2],
  ['站酷共创',3],
  ['京东X草莓音乐节',3],
  ['京东外卖X猪猪侠',5],
  ['小红书乐队',5,undefined,undefined,'小红书【听现场不鸽倡议】'],
  ['特步X-Sofa Foam',2],
  ['艾美特品牌焕新发布会',4],
  ['微软小冰X特步',3],
  ['BOTTONS Air 产品宣传视频',2],
  ['UINPUS LOGO演绎',2],
  ['京东-真新话大冒险',2,undefined,undefined,'京东-真心话大冒险'],
  ['快手校招片头',4,'快手校招片头','片头'],
  ['快手-内宣',2,undefined,undefined,'快手磁力引擎2025CNY'],
  ['快手年终内宣总结',2],
  ['VOLLGAS X 凯斯哈林',2],
  ['VOLLGAS X 苏炳添',2],
  ['小米科技出现',2],
  ['天猫时装周',4],
  ['淘宝造物节',4],
  ['方达律师事务所',5],
  ['人民日报——我的宝藏家乡',2],
  ['人民日报——中国正当潮',2],
  ['人民日报——抗战胜利八十周年漫画',2]
].map(([name,count,clipBase,clipWord,displayName],i)=>twoDProject(name,count,i+1,clipBase,clipWord,displayName))

const xiaokangSeries = [
  {title:'人民日报——全面小康',video:'商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康_1.mp4',poster:'project-posters/2d-order-25.jpg',clips:['商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康片段1.mp4','商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康片段2.mp4','商业项目/二维制作项目/人民日报——全面小康/人民日报——全面小康片段3.mp4']},
  {title:'人民日报——全面小康2',video:'商业项目/二维制作项目/人民日报——全面小康2/人民日报——全面小康2_1.mp4',poster:'project-posters/2d-order-26.jpg',clips:['商业项目/二维制作项目/人民日报——全面小康2/人民日报——全面小康片段1.mp4']},
  {title:'人民日报——全面小康3',video:'商业项目/二维制作项目/人民日报——全面小康3/人民日报——全面小康3_1.mp4',poster:'project-posters/2d-order-27.jpg',clips:['商业项目/二维制作项目/人民日报——全面小康3/人民日报——全面小康3片段1.mp4']}
]
const xiaokangItem = twoDProject('人民日报——全面小康',3,twoDItems.length+1)
xiaokangItem[0] = '人民日报——全面小康系列'
xiaokangItem[7] = xiaokangSeries
twoDItems.push(xiaokangItem)

const storyboardFrames = (folder,count) => Array.from({length:count},(_,i)=>`商业项目/三维前期策划项目/${folder}/${i+1}.png`)

const groups = [
  {id:'twoD',title:'二维制作项目',en:'2D PRODUCTION',items:twoDItems},
  {id:'threeD',title:'三维前期策划项目',en:'3D PRE-PRODUCTION',items:[
    ['泡泡玛特X东本电车灵悉','前期策划、分镜构思与动画预剪的详细内容待补充。','3D PLANNING','商业项目/三维前期策划项目/1.泡泡玛特X东本电车灵悉/1.泡泡玛特X东本电车灵悉.mp4','project-posters/3d-01.jpg',storyboardFrames('1.泡泡玛特X东本电车灵悉',11),'商业项目/三维前期策划项目/1.泡泡玛特X东本电车灵悉/POP故事版 .mp4'],
    ['比亚迪海豹06GT x 极品飞车','前期策划与分镜构思的详细内容待补充。','3D PLANNING','商业项目/三维前期策划项目/2.比亚迪海豹GT06 X极品飞车/2.比亚迪海豹GT06X极品飞车.mp4','project-posters/3d-02.jpg',storyboardFrames('2.比亚迪海豹GT06 X极品飞车',10)],
    ['江苏卫视节目【中华书院】','前期策划与分镜构思的详细内容待补充。','3D PLANNING','商业项目/三维前期策划项目/3.江苏卫视节目【中华书院】/3.江苏卫视节目【中华书院】.mp4','project-posters/3d-03.jpg',storyboardFrames('3.江苏卫视节目【中华书院】',10)],
    ['安踏Pg7科技跑鞋','前期策划与分镜构思的详细内容待补充。','3D PLANNING','商业项目/三维前期策划项目/4.安踏Pg7科技跑鞋/4.安踏Pg7科技跑鞋.mp4','project-posters/3d-04.jpg',storyboardFrames('4.安踏Pg7科技跑鞋',11)],
    ['HUAWEI 鸿蒙生态','前期策划与分镜构思的详细内容待补充。','3D PLANNING','商业项目/三维前期策划项目/5.HUAWEI 鸿蒙生态/5.HUAWEI 鸿蒙生态.mp4','project-posters/3d-05.jpg',storyboardFrames('5.HUAWEI 鸿蒙生态',13)]
  ]},
  projectGroup('training','其它动态','OTHER MOTION','EXPERIMENT',['logo孟菲斯风格.mp4','Nike-.mp4','爱心.mp4','便利logo拼贴风.mp4','穿梭.mp4','动补插件训练.mp4','动态训练.mp4','公司作品片头宣传1.mp4','公司作品片头宣传2.mp4','疾风 .mp4','节奏练习.mp4','新年.mp4','花瓣.mp4','苹果.mp4','旋转动态训练.mp4'])
]

const cavalry = [
  ['BOOLEAN', '布尔运算.mp4'], ['MOTION TEST', '动态测试.mp4'], ['SIN MOTION', '方块sin运动.mp4'],
  ['FLOWER', '花朵.mp4'], ['FLUID', '流体.mp4'], ['COLOR TEST', '色彩测试.mp4'],
  ['IMAGE FIELD', '图片扩散.mp4'], ['GRID WAVE', '网格随方块波动.mp4'], ['TYPE BREAK', '文字散开.mp4'],
  ['TYPE ROTATE', '文字旋转 .mp4'], ['TYPE ROTATE 02', '文字旋转2.mp4'], ['RIPPLE', '圆形扩散.mp4']
]

const projectNarratives = {
  twoD: ['围绕品牌传播内容完成二维动态设计，让信息、节奏与视觉风格保持一致。','当前先展示项目成片。后续将在这里补充具体制作区间、镜头拆解和个人负责内容。'],
  threeD: ['三维项目的前期策划与视觉预演，用于明确创意方向、镜头结构和制作路径。','当前先展示项目视频。后续将在这里补充前期分镜、动画预剪、参考整理和方案推进过程。'],
  training: ['工作之外的动态练习与视觉实验，用于测试新的节奏、图形方法和软件能力。','从单一运动规律或视觉主题出发，通过短周期练习完成动态结果。']
}

const projectDetails = {
  '361°品牌宣传日': {
    overview:'与 UIDStudio 合作，为 361°品牌「减碳加速」制作概念宣传片。影片围绕品牌发布的 CQT 碳临界科技，通过微观材料、科技视觉与产品之间的转换，将抽象的材料技术转化为直观的动态表达。',
    role:'负责项目后期动态制作对接、26s 后 Motion Design 及最终成片剪辑。在既定美术与三维资产基础上，完成镜头衔接、动态图形、转场及节奏设计，并统一影片前后段的动态语言。',
    challenge:'后半段涉及微观材质、科技信息与产品展示等不同视觉尺度，难点在于避免镜头成为单纯的素材拼接。通过动势延续、形态关联与节奏控制串联不同场景，使信息最终由技术性能、产品到品牌自然收束。'
  },
  '2024快手磁力大会': {
    overview:'为 2024 快手磁力大会制作大会视觉影片。本届大会以「智能经营」为主题，整体视觉通过持续流动、延展的动态语言，传递连接、增长与智能经营的概念。',
    role:'负责影片 46s 之后的全部 Motion Design。美术伙伴完成关键视觉与风格设定，我在 AE 中重新拆解和搭建视觉效果，让原本的静态设计真正转化成可以持续运动的动态系统。',
    challenge:'最大的挑战是贯穿后半段的横向流动拖尾。为了避免曲线运动过于机械，我研究并搭建了基于 Sin 函数与 Expression 的动态控制，通过频率、振幅与相位的组合，让大量曲线在持续横移的同时保持自然、错落的流动感，也让效果从手 K 动画变成一套更稳定、可控的动态逻辑。'
  },
  '站酷共创': {
    overview:'为 2022 站酷大会制作大会宣传片。通过不断变化、融合的图形与色彩构建充满生命力的视觉世界，以持续流动的动态语言强化大会年轻、开放的视觉氛围。',
    role:'负责影片 32s—56s 的 Motion Design 及最终成片剪辑。这一段的球体部分没有完整的美术动态设定，因此除了动画制作，也参与了这部分的动态视觉探索，从运动方式到球体内部的色彩效果进行重新设计与搭建。',
    challenge:'难点是让大量球体在保持流畅运动的同时，内部色彩也始终处于自然流动的状态。通过为每个球体叠加多层渐变与动态色彩，并不断调整混合方式、运动速度和饱和度，让颜色足够丰富但不过艳，最终让球体运动与内部色彩流动形成统一的节奏。'
  },
  '京东X草莓音乐节': {
    overview:'为京东 × 草莓音乐节制作联名宣传片。项目结合音乐节年轻、躁动的现场氛围与京东的产品元素，通过强节奏的图形动画与音乐视觉，打造更年轻、更有冲击力的品牌表达。',
    role:'负责项目前期的创意与动态分镜构思制作，并负责影片 13s—26s 的 Motion Design。美术视觉由团队伙伴完成，我主要负责将静态设计转化为完整的动态镜头，并建立这一段的运动方式与转场节奏。',
    challenge:'其中比较有挑战的是镲片翻转镜头：需要在 AE 中模拟具有空间感的 3D 翻转，同时让表面的渐变与高光始终跟随椭圆的透视变化。通过拆分材质层级并重新建立动态关系，让形变、透视与材质变化保持同步，最终在二维视觉风格下实现自然的立体翻转效果。'
  },
  '京东外卖X猪猪侠': {
    overview:'为京东外卖 × 猪猪侠联名制作宣传片。项目起源于网友发现京东外卖骑手服与猪猪侠经典的红黄配色意外“撞衫”，双方顺势把网络热梗变成一次正式联名，让猪猪侠以“外卖骑手”的身份加入京东外卖。',
    role:'负责影片 13s—35s 的 Motion Design。美术视觉由团队伙伴完成，我主要负责将静态设计转化为动态镜头，包括角色与图形动画、镜头衔接以及整体节奏的把控。',
    challenge:'这个项目最大的挑战是时间。从拿到素材到完成整支影片只有 2—3 天，需要在非常紧凑的制作周期里快速消化美术、完成动画并反复调整。在保证交付速度的同时尽量不牺牲动态细节和完成度，最终按时完成了这一段的制作。'
  },
  '小红书【听现场不鸽倡议】': {
    overview:'为小红书乐队主题项目制作动态视觉影片。项目以插画师极具个人风格的视觉作品为基础，通过动画进一步放大插画本身的趣味感与音乐节奏。',
    role:'负责影片前三篇章的 Motion Design。在保留原插画风格的基础上，将人物、图形与场景进行动态拆解，并根据音乐重新建立画面的运动与切换节奏。',
    challenge:'这个项目比较特别的地方是，插画师对动态也有非常明确的个人审美。最初尝试了更加丝滑流畅的运动方式，但后来发现略带卡顿和跳跃感的节奏反而更贴合原画气质，因此主动对部分动画进行抽帧和节奏重构，让 Motion 最终成为插画风格的一部分，而不是单纯让画面“动起来”。'
  },
  '特步X-Sofa Foam': {
    overview:'为特步 × X-SOFA FOAM 跑鞋制作产品宣传片。影片结合二维与三维视觉，以拟人化的“气泡核”表现中底的柔软与回弹，并通过三维镜头展示鞋面的编织与轻盈质感；整体采用马卡龙色系，让科技表达保持年轻、轻松的产品气质。',
    role:'负责开篇 0—2s 拟人角色的挤压动画，以及 6—11s 气泡核从挤压、弹飞到穿梭空间的全部 Motion Design。其中 6—11s 没有完整美术设定，因此也参与了这一段从画面构成到运动方式的动态视觉探索。',
    challenge:'难点是如何让大量气泡既有柔软的挤压回弹感，又能在快速穿梭中建立清晰的空间层次。通过调整形变节奏、弹性曲线，以及前中后景球体的速度差、大小和运动轨迹，让“挤压—释放—弹飞—穿梭”的动作形成连续的力量传递，同时把产品“软弹”的卖点直接转化成动态感受。'
  },
  '艾美特品牌焕新发布会': {
    overview:'为艾美特品牌焕新发布会制作品牌视觉影片。围绕全新的品牌视觉体系，通过 Logo、圆形与线条等核心元素的拆解与重组，将静态的品牌识别转化为持续生长、扩散的动态视觉。',
    role:'负责影片 6s—16s 的 Motion Design，主要完成品牌图形的拆解、重组、延展以及不同视觉形态之间的动态衔接。',
    challenge:'项目制作周期非常紧张，而这一段又包含大量几何图形的连续变化与精细衔接。需要在短时间内快速建立运动逻辑，同时反复调整速度曲线、图形层级与转场节奏，在保证交付效率的同时，让简洁的品牌图形依然保持足够流畅和完整的动态质感。'
  },
  '微软小冰X特步': {
    overview:'为微软小冰 × 特步夏日油画定制系列制作宣传动画。项目通过特步、微软小冰、阿里巴巴三方协作，将不同的个性与情绪转化为自己专属的油画 T 恤，希望每个人都能以自己的方式成为独一无二的创作者。',
    role:'负责影片前 10s 的 Motion Design，以及 20s—24s 百幅艺术作品穿梭镜头的动态制作，将不同风格的视觉素材重新组织为连续的动态叙事。',
    challenge:'结尾穿梭镜头需要在短时间内融合近百幅不同风格的艺术作品。难点不仅是素材量大，更需要控制每幅作品的空间层级、出现节奏与镜头速度，让大量画面快速掠过却不显得杂乱，最终形成一条不断延伸的艺术长廊，把“每个人都有属于自己的艺术表达”推向高潮。'
  },
  'BOTTONS Air 产品宣传视频': {
    overview:'为 BUTTONS Air X 耳机新品制作产品宣传片。影片以高对比的字体、几何图形与产品三维视觉为核心，通过快速切换的动态语言，呈现耳机的设计细节与产品特性。',
    role:'负责影片前 15s 的 Motion Design。美术视觉及部分三维元素由团队伙伴完成，我主要负责将不同素材重新整合，通过版式运动、产品动画与镜头转场建立完整的动态节奏。',
    challenge:'这一段同时包含字体排版、二维图形与多组三维产品素材，视觉形式切换非常频繁。难点在于既要保持快节奏和视觉冲击力，又不能让信息变得杂乱，因此通过运动方向、构图关系与转场节奏串联不同镜头，让二维与三维之间自然接力，同时始终保持产品作为视觉中心。'
  },
  'UINPUS LOGO演绎': {
    overview:'为 UINPUS 制作品牌 Logo 动态演绎，通过液态、渐变、粒子与几何图形等不同视觉语言，对核心的“U”形符号进行多维度动态探索。',
    role:'负责整支影片的剪辑与节奏整合，以及 3s—5s、11s—12s 的 Logo Motion Design。美术视觉由团队伙伴完成，我主要负责将静态设计转化为动态，并统一不同段落之间的节奏与衔接。',
    challenge:'11s—12s 需要在极短时间内完成大量圆形的相切、嵌套与尺度变化，同时叠加多组高饱和色彩。制作时重点控制几何关系、运动节奏与色彩层级，让复杂图形快速变化的同时依然保持干净、有序，并最终自然收束回 Logo。'
  },
  '京东-真心话大冒险': {
    overview:'为京东电脑数码新品栏目「真新话大冒险」制作宣传动画。项目通过趣味挑战、开箱与产品测评等内容，以更年轻、娱乐化的方式呈现数码新品与产品体验。',
    role:'负责影片开篇 0—3s、6—7s 的 Motion Design，以及结尾定版动画。围绕已有美术完成图形、文字与场景的动态演绎，并负责不同信息之间的节奏衔接。',
    challenge:'这支片的单个动态段落都很短，但画面信息密度很高。尤其开篇需要在几秒内完成文字、图形与场景元素的连续变化，因此重点调整了元素出现的先后关系、速度曲线和节奏停顿，让画面保持“快”和“炸”的同时，关键信息依然能够被看清，并与整支影片偏综艺、游戏化的视觉气质保持一致。'
  },
  '快手校招片头': {
    overview:'为快手校园招聘制作活动片头动画。围绕年轻、开放、有趣的校园招聘氛围，将网页、社交、创作、游戏等年轻人熟悉的视觉元素融入快手品牌世界，通过一段不断穿梭的视觉旅程完成活动开场。',
    role:'负责项目的客户沟通、整体创意构思、动态分镜设计及全片 Motion Design。美术视觉由团队伙伴完成，我从前期概念开始参与，并负责将创意与分镜最终完整落地为动态影片。',
    challenge:'最大的挑战是如何把大量不同的场景与视觉元素，在短短十几秒内组织成一个完整的观看体验。因此前期就从动态逻辑出发设计分镜，通过镜头推进、空间穿梭、元素接力串联不同场景，让每次转场既有视觉惊喜，又始终保持统一的运动方向与节奏，最终自然收束到活动主题。'
  },
  '快手磁力引擎2025CNY': {
    overview:'为快手校园招聘制作活动片头动画。围绕年轻、开放、有趣的校园招聘氛围，将网页、社交、创作、游戏等年轻人熟悉的视觉元素融入快手品牌世界，通过一段不断穿梭的视觉旅程完成活动开场。',
    role:'负责项目的客户沟通、整体创意构思、动态分镜设计及全片 Motion Design。美术视觉由团队伙伴完成，我从前期概念开始参与，并负责将创意与分镜最终完整落地为动态影片。',
    challenge:'最大的挑战是如何把大量不同的场景与视觉元素，在短短十几秒内组织成一个完整的观看体验。因此前期就从动态逻辑出发设计分镜，通过镜头推进、空间穿梭、元素接力串联不同场景，让每次转场既有视觉惊喜，又始终保持统一的运动方向与节奏，最终自然收束到活动主题。'
  }
}

Object.assign(projectDetails, {
  '快手磁力引擎2025CNY': {
    overview:'为快手磁力引擎 2025 CNY 制作新春营销宣推影片。项目围绕春节期间不同的内容场景与营销玩法展开，将年味、内容、互动与品牌营销整合成更轻松、有趣的视觉表达。',
    role:'负责项目的客户沟通、整体创意构思、VO 文案、动态分镜设计及部分 Motion Design。从前期需求梳理、脚本与分镜，到后期动态落地，全程参与项目的创意推进。',
    challenge:'这次比较大的挑战反而是如何先把内容讲清楚。面对大量 CNY 营销信息，需要自己重新梳理逻辑并完成 VO 文案，再根据口播的语义和节奏反推分镜与视觉创意。对我来说也是一次从单纯考虑“画面怎么动”，转向思考内容怎么讲、画面怎么配合、整支片子怎么成立的尝试。'
  },
  '快手年终内宣总结': {
    overview:'为快手磁力引擎年度内部总结制作回顾影片。通过动态图形、业务案例与品牌内容的快速切换，将过去一年的产品能力、内容资产与阶段性成果重新整理成更年轻、更具视觉冲击力的年度回顾。',
    role:'负责影片前 12s 的 Motion Design，包括开篇视觉、空间转场以及产品能力相关内容的动态制作，在既定美术基础上完成动态演绎与镜头衔接。',
    challenge:'开篇前两个镜头需要在 AE 中用二维素材模拟三维空间与镜头运动，同时还要让表面的蓝绿色渐变随着形体持续流动。制作时重点处理了透视、层级、视差以及渐变运动之间的关系，让二维元素在没有完整三维制作的情况下依然具有空间纵深和材质流动感，并自然衔接到后面的信息展示。'
  },
  'VOLLGAS X 凯斯哈林': {
    overview:'为 VOLLGAS × Keith Haring 联名能量饮料制作宣传片。项目将 Keith Haring 极具辨识度的街头艺术语言融入产品包装，以大胆的色彩与图形碰撞，呈现 VOLLGAS「艺术 × 能量」的品牌表达。',
    role:'负责整支影片的 Motion Design 及最终剪辑。美术视觉与三维资产由团队伙伴完成，我主要负责将不同形式的素材进行动态整合，并完成全片的镜头衔接、转场与整体节奏设计。',
    challenge:'整片同时包含平面图形、产品三维与大量罐体阵列。制作时重点通过运动方向、重复节奏、构图延续与快速转场建立统一的动态语言，让 Keith Haring 本身强烈的视觉风格贯穿始终，同时在高密度画面中保持产品的视觉中心。'
  },
  'VOLLGAS X 苏炳添': {
    overview:'为 VOLLGAS × 苏炳添制作品牌宣传片。围绕苏炳添的速度与竞技精神，将运动、能量与 VOLLGAS 全力以赴的品牌理念结合，通过高速的文字与线条视觉强化不断向前的力量感。',
    role:'负责影片前 16s 的 Motion Design，主要完成文字动态、图形动画以及贯穿人物运动的线条效果，让 Typography 与苏炳添的奔跑节奏形成统一的视觉语言。',
    challenge:'难点是让大量线条真正产生跟随人物运动的空间感，而不是简单叠加在画面上。制作时根据人物的奔跑方向、速度与身体动作不断调整线条的生成路径、透视与前后层级，让线条随着人物加速、转向和穿梭，在二维画面中建立纵深，同时进一步放大速度与能量爆发的感受。'
  },
  '小米科技出现': {
    overview:'为 2022 小米科技出行季制作品牌宣传片。影片以充满想象力的视觉旅程串联手机、耳机等智能产品，通过不断向前探索的镜头语言，呈现科技产品融入生活与出行场景的品牌体验。',
    role:'负责影片 10s—26s 的 Motion Design，包括场景穿梭、镜头推进、二维元素动画及不同段落之间的转场衔接；其中耳机弹出的三维动画由团队三维伙伴完成，我负责将其整合进整体镜头运动。',
    challenge:'难点在于如何让原地完成的三维耳机动画匹配持续向前推进的镜头。制作时重新调整三维素材在画面中的位移、缩放、透视与出现时机，并结合前后场景的空间关系，让耳机像真实存在于镜头穿越的空间中，使 3D 产品运动与 2D Camera Movement 自然衔接，而不是两个独立动画的简单拼接。'
  },
  '天猫时装周': {
    overview:'为天猫小黑盒时装周制作系列视觉包装，通过时装影像、品牌视觉与动态图形的结合，将不同秀场与时尚内容串联成完整的动态视觉体验。',
    role:'负责项目的客户沟通、动态分镜、转场构思及 Motion Design。美术视觉由团队伙伴完成，我主要基于已有视觉设计规划每个画面的运动方式、镜头衔接与转场逻辑，并完成最终动态制作。'
  },
  '淘宝造物节': {
    overview:'为 2022 淘宝造物节「明日之境」制作活动宣传视频。本届造物节围绕年轻创造力与创新创业展开，通过「创新创业大会 × 创造力大展」集中呈现新产品、新想法与年轻创业者的创造力。',
    role:'负责影片前 12s 的 Motion Design。美术视觉由团队伙伴完成，我主要基于已有设计完成画面元素、文字及图形的动态演绎，并处理前后镜头之间的节奏与衔接。',
    challenge:'这个项目更侧重于对既定视觉的动态转化。在保持原有美术风格的基础上，通过元素出现顺序、运动节奏与镜头衔接，让静态设计自然转化成具有造物节年轻、活跃气质的动态视觉。'
  },
  '方达律师事务所': {
    overview:'为方达律师事务所制作品牌宣传片。影片围绕其专业能力、协作理念与国际化法律服务展开，以简洁、理性的视觉语言呈现品牌信息。',
    role:'负责项目的客户沟通及整支影片的动态分镜创意，并完成 22s—36s、45s—1:30 的 Motion Design。美术视觉由团队伙伴负责，我主要根据文案构思每个段落“如何表达、如何运动、如何衔接”，再配合美术方案完成动态落地。',
    challenge:'难点在于文案本身偏专业和抽象，而影片最终需要用非常简洁的图形语言把概念讲清楚。因此前期分镜需要先拆解每段文案的核心含义，再思考适合的动态关系与视觉隐喻，并与美术配合转化为具体画面，让复杂信息在保持简洁的同时更容易被理解。'
  },
  '人民日报——我的宝藏家乡': {
    overview:'人民日报新媒体推出《我的宝藏家乡》主题策划，邀请来自全国各地的 34 位插画师，为全国 34 个省级行政区分别创作数字插画，以不同的艺术风格描绘各地的自然风光、人文景观与家乡记忆。',
    role:'负责项目的客户沟通、插画动态拆解与转场梳理，包括根据动态需求与美术沟通每幅插画的分层方式，并完成影片 0—39s、1:36—2:06 的 Motion Design。',
    challenge:'34 位插画师的画面在风格、构图和元素上差异很大，难点是如何在保留原作特点的同时，让不同插画自然地连接起来。前期需要逐张分析画面，从人物、建筑、山水、云层等元素中寻找可以承接下一镜的视觉关系，再通过遮挡、形态呼应、运动方向与 Match Cut 设计转场，并提前反推每幅插画需要如何分层，让跨风格切换依然保持流畅。'
  },
  '人民日报——中国正当潮': {
    overview:'人民日报新媒体推出「中国正当潮」主题传播计划，聚焦中国文化、科技与消费领域，通过传统与当代、文化与科技的结合，展现不断发展的中国创造力与新时代风潮。',
    role:'负责影片 0—30s 持续推镜以及 2:27—2:54 持续拉镜的 Motion Design。基于团队已有的美术素材，重新组织不同画面的前后层级与空间关系，完成长镜头的纵深运动与场景穿梭。',
    challenge:'难点在于如何让大量独立的二维美术素材形成足够深的空间纵深。制作时需要重新拆分前、中、后景，通过不同层级的位移速度、缩放比例与视差关系建立空间，再配合持续推进与拉远的 Camera Movement，让镜头像真正穿越不同场景一样自然连续。'
  },
  '人民日报——抗战胜利八十周年漫画': {
    overview:'人民日报社推出「江山如画」系列短视频第一期《不屈》，以 10 余件抗战美术经典作品为基础，通过动态影像重新串联历史画作，纪念中国人民抗日战争暨世界反法西斯战争胜利 80 周年。',
    role:'负责项目的客户沟通、整片串场与转场构思，以及前期素材拆分规划。根据每幅原画的内容设计画面之间的连接方式，并与美术伙伴沟通需要拆分、补全的图层，为后续动态制作建立素材基础。',
    challenge:'项目拿到的原始素材大多是扫描后的单张 JPG，没有现成图层，而且不同画作在构图、笔触和内容上差异很大。需要逐幅分析画面，从人物、山水、烟雾、笔触等元素中寻找前后镜头的连接关系，再反推需要如何拆层与补全，让原本独立的历史画作能够自然过渡，形成连续的动态叙事。'
  },
  '人民日报——全面小康系列': {
    overview:'人民日报新媒体围绕“全面小康”推出系列内容，通过不同人物、生活场景与社会发展切面，记录脱贫攻坚、民生改善与城乡发展的变化，呈现全面小康背景下普通人的真实生活与时代变化。',
    role:'负责系列项目中部分篇章的 Motion Design。基于团队已有的美术视觉完成动态演绎、图形动画与镜头节奏设计，具体负责片段见下方视频。'
  }
})

Object.assign(projectDetails, {
  '泡泡玛特X东本电车灵悉': {
    overview:'为泡泡玛特 × 东风本田灵悉联名项目制作宣传视频。围绕潮玩 IP 与年轻化汽车品牌的跨界结合，通过角色、产品与场景之间的互动，建立更轻松、有趣的联名视觉体验。',
    role:'负责项目的前期创意构思、故事版创意构思及动态分镜剪辑。从联名主题出发梳理影片的整体创意与叙事节奏，将想法转化为具体分镜，并通过动态预演提前验证镜头、转场与整片节奏。'
  },
  '比亚迪海豹06GT x 极品飞车': {
    overview:'为比亚迪海豹06GT ×《极品飞车：集结》联名项目制作宣传视频。项目将现实中的海豹06GT驶入虚拟竞速世界，通过高速驾驶、空间变化与游戏化视觉，呈现车辆的性能与年轻、潮趣属性。',
    role:'负责项目的前期创意构思，围绕“现实汽车 × 虚拟竞速世界”的联名概念，构思车辆进入游戏世界后的场景变化、驾驶动作与镜头语言，并将整体创意转化为可供后续制作执行的完整分镜。'
  },
  '江苏卫视节目【中华书院】': {
    overview:'为江苏卫视文化节目《中华书院》制作节目片头。影片以“书院”为起点，通过书卷、山水、人文与科技等意象的不断演变，将传统文化与当代文明连接起来，呈现中华文化在时代发展中的延续与传承。',
    role:'负责项目的前期创意构思及故事版创意构思。围绕“文化传承与时代演进”梳理片头的整体视觉脉络，构思从传统书院、人文意象到现代科技空间的场景变化与镜头推进，并将概念转化为完整分镜，为后续三维动态制作提供创意基础。'
  },
  '安踏Pg7科技跑鞋': {
    overview:'为安踏 PG7 缓震科技平台构思产品宣传片，以跑步过程中“落地冲击—缓震吸收—能量回弹”为核心，将抽象的中底科技转化为更直观、更具冲击力的视觉体验。',
    role:'负责片子三维部分的前期创意构思及故事版创意构思。围绕 PG7 的缓震科技特点，构思影片整体视觉概念、产品科技的表现方式、场景变化与镜头语言，为后续三维动态制作提供执行基础。'
  },
  'HUAWEI 鸿蒙生态': {
    overview:'为 HUAWEI 鸿蒙智选生态制作品牌宣传视频。影片围绕智慧家庭与多设备协同，通过不同生活场景之间的连接，呈现智能设备融入日常生活后所构建的全场景智慧体验。',
    role:'负责整支影片的前期创意，从“鸿蒙生态”的核心概念出发，梳理不同智能产品与生活场景之间的关系，构思整片的视觉叙事、场景转换与镜头语言，并将创意转化为完整故事板，为后续三维动态制作提供执行基础。'
  }
})

const coverFiles = `02b3fd4471c725c41706c137c5801004.png 05ba54219f85f83517af4635406bb87a.png 0b24da0f5772518f09d84a2e975c3ea7.png 0b5aaf2cb9b508374ab95a935edfa5d4.png 0ef3430d0081cc7c400c32f27279b2ad.png 16db5d205465404c1de97ab3b7028f95.png 1be807fea76ea665cfb78a0120d595cd.png 1f949ea717ba2b537dec61d38ecb035c.png 27b2f2fe6b2f03b3a78f27d50f5fe825.png 2ac639e314b9ae815e673f12f446190a.png 2f7a6d316e19c9c36753e8561197c54b.png 47b939a24008e03251086ac5088688f8.png 56e2b15b2ced7389bf7564a9053ad3ae.png 595293365f176be0355ad92891036188.png 59968f7696c4b0a4b1cdd5b3250c5c70.png 5d09f91efeb1988fdc3e93f748f8bcfc.png 5d801ac10aea5a0911c966613228f2ee.png 5e4b3b334dc381b9a865075e0ee8da1c.png 617c34b2dd10df15b3929a689fbc642c.png 63159821cafa164ca8ca5e22837fe59e.png 63274816142d192708c1efff1eb01149.png 64b45f7f4a1a7dff1e1cf37a57c1efb4.png 664e34b800ce9c708cdc3b888a94b17d.png 6e1ffb9e91799b8b7551dd5250d11f0d.png 7395a3bb83267294e6a99486930d237a.png 7585056c40f24577746cb6cd0d569e7f.png 7ee9ebd7c4a7059b046ec61b0e84f963.png 81c751545a698190378c79d4d04d4cf9.png 8588c79f673f970a6f66d8f3004c1e5c.png 86d673ad04697f7d2c2359fda936c228.png 8a444c90fb13f51696fc078cc9372cdd.png 92d00f23e2527f0a01191aebd16b0485.png 931f4332cf78c96b83b5f0d19ca38f37.png 96c9398966e4f9f81259fdf9c7791b34.png 9abeb4ad4fa03d4a53460b40c4ce99ab.png 9c4f3223f04f898f39660a62e81095ef.png a388b12249fa5a137db943ebef0333da.png a866656593e482fc5d4e61c27c303b33.png aad20f5f4a235e3647fe0ccd2dcaf2d8.png af716fa0f2543c26917498740410d5f1.png b4a99e6ce2b21a4085f5f82732b7cb59.png c941c1a3e1b274bece78fda7a52de5db.png cd715012c4c257d3920138acf0ef7d17.png dd7889274cfee3e25d3baf68dc366cc1.png de7324dc2a18bcbb0982690dfc7c3042.png e938f2560725b1d2a55fae0af4cf917f.png eb941ad790a762e2dba61cb024574d97.png fc9e68c02691988de41a13c4a7932e3d.png fffaca202d8ff0fa34bd108203fe37a7.png`.split(' ')

function CircularGallery({bend=4,borderRadius=.05,scrollSpeed=3.9,scrollEase=.07}){
  const container = useRef(null), cards = useRef([])
  useEffect(()=>{
    const el=container.current
    if(!el) return
    const scroll={current:0,target:0}, pointer={down:false,start:0,position:0}, metrics={width:0,card:0,space:0,total:0}
    let raf=0, last=performance.now(), hovering=false
    const resize=()=>{metrics.width=el.clientWidth;metrics.card=Math.max(92,Math.min(142,metrics.width*.115));metrics.space=metrics.card+18;metrics.total=metrics.space*coverFiles.length}
    const wheel=e=>{e.preventDefault();scroll.target+=Math.sign(e.deltaY||e.deltaX)*scrollSpeed*42}
    const down=e=>{pointer.down=true;pointer.start=e.clientX;pointer.position=scroll.target;el.setPointerCapture?.(e.pointerId)}
    const move=e=>{if(pointer.down)scroll.target=pointer.position+(pointer.start-e.clientX)*scrollSpeed*.75}
    const up=()=>{pointer.down=false;scroll.target=Math.round(scroll.target/metrics.space)*metrics.space}
    const tick=now=>{
      const dt=Math.min(32,now-last);last=now
      if(!pointer.down&&!hovering)scroll.target+=scrollSpeed*.035*dt
      scroll.current+=(scroll.target-scroll.current)*scrollEase
      const half=metrics.width/2
      cards.current.forEach((card,i)=>{
        if(!card)return
        let x=i*metrics.space-scroll.current
        x=((x+metrics.total/2)%metrics.total+metrics.total)%metrics.total-metrics.total/2
        const n=Math.max(-1.4,Math.min(1.4,x/Math.max(1,half)))
        const y=Math.abs(n*n)*bend*20
        const rotate=-n*bend*5.5
        const scale=Math.max(.72,1-Math.abs(n)*.16)
        card.style.width=`${metrics.card}px`
        card.style.transform=`translate3d(calc(-50% + ${x}px),calc(-50% + ${y}px),0) rotateZ(${rotate}deg) scale(${scale})`
        card.style.opacity=String(Math.max(0,1-Math.max(0,Math.abs(n)-.82)*2.4))
        card.style.zIndex=String(100-Math.round(Math.abs(n)*20))
      })
      raf=requestAnimationFrame(tick)
    }
    resize();addEventListener('resize',resize);el.addEventListener('wheel',wheel,{passive:false});el.addEventListener('pointerdown',down);el.addEventListener('pointermove',move);el.addEventListener('pointerup',up);el.addEventListener('pointercancel',up);el.addEventListener('mouseenter',()=>hovering=true);el.addEventListener('mouseleave',()=>{hovering=false;up()});raf=requestAnimationFrame(tick)
    return()=>{cancelAnimationFrame(raf);removeEventListener('resize',resize);el.removeEventListener('wheel',wheel);el.removeEventListener('pointerdown',down);el.removeEventListener('pointermove',move);el.removeEventListener('pointerup',up);el.removeEventListener('pointercancel',up)}
  },[bend,scrollSpeed,scrollEase])
  return <div className="circular-gallery" ref={container} style={{'--radius':`${borderRadius*100}%`}}>
    <div className="gallery-stage">{coverFiles.map((file,i)=><figure className={`crop-${i%7}`} ref={node=>cards.current[i]=node} key={file}><img src={`${A}work-covers/${file}`} alt={`作品封面 ${i+1}`}/></figure>)}</div>
    <div className="gallery-caption"><b>PROJECT COVERS</b><span>49 SELECTED FRAMES · AUTO SCROLL</span></div>
  </div>
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['top','About Me'],['showreel','SHOWREEL'],['works','SELECTED WORKS'],['cavalry','CAVALRY LAB'],['about','Resume']]
  return <header className="nav-wrap">
    <div className="nav-meta"><b>A.GU</b><b>MOTION DESIGNER</b><b>PERSONAL PORTFOLIO WEBSITE</b></div>
    <button className="nav-toggle" onClick={() => setOpen(!open)}>INDEX <i>{open ? '×' : '+'}</i></button>
    <nav className={open ? 'open' : ''}>{links.map(([id,t])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{t}</a>)}</nav>
  </header>
}

function ArrowIcon({direction='up', className=''}) {
  return <svg className={`vector-arrow vector-arrow-${direction} ${className}`.trim()} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M5 19L19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
}

function LazyLoopVideo({src, poster, className='', ariaLabel}) {
  const ref=useRef(null)
  const [loaded,setLoaded]=useState(false)
  useEffect(()=>{
    const el=ref.current
    if(!el)return
    if(!('IntersectionObserver' in window)){setLoaded(true);return}
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){setLoaded(true);requestAnimationFrame(()=>el.play().catch(()=>{}))}
        else el.pause()
      })
    },{rootMargin:'280px 0px',threshold:.01})
    observer.observe(el)
    return()=>observer.disconnect()
  },[])
  return <video ref={ref} className={className} src={loaded?src:undefined} poster={poster} aria-label={ariaLabel} muted loop playsInline autoPlay={loaded} preload={loaded?'metadata':'none'}/>
}

function Hero() {
  const hero = useRef(null), video = useRef(null)
  const targetTime = useRef(0), currentTime = useRef(0), pointerActive = useRef(false), raf = useRef()
  useEffect(() => {
    const trackPointer = e => {
      if(!hero.current || !video.current || !Number.isFinite(video.current.duration)) return
      const rect = hero.current.getBoundingClientRect()
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      const distance = Math.hypot(dx, dy)
      let angle = Math.atan2(-dy, dx)
      if(angle < 0) angle += Math.PI * 2
      targetTime.current = distance < .08 ? 0 : Math.min(video.current.duration - .12, 2 + angle / (Math.PI * 2) * 8)
    }
    const enter = () => { pointerActive.current = true; currentTime.current = video.current?.currentTime || 0; video.current?.pause() }
    const leave = () => { pointerActive.current = false; video.current?.pause() }
    const tick = () => {
      if(pointerActive.current && video.current?.readyState >= 2){
        currentTime.current += (targetTime.current - currentTime.current) * .13
        if(Math.abs(video.current.currentTime - currentTime.current) > .018) video.current.currentTime = currentTime.current
      }
      raf.current = requestAnimationFrame(tick)
    }
    const el = hero.current
    el?.addEventListener('mouseenter', enter)
    el?.addEventListener('mousemove', trackPointer, {passive:true})
    el?.addEventListener('mouseleave', leave)
    tick()
    return () => { el?.removeEventListener('mouseenter', enter); el?.removeEventListener('mousemove', trackPointer); el?.removeEventListener('mouseleave', leave); cancelAnimationFrame(raf.current) }
  }, [])
  return <section id="top" className="hero-scroll" ref={hero}>
    <div className="hero-sticky">
      <div className="hero-video"><img className="hero-poster" src={A+'hero-poster.jpg'} alt="" fetchPriority="high"/><video ref={video} src={A+'hero.mp4'} poster={A+'hero-poster.jpg'} muted playsInline preload="metadata"/></div>
      <div className="hero-shade"/>
      <div className="hero-grid">
        <div className="hero-title">
          <h1><span>MOTION</span><span>DESIGNER</span></h1>
          <a href="#works">走进我的创作世界 <b><ArrowIcon direction="up"/></b></a>
          <div className="hero-profile"><h2>卫丰鑫</h2><b>动态设计师 / 视频设计师</b><p>7年商业项目设计经验<br/>二维动态设计 / 动态分镜 / 品牌内容 / 后期制作 / 创意构思</p></div>
        </div>
        <div className="hero-monogram">A.GU<br/>PERSONAL<br/>PORTFOLIO</div>
        <div className="hero-smile" aria-label="笑脸标志"><span><i/><i/><b/></span></div>
      </div>
    </div>
  </section>
}

function SectionTitle({index, en, cn}) { return <div className="section-title"><span>{index}</span><div><h2>{en} <ArrowIcon direction="down"/></h2><p>{cn}</p></div></div> }

function Showreel(){
  const v=useRef(null)
  return <section id="showreel" className="section reel"><SectionTitle index="01" en="SHOWREEL" cn="作品剪辑"/>
    <div className="showreel-single">
      <button className="reel-frame" aria-label="播放或暂停 SHOWREEL" onClick={()=>{if(v.current.paused)v.current.play();else v.current.pause()}}>
        <video className="showreel-main-video" ref={v} src="./商业项目/SHOWREEL/个人作品集剪辑0927.mp4" poster={A+'showreel-3s12.jpg'} playsInline preload="metadata"/>
      </button>
    </div>
  </section>
}

function Works(){
  const [selected,setSelected]=useState(null)
  const [expandedFrame,setExpandedFrame]=useState(null)
  useEffect(()=>{document.body.style.overflow=selected?'hidden':'';return()=>{document.body.style.overflow=''}},[selected])
  useEffect(()=>{
    const close=e=>{if(e.key==='Escape')setExpandedFrame(null)}
    addEventListener('keydown',close)
    return()=>removeEventListener('keydown',close)
  },[])
  const group=selected?groups.find(g=>g.items.includes(selected))||groups[0]:groups[0]
  const selectedIndex=selected?group.items.findIndex(item=>item===selected):-1
  const narrative=projectNarratives[group.id]
  const detail=selected?projectDetails[selected[0]]:null
  return <section id="works" className="section works"><SectionTitle index="02" en="SELECTED WORKS" cn="商业项目"/>
    <div className="work-sections">{groups.map((section,sectionIndex)=><section className="work-group" key={section.id}>
      <div className="work-head"><div><small>0{sectionIndex+1}</small><h3>{section.title}</h3></div><p>{section.items.length} PROJECTS / {section.id==='training'?'自动循环播放':'点击卡片查看详情'}</p></div>
      <div className="work-grid" style={{'--accent':section.color}}>{section.items.map((it,i)=>{
        const content=<><span className="project-no">{String(i+1).padStart(2,'0')}</span><div className="project-cover">{section.id==='twoD'?<img src={`${A}${it[4]}`} alt="" loading="lazy" decoding="async"/>:<LazyLoopVideo src={`./${it[3]}`} poster={`${A}${it[4]}`} ariaLabel={it[0]}/>}</div><div className="project-type">{it[2]}</div><h4>{it[0]}</h4>{section.id!=='training'&&<><small className="project-click-hint">详细项目内容点击观看</small><i><ArrowIcon direction="up"/></i></>}</>
        return section.id==='training'
          ? <article className={`project passive-project ${it[0]==='动补插件训练'?'contain-project':''}`} key={it[0]}>{content}</article>
          : <button className={`project ${it[0].includes('宝藏家乡')?'treasure-project':''}`} key={it[0]} onClick={()=>setSelected(it)}>{content}</button>
      })}</div>
    </section>)}</div>
    {selected&&<div className="project-page" role="dialog" aria-modal="true">
      <button className="project-close" onClick={()=>{setExpandedFrame(null);setSelected(null)}}>CLOSE ×</button>
      <div className="project-page-inner">
        <header className={group.id==='twoD'||group.id==='threeD'?'unified-project-title':''}><small>{group.en} / {String(selectedIndex+1).padStart(2,'0')}</small><h3>{selected[0]}</h3><p>{selected[2]} · MOTION DESIGN</p></header>
        <div className="project-story"><article><span>01 / BACKGROUND</span><h4>项目背景</h4><p>{detail?.overview||narrative[0]}</p></article><article><span>02 / MY ROLE</span><h4>个人职责</h4><p>{detail?.role||selected[1]}</p></article>{(detail?.challenge||!detail)&&<article><span>03 / CHALLENGE</span><h4>项目难点</h4><p>{detail?.challenge||'在既定品牌表达与交付节奏中寻找清晰的动态解决方案，并独立推进关键画面的测试、调整与落地。'}</p></article>}</div>
        {!selected[7]&&<figure className="project-video"><video src={`./${selected[3]}`} poster={`${A}${selected[4]}`} controls playsInline preload="metadata" autoPlay={group.id!=='twoD'} muted={group.id!=='twoD'}/></figure>}
        {selected[7]?<section className="series-output">{selected[7].map((episode,episodeIndex)=><article className="series-episode" key={episode.title}>
          <header><small>PART {String(episodeIndex+1).padStart(2,'0')}</small><h4>{episode.title}</h4></header>
          <figure className="series-main-video"><video src={`./${episode.video}`} poster={`${A}${episode.poster}`} controls playsInline preload="metadata"/></figure>
          <div className="series-clips"><div><small>SELECTED MOTION OUTPUTS</small><h5>动态片段</h5></div><div className="gif-grid">{episode.clips.map((clip,i)=><LazyLoopVideo key={clip} src={`./${clip}`} ariaLabel={`${episode.title} 动态片段 ${i+1}`}/>)}</div></div>
        </article>)}</section>:group.id==='twoD'&&selected[5]?.length>0&&<section className="gif-output"><div><small>SELECTED MOTION OUTPUTS</small><h4>动态片段</h4></div><div className="gif-grid">{selected[5].map((clip,i)=><LazyLoopVideo key={clip} src={`./${clip}`} ariaLabel={`${selected[0]} 动态片段 ${i+1}`}/>)}</div></section>}
        {group.id==='threeD'&&<section className="storyboard-output"><div className="storyboard-heading"><small>STORYBOARD FRAMES</small><h4>分镜单图</h4></div><div className="storyboard-grid">
          {selected[5].map((frame,i)=><button className="storyboard-frame" key={frame} onClick={()=>setExpandedFrame({src:frame,index:i,title:selected[0]})} aria-label={`放大查看 ${selected[0]} 分镜 ${i+1}`}><img src={`./${frame}`} alt={`${selected[0]} 分镜 ${i+1}`}/><span>{String(i+1).padStart(2,'0')}</span></button>)}
          {selected[6]&&<figure className="storyboard-motion"><LazyLoopVideo src={`./${selected[6]}`} ariaLabel={`${selected[0]} POP 故事版`}/><span>POP STORYBOARD</span></figure>}
        </div></section>}
        <nav><button disabled={selectedIndex<=0} onClick={()=>setSelected(group.items[selectedIndex-1])}><ArrowIcon direction="left"/> PREVIOUS</button><button disabled={selectedIndex>=group.items.length-1} onClick={()=>setSelected(group.items[selectedIndex+1])}>NEXT <ArrowIcon direction="right"/></button></nav>
      </div>
      {expandedFrame&&<div className="frame-lightbox" role="dialog" aria-modal="true" aria-label="分镜大图预览" onClick={()=>setExpandedFrame(null)}>
        <button onClick={()=>setExpandedFrame(null)}>CLOSE ×</button>
        <figure onClick={e=>e.stopPropagation()}><img src={`./${expandedFrame.src}`} alt={`${expandedFrame.title} 分镜 ${expandedFrame.index+1}`}/><figcaption>{expandedFrame.title} / FRAME {String(expandedFrame.index+1).padStart(2,'0')}</figcaption></figure>
      </div>}
    </div>}
  </section>
}

function Cavalry(){ return <section id="cavalry" className="section cavalry"><SectionTitle index="03" en="CAVALRY LAB" cn="软件练习"/>
  <div className="lab-intro"><span>GENERATIVE TYPE / PROCEDURAL MOTION / 2026</span></div>
  <div className="lab-grid">{cavalry.map(([name,file],i)=><figure key={file}><LazyLoopVideo src={A+'cavalry/'+file} ariaLabel={name}/><figcaption><b>{name}</b><span>{String(i+1).padStart(2,'0')} / CAVALRY</span></figcaption></figure>)}</div>
  </section> }

function About(){return <section id="about" className="section about"><SectionTitle index="04" en="WORK EXPERIENCE" cn="个人履历"/>
  <div className="about-top">
    <figure className="portrait"><img src={A+'portrait.webp'} alt="个人形象" loading="lazy" decoding="async"/></figure>
    <div className="bio"><small>ABOUT ME</small><h3>1800线设计女工</h3><p>7年商业项目经验，专注动态设计、视频设计与二维动画。参与从创意、分镜到后期整合的完整流程，让每个镜头表达得更准确。</p>
      <div className="facts"><div><span>工作经历</span><b>北京华韬文化传媒</b><small className="fact-detail">动态设计师&nbsp;&nbsp;｜&nbsp;&nbsp;2019–2022 /&nbsp;&nbsp;导演 / 项目经理&nbsp;&nbsp;｜&nbsp;&nbsp;2022–至今</small></div><div><span>服务品牌</span><b>快手 / 京东 / 小米 / 361° / 特步 / 微软小冰 / 人民日报 / 艾美特 /</b></div><div><span>软件能力</span><b>AE / AI / Cavalry（学习中）/ Ps / Pr</b></div><div><span>毕业院校</span><b>郑州轻工业 · 数媒专业</b></div><div><span>手机</span><a href="tel:15935755356">159 3575 5356</a></div><div><span>邮箱</span><a href="mailto:3072497615@qq.com">3072497615@qq.com</a></div></div>
    </div>
  </div>
  <footer><a className="back" href="#top">BACK TO TOP <ArrowIcon direction="top"/></a></footer>
  </section>}

function useScrollReveal(){
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return
    const textSelector='.section-title h2,.section-title p,.work-head h3,.work-head p,.project h4,.project-type,.lab-grid figcaption,.project-page header,.project-story article,.series-clips>div:first-child,.gif-output>div:first-child'
    const mediaSelector='.showreel-single,.project,.lab-grid figure,.project-video,.series-main-video,.gif-grid video,.storyboard-frame,.storyboard-motion'
    const resumeSelector='.about .bio h3,.about .bio>p,.about .facts div'
    const allSelector=`${textSelector},${mediaSelector},${resumeSelector}`
    const play=(el)=>{
      if(el.dataset.revealPlayed)return
      el.dataset.revealPlayed='true'
      const media=el.matches(mediaSelector)
      const delay=Number(el.dataset.revealDelay||0)
      el.animate(media
        ?[{opacity:0,transform:'translateY(46px) scale(.97)',filter:'blur(6px)'},{opacity:1,transform:'translateY(0) scale(1)',filter:'blur(0)'}]
        :[{opacity:0,transform:'translateY(38px)',filter:'blur(4px)'},{opacity:1,transform:'translateY(0)',filter:'blur(0)'}],
        {duration:1050,delay,easing:'cubic-bezier(.16,1,.3,1)',fill:'none'})
      observer.unobserve(el)
    }
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return
      requestAnimationFrame(()=>play(entry.target))
    }),{threshold:.06,rootMargin:'0px 0px -4% 0px'})
    const register=(root=document)=>{
      root.querySelectorAll?.(allSelector).forEach((el,index)=>{
        if(el.dataset.revealReady)return
        el.dataset.revealReady='true'
        el.dataset.revealDelay=String(Math.min((index%6)*70,350))
        const rect=el.getBoundingClientRect()
        if(rect.bottom>0&&rect.top<window.innerHeight)requestAnimationFrame(()=>play(el))
        else observer.observe(el)
      })
    }
    register()
    const mutations=new MutationObserver(records=>records.forEach(record=>record.addedNodes.forEach(node=>{
      if(node.nodeType===1){
        if(node.matches?.(allSelector))register(node.parentElement||document)
        else register(node)
      }
    })))
    mutations.observe(document.getElementById('root'),{childList:true,subtree:true})
    return()=>{observer.disconnect();mutations.disconnect()}
  },[])
}

function App(){useScrollReveal();return <><main><Header/><Hero/><Showreel/><Works/><Cavalry/><About/></main></>}

createRoot(document.getElementById('root')).render(<App/>)

