var Conversation = require("../components/Conversation");
var LS = require("nativescript-localstorage");

describe("Conversation flow", function() {
  it("should return a string from Watson", function() {
    // check of het een string returned
    expect(Conversation.getWatsonAnswer()).toBe(jasmine.any(String));
  });
});

describe("Basic app functionality", function(){
  it("should save and load a string from local storage", function() {
    localStorage.setItem('testValue', 'test');
    expect(LS.getItem('testValue')).toBe('test');
    localStorage.removeItem('testValue');
  });
});
