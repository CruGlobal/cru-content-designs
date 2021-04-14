<?php

$btn_standard = array(
  array(
    'desc'    => 'Solid yellow/gray',
    'classes' => array('cru-button-standard', 'cru-button-solid', 'cru-button-yellow-gray')
  ),
  array(
    'desc'    => 'Solid gray/white',
    'classes' => array('cru-button-standard', 'cru-button-solid', 'cru-button-gray-white')
  ),
  array(
    'desc'    => 'Solid white/gray',
    'classes' => array('cru-button-standard', 'cru-button-solid', 'cru-button-white-gray')
  ),
  array(
    'desc'    => 'Outline yellow/gray',
    'classes' => array('cru-button-standard', 'cru-button-outline', 'cru-button-yellow-gray')
  ),
  array(
    'desc'    => 'Outline yellow/white',
    'classes' => array('cru-button-standard', 'cru-button-outline', 'cru-button-yellow-white')
  ),
  array(
    'desc'    => 'Outline gray/gray',
    'classes' => array('cru-button-standard', 'cru-button-outline', 'cru-button-gray-gray')
  ),
  array(
    'desc'    => 'Outline white/white',
    'classes' => array('cru-button-standard', 'cru-button-outline', 'cru-button-white-white')
  ),
);

$btn_dot = array(
  array(
    'desc'    => 'Solid yellow/white',
    'classes' => array('cru-button-dot', 'cru-button-solid', 'cru-button-yellow-white'),
  ),
  array(
    'desc'    => 'Solid gray/white',
    'classes' => array('cru-button-dot', 'cru-button-solid', 'cru-button-gray-white'),
  ),
  array(
    'desc'    => 'Solid white/gray',
    'classes' => array('cru-button-dot', 'cru-button-solid', 'cru-button-white-gray'),
  ),
  array(
    'desc'    => 'Outline yellow/yellow',
    'classes' => array('cru-button-dot', 'cru-button-outline', 'cru-button-yellow-yellow'),
  ),
  array(
    'desc'    => 'Outline gray/gray',
    'classes' => array('cru-button-dot', 'cru-button-outline', 'cru-button-gray-gray'),
  ),
  array(
    'desc'    => 'Outline white/white',
    'classes' => array('cru-button-dot', 'cru-button-outline', 'cru-button-white-white'),
  ),
);

$btn_text_icon = array(
  array(
    'desc'    => 'Solid gray/yellow/white',
    'classes' => array('cru-button-combo', 'cru-button-solid', 'cru-button-yellow-white', 'cru-button-gray-text'),
  ),
  array(
    'desc'    => 'Solid white/yellow/white',
    'classes' => array('cru-button-combo', 'cru-button-solid', 'cru-button-yellow-white', 'cru-button-white-text'),
  ),
  array(
    'desc'    => 'Solid gray/gray/white',
    'classes' => array('cru-button-combo', 'cru-button-solid', 'cru-button-gray-white', 'cru-button-gray-text'),
  ),
  array(
    'desc'    => 'Solid white/gray/white',
    'classes' => array('cru-button-combo', 'cru-button-solid', 'cru-button-gray-white', 'cru-button-white-text'),
  ),
  array(
    'desc'    => 'Outline gray/yellow/yellow',
    'classes' => array('cru-button-combo', 'cru-button-outline', 'cru-button-yellow-yellow', 'cru-button-gray-text'),
  ),
  array(
    'desc'    => 'Outline white/yellow/yellow',
    'classes' => array('cru-button-combo', 'cru-button-outline', 'cru-button-yellow-yellow', 'cru-button-white-text'),
  ),
  array(
    'desc'    => 'Outline gray/gray/gray',
    'classes' => array('cru-button-combo', 'cru-button-outline', 'cru-button-gray-gray', 'cru-button-gray-text'),
  ),
  array(
    'desc'    => 'Outline white/white/white',
    'classes' => array('cru-button-combo', 'cru-button-outline', 'cru-button-white-white', 'cru-button-white-text'),
  ),
);

