import { Steps, Button, ButtonGroup, Box } from "@chakra-ui/react"

const PageSteps = () => {
   const steps = [
      {
         title: "Home"
      },
      {
         title: "Tecnologias"
      },
      {
         title: "Projetos"
      }
   ]

  return (
    <>
      <Box>
         <Steps.Root defaultStep={1} count={steps.length}>
            <Steps.List>
               {steps.map((step, index) => {
                  <Steps.Item key={index} index={index} title={step.title}>
                     <Steps.Indicator />
                     <Steps.Title>{step.title}</Steps.Title>
                     <Steps.Separator />
                  </Steps.Item>
               })}
            </Steps.List>

            {steps.map((step, index) => (
               <Steps.Content key={index} index={index}>
                  Conteudo
               </Steps.Content>
            ))}

            <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

            <ButtonGroup size="sm" variant="outline">
               <Steps.PrevTrigger asChild>
                  <Button>Prev</Button>
               </Steps.PrevTrigger>
               <Steps.NextTrigger asChild>
                  <Button>Next</Button>
               </Steps.NextTrigger>
            </ButtonGroup>
         </Steps.Root>
      </Box>
    </>
  )
}

export default PageSteps