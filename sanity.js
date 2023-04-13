import { createClient } from "next-sanity";
import client from "./client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-04-03",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

export default sanityClient;
