import React from 'react';
import Theme from 'rspress/theme';
import './afterFeatures.css';

const HeroBanner = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = React.useState({ x: -1000, y: -1000 });
  const [isDark, setIsDark] = React.useState(false);

  // 检测暗黑模式
  React.useEffect(() => {
    const checkDarkMode = () => {
      // 通过检查 html 元素的 color-scheme 属性来判断主题
      const htmlElement = document.documentElement;
      const colorScheme = getComputedStyle(htmlElement).colorScheme;
      
      // 如果 color-scheme 包含 'dark'，则为暗黑模式
      // 如果 color-scheme 为 'light' 或不包含 'dark'，则为亮色模式
      const isDarkMode = colorScheme.includes('dark') && !colorScheme.includes('light');
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // 监听主题变化 - 监听可能影响 color-scheme 的属性变化
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'style'],
    });

    // 监听系统主题变化
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => checkDarkMode();
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置 canvas 尺寸
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 850;
    };
    updateSize();
    window.addEventListener('resize', updateSize);

    // 雪花类
    class Snowflake {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      swingSpeed: number;
      swingAmount: number;
      angle: number;

      constructor(canvasWidth: number, canvasHeight: number, randomY = true) {
        this.x = Math.random() * canvasWidth;
        this.y = randomY ? Math.random() * canvasHeight : -10;
        this.size = Math.random() * 3 + 2;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.6 + 0.4;
        this.swingSpeed = Math.random() * 0.01 + 0.005;
        this.swingAmount = Math.random() * 0.8 + 0.4;
        this.angle = Math.random() * Math.PI * 2;
      }

      update(mouseX: number, mouseY: number, width: number, height: number) {
        // 摆动效果
        this.angle += this.swingSpeed;
        this.x += Math.sin(this.angle) * this.swingAmount + this.speedX;
        
        // 鼠标交互 - 雪花被吹散
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 120;

        if (distance < maxDistance && mouseX !== -1000) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          // 雪花被推开，并且加速下落
          this.x -= Math.cos(angle) * force * 4;
          this.y -= Math.sin(angle) * force * 2;
          this.speedY += force * 0.5;
        } else {
          // 恢复正常下落速度
          this.speedY = Math.max(this.speedY * 0.98, Math.random() * 1 + 0.5);
        }

        this.y += this.speedY;

        // 边界检测 - 重置到顶部
        if (this.y > height) {
          this.y = -10;
          this.x = Math.random() * width;
          this.speedY = Math.random() * 1 + 0.5;
        }
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
      }

      draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        // 暗黑模式下雪花颜色稍微调暗一点
        ctx.fillStyle = isDarkMode ? '#e8f4f8' : '#ffffff';
        
        // 绘制雪花形状
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI * 2 * i) / 6;
          const x = this.x + Math.cos(angle) * this.size;
          const y = this.y + Math.sin(angle) * this.size;
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fill();
        
        // 中心圆点
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // 创建雪花
    const snowflakes: Snowflake[] = [];
    for (let i = 0; i < 100; i++) {
      snowflakes.push(new Snowflake(canvas.width, canvas.height, true));
    }

    // 动画循环
    let animationId: number;

    const animate = () => {
      // 根据主题设置背景渐变
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      
      if (isDark) {
        // 暗黑模式：深蓝到深灰
        gradient.addColorStop(0, '#1a2332');
        gradient.addColorStop(1, '#0f1419');
      } else {
        // 亮色模式：更深的蓝色渐变
        gradient.addColorStop(0, '#64b5f6');
        gradient.addColorStop(1, '#bbdefb');
      }
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 绘制雪花
      snowflakes.forEach((snowflake) => {
        snowflake.update(mousePos.x, mousePos.y, canvas.width, canvas.height);
        snowflake.draw(ctx, isDark);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos, isDark]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        width: '100%',
        height: '950px',
        position: 'absolute',
        top: -100,
        zIndex: -1,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

// 以下展示所有的 Props
const Layout = () => (
  <Theme.Layout />
);

const AfterFeaturesContent = () => {
  const features = [
    {
      title: '图文并茂效果',
      subtitle: '丰富的标注工具',
      description: '提供矩形、圆形、箭头、文字、马赛克等多种标注工具，满足各种截图编辑需求。支持自定义颜色、线条粗细等参数，让你的截图更加专业。',
      image: '/home/SnowShot_2025-10-29_23-09-43.webp',
      reverse: false,
    },
    {
      title: '截图历史',
      subtitle: '记录每一次截图',
      description: '自动保存截图历史，支持按时间、关键词搜索。再也不用担心找不到之前的截图，让你的工作更加高效。',
      image: '/home/SnowShot_2025-10-29_23-09-44.webp',
      reverse: true,
    },
    {
      title: '插件生态',
      subtitle: '扩展无限可能',
      description: '通过插件系统获取视频录制、文本识别、翻译、AI 对话等功能支持。安装包体积小巧，下载快速，按需安装插件，打造属于你的专属截图工具。',
      image: '/home/SnowShot_2025-10-29_23-09-45.webp',
      reverse: false,
    },
    {
      title: '多种截图模式',
      subtitle: '随心所欲，精准捕捉',
      description: '支持区域截图、滚动截图、全屏截图、焦点窗口截图等多种截图模式。无论是捕捉整个屏幕、特定窗口，还是长网页内容，都能轻松完成，满足各种截图场景需求。',
      image: '/home/SnowShot_2025-10-29_23-09-46.webp',
      reverse: true,
    },
    {
      title: '文档识别',
      subtitle: '一键提取表格、数学公式',
      description: '智能识别截图中的文字、表格和数学公式，支持多种文档格式转换。让纸质文档数字化变得简单，提高信息整理效率，一键复制即可使用。',
      image: '/home/SnowShot_2025-10-29_23-09-47.webp',
      reverse: false,
    },
    {
      title: '视频录制',
      subtitle: '高清流畅，随心录制',
      description: '精细设计的录制工具，为轻量录制场景提供了最佳支持。一键制作教学视频、演示文稿，让分享更生动。',
      image: '/home/SnowShot_2025-10-29_23-09-48.webp',
      reverse: true,
    },
    {
        title: '自定义外观配色',
        subtitle: '个性化定制，专属你的风格',
        description: '支持明暗主题切换，提供多种预设配色方案，也可以自定义工具栏颜色、背景色等。打造独一无二的界面风格，让你的截图工具与众不同。',
        image: '/home/SnowShot_2025-10-29_23-09-49.webp',
        reverse: false,
      },
  ];

  return (
    <div className="after-features-container">
      <div className="after-features-header">
        <h2 className="after-features-title">强大功能，应有尽有</h2>
        <p className="after-features-subtitle">
          专注于截图体验的每一个细节，让工作更高效
        </p>
      </div>

      <div className="features-list">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${feature.reverse ? 'reverse' : ''}`}
          >
            <div className="feature-content">
              <div className="feature-text">
                <span className="feature-badge">{feature.title}</span>
                <h3 className="feature-heading">{feature.subtitle}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-image">
                <div className="image-wrapper">
                  <img src={feature.image} alt={feature.subtitle} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="feature-grid-section">
        <h2 className="feature-grid-title">不止于此，更多功能等你探索</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3 className="feature-card-title">固定到屏幕</h3>
            <p className="feature-card-description">将截图固定显示在屏幕最前端，方便对照查看，支持随时调整位置和大小</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-card-title">图片翻译</h3>
            <p className="feature-card-description">智能识别图片中的文字并翻译成目标语言，支持多种语言互译</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-card-title">二维码识别</h3>
            <p className="feature-card-description">快速识别截图中的二维码内容，一键复制链接或文本信息</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-card-title">颜色拾取</h3>
            <p className="feature-card-description">精准提取截图中的任意颜色值，支持多种颜色格式，方便设计工作</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-card-title">AI 对话</h3>
            <p className="feature-card-description">基于截图内容进行智能对话，获取相关信息、解答疑问，让截图更智能</p>
          </div>

          <div className="feature-card">
            <h3 className="feature-card-title">全屏绘制</h3>
            <p className="feature-card-description">在屏幕上自由绘制标注，演示讲解更直观，支持多种画笔和颜色</p>
          </div>
        </div>
      </div>

      <div className="features-bottom">
        <div className="bottom-cta">
          <h3>准备好开始了吗？</h3>
          <p>立即下载 Snow Shot，体验全新的截图方式</p>
          <div className="cta-buttons">
            <a href="/download/" className="cta-button primary">
              立即下载
            </a>
            <a href="/guide/" className="cta-button secondary">
              查看文档
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeLayout = () => (
  <Theme.HomeLayout 
    beforeHero={<HeroBanner />}
    afterFeatures={<AfterFeaturesContent />} 
  />
);

export default {
  ...Theme,
  Layout,
  HomeLayout,
};

export * from 'rspress/theme';