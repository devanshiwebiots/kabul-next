import { BlogDetailsProp } from "@/Types/Learning";

const BlogDetails :React.FC<BlogDetailsProp>= ({ text, title }) => {
  return (
    <div className="blog-details-main">
      <ul className="blog-social justify-content-center">
        <li className="me-1">9 April 2023</li>
        <li className="me-1">by: Admin</li>
        <li className="me-1">0 Hits</li>
      </ul>
      <hr />
      <h5>{title}</h5>
      <p className="blog-bottom-details">{text}</p>
    </div>
  );
};

export default BlogDetails;