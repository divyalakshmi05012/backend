import mongoose from "./index.js";
import { validateEmail,validateMobile} from '../common/validations.js'


const employeeSchema = new mongoose.Schema({
   firstName:{
        type:String,
        required:[true,"First Name is Required"]
    },
    lastName:{
        type:String,
        required:[true,"Last Name is Required"]
    },
    email:{
        type:String,
        required:[true,"Email  is Required"],
        validate:{
            validator: validateEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    password:{
        type:String,
        required:[true,"password is Required"]
    },
    mobile:{
        type:String,
        required:[true,"Mobile  is Required"],
        validate:{
            validator: validateMobile,
            message: props => `${props.value} is not a valid mobile number!`,
           
        }
    },
    role:{
        type:"string",
        enum: {
             values: ['Employee', 'Admin'],
            message: '{VALUE} is not supported'
        }
        // enumulator is accepted only admin or employess otherwise throw error
    },
    createdAt:{
            type:Date,
            default:Date.now
    },
    status:{
        type:"boolean",
        default:true
        // createdat and status is default value
    }
},
{
    collection:'employee',
    versionKey:false
})


const employeeModel= new mongoose.model('employee',employeeSchema)
//  employees is a collection name


export default employeeModel