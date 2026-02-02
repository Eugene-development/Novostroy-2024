"use server";
import axios from "axios";

const apiMAIL = {
  baseURL: process.env.NEXT_PUBLIC_MAIL,

  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY}`,
  },
};
// TODO: через дефис
const url = `/send-form-designer-request`;

export async function send(data) {
  await axios.post(url, data, apiMAIL);
}
