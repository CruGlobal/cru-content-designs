<?php function output_search($dark = false) {?>
  <div class="search<?php if ( $dark == true ) { echo ' cru-search-dark'; } ?>">
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
  <?php output_search(); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_search(true); ?>
</div>