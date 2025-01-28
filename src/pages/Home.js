import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import kanye from "../assets/kanye.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>mogesalmebit</h1>
          <p>daatvalieret suratebi</p>
          <div className={styles.heroImage}>
            <img src={kanye} alt="Hero" />
          </div>
          <button
            onClick={() => navigate("/gallery")}
            className={styles.button}
          >
            galereashi gadasvla
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
