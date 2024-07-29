import Link from "next/link";

export default function Header() {
    return (
      <>
        <Link href="/" className="m-5">Home</Link>
        <Link href="/performance">Performance</Link>
        <Link href="/scale">Scale</Link>
        </>
    );
  }
  