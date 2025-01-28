import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Gallery.module.css";

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=4")
      .then((response) => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleImageError = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id
          ? {
              ...photo,
              url: `https://dummyjson.com/image/400x200?type=webp&text=Image+${id}`,
            }
          : photo
      )
    );
  };

  if (loading) return <div className={styles.message}>Loading...</div>;
  if (error) return <div className={styles.message}>Error: {error}</div>;

  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={photo.url}
                alt={photo.title}
                onError={() => handleImageError(photo.id)}
              />
            </div>
            <p className={styles.title}>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
