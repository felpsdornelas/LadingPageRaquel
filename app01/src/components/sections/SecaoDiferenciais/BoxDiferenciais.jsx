import React from "react";
import styles from './BoxDiferenciais.module.css';

export default function BoxDiferenciais({srcImg, altImg, titleBox, paragraph}) {
     return ( 
          <div className={styles["box-diferenciais"]}>
               <img className={styles["imgIcon"]} src={srcImg} alt={altImg} />
               <h3>{titleBox}</h3>
               <p>{paragraph}</p>
          </div>
     );
}