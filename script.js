const cards = [
  {
    category: "空间",
    image: "./real-card-assets/01-wall.jpg",
    title: "墙面危机：白墙变画板",
    age: "2-5岁",
    scene: "画在墙、门、柜面上",
    say: "你很想画很大的线，我看见了。白墙不能画，我们去你的大画墙。",
    prep: "先把可洗笔留下，收起油性笔；用低粘纸胶带贴一张大牛皮纸，边贴边说“这是你的大画墙”。",
    steps: ["蹲下来接住手，不抢不吼，先指给孩子看“这条线很大、很有力”。", "带他走到合法涂鸦区，重复一句短规则：“墙不画，纸可以画。”", "给一个大动作任务：画一条从地板跑到门把手那么长的线。"],
    play: ["纸箱屋粉刷：废纸箱搭小房子，用刷子刷“墙”。", "线条赛跑：家长画慢线，孩子画快线，比较动作。"],
    close: "收尾时让孩子选一条线贴日期，墙面一起擦干净，强调“作品住在纸上”。",
    materials: "牛皮纸、低粘纸胶带、粗蜡笔、旧纸箱、湿巾",
    safety: "只用可水洗材料；贴纸胶带先试墙面；成人马克笔不进儿童材料盒。"
  },
  {
    category: "空间",
    image: "./real-card-assets/02-furniture.jpg",
    title: "家具遭殃：桌腿玻璃都想画",
    age: "2-5岁",
    scene: "在桌腿、椅背、玻璃上试笔",
    say: "你发现这里和纸不一样，手感很滑。我们给它穿一件可以画的衣服。",
    prep: "先移走玻璃杯、尖角杂物和贵重物；把保鲜膜或大纸包在桌腿、椅背、低矮柜门上。",
    steps: ["把孩子的发现说出来：“这里比纸滑，笔跑得更快。”", "指向保护层：“只能画在这件衣服上，家具本身不画。”", "邀请他试三种触感：纸上、膜上、瓦楞纸上，各画一条线。"],
    play: ["透明画布：在保鲜膜上画鬼脸，再从背面看表情变化。", "触感侦探：闭眼摸材料，猜猜哪一种最滑。"],
    close: "一起撕下保护层团成球，扔进“今日材料篮”，给家具说“你回家了”。",
    materials: "保鲜膜、纸胶带、旧纸箱、可水洗笔、软布",
    safety: "玻璃边缘和易碎物先移开；不要让孩子独自在玻璃门附近奔跑作画。"
  },
  {
    category: "空间",
    image: "./real-card-assets/03-mess.jpg",
    title: "满地狼藉：颜料乱甩",
    age: "2-6岁",
    scene: "甩笔、拍打、颜料飞溅",
    say: "你做了一场流星雨。流星雨要下在防水垫的天空里。",
    prep: "地上铺防水垫，孩子穿旧衣或反穿衣；颜料只倒硬币大小，水盆放在手边。",
    steps: ["先暂停甩向人的动作：“颜料不能飞到人身上。”", "把画纸放进防水垫中央，划出“流星雨天空”。", "给出限定玩法：刷子只能朝下拍，拍十下就换颜色。"],
    play: ["海绵陨石：海绵蘸颜料盖出星球。", "鸡蛋壳替代版：用纸杯团或海绵球砸大纸，少脏更安全。"],
    close: "喊“最后三颗流星”，拍完一起把刷子送回水盆，再擦脚底和地面。",
    materials: "防水垫、旧衣、海绵刷、水盆、湿巾、大画纸",
    safety: "颜料远离眼口；地面防滑；不在插座、电器、布艺沙发附近玩。"
  },
  {
    category: "纸张",
    image: "./real-card-assets/04-tear.jpg",
    title: "撕纸狂魔：纸被撕成碎片",
    age: "1.5-5岁",
    scene: "撕书、撕画、撕包装",
    say: "你听见纸被撕开的声音了。书不能撕，撕纸篮里的纸可以撕。",
    prep: "提前放一个“可撕篮”，里面只放旧报纸、包装纸、皱纹纸；重要书籍离开视线。",
    steps: ["把不可撕的书拿开，简短说明：“书要读，篮子里的纸可以撕。”", "示范慢慢撕、快速撕、揉成球，让孩子比较声音。", "把碎纸按颜色收进小碗，准备下一步拼贴。"],
    play: ["碎纸下雪：把白纸碎片撒在蓝色纸上做雪。", "纸片小动物：家长画轮廓，孩子把碎纸贴进去。"],
    close: "用小扫帚或手抓把碎纸送回碗里，留下能贴的，其余进回收袋。",
    materials: "旧纸、皱纹纸、胶棒、硬纸板、小碗",
    safety: "小碎纸玩后清点，避免入口和满屋飘散；不要用带油墨味很重的纸给低龄孩子。"
  },
  {
    category: "画面",
    image: "./real-card-assets/05-lines.jpg",
    title: "乱线缠绕：像一团乱麻",
    age: "2-4岁",
    scene: "反复画线、没有具象物",
    say: "这条线跑得好快，好有力量。它现在是什么心情？",
    prep: "准备粗短蜡笔和大纸，别给太细的笔；旁边放一个纸板相框，用来寻找局部美感。",
    steps: ["不要问“这是什么”，先描述动作：“这条线转弯了、跳起来了。”", "请孩子画三种情绪线：开心、生气、安静。", "用纸板相框框住一小块，请孩子给这块画取名字。"],
    play: ["音乐线条：放快慢不同的音乐，跟着节奏画线。", "双手画：左右手各拿一支蜡笔，体验身体动作。"],
    close: "选一条“今日最有力的线”，贴上便利贴，写下孩子说的名字。",
    materials: "粗蜡笔、马克纸、纸板相框、便利贴",
    safety: "避免握手代画；画材选择粗短易握，降低挫败。"
  },
  {
    category: "画面",
    image: "./real-card-assets/06-circles.jpg",
    title: "无限画圈：只画圈圈",
    age: "2.5-5岁",
    scene: "反复画圆、波点、螺旋",
    say: "你画出了会转弯的线，这可是手腕的大本领。",
    prep: "准备圆形材料：瓶盖、莲藕、泡泡纸、卷纸筒；颜料盘只放少量颜色。",
    steps: ["先肯定能力：“圆圈能闭起来，说明你的手腕会转弯。”", "把圈圈命名成泡泡、星球、甜甜圈，让重复变成主题。", "加入一种印章材料，让孩子比较“画出来的圆”和“印出来的圆”。"],
    play: ["泡泡纸滚筒：泡泡纸包在卷纸筒上滚出波点路。", "星球地图：大圆当星球，小点当陨石。"],
    close: "请孩子圈出最喜欢的一个圆，问“这个星球叫什么名字”。",
    materials: "秋葵、莲藕、泡泡纸、卷纸筒、瓶盖",
    safety: "蔬菜只用于作画时要和食用食材分开；颜料盘浅放少量。"
  },
  {
    category: "画面",
    image: "./real-card-assets/07-mud.jpg",
    title: "颜色混成黑泥",
    age: "2-6岁",
    scene: "所有颜色混到一起",
    say: "你发明了一种魔药颜色。我们试试看它藏了哪些颜色。",
    prep: "准备两张纸：一张允许自由混色，一张做“两色实验”；深色颜料只给一点点。",
    steps: ["先允许一次充分混色，满足孩子的覆盖和控制感。", "另开实验纸，只给两种颜色，观察从哪里开始变深。", "把黑泥色留一小块，刮出线条，看底下是否露出旧颜色。"],
    play: ["刮画：彩色蜡笔打底，深色覆盖，再用棉签刮线。", "颜色命名店：给混出的颜色取名字，比如“暴雨云”“巧克力星球”。"],
    close: "拍下颜色实验，问孩子“下次想让哪两个颜色见面”。",
    materials: "水彩、蜡笔、棉签、厚纸、调色盘",
    safety: "不用尖锐竹签；颜料少量多次，避免整瓶倒入。"
  },
  {
    category: "画面",
    image: "./real-card-assets/08-water.jpg",
    title: "水太多：纸被戳烂",
    age: "2-6岁",
    scene: "水彩加太多水、反复戳纸",
    say: "纸喝水太多撑破了。我们让它变成新纸。",
    prep: "换厚纸或水彩纸，水杯只倒三分之一；旁边放海绵，随时吸掉多余的水。",
    steps: ["把破洞描述成现象：“这里水太多，纸变软了。”", "示范“蘸一下、刮一下、再画”，让孩子试一次。", "把破纸撕碎泡水，转成纸浆触觉游戏。"],
    play: ["纸浆压花：纸浆铺在纱网上，撒干花或彩纸。", "水路地图：用滴管滴水，看颜色沿纸纤维跑。"],
    close: "把湿作品放到固定晾晒区，告诉孩子“湿作品需要睡一觉”。",
    materials: "厚纸、海绵、水盆、纱网、干花、滴管",
    safety: "不使用发霉纸浆；玩水后擦干地面，避免滑倒。"
  },
  {
    category: "工具",
    image: "./real-card-assets/09-scissors.jpg",
    title: "剪刀破坏：把画剪碎",
    age: "3-6岁",
    scene: "剪画、剪纸、剪得停不下",
    say: "你很想知道剪刀怎么把东西分开。剪刀只剪纸，我们来做材料挑战。",
    prep: "只给儿童安全剪刀；准备托盘，把可剪材料放托盘里，桌面上不放衣物、头发饰品和重要纸张。",
    steps: ["先复述三条规则：坐着剪、尖头朝下、只剪纸。", "给不同纸张，感受阻力：广告纸、折纸、卡纸。", "把剪下来的碎片变成拼贴，而不是直接扫掉。"],
    play: ["一刀一条路：剪出弯弯小路，贴成地图。", "碎片怪兽：不同形状纸片拼成眼睛、牙齿和身体。"],
    close: "剪刀合上放回固定位置，碎片按颜色分堆，给下一次拼贴留材料。",
    materials: "儿童安全剪刀、折纸、胶棒、托盘、收纳袋",
    safety: "剪刀不用时立刻合上放回；3岁以下不独立使用。"
  },
  {
    category: "沟通",
    image: "./real-card-assets/10-dog.jpg",
    title: "问像不像：我画的狗像吗",
    age: "3-6岁",
    scene: "孩子求评价、怕被否定",
    say: "请你给我介绍介绍你的画，好吗？",
    prep: "把自己从“评委”切换成“采访者”；准备便利贴记录孩子说的话。",
    steps: ["让孩子先讲，不抢答不乱猜。", "夸可观察事实：颜色、动作、线条、位置。", "用反问延展故事：它要去哪里？它开心吗？"],
    play: ["作品采访：家长问三个问题，孩子回答，写在便利贴上。", "故事续集：下一张纸只画这只狗接下来的一件事。"],
    close: "用孩子自己的话给作品命名，而不是成人替他总结。",
    materials: "孩子的原画、便利贴、日期章、细头笔",
    safety: "少说“真像/不像”；避免把作品改成成人期待的样子。"
  },
  {
    category: "沟通",
    image: "./real-card-assets/11-cant.jpg",
    title: "我不会：落笔前就受挫",
    age: "3-6岁",
    scene: "不敢画、要求成人代画",
    say: "你脑子里已经有想法了，手还在练习。我们先画在空气里。",
    prep: "拿掉“必须画好”的材料，先用空气、桌面、水笔刷等无压力媒介启动。",
    steps: ["先共情，不急着鼓励：“你想画得很好，所以有点担心。”", "空中画三遍，再在废纸角落画第一笔。", "用印章、拓印、模板边缘给孩子一个容易成功的起点。"],
    play: ["闭眼起笔：闭眼画三秒，再睁眼看看像什么。", "半成品接龙：家长只画一个点，孩子决定它变成什么。"],
    close: "保存“第一笔”而不是只保存成品，让孩子看见自己开始了。",
    materials: "印章、树叶、蔬菜切面、海绵、废纸",
    safety: "不要用“画丑点没关系”安慰；这会确认孩子对“丑”的担心。"
  },
  {
    category: "沟通",
    image: "./real-card-assets/12-template.jpg",
    title: "简笔画陷阱：只想照模板",
    age: "4-6岁",
    scene: "要求一步一步照画",
    say: "这个太阳长出四个角，太有自己的想法了。",
    prep: "把模板书暂时放远，准备真实物、自然物或立体材料，让孩子绕开“像不像”。",
    steps: ["先肯定孩子想学方法，但不把模板当唯一答案。", "带孩子观察真实云、叶子、杯子，找“不规则”的地方。", "把二维画转成立体搭建：用黏土或纸盒做一个“不是模板里的狗”。"],
    play: ["不可能功能：给太阳加轮子，给苹果加翅膀。", "观察挑战：找三片完全不一样的叶子。"],
    close: "问孩子“今天哪个地方最不像模板，却最像你自己的想法”。",
    materials: "黏土、纸盒、自然物、观察卡、胶带",
    safety: "模板可以偶尔学工具，不要变成唯一标准。"
  },
  {
    category: "沟通",
    image: "./real-card-assets/13-short.jpg",
    title: "三分钟热度：画一下就走",
    age: "2-6岁",
    scene: "很快离开、频繁换材料",
    say: "大艺术家今天这一轮工作结束啦。",
    prep: "把活动拆成小回合，每回合只放一种材料；先接受“短跑式创作”。",
    steps: ["不强迫坐回去补满，先承认结束。", "给一个轻量收束任务：最后盖三个章、洗一支笔。", "如果孩子还想玩，加入触觉、声音、运动元素延长参与。"],
    play: ["声音有没有形状：音乐响起时画，暂停时停笔。", "材料接力：每次只换一种工具，让注意力有新入口。"],
    close: "用“这一轮结束”替代“你怎么又不专心”，保留下一轮继续的可能。",
    materials: "印章、音乐、纸浆、滚筒、计时器",
    safety: "不要仅凭一次短活动贴诊断标签；若多场景长期困扰，再咨询专业人士。"
  },
  {
    category: "身体",
    image: "./real-card-assets/14-body.jpg",
    title: "颜料上身：涂满手脚",
    age: "1-5岁",
    scene: "手、脚、胳膊全是颜色",
    say: "你的手变成了彩色手套。彩色手套可以印在这张大纸上。",
    prep: "提前选浴室、防水垫或阳台；穿旧衣，准备温水、毛巾和干净衣服。",
    steps: ["先检查眼口和破损皮肤，确认安全后再继续。", "把身体涂抹转成手印、脚印、滚轮轨迹。", "用“颜色回水盆”的游戏洗手洗脚。"],
    play: ["脚印小路：从大纸一端走到另一端。", "小车赛道：车轮蘸颜料，在纸上开路。"],
    close: "让孩子选择最后一个手印位置，再进入清洗流程，不突然终止。",
    materials: "旧衣、防水垫、可水洗颜料、水盆、毛巾",
    safety: "先试敏；避开眼口和破损皮肤；浴室地面防滑。"
  },
  {
    category: "材料",
    image: "./real-card-assets/15-material.jpg",
    title: "锅碗瓢盆：非传统材料创作",
    age: "3-6岁",
    scene: "拿厨房或废旧物作画",
    say: "你像材料探险家，发现了它的新用法。",
    prep: "建立“可创作材料盒”，只放安全废旧物；厨房用品、玻璃陶瓷和电池类物品不进入材料盒。",
    steps: ["先肯定发现：“你在找新材料。”", "把不可用物品换成可用替代：纸筒、瓶盖、大纸盒。", "给材料一个任务：盖章、滚印、搭高、做声音。"],
    play: ["纸筒城市：纸筒盖章成楼房，再用线条连成路。", "瓶盖节奏：瓶盖蘸色按出节奏图案。"],
    close: "材料按“还能用、要回收、要清洗”三类放回，形成下次可继续的材料库。",
    materials: "纸筒、瓶盖、大纸盒、胶带、托盘",
    safety: "玻璃、陶瓷、蜡烛、硬币、电池不进材料盒；小件用后清点。"
  }
];

