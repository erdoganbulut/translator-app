import React from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.scss';

const AppHeader = () => (
  <header className="component is-app-header">
    <div className="container-fluid">
      <Link className="app-header--logo" to="/">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 648 97">
          <path
            d="M36.376 96.024c-8.107 0-14.421-2.048-18.944-6.144-4.523-4.181-6.784-10.368-6.784-18.56V10.904h19.968v60.16c0 2.901.768 5.163 2.304 6.784 1.536 1.536 3.627 2.304 6.272 2.304 3.157 0 5.845-.853 8.064-2.56l5.376 14.08c-2.048 1.45-4.523 2.56-7.424 3.328-2.816.683-5.76 1.024-8.832 1.024ZM.024 43.032v-15.36h47.744v15.36H.024ZM63.841 95V26.136h19.072v19.456l-2.688-5.632c2.048-4.864 5.333-8.533 9.856-11.008 4.523-2.56 10.027-3.84 16.512-3.84v18.432a23.374 23.374 0 0 0-2.304-.128 17.573 17.573 0 0 0-2.176-.128c-5.461 0-9.899 1.579-13.312 4.736-3.328 3.072-4.992 7.893-4.992 14.464V95H63.841ZM156.206 95V81.56l-1.28-2.944V54.552c0-4.267-1.323-7.595-3.968-9.984-2.56-2.39-6.528-3.584-11.904-3.584-3.669 0-7.296.597-10.88 1.792-3.499 1.11-6.485 2.645-8.96 4.608l-7.168-13.952c3.755-2.645 8.277-4.693 13.568-6.144a60.724 60.724 0 0 1 16.128-2.176c10.496 0 18.645 2.475 24.448 7.424 5.803 4.95 8.704 12.672 8.704 23.168V95h-18.688Zm-20.992 1.024c-5.376 0-9.984-.896-13.824-2.688-3.84-1.877-6.784-4.395-8.832-7.552-2.048-3.157-3.072-6.699-3.072-10.624 0-4.096.981-7.68 2.944-10.752 2.048-3.072 5.248-5.461 9.6-7.168 4.352-1.792 10.027-2.688 17.024-2.688h18.304V66.2H141.23c-4.693 0-7.936.768-9.728 2.304-1.707 1.536-2.56 3.456-2.56 5.76 0 2.56.981 4.608 2.944 6.144 2.048 1.45 4.821 2.176 8.32 2.176 3.328 0 6.315-.768 8.96-2.304 2.645-1.621 4.565-3.968 5.76-7.04l3.072 9.216c-1.451 4.437-4.096 7.808-7.936 10.112-3.84 2.304-8.789 3.456-14.848 3.456ZM234.822 25.112c5.461 0 10.325 1.11 14.592 3.328 4.352 2.133 7.765 5.461 10.24 9.984 2.475 4.437 3.712 10.155 3.712 17.152V95h-19.968V58.648c0-5.547-1.237-9.643-3.712-12.288-2.389-2.645-5.803-3.968-10.24-3.968-3.157 0-6.016.683-8.576 2.048-2.475 1.28-4.437 3.285-5.888 6.016-1.365 2.73-2.048 6.23-2.048 10.496V95h-19.968V26.136h19.072v19.072l-3.584-5.76c2.475-4.608 6.016-8.15 10.624-10.624 4.608-2.475 9.856-3.712 15.744-3.712ZM304.634 96.024c-5.888 0-11.563-.683-17.024-2.048-5.376-1.45-9.643-3.243-12.8-5.376l6.656-14.336c3.157 1.963 6.869 3.584 11.136 4.864 4.352 1.195 8.619 1.792 12.8 1.792 4.608 0 7.851-.555 9.728-1.664 1.963-1.11 2.944-2.645 2.944-4.608 0-1.621-.768-2.816-2.304-3.584-1.451-.853-3.413-1.493-5.888-1.92a289.33 289.33 0 0 0-8.192-1.28 114.286 114.286 0 0 1-8.832-1.664c-2.987-.768-5.717-1.877-8.192-3.328-2.475-1.45-4.48-3.413-6.016-5.888-1.451-2.475-2.176-5.675-2.176-9.6 0-4.352 1.237-8.192 3.712-11.52 2.56-3.328 6.229-5.93 11.008-7.808 4.779-1.963 10.496-2.944 17.152-2.944 4.693 0 9.472.512 14.336 1.536 4.864 1.024 8.917 2.517 12.16 4.48l-6.656 14.208c-3.328-1.963-6.699-3.285-10.112-3.968-3.328-.768-6.571-1.152-9.728-1.152-4.437 0-7.68.597-9.728 1.792s-3.072 2.73-3.072 4.608c0 1.707.725 2.987 2.176 3.84 1.536.853 3.541 1.536 6.016 2.048s5.163.981 8.064 1.408c2.987.341 5.973.896 8.96 1.664 2.987.768 5.675 1.877 8.064 3.328 2.475 1.365 4.48 3.285 6.016 5.76 1.536 2.39 2.304 5.547 2.304 9.472 0 4.267-1.28 8.064-3.84 11.392-2.56 3.243-6.272 5.803-11.136 7.68-4.779 1.877-10.624 2.816-17.536 2.816ZM349.466 95V.024h19.968V95h-19.968ZM430.206 95V81.56l-1.28-2.944V54.552c0-4.267-1.323-7.595-3.968-9.984-2.56-2.39-6.528-3.584-11.904-3.584-3.669 0-7.296.597-10.88 1.792-3.499 1.11-6.485 2.645-8.96 4.608l-7.168-13.952c3.755-2.645 8.277-4.693 13.568-6.144a60.724 60.724 0 0 1 16.128-2.176c10.496 0 18.645 2.475 24.448 7.424 5.803 4.95 8.704 12.672 8.704 23.168V95h-18.688Zm-20.992 1.024c-5.376 0-9.984-.896-13.824-2.688-3.84-1.877-6.784-4.395-8.832-7.552-2.048-3.157-3.072-6.699-3.072-10.624 0-4.096.981-7.68 2.944-10.752 2.048-3.072 5.248-5.461 9.6-7.168 4.352-1.792 10.027-2.688 17.024-2.688h18.304V66.2H415.23c-4.693 0-7.936.768-9.728 2.304-1.707 1.536-2.56 3.456-2.56 5.76 0 2.56.981 4.608 2.944 6.144 2.048 1.45 4.821 2.176 8.32 2.176 3.328 0 6.315-.768 8.96-2.304 2.645-1.621 4.565-3.968 5.76-7.04l3.072 9.216c-1.451 4.437-4.096 7.808-7.936 10.112-3.84 2.304-8.789 3.456-14.848 3.456ZM495.126 96.024c-8.107 0-14.421-2.048-18.944-6.144-4.523-4.181-6.784-10.368-6.784-18.56V10.904h19.968v60.16c0 2.901.768 5.163 2.304 6.784 1.536 1.536 3.627 2.304 6.272 2.304 3.157 0 5.845-.853 8.064-2.56l5.376 14.08c-2.048 1.45-4.523 2.56-7.424 3.328-2.816.683-5.76 1.024-8.832 1.024Zm-36.352-52.992v-15.36h47.744v15.36h-47.744ZM553.234 96.024c-7.339 0-13.867-1.536-19.584-4.608-5.632-3.072-10.112-7.253-13.44-12.544-3.243-5.376-4.864-11.477-4.864-18.304 0-6.912 1.621-13.013 4.864-18.304 3.328-5.376 7.808-9.557 13.44-12.544 5.717-3.072 12.245-4.608 19.584-4.608 7.253 0 13.739 1.536 19.456 4.608 5.717 2.987 10.197 7.125 13.44 12.416 3.243 5.29 4.864 11.435 4.864 18.432 0 6.827-1.621 12.928-4.864 18.304-3.243 5.29-7.723 9.472-13.44 12.544-5.717 3.072-12.203 4.608-19.456 4.608Zm0-16.384c3.328 0 6.315-.768 8.96-2.304 2.645-1.536 4.736-3.712 6.272-6.528 1.536-2.901 2.304-6.315 2.304-10.24 0-4.01-.768-7.424-2.304-10.24-1.536-2.816-3.627-4.992-6.272-6.528-2.645-1.536-5.632-2.304-8.96-2.304-3.328 0-6.315.768-8.96 2.304-2.645 1.536-4.779 3.712-6.4 6.528-1.536 2.816-2.304 6.23-2.304 10.24 0 3.925.768 7.339 2.304 10.24 1.621 2.816 3.755 4.992 6.4 6.528 2.645 1.536 5.632 2.304 8.96 2.304ZM604.341 95V26.136h19.072v19.456l-2.688-5.632c2.048-4.864 5.333-8.533 9.856-11.008 4.523-2.56 10.027-3.84 16.512-3.84v18.432a23.374 23.374 0 0 0-2.304-.128 17.573 17.573 0 0 0-2.176-.128c-5.461 0-9.899 1.579-13.312 4.736-3.328 3.072-4.992 7.893-4.992 14.464V95h-19.968Z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  </header>
);

export default AppHeader;