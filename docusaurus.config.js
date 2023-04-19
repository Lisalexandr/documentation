/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'QA DOCS',
  tagline: "Welcome to QA and Test Automation documentation storage",
  url: 'http://localhost:3000',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Uroboros.jpg',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/Uroboros.jpg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Contribution',
          position: 'left',
          label: 'Docs',
          activeBaseRegex: `/docs/`
        },
        {
          type: 'doc',
          docsPluginId: 'docs-guides',
          docId: 'Guides',
          label: 'Guides',
          activeBaseRegex: `/docs-guides/`
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Overview',
              to: '/docs/Contribution',
            },
            {
              label: 'Repository',
              href: 'https://github.com/Lisalexandr/documentation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Lisalexandr/documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-guides',
        path: 'docs-guides',
        routeBasePath: 'docs-guides',
        sidebarPath: require.resolve('./sidebarsGuides.js'),
      },
    ]
  ]
};
