const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    question: {
      type: String,
    },
    response: {
      type: String,
    },
  },
  {
    timestamps: { createdAt: "createdAt" },
  },
  {
    toJSON: {
      transform(_, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

const Response = mongoose.model("Response", responseSchema);

module.exports = Response;
