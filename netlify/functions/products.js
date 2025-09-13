const fetch = require("node-fetch");

exports.handler = async () => {
  try {
    const res = await fetch(`https://api.airtable.com/v0/${process.env.baseId}/Products`, {
      headers: { Authorization: `Bearer ${process.env.token}` }
    });

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.records)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

