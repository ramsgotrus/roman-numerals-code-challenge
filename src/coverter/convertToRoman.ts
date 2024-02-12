import { RomannumberalModel } from "../models/RomannumeralModel";


//Function to convert a decimal number to a Roman numeral
export async function convertToRoman(req: any): Promise<RomannumberalModel> {
    const number = req
    const romanNumerals: { [key: number]: string } = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }

    let result: string = '';

    const sortedKeys = Object.keys(romanNumerals).map(Number).sort((a, b) => b - a);

    for (const key of sortedKeys) {
        while (req >= key) {
            result += romanNumerals[key];
            req -= key;
        }
    }
    return Promise.resolve({
        input: number,
        output: result
    });
}

export default { convertToRoman }