const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Set PORT for Vercel
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Set timeout
}).then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch(err => {
      console.error("❌ MongoDB Connection Error:", err);
      process.exit(1);
  });

let activeCollection = "defaultCollection";

// ✅ Routes
app.get("/", (req, res) => {
    res.send("✅ API is running!");
});

// ✅ Export app for Vercel
module.exports = app;

// ✅ Start Server Locally
if (require.main === module) {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}
