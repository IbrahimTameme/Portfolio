import React from 'react';
import styles from "@/css/Projects-cards.module.css";

export const cards = [
  { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
  { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
  { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
  { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
];

export default function Home() {
  return (
    <div className={`${styles.projectsSection} container mx-auto w-full flex flex-col items-center`}>
      {cards.map((card, index) => (
        <div key={index} className={`${styles.card} box-shadow-semi-border`}>
        <img className={styles.cardImage} src={"/Images/WhyUs-Image.svg"} alt="" />
        <div className={styles.content}>
          <h2 className={styles.title}>{card.title}</h2>
          <p className={styles.copy}>{card.copy}</p>
          <button className={styles.btn}>{card.button}</button>
        </div>
      </div>
      ))}
    </div>
  );
}
