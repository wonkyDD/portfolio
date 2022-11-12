import Head from 'next/head';
// import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div>
      <Head>
        <title>Resume</title>
        <meta name='description' content='resume' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        {/* Language Icon */}
        <div>
          <span>Choose Language</span>
        </div>
        <h1>Resume</h1>
        <div>
          <a href='https://www.linkedin.com/in/cho-sunghyun-a479ab221/'>
            <span>LinkedIn</span>
          </a>
          <a href='mailto:dev.csh.01@gmail.com'>
            <span>Mail</span>
          </a>
          <a href='https://github.com/wonkyDD'>
            <span>Github</span>
          </a>
          <a href='https://portfolio-wonkydd.vercel.app/blog'>
            <span>Blog</span>
          </a>
        </div>
      </header>

      <section>
        {/* <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} /> */}
        {/* <Image src={} /> */}
        <div />
      </section>

      <main>
        <div>
          <div>
            <span>Skills</span>
          </div>
          <div>
            <p />
          </div>
        </div>
        <div>
          <div>
            <span>Experience</span>
          </div>
          <div>
            <p />
          </div>
        </div>
        <div>
          <div>
            <span>Education</span>
          </div>
          <div>
            <p />
          </div>
        </div>
        <div>
          <div>
            <span>Projects</span>
          </div>
          <div>
            <p />
          </div>
        </div>
        <div>
          <div>
            <span>Others</span>
          </div>
          <div>
            <p />
          </div>
        </div>
      </main>

      <footer>
        written by
        <a href='https://github.com/wonkyDD'>
          <span>wonkyDD</span>
        </a>
        on 2022
      </footer>
    </div>
  );
};

export default About;
