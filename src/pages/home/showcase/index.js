import React, { useEffect, useState } from "react";
import styles from "../../../styles/home/showcase.module.css";
import Link from "next/link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";

function Index() {
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.menuContent}>
          <div className={styles.companyName}>
            <h1>CareerEdu</h1>
            <h1>Personnel</h1>
          </div>

          <div className={styles.menuIconContainer}>
            <MenuIcon className={styles.menuIcon} />
          </div>
        </div>
      </div>
      <div className={styles.showcaseContainer}>
        <div className={styles.overlay}></div>
        <nav className={styles.navContainer}>
          <div className={styles.companyLogo}>
            <h1>CareerEdu</h1>
            <h1>Personnel</h1>
          </div>

          <div className={styles.navLinkContainer}>
            <div className={styles.navLink}>
              <Link href="/">Home</Link>
              <ExpandMoreIcon className={styles.navIcon} />
            </div>
            <div className={styles.navLink}>
              <Link href="/">About</Link>
            </div>
            <div className={styles.navLink}>
              <Link href="/">Services</Link>
              <ExpandMoreIcon className={styles.navIcon} />
            </div>
            <div className={styles.navLink}>
              <Link href="/">Blog</Link>
              <ExpandMoreIcon className={styles.navIcon} />
            </div>
            <div className={styles.navLink}>
              <Link href="/">Contact</Link>
            </div>
          </div>

          <div className={styles.accountContainer}>
            <PersonIcon className={styles.accountIcon} />
          </div>
        </nav>
        <div className={styles.descriptionContainer}>
          <div className={styles.tagline}>
            <hr className={styles.line1} />
            <h1>Endless Business Posiblittes</h1>
            <hr className={styles.line2} />
          </div>

          <div className={styles.mainTagline}>
            <h1>Best Solution And </h1>
            <h1>Great Business</h1>
          </div>

          <div className={styles.cta}>
            <button>See Project</button>
            <button>Discover More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
