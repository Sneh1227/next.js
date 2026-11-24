import Card from "@/components/Card";
import { someAction } from "@/app/actions/something";

export default function Home() {
  return (
    <>
      <button className="bg-blue-600 p-4 m-4" onClick={someAction}>Click</button>
    </>
  );
}
