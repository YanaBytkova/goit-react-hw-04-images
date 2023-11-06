import { RotatingLines } from 'react-loader-spinner';
import { StyledLoader} from './StyledLoader.styled';
const Loader = () => {
  return (
    <StyledLoader>
      <RotatingLines
  strokeColor="blue"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </StyledLoader>
  );
};

export default Loader;
