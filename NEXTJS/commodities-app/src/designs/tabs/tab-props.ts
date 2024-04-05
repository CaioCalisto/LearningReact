import { ReactNode } from "react";

type TabDetail = {
  title: string;
  renderItem: ReactNode;
};

export type TabProps = {
  options: TabDetail[];
};
