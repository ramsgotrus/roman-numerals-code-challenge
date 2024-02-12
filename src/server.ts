import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"
import { getRomannumeral } from "./coverter/convertToRomanAPI"

dotenv.config()

const app: Express = express();

const port = process.env.PORT || 8080;

// API endpoint to handle requests to convert a number to a Roman numeral
app.get('/romannumeral', (req, res) => {
    const numberStr = req.query.query as string;
    const number = parseInt(numberStr)
    if (isNaN(number) || number <= 0 || number > 3999) {  //validating the number query parameter
        res.status(400).json({ error: 'Invalid number. Please provide a positive integer between 1 and 3999.' });
    } else {
        getRomannumeral(number).then((romanNumeral) => {
            res.json(romanNumeral);
        }).catch((error) => {
            res.status(400).json({ error: error.message })
        });

    }
});

app.listen(port, () => {
    console.log(`[Server]: Server is running at http ://localhost:${port}`)
})

export default app