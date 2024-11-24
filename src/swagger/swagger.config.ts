import { SwaggerConfig } from './swagger.interface';
import * as dotenv from 'dotenv';
dotenv.config();

/**
 * Configuration for the swagger UI (found at /api).
 * Change this to suit your app!
 */
export const SWAGGER_CONFIG: SwaggerConfig = {
  TITLE: process.env.SWAGGER_TITLE,
  DESCRIPTION: process.env.SWAGGER_DESCRIPTION,
  VERSION: process.env.SWAGGER_VERSION,
  TAGS: (process.env.SWAGGER_TAGS.split(', ') as unknown as string[]) ?? [
    'API',
  ],
};

const customFavicon = () => {
  return process.env.SWAGGER_ASSETS_URL;
};
const customCss = () => {
  return `
  .topbar-wrapper { content:url(' ${process.env.SWAGGER_ASSETS_URL} '); width:242px; height:auto; }`;
};

const swaggerOptions = {
  persistAuthorization: true,
};

export const customOptions = () => ({
  customfavIcon: customFavicon(),
  customCss: customCss(),
  swaggerOptions,
});
