import { Button } from "@current/ui/components/button";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-red-300">
      <h1 className="text-4xl font-bold text-white">
        Welcome to the Home Page
      </h1>
      <Button>Click Me</Button>
    </div>
  );
}
