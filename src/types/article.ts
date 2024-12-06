import * as React from 'react';

export type Article = {
  html: React.ReactNode;
  linkText: string;
  slug: string;
  thumbnail: string;
};