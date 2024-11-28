import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerModal.css';

function DatePickerModal({ show, onClose }) {
  const [selectedDate, setSelectedDate] = React.useState(null);

  if (!show) return null;

  const handleSubmit = () => {
    alert(`Demo booked for: ${selectedDate}`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Select a Date for Your Demo</h2>
        <ReactDatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          placeholderText="Choose a date"
        />
        <div className="modal-buttons">
          <button className="submit-btn" onClick={handleSubmit}>Confirm</button>
          <button className="close-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DatePickerModal;
