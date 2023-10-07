import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';

function PopUpContainer({ onCloseButton, onClose }) {
  const [customTime, setCustomTime] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [timeSelection, setTimeSelection] = useState('Найближчим часом');
  const [isImmediateTimeSelected, setIsImmediateTimeSelected] = useState(true);
  const [isOpenByButton, setIsOpenByButton] = useState(false);

  useEffect(() => {
    setCustomTime('');
  }, [isOpenByButton]);

  if (isOpenByButton) {
    onCloseButton();
  }

  const showErrorNotification = () => {
    toast.error("Помилка! Не вдалося відправити форму.", {
      position: 'top-right',
      autoClose: 5000,
    });
  };

  const showSuccessNotification = () => {
    toast.success("Дані успішно відправлено", {
      position: 'top-right',
      autoClose: 5000,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && phoneNumber && selectedPackage && (timeSelection !== 'Інше' || customTime)) {
      const formData = {
        name,
        phoneNumber,
        selectedTime: timeSelection === 'Найближчим часом' ? timeSelection : customTime,
        selectedPackage,
      };

      console.log('Дані з форми:', formData);

      showSuccessNotification();

      resetForm();
      onClose();
      setIsOpenByButton(true);
    } else {
      showErrorNotification();
    }
  };

  const resetForm = () => {
    setName('');
    setPhoneNumber('');
    setSelectedPackage('');
    setCustomTime('');
  };

  const popupVariants = {
    hidden: { opacity: 0, y: '100%' }, 
    visible: { opacity: 1, y: 0 }, 
  };

  return (
      <AnimatePresence>
        <motion.div
            className={`popUp-container ${isImmediateTimeSelected ? 'immediate-time' : ''}`}
            variants={popupVariants} 
            initial="hidden" 
            animate="visible" 
            exit="hidden" 
        >
          {onCloseButton && (
              <svg
                  onClick={onCloseButton}
                  className="popUp-container--closeButton"
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#BF1616"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#Bf1616" strokeWidth="0.288"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#BF1616" strokeWidth="1.5" strokeLinecap="round"></path>
                </g>              </svg>
          )}
          <form onSubmit={handleSubmit} style={{gap:"2rem"}}>
            <label>
              Ваше ім'я
              <input
                  type="text"
                  name="Ваше ім'я"
                  placeholder="Ім'я"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ borderRadius: '11px' }}
                  autoComplete="false"
                  required
              />
            </label>
            <label>
              Ваш телефон
              <PhoneInput
                  name="number"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  country={'ua'}
                  enableSearch
                  inputStyle={{ width: '100%', border: '1px solid black', borderRadius: '11px', height: '3rem' }}
                  placeholder='Введіть ваш номер'
                  autoComplete="false"
                  required
              />
            </label>
            <label>
              Коли вам передзвонити?
              <select
                  value={timeSelection}
                  onChange={(e) => {
                    setTimeSelection(e.target.value);
                    setIsImmediateTimeSelected(e.target.value === 'Найближчим часом');
                    if (e.target.value === 'Інше') {
                      setCustomTime('');
                    }
                  }}
                  name="Коли вам передзвонити?"
                  required
              >
                <option value="Найближчим часом">Найближчим часом</option>
                <option value="Інше">Інше</option>
              </select>
              {timeSelection === 'Інше' && (
                  <input
                      type="datetime-local"
                      value={customTime}
                      onChange={(e) => setCustomTime(e.target.value)}
                      style={{ marginTop: '10px', borderRadius: '11px', width: '100%' }}
                      autoComplete="false"
                      required
                  />
              )}
            </label>
            <p className="popUp-container--text">Який пакет послуг Вас цікавить?</p>
            <div style={{gap:"1rem"}}>
            <label className="radio-label" style={{flexDirection:"row"}}>
              <input
                  type="radio"
                  name="Пакет послуг"
                  value="Авторський проєкт в українському етностилі"
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  style={{}}
                  required
              />
              Авторський проєкт в українському етностилі
            </label>
            <label className="radio-label" style={{flexDirection:"row"}}>
              <input
                  type="radio"
                  name="Пакет послуг"
                  value="Міні-проєкт"
                  onChange={(e) => setSelectedPackage(e.target.value)}
                  style={{}}
                  required
              />
              Міні-проєкт
            </label>
            </div>
            <button className="popUp-container--button" onClick={handleSubmit}>
              Відправити
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
  );
}

export default PopUpContainer;
