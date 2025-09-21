var btn = document.getElementById("button")

btn.addEventListener("click", function() {
  fetch('inf.json')
  .then(response => response.json())
  .then(data => {
    var input = document.getElementById("login").value.trim()
    var parol = document.getElementById("parol").value.trim()
    
    if(input === data.login && parol === data.password) {
      alert("Xush kelibsiz")
    } else {
      alert("Login yoki parol xato")
    }
  })
  .catch(error => {
    console.error('Xatolik:', error);
    alert("fayl yuklashda xatolik boʻldi")
  });

})