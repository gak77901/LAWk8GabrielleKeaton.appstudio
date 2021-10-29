
hmbMenu.onclick=function(s){
 // add code to check if user clicked the hamburger control to open it 
if (typeof(s) == "object") {
    return
  } else {
    switch (s) {
      case "Dessert Voting":
        ChangeForm(dessertVoting)
        break
      case "Describe You":
        ChangeForm(describeYou)
        break
      case "Favorite Exercises":
        ChangeForm(favExercises)
        break
      case "Mobile Nav":
        ChangeForm(mobileNav)
        break
    }
  }
}
