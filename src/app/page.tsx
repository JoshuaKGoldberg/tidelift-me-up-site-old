import { tideliftMeUp } from "tidelift-me-up";

export default async function Home() {
  const result = await tideliftMeUp();

  return (
    <main>
      Hello, world! :3
      {JSON.stringify(result)}
    </main>
  );
}
