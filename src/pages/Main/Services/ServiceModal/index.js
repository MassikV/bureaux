import React, { useState, useEffect, useRef } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';

function ServiceModal({ onClose }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    step1: '',
    step2: '',
    step3: '',
    step4: '',
  });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [contentVisible, setContentVisible] = useState(false);

  const inputRefs = {
    nameRef: useRef(),
    phoneRef: useRef(),
    emailRef: useRef(),
  };

  const modalBackgroundVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: '100%' },
    visible: { y: 0 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  const questions = [
    {
      step: 1,
      text: "Яка у вас площа об'єкту?",
      options: ['До 50 кв. м.', '50-100 кв. м.', '100-200 кв. м.', 'Більше 200 кв. м.'],
    },
    {
      step: 2,
      text: 'Оберіть тип приміщення',
      options: ['Житло', 'Офіс', 'Готель', 'Ресторан/кафе'],
    },
    {
      step: 3,
      text: 'Оберіть стиль ремонту',
      options: [
        'Фірмовий сучасний український етностиль',
        'Сучасний',
        'Нео-класика',
        'Мінімалізм',
        'Скандинавський',
        'Хай-тек',
        'Не визначились',
      ],
    },
    {
      step: 4,
      text: 'Коли орієнтовно плануєте почати?',
      options: ['Вже готові', 'Протягом місяця', 'Протягом 3-х місяців', 'Через пів-року'],
    },
    {
      step: 5,
      text: 'Заповніть дані:',
      options: [],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const resetForm = () => {
    setSelectedOptions({
      step1: '',
      step2: '',
      step3: '',
      step4: '',
    });
    setName('');
    setPhone('');
    setEmail('');
    setCurrentStep(0);
    onClose();
  };
  const handleOptionChange = (step, value) => {
    setSelectedOptions({ ...selectedOptions, [step]: value });
  };
  const showErrorNotification = () => {
    toast.error('Помилка! Не вдалося відправити форму.', {
      position: 'top-right',
      autoClose: 5000,
    });
  };
  const handleSubmit = async () => {
    if (
      selectedOptions.step1 &&
      selectedOptions.step2 &&
      selectedOptions.step3 &&
      selectedOptions.step4 &&
      name &&
      phone &&
      email
    ) {
      const formData = `
        🔥 Нове повідомлення з сайту! 🔥\n\n 📩 Квіз\n 🏠 Площа об'єкту: ${selectedOptions.step1}\n 🏢 Тип приміщення: ${selectedOptions.step2}\n 🎨 Стиль ремонту: ${selectedOptions.step3}\n ⏰ Планований час початку: ${selectedOptions.step4}\n 🤵 Ім'я: ${name}\n 📱 Телефон: +${phone}\n ✉️ Email: ${email}
      `.trim();

      try {
        const botToken = '6809113635:AAEAPNVeXhN78oUhxyGEpuahfr1pMTWSLM0';
        const groupId = '-1002050844018';

        const message = encodeURIComponent(formData);
        const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${groupId}&text=${message}`;

        const response = await fetch(url, {
          method: 'POST',
        });

        if (response.ok) {
          console.log('Дані відправлені в групу в Telegram.');
          toast.success('Дані успішно відправлено');
          resetForm();
        } else {
          showErrorNotification();
          console.log('Помилка під час відправлення даних.', response.status, response.statusText);
        }
      } catch (error) {
        console.error(error);
        alert('Помилка сервера.');
        showErrorNotification();
      }
      console.log(formData);
    } else {
      toast.error('Будь ласка, заповніть всі поля перед відправкою форми.');
    }
  };

  const renderStep = () => {
    const labelClass = 'label-class';
    const inputClass = 'input-class';

    const currentQuestion = questions[currentStep];

    if (!currentQuestion) {
      return null;
    }

    return (
      <motion.div
        className="modal-inner"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={modalVariants}>
        <button className="close-modal-button" onClick={onClose}>
          <span></span>
        </button>
        <div className="question-counter">
          {currentStep + 1}/{questions.length}
        </div>
        <div className="progress-bar">
          <div
            className={`progress-bar-fill step-${currentStep + 1}`}
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}></div>
        </div>
        <h3>{currentQuestion.text}</h3>
        {currentStep !== 4 ? (
          currentQuestion.options.map((option, index) => (
            <motion.label className={labelClass} key={index} variants={contentVariants}>
              <input
                className={inputClass}
                type="radio"
                value={option}
                checked={selectedOptions[`step${currentStep + 1}`] === option}
                onChange={() => handleOptionChange(`step${currentStep + 1}`, option)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && selectedOptions[`step${currentStep + 1}`]) {
                    nextStep();
                  }
                }}
              />
              {option}
            </motion.label>
          ))
        ) : (
          <motion.div style={{ display: 'contents', width: '100%' }} variants={contentVariants}>
            <label className={labelClass}>Ім'я:</label>
            <input
              ref={inputRefs.nameRef}
              name="name"
              className={inputClass}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className={labelClass}>Email:</label>
            <input
              ref={inputRefs.phoneRef}
              name="phone"
              className={inputClass}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className={labelClass}>Телефон:</label>
            <div className="phone-input-container">
              <PhoneInput country={'ua'} value={phone} onChange={(phone) => setPhone(phone)} />
            </div>
          </motion.div>
        )}
        <div className="modal-controls">
          {currentStep < 4 ? (
            <motion.button
              onClick={nextStep}
              disabled={!selectedOptions[`step${currentStep + 1}`]}
              whileTap={{ scale: 0.95 }}>
              Далі
            </motion.button>
          ) : (
            <motion.button onClick={handleSubmit} whileTap={{ scale: 0.95 }}>
              Відправити форму
            </motion.button>
          )}
          {currentStep > 0 ? (
            <motion.button onClick={prevStep} whileTap={{ scale: 0.95 }}>
              Назад
            </motion.button>
          ) : (
            <motion.button disabled>Назад</motion.button>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <AnimatePresence>
      {currentStep >= 0 && (
        <motion.div
          className="modal-overlay"
          variants={modalBackgroundVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={{ bottom: 0 }}>
          {contentVisible && renderStep()}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ServiceModal;
