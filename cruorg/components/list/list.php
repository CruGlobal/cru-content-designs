<?php
function output_list($extra_spacing = false, $links = false) {
  $list_types = ['ul', 'ol'];
  foreach ($list_types as $tag) :
?>
<div class="list cru-list<?php if ( $extra_spacing == true ) { echo ' cru-list-extra-spacing'; } ?>">
  <<?= $tag ?> class="cmp-list">
    <?php for ($i = 1; $i <= 3; $i++) : ?>
        <li class="cmp-list__item">
          <article>
            <?php if ( $links == true ) { ?>
              <a class="cmp-list__item-link" href="#"><span class="cmp-list__item-title">Title</span><span class="cmp-list__item-date">Date</span></a>
              <span class="cmp-list__item-description">Display a page heading</span>
            <?php } else { ?>
              <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            <?php } ?>
          </article>
        </li>
    <?php endfor; ?>
  </<?= $tag ?>>
</div>
<?php
  endforeach;
}
?>
<div class="comp-wrapper">
  <h2>Standard list</h2>
  <?php output_list(); ?>
  <div class="info">
    <span>Classes: cru-list</span>
  </div>
</div>
<div class="comp-wrapper">
  <h2>List w/ extra spacing</h2>
  <?php output_list(true); ?>
  <div class="info">
    <span>Classes: cru-list cru-list-extra-spacing</span>
  </div>
</div>
<div class="comp-wrapper">
  <h2>List w/ links</h2>
  <?php output_list(false, true); ?>
  <div class="info">
    <span>Classes: cru-list</span>
  </div>
</div>
<div class="comp-wrapper">
  <h2>List w/ extra spacing and links</h2>
  <?php output_list(true, true); ?>
  <div class="info">
    <span>Classes: cru-list cru-list-extra-spacing</span>
  </div>
</div>
