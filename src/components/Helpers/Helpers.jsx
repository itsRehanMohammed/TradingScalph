export function convertToKebabCase(str) {
  return str
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}

export const handlechat = (msg) => {
  const phoneNumber = "919702439196"; // Your WhatsApp business number
  const message = encodeURIComponent(msg);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_self");
};

export const handleStartTrading = () => {
  const phoneNumber = "919702439196";
  const message = encodeURIComponent("Hello, I would like to inquire about your services.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_self");
};
