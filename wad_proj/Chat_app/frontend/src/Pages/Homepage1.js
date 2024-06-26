
import React, { useEffect } from "react";
import { Box, Container, Text, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import Login from '../Components/Authentication/Login';
import Signup from '../Components/Authentication/Signup';
import { useHistory } from "react-router-dom";



function Homepage1() {
const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (<Container maxW='xl' centerContent>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px">
      <Text fontSize="4xl" fontFamily="Work sans" color="black" textAlign="center">Chit-Chat</Text>
    </Box >

    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" textColor='black'>
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <Login /> 
            </TabPanel>
            <TabPanel>
               <Signup /> 
            </TabPanel>
          </TabPanels>
        </Tabs>
    </Box>
  </Container>
    
  )
};

export default Homepage1