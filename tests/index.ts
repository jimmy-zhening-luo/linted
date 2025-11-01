export function mochaGlobalSetup() {
  try {
    //
  }
  catch (error) {
    throw Error(
      "Failed to hook up Mocha",
      { cause: error },
    );
  }
}
