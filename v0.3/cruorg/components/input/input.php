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
        echo '<span>
        Error message...
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.0052 12.8317C9.07112 12.8317 9.13557 12.8521 9.19038 12.8903C9.2452 12.9285 9.28792 12.9829 9.31315 13.0464C9.33838 13.11 9.34498 13.1799 9.33212 13.2474C9.31926 13.3149 9.28751 13.3769 9.24089 13.4255C9.19428 13.4741 9.13489 13.5073 9.07023 13.5207C9.00557 13.5341 8.93855 13.5272 8.87764 13.5009C8.81673 13.4746 8.76468 13.43 8.72805 13.3728C8.69143 13.3156 8.67188 13.2483 8.67188 13.1795C8.67188 13.0873 8.70699 12.9988 8.7695 12.9336C8.83201 12.8683 8.9168 12.8317 9.0052 12.8317Z" fill="#FFCF07" stroke="#FFCF07" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9 10.0454V5.87128" stroke="#FFCF07" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.1173 1.69916C10.0092 1.48794 9.84818 1.31133 9.65139 1.18819C9.4546 1.06505 9.22946 1 9 1C8.77054 1 8.5454 1.06505 8.34861 1.18819C8.15182 1.31133 7.99079 1.48794 7.8827 1.69916L1.14156 15.1036C1.042 15.3013 0.993461 15.5226 1.00071 15.7458C1.00795 15.969 1.07074 16.1864 1.18289 16.3767C1.29649 16.5676 1.45496 16.7251 1.64327 16.8342C1.83158 16.9433 2.04348 17.0004 2.25886 17H15.7411C15.9565 17.0004 16.1684 16.9433 16.3567 16.8342C16.545 16.7251 16.7035 16.5676 16.8171 16.3767C16.9293 16.1864 16.992 15.969 16.9993 15.7458C17.0065 15.5226 16.958 15.3013 16.8584 15.1036L10.1173 1.69916Z" stroke="#FFCF07" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>';
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
