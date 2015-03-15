(function($){
	var Prettus = {};
	
	Prettus.params = {
		'search':'search',
		'searchFields':'searchFields',
		'orderBy':'orderBy',
		'sortedBy': 'sortedBy',
		'filter':'filter'
	};
	
	var helpers = {};
	
	helpers.join = function (value, sep){
		if(value instanceof Array){
			return value.join(sep||',');
		}
		else{
			return value;
		}
	};
	
	helpers.encodeKeyValue = function(key, value, sep){
		return key+"="+encodeURIComponent(helpers.join(value, sep));
	}
	
	/**
	 * Performs a ajax search on the repository
	 * @param string url path to resource repository
	 * @param string query string to be searched
	 * @param json prettusOptions searchFields, filter, orderBy and sortedBy
	 * @param json ajaxOptions jQuery Ajax Options
	 */
	 
	Prettus.search = function(url, query, prettusOptions, ajaxOptions){
		return $.ajax(helpers.prepareUrl(url, query, prettusOptions), ajaxOptions|{});
	};
	
	helpers.prepareUrl = function(url, query, prettusOptions){
		var urlComponents = [];
		
		if(query != undefined){
			urlComponents.push(helpers.encodeKeyValue(Prettus.params.search, query));
		}
		
		if (prettusOptions.searchFields != undefined){
			urlComponents.push(helpers.encodeKeyValue(Prettus.params.searchFields, prettusOptions.searchFields, ";"));
		}
		
		if(prettusOptions.filter != undefined){
			urlComponents.push(helpers.encodeKeyValue(Prettus.params.filter, prettusOptions.filter, ";"));
		}
		
		if(prettusOptions.orderBy != undefined){
			urlComponents.push(helpers.encodeKeyValue(Prettus.params.orderBy, prettusOptions.orderBy));
		}
		
		if(prettusOptions.sortedBy != undefined){
			urlComponents.push(helpers.encodeKeyValue(Prettus.params.sortedBy,prettusOptions.sortedBy));
		}
		
		return url+"?"+urlComponents.join("&");
	};
	

	return (window.Prettus = Prettus);
})($);