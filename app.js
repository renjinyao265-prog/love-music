// ============================================================
//  🎵 歌词爱心墙 - 主逻辑
// ============================================================

// ========== 歌词数据 ==========
const songs = [
    {
        name: "晴天",
        artist: "周杰伦",
        lyric: "故事的小黄花\n从出生那年就飘着",
        fullLyrics: ["故事的小黄花", "从出生那年就飘着", "童年的荡秋千", "随记忆一直晃到现在"],
        theme: "romantic",
        emoji: "🌤️",
        color: "tag-yellow"
    },
    {
        name: "起风了",
        artist: "买辣椒也用券",
        lyric: "我曾将青春翻涌成她\n也曾指尖弹出盛夏",
        fullLyrics: ["我曾将青春翻涌成她", "也曾指尖弹出盛夏", "心之所动 且就随缘去吧"],
        theme: "dreamy",
        emoji: "🍃",
        color: "tag-green"
    },
    {
        name: "孤勇者",
        artist: "陈奕迅",
        lyric: "爱你孤身走暗巷\n爱你不跪的模样",
        fullLyrics: ["爱你孤身走暗巷", "爱你不跪的模样", "爱你对峙过绝望", "不肯哭一场"],
        theme: "night",
        emoji: "⚔️",
        color: "tag-indigo"
    },
    {
        name: "稻香",
        artist: "周杰伦",
        lyric: "还记得你说家是唯一的城堡\n随着稻香河流继续奔跑",
        fullLyrics: ["还记得你说家是唯一的城堡", "随着稻香河流继续奔跑", "微微笑 小时候的梦我知道", "不要哭让萤火虫带着你逃跑"],
        theme: "warm",
        emoji: "🌾",
        color: "tag-orange"
    },
    {
        name: "漠河舞厅",
        artist: "柳爽",
        lyric: "如果有时间\n你会来看一看我吧",
        fullLyrics: ["如果有时间", "你会来看一看我吧", "看大雪如何衰老的", "我的眼睛如何融掉"],
        theme: "sad",
        emoji: "❄️",
        color: "tag-blue"
    },
    {
        name: "错位时空",
        artist: "艾辰",
        lyric: "我吹过你吹过的晚风\n那我们算不算相拥",
        fullLyrics: ["我吹过你吹过的晚风", "那我们算不算相拥", "如梦如幻如泡影", "终究是镜花水月一场空"],
        theme: "romantic",
        emoji: "🌙",
        color: "tag-purple"
    },
    {
        name: "踏山河",
        artist: "是七叔呢",
        lyric: "而我枪出如龙 乾坤撼动\n一啸破苍穹",
        fullLyrics: ["而我枪出如龙 乾坤撼动", "一啸破苍穹", "长枪刺破云霞", "放下一生牵挂"],
        theme: "night",
        emoji: "🏔️",
        color: "tag-red"
    },
    {
        name: "可能",
        artist: "程响",
        lyric: "可能南方的阳光\n照着北方的风",
        fullLyrics: ["可能南方的阳光", "照着北方的风", "可能时光被秋风藏起", "留下冬天的梦"],
        theme: "dreamy",
        emoji: "✨",
        color: "tag-cyan"
    },
    {
        name: "晚风心里吹",
        artist: "陈婧霏",
        lyric: "晚风心里吹\n吹走愁与悲",
        fullLyrics: ["晚风心里吹", "吹走愁与悲", "月色多温柔", "如你眼眸"],
        theme: "fresh",
        emoji: "🌅",
        color: "tag-teal"
    },
    {
        name: "半生雪",
        artist: "是七叔呢",
        lyric: "半生风雪 吹不散花落时节的眼泪",
        fullLyrics: ["半生风雪", "吹不散花落时节的眼泪", "半生回忆", "抹不去岁月留下的伤悲"],
        theme: "sad",
        emoji: "🌸",
        color: "tag-pink"
    },
    {
        name: "下山",
        artist: "要不要买菜",
        lyric: "要想练就绝世武功\n就要忍受常人难忍受的痛",
        fullLyrics: ["要想练就绝世武功", "就要忍受常人难忍受的痛", "师傅喜欢喝的茶叫做乌龙", "衣服爱穿中国红"],
        theme: "happy",
        emoji: "⛰️",
        color: "tag-gold"
    },
    {
        name: "星辰大海",
        artist: "黄霄雲",
        lyric: "我向你奔赴而来\n你就是星辰大海",
        fullLyrics: ["我向你奔赴而来", "你就是星辰大海", "我眼中炽热的恒星", "长夜里照我前行"],
        theme: "night",
        emoji: "🌊",
        color: "tag-blue"
    },
    {
        name: "告白气球",
        artist: "周杰伦",
        lyric: "亲爱的爱上你\n从那天起 甜蜜的很轻易",
        fullLyrics: ["亲爱的爱上你", "从那天起 甜蜜的很轻易", "亲爱的别任性", "你的眼睛在说我愿意"],
        theme: "sweet",
        emoji: "🎈",
        color: "tag-rose"
    },
    {
        name: "光年之外",
        artist: "邓紫棋",
        lyric: "缘分让我们相遇乱世以外\n命运却要我们危难中相爱",
        fullLyrics: ["缘分让我们相遇乱世以外", "命运却要我们危难中相爱", "也许未来遥远在光年之外", "我愿守候未知里为你等待"],
        theme: "dreamy",
        emoji: "🌌",
        color: "tag-indigo"
    },
    {
        name: "少年",
        artist: "梦然",
        lyric: "我还是从前那个少年\n没有一丝丝改变",
        fullLyrics: ["我还是从前那个少年", "没有一丝丝改变", "时间只不过是考验", "种在心中信念丝毫未减"],
        theme: "happy",
        emoji: "🧑",
        color: "tag-orange"
    },
    {
        name: "飞鸟和蝉",
        artist: "任然",
        lyric: "你骄傲的飞远\n我栖息的夏天",
        fullLyrics: ["你骄傲的飞远", "我栖息的夏天", "再见来不及握手", "来不及说一句再见"],
        theme: "sad",
        emoji: "🐦",
        color: "tag-teal"
    },
    {
        name: "白月光与朱砂痣",
        artist: "大籽",
        lyric: "白月光在照耀\n你才想起她的好",
        fullLyrics: ["白月光在照耀", "你才想起她的好", "朱砂痣久难消", "你是否能知道"],
        theme: "romantic",
        emoji: "💎",
        color: "tag-rose"
    },
    {
        name: "可可托海的牧羊人",
        artist: "王琪",
        lyric: "心上人 我在可可托海等你\n他们说 你嫁到了伊犁",
        fullLyrics: ["心上人 我在可可托海等你", "他们说 你嫁到了伊犁", "是不是因为那里有美丽的那拉提", "还是那里的杏花才能酿出你要的甜蜜"],
        theme: "warm",
        emoji: "🐑",
        color: "tag-gold"
    }
];

