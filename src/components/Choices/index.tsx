import rockImg from '@/assets/rock.png'
import paperImg from '@/assets/paper.png'
import scissorImg from '@/assets/scissor.png'
import lizzardImg from "@/assets/lizzard.png"
import spockImg from '@/assets/spock.png'


import Image from "next/image";

export function Choices() {
  return (
    <section className="py-8 w-[80vw]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold mb-4">Escolha uma opção:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
          <div className=" hover:animate-pulse bg-gray-100 flex flex-col gap-4 items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="Rock Image" className="bg-gray-100" src={rockImg} width={60} height={60}></Image>
          </div>
          <div className=" bg-gray-100 hover:animate-pulse flex items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="Paper Image" className="bg-gray-100" src={paperImg} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-gray-100 items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="Scissor Image" className="bg-gray-100" src={scissorImg} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-gray-100 items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="Lizzard Image" className="bg-gray-100" src={lizzardImg} width={60} height={60}></Image>
          </div>
          <div className=" hover:animate-pulse flex bg-gray-100 items-center justify-center  border-blue-500 py-4 px-2 xs:max-w-[160px] border rounded">
            <Image alt="Spock Image" className="bg-gray-100" src={spockImg} width={60} height={60}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};