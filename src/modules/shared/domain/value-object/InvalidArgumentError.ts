export class InvalidArgumentError extends Error {
	constructor(...params : any) {
		// Pass remaining arguments (including vendor specific ones) to parent constructor
		super(...params)

		// Maintains proper stack trace for where our error was thrown (only available on V8)
		if (Error.captureStackTrace)
			Error.captureStackTrace(this, InvalidArgumentError)


		this.name = 'InvalidArgumentError';
		// this.message = ``
	}
}
