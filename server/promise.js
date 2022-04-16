const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('errer'))
    }, 2000)
})
promise
    .then((resolve) => {
        console.log(resolve)
    })
    .catch((err) => {
        console.log(err.message)
    })
