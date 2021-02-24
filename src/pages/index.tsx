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
    title: 'What is Archimedes?',
    description: (
      <>
        Archimedes is a series of architectural concepts that are implemented in different languages. Using a given
        Archimedes implementation provides a set of <strong>solid</strong> and <strong>flexible</strong> architectural
        pieces.
      </>
    )
  },
  {
    title: 'Why should I use Archimedes?',
    description: (
      <>
        Because Archimedes will make your projects easier <strong>to reason with</strong>, easier to{' '}
        <strong>change existing code</strong> and easier to <strong>add new functionalities.</strong>
      </>
    )
  },
  {
    title: 'How can I use Archimedes?',
    description: (
      <>
        Read through the general concepts to understand on what are the concepts on which Archimede is based on and then
        chose an implementation.
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
            <Link className={clsx('button button--secondary button--lg')} to={useBaseUrl('docs/')}>
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
