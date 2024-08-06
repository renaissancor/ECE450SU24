import { ReactNode } from "react";

type ProjectIDLayoutProps = {
  children: ReactNode;
};

export default function ProjectIDLayout({ children }: ProjectIDLayoutProps) {
  return (
    <div>
<header>
  <nav>
    <div className="ml-4 inline-block">
      <a href="/projects" className="px-4 py-2 border border-gray-500 text-gray-700 font-semibold rounded">
        Back to Projects
      </a>
    </div>
  </nav>
</header>


      <main>{children}</main>
    </div>
  );
}
