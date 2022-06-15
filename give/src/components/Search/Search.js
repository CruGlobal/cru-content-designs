// Based on current Quick Search (Full-text search(v1))

import { ComponentWrapper } from "../shared";
import "./Search.css";

export const Search = ({
  className = "", // string
  dark = false, // bool
}) => {
  const darkClass = dark ? "cru-search-dark" : "";

  return (
    <ComponentWrapper type="search" className={`${darkClass} ${className}`}>
      <form class="cmp-search__form">
        <div class="cmp-search__field">
          <i class="cmp-search__icon"></i>
          <span class="cmp-search__loading-indicator"></span>
          <input class="cmp-search__input" type="text" placeholder="Search" />
          <button class="cmp-search__clear">
            <i class="cmp-search__clear-icon"></i>
          </button>
        </div>
      </form>
    </ComponentWrapper>
  );
};

export const SearchExamples = () => {
  return (
    <>
      <Search />
      <Search dark />
    </>
  );
};
