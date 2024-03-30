export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-6 md:px-12 p-2 my-12">{children}</div>
  );
}
