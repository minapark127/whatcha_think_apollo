import React, { useState } from "react";
import { useHistory } from "react-router";

const SearchForm: React.FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSearchQuery(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push(`/search/${searchQuery}`);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type="text"></input>
    </form>
  );
};

export default SearchForm;
