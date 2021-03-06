module.exports = {
  title: 'Archimedes',
  tagline: 'Give me a place to stand, and I shall move the earth.',
  url: 'https://archimedesfw.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'archimedes-projects',
  projectName: 'archimedes-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Archimedes Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          label: 'JavaScript',
          type: 'doc',
          docId: 'js/introduction',
          position: 'left'
        },
        {
          label: 'JVM',
          type: 'doc',
          docId: 'jvm/introduction',
          position: 'left'
        },
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
              label: 'JavaScript',
              to: 'docs/js/'
            },
            {
              label: 'JVM',
              to: 'docs/jvm/'
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
      copyright: `Copyright © ${new Date().getFullYear()} Autentia Real Business Solutions S.L. All rights reserved.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/archimedes-projects/archimedes-docs/edit/main/'
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/archimedes-projects/edit/main/blog/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
