import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://cloudinary.hbs.edu/hbsit/image/upload/s--O0PXWnT3--/f_auto,c_fill,h_375,w_750,/v20200101/BDD0688FF02068E5C427B0954F8A2297.jpg"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React development is driven by creativity, innovation, and
              passion. Skilled developers build interactive and dynamic user
              interfaces that enhance the user experience. With reusable
              components and advanced features, React makes applications faster,
              scalable, and easy to maintain.
            </p>
            <p className="mt-4 text-gray-600">
              Passionate developers continually learn new tools, integrate
              modern APIs, and craft high-performance applications. Their
              dedication ensures that every project becomes more reliable,
              efficient, and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
