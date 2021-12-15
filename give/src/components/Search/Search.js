import "./Search.css";

export const Search = ({
  className = "", // string
  dark = false, // bool
}) => {
  const classes = className !== "" ? " " + className : className;
  const darkClass = dark ? " cru-search-dark" : "";

  return (
    <div className={"search cru-search" + darkClass + classes}>
      <section class="cmp-search">
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
      </section>
    </div>
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
