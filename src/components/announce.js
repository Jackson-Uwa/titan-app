import styles from "../styles/announce.module.css";

const Announce = ( props ) => {
  return (
    <section className={styles.announce}>
      <i onClick={props.clicked} class='fa fa-times' id={styles.icon}></i>
      <h1 id={styles.announce}>Announcement</h1>
      <main className={styles.main}>
        The Titan project strictly abides by the laws and regulations of various
        countries and regions. According to the laws and regulations of various
        countries on encrypted assets, the project is currently unable to
        provide services to users in the following countries: Afghanistan,
        Albania, Belarus, Bosnia and Herzegovina, Burundi, Burma, Canada, China,
        Democratic Republic of Congo , Cuba, Ethiopia, Guinea-Bissau, Guinea,
        Iran, Iraq, Japan, North Korea, Liberia, Lebanon, Libya, Macedonia,
        Malaysia, New Zealand, Serbia, Sri Lanka, Sudan, Somalia, Syria,
        Thailand, Trinidad and Tobago, Tunisia, Uganda, Ukraine, United States
        of America, Venezuela, Yemen, Zimbabwe. Sorry for the inconvenience.
      </main>
    </section>
  );
};

export default Announce;
