// api endpoint route

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string
}

export default function handler(
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


  res.status(200).json({ name: 'John Doe' })
}
