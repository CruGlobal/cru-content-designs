<?php
function output_unordered_list($type) {
?>
<div class="list cru-list-<?= $type; ?>" style="border: 1px solid black">
    <h2 style="margin-left: 10px">Unordered list <?= $type; ?></h2>
    <ul class="cmp-list">
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
    </ul>
</div>

<div class="list cru-list-<?= $type; ?>" style="border: 1px solid black">
    <h2 style="margin-left: 10px">Ordered list <?= $type; ?></h2>
    <ol class="cmp-list">
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
        <li class="cmp-list__item">
            <article>
                <span class="cmp-list__item-title">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.</span>
            </article>
        </li>
    </ol>
</div>
<?php
}

$list_type = ['extra-spacing', ''];
foreach ($list_type as $type) {
    output_unordered_list($type);
}
?>
