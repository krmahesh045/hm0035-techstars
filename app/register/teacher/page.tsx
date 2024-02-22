// Purpose: This file contains the student registration page.
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import axios from "axios";

interface TeacherRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
  role: string;
  matchtest: {
    teachstyle: {
      visual: boolean;
      auditory: boolean;
      kinesthetic: boolean;
    };
    communication: {
      recordedLecture: boolean;
      message: boolean;
      videoCall: boolean;
    };
    goal: {
      clarifyConcept: boolean;
      improveGrades: boolean;
      prepareForExam: boolean;
      careerGuidance: boolean;
    };
    availability: {
      _1_2: boolean;
      _3_5: boolean;
      _6: boolean;
    };
    experience: {
      _1_3: boolean;
      _4_6: boolean;
      _7: boolean;
    };
    subject: {
      aiml: boolean;
      webdev: boolean;
      appdev: boolean;
    };
    pace: {
      slow: boolean;
      moderate: boolean;
      fast: boolean;
    };
    teachingMethod: {
      exampleBased: boolean;
      interactionBased: boolean;
      problemBased: boolean;
    };
    mentoringExperience: {
      yes: boolean;
      no: boolean;
    };
    teachingChallenge: {
      learningStyle: boolean;
      timeManagement: boolean;
      studentEngagement: boolean;
    };
    studentCharacter: {
      enthusiastic: boolean;
      selfMotivated: boolean;
      curious: boolean;
    };
  };
}

