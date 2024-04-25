
import PropTypes from 'prop-types';
import './ProfileComponent.css';

export default function ProfileComponent(props) {
    return (
        <div className='profile'>
            <img className='coverImg' src={props.coverImg} alt='profile' />
            <img className='profileImg' src={props.profileImg} alt='profile' />
            <div className='profileInfo'>
                <h1>{props.name}</h1>
                <p>{props.location}</p>
            </div>
            <hr className='hr' />
            <div className='profileStats'>
                <div>
                    <h2>{props.followers}</h2>
                    <p>FOLLOWERS</p>
                </div>
                <div>
                    <h2>{props.likes}</h2>
                    <p>LIKES</p>
                </div>
                <div>
                    <h2>{props.photos}</h2>
                    <p>PHOTOS</p>
                </div>
            </div>
        </div>
    )
}

ProfileComponent.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    profileImg: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
    photos: PropTypes.string.isRequired,

}


