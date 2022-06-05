import React, { useState } from "react";
import styles from "../styles/App.module.css";
import Header from "../components/header";
import SectionA from "../components/section_a";
import Footer from "../components/footer";

const Announcement = React.lazy(() => import("../components/announce"));

function App() {
  const [show, setShow] = useState(true);
  const click = () => setShow(!show)
  let ann;
  if (show) {
    ann = <Announcement clicked={click} />;
  }
  return (
    <div className={styles.app}>
      {ann}
      <Header />
      <SectionA />
      <Footer />
    </div>
  );
}

export default App;
