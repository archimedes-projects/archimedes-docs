import React, { FC } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { bind } from '../utils/bind'

const features = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your website up and running
        quickly.
      </>
    )
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your docs into the{' '}
        <code>docs</code> directory.
      </>
    )
  },
  {
    title: 'Powered by React',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same
        header and footer.
      </>
    )
  }
]

const Feature: FC<{ title: string; description: JSX.Element }> = ({ title, description }) => (
  <div className={clsx('col col--4', cx('feature'))}>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
)

const cx = bind(styles)

const Home: FC = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title={siteConfig.title} description="Archimedes: Give me a place to stand, and I shall move the earth.">
      <header className={clsx('hero hero--primary', cx('hero-banner'))}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={cx('buttons')}>
            <Link className={clsx('button button--outline button--secondary button--lg')} to={useBaseUrl('docs/')}>
              General concepts
            </Link>
            <Link className={clsx('button button--outline button--lg')} to={useBaseUrl('docs/js/')}>
              JavaScript
            </Link>
            <Link className={clsx('button button--outline button--lg')} to={useBaseUrl('docs/kt/')}>
              Kotlin
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={cx('features')}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home
