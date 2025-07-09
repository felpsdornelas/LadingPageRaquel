import React from "react";
import styles from './BoxPlaceImg.module.css';

export default function BoxPlaceImg({
     textPais,
     ImageBackground,
     LegendaImg
}) {
     return (
          <div className={styles["box-place-img"]}>
               <img className={styles["imgBackGround"]} src={ImageBackground} alt={LegendaImg} />
               <div className={styles["faixa-diagonal"]}>{textPais}</div>
          </div>
    );
}