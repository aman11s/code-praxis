/* Now, write a function that takes a message and a delay and print that message after the delay. */

const displayMsg = (msg, delay) => {
    setTimeout(() => {
        console.log(`Hello ${msg}`)
    }, delay)
}

displayMsg('Aman', 2000)