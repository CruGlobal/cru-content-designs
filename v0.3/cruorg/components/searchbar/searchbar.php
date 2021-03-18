<?php

function output_searchbar($searchbar_type)
{
?>
  <div style="padding: 8px; <?php if ($searchbar_type == 'black') echo ' background-color: #383F43;' ?>">
    <div class="searchbar cru-searchbar-<?= $searchbar_type ?>">
      <div class="searchBar__root">
        <div class="searchBar__searchInner">
          <form class="searchBar__form">
            <span class="fieldIcons__root">
              <span class="fieldIcons__input">
                <input class="textInput__input field__input" name="search_query" value="" placeholder="Product Search"></span>
              <span class="fieldIcons__before">
                <span class="icon__root">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="16" fill="#EBECEC" />
                    <path d="M15.25 20.5C18.1495 20.5 20.5 18.1495 20.5 15.25C20.5 12.3505 18.1495 10 15.25 10C12.3505 10 10 12.3505 10 15.25C10 18.1495 12.3505 20.5 15.25 20.5Z" stroke="#383F43" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 19L22 22" stroke="#383F43" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
              </span>
              <span class="fieldIcons__after"></span>
            </span>
            <p class="message__root"></p>
            <div class="searchBar__SearchAutocompleteWrapper"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
<?php
}

output_searchbar('default');
output_searchbar('black');

?>
