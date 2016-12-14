import express from 'express';
import routes from './routes';

const PORT = process.env.PORT || 3000;
const app = express();

routes(app);

// Catch all route
app.use((req, res, next) => {
	const err = new Error(`${req.path} - 404 Not Found`);
	err.status = 404;
	next(err);
});

/* eslint-disable no-unused-vars */
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		error: err.message
	});
});
/* eslint-enable no-unused-vars */

app.listen(PORT, err => {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log(`Listening on port ${PORT}`);
});

export default app;
