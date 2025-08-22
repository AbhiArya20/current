import { SidebarInset, SidebarProvider } from "@current/ui/components/sidebar";
import { AppSidebar } from "@/components/sidebar/app-sidebar";

import { ChatInterface } from "@/components/chat/chat-interface";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <ChatInterface />
      </SidebarInset>
    </SidebarProvider>
  );
}
