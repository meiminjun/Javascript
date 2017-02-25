import * as types from './mutations_types';

module.exports = {
	login:({commit}) => {
		commit(types.LOGIN_DB)
	}
}