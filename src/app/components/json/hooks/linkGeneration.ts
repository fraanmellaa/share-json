export const generateLink = () => {
  const randomString =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  return {
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/view/${randomString}`,
    json_id: randomString,
  };
};
