import db from '../models/index.js';
const { Supplier } = db;

export const createSupplier = async (req, res) => {
  console.log("🛠 Received supplier POST request:", req.body); // log incoming data

  try {
    const newSupplier = await Supplier.create(req.body); // <- might fail here
    res.status(201).json(newSupplier);
  } catch (err) {
    console.error("❌ Error creating supplier:", err);  // full error in backend console
    res.status(500).json({ error: 'Server error while creating supplier' });
  }
};


export const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findByPk(req.params.id);
    if (!supplier) return res.status(404).json({ message: "Supplier not found" });
    res.json(supplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const [updated] = await Supplier.update(req.body, {
      where: { supplier_id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: "Supplier not found" });
    const updatedSupplier = await Supplier.findByPk(req.params.id);
    res.json(updatedSupplier);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteSupplier = async (req, res) => {
  try {
    const deleted = await Supplier.destroy({ where: { supplier_id: req.params.id } });
    if (!deleted) return res.status(404).json({ message: "Supplier not found" });
    res.json({ message: "Supplier deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
