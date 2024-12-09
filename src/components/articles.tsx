import Image from 'next/image';
import Link from 'next/link';

import type { Article } from '@/types/article';
import { articles } from '@/utils/data/articles';
import LinkButton from '@/components/ui/link-button';

export default function Articles() {
  // Render
  return (
    <section className="py-[40px]">
      <div className="flex flex-row flex-wrap max-w-[1320px] mx-auto">
        {
          articles.map((a: Article) => (
            <aside className="pb-[40px] w-1/4" key={a.slug}>
              <Link href={`/article/${a.slug}`}>
                <Image
                  alt={a.linkText}
                  height={306}
                  priority
                  src={a.thumbnail}
                  width={306}
                />
                <h2 className="font-semibold leading-[27px] py-[20px] text-light-blue text-wrap text-[21px]">{a.linkText}</h2>
              </Link>
              <LinkButton
                bgColor="#242678"
                href={`/article/${a.slug}`}
                label={a.linkText}
                text="Read More"
                textColor="white"
              />
            </aside>
          ))
        }
      </div>
    </section>
  );
}