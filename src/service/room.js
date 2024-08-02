import roomModel from '../model/roomModel.js'
const getAllRooms= async(req,res)=>{
    try{
        let room= await roomModel.find()

        res.status(200).send({
            message:"room data fetched successfully",
            data:room
        })
    }
    catch(error){
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const createRoom= async(req,res)=>{
    try{
       
        await roomModel.create(req.body)

        res.status(201).send({
            message:"Room created successfully"
        })
    }
    catch(error){
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const editRoom= async(req,res)=>{
    try{

        let {roomId}=req.params

        let room=await roomModel.findById(roomId)
        if(room)
            {
                 room.name = req.body.name;
                 room.capacity = req.body.capacity;
                 room.amenities = req.body.amenities;
                 room.images = req.body.images;
     
                 await room.save()
     
                 res.status(200).send({
                     message:"Room Edited Successfully"
                 })
            }
            else
            {
                 res.status(400).send({
                     message:"Invalid Room Id"
                 })
            }
     

       
    }
    catch(error){
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}




export default{
 getAllRooms,
 editRoom,
 createRoom
}