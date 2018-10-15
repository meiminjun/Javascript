// 构造函数继承 TODO:后面与对象继承融合
function extend(Child,Parent){
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
}

module.export = {
  extend: extend
}
