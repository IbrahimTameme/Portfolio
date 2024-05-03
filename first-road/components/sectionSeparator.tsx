import Image from "next/image";
export default function SectionSeparator() {
  return(
    <>
    <div className="mt-10 mb-20 w-full flex justify-center items-center">
        <Image src={'/Images/Line 2.svg'} alt="alt" width={1500} height={10000}  />
    </div>
    </>
  )

}
