import { ReactNode } from "react";

type ProjectIDLayoutProps = {
  children: ReactNode;
};

export default function FacultyIDLayout({ children }: ProjectIDLayoutProps) {
  return (
    <div>
      <header>
        <nav>
          <a href="/sponsors">Back to Sponsors</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
