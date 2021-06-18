<?php
include ROOT . '/components/form/form.php';

function cru_form_input($input_type) {
?>
  <div class="text<?php if ($input_type != '') {echo " cru-form-text-$input_type";} ?>">
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

<div class="info">
  <p>The classes that affect the form field components actually go in two different places. <code>cru-form-standard</code>, <code>cru-form-underline</code>, and <code>cru-form-dark</code> need to be applied to the form container component. The author should select only one of either <code>cru-form-standard</code> or <code>cru-form-underline</code>. This ensures that every text field in the form uses the same style. <code>cru-form-dark</code> is optional and intended for use on dark backgrounds.</p>
  <p><code>cru-form-text-disabled</code> and <code>cru-form-text-alert</code> are meant to be applied to the text field components directly, though those classes are really just placeholders until a functional form is enabled and the classes/attributes that get applied by AEM can be observed.</p>
</div>

<div class="comp-wrapper">
  <?php cru_form_container('text'); ?>
</div>

<div class="comp-wrapper">
  <?php cru_form_container('text', false, true); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php cru_form_container('text', true); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <?php cru_form_container('text', true, true); ?>
</div>
