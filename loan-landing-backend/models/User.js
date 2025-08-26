{/* Right Form */}
        <div
          id="loan-form"
          className="bg-white text-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-sm mt-12 lg:mt-0 lg:ml-20"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-center">Get Instant Loan</h2>
            <p className="text-center text-gray-600 text-sm flex justify-center gap-3 mt-1">
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle2 size={16}/> Instant Approval
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <CheckCircle2 size={16}/> No Hidden Fees
              </span>
            </p>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
              <div className="relative">
    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="name"
                placeholder="     Enter your full name"
                className="w-full border rounded-lg p-3 pl-10 outline-none"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div></div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-1">Aadhar Registered Phone Number <span className="text-red-500">*</span></label>
              <div className="relative">
    <Phone className="absolute left-3 top-2/5 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                name="phone"
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="      10-digit mobile number"
                className="w-full border rounded-lg p-3 pl-10 outline-none"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-gray-500 mt-1">Must be registered with Aadhar</p>
            </div></div>

            {/* City */}

<div>
  <label className="block text-sm font-medium mb-1">
    City <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
    <select
      name="city"
      className="w-full border rounded-lg p-3 pl-10 outline-none"
      value={formData.city}
      onChange={handleChange}
      required
    >
      <option value="">Select your city</option>
      <option>Ahmedabad</option>
      <option>Bangalore</option>
      <option>Chennai</option>
      <option>Delhi/NCR</option>
      <option>Hyderabad</option>
      <option>Kolkata</option>
      <option>Mumbai</option>
      <option>Pune</option>
    </select>
  </div>
</div>


            {/* Loan Amount */}

<div>
  <label className="block text-sm font-medium mb-1">
    Loan Amount <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <IndianRupee className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
    <select
      name="loanAmount"
      className="w-full border rounded-lg p-3 pl-10 outline-none"
      value={formData.loanAmount}
      onChange={handleChange}
      required
    >
      <option value="">Select loan amount</option>
      <option>₹5,000</option>
      <option>₹10,000</option>
      <option>₹15,000</option>
      <option>₹20,000</option>
      <option>₹25,000</option>
      <option>₹30,000</option>
      <option>₹40,000</option>
      <option>₹50,000</option>
      <option>₹75,000</option>
      <option>₹1,00,000</option>
    </select>
  </div>
</div>

{/* CIBIL */}
<div>
  <label className="block text-sm font-medium mb-1">
    CIBIL Score <span className="text-gray-400">(Optional)</span>
  </label>
  <div className="relative">
    <BarChart className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
    <select
      name="cibil"
      className="w-full border rounded-lg p-3 pl-10 outline-none"
      value={formData.cibil}
      onChange={handleChange}
    >
      <option value="">Select CIBIL Score range</option>
      <option>750+ (Excellent)</option>
      <option>700-749 (Good)</option>
      <option>650-699 (Fair)</option>
      <option>600-649 (Poor)</option>
      <option>Below 600</option>
      <option>Not Sure</option>
    </select>
  </div>
</div>

            