import React, { useState, useEffect } from 'react';
import './App.css';

function OtherRepos(){

        const [repos, setRepos] = useState([]);
      
        useEffect(() => {
          fetchRepos();
        }, []);
      
        const fetchRepos = async () => {
          try {
            const response = await fetch('https://api.github.com/users/Demedia27/repos');
            if (!response.ok) {
              throw new Error('Failed to fetch repositories');
            }
            const data = await response.json();
            setRepos(data);
          } catch (error) {
            console.error('Error fetching repositories:', error);
          }
        };
      
        function HandleClick(){
         alert("Thank you for Viewing my repos")
        }
      
      
        return (
          <div className="App">
            <div className="header">
              <nav><h5>I am Udeme Inwang: Demedia27@GitHub</h5></nav>
            <h1>My GitHub Repositories</h1>
            <h2>I do not have much repos <br /> in my github account</h2>
            </div>
      
            <header className="App-header">
              <div className='show'>
                <button className='show' onClick={HandleClick}>See Repos</button>
               
              <ul className="repo-list">
                {repos.map(repo => (
                  <li key={repo.id} className="repo-item">
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                  </li>
                ))}
              </ul>
              </div>
              
            </header>
          </div>
        );
}
export default OtherRepos