import React, { useEffect, useState } from "react";
import Header from "../Common_component/Header";
import Footer from "../Common_component/Footer";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import axios from "axios";

function Blogs2() {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    blogName: "",
    author: "",
    content: "",
    image: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error Fetching blogs:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/blogs", formData);
      setBlogs([...blogs, res.data]);
      setFormData({
        blogName: "",
        author: "",
        content: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div>
      <Header />
      <h1 align="center">Blogs component</h1>
      <MDBContainer fluid>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog) => (
            <MDBCol key={blog.id}>
              <MDBCard className="h-100">
                <MDBCardImage
                  style={{ width: "100%", height: "300px", margin: "auto" }}
                  src={blog.image}
                  alt={blog.blogName}
                  position="top"
                />
                <MDBCardBody>
                  <MDBCardTitle>{blog.blogName}</MDBCardTitle>
                  <MDBCardText>{blog.content}</MDBCardText>
                  <p>By: {blog.author}</p>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>

      {/* Add To Blogs  */}
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol lg="9" className="my-5">
            <h1 class="mb-4">Apply your Blogs</h1>

            <form onSubmit={handleSubmit}>
              <MDBCard>
                <MDBCardBody className="px-4">
                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Blog name</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Blogs"
                        size="lg"
                        id="form1"
                        name="blogName"
                        value={formData.blogName}
                        onChange={handleChange}
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Author Name</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Author-name"
                        size="lg"
                        id="form2"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Content:</h6>
                    </MDBCol>

                    <MDBCol md="9" className="pe-5">
                      <MDBTextArea
                        label="Message form blogs"
                        id="textAreaExample"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows={3}
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBRow className="align-items-center pt-4 pb-3">
                    <MDBCol md="3" className="ps-5">
                      <h6 className="mb-0">Image url</h6>
                    </MDBCol>
                    <MDBCol md="9" className="pe-5">
                      <MDBInput
                        label="Url path"
                        size="lg"
                        id="form2"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>

                  <hr className="mx-n3" />

                  <MDBBtn className="my-4" size="lg">
                    Add To blog
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Footer />
    </div>
  );
}

export default Blogs2;
