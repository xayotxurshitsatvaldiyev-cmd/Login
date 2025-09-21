var btn = document.getElementById("button")
var inpt = document.getElementById("login")
var prl = document.getElementById("parol")
var output2 = document.getElementById("output")

inpt.addEventListener("input", function() {
  output2.innerHTML = ""
})

prl.addEventListener("input", function() {
  output2.innerHTML = ""
})

btn.addEventListener("click", function() {
  
  output2.innerHTML = ""
  
  fetch('inf.json')
  fetch('inf2.json')
  .then(response => response.json())
  .then(data => {
    var input = document.getElementById("login").value.trim()
    var parol = document.getElementById("parol").value.trim()
    
    if(input === data.login && parol === data.password) {
      alert("Xush kelibsiz")
      window.location.href = "https://scoote.vercel.app/"
    }else if(input === "" || parol === "") {
      if(input === "") {
        var p = document.createElement("p")
        p.style.color = "red"
        p.textContent = "Login ni kiriting"
        document.getElementById("output").appendChild(p)
      } else if(parol === "") {
        var p = document.createElement("p")
        p.style.color = "red"
        p.textContent = "parol ni kiriting"
        document.getElementById("output").appendChild(p)
      }
    } else {
      alert("Login yoki parol xato")
    }
  })
  .catch(error => {
    console.error('Xatolik:', error);
    alert("fayl yuklashda xatolik boʻldi")
  });

})
