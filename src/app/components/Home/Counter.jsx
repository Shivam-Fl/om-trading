"use client";
import { useState, useEffect } from "react";

const Counter = ({
  totalStudents = 150,
  qualifiedStaff = 12,
  researchesPublished = 10,
}) => {
  const [students, setStudents] = useState(0);
  const [staff, setStaff] = useState(0);
  const [researches, setResearches] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (students < totalStudents) {
        setStudents(students + 1);
      }
      if (staff < qualifiedStaff) {
        setStaff(staff + 1);
      }
      if (researches < researchesPublished) {
        setResearches(researches + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [
    students,
    staff,
    researches,
    totalStudents,
    qualifiedStaff,
    researchesPublished,
  ]);

  return (
    <div className="p-4 md:h-36 mt-9 ">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center  md:mt-6">
        <div className="text-center">
          <h2 className="text-[3vh] md:text-[5vh] font-bold text-white">
            {students} +
          </h2>
          <p className="text-white">Products Shipped</p>
        </div>
        <div className="text-center ">
          <h2 className="text-[3vh] md:text-[5vh] font-bold text-white">
            {staff} +
          </h2>
          <p className="text-white">Satisfied Client </p>
        </div>
        <div className="text-center text-white">
          <h2 className="text-[3vh] md:text-[5vh] font-bold">{researches} +</h2>
          <p className="text-white">Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Counter;
