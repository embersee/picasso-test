import { Layout } from "@/shared/ui";
import { LayoutFooter } from "@/widgets/LayoutFooter";

import { LayoutHeader } from "@/widgets/LayoutHeader";

export const baseLayout = (
  <Layout headerSlot={<LayoutHeader />} bottomSlot={<LayoutFooter />} />
);
