import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const timer = document.querySelector('.timer')
const dataDays = document.querySelector("span[data-days]")
const dataHours = document.querySelector("span[data-hours]")
const dataMin = document.querySelector("span[data-minutes]")
const dataSec = document.querySelector("span[data-seconds]")
const inputDate = document.querySelector("input#datetime-picker")
const btnStart = document.querySelector("button[data-start]")
let valueTime = null;


const options = {
    // enableSeconds: true,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      
    const dataInput = selectedDates[0].getTime()
    const dataNow = new Date();
    const time = dataNow.getTime();
    let dateDate = dataInput - time
      

    if (dataInput < time) {

      Notiflix.Notify.failure('Please choose a date in the future');
        
    } else {
      btnStart.addEventListener('click', fnStart)
        btnStart.disabled = false;
      function fnStart() {
        inputDate.disabled = true
        btnStart.disabled = true
        Notiflix.Notify.success('Timer start');
      
        valueTime = setInterval(() => {
          dateDate -= 1000
          convertMs(dateDate)
          
          function convertMs(ms) {
            // Number of milliseconds per unit of time
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Remaining days
            const days = Math.floor(ms / day);
            // Remaining hours
            const hours = Math.floor((ms % day) / hour);
            // Remaining minutes
            const minutes = Math.floor(((ms % day) % hour) / minute);
            // Remaining seconds
            const seconds = Math.floor((((ms % day) % hour) % minute) / second);
            console.log(days, hours, minutes, seconds);
     
            if (dateDate < 1000) {
              clearInterval(valueTime);
                      inputDate.disabled = false
                      btnStart.disabled = false
            }

            addLeadingZero(days, hours, minutes, seconds)
            
            function addLeadingZero(days, hours, minutes, seconds) {
              dataDays.textContent = days.toString().padStart(2, '0');
              dataHours.textContent = hours.toString().padStart(2, '0');
              dataMin.textContent = minutes.toString().padStart(2, '0');
              dataSec.textContent = seconds.toString().padStart(2, '0');
            }
          }
        }, 1000)
      }
    }
  },
};

btnStart.disabled = true
const fp = flatpickr(inputDate, options);

timer.style.display = "flex";
timer.style.justifyContent = "space-evenly";
timer.style.margin = "50px" ;
timer.style.fontSize= '40px';
timer.style.color= "indigo";
timer.style.fontWeight= "bolder";
