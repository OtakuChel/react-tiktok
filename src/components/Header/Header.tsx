import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search/Search";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>tiktok by Amirbek</h1>
      </Link>
      <Search />
    </header>
  );
};
