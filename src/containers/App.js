import styles from "../styles/App.module.css";
import Header from "../components/header";
import SectionA from "../components/section_a";
import Footer from "../components/footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SectionA />
      <Footer />
    </div>
  );
}

export default App;
