import React from 'react';

const Card = ({ item }) => {
    const { images, user } = item;
    const { fixed_height_downsampled } = images;
    
    return (
        <li className='card-item'>
            <p className='title'>{item.title}</p>
            <img className='img' src={fixed_height_downsampled.webp} alt={item.title} />
            {user ?
                <div className='card-user'>
                    <img className='img' src={user.avatar_url}  alt='user'/>
                    <a href={user.profile_url} rel="noopener noreferrer" >{user.display_name}</a>
                </div>
                :
                <p>Unnamed User</p>
            }
        </li>
    )
}

export default Card;