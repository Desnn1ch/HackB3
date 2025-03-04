import Image from "next/image";

export default function InputField({placeholder, name, id, image, type}) {
    return (
        <div className="relative w-full flex justify-start items-center px-11 h-[50px] bg-transparent border-b-2 border-[#BCBDC0]">
            <Image alt="ico" width={21} height={21} src={image} className="absolute top-[14px] left-[14px]"/>
            <input autoComplete="nope" className="w-full bg-dark focus:bg-dark active:bg-dark placeholder:bg-dark placeholder:text-[#BCBDC0] placeholder:text-base" type={type} name={name} placeholder={placeholder} id={id}/>
        </div>
    );
}