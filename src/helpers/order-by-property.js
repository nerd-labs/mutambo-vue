export function orderByProperty(prop) {
  const args = Array.prototype.slice.call(arguments, 1);
  return (a, b) => {
    const equality = a[prop] - b[prop];
    if (equality === 0 && arguments.length > 1) {
      return orderByProperty.apply(null, args)(a, b);
    }
    return equality;
  };
}
