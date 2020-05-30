function genRandomSecret() {
  const numArray = new Array();

  while (true) {
    const generated = Math.floor(Math.random() * 9);

    if (!numArray.includes(generated)) {
      numArray.push(generated);
    }

    if (numArray.length === 4) {
      break;
    }
  }

  const newSecret = numArray.join('');

  console.log(newSecret);

  return newSecret;
}

module.exports = genRandomSecret;
