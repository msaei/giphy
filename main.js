console.log("running");

const demo = document.querySelector("#demo");
const fetchGif= () => {
  // to-do: replace the next line with *YOUR* API key - this one won't work.
  const apiKey = 'JZGFa61pSvjhGwVCRQK4BPvfa9O882X5';
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=hello&limit=3`)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      // display the json in the console for inspection
      console.log(json);
      // to-do: call the processJsonResponse function, passing along the data
      processJsonResponse(json);
    });
}

const processJsonResponse = (jsonData) => {
  // to-do: parse the data and grab the "downsized url" from the images object
  const gif_url = jsonData.data[0].images.downsized.url;
  // to-do: create an HTML string representing an img tag linking to the url above
  const gif_element = '<img src="' + gif_url + '" />';
  // to-do: append the HTML string to the end of the #output div tag.
  console.log(gif_element);
  demo.innerHTML += gif_element;
}

fetchGif();
