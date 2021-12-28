const express=require('express');
const app=express();
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.listen(3000,()=>{
	console.log("server running");
});
app.post('/api',(req,res)=>{
	console.log("One Request");
	console.log(req.body);
	//resend data toindex.html
	res.json({
		latitude:req.body.lat,
		longitude:req.body.lon
	});
});