function slowEcho(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let random = Math.floor(Math.random() * 10);
            if (random % 2 === 0) {
                resolve(message);
            } else {
                let err = new Error('Something odd happened.');
                reject(err);
            }
        }, delay);
    });
}

document.getElementById('btn')
    .addEventListener('click', async () => {
        try {
            let someMessage = await slowEcho('Hello World!',1000);
            console.log(someMessage);

        } catch(e) {
            console.log(e);
        }
    });

// document.getElementById('btn')
//     .addEventListener('click', async () => {
//        let [res1,res2,res3] = await Promise.all([
//            slowEcho('I am first',1000),
//            slowEcho('I am second',2000),
//            slowEcho('I am third!',3000)

//        ]);
//        console.log(res1);
//     });


// document.getElementById('btn')
//     .addEventListener('click', async () => {
//        let someMessage = await slowEcho('I waited 1 second!',1000);
//        console.log(someMessage);
//        someMessage = await slowEcho('I waited 2 seconds!',2000);
//        console.log(someMessage);
//        someMessage = await slowEcho('I waited 3 seconds!',3000);
//        console.log(someMessage);
//     });

// document.getElementById('btn')
//     .addEventListener('click', () => {
//         slowEcho("Hello World!", 1000)
//             .then((a) => {
//                 console.log(a);
//             }).catch((e) => {
//                 console.log('An error occured')
//                 console.log(e);
//             })
//     });

// document.getElementById('btn')
//     .addEventListener('click', () => {
//         Promise.all([
//             slowEcho('I waited 1 second!', 1000),
//             slowEcho('I waited 2 seconds', 2000),
//             slowEcho('I waited 3 seconds', 3000)
//         ]).then(([result1,result2,result3]) => {
//             // let result1 = value[0];
//             // let result2 = value[1];
//             // let result3 = value[2];
//             console.log(result1);
//             console.log(result2);
//             console.log(result3);
//         }).catch((err) => {
//             console.log(err);
//         });
//     });



    //shorthand below
    // let p = Promise.resolve('Hello!');
    // let q = Promise.reject(new Error('Uh oh!'));
    // p.then((message) => {
    //     console.log(message);    
    // }).catch((err) => {
    //     console.log(err);
    // })

    // q.then((message) => {
    //     console.log(message);    
    // }).catch((err) => {
    //     console.log(err);
    // })

    //use above instead of writing it long way below
    // let p = new Promise((resolve, reject) => {
    //     resolve('Hello!');
    // });

    // p.then((value) => {
    //     console.log(value);
    // })