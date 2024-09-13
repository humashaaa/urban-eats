import img1 from "../assets/special1.jpg";
import img2 from "../assets/special2.jpg";
import img3 from "../assets/special3.jpg";
import img4 from "../assets/special4.jpg";
import img5 from "../assets/special5.jpg";
import img6 from "../assets/special6.jpg";
import Chefcard from "./Chefcard";



const Chefspecial = () => {
  return (
    
    <div className="mt-16 grid grid-cols-3">
      {/* 1 */}
     <div>
     <Chefcard
        img={img1}
        name={"Grilled Salmon"}
        description={`Perfectly grilled salmon accompanied by sautéed vegetables and a
            side of mashed potatoes`}
        price={"25"}
      ></Chefcard>
     </div>
      {/* 2 */}
      <div>
      <Chefcard
        img={img2}
        name={"Hearty Vegetable Soup"}
        description={`A comforting blend of seasonal vegetables simmered in a flavorful broth, enriched with herbs and spices.`}
        price={"19"}
      ></Chefcard>
      </div>
      {/* 3 */}
      <div>
      <Chefcard
        img={img3}
        name={"Beef Brisket"}
        description={`Slow-cooked beef brisket with aromatic spices, served with roasted vegetables and a rich gravy. `}
        price={"26"}
      ></Chefcard>
      </div>
      {/* 4 */}
      <div>
      <Chefcard
        img={img4}
        name={"Caviar Spaghetti"}
        description={`Elegant spaghetti tossed in a light champagne cream sauce, topped with delicate caviar and fresh chives.`}
        price={"20"}
      ></Chefcard>
      </div>
      {/* 5 */}
      <div>
      <Chefcard
        img={img5}
        name={"Truffle-Infused Mashed Potatoes"}
        description={`Creamy mashed potatoes blended with rich truffle oil and topped with parmesan shavings.`}
        price={"18"}
      ></Chefcard>
      </div>
      {/* 6 */}
      <div>
      <Chefcard
        img={img6}
        name={"Golden Caramel Pudding"}
        description={` A rich, creamy caramel pudding topped with gold flakes, offering a luxurious twist to a classic dessert.`}
        price={"23"}
      ></Chefcard>
      </div>
    </div>
  );
};

export default Chefspecial;
