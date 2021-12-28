function minValue(values){
  
  

let myValues = [...new Set(values)]
  
 let sortedValues = myValues.sort()
  //your code here
  return (parseInt(sortedValues.join('')))
}