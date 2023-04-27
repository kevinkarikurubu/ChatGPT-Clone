// api endpoint route

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import admin from 'firebase-admin'
import query from '@/util/queryApi'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {prompt, chatid, model, session} = req.body

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
      id: ChatGPT,
      name
    }
  }


  res.status(200).json({ name: 'John Doe' })
}
