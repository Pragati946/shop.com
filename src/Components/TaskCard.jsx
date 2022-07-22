import { Badge, Box, Flex, Stack,Text } from '@chakra-ui/layout';
import React,{useState}from 'react';
import {EditIcon} from "@chakra-ui/icons";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';

const TaskCard = ({title,
    description,
    task_status,
    tags,
    subTasks,
    colorScheme ="green"
    
    }) => {

        const [checkbox,setCheckbox] = useState(()=>{
            let data = subTasks.filter(item=>{
                return item.status && item.subTaskTitle
            })
            .map((item)=> item.subTaskTitle)
            return data ;
        }
            
        )

    return <Box width={"230px" } padding="10px" border='1px solid red' marginLeft="20px">
        <Flex justifyContent={"space-between"} >
        <Text>{title}</Text>
        <EditIcon />
        </Flex>
        <Box>
            <Stack direction="row">
                {tags.length && tags.map((item,ind)=>{
                    return(
                        <Badge key={ind} >  {item}</Badge>
                    )
                })}
            </Stack>
        </Box>
        <Text>{description}</Text>
  <Box>
  <CheckboxGroup defaultValue={checkbox}>
           {subTasks.length && subTasks.map((item,ind)=>(
            <Checkbox key={ind} size='md' colorScheme="red" value={item.subTaskTitle} >{item.subTaskTitle}</Checkbox>
           ))}
        </CheckboxGroup>

        <p>ajhx</p>
  </Box>
        
    </Box>
}



export default TaskCard;

// "id": 4,
// "title": "task 4",
// "description" :"D for task 4",
// "task_status" :"todo",
// "tags" :["others"],
// "su":[
//   {"subTaskTitle":"task4: sub task 1",
// "status":true},
// {"subTaskTitle":"task4: sub task 2",
// "status":false}