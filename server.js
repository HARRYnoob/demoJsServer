import http from 'node:http';
import { getDataFromDb } from "./db.js";
const server = http.createServer(async (req,res)=>{
    const data = await getDataFromDb();
    if (req.url === "/destinationName/Ladakh" && req.method === "GET"){
       
       const result = data.find(p => p.destinationName === "Ladakh")
       
        res.end(JSON.stringify(result.shortDescription));
    }
   
})

server.listen(8000,()=>{
    console.log('Server is running on port 8000');
})