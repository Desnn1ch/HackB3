import Image from "next/image";

export default function LogoFull() {
    return (
        <Image alt="B3 logo" width={198} height={60} src={'/LogoFull.svg'} />
    )
}

export function LogoBlue() {
    return (
        <Image alt="B3 logo" width={198} height={60} src={'/B3LogoBlue.svg'}/>
    )
}