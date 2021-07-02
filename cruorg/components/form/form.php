<?php
function cru_form_container($input_type, $dark = false, $underline = false) {
  $styleClass = ( $underline == true ) ? ' cru-form--underlined' : '';
  $darkClass = ( $dark == true ) ? ' cru-form--dark' : '';
?>
  <div class="container cru-form<?= $styleClass . $darkClass ?>">
    <form class="cmp-form">
      <?php
        $input_state = ['', 'disabled', 'alert'];

        // Text inputs (text and textarea)
        if ($input_type == 'text') :
          foreach ($input_state as $state) :
            echo cru_form_input($state);
          endforeach;
        
        // Option inputs (checkboxes and radios)
        elseif ($input_type == 'options-boxes') :
          foreach ($input_state as $state) :
            echo cru_form_boxes($state);
          endforeach;
        
        // Option inputs (select and multi)
        elseif ($input_type == 'options-select') :
          foreach ($input_state as $state) :
            echo cru_form_select($state);
          endforeach;
        
        // Button
        elseif ($input_type == 'button') :
          echo cru_form_button();
        endif;
      ?>
    </form>
  </div>
<?php
}