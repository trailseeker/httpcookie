const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {

	res.header("Access-Control-Allow-Origin", "*");

	res
		.status(202)
		.cookie('JWT', 'SXDFSA08Q09239AS0D98123049203498DXS092384092834098SD098F203948203948203948234234.234987293847234.23.423492830492384092834089', {
			sameSite: 'strict',
			path: '/',
			expires: new Date(new Date().getTime() + 100 * 1000),
            httpOnly: true
		}).send("cookie being initialised")
});
app.get('/deleteCookie', (req, res) => {




	res
		.status(202)
		.clearCookie('Name').send("cookies cleared")
});


app.use('/read', (req, res) => {
	//var cookie = getcookie(req.cookies);


	
	 
	let statusCode=202;
	if(req.cookies.JWT === undefined  ){
		statusCode = 401;
		console.log('401')
	}else{
		console.log(req.cookies.JWT);
	}


	res
		.status(statusCode)
		.send("{}")
	
});


app.use('/verify', (req, res) => {
	var cookie = getcookie(req);
	res
		.status(203)
		.send("{}")
});


app.use('/sso',(req,res) =>{
	res.
	status(202)
		.cookie('JWT', 'SXDFSA08Q09239AS0D98123049203498DXS092384092834098SD098F203948203948203948234234.234987293847234.23.423492830492384092834089', {
			sameSite: 'strict',
			path: '/',
			expires: new Date(new Date().getTime() + 100 * 1000),
            httpOnly: true
		})
	.sendFile(path.join(__dirname, '/redirect.html'));
});

function getcookie(req) {
    var cookie = req.headers.cookie;
    // user=someone; session=QyhYzXhkTZawIb5qSl3KKyPVN (this is my cookie i get)
	console.log(req.headers);
    // cookie.split('; ');
}


app.listen(3001);