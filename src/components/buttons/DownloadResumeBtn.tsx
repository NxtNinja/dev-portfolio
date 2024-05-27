import { Button } from "@nextui-org/button";

const DownloadResumeBtn = () => {
  const downloadResume = () => {
    const resume = "/PRIYANGSU_BANIK_RESUME_DEV.pdf";
    const link = document.createElement("a");
    link.href = resume;
    link.download = "PRIYANGSU_BANIK_RESUME_DEV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      <Button
        onClick={downloadResume}
        className="w-full md:w-fit border-2 font-semibold text-background rounded-md py-2 px-7 bg-foreground"
        radius="sm"
      >
        Download Resume
      </Button>
    </>
  );
};

export default DownloadResumeBtn;
