<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0">
  <title>Cru Branding - Cru.org</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">
  <!-- <script src="https://kit.fontawesome.com/a93b69849a.js" crossorigin="anonymous"></script> -->
  <link href="styles.css" type="text/css" rel="stylesheet">
</head>

<body>
  <div class="comp-container">
    <?php

      $components = array(
        // 'accordion',
        // 'breadcrumb',
        // 'button',
        // 'carousel',
        // 'container',
        // 'download',
        // 'embed',
        'form/text',
        // 'image',
        // 'list',
        // 'search',
        // 'searchbar',
        // 'separator',
        // 'sharing',
        // 'tabs',
        // 'teaser',
        // 'text',
        // 'title',
      );

      foreach ($components as $component) {
        $slashPos = strpos($component, '/');
        if ($slashPos >= 0) {
          $path = $component;
          $file = substr($component, $slashPos, 100);
        } else {
          $path = $component;
          $file = $component;
        }
      ?>
      <fieldset class="<?= $component ?>-component">
        <legend><?= $component; ?> component</legend>
        <?php include "components/$path/$file.php"; ?>
      </fieldset>
      <?php
      }
    ?>
  </div>
</body>
</html>
