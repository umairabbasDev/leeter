console.log("echo me");

// download link  //  https://www.instagram.com/reel/Czaq0ybKNrQ/?igshid=MTQ1enZib2p6NGU4bg==

function dataLogger(data) {
  console.log(data);
}

const DOWNLOAD_URL =
  "https://www.instagram.com/reel/Czaq0ybKNrQ/?igshid=MTQ1enZib2p6NGU4bg==";

fetch(DOWNLOAD_URL)
  .then((response) => dataLogger(response.body))
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
