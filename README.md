<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A <a href="http://nodejs.org" target="_blank">NestJs</a> package that simplifies the integration and setup of Swagger documentation for your APIs. With just a few lines of code, generate Swagger UI, API specs, and interactive documentation.</p>
  
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Features

- Quick and easy setup for Swagger in NestJS applications.
- Automatically generates API documentation based on your decorators.
- Highly customizable to fit your application's needs.
- Supports OpenAPI 3.x.

## Installation

```bash
# Using npm
$ npm install nestjs-quick-swagger --save

# Using yarn
$ yarn add nestjs-quick-swagger
```

## Configuration

# SWAGGER env vars
SWAGGER_TITLE="QUICK SWAGGER"

SWAGGER_DESCRIPTION="QUICK SWAGGER API"

SWAGGER_VERSION="1.0"

SWAGGER_TAGS="Template"

SWAGGER_AUTH_USERNAME="test"

SWAGGER_AUTH_PASSWORD="test@123"

SWAGGER_CONTACT_NAME='sandeepmehta.com'

SWAGGER_CONTACT_EMAIL='mehta2155@gmail.com'

SWAGGER_CONTACT_URL='https://sandeepmehta.com/login'

SWAGGER_PROJECT_DETAILS='https://github.com/sandeepmehta2155/discovery-service'

SWAGGER_LOCAL_ENDPOINT='http://localhost:4000/'

SWAGGER_STAG_ENDPOINT='https://sandeepmehta.com/apis'

## Usage

const app = await NestFactory.create(AppModule);

SwaggerModule.setup('/apis/docs', app, createDocument(app));

await app.listen(3005);

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Stay in touch

- Author - [Sandeep Mehta](https://www.linkedin.com/in/sandeep-meta/)
- Website - [https://nestjs.com](https://nestjs.com/)
