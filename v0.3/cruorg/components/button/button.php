<style>
  fieldset.button-component table { width: 100%; }
  fieldset.button-component th:nth-child(-n + 2),
  fieldset.button-component td:nth-child(-n + 2) { text-align: left; }
  fieldset.button-component td { padding-top: 8px; padding-bottom: 8px; text-align: center; }
  fieldset.button-component td.silver-bg { background-color: #eee; }
</style>

<?php

$buttons = array(
  'standard' => array(
    array('solid', 'yellow-gray'),
    array('solid', 'gray-white'),
    array('solid', 'white-gray'),
    array('outline', 'yellow-gray'),
    array('outline', 'yellow-white'),
    array('outline', 'gray-gray'),
    array('outline', 'white-white'),
  ),
  'tag' => array(
    array('solid', 'gray-white'),
    array('solid', 'white-gray'),
    array('outline', 'gray-gray'),
    array('outline', 'white-white'),
  ),
  'dot' => array(
    array('solid', 'yellow-gray'),
    array('solid', 'gray-white'),
    array('solid', 'white-gray'),
    array('outline', 'yellow-yellow'),
    array('outline', 'gray-gray'),
    array('outline', 'white-white'),
  ),
  'combo' => array(
    array('solid', 'yellow-gray', 'gray-text'),
    array('solid', 'yellow-white', 'white-text'),
    array('solid', 'gray-white', 'gray-text'),
    array('solid', 'gray-white', 'white-text'),
    array('outline', 'yellow-yellow', 'gray-text'),
    array('outline', 'yellow-yellow', 'white-text'),
    array('outline', 'gray-gray', 'gray-text'),
    array('outline', 'white-white', 'white-text'),
  ),
);

foreach ($buttons as $type => $variation) :
  $addon = (in_array($type, array('standard', 'tag'))) ? 'icon' : 'shadow';
?>
<h2><?= ucfirst($type) ?> buttons</h2>
<table>
  <tr>
    <th>Description</th>
    <th>Classes</th>
    <th>Standard</th>
    <th>Standard w/ <?= $addon ?></th>
    <th>Linked</th>
    <th>Linked w/ <?= $addon ?></th>
  </tr>
  <?php
    foreach ($variation as $attrs) :
      $desc = ucfirst($attrs[0]) . ' ';
      $desc .= (isset($attrs[2])) ? substr($attrs[2], 0, strpos($attrs[2], '-')) . '/' : '';
      $desc .= str_replace('-', '/', $attrs[1]);

      $shadow = in_array($type, array('dot', 'combo')) && in_array('solid', $attrs);

      $classes_list = 'cru-button-' . $type . '<br />cru-button-' . implode('<br />cru-button-', $attrs);
      $classes_list .= ($shadow) ? '<br />(cru-button-shadow)' : '';
      $classes_attr = 'cru-button-' . $type . ' cru-button-' . implode(' cru-button-', $attrs);

      $col_class = (
        (strpos($attrs[1], 'white') === 0) ||
        (($attrs[0] === 'outline') && (strpos($attrs[1], '-white') > 0)) ||
        (isset($attrs[2]) && (strpos($attrs[2], 'white') === 0))
      ) ? 'silver-bg' : '';

      switch ($type) {
        case 'standard' :
          $btn_icon = 'shopping_cart';
          break;
        case 'tag' :
          $btn_icon = 'cancel';
          break;
        default :
          $btn_icon = 'arrow_forward';
      }
  ?>
  <tr>
    <td><?= $desc ?></td>
    <td><?= $classes_list ?></td>
    <?php
      for ($i = 1; $i <= 4; $i++) :
        $element = ($i <= 2) ? 'button' : 'a' ;
        $btn_txt = ($element == 'button') ? 'Button' : 'Anchor';

        $classes_string = (($i % 2 == 0) && $shadow) ? $classes_attr . ' cru-button-shadow' : $classes_attr;
    ?>
      <td class="<?= $col_class ?>">
        <div class="button <?= $classes_string ?>">
          <<?= $element ?> class="cmp-button"<?php echo ($element === 'a') ? ' href="#"' : ''; ?>>
            <?php if ($btn_icon && (in_array($type, ['dot', 'combo']) || ($i%2 == 0))) { ?><span class="cmp-button__icon cmp-button__icon--<?= $btn_icon ?>"></span><?php } ?>
            <?php if ($type !== 'dot') { ?><span class="cmp-button__text"><?= $btn_txt ?></span><?php } ?>
          </<?= $element ?>>
        </div>
      </td>
    <?php endfor; ?>
  </tr>
  <?php endforeach; ?>
</table>
<?php
endforeach;
