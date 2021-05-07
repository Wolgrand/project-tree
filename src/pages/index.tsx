import Head from 'next/head'
import {Flex, Button,  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Tag,
  Badge,
  StatGroup, Stack, SimpleGrid, Box, Grid, GridItem, Divider, Center, Icon, Progress  } from '@chakra-ui/react'
import { RiAddBoxLine, RiAddLine, RiCheckboxIndeterminateLine, RiPencilLine } from 'react-icons/ri';
import { useState } from 'react';

export default function Home() {

  const [isLevelOneOpen, setLevelOneOpen] = useState(false)
  const [isLevelTwoAOpen, setLevelTwoAOpen] = useState(false)
  const [isLevelTwoBOpen, setLevelTwoBOpen] = useState(false)
  const [changeStepToProject, setChangeStepToProject] = useState(false)


  function handleOpenLevelOne() {
    setLevelOneOpen(!isLevelOneOpen)
  }
  function handleOpenLevelTwoA() {
    setLevelTwoAOpen(!isLevelTwoAOpen)
    setLevelTwoBOpen(false)
  }
  function handleOpenLevelTwoB() {
    setLevelTwoAOpen(false)
    setLevelTwoBOpen(!isLevelTwoBOpen)
  }

  const initialColumn = 1
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Grid
        templateRows="repeat(7, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={8}
        m="24"
        
        
      >
        <GridItem rowSpan={2} colStart={initialColumn} colEnd={initialColumn} rowStart={5} rowEnd={5} colSpan={1}  rounded="md">
          <Button
            as="a"
            size="lg"
            h="16"
            w="full"
            fontSize="sm"
            colorScheme="blue"
            cursor="pointer"
            onClick={()=>handleOpenLevelOne()}
            justifyContent="space-between"
            rightIcon={<Icon as={isLevelOneOpen ? RiCheckboxIndeterminateLine : RiAddBoxLine  } fontSize="20"/>}
          >
            Obras At
          </Button>
        </GridItem>
        
        {isLevelOneOpen ?
        (
        <>


        


        <GridItem rowSpan={2} colStart={initialColumn +1} colEnd={initialColumn +1} rowStart={4} rowEnd={4} colSpan={1}  rounded="md">
        <Button
            as="a"
            size="lg"
            h="auto"
            w="full"
            py="2"
            fontSize="sm"
            bg="white"
            borderLeft="8px"
            borderLeftColor="green.500"
            color="gray.600"
            cursor="pointer"
            onClick={()=>handleOpenLevelTwoA()}
            justifyContent="space-between"
            rightIcon={<Icon as={isLevelTwoAOpen ? RiCheckboxIndeterminateLine : RiAddBoxLine  } fontSize="20"/>}
          >
            <Stat mr="2">
              <Stack>
                <Tag colorScheme="green">No Prazo</Tag>
                <StatLabel fontSize="medium" mb="2">Interligação Rio Branco-Floresta</StatLabel>
                <StatHelpText>Prev: 10%</StatHelpText>
                <Progress value={10} max={100} />
                <StatHelpText>Real: 10%</StatHelpText>
                <Progress value={10} max={100} />
              </Stack>
            </Stat>
          </Button>
          </GridItem>
        <GridItem rowSpan={1} colStart={initialColumn +1} colEnd={initialColumn +1} rowStart={6} rowEnd={6} colSpan={1}  rounded="md">
        <Button
            as="a"
            size="lg"
            h="auto"
            w="full"
            py="2"
            fontSize="sm"
            bg="white"
            color="gray.600"
            borderLeft="8px"
            borderLeftColor="red.500"
            cursor="pointer"
            onClick={()=>handleOpenLevelTwoB()}
            justifyContent="space-between"
            rightIcon={<Icon as={isLevelTwoBOpen ? RiCheckboxIndeterminateLine : RiAddBoxLine  } fontSize="20"/>}
          >
            <Stat mr="2">
              <Stack>
                <Tag colorScheme="red">Atrasado</Tag>
                <StatLabel fontSize="medium" mb="2">Interligação Acrelândia - Peixes</StatLabel>
                <StatHelpText>Prev: 30%</StatHelpText>
                <Progress value={30} max={100} />
                <StatHelpText>Real: 10%</StatHelpText>
                <Progress colorScheme="red" value={10} max={100} />
              </Stack>
            </Stat>
          </Button>
          </GridItem>
        
        {isLevelTwoAOpen ?(
          <>
          <GridItem rowSpan={2} w="240px" colStart={initialColumn +2} colEnd={initialColumn +2} rowStart={3} rowEnd={3} colSpan={1}  rounded="md">
            <Button
                as="a"
                size="lg"
                h="auto"
                w="full"
                py="2"
                fontSize="sm"
                bg="white"
                color="gray.600"
                borderLeft="8px"
                borderLeftColor="red.500"
                cursor="pointer"
                justifyContent="space-between"
              >
              <Stat mr="2">
                <Stack>
                  <Tag colorScheme="red">Atrasado</Tag>
                  <StatLabel fontSize="medium" mb="2">Terreno</StatLabel>
                  <StatHelpText>Prev: 30%</StatHelpText>
                  <Progress value={30} max={100} />
                  <StatHelpText>Real: 10%</StatHelpText>
                  <Progress colorScheme="red" value={10} max={100} />
                </Stack>
              </Stat>
            </Button>
          </GridItem>
          <GridItem rowSpan={2} colStart={initialColumn +2} colEnd={initialColumn +2} rowStart={4} rowEnd={4} colSpan={1}  rounded="md">
            <Button
                as="a"
                size="lg"
                h="auto"
                w="full"
                py="2"
                fontSize="sm"
                bg="white"
                color="gray.600"
                borderLeft="8px"
                borderLeftColor="red.500"
                cursor="pointer"
                justifyContent="space-between"

              >
              <Stat mr="2">
                <Stack>
                  <Tag colorScheme="red">Atrasado</Tag>
                  <StatLabel fontSize="medium" mb="2">Projeto</StatLabel>
                  <StatHelpText>Prev: 30%</StatHelpText>
                  <Progress value={30} max={100} />
                  <StatHelpText>Real: 10%</StatHelpText>
                  <Progress colorScheme="red" value={10} max={100} />
                </Stack>
              </Stat>
            </Button>
          </GridItem>
          <GridItem rowSpan={2} colStart={initialColumn +2} colEnd={initialColumn +2} rowStart={5} rowEnd={5} colSpan={1}  rounded="md">
            <Button
                as="a"
                size="lg"
                h="auto"
                w="full"
                py="2"
                fontSize="sm"
                bg="white"
                color="gray.600"
                borderLeft="8px"
                borderLeftColor="red.500"
                cursor="pointer"
                justifyContent="space-between"
                
              >
              <Stat mr="2">
                <Stack>
                  <Tag colorScheme="red">Atrasado</Tag>
                  <StatLabel fontSize="medium" mb="2">Material</StatLabel>
                  <StatHelpText>Prev: 30%</StatHelpText>
                  <Progress value={30} max={100} />
                  <StatHelpText>Real: 10%</StatHelpText>
                  <Progress colorScheme="red" value={10} max={100} />
                </Stack>
              </Stat>
            </Button>
          </GridItem>
        
          </>
        )
        :
        null
          }
        {isLevelTwoBOpen ?(
          <>
          <GridItem rowSpan={2} w="240px" colStart={initialColumn +2} colEnd={initialColumn +2} rowStart={5} rowEnd={5} colSpan={1}  rounded="md">
            <Button
                as="a"
                size="lg"
                h="auto"
                w="full"
                py="2"
                fontSize="sm"
                bg="white"
                color="gray.600"
                borderLeft="8px"
                borderLeftColor="red.500"
                cursor="pointer"
                
                justifyContent="space-between"
              >
              <Stat mr="2">
                <Stack>
                  <Tag colorScheme="red">Atrasado</Tag>
                  <StatLabel fontSize="medium" mb="2">Terreno</StatLabel>
                  <StatHelpText>Prev: 30%</StatHelpText>
                  <Progress value={30} max={100} />
                  <StatHelpText>Real: 10%</StatHelpText>
                  <Progress colorScheme="red" value={10} max={100} />
                </Stack>
              </Stat>
            </Button>
          </GridItem>
          <GridItem rowSpan={2} colStart={initialColumn +2} colEnd={initialColumn +2} rowStart={6} rowEnd={6} colSpan={1}  rounded="md">
            <Button
                as="a"
                size="lg"
                h="auto"
                w="full"
                py="2"
                fontSize="sm"
                bg="white"
                color="gray.600"
                borderLeft="8px"
                borderLeftColor="red.500"
                cursor="pointer"
                
                justifyContent="space-between"

              >
              <Stat mr="2">
                <Stack>
                  <Tag colorScheme="red">Atrasado</Tag>
                  <StatLabel fontSize="medium" mb="2">Projeto</StatLabel>
                  <StatHelpText>Prev: 30%</StatHelpText>
                  <Progress value={30} max={100} />
                  <StatHelpText>Real: 10%</StatHelpText>
                  <Progress colorScheme="red" value={10} max={100} />
                </Stack>
              </Stat>
            </Button>
          </GridItem>
          <GridItem rowSpan={2} colStart={initialColumn +2} colEnd={initialColumn +2} rowStart={7} rowEnd={7} colSpan={1}  rounded="md">
            <Button
                as="a"
                size="lg"
                h="auto"
                w="full"
                py="2"
                fontSize="sm"
                bg="white"
                color="gray.600"
                borderLeft="8px"
                borderLeftColor="red.500"
                cursor="pointer"
                
                justifyContent="space-between"
                
              >
              <Stat mr="2">
                <Stack>
                  <Tag colorScheme="red">Atrasado</Tag>
                  <StatLabel fontSize="medium" mb="2">Material</StatLabel>
                  <StatHelpText>Prev: 30%</StatHelpText>
                  <Progress value={30} max={100} />
                  <StatHelpText>Real: 10%</StatHelpText>
                  <Progress colorScheme="red" value={10} max={100} />
                </Stack>
              </Stat>
            </Button>
          </GridItem>
        
          </>
        )
        :
        null
          }
          </>
        )
        :
        null
        }

        
      </Grid>
    </Flex>
  )
}
