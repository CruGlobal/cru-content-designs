<?php
function cru_list($extra_spacing = false, $links = false) {
  $list_types = ['ul', 'ol'];
  foreach ($list_types as $tag) :
?>
<div class="list<?php if ( $extra_spacing == true ) { echo ' cru-list-extra-spacing'; } ?>">
  <<?= $tag ?> class="cmp-list">
    <?php for ($i = 1; $i <= 3; $i++) : ?>
        <li class="cmp-list__item">
          <article>
            <?php if ( $links == true ) { ?>
              <a class="cmp-list__item-link" href="#">
                <span class="cmp-list__item-title">Title</span>
                <span class="cmp-list__item-date">Date</span>
              </a>
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

<?php cru_list(); ?>
<?php cru_list(true); ?>
<?php cru_list(false, true); ?>
<?php cru_list(true, true); ?>

<?php
function output_unordered_list($type) {
?>
<div class="list cru-list-<?= $type; ?>" style="border: 1px solid black">
    <h2 style="margin-left: 10px">Unordered list <?= $type; ?></h2>
    <ul class="cmp-list">
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
    </ul>
</div>

<div class="list cru-list-<?= $type; ?>" style="border: 1px solid black">
    <h2 style="margin-left: 10px">Ordered list <?= $type; ?></h2>
    <ol class="cmp-list">
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
    </ol>
</div>
<?php
}

$list_type = ['extra-spacing', ''];
foreach ($list_type as $type) {
    output_unordered_list($type);
}
?>
