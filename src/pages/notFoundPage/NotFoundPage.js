import React from 'react'
import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        <strong>404 Page not found</strong>
      </p>
      <p>
        <Link to={'/'} >Go Home</Link>
      </p>
    </div>
  )
}