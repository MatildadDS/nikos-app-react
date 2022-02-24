import React, { useState, useEffect  } from "react";
import ProjectService from "../../Services/ProjectService";
import { Link } from "react-router-dom";
import Background from '../../Assets/images/about-bg.jpg'
import './ProjectLists.scss'

const ProjectsList = (props) => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState({});
  const [currentIndex, setCurrentIndex] = useState(-1);

   useEffect(() => {
    getAllProjects();
  }, []);

   const getAllProjects = () => {
     ProjectService.getAllProjects()
       .then(response => {
         setProjects(response.data.projects);
         console.log(response.data);
       })
       .catch(e => {
         console.log(e);
       });
   };

  const refreshList = () => {
    getAllProjects();
    setCurrentProject(null);
    setCurrentIndex(-1);
  };

  const setActiveProject = (project, index) => {
    setCurrentProject(project);
    setCurrentIndex(index);
  };
    console.log(currentProject, currentIndex)

  const deleteAllProjects = () => {
    ProjectService.deleteAllProjects()
      .then(response => {
        console.log(response.data);
        refreshList();
        console.log(props);
        props.history.push('/add')
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="projectLists_container">
      <div className="home_background">
        <img className="background_img" src={Background} alt="background"/>
      </div>

      <div className="list row">
        <div className="col-md-6">
          <h4>Projects List</h4>
        <div>
      </div>

          <ul className="list-group">
              {projects &&
                projects.map((project, index) => (
                <li
                  className={
                    "list-group-item " + (index === currentIndex ? "active" : "")
                  }
                  onClick={() => setActiveProject(project, index)}
                  key={index}
                >
                  {project.title}
                </li>
              ))}
          </ul>

          <div className="action_btn">
          <button className="projectList_para m-3 btn btn-sm btn-danger">
                <Link to="/add">new project</Link>
            </button>

            <button
              className="m-3 btn btn-sm btn-danger"
              onClick={deleteAllProjects}
              > Remove All
            </button>
          </div>
        </div>

      <div className="continue_exploring">
          <Link to="/ecosystem">Continue the discovery → </Link>
      </div>


        <div className="col-md-6 my_project">
          {currentProject ? (
            <div className="my_project">
              <h4>Project</h4>

              <div>
                <label>
                  <strong>Title :</strong>
                </label>{" "}
                {currentProject.title}
              </div>

              <div>
                <label>
                  <strong>Date :</strong>
                </label>{" "}
                {currentProject.creation_date}
              </div>

              <div>
                <label>
                  <strong>bodyarea :</strong>
                </label>{" "}
                {currentProject.body_area}
              </div>

              <div>
                <label>
                  <strong>size :</strong>
                </label>{" "}
                {currentProject.size}
              </div>

              <div>
                <label>
                  <strong>Description :</strong>
                </label>{" "}
                {currentProject.description_txt}
              </div>


              <Link
                to={"/projects/" + currentProject.id_project}
                className="m-3 btn btn-sm btn-danger"
              >
                Edit
              </Link>
            </div>
          ) : (

            <div>
              <br />
            </div>

          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectsList;
