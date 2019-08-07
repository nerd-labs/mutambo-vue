export function orderByProperty(...argss: string[]): any {
  const prop = argss[0];
  const args: any = Array.prototype.slice.call(argss, 1);
  return (a: any, b: any) => {
    const equality = a[prop] - b[prop];
    if (equality === 0 && argss.length > 1) {
      return orderByProperty.apply(null, args)(a, b);
    }
    return equality;
  };
}
