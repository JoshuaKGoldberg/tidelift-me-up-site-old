import { PackageOwnership } from "tidelift-me-up";
import styles from "./OptionsForm.module.css";

export interface FormOptions {
  ownership?: PackageOwnership[];
  since?: Date;
  username?: string;
}

export interface OptionsFormProps {
  options: FormOptions;
}

export function OptionsForm({ options }: OptionsFormProps) {
  return (
    <form className={styles.optionsForm}>
      <label className={styles.label} htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        required
        name="username"
        defaultValue={options.username}
      ></input>

      <label className={styles.label} htmlFor="since">
        Since
      </label>
      <input
        defaultValue={options.since && options.since.toString()}
        id="since"
        name="since"
        type="date"
      ></input>

      <label className={styles.label} htmlFor="ownership">
        Ownership
      </label>

      <select
        defaultValue={options.ownership}
        multiple
        name="ownership"
        id="ownership"
      >
        <option value="author">Author</option>
        <option value="maintainer">Maintainer</option>
        <option value="publisher">Publisher</option>
      </select>

      <button className={styles.submit} type="submit">
        submit meee
      </button>
    </form>
  );
}
