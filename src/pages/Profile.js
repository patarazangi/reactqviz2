import { useParams } from "react-router-dom";
import styles from "./Profile.module.css";

function Profile() {
  const { name } = useParams();

  return (
    <div className={styles.profile}>
      <div className={styles.card}>
        <h1>made by {name || "Nika"}</h1>
      </div>
    </div>
  );
}

export default Profile;
