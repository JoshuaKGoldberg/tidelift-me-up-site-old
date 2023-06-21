import { PackageEstimate, tideliftMeUp } from "tidelift-me-up";
import { PackageOwnership } from "tidelift-me-up";

// todo; surely there's a better place to import this from
import { PageProps } from "../../.next/types/app/page";

import styles from "./page.module.css";
import { ResultDisplay } from "~/components/ResultDisplay";
import { OptionsForm } from "~/components/OptionsForm";

export default async function Home({ searchParams }: PageProps) {
  const data = {
    username: searchParams["username"] as string,
    since: searchParams["since"] || undefined,
    ownership: searchParams["ownership"] as PackageOwnership[],
  };
  let result: Error | PackageEstimate[];

  try {
    result = data.username ? await tideliftMeUp(data) : undefined;
  } catch (error) {
    result = error as Error;
  }

  return (
    <>
      <main className={styles.main}>
        <h1>tidelift-me-up</h1>
        <p>
          Finds your npm packages that are eligible for Tidelift funding. 💸
        </p>
        <OptionsForm />
        <ResultDisplay result={result} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/JoshuaKGoldberg/tidelift-me-up"
          target="_blank"
        >
          github.com/JoshuaKGoldberg/tidelift-me-up
        </a>{" "}
        &
        <a
          href="https://github.com/JoshuaKGoldberg/tidelift-me-up-site"
          target="_blank"
        >
          github.com/JoshuaKGoldberg/tidelift-me-up-site
        </a>
      </footer>
    </>
  );
}
