import type { PostDocument } from '@/lib/types/post';
import { getPostRoute } from '@/lib/types/post';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://jobsforcareer.com';

function postUrl(post: PostDocument): string {
  return `${BASE_URL}${getPostRoute(post.type, post.slug)}`;
}

function payLabel(post: PostDocument): string {
  return post.compensation || post.amount || post.fee || '';
}

export type SocialChannel = 'whatsapp' | 'telegram' | 'instagram' | 'facebook' | 'twitter';

export function generateSocialTemplate(post: PostDocument, channel: SocialChannel): string {
  const url = postUrl(post);
  const pay = payLabel(post);
  const skills = post.skills.slice(0, 5).join(', ');

  switch (channel) {
    case 'whatsapp':
      return [
        `🚀 *${post.title}*`,
        `🏢 ${post.organization}`,
        `📍 ${post.location}${pay ? `\n💰 ${pay}` : ''}`,
        skills ? `\n🛠 ${skills}` : '',
        post.deadline ? `\n⏰ Deadline: ${post.deadline}` : '',
        `\n👉 Apply: ${url}`,
        `\n#JobsForCareer`,
      ].filter(Boolean).join('\n');

    case 'telegram':
      return [
        `**${post.title}**`,
        `${post.organization} · ${post.location}`,
        pay ? `💰 ${pay}` : '',
        skills ? `\nSkills: ${skills.split(', ').map((s) => `- ${s}`).join('\n')}` : '',
        post.deadline ? `\nDeadline: ${post.deadline}` : '',
        `\n[Apply Now](${url})`,
      ].filter(Boolean).join('\n');

    case 'instagram':
      return [
        `✨ ${post.title} at ${post.organization}!`,
        pay ? `💰 ${pay}` : '',
        `📍 ${post.location}`,
        skills ? `Skills: ${skills}` : '',
        post.deadline ? `⏰ Apply by ${post.deadline}` : '',
        `\nLink in bio or visit:`,
        url,
        `\n#jobs #careers #hiring #${post.type.replace('-', '')} #JobsForCareer #opportunity`,
      ].filter(Boolean).join('\n');

    case 'facebook':
      return [
        `🎯 ${post.title}`,
        `${post.organization} is hiring! Join a team in ${post.location}.`,
        pay ? `\nCompensation: ${pay}` : '',
        skills ? `\nRequired skills: ${skills}` : '',
        post.deadline ? `\nApply before: ${post.deadline}` : '',
        `\nLearn more and apply here: ${url}`,
      ].filter(Boolean).join('\n');

    case 'twitter': {
      const tweet1 = `🚀 ${post.title} @ ${post.organization}${pay ? ` | ${pay}` : ''} 📍 ${post.location}`;
      const tweet2 = `Apply now 👉 ${url}${skills ? `\nSkills: ${skills}` : ''}`;
      if (tweet1.length <= 280) {
        return tweet1.length + tweet2.length + 2 <= 560
          ? `${tweet1}\n\n---\n\n${tweet2}`
          : tweet1.slice(0, 277) + '...';
      }
      return tweet1.slice(0, 277) + '...';
    }
  }
}

export const SOCIAL_CHANNELS: { id: SocialChannel; label: string }[] = [
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'telegram', label: 'Telegram' },
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'twitter', label: 'Twitter/X' },
];

export function generateAllSocialTemplates(post: PostDocument): Record<SocialChannel, string> {
  return {
    whatsapp: generateSocialTemplate(post, 'whatsapp'),
    telegram: generateSocialTemplate(post, 'telegram'),
    instagram: generateSocialTemplate(post, 'instagram'),
    facebook: generateSocialTemplate(post, 'facebook'),
    twitter: generateSocialTemplate(post, 'twitter'),
  };
}
