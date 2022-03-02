import { createCanvas } from "canvas";

const IMAGE_GENERATION_SERVICE = {
  textToBase64: ({
    text = "Placeholder",
    width = 1920,
    height = 1080,
    fontSize = "24px",
    backgroundColor = "#ACACAC",
    textColor = "#FEFEFF",
  }) => {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Set canvas Background color and apply
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text color and apply
    ctx.fillStyle = textColor;
    ctx.font = `${fontSize} sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Draw text and return base64
    ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    return canvas.toDataURL().replace(/(\r\n|\n|\r)/gm, "");

    // const dataURL = canvas.toDataURL();
    // return dataURL;
  },
};

export default IMAGE_GENERATION_SERVICE;
