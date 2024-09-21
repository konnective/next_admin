import Image from 'next/image';
import TableList from './components/TableList';
import Link from 'next/link';
import apiConfig from '@/utils/config';

export default async function Home() {
  const url = apiConfig.apiUrl + `${'blogs/all'}`;
  let data = await fetch(url);
  let posts = await data.json();

  return (
    <div>
      <TableList data={posts?.data} />
    </div>
  );
}
