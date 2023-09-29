import rockImg from '@/assets/rock.png'
import paperImg from '@/assets/paper.png'
import scissorImg from '@/assets/scissor.png'
import lizzardImg from "@/assets/lizzard.png"
import spockImg from '@/assets/spock.png'
import { ChoiceItem } from '../ChoiceItem'

import Image from "next/image";
interface ChoicesProps {
  handleRockFunction: () => void
  handlePaperFunction: () => void
  handleScissorFunction: () => void
  handleLizzardFunction: () => void
  handleSpockFunction: () => void
}

export function Choices({
  handleRockFunction,
  handleLizzardFunction,
  handlePaperFunction,
  handleScissorFunction,
  handleSpockFunction
}: ChoicesProps) {
  return (
    <section className="py-8 w-[80vw]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-gray-200 font-bold mb-4">Escolha uma opção:</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
          <ChoiceItem onclick={handleRockFunction} imgUrl={rockImg} />
          <ChoiceItem onclick={handlePaperFunction} imgUrl={paperImg} />
          <ChoiceItem onclick={handleScissorFunction} imgUrl={scissorImg} />
          <ChoiceItem onclick={handleLizzardFunction} imgUrl={lizzardImg} />
          <ChoiceItem onclick={handleSpockFunction} imgUrl={spockImg} />
        </div>
      </div>
    </section>
  );
};