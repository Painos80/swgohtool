<?php

$count_page = ("logs.txt");
$hits = file_get_contents($count_page);
$myArray = preg_split('/<br[^>]*>/i', nl2br($hits));
$a=array();

foreach ($myArray as $value) {
    if (str_contains($value, 'https://swgoh.gg/api/player/')) {
        $prefix = ':';
$str = $value;
$subStr = strstr($str, 'https://swgoh.gg/api/player/');

//$myArray1 = explode(':', $str);
//echo $myArray1[0];
//echo $myArray1[0], '<br>';
//echo $myArray1[1], '<br>';
//echo $myArray1[2], '<br>';

        array_push($a, $subStr);
    //    echo $value, "<br>";
    }
}

foreach (array_unique($a) as $value) {
        echo $value, "<br>";
}