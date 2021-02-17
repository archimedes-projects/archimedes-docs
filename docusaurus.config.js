module.exports = {
  title: 'Archimedes',
  tagline: 'Give me a place to stand, and I shall move the earth.',
  url: 'https://archimedesfw.io',
  baseUrl: '/archimedes-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'archimedes-projects',
  projectName: 'archimedes-docs',
  themeConfig: {
    navbar: {
      title: 'Archimedes',
      logo: {
        alt: 'Archimedes Logo',
        src: 'img/logo.png'
      },
      items: [
        {
          docId: 'introduction',
          type: 'doc',
          label: 'General concepts',
          position: 'left'
        },
        {
          label: 'JavaScript',
          type: 'doc',
          docId: 'js/introduction',
          position: 'left'
        },
        {
          label: 'Kotlin',
          type: 'doc',
          docId: 'kt/introduction',
          position: 'left'
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/archimedes-projects',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'General concepts',
              to: 'docs/'
            },
            {
              label: 'JavaScript',
              to: 'docs/js/'
            },
            {
              label: 'Kotlin',
              to: 'docs/kt/'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/archimedes'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/archimedesfw'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/archimedes-projects'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()}`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/archimedes-projects/archimedes-docs/edit/master/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/archimedes-projects/edit/master/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
