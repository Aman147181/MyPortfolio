
const WorkComponent = ({ imgurl, desc, worklink }) => {
  

  return (
    <div className="flex flex-col sticky top-36 space-y-0">
      <div className="w-full hover:shadow-lg max-w-4xl min-w-[314px] customsm:min-w-[340px]  bg-black h-[420px] sm:h-[500px] relative overflow-hidden">
        <a href={worklink}>
          <img   src={imgurl} alt={desc.one} />
        </a>
      </div>
      <div className="flex justify-between bg-black px-5 leading-5 text-xl pt-5 font-truculenta">
        <h1>{desc.one}</h1>
        <h1>{desc.two}</h1>
      </div>
    </div>
  );
};

export default WorkComponent;
