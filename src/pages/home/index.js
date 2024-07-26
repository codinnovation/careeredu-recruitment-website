import React from "react";
import styles from "../../styles/home/home-index.module.css";
import ShowcaseComponent from "./showcase";
import AboutComponent from "./about-home";
import FeatureComponent from "./feature-job";
import TeamComponent from "./team";
import TestimonialComponent from "./testimonial";
import Footer from './footer';

function Index() {
  return (
    <>
      <div className={styles.container}>
        <ShowcaseComponent />
        <AboutComponent />
        <FeatureComponent />
        <TeamComponent/>
        <TestimonialComponent/>
        <Footer/>
      </div>
    </>
  );
}

export default Index;
