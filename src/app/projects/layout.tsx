import SearchPanel from "./components/search-panel";

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid gap-2">
      <SearchPanel />
      <div>{children}</div>
    </div>
  );
}
