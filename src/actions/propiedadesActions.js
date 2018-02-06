import axios from 'axios';

export function getData() {
    return (dispatch) => {
		axios.get('https://api.mercadolibre.com/sites/MLA/search?category=MLA401685&city=TUxBQ1ZJTGU4OGM3')
	      .then( (response) => {
	        console.log('PRODUCTS:');
	        console.log(response.data.results);
	        dispatch( {
	        	type: 'GET_DATA',
	        	payload: {
	        		propiedades: response.data.results,
	        		propiedadesBackup: response.data.results,
	        		propiedadesBackupPorRelevancia: response.data.results,
	        		criteria: 'relevancia'
	        	}
	        });
	      })
	      .catch( (error) => {
	        console.log(error);
	        dispatch({
	        	type: 'GET_DATA',
	        	payload: []
	        });
	    });
  }
}

