console.log('COVERS');
// const cards = document.querySelectorAll('.marquee__card');

// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: 0,
// };
// let observer = new IntersectionObserver(callback, options);

// let callback = (entries, observer) => {
//   const covers = document.querySelector('.covers');
//   observer.observe(covers);
//   // function moveCovers(entries) { }
//   entries.forEach(entry => {
//     console.log(entry);
//     // Each entry describes an intersection change for one observed
//     // target element:
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//   });
// };
//******************/
const objCards = document.querySelectorAll('.marquee__card');
const arrayCards = [...objCards];

const covers = document.querySelector('.covers');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

let observer = new IntersectionObserver(moveCovers, options);
observer.observe(covers);

function moveCovers() {
  console.log('start');
  startAnimation(arrayCards);
}
function startAnimation(arr) {
  return arr.map(element => {
    element.classList.add('animation');
    // console.log('start');
  });
}
// function stopCovers() {
//   console.log('stop');
// }
// function stopAnimation() {
//   marqueeCard.classlist.remove('animation');
// }
