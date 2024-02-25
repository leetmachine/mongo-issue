import { clientPromise } from "./dbConnect";

export async function dbConnect() {
  const client = await clientPromise;
  return client;
}

export const log = (...args: unknown[]): void => {
  // eslint-disable-next-line no-console -- logger
  console.log("LOGGER: ", ...args);
};
