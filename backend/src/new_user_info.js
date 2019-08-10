exports.handler = (event, context, callback) => {
	const done = (err, res) => {
		let response = {
            headers: {

            },
            statusCode: err ? 400 : 200,
            body: err ? JSON.stringify(err) : JSON.stringify(res)
        };
        err ? callback(res) : callback(null, res);
    }
}