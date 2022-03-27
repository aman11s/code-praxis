// Write a function that takes a number. Then print a countdown from that number to 0. At zero print "Bang Bang!"

const printMessage = (msg, countdown) => {

    const timerID = setInterval(()=> {
      if(countdown === 0) {
        console.log(`${countdown} - ${msg}`)
        clearInterval(timerID);
      } else {
        console.log(countdown);
        countdown--;
      }
    }, 1000);
  
  };
  
  printMessage('Bang Bang!!', 3);
