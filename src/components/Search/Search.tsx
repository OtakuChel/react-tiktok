import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useMatch, useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMatch = useMatch("search");

  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    if (isMatch) return;

    setValue("");
  }, [location, isMatch]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onChangeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const val = value.trim();
    if (!val) return;

    navigate(`/search?q=${val}`);
  };
  return (
    <form className="search" onSubmit={(event) => onChangeSubmit(event)}>
      <div className="search-input flex">
        <SearchIcon />
        <input
          onChange={(event) => onChangeInput(event)}
          type="text"
          name="search"
          value={value}
          placeholder="Найти видео..."
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
