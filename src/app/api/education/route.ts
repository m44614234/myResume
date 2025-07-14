import Education from "@/models/Education";
import connect from "@/utils/db";
import runMiddleware from "../core";
import cors from "../core";

export async function POST(req: Request, res: Response) {
  connect();

  await runMiddleware(req as any, res as any, cors as any);

  try {
    const body = await req.json();
    const { enDate, faDate, enTitle, faTitle, enDesc, faDesc } = body;

    await Education.create({
      enDate,
      faDate,
      enTitle,
      faTitle,
      enDesc,
      faDesc,
    });

    return Response.json(
      { message: "Created Successfully" },
      {
        status: 201,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}

export async function GET(req: Request, res: Response) {
  connect();
  await runMiddleware(req as any, res as any, cors as any);

  try {
    const education = await Education.find();
    return Response.json(
      { data: education },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}
