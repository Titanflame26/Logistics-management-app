import db from '../models/index.js';
const { Aeroplane } = db;

// Create Aeroplane
export const createAeroplane = async (req, res) => {
  try {
    const aeroplane = await Aeroplane.create(req.body);
    res.status(201).json(aeroplane);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Aeroplanes
export const getAllAeroplanes = async (req, res) => {
  try {
    const planes = await Aeroplane.findAll();
    res.status(200).json(planes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One Aeroplane
export const getAeroplaneById = async (req, res) => {
  try {
    const plane = await Aeroplane.findByPk(req.params.id);
    if (!plane) return res.status(404).json({ error: "Aeroplane not found" });
    res.status(200).json(plane);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Aeroplane
export const updateAeroplane = async (req, res) => {
  try {
    const updated = await Aeroplane.update(req.body, {
      where: { aeroplane_id: req.params.id }
    });
    if (updated[0] === 0) return res.status(404).json({ error: "Aeroplane not found" });
    res.status(200).json({ message: "Aeroplane updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Aeroplane
export const deleteAeroplane = async (req, res) => {
  try {
    const deleted = await Aeroplane.destroy({
      where: { aeroplane_id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: "Aeroplane not found" });
    res.status(200).json({ message: "Aeroplane deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
