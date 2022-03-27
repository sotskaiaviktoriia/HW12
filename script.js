"use strict";

//Task
let newPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("done");
    //reject(new Error("Error!!!"));
  }, 5000);
});

//1st way (.then /.catch)
newPromise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise was finished!"));

//2nd way (async / await + try...catch)
async function getPromise() {
  try {
    const result = await newPromise;
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Promise was finished!");
  }
}

getPromise();
