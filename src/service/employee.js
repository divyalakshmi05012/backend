import  employeeModel from "../model/employeeModels.js"
import auth from "../common/Auth.js"

const getAllEmployee= async(req,res)=>{
    try{
        // console.log(req.headers)
        let user= await employeeModel.find({},{password:0}); //show without password
        res.status(200).send({
            message:"Data fetched successfully",
            data:user
        })
    }
    catch(error){
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getEmployeeById = async(req,res)=>{
    try {
        let user = await employeeModel.findById(req.params.id);
        if(user)
        {
            res.status(200).send({
                message:"Data Fetch Successfull",
                data:user
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error",
            error
        })
    }
}


const createEmployee= async(req,res)=>{
    try{
        let user=await employeeModel.findOne({email:req.body.email})
        if(!user)
        {
            req.body.password = await auth.hashPassword(req.body.password)
            await employeeModel.create(req.body)

            res.status(201).send({
                message:"employee created successfully"
            })

        }
        else{
            res.status(400).send({
                message:`Employee with this email ${req.body.email} already exsist`
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
    getAllEmployee,
    getEmployeeById,
    createEmployee
}