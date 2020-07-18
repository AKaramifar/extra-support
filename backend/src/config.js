import * as dotenv from "dotenv";
import aws from "aws-sdk";
dotenv.config();
const config = {
  env: process.env.ENV,
  port: process.env.PORT,
  appUrl: process.env.APP_URL,
  extraSupportClientUrl: process.env.EXTRA_SUPPORT_CLIENT_URL,
  volunteerFormClientUrl: process.env.VOLUNTEER_FORM_CLIENT_URL,
  jwtSecret: process.env.JWT_SECRET,
  db: {
    connection: process.env.DB_CONNECTION_STRING,
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  },
  aws: {
    config: {
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
      region: process.env.AWS_REGION,
    },
    bucket: process.env.ASSETS_BUCKET,
  },
};

const SES_API_VERSION = "2010-12-01";
const ses = new aws.SES({ ...config.aws.config, apiVersion: SES_API_VERSION });

export { ses };
export default config;
