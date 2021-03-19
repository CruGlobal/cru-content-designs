<?php function cru_accordion($color)
{ ?>
  <div class="accordion cru-accordion-<?= $color; ?>">
    <div class="cmp-accordion">
      <?php for ($i = 1; $i <= 3; $i++) : $state = $i == 1 ? 'expanded' : 'hidden'; ?>
        <div class="cmp-accordion__item">
          <h3 class="cmp-accordion__header">
            <button class="cmp-accordion__button<?php if ($i == 1) {
                                                  echo ' cmp-accordion__button--expanded';
                                                } ?>">
              <span class="cmp-accordion__title">Item <?= $i ?></span>
              <span class="cmp-accordion__icon">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 0.988281L5.236 4.66802C5.17349 4.72911 5.08872 4.76343 5.00033 4.76343C4.91195 4.76343 4.82718 4.72911 4.76467 4.66802L1 0.988281" stroke="#383F43" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </h3>
          <div class="cmp-accordion__panel cmp-accordion__panel--<?= $state ?>">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi bibendum neque egestas congue quisque egestas. Varius morbi enim nunc faucibus a pellentesque. Scelerisque eleifend donec pretium vulputate sapien nec sagittis.
          </div>
        </div>
      <?php endfor; ?>
    </div>
  </div>
<?php } ?>

<?php cru_accordion('white'); ?>

<div style="background-color: #383F43">
  <?php cru_accordion('black'); ?>
</div>

<?php cru_accordion_links('white'); ?>

<div style="background-color: #383F43">
  <?php cru_accordion_links('black'); ?>
</div>

<?php function cru_accordion_links($color)
{ ?>
  <div class="accordion cru-accordion-links cru-accordion-<?=$color; ?>">
    <div class="cmp-accordion">
      <?php for ($i = 1; $i <= 2; $i++) : $state = $i == 1 ? 'expanded' : 'hidden'; ?>
        <div class="cmp-accordion__item">
          <h3 class="cmp-accordion__header">
            <button class="cmp-accordion__button<?php if ($i == 1) {
                                                  echo ' cmp-accordion__button--expanded';
                                                } ?>">
              <span class="cmp-accordion__title">QUICK LINKS <?= $i ?></span>
              <span class="cmp-accordion__icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#FFCF07"/>
                  <path d="M20 15L16.236 18.8989C16.1735 18.9636 16.0887 19 16.0003 19C15.9119 19 15.8272 18.9636 15.7647 18.8989L12 15" stroke="#FFCF07" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </span>
            </button>
          </h3>
          <div class="cmp-accordion__panel cmp-accordion__panel--<?= $state ?>">
            <?php for ($j = 1; $j <= 4; $j++) : ?>
              <div class="cru-accordion-column">
                <h3>Category</h3>
                <?php for ($k = 1; $k <= 3; $k++) : ?>
                  <p>Category</p>
                <?php endfor; ?>
              </div>
            <?php endfor; ?>
          </div>
        </div>
      <?php endfor; ?>
    </div>
  </div>
<?php } ?>