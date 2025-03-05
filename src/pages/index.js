import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import NodeOverlay from '@/components/NodeOverlay';
import UseCase from '@/components/UseCase';
import FaqItem from '@/components/FaqItem';
import Hero from '@/components/Hero';
import AppLinks from '@/components/AppLinks';
import Link from 'next/link';
import Review from '@/components/Review';
import ConvertkitEmailForm from '@/components/ConvertkitEmailForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main className={styles.main}>     
        <NodeOverlay />
        <Hero 
          title="talk"
          subtitle="think it, say it"
        />
        
        <div className="spacer d-none d-md-block py-7"></div>
        <div className="spacer d-md-none py-5"></div>
 
        <div id={styles.section_features} className="py-5 mt-5">
          <div className="container">
            <h2 className="h2-lg text-center mb-5">let's <span style={{opacity: 0.6, color: '#d4e8f6'}}>re</span>connect people</h2>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/fatherSession.png" 
                  alt="Screenshot of Roads app showing the main player with several comments."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image}`}
                />
              </div>

              <div className='col-md-6 col-lg-5 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Anonymous Sessions</h3>
                  <p>
                  <br />
                    Create, listen to, or speak.<br />
                    Share your experience authentically and sincerely with people interested in the same discussion topics.
                  </p>
              </div>
            </div>
            
            <div className="row my-5 justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 offset-lg-1 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/advicePage.png" 
                  alt="Screenshot of Roads app showing the home page where new comments left by other users can be listened to."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image}`}
                />
              </div>
               <div className='col-md-6 col-lg-6 my-auto order-md-first text-center text-md-start'>
                <h3>Gain insights from others' experiences</h3>
                <br />
                <p>Our main goal is to give people a voice.<br />
                 Everyone has something to learn from shared experiences.</p>
              </div>
            </div>

            <div className="row justify-content-md-center">
              <div className={`${styles.backsplash_container} col-md-6 col-lg-4 text-center`} >
                <div className={`${styles.backsplash} mx-auto`}></div>
                <Image 
                  src="/images/phones/filterSession2.png" 
                  alt="Screenshot of Roads app showing how to select friends to add to a channel."
                  height={400}
                  width={200}
                  className={`${styles.backsplash_image}`}
                />
              </div>

              <div className='col-md-6 col-lg-5 offset-lg-1 my-auto text-center text-md-start'>
                <h3>Choose who you want to talk to</h3>
                <br />
                <p>When you create a session, you're in control.<br />
                  Set the maximum number of talkers, define their age range, and choose their gender.</p>
                </div>
            </div>

          </div>
        </div>

        <div id={styles.section_use_cases} className="pb-5">
          <h2 className="h2-lg my-lg text-center">our features.</h2>
          <div className="container">
            <div className="row">
              <UseCase 
                imagePath="/images/icons/note.svg"
                title="Talk or listen to people in anonymous themed sessions"
              />
              <UseCase 
                imagePath="/images/icons/chat.svg"
                title="Inspire them and be inspired"
              />
              <UseCase 
                imagePath="/images/icons/book.svg"
                title="Write their advice"
              />
              <UseCase 
                imagePath="/images/icons/lecture.svg"
                title="Get paid for appearing in talks"
              />
              <UseCase 
                imagePath="/images/icons/team.svg"
                title="Connect with like-minded people"
              />
              <UseCase 
                imagePath="/images/icons/podcast.svg"
                title="Expand your network"
              />
            </div>
          </div>
        </div>

        <div id={styles.section_faq} className="pb-5">
          <h2 className="h2-lg my-lg text-center">faq&apos;s</h2>
          <div className="row justify-content-center">
            <div className="col-10 col-md-8 col-lg-6">
              
              <div className="accordion" id="faq_accordion">
                <FaqItem 
                  itemNum="one"
                  question="How is anonymity ensured?"
                  answer={
                    <div>
                      During registration, only age and gender are required, no other data is collected.
                      <br /><br />
                      When you enter a session as a talker, a random pseudonym is assigned to you based on your gender, and it disappears once you leave the session.
                      <br /><br />
                      If you're just a listener, no pseudonym is assigned to you.
                    </div>
                  }
                />
                <FaqItem 
                  itemNum="two"
                  question="Isn't it dangerous to talk to strangers?"
                  answer={
                    <div>
                      Here, It's not who you are, but what you say that truly matters.
                      <br /><br />
                      Indeed, this anonymity raises security concerns.
                      <ul>
                        <li>The app will only be available from the age of 15.</li>
                        <li>Registration will require a real phone number, and no account can be recreated.</li>
                        <li>Gender will be verified using artificial intelligence.</li>
                        <li>Insults and disrespectful remarks will result in sanctions.</li>
                        <li>Anyone can report strange behavior.</li>
                        <li>Users will be held accountable before becoming a talker.</li>
                      </ul>
                      The idea is to prioritize kind and respectful individuals and ban the others.
                    </div>
                  }
                />

                <FaqItem 
                  itemNum="three"
                  question="How can I follow someone if it's anonymous?"
                  answer="You can not."
                />
                <FaqItem 
                  itemNum="four"
                  question="How do I stay in touch with someone then?"
                  answer="You can exchange your social networks and converse there. Anonymity will then be broken, but rightfully so, as you will have chosen to do so."
                />
                <FaqItem 
                  itemNum="five"
                  question="Can I get paid?"
                  answer="Sure, if you're a talker. You can get paid by appearing in talks."
                />
                <FaqItem 
                  itemNum="seven"
                  question="How can I appear in the talks?"
                  answer="If you say interesting things, listeners can like your conversation, and a talk will be created. You'll get paid based on its success in the talks category (the fyp)."
                />
                <FaqItem 
                  itemNum="eight"
                  question="How is it possible to get paid just for talking?"
                  answer="We work with ads. Successful creators are the ones who inspire others."
                />
              </div>
            </div>
          </div>
          
        </div>

        <div id={styles.section_features} className="pb-5">
          <h2 className='h2-lg my-lg text-center mb-5'>your voice matters</h2>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <p className="mb-4">Join our growing community and get notified when we launch</p>
                <div className="mb-5">
                  <ConvertkitEmailForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
