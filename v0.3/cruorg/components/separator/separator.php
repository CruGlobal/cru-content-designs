<?php function cru_separator($color = false) { ?>
<div class="separator<?php if ( $color == true ) { echo ' cru-separator-' . $color; } ?>">
  <div class="cmp-separator">
    <hr class="cmp-separator__horizontal-rule">
  </div>
</div>
<?php } ?>

<?php
cru_separator('yellow');
cru_separator('gray-dark');
cru_separator('gray-medium');
cru_separator('gray-light');
?>

<div class="comp-wrapper comp-dark-bg">
  <?php
  cru_separator('yellow');
  cru_separator('gray-medium');
  cru_separator('white');
  ?>
</div>
