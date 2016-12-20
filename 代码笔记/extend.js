/*
寄生式继承
 */
 // 原型继承
 function inheritObject(o) {
     // 声明一个过渡函数对象
     function F() {}
     // 过渡对象的原型及继承父类
     F.prototype = o;
     return new F();
 }
 var extend = function(subClass, superClass) {
     // 复制一份父类的原型副本保存在变量中
     var p = inheritObject(superClass.prototype);
     // 修正因为重写子类原型导致子类的constructor属性被修改
     p.constructor = subClass;
     // 设置子类的原型
     subClass.prototype = p;
 };