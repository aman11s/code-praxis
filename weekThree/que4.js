// write a function which takes a message and time. The function should print that message every X interval.

const printMessage = (msg, delay, countdown) => {
  
  const timeoutID =  setInterval(() => {
    if(countdown === 0) {
      clearInterval(timeoutID);
    } else {
      console.log(msg);
    }
    countdown--;
  }, delay)
}

printMessage('Hello Aman', 1000, 5);
