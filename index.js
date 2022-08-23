const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
const titleCased = () => {
  let mapping = tutorials.map((content)=>{
    let letters = content.split(" ")
    for (let i = 0; i < letters.length; i++){
      letters[i] = letters[i][0].toUpperCase() + letters[i].substr(1)
    }
    return letters.join(" ")
  })
  return mapping



}







