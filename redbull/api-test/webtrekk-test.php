<?php
require_once ('nusoap.php');

// Configuration
$wsdl_path = 'http://report2.webtrekk.de/SOAPv3.wsdl';
$method = 'getAnalysisData';

$parameter = array (
    'customerId' => '111111111111111',
    'login' => 'mylogin',
    'pass' => 'mypass',
    'analysis' => 'Navigation|Pages|Pages',
    'analysis_filter' => array(array("","Country", "LIKE", "Spain")),
    'time_start' => '2007-02-01',
    'time_stop' => '2007-02-28',
    'visitor_group' => "",
    'limit_rows' => 5,
    'search_string' => '',
    'build_pic' => 1,
    'pic_width' => 500,
    'pic_height' => 300
);

// Create nusoap Client instance and check for errors
$client = new soapclient($wsdl_path, true); // possibly new nusoap_client(…)
$err = $client->getError();

if ($err) {
    echo '<h2>Error while generating the SOAP-instance</h2>';
    echo '<pre>' . $err . '</pre>';
    exit(1);
}

// retrieve data and check for errors
$result = $client->call($method, array ($parameter));

if ($client->fault) {
    echo '<h2>Server reports error</h2><pre>';
    print_r($result);
    echo '</pre>';
    exit(1);
}

if ($client->getError()) {
    echo '<h2>Error while handing out data</h2><pre>' . $err . '</pre>';
    exit(1);
}

// Hand out result
echo '<h2>Ergebnis</h2><pre>';
print_r($result);
echo '</pre>';

// Write image in file
$fp = fopen("pic3d.png", "w+");
fwrite($fp, base64_decode($result['analysisPic3d']));
fclose($fp);

?>