import Image from "next/image"
import { useState } from "react"

interface ItemProps {
  imgUrl: any
  onclick: () => void
}
export function ChoiceItem({ imgUrl, onclick }: ItemProps) {
  const [clicked, setIsClicked] = useState(false)

  function handleChangeTheme() {
    if (clicked) {
      setIsClicked(false)
    } else {
      setIsClicked(true)
    }
  }

  if (clicked) {
    return (
      <div
        onClick={() => { handleChangeTheme(); onclick() }}
        className=" hover:opacity-70 hover:cursor-pointer bg-gray-100 flex flex-col gap-4 items-center justify-center  border-red-600 shadow-lg  py-4 px-2 xs:max-w-[160px] border rounded">
        <Image alt="Rock Image" className="bg-gray-100" src={imgUrl} width={60} height={60}></Image>
      </div>
    )
  }

  return (
    <div
      onClick={() => { handleChangeTheme(); onclick() }}
      className=" hover:opacity-70 hover:cursor-pointer bg-gray-100 flex flex-col gap-4 items-center justify-center  border-slate-300 shadow-lg hover:border-purple-600 py-4 px-2 xs:max-w-[160px] border rounded">
      <Image alt="Rock Image" className="bg-gray-100" src={imgUrl} width={60} height={60}></Image>
    </div>
  )
}