const cardGrid = document.querySelector("#cardGrid");
const searchInput = document.querySelector("#searchInput");
const chips = document.querySelector("#chips");
const printButton = document.querySelector("#printButton");
const saveManualButton = document.querySelector("#saveManualButton");
let activeCategory = "全部";

const principles = {
  "墙面危机：白墙变画板": "2-5岁孩子常用大臂和全身在画画。先承认“想画大”的身体需要，再给出合法墙面，可以减少对抗，也让规则变得具体可执行。",
  "家具遭殃：桌腿玻璃都想画": "孩子是在比较不同材质的摩擦力和反馈。用保护膜保留探索，同时保护家具，等于把“禁止”改成“有边界的实验”。",
  "满地狼藉：颜料乱甩": "甩、拍、砸是动觉释放。与其压住动作，不如限制方向、范围和次数，让孩子体验力量，也学会空间边界。",
  "撕纸狂魔：纸被撕成碎片": "撕纸训练手眼协调和双手配合，也满足声音、阻力、触感的感官探索。可撕篮能把冲动导向可接受材料。",
  "乱线缠绕：像一团乱麻": "乱线不是失败，而是动作轨迹和肌肉控制的练习。描述线条的速度、方向和力量，会比追问“画的是什么”更保护表达欲。",
  "无限画圈：只画圈圈": "闭合圆和反复画圈是手腕控制的重要练习。把圈圈变成主题，可以把重复行为转化为更丰富的图案探索。",
  "颜色混成黑泥": "混色满足孩子对变化和覆盖的控制感。先允许一次充分混色，再安排两色实验，能让孩子从“乱混”过渡到观察。",
  "水太多：纸被戳烂": "孩子关注的是水、纸、颜色之间的物理变化。把破纸转为纸浆游戏，可以把失误变成材料认知。",
  "剪刀破坏：把画剪碎": "剪切带来强烈的工具掌控感，也训练精细动作。规则越短越有效：坐着剪、尖头朝下、只剪纸。",
  "问像不像：我画的狗像吗": "孩子问像不像，常是在寻找理解和确认。让他介绍作品，会把评价权还给孩子，也能保护自信。",
  "我不会：落笔前就受挫": "“我不会”通常来自脑中目标高于手部能力。先用空气画、无痕画降低失败成本，再进入纸面，更容易启动。",
  "简笔画陷阱：只想照模板": "模板能教技巧，但长期依赖会让孩子以为只有一种正确答案。转向真实观察和立体搭建，可以恢复自己的判断。",
  "三分钟热度：画一下就走": "学龄前创作常是短回合的情绪和动作释放。承认一轮结束，再用小收尾任务建立完成感，比强迫坐满更有效。",
  "颜料上身：涂满手脚": "身体涂抹来自触觉探索，尤其低龄孩子会用皮肤认识材料。限定到手印脚印和防水区域，既满足触觉，也保安全。",
  "锅碗瓢盆：非传统材料创作": "孩子在重新定义材料用途，这是创造力的起点。材料盒让探索有边界，也教会分类、回收和下次继续。"
};

