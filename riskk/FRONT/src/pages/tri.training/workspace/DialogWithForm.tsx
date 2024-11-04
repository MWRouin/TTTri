import React from "react";
import { Button } from "@material-tailwind/react";
import FormCourse from "./Course/formcourse/FormCourse";

export default function CustomModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
   
      <Button
        onClick={handleOpen}
        className="text-white text-2xl rounded-3xl hover:scale-110 mt-5 "
      >
        +
      </Button>
    
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-40 backdrop-blur-sm">
          <div className="rounded-lg w-full max-w-md p-4 bg-white">
          <FormCourse handleOpen={handleOpen}/>
          </div>
        </div>
      )}
    </>
  );
}
