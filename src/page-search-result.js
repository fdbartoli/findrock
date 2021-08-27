import React from "react";
import SearchResults from "./components/search-result";
import SearchBar from "./components/search-bar";
import { Fragment } from "react";

function PageSearchResult() {
  return (
    <Fragment>
      <SearchBar />
      <SearchResults />
    </Fragment>
  );
}

export default PageSearchResult;