const displayCategories = {
  "墙面危机：白墙变画板": "画到不该画的地方",
  "家具遭殃：桌腿玻璃都想画": "画到不该画的地方",
  "满地狼藉：颜料乱甩": "颜料弄得到处都是",
  "撕纸狂魔：纸被撕成碎片": "撕纸剪纸搞破坏",
  "乱线缠绕：像一团乱麻": "只会重复画一种东西",
  "无限画圈：只画圈圈": "只会重复画一种东西",
  "颜色混成黑泥": "颜料弄得到处都是",
  "水太多：纸被戳烂": "颜料弄得到处都是",
  "剪刀破坏：把画剪碎": "撕纸剪纸搞破坏",
  "问像不像：我画的狗像吗": "孩子问我像不像",
  "我不会：落笔前就受挫": "不敢画 / 说我不会",
  "简笔画陷阱：只想照模板": "不敢画 / 说我不会",
  "三分钟热度：画一下就走": "不敢画 / 说我不会",
  "颜料上身：涂满手脚": "颜料弄得到处都是",
  "锅碗瓢盆：非传统材料创作": "颜料弄得到处都是"
};

const filterCategories = {
  "墙面危机：白墙变画板": "画墙了",
  "家具遭殃：桌腿玻璃都想画": "画墙了",
  "满地狼藉：颜料乱甩": "弄脏了",
  "撕纸狂魔：纸被撕成碎片": "撕纸剪纸",
  "乱线缠绕：像一团乱麻": "只画一种",
  "无限画圈：只画圈圈": "只画一种",
  "颜色混成黑泥": "弄脏了",
  "水太多：纸被戳烂": "弄脏了",
  "剪刀破坏：把画剪碎": "撕纸剪纸",
  "问像不像：我画的狗像吗": "问像不像",
  "我不会：落笔前就受挫": "说我不会",
  "简笔画陷阱：只想照模板": "说我不会",
  "三分钟热度：画一下就走": "坐不住",
  "颜料上身：涂满手脚": "弄脏了",
  "锅碗瓢盆：非传统材料创作": "弄脏了"
};

