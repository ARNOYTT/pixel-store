const ROBLOX_API_KEY = "WCATw4laY0qQdJCfpq6bngJmLwPoWUgUFmYSoto+oaoXwmIjZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkluTnBaeTB5TURJeExUQTNMVEV6VkRFNE9qVXhPalE1V2lJc0luUjVjQ0k2SWtwWFZDSjkuZXlKaGRXUWlPaUpTYjJKc2IzaEpiblJsY201aGJDSXNJbWx6Y3lJNklrTnNiM1ZrUVhWMGFHVnVkR2xqWVhScGIyNVRaWEoyYVdObElpd2lZbUZ6WlVGd2FVdGxlU0k2SWxkRFFWUjNOR3hoV1RCeFVXUktRMlp3Y1RaaWJtZEtiVXgzVUc5WFZXZFZSbTFaVTI5MGJ5dHZZVzlZZDIxSmFpSXNJbTkzYm1WeVNXUWlPaUk0T0RVek16STROelkySWl3aVpYaHdJam94TnpnNE5UazJPVEV6TENKcFlYUWlPakUzT0RnMU9UTXpNVE1zSW01aVppSTZNVGM0T0RVNU16TXhNMzAuRUc0VXpOVUoyUlVCLWtzeXV6LWJsS0ZGNFY4Ym5KVnIxZUVWcHBNeUllbFJzcHVVb2tVdDhILXgwQUIyY09QcEx5OUdwc2JvVTFSa0NQbENCbU15RlZIWEZzSGVnVlZFM2RkMGF0eDlPNEQ5Nzc1cHozUkRaSk1aQzBUUzNOXzBPVUxHOUJTZkVEZ1M2czVDUUVDRXZxS0VVMWVIOGxKVnJUWlZtVk1zNnhNYk5tcnNPS1R3TnpWeHZfNHVSWElNTXVLci1NcURXQ3kxSkpsTU1jWjdTVnVESWh3Y0oycExFMVc3UXhHaUJsMlBibFdvZWdvZ2pzTU82MF9IT0ZYeGZuaEJiNVhrSlJ4N2V3YjlXQkstWjZOWkRNREhhQm5YZVlMTWNDYWpTUVh0MHlDWGFvWTN1WEk5NG15bUI1VFJwQlBxNEFxZ1F4ZHNYWU5oOWR4WVJ3";
const UNIVERSE_ID = "9467628232";
const TOPIC = "ServerRestart";

exports.handler = async (event) => {
if (event.httpMethod !== "POST") {
return {
statusCode: 405,
body: JSON.stringify({ error: "Method Not Allowed" }),
};
}

try {
const response = await fetch(
`https://apis.roblox.com/messaging-service/v1/universes/${UNIVERSE_ID}/topics/${TOPIC}`,
{
  method: "POST",
  headers: {
    "Authorization": `Bearer ${ROBLOX_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: "restart" }),
}
);

if (response.ok) {
return {
  statusCode: 200,
  body: JSON.stringify({ success: true }),
};
} else {
const text = await response.text();
return {
  statusCode: response.status,
  body: JSON.stringify({ error: text }),
};
}
} catch (err) {
return {
statusCode: 500,
body: JSON.stringify({ error: err.message }),
};
}
};
