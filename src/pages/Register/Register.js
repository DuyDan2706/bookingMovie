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

export default function Register() {
  const dispatch = useDispatch()
  const formik = useFormik({
      initialValues: {
          taiKhoan: '',
          matKhau: '',
          matKhauConfirm: '',
          email: '',
          soDt: '',
          maNhom: '',
          hoTen: '',
          maNhom: GROUPID
      },
      validationSchema: Yup.object().shape({
          taiKhoan: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
          email: Yup.string().email('Invalid email').required('Required'),
          matKhau: Yup.string().required('Password is required').min(6,"Too short"),
          matKhauConfirm: Yup.string().oneOf([Yup.ref('matKhau'), null], 'Passwords must match'),
          hoTen : Yup.string().min(6,"Too Short!")
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
                      name="taiKhoan"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Tài khoản"
                    />
                    {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                      <div className="text-red-600">{formik.errors.taiKhoan}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Mật khẩu</label>
                    <div className="relative">
                      <input
                      type="password"
                        name="matKhau"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="appearance-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Mật khẩu"
                      />
                    
                    </div>
                    {formik.errors.matKhau && formik.touched.matKhau ? (
                      <div className="text-red-600">{formik.errors.matKhau}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Nhập lại mật khẩu</label>
                    <div className="relative">
                      <input
                      type="password"
                        name="nhapLaiMatKhau"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
        
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Nhập lại mật khẩu"
                      />
                  
                    </div>
                    {formik.errors.nhapLaiMatKhau && formik.touched.nhapLaiMatKhau ? (
                      <div className="text-red-600">{formik.errors.nhapLaiMatKhau}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Họ và Tên</label>
                    <input
                      name="hoTen"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Họ và tên"
                    />
                  </div>
                  {formik.errors.hoTen && formik.touched.hoTen ? (
                    <div className="text-red-600">{formik.errors.hoTen}</div>
                  ) : null}
                  <br />
                  <div>
                    <label className="sr-only mt-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Số điện thoại di động</label>
                    <input
                      name="soDT"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Số điện thoại di động"
                    />
                    {formik.errors.soDT && formik.touched.soDT ? (
                      <div className="text-red-600">{formik.errors.soDT}</div>
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
