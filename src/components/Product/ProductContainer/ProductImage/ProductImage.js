import React from "react";
import styles from "./ProductImage.module.css";

// Product Image Component
const ProductImage = ({ image }) => {
  const fallback = "https://dummyimage.com/150x150/cccccc/000000&text=Product";

  return (
    <div className={styles.imageContainer}>
      <img
        src={image || fallback}
        alt="Product"
        width="100%"
        height="100%"
        style={{ objectFit: "contain", aspectRatio: 1 }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallback;
        }}
      />
    </div>
  );
};

export default ProductImage;
