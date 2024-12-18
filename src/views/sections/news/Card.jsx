import React, {useState} from 'react'
import Bookmark from '../../../images/icons/bookmark.svg'

const Card = ({data}) => {
    const [bookmark, setBookmark] = useState(false);

    const handleBookmark = () =>{
        setBookmark(!bookmark);
    }

    return (
        <div>
            <div className="news-card">
                <div className="news-card-image-container">
                    <img className="news-card-image" src={data.imageUrl} alt="news story image"/>
                    <img onClick={handleBookmark} className={`news-card-image-bookmark ${bookmark ? 'active' : ''}`} src={Bookmark} alt="bookmark icon"/>
                </div>
                <div className="card-heading">
                    <p className="card-heading-category">{data.category}</p>
                    <p className="card-heading-date">{data.published}</p>
                </div>
                <div className="card-data">
                    <h5 id="card-author-title">{data.title}</h5>
                    <div id="card-divider"></div>
                    <span className="card-author">
                        <img src={data.author.profileImageUrl} alt="author profile image"/>
                        <p>{data.author.firstName} {data.author.lastName}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default Card
