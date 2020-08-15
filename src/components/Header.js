import React from 'react';
import SectionHeader from './SectionHeader';
import Form from './Form';

const Header = ({ addNewTask }) => {
  return (
    <header className="header">
      <SectionHeader />
      <Form addNewTask={addNewTask} />
    </header>
  );
}

export default Header;