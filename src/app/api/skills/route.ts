import Skills from "@/models/Skills";
import connect from "@/utils/db";

export async function POST(req: Request, res: Response) {
    
  connect();

  try {
    const body = await req.json();
    const { enType, faType, enTitle, faTitle, enDesc, faDesc } = body;

     await Skills.create({
      enType,
      faType,
      enTitle,
      faTitle,
      enDesc,
      faDesc,
    });

    return Response.json(
      { message: "Created Successfully"},
      { status: 201 }
    );
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}

export async function GET(req: Request, res: Response) {
  connect();

  try {
    const skill = await Skills.find();
    return Response.json({ data: skill }, { status: 200 });
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}


