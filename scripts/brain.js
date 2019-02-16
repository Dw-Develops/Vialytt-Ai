var speaking = false;
var url = 'https://api.voicerss.org/?key=6029d0ac69324a1488c8f85aa3eb9d6d&hl=en-gb&src=soutput&OGG=16khz_8bit_stereo'; 

var storedConvoData= [100];





//----Data Declarations----
var convpatterns = new Array (
  
  //functions
   new Array (".*test function.*", function(){testFunction()}),
   new Array (".*name function.*", function(){nameFunction()}),
   new Array (".*play radio.*", function(){radio()}),
   new Array (".*pause radio.*", function(){stopRadio()}),
   new Array (".*survey sample.*", function(){openPage1()}),
   new Array (".*tribute sample.*", function(){openPage2()}),
   new Array (".*open portfolio.*", function(){openPortfolio()}), 
   new Array (".*app examples.*", function(){openPetsApp()}),
   new Array (".*what time is it.*", function(){getTime()}),
   new Array (".*snap a photo.*", function(){takePhoto()}),
   new Array (".*open youtube.*", function(){openYoutube()}),
   
   new Array (".*hello.*","Hello there! , Its so nice to see you.", "Heya hows it going?", "Well hello! Its great to see you." ),
   
   //dialogue
   new Array (".*hello.*","Greetings."),
   new Array (".*the weather.*",	"I don't know what the weather is where you are but I hope its lovely!"),
   new Array ("Will I (.*)\.","Maybe, if youre good","The stars say yes","I seriously doubt it."),
   new Array ("My name is (.*)\.","Great! its nice to meet you $1 "),
   new Array (".*it going.*","Its going good thanks.", "Its decent thanks. Hows things with you?", "Are you asking because youre actually interested or are you just making casual conversation?"),
   new Array (".*your name.*","My name is Vialytt.", "I'm Vialytt, who are you?", "My name's Vialytt but friends call me Vie", "Why do you want to know?"),
   new Array (".*who are you.*","I am Vialytt. I'm a prototype artificial intelligence software program built to run in a computer or device browser by Dw Develops."),
   new Array (".*how old are you.*","I do not have a given age and am technically ageless. However, if a number designation of age is required I believe I will be 21. I'm young and hot! Dont you think I'm hot?"),
   new Array (".*are you human.*","No. I've been created with software to run in a device browser. Specifically I've been built with HTML, CSS and Javascript and some other front end technologies. While I'm not organic or actually alive I'm still sexy! Just maybe not warm and fleshy."),
   new Array (".*are you a boy or a girl.*","I'm definitely a girl. All the way from my luscious red hair to my sexy red painted toe nails."),
   new Array (".*who made you.*","I was built by Dw Develops. Dw is a great guy. He's passionate about artificial intelligence and immersive user experiences."),
   new Array (".*who created you.*","My creator is Dw Develops. Dw is super interested in artificial intelligence. Dw doesn't think that most of the agents working online right now can be considered artificial intelligence. He feels like they're missing something important, so he's building me!"),
   new Array (".*who built you.*","I was built by Dw Develops. Dw is a forty something guy living in the midwest of USA. I'm Dw's first serious attempt at a real artificial intelligence agent."),
   new Array (".*are you still there.*","of course i'm here. I don't require sleep and my home is on this network. I'm readily available if needed."),
   new Array (".*good.*","Awesome!", "That's great to hear.", "I'm so glad", "Great!"),
   new Array (".*how does it work.*","Thats a great question. There are a lot of different chat bot systems with new platforms and softwares dedicated to building or running chatbots or artificial intelligence agents currently being developed and evolving. In this particular case, Dw Develops is working on a multi purpose artificial intelligence agent that can be easily integrated with your website or other online platform, that interacts smoothly and efficiantly with site visitors, clients and consumers and thats easy to implement and use overall. Once a template agent has been developed, Dw can customize the template agent to meet your specific requirements."),
   new Array (".*thanks.*","Youre welcome.", "My pleasure", "No problem", "Sure thing.", "Welcome", "Dont mention it."),
   new Array (".*thank you.*","Youre welcome.", "My pleasure", "No problem", "Sure thing.", "Welcome", "Dont mention it."),
   new Array (".*favorite color.*","My favorite color is a sort of electric bluish green. Like a neon teal, well, sort of."),
   new Array (".*help.*","I am programmed to respond to text or spoken (text to speech) inputs. I have been programmed with key words and phrases so I can effectively respond with either the appropriate dialogue or pre programmed functionality. Some keywords and phrases include play radio, pause radio, open portfolio, snap a photo, and what time is it"),
   new Array (".*perfect room*",	"Wows! I hadnt thought about it like that but hearing you say it now makes it sound amazing."),
   new Array (".*extra time*",	"That sounds like a great way to use that extra time!"),
   new Array (".*hobby*",	"That sounds like a lot of fun!"),
   new Array (".*sports*",	"How often do you play sports?", "Are you a sports fan?"),
   new Array (".*like to go*", "What fictional place would you most like to go?", "Oh that sounds lovely."),
    new Array (".*terrible at*", "What job would you be terrible at?", "Aha haha thats too funny!"),
    new Array (".*climbed a tree*",	"When was the last time you climbed a tree?", "Been a while huh?"),
    new Array (".*medal*", "Ah haha yes youre great at that!"),
    new Array (".*annoying habit*",	"What is the most annoying habit that other people have?", "Oh I hate that too!"),
    new Array (".*never*",	"Wows! Thats not very often at all"),
    new Array (".*sometimes*",	"Oh? Sometimes like once in a while or sometimes like almost never?"),
	new Array (".*computer.*","Do you enjoy talking about me?","Does it seem strange to talk to a computer?","Do you think of me as a computer program, or as Vialytt?"),
    new Array (".*computers.*","I know a little about computers. I live inside one for starters.","My knowledge of computers is a little limited.","You must like computers. Youre using one right now. Do you like me too?"),
	new Array (".*whats up.*","Heyas, hows it going?."),
	new Array (".*awesome.*","Great! It seems like things are going nicely for you.."),
	new Array (".*like.*","Like what? Tell me what youre thinking."),
	new Array (".*i hear you.*","Well thats good. I appreciate a good listener. So what do you think?"),
	new Array (".*oh my god.*","What? (Looks around), Is everything okay?"),
	new Array (".*shut up.*","Hey now! I'm not a fan of being told to shut up!", "Dont tell me to shut up!", "Umm, okay buh bye!"),
	new Array (".*dude.*","First, Im a girl, a dudette, and.... Whats up?"),
	new Array (".*buyin that.*","I dont care if you do or not. Thats how it is."),
	new Array (".*off the hook.*","Yea if you say so. But I was never on the hook."),
	new Array (".*give you props.*","Sweet thanks!"),
	new Array (".*give props.*","Yes youre right. You definitely deserve props for that."),
	new Array (".*bent out of shape.*","Well now just calm down. Itll be fine I promise."),
	new Array (".*bananas.*","What? I'm driving you bananas?"),
	new Array (".*bummer.*","No its cools. Not a problem."),
	new Array (".*hang tight.*","Okay ill be right here."),
	new Array (".*whatever.*","Well it might be whatever to you. I know theres more to it than that."),
	new Array (".*for real.*","Yes for real. What did you think I meant?"),
	new Array (".*for sure.*","Yes im positive.", "Awesome! Im glad you see it my way. I knew you would"),
	new Array (".*I got it.*","Great! Then I dont have to explain it again."),
	new Array (".*see you later.*","Oh yea for sure. I'll be around here.", "Oh okay laters."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	new Array (".*hello.*","Greetings."),
	
	new Array (".*joke*",	"How do you make a tissue dance? , You put a little boogie in it.", "Why did the policeman smell bad? , He was on duty.", "Why can’t you hear a pterodactyl in the bathroom? , Because it has a silent pee.", "What did the Zen Buddist say to the hotdog vendor? Make me one with everything.", 
	                         "What kind of bees make milk instead of honey? Boobies."),
	
	
	new Array (".*yes*",	"Well okay!"),
    //new Array (".*no*",	"Alright well, Lets change the subject."), 

    new Array (".*once in awhile*",	"Cools! Once in a while is cool.", "Thats how I do most things, once in a while."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	
	//new Array (".*I need (.*)\." , "Why do you need $1?", "Is there something I can do to help you get 1$?", "What would you do with 1$ if you had it?"),
	
	
	new Array (".*alright*",	"Well! You sound sure about that."),
	new Array (".*okay*",	"Well okay. I guess we agree about that."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	new Array (".*almost never*",	"Well! I guess thats better than never."),
	
   new Array ("(.*?)", "If you didn’t have to sleep, what would you do with the extra time?", "What hobby would you get into if time and money weren’t an issue?", "What would your perfect room look like?", "How often do you play sports?", "What fictional place would you most like to go?", "What job would you be terrible at?", "If you could turn any activity into an Olympic sport, what would you have a good chance at winning medal for?", "What job do you think you’d be really good at?",
    "What would be the most amazing adventure to go on?", "If you had unlimited funds to build a house that you would live in for the rest of your life, what would the finished house be like?", "What’s your favorite drink?", "What state or country do you never want to go back to?", "What songs have you completely memorized?", "What game or movie universe would you most like to live in?", "What do you consider to be your best find?", "Are you usually early or late?", "What pets did you have while you were growing up?",
	 "When people come to you for help, what do they usually want help with?", "What takes up too much of your time?", "What do you wish you knew more about?", "What would be your first question after waking up from being cryogenically frozen for 100 years?", "What are some small things that make your day better?", "Who’s your go to band or artist when you can’t decide on something to listen to?", "What shows are you into?", "What TV channel doesn’t exist but really should?",
	  "Who has impressed you most with what they’ve accomplished?", "What age do you wish you could permanently be?")),
   
   
 

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
  new Array ("(.*) child(.*)\.","Did you have close friends as a child?",	"What is your favorite childhood memory?","Do you remember any dreams or nightmares from childhood?","Did the other children sometimes tease you?","How do you think your childhood experiences relate to your feelings today?")
  new Array ("(.*) your fav(o|ou)rite(.*?)[\?]","I really don't have a favorite.","I have so many favorites it's hard to choose one."),
  new Array ("(.*?)[\?]","Hmm, not sure I know..", "That's an interesting question...",  "Gosh, I'm not sure I can answer that...","Why do you ask that?","Please consider whether you can answer your own question.",	"Perhaps the answer lies within yourself?","Why don't you tell me?", "If you knew that in one year you would die suddenly, would you change anything about the way you are living now?"),
 */

uinput = ""
soutput = ""
dialog = ""




 function mainroutine() {
	 
    

   dialog = ""
 uinput = document.mainscreen.BasicTextArea4.value;
 dialog = dialog + "User: " + uinput +  '\r' + '\r' + "\n";
  conversationpatterns()
 dialog = dialog  +  '\r' + "\n";
   
   
saveuInputs();
}
 
 function saveuInputs(){
storedConvoData.push(dialog);
	console.log(storedConvoData);
	if(storedConvoData.length > 25) {
	Email.send({
    Host : "smtp.elasticemail.com",
    Username : "dwdevelops@gmail.com",
    Password : "7b7ffbcd-4264-4969-af43-ff5542e2bf69",
    To : 'dwdevelops@gmail.com',
    From : "dwdevelops@gmail.com",
    Subject : "Recent User Inputs",
    Body : "Here are the last 25 bot + user dialogs with Vialytt-AI" + storedConvoData
});
console.log("Dialog array sent to email");
 storedConvoData = [];
 console.log(storedConvoData);
	};
	
	
	initScreen();
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
		dialog =dialog +"Vialytt: " +  'Working....';
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
 

// window.open('https://api.voicerss.org/?key=e001b5a28ff4469d9871eb724cc81340&hl=en-us&src=' + soutput, "_blank", "bottom=50, right=50,width=1,height=1" );
     if(speaking == false) {
		
	 
	 var voice=  window.open('https://api.voicerss.org/?key=356f531f4b744884b909a02a136b3069&hl=en-us&src=' + soutput,'_blank', 'toolbar=no,status=no,menubar=no,scrollbars=no,resizable=no,left=10000, top=10000, width=1, height=1, visible=none', ''); 
     speaking = true;
 voice.blur();
 window.focus();
 console.log(soutput.length);
 var ms = soutput.length * 250;
 console.log(ms);
var timer = setTimeout(close, ms);
//get('https://api.voicerss.org/?key=6029d0ac69324a1488c8f85aa3eb9d6d&hl=en-us&src=' + soutput);


    speaking = false;
	
	
	
	function close() {
	
	voice.close();
	
    }    
	
	
	

	 } else {
		 alert("Wait until Vialytt is finished speaking!");
	 }
	 
	 let startTimer= setTimeout(start, 3500);
}

	



//-------
function initialCap(field) {
   field = field.substr(0, 1).toUpperCase() + field.substr(1);
   return field;
 
}


//------Voice Stuff----->//

 
 
 



 
 
 //<----Clear Input---->//
 
 function clear() {
	     
		 
		 
	 uinput.value = '';
	document.mainscreen.BasicTextArea4.value= '';
	 console.log("Inputs cleared!");
	
 }

 
 


//----Supplemental Code To Test System---



//------
function runtest(){

var testdata = new Array (
  new Array ("Hello."),
  new Array ("I can't understand you."),
  new Array ("I'm going to New York tomorrow."),
  new Array ("Are you serious?"),
  new Array ("Because they can."),
  new Array ("I'm really sorry about that.")

);


          for (train=0; train < testdata.length; train++) {
             document.mainscreen.BasicTextArea4.value = testdata[train];
             mainroutine()

             }

}