const dontSay = {
  "墙面危机：白墙变画板": "不要说“你怎么又在墙上乱画”，也不要一边擦一边数落。",
  "家具遭殃：桌腿玻璃都想画": "不要说“这个很贵你知道吗”，孩子很难用物品价格理解边界。",
  "满地狼藉：颜料乱甩": "不要说“你故意捣乱”，先处理颜料飞溅的范围和方向。",
  "撕纸狂魔：纸被撕成碎片": "不要直接骂“破坏狂”，也不要把所有纸都突然抢走。",
  "乱线缠绕：像一团乱麻": "不要追问“这是什么”，也不要马上教他画一个标准形状。",
  "无限画圈：只画圈圈": "不要说“怎么老画这个”，重复本身就是孩子在练习控制。",
  "颜色混成黑泥": "不要说“别浪费颜料”，也不要立刻没收深色颜料。",
  "水太多：纸被戳烂": "不要说“你看又弄坏了”，这会让孩子只记住失败。",
  "剪刀破坏：把画剪碎": "不要吓唬“剪刀很危险你别碰”，要给短规则和可剪材料。",
  "问像不像：我画的狗像吗": "不要急着说“真像”或“不像”，也不要直接帮孩子改。",
  "我不会：落笔前就受挫": "不要说“这有什么难的”或“画丑点也没关系”。",
  "简笔画陷阱：只想照模板": "不要说“照着画才对”，也不要纠正每一个不合模板的地方。",
  "三分钟热度：画一下就走": "不要说“你怎么这么不专心”，短回合创作不等于能力差。",
  "颜料上身：涂满手脚": "不要尖叫“脏死了”，先确认眼口和地面安全。",
  "锅碗瓢盆：非传统材料创作": "不要说“这些破烂有什么用”，先区分能用和不能用。"
};

