import express from "express";
const router = express.Router();
import {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} from "../controller/openaiController.js";

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

export default router;
