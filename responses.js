function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hi" || input == "Hi" || input == "HI"|| input== "yes") 
    {
        return "How can i help you";
    }
     if (input == "BE" || input == "B.E" || input == "Engineering" || input == "BE CSE"|| input == "MK") 
    {
        return "It is the knowledge gaining stream which can make you crazy";
    }
    if (input == "Mukesh" || input == "mk" || input == "Mukesh Kumar" || input== "MK") 
    {
        return "God Saviour,Man of the mission,fuck you bro ! ";
    }
      if (input == "how many years in engineering" || input == "Years Engineering" || input == "how many years" || input == "years") 
    {
        return "TBH, there are 4 years in Engineering";
    }
      if (input == "ok") 
     {
        return "Are you a Engineer";
    }
    if (input == "MK") 
    {
       return "God Saviour,Man of the mission,fuck you bro !";
   }
      if (input == "Are you a Engineer")
     {
        return "I was made by an Engineer"
    }
      if (input == "God")
    {
        return "VS_32"
    }
      if (input == "Have a great day")
     {
        return "thanks"
    }
    else
     {
        return "Try asking something else!";
    }
}