const categories = [
  "全部",
  "画墙了",
  "弄脏了",
  "只画一种",
  "撕纸剪纸",
  "问像不像",
  "说我不会",
  "坐不住"
];

cards.forEach((card) => {
  card.displayCategory = displayCategories[card.title] || card.category;
  card.filterCategory = filterCategories[card.title] || card.displayCategory;
  card.dontSay = dontSay[card.title] || card.dontSay || "不要急着否定、纠正或替孩子完成。";
});

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function makeList(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function getDisplayCategory(card) {
  return card.displayCategory || displayCategories[card.title] || card.category;
}

function getFilterCategory(card) {
  return card.filterCategory || filterCategories[card.title] || getDisplayCategory(card);
}

function getDontSay(card) {
  return card.dontSay || dontSay[card.title] || "不要急着否定、纠正或替孩子完成。";
}

function copyText(text, button) {
  const done = () => {
    const original = button.textContent;
    button.textContent = "已复制";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
    }, 1200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  } else {
    fallbackCopy(text, done);
  }
}

function fallbackCopy(text, done) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  done();
}

function cardMatches(card, query) {
  const displayCategory = getDisplayCategory(card);
  const filterCategory = getFilterCategory(card);
  const haystack = [
    card.category,
    displayCategory,
    filterCategory,
    card.title,
    card.age,
    card.scene,
    card.say,
    getDontSay(card),
    card.prep,
    card.materials,
    card.safety,
    card.close,
    principles[card.title] || "",
    ...card.steps,
    ...card.play
  ].join(" ");
  return haystack.includes(query);
}

