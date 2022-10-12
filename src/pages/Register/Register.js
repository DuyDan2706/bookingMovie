import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
// import show from "../../assets/images/show.png";
// import hide from "../../assets/images/hide.png";
// import { NavLink, Redirect } from "react-router-dom";
import { GROUPID, USER_LOGIN } from '../../util/settings/config';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { dangKiTaiKhoanAction } from '../../redux/actions/QuanLyNguoiDungAction';

import logoAvatar from "../../assets/images/user-regular.svg";
import { NavLink } from 'react-router-dom';
import { YoutubeFilled } from '@ant-design/icons';
import MenuItem from 'antd/lib/menu/MenuItem';

export default function Register() {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      // maNhom: '',

      fullName: '',
      gender: '',
      date: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      // email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().required('Password is required').min(6, "Too short"),
      // confirmPassword: Yup.string().oneOf([Yup.ref('matKhau'), null], 'Passwords must match'),
      fullName: Yup.string().min(6, "Too Short!"),
      phone: Yup.number().typeError("Must be number!").min(10, "Too Short!").required("Required"),
      date: Yup.date().max('2012-12-30',"bạn phải đủ 10 tuổi"),

    }),
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      dispatch(dangKiTaiKhoanAction(values))
    },
  });
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-auto rounded-xl">
        <div className="mx-10">
          <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className="mx-auto h-12 " src={logoAvatar} alt="Workflow" style={{ color: "white" }} />
                <h2 className="mt-3 text-center text-2xl font-extrabold text-gray-900">Đăng Kí</h2>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">password</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="appearance-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="password"
                      />

                    </div>
                    {formik.errors.password && formik.touched.password ? (
                      <div className="text-red-600">{formik.errors.password}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">confirmPassword</label>
                    <div className="relative">
                      <input
                        type="password"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                        className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="confirmPassword"
                      />

                    </div>
                    {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                      <div className="text-red-600">{formik.errors.confirmPassword}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">fullName</label>
                    <input
                      name="fullName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="fullName"
                    />
                  </div>
                  {formik.errors.fullName && formik.touched.fullName ? (
                    <div className="text-red-600">{formik.errors.fullName}</div>
                  ) : null}
                  <br />
                  <div>
                    <label className="sr-only mt-2">date</label>
                    <input
                      type="date"
                      name="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                    {formik.errors.date && formik.touched.date ? (
                      <div className="text-red-600">{formik.errors.date}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">phone</label>
                    <input
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="phone"
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="text-red-600">{formik.errors.phone}</div>
                    ) : null}
                  </div>
                  <br />

                  <div>
                    {/* <label className="sr-only mt-5">gender</label>
                    <input
                      name="gender"
                    
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="gender"
                    />
                    {formik.errors.gender && formik.touched.gender ? (
                     
                      <div className="text-red-600">{formik.errors.gender}
                       </div>
                      
                    ) : null} */}
                     <label className="sr-only mt-5">Gender</label>
                    <select
                      name="gender"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.gender}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="gender"
                    >
                      <option value="" label="Select Gender">
                        Select Gender{" "}
                      </option>
                      <option value={true} >
                        {" "}
                        male
                      </option>
                      <option value={false}>
                        Female
                      </option>
                    </select>
                    {formik.errors.gender && formik.touched.gender ? (

                      <div className="text-red-600">{formik.errors.gender}
                      </div>

                    ) : null}
                  </div> 
                </div>


                <div className="flex items-center justify-center mt-3">
                  <div className="text-sm">
                    <NavLink to="/login" className="font-medium text-red-600 hover:text-gray-900 ">
                      Bạn có tài khoản rồi? Đăng nhập
                    </NavLink>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    onSubmit={formik.handleSubmit}
                    className=" relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 mt-3 cursor-pointer"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Đăng kí
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
