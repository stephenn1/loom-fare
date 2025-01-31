export const encodeData = (data: Record<string, string | number | boolean>) => {
  const encoded = btoa(JSON.stringify(data)); // Base64 encoding
  return encoded;
};

export const decodeData = (encoded: string) => {
  const decoded = JSON?.parse(atob(encoded));
  return decoded;
};
