const getDataCallback = (num, callback) => {
  setTimeout(() => {
    if (typeof num === "number") {
      callback(undefined, num * 2);
    } else {
      callback("number must be provided");
    }
  }, 2000);
};
getDataCallback(2, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log("error");
      } else {
        console.log(data);
      }
    });
  }
});

const getDataPromise = num =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === "number"
        ? resolve(num * 2)
        : reject("number must be provided");
    }, 2000);
  });

getDataPromise(2).then(
  data => {
    getDataPromise(data).then(
      data => {
        console.log(`promisedata:${data}`);
      },
      err => console.log(err)
    );
  },
  err => {
    console.log(err);
  }
);

getDataPromise(10)
  .then(data => {
    return getDataPromise(data);
  })
  .then(data => {
    return 'this is data';
  })
  .then(data => console.log(data))
  .catch(err => console.log(err));
