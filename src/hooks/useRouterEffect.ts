import usePageEffectStore from '@Layouts/PageEffect/usePageEffectStore';
import { usePathname } from 'next/navigation';

export default function useRouterEffect(): {
  routerEffect: ({ url }: { url: string }) => void;
} {
  const pathName = usePathname();
  const { animationIn } = usePageEffectStore();
  const routerEffect = ({ url }: { url: string }): void => {
    if (url === pathName) return;
    animationIn(url);
  };

  return { routerEffect };
}
