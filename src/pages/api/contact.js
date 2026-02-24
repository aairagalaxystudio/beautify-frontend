export default function handler(req,res){

if(req.method==="POST"){

return res.status(200).json({
message:"Message received"
})

}

res.status(405).end()

}