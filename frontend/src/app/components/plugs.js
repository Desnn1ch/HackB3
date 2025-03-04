import Image from "next/image";
import Link from "next/link";

export default function SWWPlug({body}) {
    return(
        <div className={`flex w-full gap-5 p-10 rounded-[20px] items-center bg-blue-opacity shadow-base`}>
            <Image alt='empty' width={230} height={230} src={'/empty.svg'}/>
            <div className='w-full flex flex-col gap-4 items-center'>
                <h3 className="text-4xl text-center text-dark">Упс, что-то пошло не так...</h3>
                <p className="text-xl text-center text-dark">{body}</p>
            </div>
        </div>
    )
}

export function TINPlug({body}) {
    return(
        <div className={`flex relative w-full gap-5 p-10 rounded-[20px] items-center bg-blue-opacity shadow-base`}>
            <Image alt='empty' width={230} height={230} src={'/empty.svg'}/>
            <div className='w-full flex flex-col gap-4 items-center'>
                <h3 className="text-4xl text-center text-dark">Упс, кажется тут ничего нет</h3>
                <p className="text-xl text-center text-dark">{body}</p>
            </div>
            {/* <Link href={'/'} className="absolute right-10 bottom-5"><Image alt="add" src={'/add.svg'} width={83} height={83}/></Link> */}
        </div>
    )
}

export function BasePlug({isBlue, title, body, isReverse}) {
    return(
        <div className={`flex ${isReverse && 'flex-row-reverse'} w-full gap-5 p-10 rounded-[20px] items-center ${isBlue ? 'bg-blue-opacity' : 'bg-bright-opacity'} shadow-base`}>
            <Image alt='empty' width={230} height={230} src={'/empty.svg'}/>
            <div className='w-full flex flex-col gap-4 items-center'>
                <h3 className="text-4xl text-center text-dark">{title}</h3>
                <p className="text-xl text-center text-dark">{body}</p>
            </div>
        </div>
    )
}

export function LoadPlug({width, height}) {
    return (
        <div height={height} width={width} className={`h-[276px] rounded-[20px] shadow-base bg-dark opacity-5`}></div>
    )
}