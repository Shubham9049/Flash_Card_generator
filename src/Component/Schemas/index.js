import * as Yup from "yup"


const SUPPORTED_FORMATS=["image/jpg","image/jpeg","image/png"];
export const signUpSchemas= Yup.object({
  file:Yup.mixed().nullable().required().test("FILE_SIZE","Uploaded file is too big",(value)=> !value || (value && value.size <=1024*1024)).test(
    "FILE_TYPE",
    "Uploaded file is unsupported",
    (value)=> !value || (value && SUPPORTED_FORMATS.includes(value?.type))
),
CreateGroup:Yup.string().min(5).max(25).required("please enter Group name"),
description:Yup.string().min(25).max(500).required("please add Description"),
team: Yup.array(
  Yup.object({
      Enter_Team: Yup.string().min(5, 'At least 5 characters').max(20,'Max 20 characters').required("Please Enter Term") ,
      Team_Definition: Yup.string().min(10, 'At least 10 characters').max(200,'Max 200 characters').required("Please enter Definition") ,
  })
),
team_image:Yup.mixed().nullable().required().test("FILE_SIZE","Uploaded file is too big",(value)=> !value || (value && value.size <=1024*1024)).test(
  "FILE_TYPE",
  "Uploaded file is unsupported",
  (value)=> !value || (value && SUPPORTED_FORMATS.includes(value?.type))
)
})
