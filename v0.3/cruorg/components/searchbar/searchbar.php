<?php function output_searchbar($dark = false) {?>
  <div class="searchbar<?php if ( $dark == true ) { echo ' cru-searchbar-dark'; } ?>">
    <div class="searchBar__root">
      <div class="searchBar__searchInner">
        <form class="searchBar__form">
          <span class="fieldIcons__root">
            <span class="fieldIcons__input">
              <input class="textInput__input field__input" name="search_query" value="" placeholder="Product Search"></span>
            <span class="fieldIcons__before">
              <span class="icon__root"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </span>
            <span class="fieldIcons__after"></span>
          </span>
          <p class="message__root"></p>
          <div class="searchBar__SearchAutocompleteWrapper"></div>
        </form>
      </div>
    </div>
  </div>
<?php } ?>

<div class="comp-wrapper">
  <?php output_searchbar(); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_searchbar(true); ?>
</div>