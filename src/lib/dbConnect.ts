import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connection: connectionObject = {};

export async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("db already connected");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {
      dbName: "MysteryMessage",
    });
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected successfully");
  } catch (e) {
    console.log("db connection failed", e);
    process.exit(1);
  }
}
