function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

export const generator = infinite(); // "Generator { }"
