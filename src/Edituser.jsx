import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Edituser() {
  const params = useParams()
  const navigate = useNavigate
    const formik = useFormik({
        initialValues: {
          name: "",
          position: "",
          office: "",
          age: "",
          startDate: "",
          salary: ""
        },
        validate: (values)=>{
          let errors = {};
           
          if(values.name == "" ){
            errors.name = "*Please enter name"
          }
          if(values.name.length <= 3){
            errors.name = "*Please enter greter then 3"
          }
          if(values.position == ""){
            errors.position = "*Please enter position"
          }
          if(values.office == ""){
            errors.office = "*Please enter office name"
          }
          if(values.age == ""){
            errors.age = "*Please enter age"
          }
          if(values.age.length <= 1){
           errors.age ="Please enter the valied age"
          }
          if(values.startDate == ""){
            errors.startDate = "*Please enter startDate"
          }
          if(values.salary == ""){
            errors.salary = "*Please enter salary"
          }
          return errors
        },
        onSubmit: async (values) => {
         await axios.put(`https://school-01.herokuapp.com/user/${params.id}`,values)
         alert("Saccessful Edit For User")
         navigate("/portal/users")
        },
      });

       useEffect(()=>{
        loadUser()
       },[])

       let loadUser = async ()=>{
         try {
         let user = await axios.get(`https://school-01.herokuapp.com/user/${params.id}`)
         formik.setValues({
          name: user.data.name,
          position: user.data.position,
          office: user.data.office,
          age: user.data.age,
          startDate: user.data.startDate,
          salary: user.data.salary
         })
         } catch (error) {
          
         }
       }

      return (
        <>
          <div className='container'>
            <form onSubmit={formik.handleSubmit}>
              <div className='row'>
                <div className='col-lg-6'>
                  <label>Name</label>
                  <input className={`form-control ${formik.errors.name ? `input-errors` : ``}`} type={"text"} value={formik.values.name} onChange={formik.handleChange} name="name" />
                  <span style={{color:'red'}}>{formik.errors.name}</span>
                </div>
                <div className='col-lg-6'>
                  <label>Book Name</label>
                  <input className='form-control' type={"text"} value={formik.values.position} onChange={formik.handleChange} name="position" />
                  <span style={{color:'red'}}>{formik.errors.position}</span>
                </div>
                <div className='col-lg-6'>
                  <label>Address</label>
                  <input className='form-control' type={"text"} value={formik.values.office} onChange={formik.handleChange} name="office" />
                  <span style={{color:'red'}}>{formik.errors.office}</span>
                </div>
                <div className='col-lg-6'>
                  <label>Age</label>
                  <input className='form-control' type={"text"} value={formik.values.age} onChange={formik.handleChange} name="age" />
                  <span style={{color:'red'}}>{formik.errors.age}</span>
                </div>
                <div className='col-lg-6'>
                  <label>Start Date</label>
                  <input className='form-control' type={"text"} value={formik.values.startDate} onChange={formik.handleChange} name="startDate" />
                  <span style={{color:'red'}}>{formik.errors.startDate}</span>
                </div>
                <div className='col-lg-6'>
                  <label>End Date</label>
                  <input className='form-control' type={"text"} value={formik.values.salary} onChange={formik.handleChange} name="salary" />
                  <span style={{color:'red'}}>{formik.errors.salary}</span>
                </div>
                <div className='col-lg-6'>
                  <input className='btn btn-primary mt-4' type={"submit"} value="Submit" disabled={!formik.isValid} />
                </div>
              </div>
            </form>
    
    
          </div>
        </>
      )
    }

export default Edituser
