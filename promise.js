const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Hii')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Hello')
})

// 3 seconds
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Finally')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(result => result + '!')
    .then(result2 => {
        console.log(result2)
    })
    .catch(() => console.log('error'))
