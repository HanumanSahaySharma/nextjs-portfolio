"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Label from "../components/Label";
import axios from "axios";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const [tagline, setTagline] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [completedProjects, setCompletedProjects] = useState("");

  const onFormSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post("http://localhost:3000/api/home/", {
      tagline,
      yearsOfExperience,
      completedProjects,
    });
    try {
      if (response.status === 200) {
        setLoading(false);
        setTagline("");
        setYearsOfExperience("");
        setCompletedProjects("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/api/home");
    try {
      if (response.status === 200) {
        const { tagline, yearsOfExperience, completedProjects } =
          response.data.data[0];
        setTagline(tagline);
        setYearsOfExperience(yearsOfExperience);
        setCompletedProjects(completedProjects);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Home</h1>
      <form onSubmit={(e: ChangeEvent<HTMLFormElement>) => onFormSubmit(e)}>
        <div className="mb-4">
          <Label label="Tagline" />
          <Input type="text" value={tagline} setValue={setTagline} />
        </div>
        <div className="mb-4">
          <Label label="Years of experience" />
          <Input
            type="number"
            value={yearsOfExperience}
            setValue={setYearsOfExperience}
          />
        </div>
        <div className="mb-4">
          <Label label="Completed Projects" />
          <Input
            type="number"
            value={completedProjects}
            setValue={setCompletedProjects}
          />
        </div>
        <Button label="Save" loading={loading} />
      </form>
    </div>
  );
}
