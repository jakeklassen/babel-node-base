export default (router) => {
	router.get('/', (req, res) => {
		res.json({
			message: 'o hai!'
		});
	});
};
