//import { setTimeout } from "timers/promises";
const { IgApiClient } = require('instagram-private-api');
const IG_USERNAME = process.env.IG_USERNAME;
const IG_PASSWORD = process.env.IG_PASSWORD

export default async function handler(req, res) {

  try {
    // Get data submitted in request's body.
    const { post_image, img_desc } = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('img_desc: ', img_desc);
    console.log('image: ', post_image);

    let image = decodeURI(post_image);

    //logginning to instagram
    console.log('start loginning ');

    const ig = new IgApiClient();
    ig.state.generateDevice(IG_USERNAME);
    await ig.account.login(IG_USERNAME, IG_PASSWORD);
    
    console.log('end loginning ');
    //post image to instagram
    console.log('start posting img ');
    
    await ig.publish.photo({
      file: image,
      caption: img_desc,
    });

    console.log('end posting img ');

    res.status(200).json({ img_desc: `${img_desc}` });
    //res.status(200).json({ img_generated: `${imgGenerated}` });

  } catch(e) {
    console.log(e.name, e.message);
    res.status(500).json({ error_text: 'Something went wrong' });
  }
}