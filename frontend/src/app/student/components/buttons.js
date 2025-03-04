import Link from "next/link";
import Image from "next/image";

export function MoveToButton({href}) {
    return (
        <Link href={href} className="absolute top-5 right-5"><Image alt="edit" src={'/moveto.svg'} width={60} height={60}/></Link>
    )
}