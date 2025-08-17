import { ThemeToggleButton } from "@current/ui/components/theme-switch-button";
import SignInCornerDialog from "@/components/auth/sign-in-corner-dialog";
import { SignInDialog } from "@/components/auth/sign-in-dialog";
import ChatBotDemo from "@/components/chat";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ThemeToggleButton />
      <SignInDialog />
      <SignInCornerDialog />

      <ChatBotDemo />
    </div>
  );
}
