import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
  //res.status(code)- 상태 코드를 설정하는 기능입니다. code유효한 HTTP 상태 코드 여야 합니다.
// res.json(body)- JSON 응답을 보냅니다. 직렬화 가능한 객체body 여야 합니다.
}