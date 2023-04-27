
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import openai from '@/util/chatgpt'
import type { NextApiRequest, NextApiResponse } from 'next'
import { adminDb } from '@/firebaseAdminAPI'

    type Option ={
        value: string;
        label: string;
    }

    type Data = {
    modelOptions: Option[]
    }

    export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
    ) {
    const models = await openai.listModels().then((res) => res.data.data)

    if(!prompt) {
        res.status(400).json({answer: "Provide a prompt!"})
        return;
    }
    if(!chatid) {
        res.status(400).json({answer: "Provide a valid chatid!"})
        return;
    }

    // ChatGPT Query
    const response = await query(prompt, chatid, model)
    const message: Message ={
        text: response || 'ChatGPT could not find an answer',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: 'https://brandlogovector.com/wp-content/uploads/2023/01/ChatGPT-Icon-Logo-PNG.png'
        }
    }

  await adminDb
  .collection('users')
  .doc(session?.user?.email)
  .collection('chats')
  .doc(chatid)
  .collection('messages')
  .add(message)


  res.status(200).json({ answer: message.text })
}
