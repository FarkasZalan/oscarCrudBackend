import { Nominee } from "../models/Nominee";
import { Request, Response } from "express";

export const getNominees = async (req: Request, res: Response) => {
    try {
        const nominees = await Nominee.find();
        res.status(200).json(nominees);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

export const createNominee = async (req: Request, res: Response) => {
    const { title, description, imageUrl, isVinner } = req.body;

    try {
        const nominee = await Nominee.create({ title, description, imageUrl, isVinner });
        await nominee.save();
        res.status(201).json(nominee);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

