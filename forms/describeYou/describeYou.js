
rdoPersonality.onchange=function(){
  let choice = rdoPersonality.value
    switch(choice) {
  case 0:
     lblResponse.value = "I would agree that you are a optimistic person too!"
     break
  case 1:
     lblResponse.value = "I would agree that you are a pessimistic person too!"
     break
  case 2:
     lblResponse.value = "I would agree that you are a trusting person too!"
     break
  case 3:
     lblResponse.value = "I would agree that you are a envious person too!"
     break
  }
}

btnToExcercises.onclick=function(){
  ChangeForm(favExercises)
}
