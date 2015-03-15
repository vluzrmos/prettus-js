# Prettus-js
A jQuery Ajax handle to https://github.com/andersao/l5-repository.

# Dependencies

* jQuery.
* Laravel 5 [Prettus/Repository](https://github.com/andersao/l5-repository).

# Usage
```javascript
Prettus.search('/users', 'John Doe', {
		'searchFields':'name:like;username:like', 
		'orderBy':'title', 
		'sortedBy':'desc'
	})
	.success(function(data){
		console.log(data);	
	});

//or just
Prettus.search('/users')
	.success(function(data){
		console.log(data);	
  })
  .error(function(data){
     console.log("Something went wrong! :/");
  });

```

## Configuration
```javascript
Prettus.params ={
	'search':'s',
	'searchFields':'sf',
	'orderBy':'o',
	'sortedBy': 'sb',
	'filter':'f'
};
```
