'use strict';

/**
 * @ngdoc function
 * @name webDialogueApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webDialogueApp
 */
angular.module('webDialogueApp')
  .controller('MainCtrl', function (speechToText, textToSpeech) {
	
	speechToText.service.removeCommands();

	var commands = {
		'こんにちは': function(){
			textToSpeech.speak('やあ、こんにちは');
		},
		'元気ですか': function(){
			textToSpeech.speak('はい、げんきです');
		},
		'さようなら': function(){
			textToSpeech.speak('では、ごきげんよう');
		},
		'最近の*topicについて、教えて': function(topic){
			textToSpeech.speak(topic + 'をgoogleで検索してみてください');
		}
	}
	speechToText.service.addCommands(commands);

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });
