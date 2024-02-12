import { RomannumberalModel } from "../models/RomannumeralModel"
import { convertToRoman } from "./convertToRoman"

export async function getRomannumeral(_queryInput: number): Promise<RomannumberalModel> {
    return convertToRoman(_queryInput)
}