import React from 'react';
//import './OwnerCard.css';
import glamorous from 'glamorous';

const Ownerdiv = glamorous.div({
    width : '100px',
    alignSelf: 'flex-end',
    display : 'flex',
    flexFlow : 'column'
})
const Ownername = glamorous.label({
    fontSize : '0.8em',
    alignSelf : 'flex-end',
})
const Ownerimg = glamorous.img({
    alignSelf : 'flex-end',
    width : 50,
    height : 50
})
const Owner = (props) => {
    return(
        <Ownerdiv className="owner">
          <Ownername className="owner-name">{props.display_name}</Ownername>
          <Ownerimg alt="display_image" src={props.profile_image} />
        </Ownerdiv>
    )
}

export default Owner;