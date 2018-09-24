import React from 'react';
import Link from 'next/link';
import { withI18next } from '../../lib/withI18next';
import { OrchestraMenu, MediaMenu, YEARS } from '../../constants';

const SubMenus = menu => {
  switch (menu) {
    case 'OrchestraMenu':
      return OrchestraMenu;

    case 'MediaMenu':
      return MediaMenu;

    default:
      console.log("Menu doesn't exist");
      null;
  }
}

const Submenu = ({ t, menu, activePage }) => (
  <ul className="page__list">
    {SubMenus(menu, activePage).map((menu, index) => (
      <li key={index}>
        <Link href={menu.href}>
          <a className={menu.href === `/${activePage}` ? 'active' : ''}>{menu.name.includes('OrchestraMenu.soloists') || menu.name.includes('OrchestraMenu.conductors') ? `${t(menu.name)} ${YEARS}` : t(menu.name)}</a>
        </Link>
      </li>
    ))}
  </ul>
)

export default withI18next(['common'])(Submenu);
