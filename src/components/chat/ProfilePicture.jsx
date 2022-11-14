import React from 'react';

import Image from 'react-bootstrap/Image'

function ProfilePicture(props) {
    return (
        <Image style={{maxHeight: props.maxHeight + 'px'}}
        src={props.url}
        roundedCircle
        fluid
      />
    )
}

export default ProfilePicture;