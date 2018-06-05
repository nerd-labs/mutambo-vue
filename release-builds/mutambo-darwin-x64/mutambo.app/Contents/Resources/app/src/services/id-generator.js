class IdGenerator {

  id() {
    return `${this.random4chars}${this.random4chars}-${this.random4chars}-${this.random4chars}-${this.random4chars}-${this.random4chars}${this.random4chars}${this.random4chars}`;;
  }

  get random4chars() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
}

export default new IdGenerator();