// ========== 爱心形状坐标点 ==========
// 基于心形曲线方程生成，归一化到 0~1 范围
function generateHeartPoints(count) {
    const points = [];
    for (let i = 0; i < count; i++) {
        const t = (i / count) * Math.PI * 2;
        // 心形参数方程
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
        // 归一化到 0~1（x: -16~16, y: -17~15）
        const nx = (x + 16) / 32;
        const ny = (y + 17) / 32;
        points.push({ x: nx, y: ny });
    }
    return points;
}

// ========== 全局变量 ==========
let currentSong = null;
let isPlaying = false;
let animationTimer = null;
let progressTimer = null;

// ========== DOM 元素 ==========
const mainPage = document.getElementById('mainPage');
const detailPage = document.getElementById('detailPage');
const heartContainer = document.getElementById('heartContainer');
const particlesContainer = document.getElementById('particlesContainer');
const lyricsContainer = document.getElementById('lyricsContainer');
const backBtn = document.getElementById('backBtn');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const playText = document.getElementById('playText');
const songName = document.getElementById('songName');
const songArtist = document.getElementById('songArtist');
const songCover = document.getElementById('songCover');
const progressFill = document.getElementById('progressFill');

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    createHeartTags();
    bindEvents();
});

// ========== 创建爱心标签 ==========
function createHeartTags() {
    const containerWidth = heartContainer.offsetWidth;
    const containerHeight = heartContainer.offsetHeight;
    const tagCount = songs.length;

    // 生成爱心轮廓点 + 内部填充点
    const outlinePoints = generateHeartPoints(12);
    const innerPoints = generateInnerPoints(6);

    const allPoints = [...outlinePoints, ...innerPoints];

    songs.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = `tag-card ${song.color}`;
        card.style.animationDelay = `${index * 0.08}s`;

        // 随机旋转角度
        const rotate = (Math.random() - 0.5) * 16;
        card.style.setProperty('--rotate', `${rotate}deg`);
        card.style.transform = `rotate(${rotate}deg)`;

        // 获取爱心上的位置
        const point = allPoints[index % allPoints.length];
        const cardWidth = 130;
        const cardHeight = 50;
        const x = point.x * containerWidth - cardWidth / 2 + (Math.random() - 0.5) * 30;
        const y = point.y * containerHeight - cardHeight / 2 + (Math.random() - 0.5) * 20;

        card.style.left = `${Math.max(0, Math.min(x, containerWidth - cardWidth))}px`;
        card.style.top = `${Math.max(0, Math.min(y, containerHeight - cardHeight))}px`;

        // 歌词文本（取第一行）
        const firstLine = song.lyric.split('\n')[0];
        card.innerHTML = `
            ${firstLine}
            <span class="tag-song">— ${song.name}</span>
        `;

        card.addEventListener('click', () => openDetail(song));
        heartContainer.appendChild(card);
    });
}

