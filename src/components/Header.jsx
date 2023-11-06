import reactImg from '../assets/react-core-concepts.png'

//dyamically change the words when referesh the page
const reactDecsription = ['fundamental','core','max']
function randomInt(max){
  return Math.floor(Math.random() * (max + 1))
}

export default function Header(){//last number of array for dynamic values
    const description = reactDecsription[randomInt(2)]
      return(
        <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      )
    }