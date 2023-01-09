
export default async function handler(req, res) {

  try {
    // Get data submitted in request's body.
    const { img_text, img_desc } = req.body

    // Optional logging to see the responses
    // in the command line where next.js app is running.
    /*console.log('img_text: ', img_text);
    console.log('img_desc: ', img_desc);*/

    //Genera immagine

    //Genera immagine

    res.status(200).json({ img_text: `${img_text}`, img_desc: `${img_desc}`});
    //res.status(200).json({ img_generated: `${imgGenerated}` });

  }catch {
    res.status(500).json({ error_text: 'Something went wrong' });
  }
}