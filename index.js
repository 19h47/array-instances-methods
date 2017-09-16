let datas = require('./datas.json')

/**
 * Add an entry to array
 */
datas.push(
	{ 
		id: 6, 
		title: "Consectetur", 
		categories: [ "Dignissimos" ] 
	}
)


/**
 * Filter by ID
 */
const datasFilteredById = datas.filter((obj) => {
	// console.log(obj);
  	return obj.id === 5;
})

// console.log('Object with id egal to 5\n', datasFilteredById);


/**
 * Filter by categories
 */
const datasFilteredByCategory = datas.filter((obj) => {
	
	if (obj.categories === undefined) return
	
	return obj.categories.find((category) => {

		return category === 'Maxime';
	})
})

// console.log('Object(s) from category `Maxime`:\n', datasFilteredByCategory);


/**
 * Array of ids
 */
const datasIds = datas
	.map((data, index, array) => { return data.id })

	// Order ids by increasing number
	// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
	.sort((a, b) => { return a - b })

// console.log('Array of all ids sort by increasing number:\n', datasIds)


/**
 * Array of titles
 */
const datasTitles = datas.map((data, index, array) => { return data.title })

// console.log('Array of all titles\n', datasTitles)


/**
 * Array of categories used in datas
 */
const datasCategories = datas
	
	// First we check for categories existence in array
	.filter((obj) => { return obj.categories !== undefined ? obj : '' })

	// And we retrieve all arrays categories in datas
	.map((data, index, array) => { return data.categories })

	// Next we concat datasCategories array in one list with the ES6 spread operator
	// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
	.reduce((a, b) => { return [...a, ...b] })

	// // Then we remove dupplicate category
	.filter((category, index, array) => { return array.indexOf(category) === index })


// console.log('Array of all categories\n', datasCategories)
console.log('Datas array is unchanged\n:', datas)
