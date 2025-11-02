import { useState } from "react";


const PatientForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    ssnLast4: "",
    address1: "",
    city: "",
    state: "",
    zip: "",
    phone: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };
  return (
    <form id="patient-form" onSubmit={handleSubmit} className="patient-form-container relative w-full max-w-[816px] min-h-[578px]">
      <h2
        className="form-title text-[28px] font-medium leading-normal text-black mb-14"
        style={{ fontFamily: 'SF Pro, -apple-system, Roboto, Helvetica, sans-serif', fontWeight: 510 }}
      >
        Patient Information:
      </h2>

      <div className="form-fields-wrapper grid grid-cols-2 gap-x-[94px]">
        {/* Left Column */}
        <div className="left-column flex flex-col gap-y-6">
          {/* First Name Field */}
          <div className="input-field-group flex flex-col gap-2">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="field-input min-w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          {/* Last Name Field */}
          <div className="input-field-group flex flex-col gap-2">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              className="field-input min-w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>

          {/* Date of Birth Field */}
          <div className="input-field-group flex flex-col gap-2">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Date Of Birth
            </label>
            <input
              type="text"
              placeholder="MM/DD/YYYY"
              className="field-input min-w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
          </div>

          {/* Gender Field */}
          <div className="input-field-group flex flex-col gap-2">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Gender
            </label>
            <input
              type="text"
              placeholder="Enter gender"
              className="field-input min-w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            />
          </div>

          {/* Last 4 SSN Field */}
          <div className="input-field-group flex flex-col gap-2">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Last 4 SSN
            </label>
            <input
              type="text"
              placeholder="Enter last 4 SSN"
              className="field-input min-w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="ssnLast4"
              value={formData.ssnLast4}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="right-column flex flex-col gap-y-6">
          {/* Address Field */}
          <div className="address-field-group flex flex-col">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E] mb-2"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Address
            </label>

            {/* Address Line 1 */}
            <input
              type="text"
              placeholder="Line 1"
              className="field-input w-full px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] mb-[14px] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="address1"
              value={formData.address1}
              onChange={handleChange}
            />


            {/* City and State Row */}
            <div className="flex gap-[13px] mb-[14px]">
              <input
                type="text"
                placeholder="City"
                className="field-input flex-1 px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
                style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="State"
                className="field-input w-[108px] px-3 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
                style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            {/* Zip Code */}
            <input
              type="text"
              placeholder="Zip Code"
              className="field-input w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />


          {/* Phone Number Field */}
          <div className="input-field-group flex flex-col gap-2">
            <label
              className="field-label text-[22px] font-normal leading-[140%] text-[#1E1E1E]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
            >
              Phone Number
            </label>
            <input
              type="text"
              placeholder="###-###-####"
              className="field-input min-w-[240px] px-4 py-3 rounded-lg border border-[#D5D5D5] bg-white text-base font-normal leading-[100%] placeholder:text-[#B3B3B3] focus:outline-none focus:border-[#A00B29]"
              style={{ fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif' }}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default PatientForm;
