import { createTRPCClient } from "@trpc/client";
import { AppRouter } from ".";

const sleep = (delay = 100) =>
  new Promise((resolve) => {
    setTimeout(resolve, delay);
  });

async function main() {
  const client = createTRPCClient<AppRouter>({
    url: "URL",
  });
  await sleep();

  await client.query("auth.test");
}

main();
