<?php function output_carousel($teaser = false, $num = 3) { ?>
<div class="carousel">
  <div class="cmp-carousel">
    <div class="cmp-carousel__content">
      <?php for ($i = 1; $i <= $num; $i++) : ?>
        <div class="cmp-carousel__item<?= $active = ($i === 1) ? ' cmp-carousel__item--active' : ''; ?>">
          <?php if ($teaser === false) : ?>
            <div class="image">
              <div class="cmp-image">
                <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80" class="cmp-image__image">
              </div>
            </div>
          <?php else : ?>
            <div class="teaser">
              <div class="cmp-teaser">
                <div class="cmp-teaser__image">
                  <div class="cmp-image">
                    <a class="cmp-image__link" href="#">
                      <img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80" class="cmp-image__image">
                    </a>
                  </div>
                </div>
                <div class="cmp-teaser__content">
                  <h2 class="cmp-teaser__title">
                    <a class="cmp-teaser__title-link" href="#">Teaser Title</a>
                  </h2>
                  <div class="cmp-teaser__description">
                    <p>Teaser Description</p>
                  </div>
                </div>
              </div>
            </div>
          <?php endif; ?>
        </div>
      <?php endfor; ?>
      <div class="cmp-carousel__actions">
        <button class="cmp-carousel__action cmp-carousel__action--previous">
          <span class="cmp-carousel__action-icon"></span>
          <span class="cmp-carousel__action-text">Previous</span>
        </button>
        <button class="cmp-carousel__action cmp-carousel__action--next">
          <span class="cmp-carousel__action-icon"></span>
          <span class="cmp-carousel__action-text">Next</span>
        </button>
      </div>
      <ol class="cmp-carousel__indicators">
        <?php for ($i = 1; $i <= $num; $i++) : ?>
          <li class="cmp-carousel__indicator<?= $active = ($i === 1) ? ' cmp-carousel__indicator--active' : ''; ?>"></li>
        <?php endfor; ?>
      </ol>
    </div>
  </div>
</div>
<?php } ?>

<div class="comp-wrapper">
  <h2>Standard carousel</h2>
  <?php output_carousel(); ?>
</div>

<div class="comp-wrapper">
  <h2>Teaser carousel</h2>
  <?php output_carousel(true); ?>
</div>
