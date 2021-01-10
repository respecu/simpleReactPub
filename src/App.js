import './App.css';
import RepoName from './components/reponame/RepoName.js';
import PrivacyToggle from './components/privacy/PrivacyToggle.js';
import InitOption from './components/initoption/InitOption.js';

function showAlert() {
  alert('this is demo..');
}

function App() {
  return (
    <div className="App">
      <div className="container-md my-6 px-3 px-md-4 px-lg-5">
        <div className="Subhead hx_Subhead--responsive mb-5">
          <h1 className="Subhead-heading">Create a new repository</h1>
          <div className="Subhead-description">
            A repository contains all project files, including the revision history. Already have a project repository elsewhere?
            <br/>
            <a>Import a repository.</a>
          </div>
        </div>

        <RepoName />
        <PrivacyToggle />
        <InitOption />
        <button type="submit" class="btn btn-primary first-in-line" data-disable-with="Creating repository…" disabled=""
        onClick={() => showAlert()}>
          Create repository
        </button>
      </div>
    </div>
  );
}

export default App;
