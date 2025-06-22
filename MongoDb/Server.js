import { connect } from "mongoose";



let connectToMDB=async()=>{
    try{
await connect("mongodb+srv://pruthvi371:371Gmail@clusterpp.lz9hfrm.mongodb.net/?retryWrites=true&w=majority&appName=clusterpp");
console.log("Succesfully Conected to MDB");
        <h1>Code is added by PP</h1>
    }
    catch(err){
console.log("got an error");
    }
}
// pruthvi371:371Gmail
