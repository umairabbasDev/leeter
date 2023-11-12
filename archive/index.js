console.log("echo me");

import HTMLParser from "node-html-parser";

// download link  //  https://www.instagram.com/reel/Czaq0ybKNrQ/?igshid=MTQ1enZib2p6NGU4bg==

function dataLogger(data) {
  console.log(data);
}

const DOWNLOAD_URL =
  "https://www.instagram.com/reel/Czaq0ybKNrQ/?igshid=MTQ1enZib2p6NGU4bg==";

//  attempt #0 (failed)
// fetch(DOWNLOAD_URL)
//   .then((response) => dataLogger(response.body))
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// attempt #0 (inprogress)
import { launch } from "puppeteer";

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto(DOWNLOAD_URL);

  //   // Wait for SPA content to load (you may need to adjust this)

  await page.waitForSelector(".x1lliihq.x5yr21d.xh8yej3");

  const content = await page.evaluate(() => {
    return document.querySelector(".x1lliihq.x5yr21d.xh8yej3").innerHTML;
  });

  const root = HTMLParser.parse(content);
  const video_src = root.querySelector("video").getAttribute("src");

  console.log(video_src);

  //   console.log(content);

  await browser.close();
})();
