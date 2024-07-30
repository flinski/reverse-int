module.exports = function reverse(n) {
    n = `${Math.abs(n)}`.split("").reverse().join("");

    return Number(n);
};
