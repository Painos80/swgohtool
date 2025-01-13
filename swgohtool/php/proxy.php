<?php
$valid_requests = array(
    'http://panosweb.se',
    'http://panosweb.se/feddytool',
    'https://panosweb.se/feddytool',
    'http://localhost:4200',
    'https://panosweb.se',
    'https://localhost:4200',
    'http://panosweb.se/',
    'http://panosweb.se/feddytool/',
    'https://panosweb.se/feddytool/',
    'http://localhost:4200/',
    'https://panosweb.se/',
    'https://localhost:4200/',
   //'api.swgoh.gg'
);

$valid_requests1 = array(
    'panosweb.se',
   //'api.swgoh.gg'
);

$url = (isset($_GET['url'])) ? $_GET['url'] : false;
if(!$url) exit;
 
//todo: replace equals with startswith
 
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

/*if(!in_array($origin, $valid_requests))
{
    if(substr( $origin, 0, 7 ) !== "http://panosweb.se"
        && substr( $origin, 0, 7 ) !== "https://panosweb.se"
        && substr( $origin, 0, 7 ) !== "https://localhost:4200"
        && substr( $origin, 0, 7 ) === "http://localhost:4200"){
            echo $origin;
            echo 'Cannot continue';
            exit;
        
    }
}*/

//allow_url_fopen = off;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
$contents=curl_exec($ch);
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");
curl_close($ch);
echo $contents;
exit;
 //header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: *");

//header('Access-Control-Allow-Origin: your-host');
header('Access-Control-Allow-Credentials: true');
//header('Access-Control-Allow-Methods: your-methods like POST,GET');
header('Access-Control-Allow-Headers: content-type or other');
header('Content-Type: application/json');
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$string = file_get_contents($url);
//print file_get_contents($url);
//echo $string;
 

echo $url;

$count_page = ("hitcount.txt");
$hits = file($count_page);
$hits[0] ++;
 
$fp = fopen($count_page , "w");
fputs($fp , "$hits[0]");
fclose($fp);

//$txt = "user id date";
$date = date("Y-m-d G:i", time());
//$bodytag = str_replace("%body%", "black", "<body text='%body%'>");

//$pieces = explode("/", $origin);

//$testdata = $date.":".end($pieces)."-".$url.PHP_EOL;
$testdata = $date.":".$origin."-".$url.PHP_EOL;
$myfile = file_put_contents('logs.txt', $testdata , FILE_APPEND | LOCK_EX);
//$myfile = file_put_contents('logs.txt', $url.PHP_EOL , FILE_APPEND | LOCK_EX);
echo $string;