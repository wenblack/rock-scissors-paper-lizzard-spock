import React, { useEffect, useState } from "react";
import { Choices } from "../Choices";
import Alert from 'sweetalert2'

export function Game() {
  const [element1, setElement1] = useState("");
  const [element2, setElement2] = useState("");
  const [result, setResult] = useState('');

  useEffect(() => {
    getRandomElement()
    handleCompare(element1, element2)
  }, [element1, element2, result])

  function getRandomElement() {
    const randomIndex = Math.ceil(Math.random() * 5);
    switch (randomIndex) {
      case 1:
        return "tesoura";
      case 2:
        return "papel";
      case 3:
        return "pedra";
      case 4:
        return "lagarto";
      case 5:
        return "spock";
      default:
        return "";
    }
  };

  const handleRandomSelection = () => {
    const randomElement = getRandomElement();
    setElement2(randomElement);
  };

  function handleCompare(elemento1: string, elemento2: string) {
    handleRandomSelection()

    switch (elemento1) {
      case "tesoura":
        switch (elemento2) {
          case "papel":
            return setResult(`Parabés,você venceu! Tesoura cortou o Papel`);
          case "pedra":
            return setResult(`Infelizmente você perdeu ! Pedra esmagou Tesoura`);
          case "lagarto":
            return setResult("Parabés,você venceu! Tesoura decapitou o Lagarto");
          case "spock":
            return setResult("Infelizmente você perdeu ! Spock derreteu a Tesoura")
          default:
            return setResult("Empate");
        }
      case "papel":
        switch (elemento2) {
          case "pedra":
            return setResult("Parabés,você venceu! Papel embrulhou a Pedra");
          case "spock":
            return setResult("Parabés,você venceu! Papel refutou Spock");
          case "tesoura":
            return setResult("Infelizmente você perdeu ! Tesoura cortou papel");
          case "lagarto":
            return setResult("Infelizmente você perdeu ! Lagarto comeu o papel");
          default:
            return setResult("Empate");
        }
      case "pedra":
        switch (elemento2) {
          case "papel":
            return setResult(`Infelizmente você perdeu! Papel embrulhou Pedra`);
          case "lagarto":
            return setResult("Parabés,você venceu! Pedra esmagou o Lagarto");
          case "tesoura":
            return setResult("Parabés,você venceu! Pedra esmagou a Tesoura");
          case "spock":
            return setResult("Infelizmente você perdeu!  Spock vaporizou a Pedra");
          default:
            return setResult("Empate");
        }
      case "lagarto":
        switch (elemento2) {
          case "tesoura":
            return setResult("Infelizmente você perdeu! Tesoura decapitou o Lagarto");
          case "pedra":
            return setResult("Infelizmente você perdeu! Pedra esmagou o Lagarto");
          case "spock":
            return setResult("Parabés,você venceu! Lagarto envenenou Spock");
          case "papel":
            return setResult("Parabés,você venceu! Lagarto comeu o Papel");
          default:
            return setResult("Empate");
        }
      case "spock":
        switch (elemento2) {
          case "lagarto":
            return setResult("Infelizmente você perdeu! Lagarto envenenou Spock");
          case "papel":
            return setResult("Infelizmente você perdeu! Papel refutou Spock");
          case "tesoura":
            return setResult("Parabés,você venceu! Spock derreteu a Tesoura");
          case "pedra":
            return setResult("Parabés,você venceu! Spock vaporizou a Pedra");
          default:
            return setResult("Empate");
        }
      default:
        return setResult("Opções inválidas");
    }
  };

  function showResult() {
    const data = result

    let looseResult = data.startsWith('Infelizmente você perdeu')
    let WinResult = data.startsWith('Parabés,você venceu')
    let drawResult = data.startsWith('Empate')
    let undefinedResult = data.startsWith('Opções inválidas')

    if (undefinedResult) {
      Alert.fire({
        icon: 'error',
        title: 'Por favor, escolha uma opção'
      })
    }
    if (looseResult) {
      Alert.fire({
        icon: 'error',
        title: `${result}`
      })
    }
    if (WinResult) {
      Alert.fire({
        icon: 'success',
        title: `${result}`
      })
    }
    if (drawResult) {
      Alert.fire({
        icon: 'info',
        title: `${result}`
      })
    }
  }

  function setRock() {
    setElement1('pedra')
  }

  function setPaper() {
    setElement1('papel')
  }

  async function setScissor() {
    setElement1('tesoura')
  }

  function setLizzard() {
    setElement1('lagarto')
  }

  function setSpock() {
    setElement1('spock')
  }

  return (
    <div className="flex flex-col items-center">
      <Choices
        handleRockFunction={setRock}
        handleLizzardFunction={setLizzard}
        handlePaperFunction={setPaper}
        handleScissorFunction={setScissor}
        handleSpockFunction={setSpock}
      />
      <button type="submit" onClick={() => {
        showResult()
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
      } className="flex max-w-[400px] w-[70vw] text-gray-200 font-bold justify-center rounded-md p-2 bg-blue-500">Jogar</button>
    </div >
  );
};


