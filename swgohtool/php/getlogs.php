<?php

$count_page = ("logs.txt");
$hits = file_get_contents($count_page);

echo nl2br($hits);