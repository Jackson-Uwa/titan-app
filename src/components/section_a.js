import styles from "../styles/section_a.module.css";
const code = require("../assets/titan/code-titan.png");
const boot = require("../assets/titan/boot-titan.png");
const space = require("../assets/titan/space-titan.png");
const token = require("../assets/titan/titanswapbg.png");

const capital = require("../assets/titan/titan-acapital.png")
const biyong = require("../assets/titan/titan-biyong.png")
const chaind = require("../assets/titan/titan-chaind.png")

const SectionA = (props) => {
  return (
    <div className={styles.section_a}>
      <h1 id={styles.head}>INNOVATION</h1>
      <div className={styles.content}>
        <div className={styles.top}>
          <ul>
            <li>
              TITAN Automated order
              <section>
                Automated order mechanism based on AMM, which can be set to
                automatically execute orders in queue order when they reach
                execution price. It provides arbitrageurs with automated tools
                to improve the AMM price formation mechanism.
              </section>
            </li>
            <li>
              TITAN Smart Route
              <section>
                TITAN smart routing of cross-chain orders enables automatic
                selection of liquidity pools in multiple main networks. It
                supports more trading pairs and smaller slippage.
              </section>
            </li>
          </ul>
          <div className={styles.cover_image}>
            <img src={code} alt="code" />
          </div>
        </div>
        <div className={styles.middle}>
          <ul>
            <li>
              TITAN Adaptive Bonding Curve
              <section>
                TITAN adaptive bonding curve combines greater liquidity with
                better price discovery for different asset types.
              </section>
            </li>
            <li>
              TITAN Address Audit
              <section>
                TITAN, in conjunction with CoinGecgo, identifies the address of
                the token contract in a trade pair to avoid Scam Coin.
              </section>
            </li>
          </ul>
          <div className={styles.cover_image}></div>
          <img src={boot} alt="boot" />
        </div>
      </div>
      <div className={styles.bottom}>
        <ul>
          <li>
            TITAN Layer2 Support
            <section>
              Leveraging the Layer2 protocol prior to ETH 2.0 dramatically
              improves the efficiency of on-chain clearing and settlement and
              effectively reduces Gas consumption.
            </section>
          </li>
          <li>
            TITAN DAO
            <section>
              TITAN is the governce token of the TITAN DAO, and owning the
              proposal and voting rights will collectively determine the future
              of TITAN.
            </section>
          </li>
        </ul>
        <div className={styles.cover_image}>
          <img src={space} alt="space" />
        </div>
      </div>
      <div className={styles.ecosystem}>
        <h1 id={styles.ecosystem}>Ecosystem</h1>
        <div className={styles.wrap}>
          <div>
            <h2>Liquidity providers</h2>
            <p id={styles.icon}>
              <i class="fa fa-star"></i>
            </p>
            <p id={styles.detail}>
              Provide trading liquidity to the entire market, maximize capital
              utilisation with TITAN Adaptive Bonding Curve, and earn TITAN
              rewards in addition to trading fees. It significantly lowers the
              barriers to entry for market makers, making liquidity available to
              all the people.
            </p>
          </div>
          <div>
            <h2>Strategy Brokerage</h2>
            <p id={styles.icon}>
              <i class="fa fa-star"></i>
            </p>
            <p id={styles.detail}>
              Planner and implementer of TITAN Automated Order, strategy
              brokerage, which provides rich order strategy on top of automated
              market making mechanism. Get a share of the commission on
              strategic orders while enriching the order execution strategy.
            </p>
          </div>
          <div>
            <h2>Traders</h2>
            <p id={styles.icon}>
              <i class="fa fa-star"></i>
            </p>
            <p id={styles.detail}>
              With TITAN's user-centered decentralized exchange, it uses
              non-custodial methods of trading to safeguard the safety of funds.
              At the same time, TITAN Smart Route guarantees the optimal path
              for trading to expect the least slippage and the best price.
            </p>
          </div>
          <div>
            <h2>Developers</h2>
            <p id={styles.icon}>
              <i class="fa fa-star"></i>
            </p>
            <p id={styles.detail}>
              TITAN DAO is a decentralized community platform, and TITAN holders
              are also developers of the TITAN ecosystem, with proposal and
              voting rights, and also have participation and decision-making
              rights in all aspects of the TITAN economic model, contract
              auditing, and technical approach, etc.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.token}>
        <h1 id={styles.token}>Token</h1>
        <div className={styles.mintoken}>
          <img id={styles.img} src={token} alt="token" />
        </div>
      </div>
      <div className={styles.partners}>
        <h1 id={styles.partner}>PARTNERS</h1>
        <div className={styles.display}>
          <img src={capital} alt="" />
          <img src={biyong} alt="" />
          <img src={chaind} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionA;