$btn_tag = array(
  array(
    'desc'    => 'Solid gray/white',
    'classes'  => array('cru-button-tag', 'cru-button-solid', 'cru-button-gray-white'),
  ),
  array(
    'desc'    => 'Solid white/gray',
    'classes'  => array('cru-button-tag', 'cru-button-solid', 'cru-button-white-gray'),
  ),
  array(
    'desc'    => 'Outline gray/gray',
    'classes'  => array('cru-button-tag', 'cru-button-outline', 'cru-button-gray-gray'),
  ),
  array(
    'desc'    => 'Outline white/white',
    'classes'  => array('cru-button-tag', 'cru-button-outline', 'cru-button-white-white'),
  ),
);

function button($type, $classes, $icon = '', $shadow = false) {
  for ($i = 1; $i <= 4; $i++) :
    $classesString = implode(' ', $classes);
    $classesString = (($i % 2 == 0) && ($shadow === true) && (in_array('cru-button-solid', $classes))) ? $classesString . ' cru-button-shadow' : $classesString;
    $element = ($i <= 2) ? 'button' : 'a' ;
    $btn_txt = ($element == 'button') ? 'Button' : 'Anchor';
?>
<td>
  <div class="button <?= $classesString ?>">
    <<?= $element ?> class="cmp-button"<?php echo ($element == 'a') ? ' href="#"' : ''; ?>>
      <?php if ($icon && (in_array($type, ['dot', 'combo']) || ($i%2 == 0))) { ?><span class="cmp-button__icon cmp-button__icon--<?= $icon ?>"></span><?php } ?>
      <?php if ($type != 'dot') { ?><span class="cmp-button__text"><?= $btn_txt ?></span><?php } ?>
    </<?= $element ?>>
  </div>
</td>
<?php
  endfor;
}

?>

<h2>Standard format buttons</h2>
<table width="100%">
  <tr>
    <th>Style</th>
    <th>Classes</th>
    <th>Standard</th>
    <th>Standard w/ icon</th>
    <th>Linked</th>
    <th>Linked w/ icon</th>
  </tr>
  <?php foreach ($btn_standard as $btn) : ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?= implode('<br />', $btn['classes']) ?></td>
    <?php button('standard', $btn['classes'], 'shopping_cart'); ?>
  </tr>
  <?php endforeach; ?>
</table>

<h2>Tag format buttons</h2>
<table width="100%">
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ icon</th>
    <th>Linked</th>
    <th>Linked w/ icon</th>
  </tr>
  <?php foreach ($btn_tag as $btn) : ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?= implode('<br />', $btn['classes']) ?></td>
    <?php button('standard', $btn['classes'], 'cancel'); ?>
  </tr>
  <?php endforeach; ?>
</table>

<h2>Dot format buttons</h2>
<table width="100%">
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ shadow</th>
    <th>Linked</th>
    <th>Linked w/ shadow</th>
  </tr>
  <?php foreach ($btn_dot as $btn) : ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?php
      echo implode('<br />', $btn['classes']);
      if (in_array('cru-button-solid', $btn['classes'])) { echo '<br />(cru-button-shadow)'; }
    ?></td>
    <?php button('dot', $btn['classes'], 'arrow_forward', true); ?>
  </tr>
  <?php endforeach; ?>
</table>

<h2>Text/icon format buttons</h2>
<table width="100%">
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ shadow</th>
    <th>Linked</th>
    <th>Linked w/ shadow</th>
  </tr>
  <?php foreach ($btn_text_icon as $btn) : ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?php
      echo implode('<br />', $btn['classes']);
      if (in_array('cru-button-solid', $btn['classes'])) { echo '<br />(cru-button-shadow)'; }
    ?></td>
    <?php button('combo', $btn['classes'], 'arrow_forward', true); ?>
  </tr>
  <?php endforeach; ?>
</table>
