<?php function output_breadcrumb($color = false) { ?>
<div class="breadcrumb cru-breadcrumb<?php if ($color !== false) {echo " cru-breadcrumb-$color";} ?>">
  <nav class="cmp-breadcrumb">
    <ol class="cmp-breadcrumb__list">
      <?php
        for ($i = 1; $i <= 5; $i++) {
          $classes = 'cmp-breadcrumb__item';
          $classes .= ($i == 5) ? ' cmp-breadcrumb__item--active' : '';

          $output = "<li class=\"$classes\">";
          $output .= ($i != 5) ? '<a href="#" class="cmp-breadcrumb__item-link">' : '';
          $output .= "<span>Component #$i</span>";
          $output .= ($i != 5) ? '</a>' : '';
          $output .= '</li>';

          echo $output;
        }
      ?>
    </ol>
  </nav>
</div>
<?php } ?>

<div class="comp-wrapper">
  <h2>Standard breadcrumb</h2>
  <?php output_breadcrumb(); ?>
  <div class="info">
    <span>Class: cru-breadcrumb</span>
  </div>
</div>

<div class="comp-wrapper">
  <h2>Yellow breadcrumb</h2>
  <?php output_breadcrumb('yellow'); ?>
  <div class="info">
    <span>Classes: cru-breadcrumb cru-breadcrumb-yellow</span>
  </div>
</div>

<div class="comp-wrapper">
  <h2>Gray-dark breadcrumb</h2>
  <?php output_breadcrumb('gray-dark'); ?>
  <div class="info">
    <span>Classes: cru-breadcrumb cru-breadcrumb-gray-dark</span>
  </div>
</div>

<div class="comp-wrapper">
  <h2>Gray-medium breadcrumb</h2>
  <?php output_breadcrumb('gray-medium'); ?>
  <div class="info">
    <span>Classes: cru-breadcrumb cru-breadcrumb-gray-medium</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Gray-light breadcrumb</h2>
  <?php output_breadcrumb('gray-light'); ?>
  <div class="info">
    <span>Classes: cru-breadcrumb cru-breadcrumb-gray-light</span>
  </div>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>White breadcrumb</h2>
  <?php output_breadcrumb('white'); ?>
  <div class="info">
    <span>Classes: cru-breadcrumb cru-breadcrumb-white</span>
  </div>
</div>
