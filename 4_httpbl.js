
var data=require("./data/inventory");
function inStock(res){
    var inStock=data.filter(function(item){
        return item.avail=="In Stock";
    });
        res.end(JSON.stringify(inStock));
}
function onBackOrder(res){
    var onBackOrder=data.filter(function(item){
        return item.avail==="On Back Order";
    });
        res.end(JSON.stringify(onBackOrder));
}
module.exports.inStock=inStock;
module.exports.onBackOrder=onBackOrder;