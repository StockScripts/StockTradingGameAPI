var rp = require('request-promise');

const get_stock_price = (ticker) => {
    var options = {
        //method: 'GET',
        uri: 'https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_6b9e8401a74644dbb8cb97ec42bcaeee',
        json: true
    }
    return rp(options);
};

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
    
    get_stock_price('aapl')
    .then(data => {
        console.log(data);
        done(null, data);
    })
    .catch(err => {
        done(err);
    });
}
//curl -k 'https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_6b9e8401a74644dbb8cb97ec42bcaeee'
