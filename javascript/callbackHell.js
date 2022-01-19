
/*
    Task-
    1. call the api in 2s
    2. after that print the students after 2s
    3. after thar print the roll no after 2s
*/
const records = {
    name:"adarsh",
    age:19,
    roll_no:10
}

setTimeout(()=>{
console.log("so its printing");
    
    setTimeout(()=>{
            
        console.log(records);

            setTimeout((roll_no)=>{
                
                console.log(roll_no);

            },2000,records.roll_no);
    },2000);
},2000);