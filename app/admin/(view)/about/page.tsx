"use client";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";

export default function About() {
  const [tagline, setTagline] = useState("");
  const [aboutText, setAboutText] = useState("");
  const [projects, setProjects] = useState("");
  const [experience, setExperince] = useState("");
  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">About</h1>
      <form>
        <div className="mb-4">
          <Label label="Tagline" />
          <Input type="text" value={tagline} setValue={setTagline} />
        </div>
        <div className="mb-4">
          <Label label="About Text" />
          <Input type="text" value={aboutText} setValue={setAboutText} />
        </div>
        <div className="mb-4">
          <Label label="No of projects" />
          <Input type="text" value={projects} setValue={setProjects} />
        </div>
        <div className="mb-4">
          <Label label="Years of experince" />
          <Input type="text" value={experience} setValue={setExperince} />
        </div>
        <Button label="Save" />
      </form>
    </div>
  );
}
