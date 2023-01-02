import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next'

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // const response = await notion.databases.retrieve({ database_id: process.env.NOTION_DATABASE_ID || '' });
  
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || '',
  });

  res.status(200).json({ response })
}