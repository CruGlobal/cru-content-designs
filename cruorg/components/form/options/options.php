<?php
include ROOT . '/components/form/form.php';

function cru_form_boxes($input_type) {
  $option_type = ['checkbox', 'radio'];
  $options = ['Default', 'Checked', 'Disabled' ];
  $states = ['', 'checked', 'disabled'];
  foreach ($option_type as $type) :
    $name = ( $type == 'radio' ) ? rand( 1000, 9999 ) : 'ch';
?>
  <div class="options<?php if ($input_type != '') {echo " cru-form-options-$input_type";} ?>">
    <fieldset class="cmp-form-options cmp-form-options--<?= $type ?>">
      <legend class="cmp-form-options__legend">Options</legend>
      <?php
        for ($i = 0; $i < count($options); $i++) :
      ?>
        <label class="cmp-form-options__field-label">
          <input class="cmp-form-options__field cmp-form-options__field--<?= $type ?>" type="<?= $type ?>" name="<?= $name ?>" value="<?= $options[$i] ?>" <?= $states[$i] ?>>
          <span class="cmp-form-options__field-description"><?= $options[$i] ?></span>
        </label>
      <?php endfor ?>
      <p class="cmp-form-options__help-message">Help text.</p>
    </fieldset>
  </div>
<?php
  endforeach;
}


function cru_form_select($input_type) {
  $option_type = ['drop-down', 'multi-drop-down'];
  $options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5' ];
  $states = ['', '', '', '', ''];
  foreach ($option_type as $type) :
    $multi = ( $type == 'multi-drop-down' ) ? 'multiple' : '';
?>
  <div class="options<?php if ($input_type != '') {echo " cru-form-options-$input_type";} ?>">
    <fieldset class="cmp-form-options cmp-form-options--<?= $type ?>">
      <label class="cmp-form-options__label">Options</label>
      <select class="cmp-form-options__field cmp-form-options__field--<?= $type ?>" <?= $multi ?>>
        <?php
          for ($i = 0; $i < count($options); $i++) :
        ?>
          <option value="<?= $options[$i] ?>"<?= $states[$i] ?>><?= $options[$i] ?></option>
        <?php endfor ?>
      </select>
      <p class="cmp-form-options__help-message">Help text.</p>
    </fieldset>
  </div>
<?php
  endforeach;
}
?>

<div class="comp-wrapper">
  <h2>Standard checkboxes/radios</h2>
  <?php cru_form_container('options-boxes'); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Standard checkboxes/radios w/ dark background</h2>
  <?php cru_form_container('options-boxes', true); ?>
</div>

<div class="comp-wrapper">
  <h2>Standard select/multi-select</h2>
  <?php cru_form_container('options-select'); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Standard select/multi-select w/ dark background</h2>
  <?php cru_form_container('options-select', true); ?>
</div>

<div class="comp-wrapper">
  <h2>Underlined select/multi-select</h2>
  <?php cru_form_container('options-select', '', true); ?>
</div>

<div class="comp-wrapper comp-dark-bg">
  <h2>Underlined select/multi-select w/ dark background</h2>
  <?php cru_form_container('options-select', true, true); ?>
</div>
