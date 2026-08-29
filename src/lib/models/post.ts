import mongoose, { Schema, Model } from 'mongoose';
import type { PostDocument, PostStatus, PostType } from '@/lib/types/post';

const OrgInfoSchema = new Schema(
  {
    name: String,
    industry: String,
    size: String,
    founded: String,
    description: String,
    website: String,
    headquarters: String,
    department: String,
    type: String,
  },
  { _id: false }
);

const PostSchema = new Schema<PostDocument>(
  {
    type: { type: String, required: true, index: true },
    status: { type: String, required: true, default: 'draft', index: true },
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    organization: { type: String, required: true },
    country: { type: String, required: true, index: true },
    region: String,
    locale: { type: String, default: 'en' },
    location: { type: String, required: true },
    workType: { type: String, default: 'Full Time' },
    compensation: String,
    fee: String,
    amount: String,
    deadline: String,
    skills: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    logo: { type: String, default: '💼' },
    logoUrl: String,
    bannerUrl: String,
    applyUrl: String,
    featured: { type: Boolean, default: false },
    requirements: { type: [String], default: [] },
    responsibilities: { type: [String], default: [] },
    benefits: { type: [String], default: [] },
    eligibility: { type: [String], default: [] },
    applicationProcess: { type: [String], default: [] },
    orgInfo: OrgInfoSchema,
    content: String,
    seo: {
      title: String,
      description: String,
      keywords: [String],
    },
    legacyId: String,
    publishedAt: Date,
  },
  { timestamps: true }
);

PostSchema.index({ type: 1, status: 1, country: 1 });
PostSchema.index({ featured: 1, status: 1 });
PostSchema.index({ type: 1, status: 1, country: 1, publishedAt: -1 });
PostSchema.index({ type: 1, status: 1, workType: 1 });
PostSchema.index({ title: 'text', organization: 'text', description: 'text', skills: 'text', tags: 'text' });

export const PostModel: Model<PostDocument> =
  mongoose.models.Post ?? mongoose.model<PostDocument>('Post', PostSchema);

export type { PostType, PostStatus };
