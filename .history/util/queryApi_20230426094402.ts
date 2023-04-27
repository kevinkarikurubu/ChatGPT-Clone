// connect to chatGPT
import openai from "./chatgpt";

const query = async (prompt: string, chatid: string, model: string) => {
    const res = await openai.createCompletion({
        model,
        promp,
        temperature:0.9,
        top_p: 1,
    })
}