'use strict';

describe('Service: textToSpeech', function () {

  // load the service's module
  beforeEach(module('webDialogueApp'));

  // instantiate service
  var textToSpeech;
  beforeEach(inject(function (_textToSpeech_) {
    textToSpeech = _textToSpeech_;
  }));

  it('should do something', function () {
    expect(!!textToSpeech).toBe(true);
  });

});
