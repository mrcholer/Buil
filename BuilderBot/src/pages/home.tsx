import React, { useState } from 'react';
import '../styles/home.css';
import Modal from '../components/modal';
import { BiFontFamily } from 'react-icons/bi';

const BuilderBot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const [embedColor, setEmbedColor] = useState('rgb(0, 153, 255)');
  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  const openModal = (title: string, description: string) => {
    setModalContent({ title, description });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleColorChange = (color: string) => {
    setEmbedColor(color);
  };

  const toggleColorPicker = () => {
    setIsColorPickerVisible(!isColorPickerVisible);
  };

  const handleCustomColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmbedColor(event.target.value);
  };

  return (
    <div>
      <div className="navbar">
        <h1>BuilderBot</h1>
      </div>
      <div className="content">
        <h1>BuilderBot</h1>
        <span>
          BuilderBot is a professional bot that allows you to fully control it with beautiful and wonderful features, in
          addition to giving you also add buttons or select menu for roles or a hidden private message.
        </span>
      </div>
      <div className="back">
        <h1 className="ext">Pannel Config</h1>
        <div className="embed">
          <div className="message">
            <div className="bot">
              <img
                src="https://cdn.discordapp.com/attachments/1035611374786715748/1308057598506831972/20221206_1000001.jpg?ex=673de092&is=673c8f12&hm=b9bd09d4f246afbc56d97ac213c6804d0afd2dfaba8b376ac535e436131e5a9b&"
                alt="BuilderBot.png"
                className="avatar"
              />
              <h2 className="username">
                BuilderBot <span className="badge">DEMO</span>
              </h2>
            </div>
            <div className="preview">
              <div className="left">
                <a className="title" href='https://discord.gg/RTQsBfBT'>Welcome to BuilderBot</a>
                <br />
                <span className="description">Let's build your embed</span>
              </div>
            </div>
            <div className="buttons">
              <button
                className="blue"
                type="button"
                onClick={() => openModal('Embed AI', 'This is your Embed AI modal! Use it to configure advanced embed options for your bot\'s messages. Customize to your liking!')}
              >
                Embed AI
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Set Content', 'Define the content for your embed messages.')}
              >
                setContent
              </button>
              <button
                className="success"
                type="button"
                onClick={() => toggleColorPicker()}
              >
                setColor
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Set Author', 'Specify the author of the embed.')}
              >
                setAuthor
              </button>
              <button
                className="success"
                type="button"
                onClick={() => toggleColorPicker()}
              >
                setTitle
              </button>
              <button
                className="success"
                type="button"
                onClick={() => openModal('Set Description', 'Add a description to your embed.')}
              >
                setDescription
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Set Thumbnail', 'Set a thumbnail image for your embed.')}
              >
                setThumbnail
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Set Image', 'Set a main image for your embed.')}
              >
                setImage
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Add Fields', 'Add fields to your embed.')}
              >
                addFields (0)
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Set Footer', 'Define a footer for your embed.')}
              >
                setFooter
              </button>
              <button
                className="secondary"
                type="button"
                onClick={() => openModal('Add Attachment', 'Attach files or media to your embed.')}
              >
                addAttachment (0)
              </button>
            </div>
            </div>
        </div>
      </div>

      {/* Modal Integration */}
      <Modal isOpen={isModalOpen} onClose={closeModal} title={modalContent.title}>
        <p>{modalContent.description}</p>
      </Modal>
    </div>
  );
};

export default BuilderBot;
