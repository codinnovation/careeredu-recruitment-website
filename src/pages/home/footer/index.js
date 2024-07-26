import React from "react";
import styles from "../../../styles/home/footer.module.css";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Email from "@mui/icons-material/Email";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import WebIcon from "@mui/icons-material/WebRounded";
import PhoneIcon from "@mui/icons-material/Phone";

function index() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.sectionOneContainer}>
            <div className={styles.header}>
              <h1>CareerEdu</h1>
              <h1>Personnel</h1>{" "}
            </div>
            <div className={styles.sectionOneMessage}>
              <p>
                Lesires to obtain pain of itself because pain but occasionally
                circumstances.
              </p>
            </div>

            <div className={styles.socialIcons}>
              <Facebook className={styles.icon} />
              <Instagram className={styles.icon} />
              <Email className={styles.icon} />
              <LinkedIn className={styles.icon} />
            </div>
          </div>

          <div className={styles.sectionTwoContainer}>
            <div className={styles.header}>
              <h1>Page Link</h1>
            </div>
            <div className={styles.secondTwoLinks}>
              <Link href="">Home</Link>
              <Link href="">Services</Link>
              <Link href="">About</Link>
              <Link href="">Contact</Link>
            </div>
          </div>

          <div className={styles.sectionThreeoContainer}>
            <div className={styles.header}>
              <h1>Contact</h1>
            </div>
            <div className={styles.sectionThreeIcon}>
              <div className={styles.iconContainer}>
                <WebIcon className={styles.icon} />
                <h1>www.codinnovations.tech</h1>
              </div>

              <div className={styles.iconContainer}>
                <Email className={styles.icon} />
                <h1>example@gmail.com</h1>
              </div>

              <div className={styles.iconContainer}>
                <PhoneIcon className={styles.icon} />
                <h1>+233 059 7063 145</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lastSection}>
          <hr className={styles.hr} />
          <p>@2024 All right reserved codinnovations.tecgh</p>
        </div>
      </div>
    </>
  );
}

export default index;
