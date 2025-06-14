const ProfileForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-12">
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Profile Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="first_name" className="mb-1 text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="last_name" className="mb-1 text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profession" className="mb-1 text-sm font-medium text-gray-700">
              Profession
            </label>
            <input
              id="profession"
              name="profession"
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="location" className="mb-1 text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              id="location"
              name="location"
              type="text"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-800">Security Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="current_password" className="mb-1 text-sm font-medium text-gray-700">
              Current Password
            </label>
            <input
              id="current_password"
              name="current_password"
              type="password"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="new_password" className="mb-1 text-sm font-medium text-gray-700">
              New Password
            </label>
            <input
              id="new_password"
              name="new_password"
              type="password"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm_password" className="mb-1 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              id="confirm_password"
              name="confirm_password"
              type="password"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
        </div>
      </section>

      <div className="text-right">
        <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
