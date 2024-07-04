import ContactModel from "@/models/Contact";
import connect from "@/utils/db";

export async function POST(req: Request, res: Response) {
  connect();

  try {
    const body = await req.json()
    const { email  , name, message, phone } = body;


    if(phone && phone.length !== 11){
      return Response.json({ message: "Phone number is not valid" }, { status: 422 });
    }

    if(email && !email.includes("@")){
      return Response.json({ message: "Email is not valid" }, { status: 400 });
    }

  const contact =  await ContactModel.create({ email, name, message, phone });

    return Response.json({ message: " Created Successfully"  , data : contact}, { status: 201 });
  } catch (error) {
    console.log("Error =>", error);
    return Response.json({ message: "Error =>", error }, { status: 500 });
  }
}
