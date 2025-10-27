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
