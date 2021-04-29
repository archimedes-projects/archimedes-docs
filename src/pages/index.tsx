import React, { FC } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { bind } from '../utils/bind'

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

  const features = [
    {
      title: 'What?',
      description: (
        <>
          Archimedes is a series of architectural concepts that are implemented in different languages. Using a given
          Archimedes implementation provides a set of <strong>solid</strong> and <strong>flexible</strong> architectural
          pieces.
        </>
      )
    },
    {
      title: 'Why?',
      description: (
        <>
          Because Archimedes will make your projects easier <strong>to reason with</strong>, easier to{' '}
          <strong>change existing code</strong> and easier to <strong>add new functionalities.</strong>
        </>
      )
    },
    {
      title: 'How?',
      description: (
        <>
          Depending on your type of project, choose an implementation:{' '}
          <Link to={useBaseUrl('docs/js/')}>JavaScript</Link> or <Link to={useBaseUrl('docs/jvm/')}>JVM</Link>.
        </>
      )
    }
  ]

  return (
    <Layout title={siteConfig.title} description="Archimedes: Give me a place to stand, and I shall move the earth.">
      <header className={cx('hero-banner')}>
        <div className={cx('hero-container')}>
          <img className={cx('hero-image')} src="/img/logo.svg" alt="Logo Archimedes" />
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={cx('buttons')}>
            <Link className={clsx('button button--primary button--lg')} to={useBaseUrl('docs/js/')}>
              JavaScript
            </Link>
            <Link className={clsx('button button--primary button--lg')} to={useBaseUrl('docs/jvm/')}>
              JVM
            </Link>
          </div>
        </div>
        <img className={cx('hero-image')} src="/img/archimedes-lever.svg" alt="Archimedes lever" />
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
