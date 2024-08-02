import {Router} from 'express'
import verify from '../middleWare/verify.js';
import verifyAdmin from '../middleWare/verifyAdmin.js';
import employeeService from '../service/employee.js'
const routes = Router()

routes.get('/',verify,verifyAdmin,employeeService.getAllEmployee);
routes.get('/:id',verify,employeeService.getEmployeeById);
routes.post('/',employeeService.createEmployee);

export default routes