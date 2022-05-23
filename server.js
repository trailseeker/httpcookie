const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res) => {
	res
		.status(202)
		.cookie('JWT', 'SXDFSA08Q09239AS0D98123049203498DXS092384092834098SD098F203948203948203948234234.234987293847234.23.423492830492384092834089', {
			sameSite: 'strict',
			path: '/',
			expires: new Date(new Date().getTime() + 100 * 1000),
            httpOnly: true,
		}).send("cookie being initialised")
});
app.get('/deleteCookie', (req, res) => {
	res
		.status(202)
		.clearCookie('Name').send("cookies cleared")
});
app.listen(3000);