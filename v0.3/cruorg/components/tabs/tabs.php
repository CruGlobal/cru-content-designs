<?php function cru_tabs($dots = false) { ?>
<div class="tabs<?php if ( $dots == true ) { echo ' cru-tablist-icon'; } ?>">
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

<?php cru_tabs(); ?>
<?php cru_tabs(true); ?>

<div class="tabs">
    <div id="tabs-c324455e43" class="cmp-tabs" data-cmp-data-layer="{&quot;tabs-c324455e43&quot;:{&quot;shownItems&quot;:[&quot;tabs-c324455e43-item-ace94c0467&quot;],&quot;@type&quot;:&quot;core-components-examples/components/tabs&quot;,&quot;repo:modifyDate&quot;:&quot;2018-12-07T12:11:51Z&quot;}}" data-placeholder-text="false">
    <h2 style="margin-left: 10px">TABS WITHOUT ICONS</h2>
    <ol role="tablist" class="cmp-tabs__tablist" aria-multiselectable="false">
      <li role="tab" id="tabs-c324455e43-item-ace94c0467-tab" class="cmp-tabs__tab cmp-tabs__tab--active" aria-controls="tabs-c324455e43-item-ace94c0467-tabpanel" tabindex="0" data-cmp-hook-tabs="tab" aria-selected="true"><span>Tab 1</span></li>
      <li role="tab" id="tabs-c324455e43-item-6afd3ea640-tab" class="cmp-tabs__tab" aria-controls="tabs-c324455e43-item-6afd3ea640-tabpanel" tabindex="-1" data-cmp-hook-tabs="tab" aria-selected="false"><span>Tab 2</span></li>
      <li role="tab" id="tabs-c324455e43-item-0c51149435-tab" class="cmp-tabs__tab" aria-controls="tabs-c324455e43-item-0c51149435-tabpanel" tabindex="-1" data-cmp-hook-tabs="tab" aria-selected="false"><span>Tab 3</span></li>
    </ol>
  </div>
  <div id="tabs-c324455e43" class="cmp-tabs" data-cmp-data-layer="{&quot;tabs-c324455e43&quot;:{&quot;shownItems&quot;:[&quot;tabs-c324455e43-item-ace94c0467&quot;],&quot;@type&quot;:&quot;core-components-examples/components/tabs&quot;,&quot;repo:modifyDate&quot;:&quot;2018-12-07T12:11:51Z&quot;}}" data-placeholder-text="false">
    <h2 style="margin-left: 10px">TABS WITH ICONS</h2>
    <ol role="tablist" class="cmp-tabs__tablist cru-tablist-icon " aria-multiselectable="false">
    <li role="tab" id="tabs-c324455e43-item-ace94c0467-tab" class="cmp-tabs__tab cmp-tabs__tab--active" aria-controls="tabs-c324455e43-item-ace94c0467-tabpanel" tabindex="0" data-cmp-hook-tabs="tab" aria-selected="true"><span>Tab 1</span></li>
      <li role="tab" id="tabs-c324455e43-item-6afd3ea640-tab" class="cmp-tabs__tab" aria-controls="tabs-c324455e43-item-6afd3ea640-tabpanel" tabindex="-1" data-cmp-hook-tabs="tab" aria-selected="false"><span>Tab 2</span></li>
      <li role="tab" id="tabs-c324455e43-item-0c51149435-tab" class="cmp-tabs__tab" aria-controls="tabs-c324455e43-item-0c51149435-tabpanel" tabindex="-1" data-cmp-hook-tabs="tab" aria-selected="false"><span>Tab 3</span></li>
    </ol>
  </div>
</div>
