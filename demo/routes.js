import router from '../src/router.js';
import {template as index} from './partials/index.js';
import {template as appBar} from './partials/inag-app-bar.js';
import {template as button} from './partials/inag-button.js';
import {template as card} from './partials/inag-card.js';
import {template as checkBox} from './partials/inag-checkbox.js';
import {template as datePicker} from './partials/inag-datepicker.js';
import {template as dialog} from './partials/inag-dialog.js';
import {template as bottomSheet} from './partials/inag-bottom-sheet.js';
import {template as dropDown} from './partials/inag-dropdown.js';
import {template as progress} from './partials/inag-progress.js';
import {template as drawer} from './partials/inag-drawer.js';
import {template as radio} from './partials/inag-radiobutton.js';
import {template as slider} from './partials/inag-slider.js';
import {template as inagSwitch} from './partials/inag-switch.js';
import {template as table} from './partials/inag-table.js';
import {template as tabs} from './partials/inag-tabs.js';
import {template as text} from './partials/inag-textfield.js';
import {template as slideMenu} from './partials/inag-slidemenu.js';
import {template as loader} from './partials/inag-loader.js';

const outlet = document.querySelector('#content');

router(outlet, [
  {url: '/inag-webcomponents', template: index},
  {url: '/inag-webcomponents/', template: index},
  {url: '/inag-webcomponents/inag-app-bar', template: appBar},
  {url: '/inag-webcomponents/inag-button', template: button},
  {url: '/inag-webcomponents/inag-card', template: card},
  {url: '/inag-webcomponents/inag-checkbox', template: checkBox},
  {url: '/inag-webcomponents/inag-datepicker', template: datePicker, controller() {
      const picker = document.querySelector('inag-datepicker');
      const field = document.querySelector('inag-textfield');
      const dialog = document.querySelector('inag-dialog');
      const locale = 'en-EN';

      field.addEventListener('focus', dialog.open.bind(dialog));

      picker.addEventListener('change', e => {
        field.value = e.detail.formattedDate;
        dialog.close();
      });

      picker.addEventListener('close', dialog.close.bind(dialog));

      const formattedDate = new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(new Date());

      picker.date = formattedDate;
      field.value = formattedDate;
    }
  },
  {url: '/inag-webcomponents/inag-dialog', template: dialog, controller() {
      const standardDialog = document.querySelector('#standard-dialog');
      const modalDialog = document.querySelector('#modal-dialog');

      document.querySelector('#open-standard').addEventListener('click', standardDialog.open.bind(standardDialog));
      document.querySelector('#close-standard').addEventListener('click', standardDialog.close.bind(standardDialog));
      document.querySelector('#open-modal').addEventListener('click', modalDialog.open.bind(modalDialog));
      document.querySelector('#close-modal').addEventListener('click', modalDialog.close.bind(modalDialog));
    }
  },
  {url: '/inag-webcomponents/inag-bottom-sheet', template: bottomSheet, controller() {
      const standardDialog = document.querySelector('#standard-dialog');

      document.querySelector('#open-standard').addEventListener('click', standardDialog.open.bind(standardDialog));
      document.querySelector('#close-standard').addEventListener('click', standardDialog.close.bind(standardDialog));
    }
  },
  {url: '/inag-webcomponents/inag-dropdown', template: dropDown},
  {url: '/inag-webcomponents/inag-drawer', template: drawer, controller() {
      const button = document.querySelector('#inag-drawer-toggle');
      const drawer = document.querySelector('#demo-inag-drawer');

      button.addEventListener('click', drawer.toggle.bind(drawer));
    }
  },
  {url: '/inag-webcomponents/inag-loader', template: loader},
  {url: '/inag-webcomponents/inag-progress', template: progress},
  {url: '/inag-webcomponents/inag-radiobutton', template: radio},
  {url: '/inag-webcomponents/inag-slider', template: slider},
  {url: '/inag-webcomponents/inag-switch', template: inagSwitch},
  {url: '/inag-webcomponents/inag-table', template: table, controller() {
      customElements.whenDefined('inag-table')
      .then(() => {
        const tables = document.querySelectorAll('inag-table');
        tables[0].data = [
          {id: 1, language: 'Javascript', scope: 'Frontend'},
          {id: 2, language: 'PHP', scope: 'Backend'},
          {id: 3, language: 'Scala', scope: 'Backend'},
          {id: 4, language: 'CSS', scope: 'Frontend'}
        ];
        tables[1].data = [
          {id: 1, language: 'Javascript', scope: 'Frontend'},
          {id: 2, language: 'PHP', scope: 'Backend'},
          {id: 3, language: 'Scala', scope: 'Backend'},
          {id: 4, language: 'CSS', scope: 'Frontend'},
          {id: 5, language: 'Javascript', scope: 'Frontend'},
          {id: 6, language: 'PHP', scope: 'Backend'},
          {id: 7, language: 'Scala', scope: 'Backend'},
          {id: 8, language: 'CSS', scope: 'Frontend'},
          {id: 9, language: 'Javascript', scope: 'Frontend'},
          {id: 10, language: 'PHP', scope: 'Backend'},
          {id: 11, language: 'Scala', scope: 'Backend'},
          {id: 12, language: 'CSS', scope: 'Frontend'},
          {id: 13, language: 'Javascript', scope: 'Frontend'},
          {id: 14, language: 'PHP', scope: 'Backend'},
          {id: 15, language: 'Scala', scope: 'Backend'},
          {id: 16, language: 'CSS', scope: 'Frontend'}
        ];
      });
    }
  },
  {url: '/inag-webcomponents/inag-tabs', template: tabs},
  {url: '/inag-webcomponents/inag-textfield', template: text},
  {url: '/inag-webcomponents/inag-slidemenu', template: slideMenu}
]);
