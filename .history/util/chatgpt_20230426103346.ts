import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(config)

export default openai