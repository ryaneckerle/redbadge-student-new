interface IChuckResponse {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

function fetchChuck() {
  let url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then((res) => res.json())
    .then((json: IChuckResponse) => console.log(json.value));
}

fetchChuck();