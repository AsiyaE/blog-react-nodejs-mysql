import axios from 'axios';
import moment from 'moment';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="edit" />
          </div>
          )}
        </div>
        <h1>{post.title}</h1>
        {post.description}
        {/* Birds are vertebrate animals adapted for flight. */}
        {/* <p>
          Many can also run, jump, swim, and dive. Some, like penguins, have lost the ability to fly
          but retained their wings. Birds are found worldwide and in all habitats. The largest is
          the nine-foot-tall ostrich. The smallest is the two-inch-long bee hummingbird.
        </p>

        <p>
          Everything about the anatomy of a bird reflects its ability to fly. The wings, for
          example, are shaped to create lift. The leading edge is thicker than the back edge, and
          they are covered in feathers that narrow to a point. Airplane wings are modeled after bird
          wings.
        </p>

        <p>
          The bones and muscles of the wing are also highly specialized. The main bone, the humerus,
          which is similar to the upper arm of a mammal, is hollow instead of solid. It also
          connects to the bird&rsquo;s air sac system, which, in turn, connects to its lungs. The
          powerful flight muscles of the shoulder attach to the keel, a special ridge of bone that
          runs down the center of the wide sternum, or breastbone. The tail feathers are used for
          steering.
        </p>

        <p>
          Birds have a unique digestive system that allows them to eat when they can&mdash;usually
          on the fly&mdash;and digest later. They use their beaks to grab and swallow food. Even the
          way a bird reproduces is related to flight. Instead of carrying the extra weight of
          developing young inside their bodies, they lay eggs and incubate them in a nest.
        </p>

        <p>
          The fossil record shows that birds evolved alongside the dinosaurs during the Jurassic
          period 160 million years ago. The best known fossil is archaeopteryx, which was about the
          size of a crow.
        </p> */}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
