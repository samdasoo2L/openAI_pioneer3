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
    max_tokens: 100,
    top_p: 1,
    // frequency_penalty: 0.0,
    // presence_penalty: 0.0,
    // stop: ["\n"],
  });
  const data = completion.data;
  return data.choices[0].text;
}

module.exports = ask;
