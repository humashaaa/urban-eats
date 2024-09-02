import SectionTitle from "./SectionTitle";

const Featured = () => {
    return (
        <div>
            <SectionTitle
            title={'chef recommendation'}
            subTitle={'Should try'}
            // swipper.js ei featured section e use kora 
            ></SectionTitle>

            {/* featured */}
            <p className="text-center">Featured</p>
        </div>
    );
};

export default Featured;