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
        <form>
          <div id="kep">
            <img src="${avatar}" alt="" id="profilkep">
            <div id="gombok">
              <button class="gomb gb">Change picture</button>
              <button class="delgomb gb">Delete picture</button>
            </div>
          </div>
          <div class="irasok">
            <label for="firstname">Your first name</label>
            <input type="text" name="firstname" id="firstname" value="${name.split(' ')[0]}" min="1rem" max="1.2rem" required>
          </div>
          
          <div class="irasok">
            <label for="lastname">Your last name</label>
            <input type="text" name="lastname" id="lastname" value="${name.split(' ')[1]}" min="1rem" max="1.2rem" required>
          </div>
          
          <div class="irasok">
            <label for="profession">Your profession</label>
            <input type="text" name="profession" id="profession" value="${role}" min="1rem" max="1.2rem" required>
          </div>
          
          <div class="irasok">
            <label for="email">Your email</label>
            <input type="email" name="email" id="email" value="${email}" min="1rem" max="1.2rem" required>
          </div>
          
          <div class="irasok">
            <label for="bio">BIO</label>
            <textarea name="bio" id="bio" rows="4" min="1rem" max="1.2rem"></textarea>
          </div>
          <button class="gomb">Save</button>
        </form>
      </div>
    </div>
  `
}

renderCard(user);
