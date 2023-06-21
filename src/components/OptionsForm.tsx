import styles from "./OptionsForm.module.css";

export function OptionsForm() {
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
        defaultValue="joshuakgoldberg"
      ></input>

      <label className={styles.label} htmlFor="since">
        Since
      </label>
      <input id="since" type="date" name="since"></input>

      <label className={styles.label} htmlFor="ownership">
        Ownership
      </label>

      <select multiple name="ownership" id="ownership">
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
