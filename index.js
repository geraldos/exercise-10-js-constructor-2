String.prototype.upperCase = function () {
    return this.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

console.log('geraldo sepdwijaya'.upperCase()) 