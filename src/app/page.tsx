import Image from "next/image";
import Button from "./components/button";

export default function Home() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <main className="flex flex-col items-center justify-center flex-1 p-8 gap-10">
        <h1 className="text-4xl font-bold text-center">
          Welcome to Horse Reloaded 🚀
        </h1>

        <div className="flex gap-4 flex-wrap justify-center">
          <Button>Default</Button>
          <Button variant="secondary">Second</Button>
          <Button variant="outline">Outline</Button>
          <Button size="lg" variant="primary">
            Big
          </Button>
          <Button loading>Processing...</Button>
          <Button icon={<span>🔥</span>}>With Icon</Button>
        </div>
      </main>
    </div>
  );
}
