import { JsonData } from "@/app/store/jsonStore";

const MAX_MB_JSON_SIZE = 0.5;

export const generateLink = () => {
  const randomString =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/view/${randomString}`,
    json_id: randomString,
  };
};

export const isJsonSizeValid = (
  json: Record<string, JsonData> | JsonData[] | null
) => {
  return calculateJsonSize(json) <= MAX_MB_JSON_SIZE;
};

const calculateJsonSize = (
  json: Record<string, JsonData> | JsonData[] | null
) => {
  const jsonStr = JSON.stringify(json);
  return new Blob([jsonStr]).size / 1024;
};
