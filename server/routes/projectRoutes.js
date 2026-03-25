const express = require("express");
const router = express.Router();
const cloudinary = require("../config/cloudinary");

// ✅ GET ALL MEDIA FROM CLOUDINARY
router.get("/", async (req, res) => {
  try {
    const result = await cloudinary.search
      .expression("folder:vijval_balaji") // ⚠️ EXACT folder name
      .sort_by("created_at", "desc")
      .max_results(50)
      .execute();

    const media = result.resources.map((item) => ({
      url: item.secure_url,
      type: item.resource_type // image or video
    }));

    res.json(media);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching media" });
  }
});

module.exports = router;