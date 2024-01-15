import type { PageProps as InertiaPageProps } from '@inertiajs/core'
import { User } from './user.type'

export interface SharedProps {
  jetstream: {
    [key: string]: boolean;
  };
  auth: {
    user: User
  }
  errorBags: unknown;
  errors: object;
}

declare module '@inertiajs/core/types/types' {
  interface PageProps extends SharedProps, InertiaPageProps {}
}

