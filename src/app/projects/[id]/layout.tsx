import { ReactNode } from "react";

type ProjectIDLayoutProps = {
  children: ReactNode;
};

export default function ProjectIDLayout({ children }: ProjectIDLayoutProps) {
  return (
    <div>
      <header>
        <nav>
          <a href="/projects">Back to Projects</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
