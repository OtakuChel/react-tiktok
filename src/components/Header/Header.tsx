import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search/Search";

import MusicNoteIcon from "@mui/icons-material/MusicNote";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.linkDiv} to="/">
        <MusicNoteIcon className={styles.icon} />
        <h1>TikTok</h1>
      </Link>
      <Search />
    </header>
  );
};
