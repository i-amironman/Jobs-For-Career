'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { POST_TEMPLATES, getDefaultPostValues } from '@/lib/post-templates';
import { POST_TYPE_LABELS, type PostType } from '@/lib/types/post';
import { COUNTRIES } from '@/lib/countries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { PostDocument } from '@/lib/types/post';
import SocialTemplateTabs from '@/components/admin/social-template-tabs';

const POST_TYPES = Object.keys(POST_TYPE_LABELS) as PostType[];

interface PostFormProps {
  postId?: string;
  initialType?: PostType;
}

export default function PostForm({ postId, initialType }: PostFormProps) {
  const [step, setStep] = useState<'type' | 'form'>(postId || initialType ? 'form' : 'type');
  const [type, setType] = useState<PostType>(initialType || 'job');
  const [form, setForm] = useState<Record<string, unknown>>(getDefaultPostValues('job'));
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [preview, setPreview] = useState<PostDocument | null>(null);

  useEffect(() => {
    if (postId) {
      fetch(`/api/admin/posts/${postId}`)
        .then((r) => r.json())
        .then(({ post }) => {
          if (post) {
            setType(post.type);
            setForm(post);
            setStep('form');
          }
        });
    }
  }, [postId]);

  const fields = POST_TEMPLATES[type];

  const setField = (name: string, value: unknown) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (status?: string) => {
    setSaving(true);
    setMessage('');
    const payload = { ...form, type, ...(status ? { status } : {}) };

    const url = postId ? `/api/admin/posts/${postId}` : '/api/admin/posts';
    const method = postId ? 'PATCH' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage('Saved successfully!');
      if (!postId && data.post?._id) {
        window.location.href = `/admin/posts/${data.post._id}`;
      }
    } else {
      setMessage(data.error || 'Save failed');
    }
    setSaving(false);
  };

  const handleAction = async (action: string) => {
    if (!postId) return;
    setSaving(true);
    const res = await fetch(`/api/admin/posts/${postId}/actions?action=${action}`, { method: 'POST' });
    const data = await res.json();
    if (res.ok) {
      setForm(data.post);
      setMessage(`Post ${action}d successfully!`);
    } else {
      setMessage(data.error || 'Action failed');
    }
    setSaving(false);
  };

  if (step === 'type') {
    return (
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">Select Post Type</h2>
        <p className="text-muted-foreground text-sm mb-6">Choose a template to start creating content</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {POST_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { setType(t); setForm(getDefaultPostValues(t)); setStep('form'); }}
              className="surface-card surface-card-interactive p-5 text-left group"
            >
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{POST_TYPE_LABELS[t]}</p>
              <p className="text-xs text-muted-foreground mt-1">Create a new {POST_TYPE_LABELS[t].toLowerCase()} post</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const postForPreview = { ...form, type, slug: form.slug as string || 'preview' } as PostDocument;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{postId ? 'Edit Post' : 'Create Post'}</h2>
          <p className="text-sm text-muted-foreground mt-0.5">{POST_TYPE_LABELS[type]}</p>
        </div>
        {form.status != null && form.status !== '' && (
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-primary/10 text-primary">
            {String(form.status)}
          </span>
        )}
      </div>

      <div className="surface-card p-6 grid md:grid-cols-2 gap-5">
        {fields.map((field) => (
          <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
            <Label htmlFor={field.name} className="mb-1.5 block text-sm">
              {field.label}{field.required && ' *'}
            </Label>

            {field.type === 'textarea' && (
              <textarea
                id={field.name}
                value={String(form[field.name] || '')}
                onChange={(e) => setField(field.name, e.target.value)}
                rows={5}
                className="w-full rounded-xl border border-border/70 bg-muted/30 px-4 py-3 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary/40 focus:outline-none transition-all"
                placeholder={field.placeholder}
              />
            )}

            {field.type === 'select' && (
              <select
                id={field.name}
                value={String(form[field.name] || '')}
                onChange={(e) => setField(field.name, e.target.value)}
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
              >
                <option value="">Select...</option>
                {field.options?.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            )}

            {field.type === 'country' && (
              <select
                id={field.name}
                value={String(form[field.name] || 'IN')}
                onChange={(e) => setField(field.name, e.target.value)}
                className="w-full h-10 rounded-lg border border-border bg-background px-3 text-sm"
              >
                {COUNTRIES.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
              </select>
            )}

            {field.type === 'tags' && (
              <Input
                id={field.name}
                value={Array.isArray(form[field.name]) ? (form[field.name] as string[]).join(', ') : ''}
                onChange={(e) => setField(field.name, e.target.value.split(',').map((s) => s.trim()).filter(Boolean))}
                placeholder="Comma-separated values"
              />
            )}

            {field.type === 'checkbox' && (
              <input
                id={field.name}
                type="checkbox"
                checked={!!form[field.name]}
                onChange={(e) => setField(field.name, e.target.checked)}
                className="h-4 w-4"
              />
            )}

            {(field.type === 'text' || field.type === 'url') && (
              <Input
                id={field.name}
                type={field.type === 'url' ? 'url' : 'text'}
                value={String(form[field.name] || '')}
                onChange={(e) => setField(field.name, e.target.value)}
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </div>

      {message && (
        <p className={`text-sm ${message.includes('failed') || message.includes('short') ? 'text-destructive' : 'text-green-600'}`}>
          {message}
        </p>
      )}

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => handleSave()} disabled={saving}>
          {saving ? 'Saving...' : 'Save Draft'}
        </Button>
        {postId && form.status === 'draft' && (
          <Button variant="outline" onClick={() => handleAction('approve')} disabled={saving}>
            Approve
          </Button>
        )}
        {postId && form.status === 'approved' && (
          <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/25" onClick={() => handleAction('publish')} disabled={saving}>
            Upload to Job Platform
          </Button>
        )}
        {postId && form.status === 'published' && (
          <Button variant="outline" onClick={() => handleAction('archive')} disabled={saving}>
            Archive
          </Button>
        )}
      </div>

      {postId && Boolean(form.title) && (
        <SocialTemplateTabs post={postForPreview} />
      )}
    </div>
  );
}
