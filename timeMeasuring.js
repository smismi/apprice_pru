const start = process.hrtime();

const arr = [];

for (let i = 0; i< 4000; i++) {
	arr.push({
		a: ~~(Math.random() * 4000)
	})
}


const arr2 = arr.reduce((acc, item) => {
	return {...acc, [`id_${item['a']}`]: `title_${item['a'] + 'testtesttest'}`}
}, {});

// const arr2 = arr.reduce((acc, item) => {
// 	acc[`id_${item['a']}`] = `title_${item['a'] + 'testtesttest'}`
// 	return acc
// }, {});


console.log(arr2);
const end = process.hrtime(start);
console.info('Execution time (hr): %ds %dms', end[0], end[1] / 1000000);


// setTimeout(() => {
// }, 500);



