import styles from "../styles/header.module.css";
const logo = require("../assets/titan/titan-logo.png");
const title = require("../assets/titan/titan-font.png");
const bg = require("../assets/titan/titanbg.jpg");

const Header = (props) => {
  return (
    <header className={styles.header} style={{ backgroundImage: `url(${bg})` }}>
      <div className={styles.main}>
        <div className={styles.top}>
          <div>
            <img src={logo} alt="app logo" id={styles.img} />
          </div>
          <div>
            <nav id={styles.nav}>
              <ul id={styles.list}>
                <li>Vision</li>
                <li>Innovation</li>
                <li>Ecosystem</li>
                <li>Token</li>
                <li>Whitepaper</li>
              </ul>
            </nav>
            <p id={styles.bar}>
              <i class="fa fa-bars"></i>
            </p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={title} alt="Title" />
          </div>
          <h2>
            Seamless Cross-chain Token Swaps, Automated Liquidity Mining, DAO
          </h2>
          <h4>
            TITAN is a blockchain based decentralized financial center that
            provides optimal liquidity solutions for different digital asset
            category by adaptive bonding curve. It not only provides a
            user-centered decentralized exchange, but also it is an aggregated
            liquidity pool that supports order smart routing.
          </h4>
          <button>
            Exchange now <i class="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
