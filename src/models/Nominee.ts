import Joi from "joi";
import { model, Schema } from "mongoose";

// Nominee Schema and Joi validation
export const NomineeSchemaValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    imageUrl: Joi.string().required(),
    isVinner: Joi.boolean().required()
});

// Nominee Interface
interface INominee {
    title: string;
    description: string;
    imageUrl: string;
    isVinner: boolean;
}

// Nominee Schema
const NomineeSchema = new Schema<INominee>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    isVinner: { type: Boolean, required: true }
});

// Nominee Model
export const Nominee = model<INominee>("Nominee", NomineeSchema);