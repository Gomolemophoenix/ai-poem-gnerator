function displayPoem(response) {
  console.log("Poem generated");
    new Typewriter("#poem", {
    strings: response.data. answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
    event.preventDefault();

      let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "edd71eate75a4ddb934d0ad77f69aeob"
  let context = 
    "You are romantic poet in love to write short poems. Your mission is to generate a 4 line poem in basic HTML with <br/>, do not include html on the generated poem. Make sure to follow user instructions. Sign the poem at the end with 'SheCodes AI' with <strong> element</strong>";
  let prompt = `User instructions: Generate a poem ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
// Make a call to the API


console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);
  
  axios.get(apiURL).then(displayPoem).catch(function (error) {
    console.error("Error generating poem:", error)
  });
// Display the generated poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);