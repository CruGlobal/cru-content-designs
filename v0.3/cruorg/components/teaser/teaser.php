<?php
function output_teaser($img = false, $pre = false, $desc = false, $btn1 = false, $btn2 = false, $link = false) {
  $image = '<img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80" class="cmp-image__image">';
  $image = ($link === true) ? '<a class="cmp-image__link" href="#">' . $image . '</a>' : $image;
  $title = ($link === true) ? '<a class="cmp-teaser__title-link" href="#">Title</a>' : 'Title';
?>
  <div class="teaser cru-teaser-layered">
    <div class="cmp-teaser">
      <?php if ($img === true) { ?>
        <div class="cmp-teaser__image">
          <div class="cmp-image">
            <?= $image ?>
          </div>
        </div>
      <?php } ?>
      <div class="cmp-teaser__content">
        <?php if ($pre === true) { ?><div class="cmp-teaser__pretitle">Pretitle</div><?php } ?>
        <h2 class="cmp-teaser__title"><?= $title ?></h2>
        <?php if ($desc === true) { ?>
          <div class="cmp-teaser__description">
            <p>Description</p>
          </div>
        <?php } ?>
        <?php if (($btn1 === true) || ($btn2 === true)) { ?>
          <div class="cmp-teaser__action-container">
            <?php if ($btn1 === true) { ?><a class="cmp-teaser__action-link" href="#">Button</a><?php } ?>
            <?php if ($btn2 === true) { ?><a class="cmp-teaser__action-link" href="#">Button</a><?php } ?>
          </div>
        <?php } ?>
      </div>
    </div>
  </div>
<?php } ?>

<div class="comp-wrapper">
  <?php output_teaser(true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, false, false, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, false, false, true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, false, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, false, true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, false, true, true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, true, false, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, true, false, true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, true, true, true); ?>
</div>

<div class="comp-wrapper">
  <?php output_teaser(true, true, true, true, true); ?>
</div>
