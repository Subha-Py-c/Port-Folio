import "./Blog.css";

const Blog = () => {
  return (
    <a
      className="blog rounded-2xl"
      target="_blank"
      rel="noopener"
      href="https://www.opencanvas.institute/u/d4cnd9xb"
    >
      Blog
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </a>
  );
};

export default Blog;
