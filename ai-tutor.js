require('dotenv').config();
const Groq = require('groq-sdk');

// Initialize Groq with the API key from environment variables
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function main() {
  try {
    const chatCompletion = await groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "Explain the importance of fast language models"
        }
      ],
      "model": "llama3-8b-8192",
      "temperature": 1,
      "max_tokens": 1024,
      "top_p": 1,
      "stream": false,
      "response_format": {
        "type": "json_object"
      },
      "stop": null
    });

    console.log(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

main();
