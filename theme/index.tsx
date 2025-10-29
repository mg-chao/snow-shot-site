import Theme from 'rspress/theme';
import './afterFeatures.css';

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
  <Theme.HomeLayout afterFeatures={<AfterFeaturesContent />} />
);

export default {
  ...Theme,
  Layout,
  HomeLayout,
};

export * from 'rspress/theme';