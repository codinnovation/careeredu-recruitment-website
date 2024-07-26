import React from "react";
import styles from "../../../styles/home/feature.module.css";
import WorkIcon from "@mui/icons-material/Work";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function index() {
  return (
    <>
      <div className={styles.featureContainer}>
        <div className={styles.featureContent}>
          <div className={styles.featureHeader}>
            <hr className={styles.line1} />
            <h1>Feature Jobs</h1>
            <hr className={styles.line2} />
          </div>

          <div className={styles.mainHeader}>
            <h1>We Offer All Types Of IT</h1>
            <h1> Solution Services</h1>
          </div>

          <div className={styles.jobGrid}>
            <div className={styles.jobContainer}>
              <div className={styles.jobHeader}>
                <WorkIcon className={styles.icon} />
                <h1>Software Development</h1>
              </div>

              <div className={styles.jobDescription}>
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  this etiusto odio data center.
                </p>
              </div>

              <div className={styles.cta}>
                <h1>Read more</h1>
                <ArrowForwardIcon className={styles.icon} />
              </div>
            </div>

            <div className={styles.jobContainer}>
              <div className={styles.jobHeader}>
                <WorkIcon className={styles.icon} />
                <h1>Software Development</h1>
              </div>

              <div className={styles.jobDescription}>
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  this etiusto odio data center.
                </p>
              </div>

              <div className={styles.cta}>
                <h1>Read more</h1>
                <ArrowForwardIcon className={styles.icon} />
              </div>
            </div>

            <div className={styles.jobContainer}>
              <div className={styles.jobHeader}>
                <WorkIcon className={styles.icon} />
                <h1>Anaylitcs Solution</h1>
              </div>

              <div className={styles.jobDescription}>
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  this etiusto odio data center.
                </p>
              </div>

              <div className={styles.cta}>
                <h1>Read more</h1>
                <ArrowForwardIcon className={styles.icon} />
              </div>
            </div>

            <div className={styles.jobContainer}>
              <div className={styles.jobHeader}>
                <WorkIcon className={styles.icon} />
                <h1>Software Development</h1>
              </div>

              <div className={styles.jobDescription}>
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  this etiusto odio data center.
                </p>
              </div>

              <div className={styles.cta}>
                <h1>Read more</h1>
                <ArrowForwardIcon className={styles.icon} />
              </div>
            </div>

            <div className={styles.jobContainer}>
              <div className={styles.jobHeader}>
                <WorkIcon className={styles.icon} />
                <h1>Software Development</h1>
              </div>

              <div className={styles.jobDescription}>
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  this etiusto odio data center.
                </p>
              </div>

              <div className={styles.cta}>
                <h1>Read more</h1>
                <ArrowForwardIcon className={styles.icon} />
              </div>
            </div>

            <div className={styles.jobContainer}>
              <div className={styles.jobHeader}>
                <WorkIcon className={styles.icon} />
                <h1>Software Development</h1>
              </div>

              <div className={styles.jobDescription}>
                <p>
                  At vero eos et accusamus etiusto odio praesentium accusamus
                  this etiusto odio data center.
                </p>
              </div>

              <div className={styles.cta}>
                <h1>Read more</h1>
                <ArrowForwardIcon className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
