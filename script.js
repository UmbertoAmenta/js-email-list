// DOM ELEMENTS
const listDom = document.getElementById("list")
const newListDom = document.getElementById("new-list")


// FUNCTIONS
const getNewAddresses = function () {
    listDom.innerHTML = ""
    const emailList = []
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(response){
            console.log(response.data.response)

            emailList.push(`<li>${response.data.response}</li>`)

            // con il seguente codice gli indirizzi vengono generati e stampati in html uno dopo l'altro
            // listDom.innerHTML += `<li>${response.data.response}</li>`

            // con il seguente blocco, vengono invece stampati solo dopo la generazione dei 10 indirizzi
            if (emailList.length == 10) {
               listDom.innerHTML = emailList.join("")
            }
        }).catch(function(error){
            listDom.innerHTML = "Il generatore di indirizzi email casuali non risponde"
        }).finally(function(){
            // listDom.innerHTML = "sto pensando, dammi un attimo"
        })
    }
}

// MAIN
// page load
getNewAddresses()

// button click
newListDom.addEventListener("click", getNewAddresses)