// 生成爱心内部填充点
function generateInnerPoints(count) {
    const points = [];
    for (let i = 0; i < count; i++) {
        // 在爱心内部随机生成点
        let x, y;
        let attempts = 0;
        do {
            x = Math.random();
            y = Math.random();
            attempts++;
        } while (!isInsideHeart(x, y) && attempts < 100);

        if (attempts < 100) {
            points.push({ x, y });
        }
    }
    return points;
}

// 检查点是否在爱心内部
function isInsideHeart(nx, ny) {
    // 将归一化坐标转回心形方程坐标
    const x = (nx * 32) - 16;
    const y = -((ny * 32) - 17);
    // 心形隐式方程: (x² + y² - 1)³ - x²y³ < 0
    const scale = 1 / 16;
    const sx = x * scale;
    const sy = y * scale;
    const val = Math.pow(sx * sx + sy * sy - 1, 3) - sx * sx * sy * sy * sy;
    return val < 0;
}

// ========== 绑定事件 ==========
function bindEvents() {
    backBtn.addEventListener('click', closeDetail);
    playBtn.addEventListener('click', togglePlay);
}

// ========== 打开详情页 ==========
function openDetail(song) {
    currentSong = song;
    stopAnimation();

    // 设置主题
    detailPage.className = `detail-page theme-${song.theme}`;

    // 设置歌曲信息
    songName.textContent = song.name;
    songArtist.textContent = song.artist;
    songCover.textContent = song.emoji;

    // 生成歌词
    lyricsContainer.innerHTML = '';
    song.fullLyrics.forEach((line, index) => {
        const lineEl = document.createElement('div');
        lineEl.className = 'lyric-line';
        lineEl.dataset.index = index;

        // 逐字拆分
        line.split('').forEach((char, charIndex) => {
            const span = document.createElement('span');
            span.className = 'lyric-char';
            span.textContent = char;
            span.dataset.lineIndex = index;
            span.dataset.charIndex = charIndex;
            lineEl.appendChild(span);
        });

        lyricsContainer.appendChild(lineEl);
    });

    // 生成粒子
    createParticles(song.theme);

    // 重置播放状态
    playIcon.textContent = '▶';
    playText.textContent = '播放歌词动画';
    progressFill.style.width = '0%';
    isPlaying = false;

    // 显示详情页
    mainPage.classList.add('hidden');
    setTimeout(() => {
        detailPage.classList.add('active');
    }, 100);
}

// ========== 关闭详情页 ==========
function closeDetail() {
    stopAnimation();
    detailPage.classList.remove('active');
    setTimeout(() => {
        mainPage.classList.remove('hidden');
        particlesContainer.innerHTML = '';
    }, 300);
}

// ========== 切换播放 ==========
function togglePlay() {
    if (isPlaying) {
        stopAnimation();
        playIcon.textContent = '▶';
        playText.textContent = '播放歌词动画';
    } else {
        startAnimation();
        playIcon.textContent = '⏸';
        playText.textContent = '暂停';
    }
    isPlaying = !isPlaying;
}

