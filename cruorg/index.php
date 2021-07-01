<?php
define('ROOT', dirname(__FILE__));

$components = array(
  'accordion',
  'breadcrumb',
  'button',
  'carousel',
  // 'container',
  // 'download',
  // 'embed',
  'form/options',
  'form/text',
  'image',
  'list',
  'search',
  // 'searchbar',
  'separator',
  // 'sharing',
  'tabs',
  'teaser',
  'text',
  'title',
);

$components_data = array();

foreach ($components as $component) {
  $slashPos = strpos($component, '/');
  if ( is_numeric( $slashPos ) ) {
    $type = substr( $component, 0, $slashPos );
    $file = substr( $component, $slashPos + 1, 100 );
    $components_data[] = array(
      'label' => ucfirst( $type ) . ' (' . ucfirst( $file ) . ')',
      'file' => $file,
      'path' => $component,
      'slug' => str_replace( '/', '-', $component ),
    );
  } else {
    $components_data[] = array(
      'label' => ucfirst( $component ),
      'file' => $component,
      'path' => $component,
      'slug' => $component,
    );
  }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0">
  <title>Cru Branding - Cru.org</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">
  <!-- <script src="https://kit.fontawesome.com/a93b69849a.js" crossorigin="anonymous"></script> -->
  <link href="dev.css" type="text/css" rel="stylesheet">
  <link href="styles.css" type="text/css" rel="stylesheet">
</head>

<body>
  <nav>
    <h3>Filter:</h3>
    <div class="button cru-button-tag cru-button-solid cru-button-gray-white">
      <a class="cmp-button" href="/cruorg"><span class="cmp-button__text">All</span></a>
    </div>
    <?php foreach ($components_data as $component) : ?>
      <div class="button cru-button-tag cru-button-solid cru-button-gray-white">
        <a class="cmp-button" href="?comp=<?= $component['slug'] ?>"><span class="cmp-button__text"><?= $component['label'] ?></span></a>
      </div>
    <?php endforeach; ?>
  </nav>
  <?php
    foreach ($components_data as $component) :
      if (
        ( isset( $_GET['comp'] ) && $_GET['comp'] === $component['slug'] ) ||
        !isset( $_GET['comp'] )
      ) :
  ?>
    <fieldset class="comp-container <?= $component['slug'] ?>-component">
      <legend><?= $component['label']; ?> Component</legend>
      <?php include "components/{$component['path']}/{$component['file']}.php"; ?>
    </fieldset>
  <?php
      endif;
    endforeach;
  ?>
</body>
</html>
