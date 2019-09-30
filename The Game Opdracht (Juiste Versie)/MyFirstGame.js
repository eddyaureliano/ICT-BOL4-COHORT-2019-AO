var name = prompt ("Thank you for playing The Adventurer! What is your Adventurer's name?");
alert ("Hello "+ name +", you're an Adventurer trying to find the treasure of a pirate called 'Sir Francis Drake.' It's worth millions of dollars, but nobody has ever been able to find out where he hid it. It's your goal to make the right decisions on your journey in order to stay alive and take the right paths, so you will find the treasure.");

var vraag1 = prompt ("It's 3 am, the sound of your alarm is waking you up. Today is the day, you get to start your adventure, and your search for the long lost treasure. You take a shower, dry yourself off and put on your clothes, before making your way to the airport. Upon arrival at the airport you realize you're kind of hungry, what will you do?\n\n(1) Get some fast-food at McDonald's\r\n(2) Decide you don't want to ruin your health and eat nothing instead.")

if (vraag1 == "1" ) {

alert ("You decide to get some food at McDonald's. You order a medium quarter pounder menu, with a nice and cold coke. After a nice meal, you're as full as can be. The suddenly, you look at the clock and realize you missed your flight. Game Over.")
    }

else if (vraag1 == "2") {
    
    //vraag 2
    var vraag2 = prompt ("Even though the hunger is intense, you don't succumb to it and decide you'll find something healthy to eat once you've landed. Once you've landed in Madagascar, you gotta decide what you'll do next. Will you:\n\n(1) Take a cab and go to your hotel.\r\n(2) Make your way into the city.")
}

if (vraag2 == "1") {
    alert ("You step into the cab, and give the adress of your hotel to the driver. After a few hours of driving you realize that you've missed your destination a long while ago. You're being taken to a completely different place, a harbor of some sorts. You try to bail out of the car but the cardoors are locked. The driver smirks and lets out a chuckle, calling you some sort of insult in French, but you're unable to make out what he says. After reaching the harbor you're forced out at gunpoint, before getting knocked unconscious by the driver. You've been kidnapped, game over.")
}

else if (vraag2 == "2" ) {
    //vraag 3
    var vraag3 = prompt ("Once you've made your way into the city, you head towards the city centre. You come across stores, food-stands, houses and much more. After walking around for a whie you've decided you're going to walk to your hotel. After entering an alleyway you've gotta choose between going left and right. Will you\n\n(1) Go left. \r\n(2) Go right.  ")
} 

if (vraag3 == "1") {
    //vraag 4
   var vraag4 = prompt ("You choose to go left. After walking through a seemingly never-ending alleyway, you see the sunshine shining through the narrow exit. You step out of the alleyway and in the distance you see your hotel. Before you can continue to head there, you're distracted my the smell of tasty food, coming from a restaurant closeby. What will you do: \n\n(1) Get something to eat at the restaurant.\r\n(2) Skip on the food and just go to the hotel straight away.")
}

else if (vraag3 == "2") {
    alert ("You choose to turn right. After walking through the alleyway for a little while a cold chill goes down your spine. 'This place doesn't feel right.' - you think to yourself. Before being able to turn back, a gang of thugs cut the corner, they've got knives drawn, and look like nothing but trouble. You try to make a run for it, but unfortunately they're faster and they pin you down. You got robbed and stabbed. Game Over.")
}

if (vraag4 == "1") {
    alert ("You decide to get something to eat at the nearby restaurant. You take a seat at the terrace, it's surprisingly quiet and you're the only customer there. After a few minutes of waiting a waiter comes out of the restaurant, and asks you what you'd like to order. You order your meal, and after a few minutes of waiting the waiter returns with it. You take a few bites, the food is really tasty. Some time passes and all is well, but suddenly you can't breathe anymore, and you're choking. Nobody is around to help you, and ultimately you choke on your food. Game Over.")
}

else if (vraag4 == "2") {
    //vraag 5
   var vraag5 = prompt ("You decide to go to the hotel straight away. Once you're at the reception, you ask the receiptionist for the key to your room. You recieve the key, your roomnumber is 1378. Before you reach the stairs you walk by a vending machine. You're kind of thirsty, and that Hoka Kola is looking pretty tasty. What will you do: \n\n(1) Get a drink from the vending machine.\r\n(2) Decide to skip the drink and go to your room.")
 } 

if (vraag5 == "1") {
   var vraag5 = alert ("You walk up to the vending machine and you insert a coin. You type in the number, and the claw grabs the drink you've selected, and slowly but surely makes its way to the basket, until out of nowhere... It stops moving. You wait patiently for any more movements to occur, but nothing happens. You try giving the machine a smack, but alas, nothing happens. You give it a kick, still no movement. You become more angry at every attempt. You try to shake the machine so the bottle will drop down, but then the entire vending machine falls on top of you, crushing almost every single bone in your body. Game Over.")
}

else if (vraag5 == "2") {
    //vraag 6
    var vraag6 = prompt ("You decide to skip on the drink and go to your hotelroom. You walk upstairs and enter the hallway. Once you walk towards one of the doors, you realize you forgot the number. It was either 1379 or 1378. Which door will you try? \n\n(1)1379\r\n(2)1378")
}

