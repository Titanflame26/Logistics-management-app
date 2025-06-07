import db from '../models/index.js';
const { Vessel } = db;

// Create Vessel
export const createVessel = async (req, res) => {
  try {
    const vessel = await Vessel.create(req.body);
    res.status(201).json(vessel);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get All Vessels
export const getAllVessels = async (req, res) => {
  try {
    const vessels = await Vessel.findAll();
    res.status(200).json(vessels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get One Vessel
export const getVesselById = async (req, res) => {
  try {
    const vessel = await Vessel.findByPk(req.params.id);
    if (!vessel) return res.status(404).json({ error: "Vessel not found" });
    res.status(200).json(vessel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update Vessel
export const updateVessel = async (req, res) => {
  try {
    const updated = await Vessel.update(req.body, { where: { vessel_id: req.params.id } });
    if (updated[0] === 0) return res.status(404).json({ error: "Vessel not found" });
    res.status(200).json({ message: "Vessel updated successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete Vessel
export const deleteVessel = async (req, res) => {
  try {
    const deleted = await Vessel.destroy({ where: { vessel_id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "Vessel not found" });
    res.status(200).json({ message: "Vessel deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
