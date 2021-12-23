import "./index.scss";

const add = (a, b) => a + b;

console.log(add(1, 2));
console.log("serviceWorker" in navigator); // localhost
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
