import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const data = await api.mirror("Mirror from tRPC");

  const test = api.test();

  return (
    <HydrateClient>
      <main>
        {data}
        <br />
        <br />
        {test}
      </main>
    </HydrateClient>
  );
}
