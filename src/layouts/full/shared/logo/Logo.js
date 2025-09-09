import { Link } from 'react-router-dom';
import { ReactComponent as ReactDark } from 'src/assets/images/logos/react-logo.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '70px',
  width: '180px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <ReactDark height={70} />
    </LinkStyled>
  )
};

export default Logo;
