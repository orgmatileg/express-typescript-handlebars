import dotenv from "dotenv";

function initLoadEnvFile() {
  // Load .env file
  const result = dotenv.config();

  if (result.error) { throw result.error; }
}

export default initLoadEnvFile;
