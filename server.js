import http from 'node:http'
import {getDataFromDb} from './db.js'
const PORT = 8000;

const server = http.createServer(async (req,res)  => {
//     res.write("hello from the server this is the response \n")
//     res.write("it is response  \n")
//    res.write("hello from ther server before ending res")

if (req.url === "/getimage" && req.method === "GET"){
const places =  await getDataFromDb()
res.write(JSON.stringify(places));
}
    res.end()
})

server.listen(PORT,() => {
    console.log(`running on the network port ${PORT}`)
})
 