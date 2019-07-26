export class IdGenerator {

  public static id() {
    return `${this.r4c}${this.r4c}-${this.r4c}-${this.r4c}-${this.r4c}-${this.r4c}${this.r4c}${this.r4c}`;
  }

  // random 4 characters
  private static get r4c() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}
