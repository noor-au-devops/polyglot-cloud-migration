import React from 'react';

//define the props you will pass 
type HeaderProps = {
  title: string; // specifiy the type
};

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h1 className="text-5xl font-bold">{title}</h1>
    </div>
  )
}

export const Header2: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
    </div>
  )
}


export const BasicText: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <p className="text-xl leading-relaxed tracking-normal">{title}</p>
    </div>
  )
}