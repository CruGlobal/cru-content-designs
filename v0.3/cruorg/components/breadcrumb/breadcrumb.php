<?php function output_breadcrumb($color = false) { ?>
<div class="breadcrumb<?php if ($color !== false) {echo " cru-breadcrumb-$color";} ?>">
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
  <?php output_breadcrumb(); ?>
</div>

<div class="comp-wrapper">
  <?php output_breadcrumb('yellow'); ?>
</div>

<div class="comp-wrapper">
  <?php output_breadcrumb('gray-dark'); ?>
</div>

<div class="comp-wrapper">
  <?php output_breadcrumb('gray-medium'); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_breadcrumb('gray-light'); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_breadcrumb('white'); ?>
</div>