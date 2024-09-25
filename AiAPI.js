
function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "4foba0te46425f633e30d965f9ae409d";
let context =
  "be polite and provide a short answear";
let prompt = "who was the first female president?";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);