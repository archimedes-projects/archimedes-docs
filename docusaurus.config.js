module.exports = {
  title: 'Archimedes',
  tagline: 'Give me a place to stand, and I shall move the earth.',
  url: 'https://archimedesfw.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'archimedes-projects',
  projectName: 'archimedes',
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
          label: 'Docs',
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
              label: 'Style Guide',
              to: 'docs/'
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
      copyright: `Copyright © ${new Date().getFullYear()} Archimedes, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/archimedes-projects/archimedes-docs/edit/master/website/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/archimedes-projects/edit/master/website/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
