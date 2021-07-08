<?php
include ROOT . '/components/form/form.php';

function cru_form_input($input_type) {
  $types = ['text', 'textarea', 'email', 'tel', 'date', 'number', 'password'];
  foreach ($types as $type) :
?>
  <div class="text<?php if ($input_type != '') {echo " cru-form-text--$input_type";} ?>">
    <div class="cmp-form-text">
      <label><?= ucfirst($type); ?> Label</label>
      <p class="cmp-form-text__help-block">Help text.</p>
      <?php if ( $type != 'textarea' ) : ?>
        <input class="cmp-form-text__text" type="<?= $type ?>" placeholder="Text goes here..." name="<?= $type ?>">
      <?php else : ?>
        <textarea class="cmp-form-text__textarea" name="xyz" rows="2"></textarea>
      <?php endif; ?>
    </div>
  </div>
<?php
  endforeach;
}
?>

<div class="info">
  <p><strong>Form Container</strong><br />
  Default CSS Classes: <code>cru-form</code><br />
  Underlined: <code>cru-form cru-form--underlined</code> (optional)<br />
  Dark: <code>cru-form cru-form--dark</code> (optional)</p>
  <p><strong>Form Text</strong><br />
  Disabled: <code>cru-form-text--disabled</code> (optional)<br />
  Alert: <code>cru-form-text--alert</code> (optional)</p>
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
