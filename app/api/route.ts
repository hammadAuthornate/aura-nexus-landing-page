export async function POST(request: Request) {
  const res = await request.body;
  console.log(res);
}
