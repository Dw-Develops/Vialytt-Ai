
//----Data Declarations----

var convpatterns = new Array (
  
  //functions
   new Array (".*test function.*", function(){testFunction()}),
   new Array (".*name function.*", function(){nameFunction()}),
   new Array (".*radio.*", function(){radio()}),
   new Array (".*pause.*", function(){stopRadio()}),
   new Array (".*survey sample.*", function(){openPage1()}),
   new Array (".*tribute.*", function(){openPage2()}),
   
   new Array (".*google.*", function(){openGoogle()}),
  
   //dialogue
   new Array (".*hello.*","Greetings."),
   new Array (".*the weather.*",	"I don't know what the weather is where you are but I hope its lovely!"),
   new Array ("Will I (.*)\.","Maybe, if youre good","The stars say yes","I seriously doubt it."),
   new Array ("My name is (.*)\.","Great! its nice to meet you $1 "),
  new Array (".*commands.*","You can use keywords like 'radio' 'commands' 'help' survey sample' 'tribute sample' or 'dwdevelops' . Or you can ask will I questions. I can also handle other basic conversation and dialogue. I'll let you know if I'm not programmed with a response."),
   new Array (".*help.*","You can use keywords like 'radio' 'commands' 'help' survey sample' 'tribute sample' or 'dwdevelops' . Or you can ask will I questions. I can also handle other basic conversation and dialogue. I'll let you know if I'm not programmed with a response."),
  new Array (".*dwdevelops.*","Scotty, erm...Dw... is interested in artificial intelligence, game development and immersive user experiences.", "His primary skill set is basic design and front end (browser) technologies. Javascript, html, css", "He's learning how to utilize and build data structures and applications that connect to them in a mobile web style." ),
  
  
   new Array ("(.*)","I'm sorry but I don't know anything about that. Type the keyword 'commands' for a basic list of my functional programming and keywords. "));

  
  /*
  new Array ("^I (?:wish |would like )(?:I could |I was able to |to be able to )(.*)\.","What would it be like to be able to $1?"),
  new Array ("I need (.*)\." , "Why do you need $1?", "Would it really help you to get $1?" , "Are you sure you need $1?"),
  new Array ("^When(.*) stole (.*)\.","What happened when $2 was stolen?","And how did you feel then?","Was $2 ever found?"),
  new Array ("I'd really like to (.*)\.","If you had the chance to $1, what would happen next?","Well then, I hope you get to $1."),
  new Array ("Why don't you (.*?)[\?]" , "Do you really think I don't $1?","Perhaps eventually I will $1.","Do you really want me to $1?"),
  new Array ("Why can't I (.*?)[\?]" , "Do you think you should be able to $1?","If you could $1, what would you do?",	"I don't know -- why can't you $1?","Have you really tried?"),
  new Array ("I can't (.*) you\.","How do you know you can't $1 me?","Perhaps you could $1 me if you tried.",	"What would it take for you to $1 me?"),
  new Array ("I can't (.*)\.","How do you know you can't $1?","Perhaps you could $1 if you tried.",	"What would it take for you to $1?"),
  new Array ("Are you (.*?)[\?]","Why does it matter whether I am $1?","Would you prefer it if I were not $1?","Perhaps you believe I am $1.","I may be $1 -- what do you think?"),
  new Array ("What (.*?)[\?]",	"Why do you ask?","How would an answer to that help you?","What do you think?"),
 
  
  new Array ("How (.*?)[\?]","How do you suppose?","Perhaps you can answer your own question.","What is it you're really asking?"),
  new Array ("Because (.*)\.","Is that the real reason?", "What other reasons come to mind?","Does that reason apply to anything else?","If $1, what else must be true?"),
  new Array ("(.*) sorry (.*)\.",	"There are many times when no apology is needed.","What feelings do you have when you apologize?"),
  new Array ("I think (.*)\.","Do you doubt $1?","Do you really think so?","But you're not sure $1?"),
  new Array ("Will I (.*)\.","Maybe, if youre good","The stars say yes","I seriously doubt it."),
  new Array ("(.*) friend(.*)\.",	"Tell me more about your friends.","When you think of a friend, what comes to mind?","Why don't you tell me about a childhood friend?"),
  new Array ("Yes\.","You seem quite sure.","OK, but can you elaborate a bit?"),
  new Array ("(.*) computer(.*)\.","Are you really talking about me?","Does it seem strange to talk to a computer?","How do computers make you feel?","Do you feel threatened by computers?"),
  new Array ("Is it (.*?)[\?]","Do you think it is $1?","Perhaps it's $1 -- what do you think?","If it were $1, what would you do?","It could well be that $1."),
  new Array ("It is (.*)\.","You seem very certain.","If I told you that it probably isn't $1, what would you feel?"),
  new Array ("Can you (.*) (me |me$).*\?", "Of course I can $1 you.", "Why wouldn't I be able to $1 you?"),
  new Array ("Can you (.*?)[\?]","What makes you think I can't $1?","If I could $1, then what?","Why do you ask if I can $1?"),
  new Array ("Can I (.*?)[\?]","Perhaps you don't want to $1.","Do you want to be able to $1?","If you could $1, would you?"),
  new Array ("You are (.*)\.","Why do you think I am $1?","Does it please you to think that I'm $1?","Perhaps you would like me to be $1.","Perhaps you're really talking about yourself?"),
  new Array ("You're (.*)\.","Why do you say I am $1?","Why do you think I am $1?",	"Are we talking about you, or me?"),
  new Array ("I don't (.*)\.","Don't you really $1?","Why don't you $1?","Do you want to $1?"),
  new Array ("I feel (.*)\.","Good, tell me more about these feelings.","Do you often feel $1?","When do you usually feel $1?","When you feel $1, what do you do?"),
  new Array ("I have (.*)\.","Why do you tell me that you've $1?","Have you really $1?","Now that you have $1, what will you do next?"),
  new Array ("I would (.*)\.","Could you explain why you would $1?","Why would you $1?","Who else knows that you would $1?"),
  new Array ("Is there (.*?)[\?]", "Do you think there is $1?","It's likely that there is $1.", "Would you like there to be $1?"),
  new Array ("My (.*)\.", "I see, your $1.","Why do you say that your $1?",	"When your $1, how do you feel?"),
  new Array ("^You (.*)\.", "We should be discussing you, not me.","Why do you say that about me?","Why do you care whether I $1?"),
  new Array ("Why (.*)\?", "Why don't you tell me the reason why $1?","Why do you think $1?" ),
  new Array ("I want (.*)\.", "What would it mean to you if you got $1?","Why do you want $1?","What would you do if you got $1?","If you got $1, then what would you do?"),
  new Array (".*( the highway| the road).*","The highway is for gamblers, you better use your sense."),
  new Array ("(.*) mother(.*)\.",	"Tell me more about your mother.","What was your relationship with your mother like?",	"How do you feel about your mother?","How does this relate to your feelings today?","Good family relations are important."),
  new Array ("(.*) father(.*)\.","Tell me more about your father.", "How did your father make you feel?","How do you feel about your father?","Does your relationship with your father relate to your feelings today?",	"Do you have trouble showing affection with your family?"),
  new Array ("(.*) child(.*)\.","Did you have close friends as a child?",	"What is your favorite childhood memory?","Do you remember any dreams or nightmares from childhood?","Did the other children sometimes tease you?","How do you think your childhood experiences relate to your feelings today?"),
  new Array ("(.*) your fav(o|ou)rite(.*?)[\?]","I really don't have a favorite.","I have so many favorites it's hard to choose one."),
  new Array ("(.*?)[\?]","Hmm, not sure I know..", "That's an interesting question...",  "Gosh, I'm not sure I can answer that...","Why do you ask that?","Please consider whether you can answer your own question.",	"Perhaps the answer lies within yourself?","Why don't you tell me?", "If you knew that in one year you would die suddenly, would you change anything about the way you are living now?"),
 */

