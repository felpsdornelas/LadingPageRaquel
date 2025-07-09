import React from "react";
import BoxDiferenciais from "./boxDiferenciais";
import styles from './SecaoDiferenciais.module.css';

export default function SecaoDiferenciais() { 

     return (
          <section className={styles["secao-diferenciais"]}>
          <div>
               <div> 
                    <h2>Nossos Diferenciais</h2> 
               </div>

               <div className={styles["container-diferenciais"]}>
                    <BoxDiferenciais 
                    srcImg="\public\svg\bx-compass.svg"
                    altImg="Icone de bússola"
                    titleBox="Fugimos do Óbvio"
                    paragraph="Nada de pacotes genéricos ou roteiros prontos. Cada viagem é pensada com base no 
                                                                 seu estilo e interesses, criando momentos autênticos e inesquecíveis."
                    />

                    <BoxDiferenciais 
                    srcImg="\public\svg\bx-medal-star-alt.svg"
                    altImg="Icone de bússola"
                    titleBox="Atendimento Premium"
                    paragraph="Mais do que uma viagem: oferecemos uma experiência completa, com atenção em cada 
                                                                 detalhe e suporte antes, durante e depois do seu embarque."
                    />

                    <BoxDiferenciais 
                    srcImg="\public\svg\bx-fingerprint.svg"
                    altImg="Icone de bússola"
                    titleBox="Turismo Autêntico"
                    paragraph="Personalização em primeiro lugar Criamos experiências únicas, longe do turismo de massa.
                                                       Você vive o destino de forma genuína, descobrindo o que poucos conhecem."
                    />
               </div>
          </div>               
          </section>
     )
}


