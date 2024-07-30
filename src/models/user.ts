import { Schema, model } from "mongoose";

interface IUser {
  username: string;
  passwordHash: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});

const User = model<IUser>("User", userSchema);

export default User;
