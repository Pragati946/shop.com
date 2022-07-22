
const getLoaclData = (key) =>{
    if(key){
        const data = localStorage.getItem(key)
        return data
    }
}
 const sevlocalData = (key,value)=>{
    if(key && value){
        localStorage.setItem(key,value)
    }
 }

 export {getLoaclData,sevlocalData}