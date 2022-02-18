import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { formatJSONResponse, formatJSONErrorResponse } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import IMAGE_GENERATION_SERVICE from "@services/image-generation-service";
import schema from "./schema";

const imageGeneration: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const { text, width, height, fontSize, backgroundColor, textColor } =
    event.body;
  try {
    const imageBase64 = IMAGE_GENERATION_SERVICE.textToBase64({
      text,
      width: width || 1920,
      height: height || 1080,
      fontSize,
      backgroundColor,
      textColor,
    });

    return formatJSONResponse({ base64: imageBase64 });
  } catch (error) {
    return formatJSONErrorResponse(
      {
        error: {
          message: error.message,
          status: error.status,
        },
      },
      500
    );
  }
};

export const main = middyfy(imageGeneration);
