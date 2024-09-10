const Cover = ({img, title}) => {
  return (
    <div>
      <div
        className="hero h-[350px]"
        style={{
          backgroundImage:
            `url('${img}')`,
        }}
      >
        <div className="hero-overlay bg-opacity-65"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
