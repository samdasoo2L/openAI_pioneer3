const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

async function ask(message) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0,
    max_tokens: 300,
    top_p: 1,
    // frequency_penalty: 0.0,
    // presence_penalty: 0.0,
    // stop: ["\n"],
  });
  const data = completion.data;
  return data.choices[0].text;
}

module.exports = ask;
