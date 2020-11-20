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
      border-style: solid;
      border-color: #383F43;
    }
    #button-fieldset {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
    }
    #button-fieldset legend {
      margin-left: 12px;
    }
    .cru-button, .cru-tag, .cru-dot {
      display: inline-block;
      margin-left: 12px;
      margin-bottom: 5px;
    }
    .div-sep {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .div-sep:last-child {
      margin-bottom: 0;
    }
    .dark-bg {
      padding-top: 12px;
      padding-right: 12px;
      padding-bottom: 7px;
      background-color: #383F43;
    }
    .dark-bg:last-child {
      padding-bottom: 5px;
    }
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
      <div class="cru-heading cru-heading-xxl">Heading XX Large</div>
      <div class="cru-heading cru-heading-xl">Heading Extra Large</div>
      <div class="cru-heading cru-heading-lg">Heading Large</div>
      <div class="cru-heading cru-heading-md">Heading Medium</div>
      <div class="cru-heading cru-heading-sm">Heading Small</div>
      <div class="cru-heading cru-heading-xs">Heading Extra Small</div>
    </fieldset>

    <fieldset id="button-fieldset">
      <legend>Button</legend>
      <!-- Standard buttons -->
      <div class="div-sep">
        <button class="cru-button cru-button-yellow-gray">Yellow Gray</button>
        <button class="cru-button cru-button-yellow-gray" disabled>Yellow Gray</button>
        <br>
        <button class="cru-button cru-button-yellow-gray">Yellow Gray Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-yellow-gray" disabled>Yellow Gray Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-gray-white">Gray White</button>
        <button class="cru-button cru-button-gray-white" disabled>Gray White</button>
        <br>
        <button class="cru-button cru-button-gray-white">Gray White Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-gray-white" disabled>Gray White Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-button cru-button-white-gray">White Gray</button>
        <button class="cru-button cru-button-white-gray" disabled>White Gray</button>
        <br>
        <button class="cru-button cru-button-white-gray">White Gray Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-white-gray" disabled>White Gray Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-yellow-gray-outline">Yellow Gray Outline</button>
        <button class="cru-button cru-button-yellow-gray-outline" disabled>Yellow Gray Outline</button>
        <br>
        <button class="cru-button cru-button-yellow-gray-outline">Yellow Gray Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-yellow-gray-outline" disabled>Yellow Gray Outline Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-button cru-button-gray-gray-outline">Gray Gray Outline</button>
        <button class="cru-button cru-button-gray-gray-outline" disabled>Gray Gray Outline</button>
        <br>
        <button class="cru-button cru-button-gray-gray-outline">Gray Gray Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-gray-gray-outline" disabled>Gray Gray Outline Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-button cru-button-yellow-white-outline">Yellow White Outline</button>
        <button class="cru-button cru-button-yellow-white-outline" disabled>Yellow White Outline</button>
        <br>
        <button class="cru-button cru-button-yellow-white-outline">Yellow White Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-yellow-white-outline" disabled>Yellow White Outline Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-button cru-button-white-white-outline">White White Outline</button>
        <button class="cru-button cru-button-white-white-outline" disabled>White White Outline</button>
        <br>
        <button class="cru-button cru-button-white-white-outline">White White Outline Icon <i class="fal fa-shopping-cart"></i></button>
        <button class="cru-button cru-button-white-white-outline" disabled>White White Outline Icon <i class="fal fa-shopping-cart"></i></button>
      </div>
      <!-- Tag-style buttons -->
      <div class="div-sep">
        <button class="cru-tag cru-tag-gray-white">Gray White</button>
        <button class="cru-tag cru-tag-gray-white" disabled>Gray White</button>
        <br>
        <button class="cru-tag cru-tag-gray-white cru-tag-icon">Gray White <i class="fas fa-times-circle"></i></button>
        <button class="cru-tag cru-tag-gray-white cru-tag-icon" disabled>Gray White <i class="fas fa-times-circle"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-tag cru-tag-white-gray">White Gray</button>
        <button class="cru-tag cru-tag-white-gray" disabled>White Gray</button>
        <br>
        <button class="cru-tag cru-tag-white-gray cru-tag-icon">White Gray <i class="fas fa-times-circle"></i></button>
        <button class="cru-tag cru-tag-white-gray cru-tag-icon" disabled>White Gray <i class="fas fa-times-circle"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-tag cru-tag-gray-gray-outline">Gray Gray Outline</button>
        <button class="cru-tag cru-tag-gray-gray-outline" disabled>Gray Gray Outline</button>
        <br>
        <button class="cru-tag cru-tag-gray-gray-outline cru-tag-icon">Gray Gray Outline <i class="fas fa-times-circle"></i></button>
        <button class="cru-tag cru-tag-gray-gray-outline cru-tag-icon" disabled>Gray Gray Outline <i class="fas fa-times-circle"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-tag cru-tag-white-white-outline">White White Outline</button>
        <button class="cru-tag cru-tag-white-white-outline" disabled>White White Outline</button>
        <br>
        <button class="cru-tag cru-tag-white-white-outline cru-tag-icon">White White Outline <i class="fas fa-times-circle"></i></button>
        <button class="cru-tag cru-tag-white-white-outline cru-tag-icon" disabled>White White Outline <i class="fas fa-times-circle"></i></button>
      </div>
      <!-- Dot-style buttons -->
      <div class="div-sep">
        <button class="cru-dot cru-dot-white-gray"><i class="fal fa-arrow-up"></i></button>
        <button class="cru-dot cru-dot-white-gray"><i class="fal fa-arrow-left"></i></button>
        <button class="cru-dot cru-dot-white-gray"><i class="fal fa-arrow-right"></i></button>
        <button class="cru-dot cru-dot-white-gray"><i class="fal fa-arrow-down"></i></button>
        <br>
        <button class="cru-dot cru-dot-white-gray disabled"><i class="fal fa-arrow-up"></i></button>
        <button class="cru-dot cru-dot-white-gray disabled"><i class="fal fa-arrow-left"></i></button>
        <button class="cru-dot cru-dot-white-gray disabled"><i class="fal fa-arrow-right"></i></button>
        <button class="cru-dot cru-dot-white-gray disabled"><i class="fal fa-arrow-down"></i></button>
      </div>
      <div class="div-sep">
        <button class="cru-dot cru-dot-gray-gray-outline"><i class="fal fa-arrow-up"></i></button>
        <button class="cru-dot cru-dot-gray-gray-outline"><i class="fal fa-arrow-left"></i></button>
        <button class="cru-dot cru-dot-gray-gray-outline"><i class="fal fa-arrow-right"></i></button>
        <button class="cru-dot cru-dot-gray-gray-outline"><i class="fal fa-arrow-down"></i></button>
        <br>
        <button class="cru-dot cru-dot-gray-gray-outline disabled"><i class="fal fa-arrow-up"></i></button>
        <button class="cru-dot cru-dot-gray-gray-outline disabled"><i class="fal fa-arrow-left"></i></button>
        <button class="cru-dot cru-dot-gray-gray-outline disabled"><i class="fal fa-arrow-right"></i></button>
        <button class="cru-dot cru-dot-gray-gray-outline disabled"><i class="fal fa-arrow-down"></i></button>
      </div>
      <div class="div-sep dark-bg">
        <button class="cru-dot cru-dot-white-white-outline"><i class="fal fa-arrow-up"></i></button>
        <button class="cru-dot cru-dot-white-white-outline"><i class="fal fa-arrow-left"></i></button>
        <button class="cru-dot cru-dot-white-white-outline"><i class="fal fa-arrow-right"></i></button>
        <button class="cru-dot cru-dot-white-white-outline"><i class="fal fa-arrow-down"></i></button>
        <br>
        <button class="cru-dot cru-dot-white-white-outline disabled"><i class="fal fa-arrow-up"></i></button>
        <button class="cru-dot cru-dot-white-white-outline disabled"><i class="fal fa-arrow-left"></i></button>
        <button class="cru-dot cru-dot-white-white-outline disabled"><i class="fal fa-arrow-right"></i></button>
        <button class="cru-dot cru-dot-white-white-outline disabled"><i class="fal fa-arrow-down"></i></button>
      </div>
    </fieldset>

    <button class="button-test">Hi! I'm a button!</button>
    <button class="tag-test">Hi! I'm a tag! <i class="fas fa-times-circle"></i></button>
    <button class="dot-test"><i class="fal fa-arrow-right"></i></button>
  
  </div>
</body>
</html>