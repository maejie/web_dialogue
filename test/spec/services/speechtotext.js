'use strict';

describe('Service: speechToText', function () {

  // load the service's module
  beforeEach(module('webDialogueApp'));

  // instantiate service
  var speechToText;
  beforeEach(inject(function (_speechToText_) {
    speechToText = _speechToText_;
  }));

  it('should do something', function () {
    expect(!!speechToText).toBe(true);
  });

});
