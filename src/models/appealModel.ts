import { Schema, model, Document } from 'mongoose';

export interface IAppeal extends Document {
  theme: string;
  text: string;
  status: 'new' | 'in_progress' | 'completed' | 'cancelled';
  solution?: string;
  cancellationReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppealSchema = new Schema<IAppeal>({
  theme: { type: String, required: true },
  text: { type: String, required: true },
  status: { type: String, enum: ['new', 'in_progress', 'completed', 'cancelled'], default: 'new' },
  solution: { type: String },
  cancellationReason: { type: String },
}, {
  timestamps: true
});

export default model<IAppeal>('Appeal', AppealSchema);
