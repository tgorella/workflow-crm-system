import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    title: { type: String, required: true},
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    eventType: { type: Schema.Types.ObjectId, ref: "EventType" },
    eventDate: { type: String, required: true },
    startTime: { type: String },
    endTime: { type: String },
    place:{type: String},
    notes: { type: String },
  }, 
  {
    timestamps: true,
  }
);

export default model("Event", schema);
