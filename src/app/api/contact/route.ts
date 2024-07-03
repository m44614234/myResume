import ContactModel from "@/models/Contact";
import connect from "@/utils/db";

export async function POST(req: Request, res: Response) {
  connect();

  try {
    const body = await req.json()
    const { email  , name, message, phone } = body;

  const contact =  await ContactModel.create({ email, name, message, phone });

    return Response.json({ message: " Created Successfully"  , data : contact}, { status: 201 });
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}
