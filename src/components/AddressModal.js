import React from "react";
import { useState } from "react";

function AddressModal(props) {
  const [formData, setFormData] = useState({});
  const handleFormData = (event) => {
    const field = event.target.name;
    setFormData({ ...formData, [field]: event.target.value });
  };
  const dummyAddress = () => {
    const Address = {
      contact_person: "John Dow",
      contact_number: 7744558475,
      address: "Moti Mahal, Raj Nagar, Raipur,UP",
      pincode: 787777,
    };
    setFormData(Address);
  };
  return (
    <div className="overlay">
      <section class="mod dis-flex-col s-75">
        <div class="sec-header p-1">
          <div class="mod-title">Address</div>
          <i
            onClick={() => props.handleAddressModal()}
            class="fas fa-times"
          ></i>
        </div>
        <div class="sec-body p-1">
          <div class="input-field">
            <input
              value={formData.contact_person}
              name="contact_person"
              id="email-field"
              class="border-bs"
              type="text"
              pattern=".*\S.*"
              required
              onChange={handleFormData}
            />
            <label for="email-field" class="placeholder txt">
              Contact Person
            </label>
          </div>
          <div class="input-field">
            <input
              value={formData.contact_number}
              name="contact_number"
              id="email-field"
              class="border-bs"
              type="text"
              pattern=".*\S.*"
              required
              onChange={handleFormData}
            />
            <label for="email-field" class="placeholder txt">
              Contact Number
            </label>
          </div>
          <div class="input-field">
            <input
              value={formData.address}
              name="address"
              id="email-field"
              class="border-bs"
              type="text"
              pattern=".*\S.*"
              required
              onChange={handleFormData}
            />
            <label for="email-field" class="placeholder txt">
              Address
            </label>
          </div>
          <div class="input-field">
            <input
              value={formData.pincode}
              name="pincode"
              id="pincode"
              class="border-bs"
              type="text"
              pattern=".*\S.*"
              required
              onChange={handleFormData}
            />
            <label for="email-field" class="placeholder txt">
              Pincode
            </label>
          </div>
        </div>
        <div class="sec-footer p-1">
          <button onClick={dummyAddress} className="btn-secd">
            DummyAddress
          </button>
          <button
            onClick={() => props.handleAddress(formData)}
            class="btn-secd"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
}

export default AddressModal;
