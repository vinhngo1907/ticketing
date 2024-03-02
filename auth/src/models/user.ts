import mongoose from "mongoose";

// An interface that describes the properties
// that are requried to create a new User
interface UserAttrs {
	email: string;
	password: string;
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
	build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties
// that a User Document has
interface UserDoc extends mongoose.Document {
	email: string;
	password: string;
}

