<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0">
  <title>Cru Branding - Cru.org</title>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined" rel="stylesheet">
  <!-- <script src="https://kit.fontawesome.com/a93b69849a.js" crossorigin="anonymous"></script> -->
  <link href="styles.css" type="text/css" rel="stylesheet">
  <style>
    body {font-family: "Source Sans Pro";}
    .comp-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    fieldset {
      margin: 25px 0;
      border-style: solid;
      border-color: #383F43;
    }
    legend {text-transform: capitalize;}
    .comp-wrapper {
      margin: 25px -12px;
      padding: 0 12px;
    }
    .comp-wrapper:nth-child(2) {
      margin-top: 0;
    }
    .comp-wrapper:last-child {
      margin-bottom: 0;
    }
    .comp-dark-bg {
      padding: 25px 12px;
      background-color: #383F43;
    }
    .info {
      background-color: #cfe2ff;
      border: #9ec5fe 1px solid;
      padding: 10px;
      color: black;
      margin-top: 16px;
      margin-bottom: 32px;
    }
    .info:last-child {
      margin-bottom: 0;
    }
    .info h2 {
      margin-top: 0;
    }
    .info h3 {
      margin-bottom: 0;
    }
    .info table {
      margin-left: 16px;
    }
    .info th,
    .info td {
      padding-right: 16px;
    }
    .info th {
      text-align: left;
    }
  </style>
</head>

<body>
  <div class="comp-container">
    <?php

      $components = array(
        // 'accordion',
        // 'breadcrumb',
        'button',
        // 'carousel',
        // 'container',
        // 'download',
        // 'embed',
        // 'form',
        // 'image',
        // 'input',
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
      ?>
      <fieldset class="<?= $component ?>-component">
        <legend><?= $component; ?> component</legend>
        <?php include "components/$component/$component.php"; ?>
      </fieldset>
      <?php
      }
    ?>
  </div>
</body>
</html>
