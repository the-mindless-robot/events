export default function AppContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
      {children}
    </div>
  );
}
