import Link from "next/link";

export default function Header() {
    return (
        <header className="header bg-blue text-white">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <nav>
                    <Link href="/"> Home </Link>
                    <Link href="/venue"> Venue </Link>
                    <Link href="/wedding-party"> Wedding Party </Link>
                    <Link href="/travel-lodging"> Travel and Lodging </Link>
                    <Link href="/vendors"> Vendors </Link>
                    <Link href="/registry"> Registry </Link>
                    <Link href="/faq"> FAQ </Link>
                </nav>
            </div>
        </header>
    );
}
