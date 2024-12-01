import { applyDecorators, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiBody,
} from '@nestjs/swagger';

export enum RESPONSE_MESSAGE {
  SUCCESS = 'Success',
  NOT_FOUND = 'Api Not Found',
  UNAUTHORIZED_USER = 'Unauthorized User',
  SERVER_ERROR = 'Internal Server Error',
}

export const ApiDescription = (description: string, response?: any) => {
  return applyDecorators(
    HttpCode(HttpStatus.OK),
    ApiOperation({
      description,
    }),
    ApiResponse({ type: response }),
    ApiOkResponse({ description: RESPONSE_MESSAGE.SUCCESS }),
    ApiNotFoundResponse({ description: RESPONSE_MESSAGE.NOT_FOUND }),
    ApiInternalServerErrorResponse({
      description: RESPONSE_MESSAGE.SERVER_ERROR,
    }),
  );
};

export const ApiFile =
  (fileName = 'metadata') =>
  (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          originalName: { type: 'string' },
          url: { type: 'string' },
          mimeType: { type: 'string' },
          type: { type: 'string' },
          status: { type: 'string' },
          size: { type: 'number' },
          metadata: {
            type: 'string',
            format: 'binary',
          },
          [fileName]: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    })(target, propertyKey, descriptor);
  };
