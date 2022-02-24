import React, { useState, useEffect } from "react";
import ProjectService from "../../Services/ProjectService";
import './Project.scss'

const Project = props => {
  const initialProjectState = {
    id: null,
    title: "",
    creation_date:"",
    body_area:"",
    size: "",
    description_txt: "",
  };
  
  const [currentProject, setCurrentProject] = useState(initialProjectState);
  const [message, setMessage] = useState("");

  const getProject = id => {
    ProjectService.get(id)
      .then(response => {
        setCurrentProject(response.data.project[0]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProject(props.match.params.id_project);
  }, [props.match.params.id_project]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentProject({ ...currentProject, [name]: value });
  };

  const update = () => {
    ProjectService.updateProject(currentProject.id_project, currentProject)
      .then(response => {
        console.log(response.data);
        setMessage("The project was updated successfully!");  
        props.history.push(`/projects/${currentProject.id_project}`);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteProject = () => {
    ProjectService.deleteProject(currentProject.id_project)
      .then(response => {
        console.log(response.data);
        props.history.push("/projects");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="project_container">
      {currentProject ? (
        <div className="edit-form">
          <h4>Project</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentProject.title}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="body_area">Body Area</label>
              <input
                type="text"
                className="form-control"
                id="body_area"
                name="body_area"
                value={currentProject.body_area}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="size">Size</label>
              <input
                type="text"
                className="form-control"
                id="size"
                name="size"
                value={currentProject.size}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description_txt">Description</label>
              <input
                type="text"
                className="form-control"
                id="description_txt"
                name="description_txt"
                value={currentProject.description_txt}
                onChange={handleInputChange}
              />
            </div>
          </form>

            <button className="m-3 btn btn-sm btn-danger" onClick={deleteProject}>
              Delete
            </button>

            <button
              type="submit"
              className="m-3 btn btn-sm btn-danger"
              onClick={update}
            >
              Update
            </button>
            <p>{message}</p>
          </div>
     
            ) : (
              <div>
                <p>Please click on a Project...</p>
              </div>
          
          )}
    </div>

  );
};

export default Project;