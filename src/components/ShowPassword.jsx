import { Eye, EyeOff } from "lucide-react";

function ShowPassword({ showPassword, setShowPassword }) {
  return (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="text-sm mt-2 text-gray-600 hover:text-blue-600"
    >
      {showPassword ? <Eye /> : <EyeOff />}
    </button>
  );
}

export default ShowPassword;
