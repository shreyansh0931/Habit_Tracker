const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const habitSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        dates: [{
            date: String,
            complete: {
                type: String,
                enum: ['yes', 'no', 'none'],
                default: 'none',
            }
        }],
    },
    {
        timestamps: true,
    }
);

// Add an index to the content field for faster queries
habitSchema.index({ content: 1 });

module.exports = mongoose.model('Habit', habitSchema);
