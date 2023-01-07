module.exports = function reverse (n) {
    n1 = Math.abs(n);
    n2 = String(n1);
    n3 = Array.from(n2).reverse().join('');
    n4 = Number (n3);
    return n4;
  
}
