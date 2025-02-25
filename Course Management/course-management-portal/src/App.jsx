import React, {useState, useEffect, useRef, useParams} from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom"; 
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function App() {

  const course = await fetch("https://course-management-portal-34c4f-default-rtdb.firebaseio.com/");
  console.log(course.data);

  const [role, setRole] = useState("");

  return (
    <BrowserRouter>
    <nav>
      <Link to = "/" style = {{margin: "0 1rem"}}>Home</Link>
      <Link to = "/coursedetails" style = {{margin: "0 1rem"}}>Course Details</Link>
      <Link to = "/assignment" style = {{margin: "0 1rem"}}>Assignment</Link>
      <Link to = "/studentprofile" style = {{margin: "0 1rem"}}>Student Profile</Link>
      <Link to = "/gradedashboard" style = {{margin: "0 1rem"}}>GradeDashboard</Link>
    </nav>

    <Router>
      <Route path = "/" element = {<h2>Welcome to Course Management Portal</h2>} />
      <Route path = "/coursedetails" element = {<h2>Courses: {Web-205}, {RCT-305}</h2>} />
      <Route path = "/assignment" element = {<h2>Assignments: {StateManagement}, {Routings}</h2>} />
      <Route path = "/studentprofile" element = {<h2>Name: {studentName}</h2>} />
      <Route path = "/gradedashboard" element = {<h2>Grade: {A}, {B}, {C}</h2>} />
    </Router>
    </BrowserRouter>
  );
}

export default App;