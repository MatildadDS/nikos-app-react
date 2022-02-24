import React, { useState } from "react"
import ProjectService from "../../Services/ProjectService"
import Background from '../../Assets/images/about-bg.jpg'
import './AddProject.scss'

const AddProject = (props) => {
  const initialProjectState = {
    title: "",
    creation_date:"",
    body_area:"",
    size:"",
    description_txt: "",
  };
  
  const [project, setProject] = useState(initialProjectState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const saveProject = () => {
    var data = {
      title: project.title,
      creation_date: project.creation_date,
      body_area: project.body_area,
      size: project.size,
      description_txt: project.description_txt,
    };

    ProjectService.createProject(data)
      .then(response => {
        setProject({
          title: response.data.title,
          creation_date: response.data.creation_date,
          body_area: response.data.body_area,
          size: response.data.size,
          description_txt: response.data.description_txt,
        });
        setSubmitted(true);
        console.log(response.data);
        props.history.push("/projects")
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="addproject_container">  
      <div className="home_background">
        <img className="background_img" src={Background} alt="background"/>
      </div>

      <h1 className="addproject_title">Submit your project</h1>


      <div className="addprojectform_container">
        {/* {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newProject}>
              Add a Project
            </button>
          </div>
        ) : (
          <div> */}
                    
            <div className="form-group">
              <label className="label_container" htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={project.title}
                onChange={handleInputChange}
                name="title"
              />
            </div>

            {/* <div className="form-group">
              <label htmlFor="creation_date">Date</label>
              <input
                type="creation_date"
                className="form-control"
                id="creation_date"
                required
                value={project.creation_date}
                onChange={handleInputChange}
                name="creation_date"
              />
            </div> */}

            <div className="form-group">
              <label className="label_container" htmlFor="body_area">Body Area</label>
              <input
                type="text"
                className="form-control"
                id="body_area"
                required
                value={project.body_area}
                onChange={handleInputChange}
                name="body_area"
              />
            </div>

            <div className="form-group">
              <label className="label_container" htmlFor="size">Size</label>
              <input
                type="text"
                className="form-control"
                id="size"
                required
                value={project.size}
                onChange={handleInputChange}
                name="size"
              />
            </div>

            <div className="form-group">
              <label className="label_container" htmlFor="description_txt">Description</label>
              <input
                type="text"
                className="form-control"
                id="description_txt"
                required
                value={project.description_txt}
                onChange={handleInputChange}
                name="description_txt"
              />
            </div>

            <button onClick={saveProject} className="btn btn-sm btn-danger">
              Send my project
            </button>
          </div>
        {/* )} */}
      </div> 
    // </div>   
  );
};

export default AddProject;
