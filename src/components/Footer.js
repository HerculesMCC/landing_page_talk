import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <footer id="section_footer" className="w-100 d-flex justify-content-center align-items-center">
        <div className='w-100 px-4 py-4 d-flex justify-content-between align-items-center'>
          <div>
            <small className='text-muted text-center d-block'>FR</small>
            <div>
              <Link href="https://www.instagram.com/talksocialapp.fr/" target="_blank" className='social-icon mx-1'>
                <IoLogoInstagram size={25}/>
              </Link>
              <Link href="https://www.tiktok.com/@talk.fr" target="_blank" className='social-icon mx-1'>
                <IoLogoTiktok size={25}/>
              </Link>
            </div>
          </div>

          <div className='text-center'>
            <Link href="/why" className='btn btn-link' target="_blank">
              why 
            </Link>
            <span className="mx-2">|</span>
            <Link href="mailto:team.talk.app@outlook.com" className='btn btn-link'>
              contact us
            </Link>
            <p className="mb-0">Copyright © {current_year}, talk.kr. All Rights Reserved.</p>
          </div>

          <div>
            <small className='text-muted text-center d-block'>EN</small>
            <div>
              <Link href="https://www.instagram.com/talk.kr" target="_blank" className='social-icon mx-1'>
                <IoLogoInstagram size={25}/>
              </Link>
              <Link href="https://www.tiktok.com/@talk.kr" target="_blank" className='social-icon mx-1'>
                <IoLogoTiktok size={25}/>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
