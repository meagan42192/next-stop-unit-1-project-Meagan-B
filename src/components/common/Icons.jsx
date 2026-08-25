import { FaArrowLeft } from 'react-icons/fa'; // Font Awesome
import { HiArrowLeft } from 'react-icons/hi2'; // Heroicons

function LeftArrow() {
  return (
    <button>
      <FaArrowLeft size={20} color="#000" /> Back
    </button>
  );
}

export default LeftArrow;