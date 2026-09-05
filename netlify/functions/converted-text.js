const ROBLOX_API_KEY = "PASTE_YOUR_API_KEY_HERE";
const UNIVERSE_ID = "9467628232";
const TOPIC = "ServerRestart";

exports.handler = async (event) => {
  // Ensure the request method is POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    // Send a POST request to the Roblox MessagingService API
    const response = await fetch(
      `https://apis.roblox.com/messaging-service/v1/universes/${UNIVERSE_ID}/topics/${TOPIC}`,
      {
        method: "POST",
        headers: {
          // Authorize the request with the API key
          "Authorization": `Bearer ${ROBLOX_API_KEY}`,
          "Content-Type": "application/json",
        },
        // The message to be sent to the topic
        body: JSON.stringify({ message: "restart" }),
      }
    );

    // Check if the API request was successful
    if (response.ok) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    } else {
      // If the API request failed, return the error from the API
      const text = await response.text();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: text }),
      };
    }
  } catch (err) {
    // Handle any network or other errors during the fetch operation
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};