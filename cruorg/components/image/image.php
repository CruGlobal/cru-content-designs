<?php function output_image($captioned = false, $linked = false) { ?>
<div class="image cru-image">
  <div class="cmp-image">
    <?php if ($linked === true) { ?><a class="cmp-image__link" href="https://unsplash.com/photos/Y8lCoTRgHPE"><?php } ?>
      <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80" class="cmp-image__image">
      <?php if ($captioned === true) { ?><span class="cmp-image__title">photo credit: Jerry Zhang</span><?php } ?>
    <?php if ($linked === true) { ?></a><?php } ?>
  </div>
</div>
<?php } ?>

<div class="info">
  <span>All image components need the "cru-image" class applied.</span>
</div>

<div class="comp-wrapper">
  <h2>Standard image</h2>
  <?php output_image(); ?>
</div>

<div class="comp-wrapper">
  <h2>Captioned image</h2>
  <?php output_image(true); ?>
</div>

<div class="comp-wrapper">
  <h2>Linked image</h2>
  <?php output_image(false, true); ?>
</div>

<div class="comp-wrapper">
  <h2>Captioned and linked image</h2>
  <?php output_image(true, true); ?>
</div>
