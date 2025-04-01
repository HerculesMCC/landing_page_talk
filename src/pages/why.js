import React from 'react';
import Head from 'next/head';
import styles from '../styles/Why.module.scss';

const Why = () => {
  return (
    <>
      <Head>
        <title>why talk should exist?</title>
        <meta name="description" content="Discover why talk should exist?" />
      </Head>

      <div className={`${styles.why_container} questrial`}>
        <section className={styles.hero_section}>
          <div className="container">
            <div className={styles.hero_content}>
              <p className={`${styles.hero_text} text-center questrial`} style={{ 
                fontSize: '1.5rem', 
                lineHeight: '1.5',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
                fontWeight: '300',
                color: 'black'
              }}>
                <span className={styles.line} style={{ display: 'block', width: '100%', textAlign: 'center', marginBottom: '0' }}>
                  some people have stories to share,
                </span>
                <span className={styles.line} style={{ display: 'block', width: '100%', textAlign: 'center', marginBottom: '1.5rem' }}>
                  but no one to share them with.
                </span>
                <span className={styles.line} style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                  tomorrow, they'll use <strong style={{ fontWeight: '700' }}>talk</strong>.
                </span>
                <span className={styles.line} style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                  this app connects lives.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.reasons_section}>
          <div className="container">
            <h2>Our Values</h2>
            <div className="row gy-4">
              <div className="col-md-4">
                <div className={styles.reason_card}>
                  <h3>Anonymity</h3>
                  <p>This way, you can truly be yourself.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.reason_card}>
                  <h3>Humility</h3>
                  <p>Everyone is equal here.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className={styles.reason_card}>
                  <h3>Sincerity</h3>
                  <p>People connect with you for your thoughts and ideas, not your appearance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.mission_section}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2>Our Mission</h2>
                <p>
                  giving people a place to talk sincerely.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container" style={{ textAlign: 'right', marginTop: '3rem', marginBottom: '2rem' }}>
          <p style={{ fontStyle: 'italic', color: '#666' }}>
            Thanks for reading,<br />
            from <a href="https://www.linkedin.com/in/kyllian-rousseleau" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>kr</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Why; 