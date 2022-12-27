
import React from 'react'
import { Button } from 'bootstrap'

export default function Navbar() {
  return (
      <div>
          <nav class="navbar navbar-expand justify-content-right">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Features</a>
                      
        
                  </div>
                  
    <a class="btn btn-primary ms-auto" href="#" role="button">Upload Book</a>
    {/* <a class="nav-link" href="#">User</a> */}
  </div>
</nav>
    </div>
  )
}
