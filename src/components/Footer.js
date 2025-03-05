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
        <div className='text-center py-4'>
        <Link href="/why" className='btn btn-link' target="_blank">
            Why
          </Link>
          <span className="mx-2">|</span>
          <Link href="mailto:team.talk.app@outlook.com" className='btn btn-link'>
            Contact
          </Link>

          <div className='mt-2 mb-3'>
            <Link href="https://www.instagram.com/talk.kr/" target="_blank" className='social-icon mx-1'>
              <IoLogoInstagram size={25}/>
            </Link>
          </div>

          <p className="mb-0">Copyright © {current_year}, talk.kr. All Rights Reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
