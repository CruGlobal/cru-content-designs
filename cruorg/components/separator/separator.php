<?php function output_separator($color = false) { ?>
<div class="separator cru-separator<?php if ( $color == true ) { echo ' cru-separator-' . $color; } ?>">
  <div class="cmp-separator">
    <hr class="cmp-separator__horizontal-rule">
  </div>
</div>
<?php } ?>

<div class="comp-wrapper">
  <?php output_separator(); ?>
  <div class="info">
    <span>Classes: cru-separator</span>
  </div>
</div>

<div class="comp-wrapper">
  <?php output_separator('yellow'); ?>
  <div class="info">
    <span>Classes: cru-separator cru-separator-yellow</span>
  </div>
</div>

<div class="comp-wrapper">
  <?php output_separator('gray-dark'); ?>
  <div class="info">
    <span>Classes: cru-separator cru-separator-gray-dark</span>
  </div>
</div>

<div class="comp-wrapper">
  <?php output_separator('gray-medium'); ?>
  <div class="info">
    <span>Classes: cru-separator cru-separator-gray-medium</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_separator('gray-light'); ?>
  <div class="info">
    <span>Classes: cru-separator cru-separator-gray-light</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_separator('white'); ?>
  <div class="info">
    <span>Classes: cru-separator cru-separator-white</span>
  </div>
</div>
