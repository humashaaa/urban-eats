
const SectionTitle = ({title, subTitle}) => {
    return (
        <div>
            <h1 className="text-bold text-2xl text-yellow-700 uppercase mt-8 text-center">{title}</h1>
            <h2 className=" text-xl text-gray-600 text-center mt-4">{subTitle}</h2>
            
        </div>
    );
};

export default SectionTitle;