import apisauce from 'apisauce'

const create = (baseURL = "http://tacko.web.beesightsoft.com/api/countries/") => {
	// const create = (baseURL = "https://api.github.com/") => {

	const data = "world";
	const getDataLocal = (word) => { return word + "-" + data; };

	const api = apisauce.create({
		baseURL,
		headers: {
			"Cache-Control": "no-cache"
		},
		timeout: 10000
	});
	const getUser = (username) => api.get("countries", { page: '1', pageSize: '20' });
	// const getUser = (username) => api.get("search/users", { q: username });

	return {
		getDataLocal,
		getUser
	}
};

export default { create }