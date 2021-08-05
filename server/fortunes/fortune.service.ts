/**
 * Data Model Interfaces
 */
import * as dotenv from "dotenv";
import * as path from "path";
import axios from "axios";
// import Airtable from "airtable";

import { AirtableFortune, Fortune } from "./fortune.interface";

/**
 * Config
 */

// load the environment variables from the .env file
dotenv.config({
  path: path.resolve(__dirname, "../../.env"),
});

const airtable = axios.create({
  baseURL: `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Fortunes`,
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    "Content-Type": `application/json`,
  },
});

/**
 * Service Methods
 */

export const getAllFortunes = async (): Promise<Fortune[]> => {
  const response = await airtable.get("/");
  const records = response?.data?.records;

  let fortunes: Fortune[] = records.map((record: AirtableFortune) => ({
    id: record.fields.id,
    notes: record.fields.notes,
    lastModified: record.fields.lastModified,
  }));

  return fortunes;
};

export const updateFortune = async (
  id: string,
  newFortune: string
): Promise<Fortune> => {
  const response = await airtable.patch(`/${id}`, {
    fields: newFortune,
  });
  const { data } = response;
  return {
    id: data.fields.id,
    notes: data.fields.notes,
    lastModified: data.fields.lastModified,
  };
};
