import React from "react";
import styles from './SecaoLugares.module.css';
import BoxPlaceImg from "./BoxPlaceImg";
import BoxPlaceInfo from "./BoxPlaceInfo";
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function SecaoLugares() { 
     return (
          <section className={styles["secao-lugares"]}>
               <div>
                    <h2>Descubra os Nossos Destinos</h2> 

                    <Swiper 
                         modules={[Navigation, Pagination]} 
                         slidesPerView={1} 
                         navigation
                         loop={true}                    
                    >
                         <SwiperSlide>
                              <div className={styles["container"]}>        
                                   <BoxPlaceImg 
                                        textPais={"Egito"}
                                        ImageBackground={"/public/img/Egito.jpg"}
                                        LegendaImg={"Imagem do Egito"}
                                   
                                   />

                                   <BoxPlaceInfo 
                                        title={"Egito: Cairo e Cruzeiro no Nilo"}
                                        subtitle={"Egito - África"}
                                        paragraph={"Experencie o fascínio do Egito com uma jornada de 9 dias pelo caíro e através do Rio Nilo, aprecido os ancantadores cenários de templos antigos."}
                                        sobPrice={"A partir de"}
                                        price={"USD 2.689,00"}
                                   />
                              </div>         
                         </SwiperSlide>   
                         
                         <SwiperSlide>
                              <div className={styles["container"]}>        
                                   <BoxPlaceImg 
                                        textPais={"Islândia"}
                                        ImageBackground={"/public/img/islandia.jpg"}
                                        LegendaImg={"Imagem da Islândia"}

                                   />
                                   <BoxPlaceInfo 
                                        title={"Islândia: Caça às Auroras Boreais"}
                                        subtitle={"Reykjavik, Golden Circle"}
                                        paragraph={"Comece pela charmosa capital Reykjavík e siga pela famosa rota Golden Circle, com o Parque Nacional de Thingvellir, a área geotérmica Geysir e a cachoeira Gullfoss. Aventure-se no interior em busca das Auroras Boreais e descubra as paisagens impressionantes do Parque Nacional de Vatnajökull, com cachoeiras e oásis surpreendentes."}
                                        sobPrice={"A partir de"}
                                        price={"USD 2.689,00"}
                                   />
                              </div>         
                         </SwiperSlide>    
                    </Swiper>  
               </div>
          </section>
     );
}
