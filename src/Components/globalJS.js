// https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
export const kebabCase = string =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

export const camelCase = str => {
  return str
    .replace(/\s(.)/g, function(a) {
      return a.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function(b) {
      return b.toLowerCase();
    });
};
