


 function start() {
	 window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    let finalTranscript = '';
    let recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.maxAlternatives = 10;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
        let transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }
	 
      //document.querySelector('body').innerHTML = finalTranscript + interimTranscript + '</>';
	  uinput= finalTranscript + interimTranscript;
	  console.log(uinput);
	  document.mainscreen.BasicTextArea4.value= '';
	  
	  
	  
	  
	  let millis = uinput.length * 250;
	   //console.log('millis: ' + millis);
	  //let timer = setTimeout(clear, 7500);
	 //mainroutine();
	 
	 recognition.onspeechend = function() {
  console.log('Speech has stopped being detected');
  
 
   
  
  mainroutine();
}
}
    
	
	
    recognition.start();
	
     
 }
 
