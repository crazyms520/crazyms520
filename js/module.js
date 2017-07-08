function dd () {
    return 'dd';
}
module.exports = {
    a: (name) => {return  `Hello ${name}`; },
    b: { test: 12 },
    c: 123,
    d: 'test',
    e: false,
    f: new Date(),
    dd: dd
}