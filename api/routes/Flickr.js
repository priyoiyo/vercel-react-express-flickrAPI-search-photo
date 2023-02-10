const express = require("express");
const router = express.Router();

const { GetFlickrHome, PostFlickrByTag } = require("../controllers/Flickr");

router.get("/", GetFlickrHome);
router.post("/", PostFlickrByTag);


module.exports = router;
