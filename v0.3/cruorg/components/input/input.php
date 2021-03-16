<?php

function output_form($form_type, $input_types, $backgroundBlack = false, $withoutBorder = false)
{
?>
<div class=></div>
  <div <?php if ($backgroundBlack) echo 'style="background-color: #383F43; padding-bottom: 8px"' ?>>
    <form class="cmp-form cru-form-<?= $form_type; ?> <?php if ($withoutBorder) echo ' cru-form-without-borders' ?>">
      <div class="text">
        <?php foreach ($input_types as $type) : ?>
          <?= output_input($type) ?>
        <?php endforeach ?>
      </div>
    </form>
  </div>
<?php
}


function output_input($input_type)
{
?>
  <div class="cmp-form-text cru-form-text-<?= $input_type; ?>">
    <label>Name</label>
    <input class="cmp-form-text__text" <?php if ($input_type == 'disabled') {
                                          echo 'disabled';
                                        } ?> type="text" id="form-text-1673594539" placeholder="First Name" name="firstName">
    <?php if ($input_type == 'alert') {
      echo '<span class="cru-alert-icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.1173 1.69916C10.0092 1.48794 9.84818 1.31133 9.65139 1.18819C9.4546 1.06505 9.22946 1 9 1C8.77054 1 8.5454 1.06505 8.34861 1.18819C8.15182 1.31133 7.99079 1.48794 7.8827 1.69916L1.14156 15.1036C1.042 15.3013 0.993461 15.5226 1.00071 15.7458C1.00795 15.969 1.07074 16.1864 1.18289 16.3767C1.29649 16.5676 1.45496 16.7251 1.64327 16.8342C1.83158 16.9433 2.04348 17.0004 2.25886 17H15.7411C15.9565 17.0004 16.1684 16.9433 16.3567 16.8342C16.545 16.7251 16.7035 16.5676 16.8171 16.3767C16.9293 16.1864 16.992 15.969 16.9993 15.7458C17.0065 15.5226 16.958 15.3013 16.8584 15.1036L10.1173 1.69916Z" stroke="#FFCF07" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      Error message...</span>';
    } ?>
  </div>
<?php
}

$input_types = ['default', 'disabled', 'alert'];
output_form('default', $input_types);
output_form('without-borders', $input_types);
output_form('black', $input_types, true);
output_form('black', $input_types, true, true);

?>
