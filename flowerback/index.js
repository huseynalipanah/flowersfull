import express from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;
const flowerSchema = new Schema({
  img: String,
  name: String,
  price: Number,
});
const Flower = mongoose.model("Flower", flowerSchema);
app.get("/flower", async (req, res) => {
  try {
    const Flowers = await Flower.find();
    res.json(Flowers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/flower/:id", async (req, res) => {
  try {
    const flower = await Flower.findById(req.params.id);
    if (!flower) {
      res.status(404).json({ message: "Flower not found!" });
    } else {
      res.json(flower);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/flower", async (req, res) => {
  const Flowers = new Flower(req.body);
  try {
    await Flowers.save();
    res.status(201).json(Flowers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.put("/flower/:id", async (req, res) => {
    try {
      const flower = await Flower.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!flower) {
        res.status(404).json({ message: "Flower not found!" });
      } else {
        res.json(flower);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  app.delete("/flower/:id", async (req, res) => {
    try {
      const flower = await Flower.findByIdAndDelete(req.params.id);
      if (!flower) {
        res.status(404).json({ message: "Flower not found!" });
      } else {
        res.status(200).json({ message: "Flower Deleted" });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
mongoose.connect("mongodb+srv://huz3yn:huseyn04ru@hakunamatata.wsdwnh9.mongodb.net/")
  .then(() => console.log("DataBase Connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
 