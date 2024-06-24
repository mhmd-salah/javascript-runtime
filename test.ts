function promRace() {
  const promOne = new Promise<string>((res, rej) =>
    setTimeout(res, 60, "resolved promise one")
  );
  const promTow = new Promise<string>((res, rej) =>
    setTimeout(rej, 50, "resolved promise tow")
  );
  return Promise.any([promOne, promTow]);
}

promRace().then(console.log).catch((console.error))