import './index.css';

const BlogItem = ({ blogListDetails }) => {
    const { title, imageUrl, avatarUrl, author, topic, id } = blogListDetails;

    return (

            <li className='list-items-container'>
                <div className='item-container'>
                    <img src={imageUrl} className='img' alt={`item${id}`} />
                    <div className='blog-item-info'>
                        <p className='topic'>{topic}</p>
                        <h1 className='title'>{title}</h1>
                        <div className='avatar-container'>
                            <img src={avatarUrl} className='avatar-img' alt={`avatar${id}`} />
                            <p className='author'>{author}</p>
                        </div>
                    </div>
                </div>
            </li>
    );
};

export default BlogItem;
