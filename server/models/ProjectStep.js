import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
stageId: {type: Schema.Types.ObjectId, ref: 'Stage', required: true},
projectId: {type: Schema.Types.ObjectId, ref: 'Project', required: true},
name: {type: String},
index:{ type: Number}
});

export default model('Step', schema)