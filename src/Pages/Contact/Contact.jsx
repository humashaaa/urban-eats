import { FiMapPin } from "react-icons/fi";
import "./contact.css";
import { motion } from "framer-motion";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  // map

  return (
    <div className="">
      {/* banner */}
      <div className="contact-banner mx-auto">
        <h1 className="font-bold text-6xl uppercase text-white absolute top-1/2 left-[33rem]">
          contact us
        </h1>
      </div>
      {/* form */}

      <div className="flex justify-center items-center gap-7 mt-16">
        {/* message */}

        <div className="mt-3">
          <motion.section
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            className="p-2 lg:p-4 w-[22rem] lg:w-[35rem]  bg-white rounded-md  flex-1 md:min-h-[350px] "
          >
            <h2 className=" mb-4 space-y-4  text-gray-700 font-bold text-2xl uppercase ">
              message me
            </h2>

            <form
              // ref={form} onSubmit={sendEmail}
              className=""
            >
              <div className="">
                <div className="grid grid-cols-1 w-80 lg:w-full gap-4 mt-4 sm:grid-cols-2">
                  <div>
                    <div>
                      <input
                        id="=name"
                        type="name"
                        name="from_name"
                        placeholder="Name"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      id="emailAddress"
                      type="email"
                      name="from_email"
                      placeholder="Email"
                      className="block w-full px-4  py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <input
                      id="comment"
                      name="message"
                      type="text"
                      placeholder="Message"
                      className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md h-40 w-80 lg:w-[33rem]"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <button
                    // onClick={notify}
                    type="submit"
                    value="Send"
                    className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-400 rounded-sm"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </motion.section>
        </div>

        {/* contact */}

        <div className="">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
          >
            <h1 className="font-bold text-2xl uppercase mb-5">contact info</h1>
            <p className="text-slate-600 w-[27rem] mb-5">
              Get in Touch with UrbanEats! Whether you have a question,
              feedback, or a special request, we're here to help. Reach out to
              us for reservations, catering inquiries, or any other assistance.
              Feel free to drop us a message or give us a call—we’re always
              ready to serve you!
            </p>
            <div className="flex flex-col items-start justify-center space-y-4">
              <div className="flex items-center justify-center gap-2 ">
                <p className="bg-red-400 rounded-full text-white text-2xl p-2">
                  <FiMapPin />
                </p>
                <div>
                  <h1 className="font-bold text-xl">Location :</h1>
                  <h1 className="text-slate-600 text-semibold">
                    Akbar Bhaban, Rajendrapur, Gazipur, Bangladesh
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 ">
                <p className="bg-red-400 rounded-full text-white text-2xl p-2">
                  <MdOutlineMail />
                </p>
                <div>
                  <h1 className="font-bold text-xl">Email :</h1>
                  <h1 className="text-slate-600 text-semibold">
                    urbaneatscustomer@gmail.com
                  </h1>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 ">
                <p className="bg-red-400 rounded-full text-white text-2xl p-2">
                  <IoCallOutline />
                </p>
                <div>
                  <h1 className="font-bold text-xl">Phone :</h1>
                  <h1 className="text-slate-600 text-semibold">
                    +880 888 888 8888
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* map */}
      <div >
        <iframe className="w-2/3 mx-auto mb-28 mt-32"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3642.0675973805737!2d90.44792687480268!3d24.099118175300585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d7006e71c33b%3A0x5985e54d93e34ec4!2sUrban%20Eats%20Restaurant!5e0!3m2!1sen!2sbd!4v1725543907609!5m2!1sen!2sbd"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
