/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import LogoIcon from '../svg/LogoIcon';
import Footer from '../components/layout/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

export default () => (
  <>
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center max-w-full py-4 px-8">
        <a className="text-black" href="/">
          <div className="flex items-center text-2xl">
            <div className="w-12 mr-3">
              <LogoIcon />
            </div>
            MakeUC
          </div>
        </a>
        <div className="hidden md:block">
          <a href="/">
            <Button className="text-sm">Home</Button>
          </a>
        </div>
      </div>
    </header>
    <main className="text-gray-900">
      <section id="features" className="py-20 lg:pb-40 lg:pt-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Register</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <form className="w-full max-w-5xl mx-auto">
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="fullName"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="fullName"
                      type="text"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="school"
                    >
                      School
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="school"
                      type="text"
                      placeholder="Current school"
                      list="schools"
                    />
                      <datalist id="schools">
                        <option>Arizona State University</option>
                        <option>Auburn University</option>
                        <option>Boston University</option>
                        <option>Bowling Green State University</option>
                        <option>California Institute of Technology</option>
                        <option>Carleton University</option>
                        <option>Carnegie Mellon University</option>
                        <option>Case Western Reserve University</option>
                        <option>Clemson University</option>
                        <option>Cleveland State University</option>
                        <option>Colorado State University</option>
                        <option>Columbia University</option>
                        <option>Concordia University</option>
                        <option>Cornell University</option>
                        <option>Dartmouth College</option>
                        <option>Drexel University</option>
                        <option>Duke University</option>
                        <option>George Washington University</option>
                        <option>Georgia Institute of Technology</option>
                        <option>Harvard University</option>
                        <option>Henry Ford College</option>
                        <option>Illinois State University</option>
                        <option>Johns Hopkins University</option>
                        <option>Kent State University</option>
                        <option>Loyola University Chicago</option>
                        <option>Massachusetts Institute of Technology</option>
                        <option>McGill University</option>
                        <option>McMaster University</option>
                        <option>Miami University</option>
                        <option>Michigan State University</option>
                        <option>New York University</option>
                        <option>North Carolina State University</option>
                        <option>Northeastern University</option>
                        <option>Northwestern University</option>
                        <option>Ohio State University</option>
                        <option>Oregon State University</option>
                        <option>Pennsylvania State University</option>
                        <option>Purdue University</option>
                        <option>Rice University</option>
                        <option>Rutgers University</option>
                        <option>Stanford University</option>
                        <option>Stony Brook University</option>
                        <option>Syracuse University</option>
                        <option>Tufts University</option>
                        <option>University at Buffalo</option>
                        <option>University of Akron</option>
                        <option>University of Alberta</option>
                        <option>University of Arizona</option>
                        <option>University of British Columbia</option>
                        <option>University of Calgary</option>
                        <option>University of California, Berkeley</option>
                        <option>University of California, Davis</option>
                        <option>University of California, Irvine</option>
                        <option>University of California, Los Angeles</option>
                        <option>University of California, San Diego</option>
                        <option>University of California, Santa Barbara</option>
                        <option>University of Central Florida</option>
                        <option>University of Chicago</option>
                        <option>University of Cincinnati</option>
                        <option>University of Colorado Boulder</option>
                        <option>University of Connecticut</option>
                        <option>University of Dayton</option>
                        <option>University of Delaware</option>
                        <option>University of Florida</option>
                        <option>University of Houston</option>
                        <option>University of Kentucky</option>
                        <option>University of Louisville</option>
                        <option>University of Massachusetts Amherst</option>
                        <option>University of Michigan</option>
                        <option>University of Minnesota Twin Cities</option>
                        <option>University of Notre Dame</option>
                        <option>University of Pennsylvania</option>
                        <option>University of Pittsburgh</option>
                        <option>University of Southern California</option>
                        <option>University of Tennessee</option>
                        <option>University of Texas at Austin</option>
                        <option>University of Texas at Dallas</option>
                        <option>University of Toledo</option>
                        <option>University of Toronto</option>
                        <option>University of Utah</option>
                        <option>University of Victoria</option>
                        <option>University of Virginia</option>
                        <option>University of Washington</option>
                        <option>University of Waterloo</option>
                        <option>University of Wisconsin-Madison</option>
                        <option>Vanderbilt University</option>
                        <option>Virginia Tech</option>
                        <option>Washington University in St. Louis</option>
                        <option>Wright State University</option>
                        <option>Xavier University</option>
                        <option>Yale University</option>
                      </datalist>
                  </div>
                  
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="degree"
                    >
                      Degree
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="degree"
                      type="text"
                      placeholder="Degree"
                      list="degrees"
                    />
                      <datalist id="degrees">
                        <option>Bachelor's</option>
                        <option>Master's</option>
                        <option>Doctorate</option>
                        <option>High School</option>
                      </datalist>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="degree"
                    >
                      Major
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="major"
                      type="text"
                      placeholder="Major"
                      list="majors"
                    />
                    <datalist id="majors">
                      <option>Aerospace Engineering</option>
                      <option>Computer Engineering</option>
                      <option>Computer Science</option>
                      <option>Cyber Security</option>
                      <option>Chemical Engineering</option>
                      <option>Civil Engineering</option>
                      <option>Electrical Engineering</option>
                      <option>Engineering Science</option>
                      <option>Engineering Technology</option>
                      <option>Environmental Engineering</option>
                      <option>Engineering Science</option>
                      <option>Industrial Engineering</option>
                      <option>Information Technology</option>
                      <option>Mechanical Engineering</option>
                      <option>Metallurgic Engineering</option>
                      <option>Petroleum Engineering</option>
                      <option>Software Development</option>
                      <option>Software Engineering</option>
                      <option>User Experience Design</option>
                    </datalist>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="graduation"
                    >
                      Expected Graduation Year
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="graduation"
                      type="text"
                      placeholder="2023"
                      maxLength="4"
                    />                    
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="hackathonsAttended"
                    >
                      Number of Hackathons Attended
              
                    </label>
                    <select
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option selected>Select an option</option>
                      <option>This is my first hackathon!</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4 or more</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="resumeURL"
                    >
                      Resume (optional but highly recommended if you're interested in full time positions and internships)
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="resumeURL"
                      type="file"
                    />
                    </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="ethnicity"
                    >
                      Ethnicity
                    </label>
                    <select
                      className="shadow appearance-none border  w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option selected>Select an option</option>
                      <option>American Indian or Alaska Native</option>
                      <option>Asian</option>
                      <option>Black or African American</option>
                      <option>Native Hawaiian or Other Pacific Islander</option>
                      <option>White</option>
                      <option>Other</option>
                      <option>Prefer not to answer</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      className="shadow appearance-none border w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option selected>Select an option</option>                      
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                      <option>Prefer not to answer</option>
                    </select>
                  </div>
                  <div className="mb-4 text-left">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="questions"
                    >
                      Questions or Concerns
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      name="questions"
                      type="text"
                      placeholder="Questions or concerns"
                    />
                    </div>
                  <div className="md:items-center py-20 lg:pb-20 lg:pt-10">
                    <button
                      className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);