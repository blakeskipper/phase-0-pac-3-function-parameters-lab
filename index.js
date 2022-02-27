
function introduction(name = "Blake") {
  return (`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name = "Blake", language = "Javascript"){
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name, language = "JavaScript"){
  return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}