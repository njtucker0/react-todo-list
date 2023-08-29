import React from "react";
import Button, { SelectButton } from "../components/Button";
import styles from "../styles/modules/app.module.scss";

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button>Click Me!</Button>
      <SelectButton>
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Completed</option>
      </SelectButton>
    </div>
  );
}

export default AppHeader;
