var srt = "hello 'world'";
var txt = "ameer baghdadi \"rashad\" kamel"; //use backslaash
console.log(srt);
console.log(txt);

var x = "John";
var y = new String("John"); //object
console.log(x);
console.log(y);
console.log(typeof (x));
console.log(typeof (y));

var text = "hello world 123456789";
console.log(text.toLocaleUpperCase());
console.log(text.slice(0, 6));
console.log(text.slice(-7, -3));
console.log(text.substr(0, 7));

var rep = "hello world hello hello hello HELLO 123456789";
console.log(rep.replace("hello", "anything"));
console.log(rep.replace(/hello/g, "anything"));
console.log(rep.replace(/hello/gi, "anything"));//ignore case

var text1 = "Hello World";
var text2 = "Axsos";
console.log(text1.concat("    ",text2));

var text3 = "Hello             World             ";
console.log(text3.trim());