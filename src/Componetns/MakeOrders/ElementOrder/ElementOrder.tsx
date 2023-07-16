import Image from 'next/image';

interface ElementOrderProps {
  title: string;
  imageUrl: string;
}

export const ElementOrder: React.FC<ElementOrderProps> = ({ title, imageUrl }) => {
  return (
    <div className='w-60 h-40 inline-block relative'>
      <Image
        src={imageUrl}
        width={60}
        height={60}
        alt=""
        className='my-0 mx-auto'
      />
      <p className='text-white text-center text-xl font-medium'>{title}</p>
    </div>
  );
};
