import React from "react";
import styles from "../../../styles/home/team.module.css";
import Image from "next/image";
import MemberImage from "../../../../public/team.png";
import MemberImage1 from "../../../../public/team1.png";
import MemberImage2 from "../../../../public/team2.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';

function Index() {
  return (
    <>
      <div className={styles.teamContainer}>
        <div className={styles.teamContent}>
          <div className={styles.teamHeader}>
            <hr className={styles.line1} />
            <h1>Team</h1>
            <hr className={styles.line2} />
          </div>

          <div className={styles.mainHeader}>
            <h1>Our Best Team Member</h1>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image
                  src={MemberImage}
                  alt="team-photo"
                  className={styles.photo}
                />
              </div>
              <div className={styles.memberName}>
                <h1>Kwaben Asumadu</h1>
                <h1>Software Engineer</h1>
              </div>
              <div className={styles.iconsContainer}>
              <FacebookIcon className={styles.socialIcon}/>
              <EmailIcon className={styles.socialIcon} />
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image
                  src={MemberImage1}
                  alt="team-photo"
                  className={styles.photo}
                />
              </div>
              <div className={styles.memberName}>
                <h1>Kofi Adom</h1>
                <h1>Front End Engineer</h1>
              </div>
              <div className={styles.iconsContainer}>
              <FacebookIcon className={styles.socialIcon}/>
              <EmailIcon className={styles.socialIcon} />
              </div>
            </div>

            <div className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                <Image
                  src={MemberImage2}
                  alt="team-photo"
                  className={styles.photo}
                />
              </div>
              <div className={styles.memberName}>
                <h1>Emmanuel Frimpong</h1>
                <h1>Back End Engineer</h1>
              </div>
              <div className={styles.iconsContainer}>
                <FacebookIcon className={styles.socialIcon}/>
                <EmailIcon className={styles.socialIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
