import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest
        <span className="text-cyan-200"> Blogs</span>
      </h1>
      <div className="ww-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div>
            <BlogCard image="/images/pic2.jpg" title="Learn how to build an amazing portfolio website using next js"/>
        </div>
        <div>
            <BlogCard image="/images/pic2.jpg" title="Learn how to build an amazing portfolio website using next js"/>
        </div>
        <div>
            <BlogCard image="/images/pic2.jpg" title="Learn how to build an amazing portfolio website using next js"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
