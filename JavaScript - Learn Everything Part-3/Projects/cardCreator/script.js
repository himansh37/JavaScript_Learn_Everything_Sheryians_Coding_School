// 1. THE TEMPLATE FUNCTION
// This function doesn't have data. It just knows how to "draw" a card.
function createCardHTML(themeColor, emoji) {
  return `
        <div class="card" style="border-color: ${themeColor}">
            <h3>${emoji} ${this.name} (${this.age})</h3>
            <p><strong>Profession:</strong> ${this.profession}</p>
            <p class="bio">"${this.about}"</p>
        </div>
    `;
}

// 2. LOGIC TO GRAB FORM DATA
const form = document.getElementById("profileForm");
const container = document.getElementById("cardContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page from refreshing

  // Grab values from the form
  const userObject = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    profession: document.getElementById("profession").value,
    about: document.getElementById("about").value,
  };

  // 3. THE MAGIC: Using .call()
  // We run the template function and "force" it to use our new userObject as 'this'.
  // We pass "themeColor" and "emoji" as regular arguments.
  const newCard = createCardHTML.call(userObject, "#28a745", "👤");

  // Add the new card to the top of the container
  container.insertAdjacentHTML("afterbegin", newCard);

  // Reset form
  form.reset();
});
