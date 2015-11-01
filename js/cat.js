setInterval(function(){
	$("#cats img").attr("src", "http://thecatapi.com/api/images/get?format=src&type=jpg&size=med&" + new Date().getTime());
    console.log('here');
},2000);