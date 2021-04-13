<?php

$btn_standard = array(
  array(
    'desc'    => 'Solid yellow/gray (default)',
    'format'  => 'stnd',
    'style'   => 'sld',
    'colors'  => 'yg',
  ),
  array(
    'desc'    => 'Solid gray/white',
    'format'  => 'stnd',
    'style'   => 'sld',
    'colors'  => 'gw',
  ),
  array(
    'desc'    => 'Solid white/gray',
    'format'  => 'stnd',
    'style'   => 'sld',
    'colors'  => 'wg',
  ),
  array(
    'desc'    => 'Outline yellow/gray',
    'format'  => 'stnd',
    'style'   => 'out',
    'colors'  => 'yg',
  ),
  array(
    'desc'    => 'Outline yellow/white',
    'format'  => 'stnd',
    'style'   => 'out',
    'colors'  => 'yw',
  ),
  array(
    'desc'    => 'Outline gray/gray',
    'format'  => 'stnd',
    'style'   => 'out',
    'colors'  => 'gg',
  ),
  array(
    'desc'    => 'Outline white/white',
    'format'  => 'stnd',
    'style'   => 'out',
    'colors'  => 'ww',
  ),
);

$btn_text_icon = array(
  array(
    'desc'    => 'Solid gray/yellow/white',
    'format'  => 'ti',
    'style'   => 'sld',
    'colors'  => 'gyw',
  ),
  array(
    'desc'    => 'Solid white/yellow/white',
    'format'  => 'ti',
    'style'   => 'sld',
    'colors'  => 'wyw',
  ),
  array(
    'desc'    => 'Solid gray/gray/white',
    'format'  => 'ti',
    'style'   => 'sld',
    'colors'  => 'ggw',
  ),
  array(
    'desc'    => 'Solid white/gray/white',
    'format'  => 'ti',
    'style'   => 'sld',
    'colors'  => 'wgw',
  ),
  array(
    'desc'    => 'Outline gray/yellow/yellow',
    'format'  => 'ti',
    'style'   => 'out',
    'colors'  => 'gyy',
  ),
  array(
    'desc'    => 'Outline white/yellow/yellow',
    'format'  => 'ti',
    'style'   => 'out',
    'colors'  => 'wyy',
  ),
  array(
    'desc'    => 'Outline gray/gray/gray',
    'format'  => 'ti',
    'style'   => 'out',
    'colors'  => 'ggg',
  ),
  array(
    'desc'    => 'Outline white/white/white',
    'format'  => 'ti',
    'style'   => 'out',
    'colors'  => 'www',
  ),
);

$btn_dot = array(
  array(
    'desc'    => 'Solid yellow/white',
    'format'  => 'dot',
    'style'   => 'sld',
    'colors'  => 'yw',
  ),
  array(
    'desc'    => 'Solid gray/white',
    'format'  => 'dot',
    'style'   => 'sld',
    'colors'  => 'gw',
  ),
  array(
    'desc'    => 'Solid white/gray',
    'format'  => 'dot',
    'style'   => 'sld',
    'colors'  => 'wg',
  ),
  array(
    'desc'    => 'Outline yellow/yellow',
    'format'  => 'dot',
    'style'   => 'out',
    'colors'  => 'yy',
  ),
  array(
    'desc'    => 'Outline gray/gray',
    'format'  => 'dot',
    'style'   => 'out',
    'colors'  => 'gg',
  ),
  array(
    'desc'    => 'Outline white/white',
    'format'  => 'dot',
    'style'   => 'out',
    'colors'  => 'ww',
  ),
);

$btn_tag = array(
  array(
    'desc'    => 'Solid gray/white',
    'format'  => 'tag',
    'style'   => 'sld',
    'colors'  => 'gw',
  ),
  array(
    'desc'    => 'Solid white/gray',
    'format'  => 'tag',
    'style'   => 'sld',
    'colors'  => 'wg',
  ),
  array(
    'desc'    => 'Outline gray/gray',
    'format'  => 'tag',
    'style'   => 'out',
    'colors'  => 'gg',
  ),
  array(
    'desc'    => 'Outline white/white',
    'format'  => 'tag',
    'style'   => 'out',
    'colors'  => 'ww',
  ),
);

