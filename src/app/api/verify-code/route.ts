import UserModel from "@/model/User";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { username, code } = await request.json();
    const decodedUsername = decodeURIComponent(username);
    const user = await UserModel.findOne({
      username: decodedUsername,
    });
    if (!user) {
      return Response.json({
        success: false,
        message: "user",
      });
    }

    const isCodeValid = user.verifyCode === code;
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();
    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();
      return Response.json(
        {
          success: true,
          message: "account is verifiefd successfully",
        },
        {
          status: 200,
        }
      );
    }

    
  } catch (error) {
    console.error("error verifying user", error);
    return Response.json(
      {
        success: false,
        message: "error verifying user",
      },
      {
        status: 500,
      }
    );
  }
}
