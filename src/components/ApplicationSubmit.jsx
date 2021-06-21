import React, {useState, useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";
import {Button,Link} from "@material-ui/core"
import Footer from "./Footer"

export default function ApplicationSubmit({ match }) {
  const [job, getJob] = useState({})

  useEffect(() => {
    const fetchJob = async() => {
      const data  = await axios.get(`/jobs/getsinglejobdetails/${match.params.jobId}`)

      getJob(data.data.data1)
    }

    fetchJob()
  }, [])
  return (
    <>
      {console.log(job.jobDuties)}
      <div className="ApplicationSubmit">
        <h1>{job.jobTitle}</h1>
        <div className="responsibilities">
          <h2>Your Responsibilities</h2>
          <h3>{job.jobDuties}</h3>
        </div>

        <div className="mustHave">
          <h2>MUST HAVE</h2>
          <h3>{job.mustHaveRec}</h3>
        </div>

        <div className="goodToHave">
          <h2>Good to HAVE</h2>
          <h3>{job.goodTohaveRec}</h3>
        </div>

        <div className="goodToHave">
          <h3><strong>{job.specialBenifits}</strong></h3>
        </div>

        <Button className="button"><a href={`${job.jobLink}`}>APPLY NOW</a></Button>

      </div>
      <Footer />
    </>
  );
}