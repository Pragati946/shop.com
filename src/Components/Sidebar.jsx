import { Flex, Stack, Text } from "@chakra-ui/layout";
import React,{useState} from "react";
import { Box, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {useSearchParams} from 'react'
// import {Stack} from "@chakra-ui/react"
const Sidebar = () => {

  const[serchperms,setSearchprems] = useSearchParams();

  useParams()
  
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const tasks = useSelector((state)=>state.AppReducer.tasks)
  const paresnalTask  = tasks.filter((item)=>item.tags.includes("personal"))

  const officalTask  = tasks.filter((item)=>item.tags.includes("Offical"))

  
  const otherTask  = tasks.filter((item)=>item.tags.includes("others"))

  const [selectedtag,setSelectedtag] = useState([])
const hadlechangeal =(tag) =>{
  // if tag is already selected remove it , else  

let newSelecteTag = [...selectedtag];
if(selectedtag.includes(tag)){
  newSelecteTag.splice(newSelecteTag.indexOf(tag),1)

}
else{
  newSelecteTag.push(tag);
}
selectedtag(newSelecteTag)

}


  return (
    <Box border="1px solid red " width="250px" height="100vh">
      <Stack direction="column">
        <Box height="15vh" border="1px solid red">
          {/* user profile */}
        </Box>

        <Box height="70vh" border="1px solid blue">
          {/*  */}
          <Flex direction="column" gap={'5px'} margin='5px'>
            <Box border='1px solid blue' padding='5px 0' onClick={()=>hadlechangeal("All")}>
              <Flex padding="0 10px">
                <Text>All</Text>
                <Text marginLeft={"auto"}>{tasks.length}</Text>
              </Flex>
            </Box>

            <Box border='1px solid blue' onClick={()=>hadlechangeal("personal")} >
              <Flex padding="0 10px">
                <Text>personal</Text>
                <Text marginLeft={"auto"}>{paresnalTask.length}</Text>
              </Flex>
            </Box>

            <Box border='1px solid blue' onClick={()=>hadlechangeal("Offical")}>
              <Flex padding="0 10px">
                <Text>Offical</Text>
                <Text marginLeft={"auto"}>{officalTask.length}</Text>
              </Flex>
            </Box>

            <Box border='1px solid blue' onClick={()=>hadlechangeal("others")}>
              <Flex padding="0 10px">
                <Text>others</Text>
                <Text marginLeft={"auto"}>{otherTask.length}</Text>
              </Flex>
            </Box>

          </Flex>
        </Box>

        <Box height="10vh" border="1px solid red">
          <Button width="100%">{isAuth && "LOGOUT"}</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Sidebar;
// personal,"Offical"