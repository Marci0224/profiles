const user= { name: "Kiss Éva", age: 28, email: "eva@example.com", avatar: "https://i.pravatar.cc/250?img=1",role:"Frontend fejlesztő" };



function renderCard({name, email, avatar,role}){
  document.querySelector(".card").innerHTML=`
    <div class="kezd">
      <img class="pk" src="${avatar}" alt="${name}">
      <h2 id="nev" class="res">${name}</h2>
      <p id="em" class="res">${email}</p>
      <p class="res">${role}</p>
      <button popovertarget="mypopover" class="gomb">Profil szerkesztése</button>
      <div class="popoverContent" id="mypopover" popover>
        <form action="#">
          <div id="kep">
            <img src="${avatar}" alt="" id="profilkep">
            <div id="gombok">
              <button class="gomb">Change picture</button>
              <button class="delgomb">Delete picture</button>
            </div>
          </div>
          <div class="irasok">
            <label for="firstname">Your first name</label>
            <input type="text" name="firstname" id="firstname">
          </div>
          
          <div class="irasok">
            <label for="lastname">Your last name</label>
            <input type="text" name="lastname" id="lastname">
          </div>
          
          <div class="irasok">
            <label for="profession">Your profession</label>
            <input type="text" name="profession" id="profession">
          </div>
          
          <div class="irasok">
            <label for="email">Your email</label>
            <input type="email" name="email" id="email">
          </div>
          
          <div class="irasok">
            <label for="bio">BIO</label>
            <textarea name="bio" id="bio" rows="4"></textarea>
          </div>
          <button class="gomb">Save</button>
        </form>
      </div>
    </div>
  `
}

renderCard(user);
