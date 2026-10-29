import { type ChangeEvent, useCallback, useState } from "react"
import SearchIcon from "../assets/icons/search.svg?react"
import { debounce } from "../helpers/utils"
import InputText from "./input-text"

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("")

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = useCallback(
    debounce((value: string) => console.log("Valor com debounce", value), 2000),
    [],
  )

  function handleInputValue(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    setInputValue(value)
    debouncedSetValue(value)
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos"
      className="flex-1"
      value={inputValue}
      onChange={handleInputValue}
    />
  )
}
