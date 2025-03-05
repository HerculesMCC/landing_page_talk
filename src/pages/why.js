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
            <h1 className="text-center mb-4">why</h1>
            <p className="text-center lead mb-5">
              some people have things to say but nobody to talk to. <br/>
              tomorrow, they will use talk. 
            </p>
          </div>
        </section>

        <section className={styles.reasons_section}>
          <div className="container">
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
      </div>
    </>
  );
};

export default Why; 