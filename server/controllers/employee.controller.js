const EmployeeController = {};
const EmployeeDB = require('../models/employee')

EmployeeController.getEmployees = async (req, res) => {
    const employeesList = await EmployeeDB.find();
    res.json(employeesList);
}

EmployeeController.createEmployee = async (req, res) => {
    const employee = new EmployeeDB({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    console.log(employee);
    res.json({status: 'New Employee registered!'});
}

EmployeeController.getEmployee = async (req, res) => {
    const employee = await EmployeeDB.findById(req.params.id);
    res.json(employee);
}

EmployeeController.editEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    await EmployeeDB.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true});
    res.json({status: 'Employee updated!'});
}

EmployeeController.deleteEmployee = async (req, res) => {
    await EmployeeDB.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Removed'});
}

module.exports = EmployeeController;