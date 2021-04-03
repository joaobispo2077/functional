function waitFor(time = 2000) {
  return new Promise(function (resolve) {

    setTimeout(() => resolve(), time);

  })
}

function getValue(value) {
  return new Promise((resolve) => {
    waitFor(1500);
    resolve(value);
  })
}

async function execute() {
  await waitFor(1500);
  let value = await getValue(2021);

  console.log(`teste value: ${value}`);
  await waitFor(5000);
  await waitFor(1500);
  value = await getValue(2022);
  console.log(`teste value: ${value}`);
  value = await getValue(2025);
  console.log(`teste value: ${value}`);
  return value;
}

execute();