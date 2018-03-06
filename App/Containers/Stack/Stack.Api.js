import apisauce from 'apisauce'

//https://api.stackexchange.com/2.2/questions?sort=activity&site=stackoverflow
const create = (baseURL = 'https://api.stackexchange.com/2.2/') => {
	const api = apisauce.create({
		baseURL,
		headers: {
			'Cache-Control': 'no-cache'
		},
		timeout: 10000
	});
	const getList = (site) => api.get('questions', { sort: 'activity', site: site });
	return {
		getList
	}
};

export default { create }