import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./editBizCardPopup.css";

// {
//   biz_Name,
//   biz_Description,
//   biz_Address,
//   biz_Phone,
//   biz_Image,
//   onEditCard,
//   onCancelEdit,
// }

const EditBizCardComponent = (props) => {
  const [biz_Name, setBizName] = useState(props.biz_Name);
  const [biz_Description, setBizDescription] = useState(props.biz_Description);
  const [biz_Address, setBiz_Address] = useState(props.biz_Address);
  const [biz_Phone, setBiz_Phone] = useState(props.biz_Phone);
  const [biz_Image, setBiz_Image] = useState(props.biz_Image);

  const handle_biz_Name_Change = (event) => {
    setBizName(event.target.value);
  };
  const handle_biz_Description_Change = (event) => {
    setBizDescription(event.target.value);
  };
  const handle_biz_Address = (event) => {
    setBiz_Address(event.target.value);
  };
  const handle_biz_Phone_Change = (event) => {
    setBiz_Phone(event.target.value);
  };
  const handle_biz_Image_Change = (event) => {
    setBiz_Image(event.target.value);
  };
  const handle_Submit = (event) => {
    event.preventDefault();
  };
  const handleFromClick = (event) => {
    // because we use onCLick og the div (parent)
    // when we click on elements inside the div (child)
    // the event will bubble up to the parent
    // and the parent will not know about the child
    // so we need to stop the event propagation
    event.stopPropagation();
  };
  const handle_Submit_Edit = () => {
    let dateToSend = {
      biz_Name,
      biz_Description,
      biz_Address,
      biz_Phone,
    };
    if (biz_Image) {
      dateToSend.biz_Image = biz_Image;
    }
    props.onEditCard(dateToSend);
  };
  const handle_Cancel = () => {
    props.onCancelEdit();
  };
  return (
    <div className="center-wrapper" onClick={handle_Cancel}>
      <form
        onSubmit={handle_Submit}
        onClick={handleFromClick}
        className="center-absolute"
      >
        <div className="mb-3">
          <h3>Edit Card</h3>
        </div>
        {/* Name */}
        <div className="md-3">
          <label htmlFor="input_biz_Name" className="form-label">
            Biz Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Name"
            value={biz_Name}
            onChange={handle_biz_Name_Change}
          />
        </div>
        {/* Description */}
        <div className="md-3">
          <label htmlFor="input_biz_Description" className="form-label">
            Biz Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Description"
            value={biz_Description}
            onChange={handle_biz_Description_Change}
          />
        </div>
        {/* Address */}
        <div className="md-3">
          <label htmlFor="input_biz_Address" className="form-label">
            Biz Address:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Address"
            value={biz_Address}
            onChange={handle_biz_Address}
          />
        </div>
        {/* Phone */}
        <div className="md-3">
          <label htmlFor="input_biz_Phone" className="form-label">
            Biz Phone:
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Phone"
            value={biz_Phone}
            onChange={handle_biz_Phone_Change}
          />
        </div>
        {/* Image */}
        <div className="md-3 mb-3">
          <label htmlFor="input_biz_Image" className="form-label">
            Biz Image Not required!!
          </label>
          <input
            type="text"
            className="form-control"
            id="input_biz_Image"
            value={biz_Image}
            onChange={handle_biz_Image_Change}
          />
        </div>
        {/* Buttons */}
        <div className="row">
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary w-100"
              onClick={handle_Submit_Edit}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </button>
          </div>
          <div className="col">
            <button
              type="submit"
              className="btn btn-danger w-100"
              onClick={handle_Cancel}
            >
              <FontAwesomeIcon icon={faBan} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditBizCardComponent;
