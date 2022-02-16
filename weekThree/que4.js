// write a function which takes a message and time. The function should print that message every X interval.

const printMessage = (msg, delay, noOfTimes) => {

    const timerID = setInterval(() => {
      if(noOfTimes === 1) {
        clearInterval(timerID);
      } 
      console.log(msg);
      noOfTimes--;
    }, delay);
  
  };k
  
  printMessage('Hello', 1000, 5);