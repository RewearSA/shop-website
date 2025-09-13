const fetch = require("node-fetch");

exports.handler = async () => {
  const baseId = process.env.baseId;
  const token = process.env.token;
  const tableName = "Table 1"; // or "Table 1" if that’s your actual name

  try {
    const res = await fetch(`https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data.records)
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
