"use client";
import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Label from "../../components/Label";

export default function Experience() {
  const [experience, setExperince] = useState({
    title: "",
    companyName: "",
    year: "",
  });
  const [title, setTitle] = useState("");
  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-5">Experience</h1>
      <form>
        <div className="mb-4">
          <Label label="Title" />
          <Input type="text" value={title} setValue={setTitle} />
        </div>
        <Button label="Save" />
      </form>
    </div>
  );
}
