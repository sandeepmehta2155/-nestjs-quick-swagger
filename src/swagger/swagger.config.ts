import { ConfigService } from '@nestjs/config';
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
  TAGS: (process.env.SWAGGER_TAGS as unknown as string[]) ?? ['API'],
};

const customFavicon = (app) => {
  const configService = app.get(ConfigService);
  return `${configService.get('APP_ORIGIN')}/swagger/img.svg`;
};
const customCss = (app) => {
  const configService = app.get(ConfigService);
  return `
  .topbar-wrapper { content:url('${configService.get(
    'APP_ORIGIN',
  )}/swagger/img.svg'); width:242px; height:auto; }`;
};

const swaggerOptions = {
  persistAuthorization: true,
};

export const customOptions = (app) => ({
  customfavIcon: customFavicon(app),
  customCss: customCss(app),
  swaggerOptions,
});
