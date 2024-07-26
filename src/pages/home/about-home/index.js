import React from "react";
import styles from "../../../styles/home/about.module.css";
import Image from "next/image";
import AboutImage from "../../../../public/about2.jpg";

function Index() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src={AboutImage}
              alt="about-image"
              className={styles.image}
            />
          </div>

          <div className={styles.descriptionContainer}>
            <div className={styles.tagLine}>
              <h1>About company</h1>
              <hr className={styles.hr} />
            </div>

            <div className={styles.mainTagline}>
              <h1>The Best Of Product </h1>
              <h1>Your Business</h1>
            </div>

            <div className={styles.subTagline}>
              <p>
                There are many variations of passages of lorem Ipsum available
                but the majority have suffered alteration in some form by inject
                rated humour or randomised this like.
              </p>
            </div>

            <div className={styles.lastTagline}>
               <hr className={styles.hr}/>
               <p>Highest quality security, Network uptime, fast output. Unlimited scale and customizing possibilities. customizing possibilities customizing security, Network uptimepossibilities </p>
            </div>

            <div className={styles.cta}> 
               <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
