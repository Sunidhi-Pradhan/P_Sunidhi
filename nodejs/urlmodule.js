import ulr from'url'

const myURL = new URL('https://example.org :2000');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)