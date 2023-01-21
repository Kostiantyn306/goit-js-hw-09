import Notiflix from 'notiflix';

let delayValue = null;
let stepValue = null;
let amountValue = null;

const formDelay = document.querySelector(".form")
formDelay.addEventListener("submit", formDelays)


function formDelays (e) {
    const {
        elements: { delay, step, amount },
      } = e.currentTarget;
    
      delayValue = Number(delay.value);
      stepValue = Number(step.value);
      amountValue = Number(amount.value);
    
  
  e.preventDefault();

   for (let i = 1; i <= amountValue; i++) {

        createPromise(i, delayValue)
        .then(( {position, delay }) => {
            console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
          })
          .catch(({ position, delay }) => {
            console.log(`❌ Rejected promise ${position} in ${delay} ms`);
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
          });
          delayValue += stepValue;

   }
   formDelay.reset();
}

function createPromise(position, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
console.log("fs");