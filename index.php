<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width, minimum-scale=1.0">
  <title>Cru Branding</title>
  <script src="https://kit.fontawesome.com/a93b69849a.js" crossorigin="anonymous"></script>
  <link href="style.css" type="text/css" rel="stylesheet">
  <style>
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    fieldset {
      margin: 25px 0;
    }
    .cru-button {
      margin-bottom: 5px;
    }
    .dark-bg {
      padding: 10px;
      background-color: #383F43;
    }
    .div-sep {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .div-sep .cru-button:nth-child(4),
    .div-sep .cru-button:nth-child(5) { margin-bottom: 0; }
  </style>
</head>

<body>
  <div class="container">

    <fieldset>
      <legend>Text</legend>
      <div class="cru-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lectus at sapien eleifend, et tempus metus viverra. Aliquam erat.</div>
      <div class="cru-text cru-text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lectus at sapien eleifend, et tempus metus viverra. Aliquam erat.</div>
    </fieldset>

    <fieldset>
      <legend>Title</legend>
      <?php
        $heading_styles = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];
        foreach ($heading_styles as $heading) {
          echo '<div class="cru-heading cru-heading-' . $heading . '">Heading ' . strtoupper($heading) . '</div>';
        }
      ?>
    </fieldset>

    <fieldset>
      <legend>Button</legend>
      <?php
        $button_styles = [
          ['', 'Default'],
          ['yellow-gray', 'Yellow Gray'],
          ['gray-white', 'Gray White'],
          ['white-gray', 'White Gray', true],
          ['yellow-gray-outline', 'Yellow Gray Outline'],
          ['gray-gray-outline', 'Gray Gray Outline'],
          ['yellow-white-outline', 'Yellow White Outline', true],
          ['white-white-outline', 'White White Outline', true],
        ];

        foreach ($button_styles as $button) {
      ?>
      <div class="div-sep <?php if ($button[2]) {echo 'dark-bg';} ?>">
        <button class="cru-button <?php if ($button[0]) {echo 'cru-button-' . $button[0];} ?>"><?= $button[1]; ?></button>
        <button class="cru-button <?php if ($button[0]) {echo 'cru-button-' . $button[0];} ?>" disabled><?= $button[1]; ?></button>
        <br />
        <button class="cru-button <?php if ($button[0]) {echo 'cru-button-' . $button[0];} ?>"><?= $button[1]; ?> Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button <?php if ($button[0]) {echo 'cru-button-' . $button[0];} ?>" disabled><?= $button[1]; ?> Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <?php
        }
      ?>
    </fieldset>
  
  </div>
</body>
</html>