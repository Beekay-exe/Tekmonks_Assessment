import Express from "express";
import axios from "axios";
import cheerio from "cheerio";

const router = Express.Router();

const website = 'https://time.com';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(website);
    const data = response.data;
    const $ = cheerio.load(data);

    const content = $('.latest-stories__item').map(function () {
      const title = $(this).find('.latest-stories__item-headline').text();
      const url = $(this).find('a').attr('href');

      return {
        title,
        url,
      };
    }).get();

    res.json(content.slice(0, 6));
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

export default router;
