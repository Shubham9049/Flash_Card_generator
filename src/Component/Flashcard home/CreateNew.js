import React, { useRef } from 'react'
import { Form, Field, Formik, FieldArray } from 'formik';
import PreviewImage from './PreviewImage';
import { signUpSchemas } from '../Schemas';
import ShowError from './ShowError';
import { FaFileUpload } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TiDeleteOutline } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';
import { TbEdit } from 'react-icons/tb';
import { BsPlus } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';





function CreateNew() {
  // const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];
  const fileRef = useRef(null);

  const inputRef = useRef([]);
  inputRef.current = [];
  const addRefs = (el) => {
    if (el && !inputRef.current.includes(el)) {
      inputRef.current.push(el);
    }
  }

  return (
    <>
      <ToastContainer />
      <Formik
        validationSchema={signUpSchemas}
        initialValues={{
          CreateGroup: "",
          file: null,
          Team_img: null,
          description: "",
          team: [{
            Enter_Team: "",
            Team_Definition: "",
            team_image: '',
          }],

        }}
        onSubmit={(values) => {
          console.log(values)
        }}>
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <div className='bg-white p-7 my-2 drop-shadow-md rounded-lg'>
              <div className='flex flex-wrap'>
                <div className='w-96 px-3'>
                  <label className='text-grey-500 font-bold' htmlFor="Create-New">Create Group*</label>
                  <Field className="appearance-none block w-full my-2 bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="CreateGroup"
                    placeholder="Create Group"
                  />
                  <ShowError name="CreateGroup" />

                </div>
                <div className='flex space-x-0 px-8'>
                  {values.file ? <AiOutlineCloseCircle className='text-3xl text-blue-600 ' onClick={(event) => setFieldValue('file', event.target.files)} /> : <input
                    ref={fileRef}
                    hidden
                    type="file" onChange={(event) => {
                      setFieldValue('file', event.target.files[0])
                    }} />}


                  <FaFileUpload className='mt-10 text-blue-700 bg-gray-200  ' />
                  <button className='text-blue-700 w-32 h-10 mt-7 font-bold rounded   bg-gray-200 text-left' onClick={() => {
                    fileRef.current.click();
                  }}> Upload Image</button>

                  {values.file && <PreviewImage file={values.file} />}




                </div>

                <ShowError name="file" />
                <div className='w-full my-2 px-3'>
                  <label className='text-grey-500 font-bold' htmlFor="description"> Add Description</label>
                  <Field as="textarea" className="block my-2 p-2.5 w-3/5 text-sm text-gray-700  rounded  border-gray-200  focus:border-gray-500 focus:bg-white bg-gray-200" rows="3" name="description"
                    placeholder="Please add description"
                  />
                  <ShowError name="description" />

                </div>
              </div>
            </div>

            <FieldArray

              name="team"
              render={arrayHelpers => (
                <div className='bg-white dark:bg-gray-800 p-7 my-4 drop-shadow-md rounded-lg'>
                  {values.team && values.team.length > 0 ? (
                    values.team.map((team, index) => (
                      <div key={index} className='my-5 flex flex-wrap'>
                        <div className="flex  items-center justify-center h-9 w-9 my-5 rounded-full text-white bg-red-500 ">{index + 1}</div>
                        <div className=" w-[410px] px-3">
                          <label
                            className=" text-grey-500 font-bold "
                            htmlFor={`Team.${index}.Enter_Team`}>
                            Enter Team*
                          </label>
                          <input
                            ref={addRefs}
                            className="appearance-none block w-full my-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name={`team.${index}.Enter_Team`}
                            id={`team.${index}.Enter_Team`}
                            value={team.Enter_Team}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            placeholder="Team Name" />
                          <ShowError
                            component="span"
                            name={`team.${index}.Enter_Team`} />
                        </div>
                        <div className=" w-[410px] px-3">
                          <label className=" text-grey-500 font-bold "
                            htmlFor={`team.${index}.Team_Definition`}>
                            Enter Definition*
                          </label>
                          <Field className="appearance-none block w-full my-2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id={`team.${index}.Team_Definition`}
                            name={`team.${index}.Team_Definition`}
                            value={team.Team_Definition}
                            type="text"
                            placeholder="Team_Definition" />
                          <ShowError component="span" name={`team.${index}.Team_Definition`} />

                        </div>
                        <div className='flex'>

                          {/* *********************Team_img************** */}
                          {
                            team.team_image ? ((<div className='flex  '> <img className='h-16 mt-2  max-w-[12rem]' src={team.team_image} alt="" /> <TiDeleteOutline className='text-3xl text-red-600' onClick={() => setFieldValue(`team.${index}.team_image`, '')} /> </div>)) :
                              (<label htmlFor={`team.${index}.team_image`} className="w-44 h-[38px] cursor-pointer px-3 mx-3 mt-8 py-1 bg-gray-200 border-gray-200 flex  items-center justify-center  rounded" >
                                <span className='text-blue-700 font-bold'>Select Image</span>
                              </label>)

                          }
                          <input
                            onChange={(event) => {

                              if(event.target.files[0].size <= 1024 * 1024 * 10){
                                const file = event.target.files[0];
                                const reader = new FileReader();
                                reader.readAsDataURL(file);
                                reader.onload = () => {
                                  setFieldValue(`team.${index}.team_image`, reader.result);
                              }
                            }else{
                              <ShowError name={`team.${index}.team_image`}/>
                            }
                            }
                          }
                            className='hidden'
                            id={`team.${index}.team_image`}
                            name={`team.${index}.team_image`}
                            type="file" />
                          {/* team img end */}
                          {
                            values.team.length <= 1 ? "" :
                              <MdDelete className='text-[1.8em] dark:text-blue-700 dark:hover:text-red-500 m-2 cursor-pointer hover:text-red-500' onClick={() => arrayHelpers.remove(index)} />
                          }
                          <TbEdit className='text-[1.8em] text-blue-700 m-2 cursor-pointer hover:text-blue-900'
                            onClick={() => { inputRef.current[index].focus() }} />
                        </div>

                        <div onClick={() => arrayHelpers.insert(values.team.length + 1, {
                          Enter_Team: "",
                          team_Definition: "",
                          team_image: '',
                        })} className="my-5 cursor-pointer w-24 mx-5 text-blue-700">
                          <BsPlus className='inline-block' /> Add more</div>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all team from the list */}
                      Add a friend
                    </button>
                  )}

                </div>
              )}

            />

            <div>
              <div className='h-25 flex items-center justify-center'>
                <button className='bg-red-600 rounded hover:bg-red-700 text-white font-bold py-2 px-14 ' type="submit">Create</button>
              </div>
            </div>
          </Form>
        )}



      </Formik>
    </>
  )
}

export default CreateNew
