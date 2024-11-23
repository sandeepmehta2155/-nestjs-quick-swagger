import { ConfigService } from '@nestjs/config';
import { SwaggerConfig } from './swagger.interface';

/**
 * Configuration for the swagger UI (found at /api).
 * Change this to suit your app!
 */
export const SWAGGER_CONFIG: SwaggerConfig = {
  TITLE: 'SUKSHI SWAGGER',
  DESCRIPTION: 'SUKSHI API',
  VERSION: '1.0',
  TAGS: ['Template'],
};

const customFavicon = (app) => {
  const configService = app.get(ConfigService);
  return `${configService.get('APP_ORIGIN')}/swagger/sal.svg`;
};
const customCss = (app) => {
  const configService = app.get(ConfigService);
  return `
  .topbar-wrapper { content:url('${configService.get(
    'APP_ORIGIN',
  )}/swagger/sal.svg'); width:242px; height:auto; }`;
};

const swaggerOptions = {
  persistAuthorization: true,
};

export const customOptions = (app) => ({
  customfavIcon: customFavicon(app),
  customCss: customCss(app),
  swaggerOptions,
});