function renderCards() {
  const query = searchInput.value.trim();
  const visible = cards.map((card, index) => ({ ...card, number: index + 1 })).filter((card) => {
    const categoryOk = activeCategory === "全部" || getFilterCategory(card) === activeCategory;
    const searchOk = query === "" || cardMatches(card, query);
    return categoryOk && searchOk;
  });

  cardGrid.innerHTML = visible.map((card) => `
    <article class="manual-card">
      <div class="card-number">${String(card.number).padStart(2, "0")}</div>
      <div class="card-meta">
        <span>${escapeHtml(card.age)}</span>
        <span>${escapeHtml(getFilterCategory(card))}</span>
      </div>
      <h3>${escapeHtml(card.title)}</h3>
      <p class="scene">${escapeHtml(card.scene)}</p>
      <div class="say-block">
        <p class="mini-title">当下先说这句</p>
        <p class="say">${escapeHtml(card.say)}</p>
        <button class="copy-button" type="button" data-copy="${card.number}">复制</button>
      </div>
      <p class="mini-title">不要说</p>
      <p class="dont-say">${escapeHtml(getDontSay(card))}</p>
      <p class="mini-title">为什么这样做</p>
      <p class="principle">${escapeHtml(principles[card.title] || "")}</p>
      <p class="mini-title">开玩前准备</p>
      <p class="prep">${escapeHtml(card.prep)}</p>
      <p class="mini-title">接下来三步</p>
      <ol>${makeList(card.steps)}</ol>
      <p class="mini-title">可以这样玩</p>
      <ul>${makeList(card.play)}</ul>
      <p class="mini-title">材料</p>
      <ul><li>${escapeHtml(card.materials)}</li></ul>
      <p class="safety"><strong>安全提醒：</strong>${escapeHtml(card.safety)}</p>
      <p class="close-note"><strong>最后这样收尾：</strong>${escapeHtml(card.close)}</p>
    </article>
  `).join("");

  if (visible.length === 0) {
    cardGrid.innerHTML = `<article class="manual-card empty-card"><h3>暂时没找到对应场景。</h3><p class="scene">你可以试试搜索：画墙、颜料、撕纸、圆圈、我不会。</p></article>`;
  }
}

function renderChips() {
  chips.innerHTML = categories.map((category) => `
    <button class="chip ${category === activeCategory ? "is-active" : ""}" type="button" data-category="${escapeHtml(category)}">${escapeHtml(category)}</button>
  `).join("");
}

chips.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderChips();
  renderCards();
});

searchInput.addEventListener("input", renderCards);
printButton.addEventListener("click", () => window.print());
saveManualButton?.addEventListener("click", () => window.print());
document.querySelector(".panic-actions")?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-quick-filter]");
  if (!button) return;
  activeCategory = button.dataset.quickFilter;
  searchInput.value = "";
  renderChips();
  renderCards();
  document.querySelector("#cards")?.scrollIntoView({ behavior: "smooth", block: "start" });
});
cardGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-copy]");
  if (!button) return;
  const card = cards[Number(button.dataset.copy) - 1];
  if (card) copyText(card.say, button);
});

renderChips();
renderCards();