function button($type, $style = '', $text = '', $icon = '', $shadow = false) {
  $btn_txt = ($type == 'button') ? 'Button' : 'Anchor';
  $dark_bg = ( strpos( $style, 'w' ) ) ? ' style="background-color: #E5E5E5;"' : '';
?>
<div class="button <?= $style ?><?php echo ($shadow) ? ' shadow' : ''; ?>"<?= $dark_bg ?>>
  <<?= $type ?> class="cmp-button"<?php echo ($type == 'a') ? ' href="#"' : ''; ?>>
    <?php if ($icon) { ?><span class="cmp-button__icon cmp-button__icon--<?= $icon ?>"></span><?php } ?>
    <?php if ($text !== false) { ?><span class="cmp-button__text"><?= $btn_txt ?></span><?php } ?>
  </<?= $type ?>>
</div>
<?php
}

?>

<h2>Standard format buttons</h2>
<table>
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ icon</th>
    <th>Linked</th>
    <th>Linked w/ icon</th>
  </tr>
  <?php foreach ($btn_standard as $btn) : $class = $btn['format'] . '-' . $btn['style'] . '-' . $btn['colors']; ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?= $class ?></td>
    <td><?php button('button', $class); ?></td>
    <td><?php button('button', $class, '', 'shopping_cart'); ?></td>
    <td><?php button('a', $class); ?></td>
    <td><?php button('a', $class, '', 'shopping_cart'); ?></td>
  </tr>
  <?php endforeach; ?>
</table>

<h2>Text/icon format buttons</h2>
<table>
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ shadow</th>
    <th>Linked</th>
    <th>Linked w/ shadow</th>
  </tr>
  <?php foreach ($btn_text_icon as $btn) : $class = $btn['format'] . '-' . $btn['style'] . '-' . $btn['colors']; ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?= $class ?></td>
    <td><?php button('button', $class, '', 'arrow_forward'); ?></td>
    <td><?php if ( $btn['style'] != 'out' ) { button('button', $class, '', 'arrow_forward', true); } ?></td>
    <td><?php button('a', $class, '', 'arrow_forward'); ?></td>
    <td><?php if ( $btn['style'] != 'out' ) { button('a', $class, '', 'arrow_forward', true); } ?></td>
  </tr>
  <?php endforeach; ?>
</table>

<h2>Dot format buttons</h2>
<table>
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ shadow</th>
    <th>Linked</th>
    <th>Linked w/ shadow</th>
  </tr>
  <?php foreach ($btn_dot as $btn) : $class = $btn['format'] . '-' . $btn['style'] . '-' . $btn['colors']; ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?= $class ?></td>
    <td><?php button('button', $class, false, 'arrow_forward'); ?></td>
    <td><?php if ( $btn['style'] != 'out' ) { button('button', $class, false, 'arrow_forward', true); } ?></td>
    <td><?php button('a', $class, false, 'arrow_forward'); ?></td>
    <td><?php if ( $btn['style'] != 'out' ) { button('a', $class, false, 'arrow_forward', true); } ?></td>
  </tr>
  <?php endforeach; ?>
</table>

<h2>Tag format buttons</h2>
<table>
  <tr>
    <th>Style</th>
    <th>Class</th>
    <th>Standard</th>
    <th>Standard w/ icon</th>
    <th>Linked</th>
    <th>Linked w/ icon</th>
  </tr>
  <?php foreach ($btn_tag as $btn) : $class = $btn['format'] . '-' . $btn['style'] . '-' . $btn['colors']; ?>
  <tr>
    <td><?= $btn['desc'] ?></td>
    <td><?= $class ?></td>
    <td><?php button('button', $class); ?></td>
    <td><?php button('button', $class, '', 'cancel'); ?></td>
    <td><?php button('a', $class); ?></td>
    <td><?php button('a', $class, '', 'cancel'); ?></td>
  </tr>
  <?php endforeach; ?>
</table>
