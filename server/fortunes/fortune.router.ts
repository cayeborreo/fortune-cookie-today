/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as FortuneService from "./fortune.service";
import { Fortune } from "./fortune.interface";

/**
 * Router Definition
 */

export const fortuneRouter = express.Router();

/**
 * Controller Definitions
 */

// GET fortune
fortuneRouter.get("/", async (req: Request, res: Response) => {
  try {
    let fortunes: Fortune[] = await FortuneService.getAllFortunes();
    res.status(200).send(fortunes);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// PATCH fortune/:id
fortuneRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const recordId: string = req.params.id;
    const newFortune: string = req.body;
    const updatedFortune = await FortuneService.updateFortune(
      recordId,
      newFortune
    );
    res.status(201).json(updatedFortune);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
