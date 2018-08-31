function createProto(Child, Parent) {
  function F() {}
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
  Child.uber = Parent.prototype;
  return Child;
}

exports.createProto = createProto;
