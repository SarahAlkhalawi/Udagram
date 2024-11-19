import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: `${process.env.POSTGRES_USERNAME}`,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
 dbport: Number(process.env.POSTGRES_DB_PORT) || 5432,

  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  aws_access_key: process.env.AWS_ACCESS_KEY_ID,
  aws_secret: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.AWS_SESSION_TOKEN,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('AWS_BUCKET:', process.env.AWS_BUCKET);

console.log('Database 2 Host:', process.env.POSTGRES_HOST);

console.log(config);