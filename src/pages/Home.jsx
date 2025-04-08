import fotoPerfil from "../../src/assets/images/perfil.jpg"
import { Box, Image, Heading, Text, Link } from "@chakra-ui/react"
import curriculoIcon from '../../src/assets/images/curriculo_icon.png'

const Home = () => {
  return (
    <header>
      <Box display="flex" flexDirection="column" alignItems="center" paddingTop="8em" paddingBottom="4em" background="radial-gradient(circle, rgba(94,91,91,0.6587009803921569) 0%, rgba(59,56,55,1) 67%)">
        <Box
          display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="2em" padding="3em 0"
          sm={{flexDirection: "row"}}
          md={{gap: "4em"}}
          lg={{gap: "6em"}}
          > {/* essa box vai conter a foto e o titulo da pagina e ficar lado a lado depois */}
          <Image src={fotoPerfil} 
            width="200px" height="200px"
            fit="cover" borderRadius="full"
            alt="foto perfil"
            md={{width: "220px", height: "220px"}}
            lg={{width: "300px", height: "300px"}}
            border="6px solid var(--mainOrange)"
          />

          <Box> {/* essa box contém o titulo da pagina */}
            <Heading size="4xl" marginBottom="10px" md={{fontSize: "45px", marginBottom: "20px"}} lg={{fontSize: "60px", marginBottom: "50px"}} xl={{fontSize: "75px", marginBottom: "60px"}}>Seja bem vindo!</Heading>
            <Heading size="2xl" md={{fontSize: "28px"}} lg={{fontSize: "36px"}}>Portfolio de projetos</Heading>
          </Box>

        </Box>

        <Box display="flex" gap="30px"> {/* essa box contém os links */}
            <Link href="https://www.linkedin.com/in/pedro-henrique-1b666723a/">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="65" viewBox="0 0 50 50">
                <path fill="var(--mainOrange)" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </Link>
            <Link href="https://github.com/PedroBritoBastos" >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="65" viewBox="0 0 50 50">
                <path fill="var(--mainOrange)" d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
              </svg>
            </Link>
        </Box>
      </Box>

      <Box id="sobre" bg="var(--mainBackgroundDark)" display="flex" justifyContent="center" md={{padding: "0 2em", justifyContent: "start"}} lg={{padding: "0 10em"}} > {/* box para alinhar a box de dentro no centro */}
        <Box borderLeft="20px solid orange" bg="var(--mainBackgroundLight)" width="90%" marginTop="5em" padding="1em 2em" md={{padding: "2em 6em", display: 'flex', gap: "50px", marginTop: "6em"}} lg={{padding: "4em 6em"}} xl={{padding: "7em 12em"}}> {/* essa box vai conter a secion Sobre */}
          <Box flex="2"> {/* essa box contém a seção about */}
            <Heading size="3xl" md={{textAlign: "start"}} lg={{fontSize: "36px"}}  textAlign="center" marginBottom="1em">Sobre mim</Heading>
            <Text textAlign="justify" sm={{fontSize: "18px"}} lg={{fontSize: "22px"}}> 
              Me chamo Pedro Henrique Brito Bastos, estudo Ciência da Computação e atualmente estou me especializando em 
              desenvolvimento web, com foco em Frontend. Possuo conhecimentos nas tecnologias HTML, CSS, Javascript, React e NodeJs.
              Busco cada vez mais melhorar as minhas habilidades e criar projetos cada vez melhores.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Box para a seção de trajetória profissional */}
      <Box display="flex" paddingBottom="5em" bg="var(--mainBackgroundDark)" justifyContent="center" md={{padding: "0 2em 5em 2em", justifyContent: "end"}} lg={{padding: "0 10em 5em 10em"}} > {/* box para alinhar a box de dentro no centro */}
        <Box borderRight="20px solid orange" bg="var(--mainBackgroundLight)" width="90%" marginTop="5em" padding="1em 2em" md={{padding: "2em 6em", display: 'flex', gap: "50px", marginTop: "6em"}} lg={{padding: "4em 6em"}} xl={{padding: "7em 12em"}}> {/* essa box vai conter a secion Sobre */}
          <Box flex="2"> {/* essa box contém a seção about */}
            <Heading size="3xl" md={{textAlign: "end"}} lg={{fontSize: "36px"}}   textAlign="center" marginBottom="1em">Trajetória profissional</Heading>
            <Text textAlign="justify" sm={{fontSize: "18px"}} lg={{fontSize: "22px"}}> 
              Concluí meu ensino médio na escola Centro Cultural Manilha, em 2019. Em 2020, comecei a fazer cursos e bootcamps na área de tecnologia, com foco
              em programação, e em 2021 ingressei na faculdade Anhanguera de Niterói para cursar Ciência da Computação. Atualmente estou focado na área de 
              programação Web.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Box para anexo de currículo */}
      <Box display="flex" bg="var(--mainBackgroundDark)" paddingBottom="3em" justifyContent="center" md={{padding: "0 2em 3em 2em"}} lg={{padding: "0 10em 3em 10em"}} > {/* box para alinhar a box de dentro no centro */}
        <Box maxWidth="290px" display="flex" justifyContent="center" borderBottom="3px solid orange" bg="var(--mainBackgroundLight)" width="90%" marginTop="5em" padding="1em 2em" > 
          <Link href="CV Pedro Bastos.pdf" target="_blank">
            <Image src={curriculoIcon} width="50px" height="50px"/>
            <Text md={{fontSize: "20px"}}>Meu currículo</Text>
          </Link>
        </Box>
      </Box>

      
    </header>
  )
}

export default Home