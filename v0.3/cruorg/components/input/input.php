<?php

function output_form($form_type, $input_types)
{
?>
  <form class="cmp-form">
    <?php foreach ($input_types as $type) : ?>
      <?= output_input($type, $form_type) ?>
    <?php endforeach ?>
  </form>
<?php
}


function output_input($input_type, $form_type)
{
?>
  <div class="text cru-form-text-<?= $form_type; ?>">
    <div class="cmp-form-text cru-text-<?= $input_type ?>">
      <label>Name</label>
      <input class="cmp-form-text__text" type="text" placeholder="Text goes here..." name="firstName">
      <?php if ($input_type == 'alert') {
        echo '<span>Error message...</span>';
      } ?>
    </div>
  </div>
<?php
}

$input_types = ['', 'active', 'disabled', 'alert'];
output_form('', $input_types);
output_form('without-borders', $input_types);
?>

<div class="comp-wrapper comp-dark-bg">
  <?php output_form('dark', $input_types); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php output_form('dark-without-borders', $input_types); ?>
</div>
