// connect to chatGPT
import openai from "./chatgpt";

const query = async (prompt: string, chatid: string, model: string) => {
    const result = await openai.createCompletion({
        model: 't'
    })
}