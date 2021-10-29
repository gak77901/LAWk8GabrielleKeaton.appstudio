let exercises = ["pullups","pushups","situps","jogging","plank","curls"]
let coreExercises = ["situps","plank"]
let choice = []

favExercises.onshow=function(){
    for (i = 0; i < exercises.length; i++) 
      selExercises.addItem(exercises[i])
    for (i = 0; i < coreExercises.length; i++)
      selExercises.addItem(coreExercises[i])   
}

selExercises.onchange=function(){
    choice.push(selExercises.text)
}


btnSubmit.onclick=function(){
  if (choice[0] == "situps" && choice[1] == "plank") {
    lblOutputF.value = (`You chose ${choice[0]} and ${choice[1]} - those are the two core exercises.`)
  } else if (choice[1] == "situps" && choice[0] == "plank") {
    lblOutputF.value = (`You chose ${choice[0]} and ${choice[1]} - those are the two core exercises.`)
  } else {
    lblOutputF.value = (`You did not pick the two core exercises.`)
  }
}


Button1.onclick=function(){
  ChangeForm(mobileNav)
}