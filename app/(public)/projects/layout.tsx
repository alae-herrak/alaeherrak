import { ScrollIndicator } from "@/components/ui/scroll-indicator";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto max-w-6xl space-y-32 px-6 py-12 pt-20">
      <ScrollIndicator />

      {children}
    </div>
  );
}

export default layout;
