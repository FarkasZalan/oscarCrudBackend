import express from "express";
import { createNominee, getNominees } from "../controllers/normineeController";

const router = express.Router();

router.get("/", getNominees);
router.post("/", createNominee);

export { router as nomineeRoutes };