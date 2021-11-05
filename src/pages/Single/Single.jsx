import { SinglePost } from '../../components/SinglePost';
import { SideBar } from '../../components/SideBar';
import './single.css';

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <SideBar />
    </div>
  );
};

export default Single;
