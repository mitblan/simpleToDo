const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'You forgot your name'],
		},
		email: {
			type: String,
			required: [true, "Don't worry, we won't spam you."],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Things are safer with a password'],
		},
		idSuperUser: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', userSchema)
