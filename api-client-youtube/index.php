<?php
$qword = 'dedimulyadi';
$keyword = "&q=$qword&maxResults=100";
$endpoint = 'https://www.googleapis.com/youtube/v3/search?';
$key = 'key=AIzaSyBu9eZmScZr7IUfJjdZNvTx_z-oOgjZKnM';

$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, "$endpoint$key$keyword");

curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec($curl);



$result = json_decode($result, true);
$result = $result['items'];
foreach ($result as $hasil) {
   if ($hasil['id']['videoId'] == true) {
      $idvideo = $hasil['id']['videoId'];
      $endpoint = 'https://www.googleapis.com/youtube/v3/videos?';
      $key = 'key=AIzaSyBu9eZmScZr7IUfJjdZNvTx_z-oOgjZKnM';
      $params = "&part=snippet&id=$idvideo";

      $curl = curl_init();
      curl_setopt($curl, CURLOPT_URL, "$endpoint$key$params");

      curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
      $result = curl_exec($curl);
      $result = json_decode($result, true);

      // var_dump($result['items'][0]['snippet']["thumbnails"]['high']['url']);
      $url = $result['items'][0]['snippet']["thumbnails"]['high']['url'];
      echo "<img src='$url' width='100px'>";
   }
}
