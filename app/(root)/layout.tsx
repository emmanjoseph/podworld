import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <main>
  <LeftSidebar/>
    {children}
  <RightSidebar/>
  </main>
  );
}