// ========== 开始歌词动画 ==========
function startAnimation() {
    if (!currentSong) return;

    const lines = document.querySelectorAll('.lyric-line');
    const totalLines = lines.length;
    const lineDuration = 2500; // 每行持续时间
    const totalDuration = totalLines * lineDuration;

    let currentLine = 0;

    // 进度条
    const startTime = Date.now();
    progressTimer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min((elapsed / totalDuration) * 100, 100);
        progressFill.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(progressTimer);
            stopAnimation();
            playIcon.textContent = '▶';
            playText.textContent = '重新播放';
            isPlaying = false;
        }
    }, 50);

    // 逐行逐字动画
    function animateLine() {
        if (currentLine >= totalLines) return;

        // 更新行状态
        lines.forEach((line, i) => {
            line.classList.remove('active', 'past');
            if (i < currentLine) line.classList.add('past');
            if (i === currentLine) line.classList.add('active');
        });

        // 逐字高亮
        const chars = lines[currentLine].querySelectorAll('.lyric-char');
        const charDelay = lineDuration / (chars.length + 2);

        chars.forEach((char, i) => {
            setTimeout(() => {
                char.classList.add('highlight');
            }, i * charDelay);
        });

        currentLine++;

        if (currentLine < totalLines) {
            animationTimer = setTimeout(animateLine, lineDuration);
        }
    }

    animateLine();
}

// ========== 停止动画 ==========
function stopAnimation() {
    clearTimeout(animationTimer);
    clearInterval(progressTimer);
    animationTimer = null;
    progressTimer = null;
}

// ========== 创建粒子背景 ==========
function createParticles(theme) {
    particlesContainer.innerHTML = '';

    const themeConfig = {
        romantic: {
            colors: ['#ff6b9d', '#ff85b1', '#ffa0c4', '#ffb6d5', '#ff4081'],
            shapes: ['circle', 'heart'],
            count: 35
        },
        sad: {
            colors: ['#64b5f6', '#90caf9', '#bbdefb', '#42a5f5', '#e3f2fd'],
            shapes: ['circle'],
            count: 25
        },
        happy: {
            colors: ['#ffd54f', '#ffca28', '#ffc107', '#ffb300', '#ffe082'],
            shapes: ['circle', 'star'],
            count: 30
        },
        dreamy: {
            colors: ['#ce93d8', '#ba68c8', '#ab47bc', '#e1bee7', '#9c27b0'],
            shapes: ['circle', 'star'],
            count: 30
        },
        fresh: {
            colors: ['#80cbc4', '#4db6ac', '#26a69a', '#a5d6a7', '#66bb6a'],
            shapes: ['circle'],
            count: 25
        },
        warm: {
            colors: ['#ffab91', '#ff8a65', '#ff7043', '#ffccbc', '#d4a373'],
            shapes: ['circle'],
            count: 25
        },
        night: {
            colors: ['#b39ddb', '#9575cd', '#7e57c2', '#d1c4e9', '#e8eaf6'],
            shapes: ['circle', 'star'],
            count: 35
        },
        sweet: {
            colors: ['#f48fb1', '#ec407a', '#f06292', '#f8bbd0', '#ff80ab'],
            shapes: ['circle', 'heart'],
            count: 35
        }
    };

    const config = themeConfig[theme] || themeConfig.dreamy;

    for (let i = 0; i < config.count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 12 + 4;
        const left = Math.random() * 100;
        const duration = Math.random() * 8 + 6;
        const delay = Math.random() * 8;
        const color = config.colors[Math.floor(Math.random() * config.colors.length)];
        const shape = config.shapes[Math.floor(Math.random() * config.shapes.length)];

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.background = color;
        particle.style.boxShadow = `0 0 ${size}px ${color}`;

        if (shape === 'heart') {
            particle.classList.add('heart-shape');
            particle.style.setProperty('--heart-color', color);
            // 用伪元素显示爱心
            particle.style.background = 'transparent';
            particle.style.boxShadow = 'none';
            particle.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
        } else if (shape === 'star') {
            particle.classList.add('star-shape');
        }

        particlesContainer.appendChild(particle);
    }
}
