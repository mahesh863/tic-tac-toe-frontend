'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/game');
  }, []);

  return <div className='flex justify-center align-center'></div>;
}
