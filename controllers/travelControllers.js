const TravelModel = require("../models/Travel.model");

module.exports = {
  getAllTravels: async (req, res) => {
    try {
      const travels = await TravelModel.find();
      if(!travels) {
        res.status(404).json({
          ok:false,
          message:"Not found"
        })
      }
      res.status(200).json({
        ok: true,
        travels: travels.reverse()
      });
    } catch (error) {
      console.log(error + " ");
    }
  },
  getTravelById: async (req, res) => {
    try {
      const travel = await TravelModel.findById(req.params.id);

      if (!travel) {
        return res.status(404).json({
          ok: false,
          message: "Travel not found",
        });
      }

      res.status(200).json({
        ok: true,
        travel,
      });
    } catch (e) {
      console.log(e + " ");
    }
  },
  addTravelBook: async (req, res) => {
    try {
      const { title, image, descr } = req.body;

      const newTravel = await TravelModel.create({ title, image, descr });

      res.status(201).json({
        ok: true,
        message: "Successfully created travel book",
        newTravel,
      });
    } catch (e) {
      console.log(e + " ");
    }
  },
  updateTravelBook: async (req, res) => {
    try {
      const { title, image, descr } = req.body;

      const updatedTravel = await TravelModel.findByIdAndUpdate(req.params.id, {
        title,
        image,
        descr,
    })

      res.status(200).json({
        ok: true,
        message: "Successfully updated travel book",
        updatedTravel,
      });
    } catch (e) {
      console.log(e + " ");
    }
  },
  removeTravelBook: async (req, res) => {
    try {
      await TravelModel.findByIdAndRemove(req.params.id)

      res.status(200).json({
        ok: true,
        message: "Successfully deeleted",
      });
    } catch (e) {
      console.log(e + " ");
    }
  },
};
