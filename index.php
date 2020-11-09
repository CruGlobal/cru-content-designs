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
      <div class="cru-heading cru-heading-xxl cru-text-serif">Heading XXL</div>
      <div class="cru-heading cru-heading-xl">Heading XL</div>
      <div class="cru-heading cru-heading-lg">Heading LG</div>
      <div class="cru-heading cru-heading-md">Heading MD</div>
      <div class="cru-heading cru-heading-sm">Heading SM</div>
      <div class="cru-heading cru-heading-xs">Heading XS</div>
    </fieldset>

    <fieldset>
      <legend>Button</legend>
      <div class="div-sep">
        <button class="cru-button">Default</button>
        <button class="cru-button" disabled>Default</button>
        <br />
        <button class="cru-button">Default Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button" disabled>Default Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-yellow-gray">Yellow Gray</button>
        <button class="cru-button cru-button-yellow-gray" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-yellow-gray">Yellow Gray Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-yellow-gray" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-gray-white">Gray White</button>
        <button class="cru-button cru-button-gray-white" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-gray-white">Gray White Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-gray-white" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-button cru-button-white-gray">White Gray</button>
        <button class="cru-button cru-button-white-gray" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-white-gray">White Gray Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-white-gray" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-yellow-gray-outline">Yellow Gray Outline</button>
        <button class="cru-button cru-button-yellow-gray-outline" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-yellow-gray-outline">Yellow Gray Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-yellow-gray-outline" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-gray-gray-outline">Gray Gray Outline</button>
        <button class="cru-button cru-button-gray-gray-outline" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-gray-gray-outline">Gray Gray Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-gray-gray-outline" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-button cru-button-yellow-white-outline">Yellow White Outline</button>
        <button class="cru-button cru-button-yellow-white-outline" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-yellow-white-outline">Yellow White Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-yellow-white-outline" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-button cru-button-white-white-outline">White White Outline</button>
        <button class="cru-button cru-button-white-white-outline" disabled>Disabled</button>
        <br />
        <button class="cru-button cru-button-white-white-outline">White White Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-white-white-outline" disabled>Disabled Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
    </fieldset>
  
  </div>
</body>
</html>