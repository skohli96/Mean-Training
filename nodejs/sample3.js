function factorial(n){
    var fact=1;
    for(i=1;i<=n;i++)
        fact*=i;
        return fact;
}
function power(n,m){
    var pow=1;
    for(i=0;i<m;i++)
        pow*=n;
        return pow;
}
module.exports.factorial=factorial;
module.exports.power=power;
