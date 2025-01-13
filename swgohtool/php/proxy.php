<?php

$valid_requests1 = array(
    'panosweb.se'
);

$url = (isset($_GET['url'])) ? $_GET['url'] : false;
//echo $url;
if(!$url){
    $str = 'url parameter is not set';
    $date = date("Y-m-d G:i", time());
    $testdata = $date.":".$origin."-".$str.PHP_EOL;
    $myfile = file_put_contents('logs.txt', $testdata , FILE_APPEND | LOCK_EX);

     echo $str;
    exit;
}
 
if(!in_array($_SERVER['HTTP_HOST'], $valid_requests1))
{
    echo $_SERVER['HTTP_HOST'];
    echo 'Cannot continue0';
    exit;
}

if (array_key_exists('HTTP_ORIGIN', $_SERVER)) {
    $origin = $_SERVER['HTTP_ORIGIN'];
}
else if (array_key_exists('HTTP_REFERER', $_SERVER)) {
    $origin = $_SERVER['HTTP_REFERER'];
} else {
    $origin = $_SERVER['REMOTE_ADDR'];
}

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
$contents=curl_exec($ch);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
curl_close($ch);

$count_page = ("hitcount.txt");
$hits = file($count_page);
$hits[0] ++;
 
$fp = fopen($count_page , "w");
fputs($fp , "$hits[0]");
fclose($fp);

$date = date("Y-m-d G:i", time());
$testdata = $date.":".$origin."-".$url.PHP_EOL;
$myfile = file_put_contents('logs.txt', $testdata , FILE_APPEND | LOCK_EX);

echo $contents;
exit;
 
