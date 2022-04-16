import { FC } from 'react';
import { FiPlusSquare } from 'react-icons/fi';
import Logo from '../../assets/logo.svg';
import { Container } from './styles';
import { HeaderProps } from '../../types/props';

const Header: FC<HeaderProps> = (props) => {
  const { openModal } = props;

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <button
              type="button"
              onClick={openModal}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
};

export default Header;
