import React from "react";
import styles from './BoxClient.module.css';

export default function BoxClient({
     NameClient,
     description,
     srcImgClient,
     altImg
}) {
     return (
          <div className={styles["box-client"]}>
               {/* Lado esquerdo */}
               <div>
                    <h3>{NameClient}</h3>
                    <div></div>
                    <p>{description}</p>
               </div>

               {/* Lado direito */}
               <div>
                    <img src={srcImgClient} alt={altImg} />
               </div>
          </div>
     );
}