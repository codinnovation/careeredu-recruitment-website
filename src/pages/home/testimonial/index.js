import React from "react";
import styles from "../../../styles/home/testimonial.module.css";
import MemberImage2 from "../../../../public/team2.png";
import MemberImage1 from "../../../../public/team1.png";
import MemberImage from "../../../../public/team.png";
import Image from "next/image";

function Index() {
  return (
    <>
      <div className={styles.feedContainer}>
        <div className={styles.feedContent}>
          <div className={styles.feedHeader}>
            <hr className={styles.line1} />
            <h1>Feedback</h1>
            <hr className={styles.line2} />
          </div>

          <div className={styles.mainHeader}>
            <h1>What Are They Saying</h1>
            <h1> About Company</h1>
          </div>

          <div className={styles.feedGridContainer}>
            <div className={styles.feedGrid}>
              <div className={styles.header}>
                <Image
                  src={MemberImage2}
                  alt="feedback-image"
                  className={styles.image}
                />

                <div className={styles.feedName}>
                  <h1>Kwabena Asumadu</h1>
                  <p>Web Developer</p>
                </div>
              </div>

              <div className={styles.messageContainer}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                  egestas odio, vitae scelerisque enim ligula venenatis dolor.
                  Maecenas nisl est, ultrices nec congue eget, auctor vitae
                  massa. odio ligula auctor elit. Aliquam erat volutpat.
                  Phasellus feugiat est in nis
                </p>
              </div>
            </div>


            <div className={styles.feedGrid}>
              <div className={styles.header}>
                <Image
                  src={MemberImage2}
                  alt="feedback-image"
                  className={styles.image}
                />

                <div className={styles.feedName}>
                  <h1>Kwabena Asumadu</h1>
                  <p>Web Developer</p>
                </div>
              </div>

              <div className={styles.messageContainer}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                  egestas odio, vitae scelerisque enim ligula venenatis dolor.
                  Maecenas nisl est, ultrices nec congue eget, auctor vitae
                  massa. odio ligula auctor elit. Aliquam erat volutpat.
                  Phasellus feugiat est in nis
                </p>
              </div>
            </div>


            <div className={styles.feedGrid}>
              <div className={styles.header}>
                <Image
                  src={MemberImage1}
                  alt="feedback-image"
                  className={styles.image}
                />

                <div className={styles.feedName}>
                  <h1>Kwabena Asumadu</h1>
                  <p>Web Developer</p>
                </div>
              </div>

              <div className={styles.messageContainer}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus imperdiet, nulla et dictum interdum, nisi lorem
                  egestas odio, vitae scelerisque enim ligula venenatis dolor.
                  Maecenas nisl est, ultrices nec congue eget, auctor vitae
                  massa. odio ligula auctor elit. Aliquam erat volutpat.
                  Phasellus feugiat est in nis
                </p>
              </div>
            </div>
          </div>

          <div className={styles.cta}>
            <button>Prev</button>
            <button>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
