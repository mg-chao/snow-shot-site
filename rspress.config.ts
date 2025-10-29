import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
	lang: "zh-Hans",
	root: path.join(__dirname, "docs"),
	globalStyles: path.join(__dirname, "styles/index.css"),
	title: "Snow Shot",
	icon: "/snow-shot.png",
	logo: {
		light: "/app-icon-nav.png",
		dark: "/app-icon-nav-dark.png",
	},
	themeConfig: {
		locales: [
			{
				lang: "zh-Hans",
				label: "简体中文",
				searchPlaceholderText: "搜索",
				searchNoResultsText: "未搜索到相关结果",
				searchSuggestedQueryText: "可更换不同的关键字后重试",
				lastUpdatedText: "最后更新时间",
				prevPageText: "上一篇",
				nextPageText: "下一篇",
				outlineTitle: "页面导航",
			},
		],
		socialLinks: [
			{
				icon: "github",
				mode: "link",
				content: "https://github.com/mg-chao/snow-shot",
			},
		],
		footer: {
			message:
				'<div style="display: flex; align-items: center; justify-content: center; gap: 12px;"><span>© 2025 Snow Shot</span><div style="width: 1px; height: 14px; background-color: currentColor; opacity: 0.3;"></div><a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">赣ICP备2021006312号-3</a></div>',
		},
	},
	locales: [
		// {
		//   lang: 'en',
		//   // 导航栏切换语言的标签
		//   label: 'English',
		//   title: 'Snow Shot',
		//   description: 'Simple and elegant screenshot tool',
		// },
		{
			lang: "zh-Hans",
			label: "简体中文",
			title: "Snow Shot",
			description: "简单优雅的截图工具",
		},
	],
});
