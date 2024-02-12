import request from 'supertest';
import app from './server'

describe('GET /romannumeral', () => {
    it('should return the correct Roman numeral for a valid number', async () => {
        const response = await request(app)
            .get('/romannumeral')
            .query({ query: 123 });
        console.log(`res`, response)
        expect(response.status).toBe(200);
        expect(response.body.input).toBe(123);
        expect(response.body.output).toBe('CXXIII');
    });

    it('should return an error for an invalid number', async () => {
        const response = await request(app)
            .get('/romannumeral')
            .query({ query: 'abc' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid number. Please provide a positive integer between 1 and 3999.');
    });

    it('should return an error for a number out of range', async () => {
        const response = await request(app)
            .get('/romannumeral')
            .query({ query: '4000' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Invalid number. Please provide a positive integer between 1 and 3999.');
    });
});
