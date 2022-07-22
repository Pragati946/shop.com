import React,{useEffect} from 'react';
import {Box, Flex,Text} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react'; 
import {getTodo} from '../Redux/AppReducer/action'
import TaskCard from '../Components/TaskCard';
const Home = () => {
    const tasks = useSelector((state)=>state.AppReducer.tasks)

    const dispatch = useDispatch()
   
    const getTasksHendler = useCallback(()=>{
              
       dispatch(getTodo())
        
},[dispatch],)

useEffect(() => {
  
    if(tasks.length===0){
        getTasksHendler()
    }
    
}, [getTasksHendler,tasks.length])

// console.log(getTodo)
    return <Box border="1px solid green" width="100%">
<Flex justifyContent="space-around">
    {/* {todo} */}
   <Box border="1px solid black" width="250px" height="95vh">
    <Box>
        <Text textAlign="center">Todo</Text>
    </Box>
    {tasks.length>0 && tasks.filter(item=>
        
        item.task_status==="todo").map(item=>{
            return <TaskCard key={item.id} {...item} colorScheme="red"/>
            
        })
        }
   </Box>
   {/* in-progress */}
   <Box border="1px solid black" width="250px" height="95vh">
   <Box>
        <Text textAlign="center">in-progress</Text>
    </Box>
    {tasks.length>0 && tasks.filter(item=>
        
        item.task_status==="in-progres").map(item=>{
            return <TaskCard key={item.id} {...item} colorScheme="yellow" />
            
        })
        }
 
   </Box>
   {/* done */}
   <Box border="1px solid black" width="250px" height="95vh">
   <Box>
        <Text textAlign="center">Done</Text>
    </Box>
    {tasks.length>0 && tasks.filter(item=>
        
        item.task_status==="done").map(item=>{
            return <TaskCard key={item.id} {...item} colorThem="blue"/>
            
        })
        }
   </Box>
   
</Flex>

    </Box>
}



export default Home;

// "id": 4,
// "title": "task 4",
// "description" :"D for task 4",
// "task_status" :"todo",
// "tags" :["others"],
// "subTasks":[
//   {"subTaskTitle":"task4: sub task 1",
// "status":true},
// {"subTaskTitle":"task4: sub task 2",
// "status":false}