if (vraag6 == "1") {
    alert ("You decide to try door number 1379. You want to stick the key in the keyhole, so you grab the doorhandle, and then realize that the door isn't even locked. Somebody must be inside your hotelroom! You slowly walk in and turn the corner, where 6 gang members are sitting at the table, with about 20 kilos of coke lying on the table. That definitely wasn't your hotelroom, and now that you've seen them with the cocaine, they can't let you go. You try to run away but one of them manages to tackle you. All 6 of them start hitting you until you're beaten to death. Game Over.")
    }

    else if (vraag6 == "2") {
    var vraag7 = prompt ("You stick the key into the doorhandle and twist it. The door opens and you close it behind you. The room is quite big, you even have a kitchen, but it's not like you'll be doing any cooking. You unpack some of your luggage and put your suitcase in the corner. Since you feel kind of tired you decide to take head to bed and sleep through the day. You take of your jacket and shoes, and lie down on your bed. It's a little uncomfortable, but you're too tired to really notice. The hours pass and it's a new dawn, and it's a new day. What will you do: \n\n(1) Start your day off fresh by taking a shower. \r\n(2) Decide to be lazy and just watch tv until you feel awake enough to continue with your day.")
    }

    if (vraag7 == "1") {
        alert ("You decide to take a shower. You take dry clothes from your luggage and put them on the table in the bathroom. You also take a towel from the cabinet and put it next to them. You let the water run and wait for it to get warm, in the meantime you take off your clothes, and hop in the shower afterwards. You scrub your body from head to toe, and you're nice and clean. You turn the showerhead off, and open the doors. You try to exit the shower, but suddenly your feet slip away and you fall over, your head hitting really hard against the sink, and then the bathtub, killing you in the process. Game Over.")
        }

        else if (vraag7 == "2") {
    //vraag 8
    var vraag8 =  prompt ("You decide to stay in bed and watch some tv. You turn on the rather small television and try to find something to watch. Almost all the channels are in French, which you don't understand too well. Eventually you find an English channel and even though the subject doesn't really interest you, you decide it's better than nothing. After a few minutes the sleepiness is gone, and you're awake enough to start your day. You put on your clothes, fix your hair, and step out the door. Unfortunately you've got to get through 15 flights of stairs to get down to the lobby. Nobody feels like doing exercise this early in the morning. There's also an elevator to your left. What will you do: \n\n(1)Be lazy and take the elevator \r\n(2) Decide to be healty and stop whining, and just take the stairs.")
        }

if (vraag8 == "1") {
    alert ("You decide to be lazy and take the elevator. After all, it'll be way faster than taking the stairs anway. You press the button and wait for the elevator to make it's way up. Once the doors open, you're greeted by the nice and welcoming sound of soothing elevator music. You step into the elevator and press the button that will take you to the lobby. The doors close and you slowly start descending. You lean against the wall and close your eyes, wondering how big the treasure is going to be to the soothing sound of the elevator music. Until suddenly, a loud noise of a snapping elevator cable leads you to open your eyes out of shock. You feel the elevator beginning to descend faster, as you hear another loud snapping noise. And another, and another, until you start falling at full speed. You start levitating in the air, unable to stand on the floor anymore, and brace for impact. The elevator hits the bottom at full speed, and so do you against the cold hard floor, killing you in the process. Game Over.")
}

else if (vraag8 == "2") {
    //vraag 9
   var vraag9 = prompt ("Once you've made it down all the stairs, you're quite exhausted to say the least. You sit down in the lobby to take a quick breather. After you've catched your breath, you're ready to head out and take the first step on your adventure to find the treasure. You step outside the hotel, and the warm sunlight falls on your skin. You open your phone's navigation app, and realize you don't have much battery left. As a matter of fact, you've forgotten to take your charger with you in the first place. How could you make such a mistake? Not all hope is lost, seeing as how there's an electronics store right on the opposite end of the street. You could try buying a new one there, or you can just do it the old fashioned way and use a map. What will you do: \n\n(1) Do it the old fashioned way and use your map.\r\n(2) Buy a new charger for your phone at the store across the street.")
}

if (vraag9 == "2") {
alert ("You decide that reading a map is way too complicated and you prefer the simplicty of using your phone. You start walking towards the store, crossing the street. Unfortunately, you forget to look both ways before crossing, and get run over by a truck. Game Over.")
}

else if (vraag9 == "1") {
    //vraag 10
    var vraag10 = prompt ("You decide to use the map instead of buying a new charger, you can always just do that when you return to the hotel anyway. You look at the map for a while, being confused for a long time until you finally find out where you're headed. After walking for a while you wind up at a T-junction that for some reason isn't drawn on the map. You've got to choose if you're gonna go left or right. What will you do?\n\n(1) Go left.\r\n(2) Go right.")
}

if (vraag10 == "1") {
    alert ("You take a left, and you recognize where you're walking on the map. You're back on track again, and this is only merely the start of your adventure. In part 2 you'll make many more decisions and travel all across madagascar, until you find the precious treasure. Congratulations. You win! \n\n Game made by Eddy Markhorst\r\n To be continued.")
}

else if (vraag10 == "2"){
    alert ("You decide to go right. After some walking you realize that you're completely off track and this can't be where you're supposed to be going. You end up getting so focused on the map trying to figure out where you're going, that you stop paying attention to where you're walking. You fall right into an open manhole that wasn't blocked off, landing face first, breaking your neck. Game Over.")
}
