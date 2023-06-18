import { tideliftMeUp } from "tidelift-me-up";
import { PackageOwnershipForm } from "tidelift-me-up/lib/packageOwnershipForms";

// todo; surely there's a better place to import this from
import { PageProps } from "../../.next/types/app/page";

export default async function Home({ searchParams }: PageProps) {
  const data = {
    username: searchParams["username"] as string,
    since: searchParams["since"] || undefined,
    ownership: searchParams["ownership"] as PackageOwnershipForm[],
  };
  const result = data.username ? await tideliftMeUp(data) : [];

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
