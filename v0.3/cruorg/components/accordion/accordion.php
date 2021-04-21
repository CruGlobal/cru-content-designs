<?php function output_accordion($dark = false, $link = false, $items = 3) { ?>
<div class="accordion cru-accordion<?php if ( $dark == true ) { echo ' cru-accordion-dark'; } ?><?php if ( $link == true ) { echo ' cru-accordion-links'; } ?>">
  <div class="cmp-accordion">
    <?php for ($i = 1; $i <= $items; $i++) : $state = $i == 1 ? 'expanded' : 'hidden'; ?>
      <div class="cmp-accordion__item">
        <h3 class="cmp-accordion__header">
          <button class="cmp-accordion__button<?php if ( $i == 1 ) { echo ' cmp-accordion__button--expanded'; } ?>">
            <span class="cmp-accordion__title">Item <?= $i ?></span>
            <span class="cmp-accordion__icon"></span>
          </button>
        </h3>
        <div class="cmp-accordion__panel cmp-accordion__panel--<?= $state ?>">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.
          </div>
        </div>
      <?php endfor; ?>
    </div>
  </div>
<?php } ?>

<div class="comp-wrapper">
  <h2>Standard accordion</h2>
  <?php output_accordion(); ?>
  <div class="info">
    <span>Classes: cru-accordion</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Standard accordion w/ dark background</h2>
  <?php output_accordion(true); ?>
  <div class="info">
    <span>Classes: cru-accordion cru-accordion-dark</span>
  </div>
</div>

<div class="comp-wrapper">
  <h2>Quick links accordion</h2>
  <?php output_accordion(false, true, 2); ?>
  <div class="info">
    <span>Classes: cru-accordion cru-accordion-links</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Quick links accordion w/ dark background</h2>
  <?php output_accordion(true, true, 2); ?>
  <div class="info">
    <span>Classes: cru-accordion cru-accordion-links cru-accordion-dark</span>
  </div>
</div>
