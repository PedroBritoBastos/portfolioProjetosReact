import { Box, Heading, Image, Card, Text, Link } from "@chakra-ui/react";
import { register } from "swiper/element"
import { Swiper, SwiperSlide } from "swiper/react"
import { Controller, Navigation, Pagination} from "swiper/modules";
import { useEffect, useState } from "react";
import "./SectionProjetos.css"

import projetoAprenser from "../../assets/images/projeto-aprenser.jpg";
import projetoClimaApp from "../../assets/images/clima-app-thumb.png";
import projetoCarrinhoSobremesas from "../../assets/images/carrinhoDeSobremesasFrontendmentor.png";
import serfrontendProjeto1 from "../../assets/images/serfrontendProjeto1.png";
import serfrontendProjeto2 from "../../assets/images/serfrontendProjeto2.png";


register();

const SectionProjetos = () => {
   const [slidePerView, setSlidePerView] = useState(1);

   useEffect(() => {
      const handleResize = () => {
         if(window.innerWidth < 1200) {
            setSlidePerView(1);
         } else {
            setSlidePerView(2);
         }
      }

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      }
   }, []);

   const projetos = [
      {
         titulo: "Projeto Aprenser",
         imagem: projetoAprenser,
         info: "Este projeto foi feito durante o curso SERFRONTEND da Udemy.",
         link: "https://github.com/PedroBritoBastos/Projetos-Curso-Serfrontend-Udemy/tree/main/Projeto%204%20-%20Aprenser",
         deploy: null,
         tecnologias: "HTML e CSS"
      },
      {
         titulo: "Clima App",
         imagem: projetoClimaApp,
         info: "Um App de clima que utiliza a API Open Weather",
         link: "https://github.com/PedroBritoBastos/clima-app-react",
         tecnologias: "HTML, CSS, Javascript e React",
         deploy: "https://pedrobritobastos.github.io/clima-app-react/"
      },
      {
         titulo: "Carrinho de Sobremesas",
         imagem: projetoCarrinhoSobremesas,
         info: "Desafio da plataforma Frontendmentor",
         link: "https://github.com/PedroBritoBastos/frontendmentor-challenges?tab=readme-ov-file",
         tecnologias: "HTML, CSS, Javascript e React",
         deploy: null
      },
      {
         titulo: "Landing page simples",
         imagem: serfrontendProjeto1,
         info: "Mini projeto iniciante do curso Serfrontend",
         link: "https://github.com/PedroBritoBastos/Projetos-Curso-Serfrontend-Udemy/tree/main/Projeto%201%20-%20P%C3%A1gina%20Web%20Simples%20Serfrontend",
         tecnologias: "HTML e CSS",
         deploy: null
      },
      {
         titulo: "Landing page simples",
         imagem: serfrontendProjeto2,
         info: "Mini projeto iniciante do curso Serfrontend",
         link: "https://github.com/PedroBritoBastos/Projetos-Curso-Serfrontend-Udemy/tree/main/Projeto%201%20-%20P%C3%A1gina%20Web%20Simples%20Serfrontend",
         tecnologias: "HTML e CSS",
         deploy: null
      },
   ];

   

  return (
      <section id="projetos">
         <Box padding="2em">
            <Heading textAlign="center" marginTop="1em" padding="1em" borderBottom="3px solid var(--mainOrange)" fontSize="26px" sm={{fontSize: "28px"}} lg={{fontSize: "36px"}}>Projetos</Heading>
            
            <Box marginTop="3em" lg={{padding: "0 15em"}}> {/* essa box vai ajustar o tamanho do swapper */}
               <Swiper
                  modules={[Controller, Pagination, Navigation]}
                  navigation={true}
                  pagination={true}
                  slidesPerView={slidePerView}
               >
                  {projetos.map((projeto, index) => { 
                     return (
                        <SwiperSlide key={index}>
                           <Card.Root maxWidth="580px" height="450px" sm={{height: "500px"}} md={{height: "600px"}}>
                              <Card.Header color="black" paddingTop="1em" textAlign="center" fontSize="20px" fontWeight="bold" sm={{fontSize: "24px"}}>{projeto.titulo}</Card.Header>
                              <Card.Body>
                                 <Image src={projeto.imagem}/>
                                 <Card.Description color="black" paddingTop="2em" fontSize="16px" sm={{fontSize: "18px"}}>
                                    {projeto.info}
                                 </Card.Description>
                                 <Box flex="1" display="flex" alignItems="flex-end"> {/* para alinhar o footer em baixo */}
                                    <Card.Footer flexDirection="column" padding="1em 0" alignItems="start">
                                       <Text color='black' sm={{fontSize: "18px"}}>Tecnologias utitilizadas:</Text>
                                       <Text color="black" sm={{fontSize: "18px"}}>{projeto.tecnologias}</Text>
                                       <Box display="flex" gap="1em">
                                          <Link href={projeto.link} padding=".5em" backgroundColor="var(--mainBackgroundDark)">Github</Link>
                                          {projeto.deploy ? <Link href={projeto.link} padding=".5em" backgroundColor="var(--mainBackgroundDark)">Deploy</Link> : ""}
                                       </Box>
                                    </Card.Footer>
                                 </Box>
                              </Card.Body>
                           </Card.Root>
                        </SwiperSlide>
                     )})}
               </Swiper>
            </Box>
         </Box>
      </section>
  )
}

export default SectionProjetos