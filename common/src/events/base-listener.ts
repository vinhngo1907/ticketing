import { CustomError } from "../errors/custom-error";

export class BadRequestError extends CustomError {
	statusCode: number = 400;

	constructor(public message: string) {
		super(message);
		Object.setPrototypeOf(this, BadRequestError.prototype);
	}

	serializeErrors(): { message: string; field?: string | undefined; }[] {
		return [{ message: this.message }];
	}
}