import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_APIKEY,
});

export default async function handler(req, res) {

  try {
    // Get data submitted in request's body.
    const { img_text, img_desc } = req.body;

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('img_text: ', img_text);
    //console.log('img_desc: ', img_desc);

    //Genera immagine
    console.log('start generating image ');

    const openai = new OpenAIApi(configuration);

    const response = await openai.createImage({
      prompt: img_text,
      n: 1,
      size: "1024x1024",
    });

    console.log(response.data.data[0].url);
    let image_url = response.data.data[0].url;

    console.log('end generating image ');
    //Genera immagine


    res.status(200).json({ image_url: `${image_url}`, img_desc: `${img_desc}` });

  } catch (e) {
    res.status(500).json({ error_text: e.message });
  }
}