import styles from "../styles/footer.module.css";
const email = require("../assets/titan/titan-mail.png");
const github = require("../assets/titan/titan-github.png");
const twitter = require("../assets/titan/titan-twitter.png");
const telegram = require("../assets/titan/titan-telegram.png");
const medium = require("../assets/titan/titan-medium.png");

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.min_footer}>
        <h1 id={styles.join}>Join The Community</h1>
        <div className={styles.wrapper}>
          <div>
            <p>Email</p>

            <img src={email} alt="email logo" />
          </div>
          <div>
            <p>Github</p>

            <img src={github} alt="github logo" />
          </div>
          <div>
            <p>Twitter</p>

            <img src={twitter} alt="twitter logo" />
          </div>
          <div>
            <p>Telegram</p>

            <img src={telegram} alt="telegram logo" />
          </div>
          <div>
            <p>Medium</p>

            <img src={medium} alt="medium logo" />
          </div>
        </div>
        <p className={styles.base}>&copy; 2022 Copyright by TITAN</p>
        <p  className={styles.icon}>
          <i onClick={(event) => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}} class="fa fa-arrow-up"></i>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
