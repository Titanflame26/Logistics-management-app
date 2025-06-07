import db from '../models/index.js';
const { Employee } = db;

export const createEmployee = async (req, res) => {
  try {
    const emp = await Employee.create(req.body);
    res.status(201).json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEmployeeById = async (req, res) => {
  try {
    const emp = await Employee.findByPk(req.params.id);
    if (!emp) return res.status(404).json({ message: "Employee not found" });
    res.json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const [updated] = await Employee.update(req.body, {
      where: { employee_id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Employee not found" });
    const updatedEmp = await Employee.findByPk(req.params.id);
    res.json(updatedEmp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const deleted = await Employee.destroy({ where: { employee_id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Employee not found" });
    res.json({ message: "Employee deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
