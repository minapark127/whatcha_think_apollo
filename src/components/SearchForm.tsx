import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

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
    <Form onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        type="text"
        placeholder="browse movie reviews by The New York Times..."
        autoFocus
      />
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.warmGrey};
  padding: 3px;
`;

export default SearchForm;
