import { ReactNode } from "react";

type ProjectIDLayoutProps = {
  children: ReactNode;
};

export default function FacultyIDLayout({ children }: ProjectIDLayoutProps) {
  return (
    <div>
      <header>
        <nav>
          <a href="/faculty">Back to Faculty</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
