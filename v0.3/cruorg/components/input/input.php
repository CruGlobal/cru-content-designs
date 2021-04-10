<?php
function cru_form($dark = false, $underline = false) {
?>
  <div class="container<?php if ( $dark == true ) { echo ' cru-form-dark'; } ?><?php echo ( $underline == false ) ? ' cru-form-standard' : ' cru-form-underline'; ?>">
    <form class="cmp-form">
      <?php
        $input_types = ['', 'disabled', 'alert'];
        foreach ($input_types as $type) :
          echo cru_form_input($type);
        endforeach;
      ?>
    </form>
  </div>
<?php
}


function cru_form_input($input_type)
{
?>
  <div class="text cru-form-text-<?= $input_type ?>">
    <div class="cmp-form-text">
      <label>Label</label>
      <input class="cmp-form-text__text" type="text" placeholder="Text goes here..." name="firstName">
      <?php if ($input_type == 'alert') {
        // echo '<span>Error message...</span>';
      } ?>
    </div>
  </div>
<?php
}
?>

<div class="comp-wrapper">
  <?php cru_form(); ?>
</div>

<div class="comp-wrapper">
  <?php cru_form(false, true); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php cru_form(true); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php cru_form(true, true); ?>
</div>
