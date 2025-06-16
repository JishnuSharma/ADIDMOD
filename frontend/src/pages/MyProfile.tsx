import ProfileForm from "../components/profile/ProfileForm";

const MyProfile = () => {

  return (
    <div className="max-w-6xl mx-auto mt-10 p-10 bg-slate-100 border-2 border-slate-500 rounded-3xl shadow-lg flex flex-col lg:flex-row gap-10">
      {/* Left Panel – Profile Summary */}
      <div className="flex flex-col items-center lg:w-1/3 space-y-6">
        {/* Profile Image */}
        <div className="h-70 w-70 rounded-full overflow-hidden border-4 border-slate-400 shadow-md">
          <img
            src={"/images/jish-boi.png"}
            className="h-full w-full object-cover"
            alt="Profile"
          />
        </div>

        {/* Stats */}
        <div className="w-full bg-white rounded-xl p-6 shadow-md space-y-4">
          <div className="text-center">
            <div className="text-gray-500 text-sm">Devices Added</div>
            <div className="text-xl font-semibold text-slate-700">29</div>
          </div>
          <div className="text-center">
            <div className="text-gray-500 text-sm">Data Points Tested</div>
            <div className="text-xl font-semibold text-slate-700">40.2K</div>
          </div>
        </div>
      </div>

      {/* Right Panel – Profile Form */}
      <div className="flex-1">
        <ProfileForm />
      </div>
    </div>
  );
};

export default MyProfile;