const TeacherRegisterPage = () => {
  const [form, setForm] = React.useState<TeacherRegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
    role: "mentor",
    matchtest: {
      teachstyle: {
        visual: false,
        auditory: false,
        kinesthetic: false,
      },
      communication: {
        recordedLecture: false,
        message: false,
        videoCall: false,
      },
      goal: {
        clarifyConcept: false,
        improveGrades: false,
        prepareForExam: false,
        careerGuidance: false,
      },
      availability: {
        _1_2: false,
        _3_5: false,
        _6: false,
      },
      experience: {
        _1_3: false,
        _4_6: false,
        _7: false,
      },
      subject: {
        aiml: false,
        webdev: false,
        appdev: false,
      },
      pace: {
        slow: false,
        moderate: false,
        fast: false,
      },
      teachingMethod: {
        exampleBased: false,
        interactionBased: false,
        problemBased: false,
      },
      mentoringExperience: {
        yes: false,
        no: false,
      },
      teachingChallenge: {
        learningStyle: false,
        timeManagement: false,
        studentEngagement: false,
      },
      studentCharacter: {
        enthusiastic: false,
        selfMotivated: false,
        curious: false,
      },
    },
  });

  const handleRegister = async () => {
    console.log(form);
      try {
        // Make a POST request to your API route
        const response = await axios.post('/api/register', form);

        if (response.data.message === 'Student Created.' || response.data.message === 'Mentor Created.') {
          // Handle success, e.g., show a success message
          console.log(response.data.message);
        } else {
          // Handle error, e.g., show an error message
          console.error('Registration failed');
        }
      } catch (error) {
        console.error(error);
      }
  }

  return (
    <div className="h-screen w-screen p-5   ">
      {/* topbar */}
      <div className="h-[10vh] w-screen flex bg-white gap-5 items-center fixed">
        <svg
          width="48"
          height="48"
          viewBox="0 0 717 717"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="m333 276l80-81c7-7 15-16 23-26c8-9 17-17 26-24c17-15 37-28 62-28c22 0 41 10 55 23s22 32 22 54c0 9-1 19-4 26c-7 14-13 24-19 32c-3 4-6 8-6 12c0 3 0 6 2 7c11 27 19 50 24 78c3 11 9 16 19 16c4 0 8-1 12-4c8-5 15-13 22-21c4-4 7-8 9-10c36-35 57-85 57-136c0-54-22-102-57-137c-35-34-84-57-136-57S422 21 387 58L250 194c-36 37-56 85-56 136c0 15 6 46 16 75c10 28 23 53 40 53c9 0 28-15 44-32s32-36 32-43c0-5-4-11-8-20c-5-9-7-20-7-33c0-20 8-40 22-54m-3 384l137-136c36-35 56-86 56-137c0-15-6-45-16-74c-9-28-23-54-40-54c-7 0-28 16-43 33c-17 17-33 35-33 42c0 5 3 13 8 21c5 9 9 19 9 32c-1 20-9 40-23 56l-81 80c-7 8-15 16-23 25l-25 25c-17 16-38 27-63 27c-42 0-76-33-76-76c0-10 2-19 5-26c6-14 12-24 19-32c3-4 4-8 4-11c0-2-1-4-2-8c-12-27-19-50-24-78c-2-5-3-9-6-11c-3-4-8-5-13-5c-4 0-7 1-11 4c-8 5-16 13-23 21c-3 4-7 7-9 9c-36 36-57 86-57 137c0 53 21 102 57 137c35 35 83 56 136 56c52 0 102-20 137-57"
          />
        </svg>
        <h1 className="text-4xl font bold ">MentorLink</h1>
      </div>

      <div className="flex  w-screen ml-1/3 mt-[100px]">

      {/* form 1 */}
        <div className="h-[90vh]  border-2   border-zinc-400 p-5 w-[424px] rounded-xl   ">
          <h1 className="text-3xl  font-bold mb-10"> Personal Information</h1>

          <div className="flex flex-col gap-3 ">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="p-2 bg-transparent rounded-md border-2 border-zinc-500 w-96 mb-2"
              value={form.name}
              onChange={(e) => {
                setForm({ ...form, name: e.target.value });
              }}
            />
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="p-2 bg-transparent rounded-md border-2 border-zinc-500 w-96 mb-2"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />

            <label htmlFor="Password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="p-2 bg-transparent rounded-md border-2 border-zinc-500 w-96 mb-2"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />

            <label htmlFor="ConfirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="p-2 bg-transparent rounded-md border-2 border-zinc-500 w-96 mb-2"
              value={form.confirmPassword}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
              }}
            />
            <label htmlFor="Phone">Phone</label>
            <input
              type="text"
              placeholder="Phone"
              className="p-2 bg-transparent rounded-md border-2 border-zinc-500 w-96 mb-2"
              value={form.phone}
              onChange={(e) => {
                setForm({ ...form, phone: e.target.value });
              }}
            />
            <label htmlFor="Address">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="p-2 bg-transparent rounded-md border-2 border-zinc-500 w-96 mb-2"
              value={form.address}
              onChange={(e) => {
                setForm({ ...form, address: e.target.value });
              }}
            />
          </div>
        </div>

        {/* Profile form 2 */}
        <div className=" bg-zinc-100 border-xl w-[1300px] h-full  rounded-xl ml-4  p-4  ">
          <h1 className="text-3xl font-bold mb-10 mt-4">
            Complete Mentor Profile{" "}
          </h1>

            {/* form container */}
          <div className="flex border-t-2 border-zinc-600 pt-4">

            {/* left side */}
            <div className="flex w-1/2 flex-col gap-7">
              <span className="flex flex-col">
                <b>Teaching Style:</b> How would you describe your teaching
                style?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachstyle.visual}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachstyle: {
                              ...form.matchtest.teachstyle,
                              visual: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Visual
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachstyle.auditory}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachstyle: {
                              ...form.matchtest.teachstyle,
                              auditory: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Auditory
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachstyle.kinesthetic}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachstyle: {
                              ...form.matchtest.teachstyle,
                              kinesthetic: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Kinesthetic
                  </div>
                </div>
              </span>

              <span className="flex flex-col">
                <b>Preferred Communication: </b>What is your preferred mode of
                communication with students?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="checkbox"
                      //  checked={form.matchtest.communication.recordedLecture}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            communication: {
                              ...form.matchtest.communication,
                              recordedLecture: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Recorded Lectures
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.communication.message}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            communication: {
                              ...form.matchtest.communication,
                              message: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Messages
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.communication.videoCall}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            communication: {
                              ...form.matchtest.communication,
                              videoCall: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Video Call
                  </div>
                </div>
              </span>

              <span className="flex flex-col">
                <b>Goals: </b> What are your academic or career goals?
                <div className="flex flex-col">
                  <div className="flex flex-col">
                    <div className="m-2">
                      <input
                        type="checkbox"
                        checked={form.matchtest.goal.clarifyConcept}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            matchtest: {
                              ...form.matchtest,
                              goal: {
                                ...form.matchtest.goal,
                                clarifyConcept: e.target.checked,
                              },
                            },
                          });
                        }}
                      />{" "}
                      Clarify Concepts
                    </div>
                    <div className="m-2">
                      <input
                        type="checkbox"
                        checked={form.matchtest.goal.improveGrades}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            matchtest: {
                              ...form.matchtest,
                              goal: {
                                ...form.matchtest.goal,
                                improveGrades: e.target.checked,
                              },
                            },
                          });
                        }}
                      />{" "}
                      Improve Grades
                    </div> 
                    
                    <div className="m-2">
                      <input
                        type="checkbox"
                        checked={form.matchtest.goal.prepareForExam}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            matchtest: {
                              ...form.matchtest,
                              goal: {
                                ...form.matchtest.goal,
                                prepareForExam: e.target.checked,
                              },
                            },
                          });
                        }}
                      />{" "}
                      Prepare for Exam
                    </div>
                    <div className="m-2">
                      <input
                        type="checkbox"
                        checked={form.matchtest.goal.careerGuidance}
                        onChange={(e) => {
                          setForm({
                            ...form,
                            matchtest: {
                              ...form.matchtest,
                              goal: {
                                ...form.matchtest.goal,
                                careerGuidance: e.target.checked,
                              },
                            },
                          });
                        }}
                      />{" "}
                      Career Guidance
                    </div>

                  </div>

                </div>
              </span>

              <span className="flex flex-col">
                <b>Avaliability: </b>When are you available to teach?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.availability._1_2}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            availability: {
                              ...form.matchtest.availability,
                              _1_2: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    1-2 hours
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.availability._3_5}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            availability: {
                              ...form.matchtest.availability,
                              _3_5: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    3-5 hours
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.availability._6}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            availability: {
                              ...form.matchtest.availability,
                              _6: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    6+ hours
                  </div>
                </div>
              </span>

<<<<<<< HEAD
{/* radio button */}
              <span className="flex flex-col">
=======
              {/* <span className="flex flex-col">
>>>>>>> 003ebd0f71655caeba2077c2377e13566aab3fb9
                <b>Experience: </b>How many years of teaching experience do you
                have?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="radio"
                      name="experience"
                      checked={form.matchtest.experience._1_3}
                      onChange={() => {
                        setForm({
                          ...form,
                          matchtest: { ...form.matchtest, experience: {
                            _1_3: true,
                            _4_6: false,
                            _7: false
                          }},
                        });
                      }}
                    />{" "}
                    1-3 years
                  </div>
                  <div className="m-2">
                    <input
                      type="radio"
                      name="experience"
                      checked={form.matchtest.experience._4_6}
                      onChange={() => {
                        setForm({
                          ...form,
                          matchtest: { ...form.matchtest, experience: {
                            _1_3:false,
                            _4_6: true,
                            _7: false
                          },
                        }
                        });
                      }}
                    />{" "}
                    4-6 years
                  </div>
                  <div className="m-2">
                    <input
                      type="radio"
                      name="experience"
                      checked={form.matchtest.experience._7}
                      onChange={() => {
                        setForm({
                          ...form,
                          matchtest: { ...form.matchtest, experience: {
                            _1_3:false,
                            _4_6: false,
                            _7: true
                          } },
                        });
                      }}
                    />{" "}
                    7+ years
                  </div>
                </div>
              </span> */}

             
            </div>

            {/* right side */}
            <div className="flex w-1/2 flex-col gap-7">
            <span className="flex flex-col">
                <b>Subject: </b>Which subjects can you teach?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.subject.aiml}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            subject: {
                              ...form.matchtest.subject,
                              aiml: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    AI/ML
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.subject.webdev}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            subject: {
                              ...form.matchtest.subject,
                              webdev: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Web Development
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.subject.appdev}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            subject: {
                              ...form.matchtest.subject,
                              appdev: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    App Development
                  </div>
                </div>
              </span>

              <span className="flex flex-col">
                <b>Pace: </b>What is your preferred pace of teaching?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.pace.slow}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            pace: {
                              ...form.matchtest.pace,
                              slow: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Slow
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.pace.moderate}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            pace: {
                              ...form.matchtest.pace,
                              moderate: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Moderate
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.pace.fast}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            pace: {
                              ...form.matchtest.pace,
                              fast: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Fast
                  </div>
                </div>
              </span>

              <span className="flex flex-col">
                <b>Teaching Method: </b>What is your preferred method of
                teaching?
                <div className="flex flex-col">
                <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachingMethod.exampleBased}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachingMethod: {
                              ...form.matchtest.teachingMethod,
                              exampleBased: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Example Based
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachingMethod.interactionBased}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachingMethod: {
                              ...form.matchtest.teachingMethod,
                              interactionBased: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Interaction Based
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachingMethod.problemBased}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachingMethod: {
                              ...form.matchtest.teachingMethod,
                              problemBased: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Problem Based
                  </div>
                </div>
              </span>

<<<<<<< HEAD
{/* radio button */}
              <span className="flex flex-col">
=======
              {/* <span className="flex flex-col">
>>>>>>> 003ebd0f71655caeba2077c2377e13566aab3fb9
                <b>Mentoring Experience: </b>Do you have any experience in
                mentoring?
                <div className="flex flex-col">
                <div className="m-2">
                    <input
                      type="radio"
                      name="mentoringExperience"
                      checked={form.matchtest.mentoringExperience.yes}
                      onChange={() => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            mentoringExperience: {
                              yes:true,
                              no:false
                            }
                          },
                        });
                      }}
                    />{" "}
                    Yes
                  </div>
                  <div className="m-2">
                    <input
                      type="radio"
                      name="mentoringExperience"
                      checked={form.matchtest.mentoringExperience.no}
                      onChange={() => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            mentoringExperience: {
                              yes:false,
                              no:true
                            },
                          },
                        });
                      }}
                    />{" "}
                    No
                  </div>
                </div>
              </span> */}

              <span className="flex flex-col">
                <b>Teaching Challenge: </b>What is your biggest challenge in
                teaching?
                <div className="flex flex-col">
                <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachingChallenge.learningStyle}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachingChallenge: {
                              ...form.matchtest.teachingChallenge,
                              learningStyle: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Learning Style
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.teachingChallenge.timeManagement}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachingChallenge: {
                              ...form.matchtest.teachingChallenge,
                              timeManagement: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Time Management
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={
                        form.matchtest.teachingChallenge.studentEngagement
                      }
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            teachingChallenge: {
                              ...form.matchtest.teachingChallenge,
                              studentEngagement: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Student Engagement
                  </div>
                </div>
              </span>

              <span className="flex flex-col">
                <b>Student Character: </b>What kind of students do you prefer?
                <div className="flex flex-col">
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.studentCharacter.enthusiastic}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            studentCharacter: {
                              ...form.matchtest.studentCharacter,
                              enthusiastic: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Enthusiastic
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.studentCharacter.selfMotivated}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            studentCharacter: {
                              ...form.matchtest.studentCharacter,
                              selfMotivated: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Self Motivated
                  </div>
                  <div className="m-2">
                    <input
                      type="checkbox"
                      checked={form.matchtest.studentCharacter.curious}
                      onChange={(e) => {
                        setForm({
                          ...form,
                          matchtest: {
                            ...form.matchtest,
                            studentCharacter: {
                              ...form.matchtest.studentCharacter,
                              curious: e.target.checked,
                            },
                          },
                        });
                      }}
                    />{" "}
                    Curious
                  </div>
                </div>
              </span>

              <Button className=" text-white w-72 mt-10 ml-40 p-2 rounded-md" onClick={handleRegister}>
                <Link href="/register/success">Register</Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherRegisterPage;
