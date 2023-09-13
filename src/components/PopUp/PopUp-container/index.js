import React, {useState, useEffect} from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function PopUpContainer({onCloseButton, onClose}) {
  const [customTime, setCustomTime] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [timeSelection, setTimeSelection] = useState('Найближчим часом'); // Додали стан для вибору часу
  const [isImmediateTimeSelected, setIsImmediateTimeSelected] = useState(true);
  const [isOpenByButton, setIsOpenByButton] = useState(false);


  useEffect(() => {
    setCustomTime('');
  }, [isOpenByButton]);

  if (isOpenByButton) {
    onCloseButton(); // Закрити попап, якщо він відкритий кнопкою
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && phoneNumber && selectedPackage && (timeSelection !== 'Інше' || customTime)) {
      const formData = {
        name,
        phoneNumber,
        selectedTime: timeSelection === 'Найближчим часом' ? timeSelection : customTime,
        selectedPackage
      };

      console.log('Дані з форми:', formData);

      alert('Дані успішно відправлено');
      resetForm();
      onClose();
      setIsOpenByButton(true);
    } else {
      alert("Будь ласка, заповніть всі обов'язкові поля");
    }
  };


  const resetForm = () => {
    setName('');
    setPhoneNumber('');
    setSelectedPackage('');
    setCustomTime('');
  };

  return (

      <div>
        <form className={`popUp-container ${isImmediateTimeSelected ? 'immediate-time' : ''}`} onSubmit={handleSubmit}>
          {onCloseButton && (
              <svg onClick={onCloseButton} className="popUp-container--closeButton" width="2.5rem" height="2.5rem"
                   viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#BF1616">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#Bf1616"
                   strokeWidth="0.288"></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#BF1616" strokeWidth="1.5"
                        strokeLinecap="round"></path>
                </g>
              </svg>
          )}
          <label>
            Ваше ім'я
            <input
                type="text"
                name="Ваше ім'я"
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{borderRadius: '11px'}}
                autoComplete={false}
                required
            />
          </label>
          <label>
            Ваш телефон
              <PhoneInput
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  country={'ua'} // Вибираємо Україну
                  enableSearch
                  inputStyle={{width: '100%', border: '1px solid black', borderRadius: '11px', height: '3rem'}}
                  placeholder='Введіть ваш номер'
                  autoComplete={false}
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
                    style={{marginTop: '10px', borderRadius: '11px', width: '100%'}}
                    autoComplete={false}
                    required
                />
            )}
          </label>
          <p className="popUp-container--text">Який пакет послуг Вас цікавить?</p>
          <label style={{fontFamily: "Montserrat, sans-serif", fontSize: "20px", fontWeight: '400', lineHeight: "24px",
            flexDirection: 'row', justifyContent: 'start', alignItems: "center"}}>
            <input
                type="radio"
                name="Пакет послуг"
                value="Авторський проєкт в українському етностилі"
                onChange={(e) => setSelectedPackage(e.target.value)}
                style={{width: '2rem', margin: '0'}}
                required
            />
            Авторський проєкт в українському етностилі
          </label>
          <label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "20px", fontWeight: '400', lineHeight: "24px",flexDirection: 'row', justifyContent: 'start', alignItems: "center"}}>
            <input
                type="radio"
                name="Пакет послуг"
                value="Міні-проект"
                onChange={(e) => setSelectedPackage(e.target.value)}
                style={{width: '2rem', margin: '0'}}
                required
            />
            Міні-проект
          </label>
          <button className="popUp-container--button" onClick={handleSubmit}>
            Відправити
          </button>

        </form>
      </div>
  );
}

export default PopUpContainer;