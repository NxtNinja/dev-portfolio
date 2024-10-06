const About = () => {
  const education = [
    { name: "WBCHSE", class: "10+2", grade: "82.6%", year: "2019 - 2021" },
    {
      name: "B.TECH",
      class: "3RD Year",
      grade: "---",
      year: "2022 - 2026",
    },
  ];
  return (
    <>
      <div className="flex flex-col h-[80dvh] justify-center items-center">
        <div className="md:space-y-7 md:w-3/4 lg:w-1/2 mx-auto flex md:mt-10 flex-col items-center h-[450px]">
          <p className="text-3xl font-bold">About Me</p>
          <div className="grid lg:grid-cols-2">
            <div className="p-3 text-sm lg:text-xl text-justify">
              I am a <span className="font-bold">Computer Science</span> Student
              currently in <span className="font-bold">2nd Year</span> of my
              course, other than college studeies I like to develop full-stack
              software applications. With a solid foundation in both{" "}
              <span className="font-bold">frontend</span> and{" "}
              <span className="font-bold">backend</span>, I am confidant of
              building highly scalable application along with writing easy to
              maintain code. Now a days I am learning about Cloud Computing and
              on a journey to be a <span className="font-bold">DevOps</span>{" "}
              engineer. Besides, my coding skills I am a{" "}
              <span className="font-bold">
                diligent learner, adaptive in nature and a confidant about my
                communication skills.
              </span>{" "}
            </div>
            <div className="p-4 flex flex-col gap-4">
              {education.map((item) => (
                <div
                  key={item.name}
                  className="w-full flex justify-between p-3 bg-foreground text-background rounded-md"
                >
                  <div className="flex flex-col">
                    <p className="font-bold md:text-lg">{item.name}</p>
                    <p className="font-mono">{item.class}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="font-bold md:text-lg font-mono">
                      Grade: {item.grade}
                    </p>
                    <p className="font-bold md:text-lg font-mono">
                      {item.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
