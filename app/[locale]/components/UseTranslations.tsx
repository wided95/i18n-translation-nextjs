
//pass the message4
interface UseTranslationsProps {
    translate: string;
  }
const UseTranslations = ({translate}:UseTranslationsProps) => {
  return (
    <div><p>{translate}</p></div>
  )
}

export default UseTranslations