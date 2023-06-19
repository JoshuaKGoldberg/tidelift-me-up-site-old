import { PackageEstimate, tideliftMeUp } from "tidelift-me-up";
import { PackageOwnership } from "tidelift-me-up";

// todo; surely there's a better place to import this from
import { PageProps } from "../../.next/types/app/page";

export default async function Home({ searchParams }: PageProps) {
  const data = {
    username: searchParams["username"] as string,
    since: searchParams["since"] || undefined,
    ownership: searchParams["ownership"] as PackageOwnership[],
  };
  let result: Error | PackageEstimate[] | undefined;

  try {
    result = data.username ? await tideliftMeUp(data) : [];
  } catch (error) {
    result = error as Error;
  }

  return (
    <main>
      {JSON.stringify(data)}
      <form>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          required
          name="username"
          defaultValue="joshuakgoldberg"
        ></input>

        <label htmlFor="since">Since</label>
        <input id="since" type="since" name="since"></input>

        <label htmlFor="ownership">Ownership</label>

        <select multiple name="ownership" id="ownership">
          <option value="author">Author</option>
          <option value="maintainer">Maintainer</option>
          <option value="publisher">Publisher</option>
        </select>

        <button type="submit">submit meee</button>
      </form>
      {JSON.stringify(result)}
    </main>
  );
}
