$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== ""){
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
})

var cyclists = [
    [0,0,"Obviously not","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [1,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [2,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [3,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [4,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [5,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [6,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [7,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [8,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [9,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [10,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [11,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [12,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [13,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [14,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [15,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [16,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [17,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [18,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [19,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [20,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [21,0,"A little too young","Try again though. Just don't expect such a newbie to crack into the big leagues just yet.","N/A"  ],
    [22,1,"François Faber","You can beat François Faber's record (or equal him), he won in 1909. First foreigner and first winner of 5 consecutive stages (record still standing). Oh, he also died in World War I while fighting for France, even if he was from Luxenbourg","N/A"  ],
    [23,5,"Octave Lapize","Five different cyclists won at 23: Octave Lapize, Felice Gimondi, Laurent Fignon, Romain Maes and Jaques Anquetil. Would you like to join their ranks?","N/A"  ],
    [24,8,"Eddy Merckx","Eight cyclists, charachteristically a lot of Belgians between them: Eddy Merckx, Odile Defraye and Philippe Thys . Also Bernard Hinault and Gino Bartali won their first Tour at that age","N/A"  ],
    [25,7,"Lucien Petit-Breton","A long series of cyclist from the amazing Lucien Petit-Breton, whose original surname was Mazan but changed to deceive his father, to Alberto Contador, \"El Pistolero\" who won in 2007","N/A"  ],
    [26,8,"Hugo Koblet","What do you mean you have never heard of \"Le pédaleur de charme\"? Hugo Koblet, swiss cyclist won the Tour at that age. He was the first non-Italian to win the Giro in 1951 and he died in a car accident at 39 (but allegedly it was a suicide). 7 other cyclists won at that age.","N/A"  ],
    [27,11,"Jaques Anquetil","Ready to fight for long? Jaques Anquetil, started his four years victory streak of the tour at that age. He had already won one Tour in 1957, but \"Monsieur Chrono\" started a domination of four years that lasted until he was 31. Did you ehar Chris Froome?","N/A"  ],
    [28,15,"Greg LeMond","Starting to feel weary? Don't worry, you are at the right age. 15 different cyclists won when 28. Among them the US cyclist Greg LeMond, the first non-European professional cyclist to win the Tour de France, and he remains the only American cyclist to have won the Tour (ehm). He was -and still is- an anti-doping advocate born in California.","N/A"  ],
    [29,9,"Miguel indurain","Yes, Miguelon had also won before (but Monsieur Chrono was chosen for 27), but the latest to won five times the Tour in history needed an honorable mention. He is one of nine who won before turning 30.","N/A"  ],
    [30,12,"Vincenzo Nibali","The pleasure of winning comes only after many years of trying, you are like Vincenzo Nibali, the Italian shark (and many others)","N/A"  ],
    [31,9,"Ottavio Bottecchia","The first Italian winner of the Tour de France. He fought World War I on a bycicle and according to a book the only words of French he could manage were: \"No bananas, lots of coffee, thank you\"","N/A"  ],
    [32,5,"Bradley Wiggins","You are like Sir Bradley Wiggins, more of a pursuitist than an all-rounder, even if you as well can raise to the occasion. It's been a long time coming but you can even change sport and win, don't worry! Four other athletes won at that age","N/A"  ],
    [33,7,"Fausto Coppi","Age is not an issue when you are a legend. Coppi had poor health as a child and no interest in school. He won many titles before and after World War Two. He won five times the Giro and two the Tour de France. This was 1952, his latest victory. 7 other runners won at that age","N/A"  ],
    [34,6,"Cadel Evans","Not all of the winners are just road cyclists. The Australian, who won only once in 2011, was a mountain biker before winnning the Tour. With Greg LeMond is one of the two non European who won the race.","N/A"  ],
    [35,0,"No one yet","You could be the first!","N/A"  ],
    [36,1,"Firmin Lambot","He became the first to win the Tour without winning a stage, and kept the record as the oldest winner of any Gran Tour for 90 years, until Chris Horner stole it, winning the Vuelta in 2013 at the age of 41. Keep going !","N/A"  ],
    [37,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [38,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [39,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [40,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [41,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [42,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [43,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [44,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [45,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [46,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [47,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [48,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [49,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [50,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [51,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [52,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [53,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [54,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [55,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [56,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [57,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [58,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [59,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [60,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [61,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [62,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [63,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [64,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [65,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [66,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [67,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [68,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [69,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [70,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [71,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [72,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [73,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [74,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [75,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [76,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [77,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [78,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [79,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [80,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [81,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [82,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [83,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [84,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [85,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [86,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [87,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [88,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [89,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [90,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [91,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [92,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [93,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [94,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [95,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [96,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [97,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [98,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [99,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ],
    [100,0,"It's a young man's game","You don't have to be a sprightly 20 year old, this isn't football. But still, sometimes there's a thing as too  much experience.","N/A"  ]
];


function buttonClick() {
  var input = document.getElementById("age").value;
  document.getElementById("result").style.visibility = "visible";
  document.getElementById('resulta').innerHTML = "The Tour De France has been won by a " + input + " year old"

  if (input == cyclists[input][0]) {
    var value = cyclists[input][1];
    var example = cyclists[input][2];
    var description = cyclists[input][3];
  }

  document.getElementById('resultb').innerHTML = value
  document.getElementById('resultc').innerHTML = example
  document.getElementById('resultd').innerHTML = description

}
