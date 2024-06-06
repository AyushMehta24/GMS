export function timeDifference(date2: number) {
    let difference: number = Date.now() - date2;
  
    let yearsDifference: number = Math.floor(
      difference / 1000 / 60 / 60 / 24 / 30 / 12
    );
    difference -= yearsDifference * 1000 * 60 * 60 * 24 * 30 * 12;
  
    let monthsDifference: number = Math.floor(
      difference / 1000 / 60 / 60 / 24 / 30
    );
    difference -= monthsDifference * 1000 * 60 * 60 * 24 * 30;
  
    let daysDifference: number = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24;
  
    let hoursDifference: number = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60;
  
    let minutesDifference: number = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60;
  
    let secondsDifference: number = Math.floor(difference / 1000);
  
    let duration = "";
  
    if (yearsDifference !== 0) {
      duration = duration + yearsDifference + (yearsDifference === 1 ? " year, " : " years, ");
    }
  
    if (monthsDifference !== 0) {
      duration = duration + monthsDifference + (monthsDifference === 1 ? " month, " : " months, ");
    }
  
    if (daysDifference !== 0) {
      duration = duration + daysDifference + (daysDifference === 1 ? " day, " : " days ");
    }

    if(daysDifference === 0 && hoursDifference !== 0){
        duration = duration + hoursDifference + (hoursDifference === 1 ? " hour " : " hours")
    }  
    
    if(hoursDifference === 0 && minutesDifference !== 0){
        duration = duration + minutesDifference + (minutesDifference === 1 ? " minute " : " minutes")
    }

    if(minutesDifference === 0 && secondsDifference !== 0){
        duration = duration + secondsDifference + (secondsDifference === 1 ? " second " : " seconds")
    }
    return duration
  
    // console.log(
    //   "difference = " +
    //     yearsDifference +
    //     " years/s " +
    //     monthsDifference +
    //     " month/s " +
    //     daysDifference +
    //     " day/s " +
    //     hoursDifference +
    //     " hour/s " +
    //     minutesDifference +
    //     " minute/s " +
    //     secondsDifference +
    //     " second/s "
    // );
  }