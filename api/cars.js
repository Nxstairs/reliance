export default async function handler(req, res) {
  try {
    const domain = process.env.MICROCMS_SERVICE_DOMAIN;
    const apiKey = process.env.MICROCMS_API_KEY;

    const response = await fetch(
      `https://${domain}.microcms.io/api/v1/cars`,
      {
        headers: {
          "X-MICROCMS-API-KEY": apiKey
        }
      }
    );

    if (!response.ok) {
      throw new Error(`microCMS API error: ${response.status}`);
    }

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "”Ì”„Ôî•ñ‚Ìæ“¾‚É¸”s‚µ‚Ü‚µ‚½"
    });
  }
}