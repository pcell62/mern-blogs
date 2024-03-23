import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white  "
            >
              <span className="px-2 py-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate rounded-lg text-white">
                BlogSphere
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_bank"
                  rel="noopener noreferrer"
                >
                  BlogSphere
                </Footer.Link>
                <Footer.Link
                  href="https://github.com/pcell62"
                  target="_bank"
                  rel="noopener noreferrer"
                >
                  Priyanshu Kumar
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Me" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link
                  href="https://github.com/pcell62"
                  target="_bank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="flex justify-between items-center md:flex-row flex-col ">
          <Footer.Copyright
            href="#"
            by="BlogSphere"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-2 justify-center mt-3">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsLinkedin} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
