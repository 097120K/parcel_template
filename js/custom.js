console.log('Bello!');

const img = document.querySelector('.img');
img.style.backgroundImage = 'url(./images/logo.png)';

async function test() {
  const promise = Promise.resolve(123);
  console.log(promise);
};
test();