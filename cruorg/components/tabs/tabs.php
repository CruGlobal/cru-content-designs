<?php function output_tabs($dots = false) { ?>
<div class="tabs cru-tabs<?php if ( $dots == true ) { echo ' cru-tabs-dot'; } ?>">
  <div class="cmp-tabs">
    <ol class="cmp-tabs__tablist">
      <?php for ($i = 1; $i <= 3; $i++) : $state = $i == 1 ? ' cmp-tabs__tab--active' : ''; ?>
        <li class="cmp-tabs__tab<?= $state ?>">Tab <?= $i ?></li>
      <?php endfor; ?>
    </ol>
    <?php for ($i = 1; $i <= 3; $i++) : $state = $i == 1 ? ' cmp-tabs__tabpanel--active' : ''; ?>
      <div class="cmp-tabs__tabpanel<?= $state ?>">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.
      </div>
    <?php endfor; ?>
  </div>
</div>
<?php } ?>

<div class="comp-wrapper">
  <h2>Standard tabs</h2>
  <?php output_tabs(); ?>
  <div class="info">
    <span>Classes: cru-tabs</span>
  </div>
</div>

<div class="comp-wrapper">
  <h2>Tabs w/ dot</h2>
  <?php output_tabs(true); ?>
  <div class="info">
    <span>Classes: cru-tabs cru-tabs-dot</span>
  </div>
</div>
