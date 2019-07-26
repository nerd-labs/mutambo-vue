export class IdGenerator {

  public static id() {
    return ['r4c', 'r4c', '-', 'r4c', '-', 'r4c', '-', 'r4c', '-', 'r4c', 'r4c', 'r4c']
      .map((str) => str === 'r4c' ? this.r4c : str)
      .join();
  }

  /** Random 4 characters */
  static get r4c() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
