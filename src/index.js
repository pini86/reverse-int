module.exports = function reverse (n) {
    
    let str = String ( Math.abs (n) );

    let strout = '';

    for ( let i=0; i < str.length; i++ ) {
      strout =str[i] + strout;
    }

    return +strout;
}
