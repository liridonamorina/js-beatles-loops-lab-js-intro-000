// add solution here
function theBeatlesPlay(arrayOfM, arrayOfI)
{
  var newArray = [];
  let string = ""
  for(let i = 0; i < arrayOfM.length; i++)
  {
    string = `${arrayOfM[i]} plays ${arrayOfI[i]}`;
    newArray.push(string);
  }
  return newArray;
}

function johnLennonFacts(arrayOfFacts)
{
  var i = 0;
  let string = "";
  while(i < arrayOfFacts.length ){
    string = `${arrayOfFacts[i]}!!!`;
    i++;
  }
  return string;
}

function iLoveTheBeatles(num){

  var newArray = [];
  var string = "";

  do {
    string += "I love the Beatles!";
    newArray.push(string)
    num++;
  }
  while(num < 15){
  return newArray;
  }
}
