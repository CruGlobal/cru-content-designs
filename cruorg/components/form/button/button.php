<?php
include ROOT . '/components/form/form.php';

function cru_form_button() {
  $types = [
    'button' => 'Button',
    'submit' => 'Submit'
  
  ];
  $styles = [
    ['standard', 'solid', 'yellow-gray'],
    ['standard', 'solid', 'gray-white'],
    ['standard', 'solid', 'white-gray'],
    ['standard', 'outline', 'yellow-gray'],
    ['standard', 'outline', 'yellow-white'],
    ['standard', 'outline', 'gray-gray'],
    ['standard', 'outline', 'white-white'],
    ['tag', 'solid', 'gray-white'],
    ['tag', 'solid', 'white-gray'],
    ['tag', 'outline', 'gray-gray'],
    ['tag', 'outline', 'white-white'],
  ];

  foreach ($styles as $style) :
    foreach ($types as $key => $value) :

      $classes = '';
      if ($style != false) {
        foreach ($style as $class) {
          $classes .= " cru-button-$class";
        }
      }
?>
  <div class="button<?php if ($classes != '') {echo $classes;} ?>">
    <button type="<?= $key ?>" class="cmp-form-button"><?= $value ?></button>
  </div>
<?php
    endforeach;
  endforeach;
}
?>

<div class="comp-wrapper">
  <h2>Buttons</h2>
  <?php cru_form_container('button'); ?>
</div>
