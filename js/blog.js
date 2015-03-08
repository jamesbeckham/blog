$(function() {
	Parse.$ = jQuery;

	Parse.initialize("PIlswArZdwK3JPWnq3Pm0mL8fz2vpBl1nBvUdRgx", "1O9VKgi19DuOwz4diByDu3TgfZ8GX15pM1eUJjLv");

	var TestObject = Parse.Object.extend("TestObject");
	var testObject = new TestObject();
	testObject.save({foo: "bar"}).then(function(object) {
		alert("yay! It worked!!");
	});
});