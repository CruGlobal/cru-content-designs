<?php function output_search($dark = false) {?>
  <div class="search cru-search<?php if ( $dark == true ) { echo ' cru-search-dark'; } ?>">
    <section class="cmp-search">
      <form class="cmp-search__form">
        <div class="cmp-search__field">
          <i class="cmp-search__icon"></i>
          <span class="cmp-search__loading-indicator"></span>
          <input class="cmp-search__input" type="text" placeholder="Search">
          <button class="cmp-search__clear">
            <i class="cmp-search__clear-icon"></i>
          </button>
        </div>
      </form>
    </section>
  </div>
<?php } ?>

<div class="comp-wrapper">
  <h2>Standard search</h2>
  <?php output_search(); ?>
  <div class="info">
    <span>Classes: cru-search</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Standard search w/ dark background</h2>
  <?php output_search(true); ?>
  <div class="info">
    <span>Classes: cru-search cru-search-dark</span>
  </div>
</div>