uinput = ""
soutput = ""
dialog = ""

//-----The Core Code------


//-------
 function mainroutine() {
   dialog = ""
 uinput = document.mainscreen.BasicTextArea4.value;
 dialog = dialog + "User: " + uinput +  '\r' + '\r' + "\n";
  conversationpatterns()
 dialog = dialog  +  '\r' + "\n";
  updatescreen()

}

//-------
function conversationpatterns() {
	
   for (i=0; i < convpatterns.length; i++) {
    re = new RegExp (convpatterns[i][0], "i");
    if (re.test(uinput)) {
      len = convpatterns[i].length - 1;
      index = Math.ceil( len * Math.random());
      reply = convpatterns[i][index];
      soutput = uinput.replace(re, reply);
      soutput = initialCap(soutput);
	  
	  if(soutput !== 'Undefined') {
      dialog = dialog + "Vialytt: " + soutput +  '\r' + "\n";
     //break;
	  } else {
		dialog = dialog + "Vialytt: " +  'Working....';
	}
	break;
  }
 }
	
}

//-------

function initScreen() {
 updatescreen()
}

//-------
function updatescreen() {
 document.mainscreen.BasicTextArea1.value = dialog
 //document.mainscreen.BasicTextArea2.value = soutput
 //document.mainscreen.BasicTextArea3.value = uinput
 document.mainscreen.BasicTextArea4.value = ""
 
}


//-------
function initialCap(field) {
   field = field.substr(0, 1).toUpperCase() + field.substr(1);
   return field
}

//------->Action.Js------>>

var x = document.getElementById("sound1"); 
var name;


function testFunction() {
    console.log('Testing....');
	
	
};

function nameFunction() {
	prompt('What is your name');
	 name = prompt.value;
	 console.log(name);
}

function radio() {
	//x.play();
  window.open("https://www.youtube.com/watch?v=6KVjo36lrSw", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=25,left=500,width=450,height=275");
  
};

function stopRadio() {
	x.pause();
}


function openPage1() {
  window.open("https://codepen.io/Rogues/full/LMgWzV?fbclid=IwAR0vr6I48tUDGGO_X2eycf2LBybbohlC1_e5ePx8ho6Wd8WHoBJ8wyK7VtI", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=720,height=580");
}

function openPage2() {
  window.open("https://codepen.io/Rogues/full/wRYgKv", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=920,height=520");
}

function openGoogle() {
  window.open("https://www.google.com/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=920,height=520");
}