import React, { Fragment, useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { postApiThemHinhUploadHinh } from "../../../../redux/slices/addNewFilms";
import { GROUNDID } from "../../../../util/apiSetting";

export default function AddNewFilms() {
  const dispatch = useDispatch();
  const [componentSize, setComponentSize] = useState("default");
  const [fileImg, setFileImg] = useState("");
  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUNDID,
    },
    validationSchema: Yup.object().shape({
      tenPhim: Yup.string().required("Tên phim không được để trống"),
      trailer: Yup.string().required("Trailer không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      ngayKhoiChieu: Yup.string().required("Ngày khởi chiếu không được để trống"),
      danhGia: Yup.string().required("Đánh giá không được để trống"),
      hinhAnh: Yup.string().required("Hình ảnh không được để trống"),
    }),
    onSubmit: values => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      dispatch(postApiThemHinhUploadHinh(formData));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeDataPicker = value => {
    formik.setFieldValue("ngayKhoiChieu", moment(value).format("DD/MM/YYYY"));
  };

  const handleChangeSwitch = name => {
    return value => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = name => {
    return value => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = e => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      setFileImg(e.target.result);
    };
    formik.setFieldValue("hinhAnh", file);
  };

  return (
    <Fragment>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3 className="text-3xl text-red-600 font-black text-center">Thêm mới phim </h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input name="tenPhim" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.tenPhim && formik.touched.tenPhim ? (
            <div className="text-red-600">{formik.errors.tenPhim}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.trailer && formik.touched.trailer ? (
            <div className="text-red-600">{formik.errors.trailer}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} onBlur={formik.handleBlur} />
          {formik.errors.moTa && formik.touched.moTa ? <div className="text-red-600">{formik.errors.moTa}</div> : null}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker name="ngayKhoiChieu" onChange={handleChangeDataPicker} format="DD/MM/YYYY" />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch onChange={handleChangeSwitch("dangChieu")} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch onChange={handleChangeSwitch("sapChieu")} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch onChange={handleChangeSwitch("hot")} />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input type="file" accept="image/png, image/jpeg,image/gif,image/png" onChange={handleChangeFile} />
          <br />
          <img src={fileImg} alt="" className="w-40 h-60" />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="hover:bg-red-600 hover:text-white text-red-600 p-2 border-2 border-red-600 rounded-md"
          >
            Thêm phim
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
