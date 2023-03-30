import styles from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const Navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    Navigate(`activities/category/${inputValue}`);
  };

  return (
    <div className={styles.Navbar}>
      <ul>
        <Link className={styles.link} to="/">
          <li>Home</li>
        </Link>
        <Link className={styles.link} to="/about">
          <li>About</li>
        </Link>
        <Link className={styles.link} to="/activities">
          <li>Activities</li>
        </Link>
      </ul>
      <form onSubmit={onHandleSubmit} className={styles.search}>
        <input
          className={styles.searchText}
          type="text"
          value={inputValue}
          onChange={onHandleInput}
          placeholder="Cerca per categoria"
          required
        />
        <input className={styles.searchBtn} type="submit" value="invia" />
      </form>
    </div>
  );
};

export default Navbar;
