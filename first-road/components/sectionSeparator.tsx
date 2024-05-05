import Image from "next/image";

interface SectionSeparatorRotation{
  rotation:number;
}


export default function SectionSeparator({rotation}:SectionSeparatorRotation) {

  return(
    <>
    <div className={`mt-10 mb-20 w-full flex justify-center items-center rotate-[${rotation}deg]`}>
        <Image src={'/Images/Line 2.svg'} alt="alt" width={1500} height={10000} />
    </div>
    </>
  )

}
