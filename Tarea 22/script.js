// script.js
function robotFactory(model, mobile) {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    };
  }
  
  document.getElementById('make-robot').addEventListener('click', () => {
    const tinCan = robotFactory('P-500', true);
    tinCan.beep();
    document.getElementById('output').textContent = JSON.stringify(tinCan, null, 2);
  });
  