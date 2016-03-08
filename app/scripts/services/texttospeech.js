'use strict';

/**
 * @ngdoc service
 * @name webDialogueApp.textToSpeech
 * @description
 * # textToSpeech
 * Service in the webDialogueApp.
 */
angular.module('webDialogueApp')
  .service('textToSpeech', function () {

	function speak(sentense){
		var japanese = new SpeechSynthesisUtterance(sentense);
		japanese.lang = 'ja-JP';
		speechSynthesis.speak(japanese);

		console.log('ブラウザ「' + sentense + '」');
	}

	return {
		speak: speak
	}

  });
