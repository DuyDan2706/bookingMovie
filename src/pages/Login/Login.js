import { useFormik } from 'formik';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungAction';
import show from "../../assets/images/show.png";
import hide from "../../assets/images/hide.png";
import logoAvatar from "../../assets/images/user-regular.svg";
// import { useFormik } from "formik";

export default function Login(props) {
    let [showPass, setShowPass] = useState(false);
    const dispatch = useDispatch();

    const {userLogin} = useSelector(state=>state.QuanLyNguoiDungReducer);

    console.log('userLogin',userLogin)

    const formik = useFormik({
        initialValues: {
          taiKhoan: '',
          matKhau: '',
        },
        onSubmit: values => {

            const action = dangNhapAction(values);
            dispatch(action);

            console.log('values',values);
        },
      });


      return (
        <div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-auto rounded-xl">
            <div className="mx-10 ">
              <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <img className="mx-auto h-10 " src={logoAvatar} alt="Workflow" />
                    <h2 className="mt-1 text-center text-xl font-extrabold text-gray-900">Đăng Nhập</h2>
                  </div>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="rounded-md shadow-sm">
                      <div>
                        <label className="sr-only">Tài Khoản</label>
                        <input
                          name="taiKhoan"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          onFocus={formik.handleBlur}
                          className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                          placeholder="Tài Khoản"
                        />
                        {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                          <div className="text-red-600">{formik.errors.taiKhoan}</div>
                        ) : null}
                      </div>
                      <br />
                      <div>
                        <label className="sr-only mt-5">Mật Khẩu</label>
                        <div className="relative">
                          <input
                            name="matKhau"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            onFocus={formik.handleBlur}
                            type={showPass ? "type" : "password"}
                            className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                            placeholder="Mật Khẩu"
                          />
                          <button
                            type="button"
                            className="absolute top-1/2  transform  -translate-y-1/2 right-2"
                            onClick={() => {
                              setShowPass(!showPass);
                            }}
                          >
                            {
                              <img
                                src={showPass ? show : hide}
                                alt=""
                                className="w-8 h-8 rounded-full px-2 py-2 hover:bg-gray-400"
                              />
                            }
                          </button>
                        </div>
                        {formik.errors.matKhau && formik.touched.matKhau ? (
                          <div className="text-red-600">{formik.errors.matKhau}</div>
                        ) : null}
                      </div>
                    </div>
    
                    <div className="flex items-center justify-center mt-3">
                      <div className="text-sm">
                        <NavLink to="/register" className="font-medium text-red-600 hover:text-gray-900">
                          Đăng kí tài khoản?
                        </NavLink>
                      </div>
                    </div>
    
                    <div>
                      <button
                        type="submit"
                        disabled={!formik.isValid}
                        className=" relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 mt-3 cursor-pointer"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        Đăng nhập
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
    