import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { places } from "./utility/Places";
import { food } from "./utility/food";
import { bollywood } from "./utility/bollywood";
import { hollywood } from "./utility/hollywood";
import { fitness } from "./utility/fitness";
import { technology } from "./utility/technology";
import ImageCard from "./ImageCard";

const typeObj = { 
  Travel: places,
  Food : food,
  Bollywood :  bollywood,
  Hollywood : hollywood,
  Fitness :  fitness,
  Technology: technology
};

const BlogDetails = () => {
  const { type, id } = useParams();  
  const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState({ 
    id,
    type,
    url: "",
    about: "",
    date: "",
    title: ""
  });

  const [remainingBlogs, setRemainingBlogs] = useState([]);

  useEffect(() => {
    setSelectedBlog(() => {
      let blog = typeObj[type].find(   
        (blog) => blog.id.toString() === id.toString()
      );
      return blog;
    });

    setRemainingBlogs(() => {
      let blogs = typeObj[type].filter(
        (blog) => blog.id.toString() !== id.toString()  
      );

      return blogs;
    });
  }, [id, type]);

  return (
    <>
      <div className="blog__details__container">
        <div className="blog__title">{selectedBlog.title}</div>
        <div className="blog__image__details">
          <img
            style={{ width: "100%", height: "100%" }}
            src={selectedBlog.url}
            alt={selectedBlog.title}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            lineHeight: "24px",
            fontWeight: "900",
            color: "rgb(116 103 103)"
          }}
        >
          {selectedBlog.about}
        </div>
      </div>
      <div style={{ margin: "3% 12% 0 12%" }}>
        <div className="latest__section__heading">More From The Siren</div>
        <hr className="red__line" />
        <div className="card__list">
          {remainingBlogs?.map((blog) => {
            return (
              <div
                className="vertical__card"
                onClick={() => navigate(`/${blog.type}/${blog.id}`)}
              >
                <ImageCard
                  url={blog.url}
                  title={blog.title}
                  about={blog.about}
                  type={blog.type}
                  date={blog.date}
                  cardType="vertical"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;