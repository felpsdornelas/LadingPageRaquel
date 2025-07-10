import React from "react";
import styles from './SecaoFeedbacks.module.css';
import BoxClient from "./BoxClient";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SecaoFeedbacks() {
     return (
          <section className={styles["secao-feedbacks"]}>
               <div>
                    <h2>Descubra o que estão falando de nós</h2>
                    
                    <Swiper
                         modules={[Navigation, Pagination]} 
                         slidesPerView={1}                         
                         navigation                         
                         loop={true} >

                         <SwiperSlide>
                              <BoxClient 
                              NameClient="Simone Martins"
                              
                              description="Estivemos na Itália agora em março/25 com todo planejamento e assistência da Flit. 
                                                                 Estivemos na Turquia e no Egito tb com a Flit. Estivemos nos EUA tb e a Flit Viagens conosco. Tudo, absolutamente tudo que precisamos a Flit nos deu assistencia. Essa eu indico."

                              srcImgClient="\public\img\fotoMulherTeste.jpg"
                              altImg="Foto de Simone Martins"
                         />
                         </SwiperSlide>
                         <SwiperSlide>
                              <BoxClient 
                              NameClient="Vânia Abdallah"
                              description="Excelente atendimento. Todas as etapas da viagem foram como o planejado."

                              srcImgClient="/public/img/fotoMulherTeste02.jpg"
                              altImg="Foto de Vânia Abdallah"
                         />
                         </SwiperSlide>
                         
                    </Swiper>
               </div>

          </section>
     );
}