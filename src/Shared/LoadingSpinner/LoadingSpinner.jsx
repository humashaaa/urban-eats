import { FadeLoader } from 'react-spinners'
const LoadingSpinner = () => {
    return (
      <div
        className={` 
        flex 
        flex-col 
        justify-center 
        items-center `}
      >
        <FadeLoader size={100} color='#00C8AA' />
      </div>
    )
  }
  export default LoadingSpinner
//   responsive from ppro