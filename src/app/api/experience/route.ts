import Experience from "@/models/Experience";
import connect from "@/utils/db";

export async function POST(req: Request, res: Response) {
  connect();

  try {
    const body = await req.json();
    const { enDate, faDate, enTitle, faTitle, enDesc, faDesc } = body;

   await Experience.create({
      enDate,
      faDate,
      enTitle,
      faTitle,
      enDesc,
      faDesc,
    });

    return Response.json(
      { message: "Created Successfully" },
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
    const experiences = await Experience.find();
    return Response.json({ data: experiences }, { status: 200 });
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}
