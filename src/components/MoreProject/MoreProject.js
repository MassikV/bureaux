import { Link } from 'react-router-dom';
import Union from './Union.svg';
import './moreProject.scss';

const MoreProject = () => {
  return (
    <Link to="/projects" className="more-project">
      <h2 className="more-project__title">БІЛЬШЕ ПРОЄКТІВ</h2>
      <img loading="lazy" src={Union} alt="" className="more-project__img" />
    </Link>
  );
};

export default MoreProject;
