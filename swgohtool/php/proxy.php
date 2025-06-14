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
//echo $url;
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($ch,CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_AUTOREFERER, 1);
curl_setopt($ch, CURLOPT_VERBOSE, true);

$agent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.0.3705; .NET CLR 1.1.4322)'; 

 curl_setopt($ch,CURLOPT_USERAGENT, $agent);  

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
curl_setopt($ch, CURLOPT_HTTPHEADER, [ 'x-gg-bot-access:' ]);


$contents=curl_exec($ch);
//echo 'start';
//echo $origin;
//echo $_SERVER['HTTP_REFERER'];
//echo $_SERVER['REMOTE_ADDR'];
//echo $_SERVER['HTTP_ORIGIN'];
//echo 'end';
//echo $contents;


$count_page = ("hitcount.txt");
$hits = file($count_page);
$hits[0] ++;
 
$fp = fopen($count_page , "w");
fputs($fp , "$hits[0]");
fclose($fp);

$date = date("Y-m-d G:i", time());
$testdata = $date.":".$origin."-".$url.PHP_EOL;
$myfile = file_put_contents('logs.txt', $testdata , FILE_APPEND | LOCK_EX);
print $contents;
//echo curl_errno($ch);
curl_close($ch);
exit;
 
