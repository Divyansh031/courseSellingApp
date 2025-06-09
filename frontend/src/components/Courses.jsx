import React, { useEffect, useState } from 'react'
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";
import { RiHome2Fill } from "react-icons/ri";
import { FaDiscourse } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi"; // Import menu and close icons
import logo from "../../public/logo.webp";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../utils/utils";

const Courses = () => {
    const [courses, setCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("user");
    setIsLoggedIn(!!token);
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/course/courses`, {
          withCredentials: true,
        });
        setCourses(response.data.courses);
      } catch (error) {
        console.error("Error fetching courses", error);
        toast.error("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/user/logout`, {
        withCredentials: true,
      });
      toast.success(response.data.message);
      localStorage.removeItem("user");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.errors || "Error in logging out");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 


  return (
    
   <div className="bg-gradient-to-r from-black to-blue-950 text-white min-h-screen flex flex-col md:flex-row relative">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 min-h-screen bg-gradient-to-r from-black to-blue-950 border-r w-64 p-5 z-30 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between mb-10 mt-10 md:mt-0">
          <div className="flex items-center">
            <img src={logo} alt="Profile" className="rounded-full h-12 w-12" />
            <h1 className="ml-2 text-xl text-orange-500 font-bold">EduNova</h1>
          </div>

          <button
            onClick={toggleSidebar}
            className="md:hidden text-white text-2xl"
          >
            <HiX />
          </button>
        </div>

        <nav>
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className="flex items-center text-white hover:text-red-500"
              >
                <RiHome2Fill className="mr-2" /> Home
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="#"
                className="flex items-center text-blue-500 font-semibold"
              >
                <FaDiscourse className="mr-2" /> Courses
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/purchases"
                className="flex items-center text-white hover:text-red-500"
              >
                <FaDownload className="mr-2" /> Purchases
              </Link>
            </li>
            
            <li>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="flex items-center hover:text-red-500">
                  <IoLogOut className="mr-2" /> Logout
                </button>
              ) : (
                <Link to="/login" className="flex items-center hover:text-green-500">
                  <IoLogIn className="mr-2" /> Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 md:p-10 overflow-y-auto z-0">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Top bar for mobile */}
          <div className="flex justify-between items-center md:hidden">
            <button
              onClick={toggleSidebar}
              className="text-white text-3xl mr-4"
            >
              <HiMenu />
            </button>
            <h1 className="text-2xl font-bold text-orange-500">Courses</h1>
          </div>

          {/* Search + Title for larger screens */}
          <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
            <h1 className="hidden md:block text-3xl font-bold text-orange-500 mb-2 md:mb-0">
              Courses
            </h1>
            <div className="flex w-full md:w-auto items-center space-x-2 mt-2 md:mt-0">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 bg-gray-700 text-white border border-gray-600 rounded-full px-4 py-2 focus:outline-none"
              />
              
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-center text-gray-400">Loading...</p>
          ) : filteredCourses.length === 0 ? (
            <p className="text-center text-gray-400">
              No course posted yet by admin
            </p>
          ) : (
            filteredCourses.map((course) => (
              <div
                key={course._id}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={course.image.url}
                  alt={course.title}
                  className="rounded mb-4 h-40 w-full object-cover"
                />
                <h2 className="font-bold text-lg mb-2 text-orange-500">
                  {course.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {course.description.length > 100
                    ? `${course.description.slice(0, 100)}...`
                    : course.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-xl text-green-500">
                    ${course.price}
                  </span>
                </div>
                <button
                          onClick={() => {
                            if (isLoggedIn) {
                              navigate(`/buy/${course._id}`);
                            } else {
                              toast.error("Please login to enroll in a course.");
                              navigate("/login");
                            }
                          }}
                          className="bg-orange-500 w-full text-white px-4 py-2 rounded-lg hover:bg-blue-900 duration-300 text-center block"
                        >
                          Buy Now
                        </button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Courses
