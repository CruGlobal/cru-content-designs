// Based on v2
// Quick Search not available in documentation
// https://github.com/adobe/aem-core-wcm-components/blob/main/content/src/content/jcr_root/apps/core/wcm/components/search/v2/search/search.html

import { ComponentWrapper } from "../shared";
import "./Search.css";

export const Search = ({
  className = "", // string
  dark = false, // bool
}) => {
  const darkClass = dark ? "cru-search-dark" : "";

  return (
    <ComponentWrapper type="search" className={`${darkClass} ${className}`}>
      <div className="cmp_search__info"></div>
      <form className="cmp-search__form">
        <div className="cmp-search__field">
          <i className="cmp-search__icon"></i>
          <span className="cmp-search__loading-indicator"></span>
          <input
            className="cmp-search__input"
            type="text"
            placeholder="Search"
          />
          <button className="cmp-search__clear">
            <i className="cmp-search__clear-icon"></i>
          </button>
        </div>
      </form>
      <div className="cmp-search__results"></div>
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
