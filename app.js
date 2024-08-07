((Array.from(document.querySelectorAll("tr")).slice(6,70).filter(x=> (x.children[4] && x.children[4].textContent == "Validé") || (x.children[7] && x.children[7].textContent == "" && x.children[4] && x.children[4].textContent == "Rattrapage")).map(x=>parseFloat(x.children[2].textContent))).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0) + (Array.from(document.querySelectorAll("tr")).slice(6,70).filter(x=> (x.children[7] && x.children[7].textContent == "Validé") || (x.children[7] && x.children[7].textContent == "Non Validé")).map(x=>parseFloat(x.children[5].textContent))).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0))/14

  (Array.from(document.querySelectorAll("tr")).slice(6,70).filter(x=> (x.children[4] && x.children[4].textContent == "Validé") || (x.children[7] && x.children[7].textContent == "" && x.children[4] && x.children[4].textContent == "Rattrapage")).map(x=>parseFloat(x.children[2].textContent)))
  Array.from(document.querySelectorAll("tr")).slice(6,70).filter(x=> (x.children[7] && x.children[7].textContent == "Validé") || (x.children[7] && x.children[7].textContent == "Non Validé")).map(x=>parseFloat(x.children[5].textContent))
