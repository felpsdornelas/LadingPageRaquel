import React from "react";
import styles from './BoxPlaceInfo.module.css';

export default function BoxPlaceInfo({
     title,
     subtitle,
     paragraph,
     sobPrice,
     price
}) {
     return (
          <div className={styles["box-place-info"]}>
               <h3>{title}</h3>
               <h4>{subtitle}</h4>

               <p>{paragraph}</p>

               <p>{sobPrice}</p>
               <h5>{price}</h5> 
          </div>
    );
}