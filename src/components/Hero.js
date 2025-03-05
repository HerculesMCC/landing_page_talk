import React, { Component } from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.scss';
import Link from 'next/link';
import AppLinks from '@/components/AppLinks';

class Hero extends Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <>
        <div id={styles.section_headline_container}>
          <div id={styles.section_headline}>
            <div id={styles.qr_code} className={`d-none d-lg-block`}>
                
              </div>
            
            <nav className="navbar text-center text-md-left">
            </nav>


            <div className='text-center'>
              <h1 className={`pt-1 px-3 pb-0`}>{title}</h1>
              <div className='row justify-content-center px-3'>
                <h2 className='col-md-10 col-lg-6 col-xl-5 ${styles.hero_subtitle}'>
                  {subtitle}
                </h2>
              </div>
              <div className='row justify-content-center px-3'>
                <p className='col-md-10 col-lg-6 col-xl-5 mt-3'>
                  Join a conversation, find your voice, connect with people who care.
                </p>
              </div>
            </div>

            <div className={`${styles.cover_imgs_container} text-center d-flex justify-content-center align-items-center animate-slide-up`}>
                <Image 
                  src="/images/phones/categoryPage.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={500}
                  width={260}
                  className='phone_shadow mt-5 d-none d-md-block'
                  style={{ 
                    maxWidth: '30%',
                    height: 'auto',
                  }}
                />
                <Image 
                  src="/images/phones/c.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={600}
                  width={310}
                  className='phone_shadow mx-2 mx-md-4'
                  style={{ 
                    maxWidth: '80%',
                    height: 'auto',
                    '@media (min-width: 768px)': {
                      maxWidth: '35%'
                    }
                  }}
                />
                <Image 
                  src="/images/phones/createSessionPage.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={500}
                  width={260}
                  className='phone_shadow mt-5 d-none d-md-block'
                  style={{ 
                    maxWidth: '30%',
                    height: 'auto',
                  }}
                />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
