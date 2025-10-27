import Theme from 'rspress/theme';

// 以下展示所有的 Props
const Layout = () => (
  <Theme.Layout
  />
);

const HomeLayout = () => (
  <Theme.HomeLayout
  />
);

export default {
  ...Theme,
  Layout,
};

export * from 'rspress/theme';