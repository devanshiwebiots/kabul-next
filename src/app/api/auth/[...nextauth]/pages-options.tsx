import { Routes } from '@/Utils/Routes';
import { PagesOptions } from 'next-auth';

const pagesOptions: Partial<PagesOptions> = {
  signIn:Routes.Login,
  error: Routes.Login,
};

export default pagesOptions;