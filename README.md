
# FomoFactory Assignment

How to get Started

For Backend 
 * Clone the repo 
 * cd Backend
 * npm install
 * npm Start

For Frontend
 * Clone the repo
 * cd FrontEnd
 * npm install
 * npm dev run 

For optimization of backend :---------------

 Redis and Kafka

 The use of these can bring more faster response and can reduce the number of call into the mongoDb.

Explanation of Code Logic

There is an call to livecoinwatch api every 5 second and the data is getting stored in database with expiry of 1d and in FrontEnd the data get refreshed in every 10 second to get realtime value.


Working Demo link 
https://fomofactory-1.netlify.app/

Working Demo video link
https://drive.google.com/drive/folders/1IxoaBNll_YEG_RUYw8eWF-D9bVbJ1aXP?usp=sharing
