let arr = document.createElement("div");
arr.setAttribute("class", "continer");
let brr = document.createElement("span");
brr.setAttribute("id", "span");
brr.innerHTML = 10;

arr.append(brr);
document.body.append(arr);

let crr = 10;
setTimeout(() => {
  crr = crr - 1;
  span.innerHTML = crr;
  setTimeout(() => {
    crr = crr - 1;
    span.innerHTML = crr;
    setTimeout(() => {
      crr = crr - 1;
      span.innerHTML = crr;
      setTimeout(() => {
        crr = crr - 1;
        span.innerHTML = crr;
        setTimeout(() => {
          crr = crr - 1;
          span.innerHTML = crr;
          setTimeout(() => {
            crr = crr - 1;
            span.innerHTML = crr;
            setTimeout(() => {
              crr = crr - 1;
              span.innerHTML = crr;
              setTimeout(() => {
                crr = crr - 1;
                span.innerHTML = crr;
                setTimeout(() => {
                  crr = crr - 1;
                  span.innerHTML = crr;
                  setTimeout(() => {
                    crr = crr - 1;
                    span.innerHTML = "Happy Independence Day";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
