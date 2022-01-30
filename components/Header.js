import Image from 'next/image';
import React from 'react';
import HeaderIcon from './HeaderIcon';
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from '@heroicons/react/solid'

export default function Header() {
  return <div>
      <div className = "">
        <HeaderIcon Icon= {HomeIcon} title="Home"/>
        <HeaderIcon Icon= {UserIcon} title="Account"/>
        <HeaderIcon Icon= {PhoneIcon} title="Contact"/>
        <HeaderIcon Icon= {InformationCircleIcon} title="About"/>

      </div>
      <Image
      src = "https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
      width = {100}
      height = {100}
      />
  </div>;
}
