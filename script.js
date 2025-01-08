// DOM ELEMENTS
const listDom = document.getElementById("list")
const newListDom = document.getElementById("new-list")


// FUNCTIONS
const getNewAddresses = function () {
    listDom.innerHTML = ""
    for (let i = 0; i < 10; i++) {
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then(function(response){
            console.log(response.data.response)
            listDom.innerHTML += `<li>${response.data.response}</li>`
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