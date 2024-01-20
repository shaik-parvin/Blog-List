// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <li className="lists">
      <div className="list">
        <h1 className="heading">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}

export default BlogItem
