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
      <div class="cmp_search__info"></div>
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
      <div class="cmp-search__results"></div>
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
