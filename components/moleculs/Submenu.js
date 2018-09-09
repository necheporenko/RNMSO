import React from 'react';
import Link from 'next/link';
import { withI18next } from '../../lib/withI18next';

const SubMenus = menu => {
  switch (menu) {
    case 'OrchestraMenu':
      return [
        { href: 'staff', name: 'OrchestraMenu.staff' },
        { href: 'team', name: 'OrchestraMenu.team' },
        { href: 'academy', name: 'OrchestraMenu.academy' },
        { href: 'academy-masters', name: 'OrchestraMenu.academy-masters' },
        { href: 'conductors', name: 'OrchestraMenu.conductors' },
        { href: 'soloists', name: 'OrchestraMenu.soloists' },
        { href: 'application', name: 'OrchestraMenu.application' },
        { href: 'contacts', name: 'OrchestraMenu.contacts' },
      ];

    case 'MediaMenu':
      return [
        { href: 'news', name: 'MediaMenu.news' },
        { href: 'video', name: 'MediaMenu.video' },
        { href: 'photo', name: 'MediaMenu.photo' },
        { href: 'press', name: 'MediaMenu.press' },
      ];

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
          <a className={menu.href === activePage ? 'active' : ''}>{t(menu.name)}</a>
        </Link>
      </li>
    ))}
  </ul>
)

export default withI18next(['common'])(Submenu);
