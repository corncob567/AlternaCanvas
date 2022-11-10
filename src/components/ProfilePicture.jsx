import Image from 'react-bootstrap/Image'


function ProfilePicture(props) {
    return (
        <Image style={{maxHeight: '50px'}}
        src={props.url}
        roundedCircle
        fluid
      />
    )
}

export default ProfilePicture;