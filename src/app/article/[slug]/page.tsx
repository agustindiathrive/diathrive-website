import { articles } from '@/utils/data/articles';

import type { Article } from '@/types/article';

export const dynamicParams = true;

export function generateStaticParams() {
  return articles.map((article: Article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  // Utils
  const { slug } = await params;
  const article = articles.find((a: Article) => a.slug === slug);

  // Render
  return (
    <main>
      {article?.html}
    </main>
  );
}