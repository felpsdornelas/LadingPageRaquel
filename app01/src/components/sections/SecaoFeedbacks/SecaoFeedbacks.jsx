import React from "react";
import styles from './SecaoFeedbacks.module.css';
import BoxClient from "./BoxClient";

export default function SecaoFeedbacks() {
     return (
          <section className={styles["secao-feedbacks"]}>
               <div>
                    <h2>Descubra o que estão falando de nós</h2>
               </div>
               
               <BoxClient 
                    NameClient="Maria Célia"
                    description="A Raquel foi muito compreesível comigo, a sua consultoria superou minhas expectativas, 
                                             realizou o meu sonho de conhecer a Tailândia."

                    srcImgClient="/public/img/joao-silva.jpg"
                    altImg="Foto de João Silva"
               />

          </section>
     );
}