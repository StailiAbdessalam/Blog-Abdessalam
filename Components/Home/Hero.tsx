import Image from 'next/image';

import classes from '../../styles/Home/Hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src=''
          alt='An image showing Abdessalam'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Abdessalam</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}

export default Hero;
