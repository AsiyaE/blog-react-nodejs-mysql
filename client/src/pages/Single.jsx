import React from 'react';
import { Link } from 'react-router-dom';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/27-birds-jennifer-lommers.jpg"
          alt=""
        />
        <div className="user">
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=900&t=st=1683130621~exp=1683131221~hmac=3c34a4c07b5a56a1fb92f3065aa3ceb984fdf41f6cf2e71c9fdc770df12aef4c"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="edit" />
          </div>
        </div>
        <h1>Birds are vertebrate animals adapted for flight.</h1>
        <p>
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
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
