'use strict';

/**
 * @ngdoc service
 * @name webDialogueApp.speechToText
 * @description
 * # speechToText
 * Service in the webDialogueApp.
 */
angular.module('webDialogueApp')
  .service('speechToText', function () {

	//音声認識初期化などはannyangというライブラリに依存。
	// https://github.com/TalAter/annyang/blob/master/docs/README.md

	annyang.debug();
	annyang.setLanguage('ja');
	annyang.start();
	var service = annyang;

	return{
		service: service
	}	

  });
