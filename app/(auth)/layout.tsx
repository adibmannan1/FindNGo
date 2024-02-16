import '../globals.css'
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex-center w-full min-h-screen bg-primary-50 bg-dotted-pattern bg-center">
        {children}
    </div>
  );
}