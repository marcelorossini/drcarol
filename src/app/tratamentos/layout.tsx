import Menu from '@/components/ui/menu';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu isSticky={false} dark={true}/>
      <div className='w-full max-w-full overflow-x-hidden'>
        {children}
      </div>
    </>
  );
}
