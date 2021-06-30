// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

const cookSteak = new Promise((resolve,reject) => {
  addFood(steak[0], '#steak', () => {
    addFood(steak[1], '#steak', () => {
      addFood(steak[2],'#steak',() => {
        addFood(steak[3],'#steak',() => {
          addFood(steak[4],'#steak',() => {
            addFood(steak[5],'#steak',() => {
              addFood(steak[6],'#steak',() => {
                  addFood(steak[7],'#steak',() => {
                  document.querySelector(
                  '#table'
                  ).innerHTML += `<img src="./public/images/steak.jpg"/>`;
                  resolve();
                });
              });
            });
          });
        });
      });
    });
  });
});




// Iteration 2 using `.then()`
const cookMash = new Promise((resolve, reject) => {
addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
  addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
      addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
        addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
          addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
            document.querySelector(
              '#table'
            ).innerHTML += `<img src="./public/images/mashPotatoes.jpg"/>`;
            resolve();
          });
        });
      });
    });
  });
});

// Iteration 3 using async/await

  async function makeFood(steps, id) {
for (let step of steps) {
  await addFood(step, id);
}
return new Promise(async (resolve, reject) => {
  for (let step of steps) {
    await addFood(step, id);
  }

document.querySelector(
  "#table"
).innerHTML += `<img src="./public/images/brusselSprouts.jpg"/>`;

document.querySelector(
  "#table"
).innerHTML += `<img src="./public/images/${id.replace("#", " ")}.jpg"/>`;
    resolve();
  });
}
 
(async function run() {
  await Promise.all([
    makeFood(steak, "#steak"),
    makeFood(mashPotatoes, "#mashPotatoes"),
    makeFood(brusselSprouts, "#brusselSprouts"),
  ]);
const cookBrusselSprouts = makeFood(brusselSprouts, "#brusselSprouts");

Promise.all([cookBrusselSprouts, cookSteak, cookMash]).then((result) => {
  const audio = new Audio("./public/media/dinnerIsServed.mp3");
  audio.volume = 0.5;
  audio.play();
  alert("Dinner is served!");
});
});
