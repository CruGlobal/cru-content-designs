<div class="info">
  <h2>AEM Style Properties:</h2>
  <h3>Group Name: Sizes</h3>
  <table>
    <tr>
      <th>Style Name</th>
      <th>CSS Classes</th>
    </tr>
    <tr>
      <td>XX Large</td>
      <td>cru-heading-xxl</td>
    </tr>
    <tr>
      <td>Extra Large</td>
      <td>cru-heading-xl</td>
    </tr>
    <tr>
      <td>Large</td>
      <td>cru-heading-lg</td>
    </tr>
    <tr>
      <td>Medium</td>
      <td>cru-heading-md</td>
    </tr>
    <tr>
      <td>Small</td>
      <td>cru-heading-sm</td>
    </tr>
    <tr>
      <td>Extra Small (uppercase)</td>
      <td>cru-heading-xs</td>
    </tr>
    <tr>
      <td>XX Small (uppercase)</td>
      <td>cru-heading-xxs</td>
    </tr>
  </table>
</div>

<?php
function output_heading($size) {
?>
<div class="title cru-heading-<?= $size; ?>">
  <div class="cmp-title">
    <h2 class="cmp-title__text">Heading <span style="text-transform: uppercase;"><?= $size; ?></span></h2>
  </div>
</div>
<div class="info">
  <span>Class: cru-heading-<?= $size; ?></span>
</div>
<?php
}

$heading_sizes = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs'];
foreach ($heading_sizes as $size) {
  output_heading($size);
}
?>
<div class="title cru-heading-lg">
  <div class="cmp-title">
    <h1 class="cmp-title__text"><a class="cmp-title__link" href="#">Heading Link</a></h1>
  </div>
</div>
<div class="info">
  <span>No additional classes needed besides size.</span>
</div>
