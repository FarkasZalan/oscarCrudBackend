import { Nominee } from "../models/Nominee";
import request from "supertest";
import express from "express";

const app = express();

describe('Nominee API', async () => {
    beforeEach(async () => {
        await Nominee.deleteMany({});
    });

    it('should fetch all nominees', async () => {
        const res = await request(app).get('/api/nominees');
        expect(res.status).toBe(200);
        expect(res.body.length).toBe(0);
    });

    it('should create a nominee', async () => {
        const res = await request(app).post('/api/nominees').send({
            title: 'Test Nominee',
            description: 'Test Description',
            imageUrl: 'https://example.com/test.jpg',
            isVinner: true
        });
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Test Nominee');
        expect(res.body.description).toBe('Test Description');
        expect(res.body.imageUrl).toBe('https://example.com/test.jpg');
        expect(res.body.isVinner).toBe(true);
    });
});