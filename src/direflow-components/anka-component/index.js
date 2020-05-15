import { DireflowComponent } from 'direflow-component';
import App from './App';

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'anka-component',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
    {
      name: 'external-loader',
      options: {
        paths: [
          'https://club-sandbox-preprod.leoo-factory.io/wp-sites/themes/wordpress-leoo-base-theme/css/leoocore.min.css?ver=1.0.0.1585040405',
          'https://club-sandbox-preprod.leoo-factory.io/wp-sites/themes/wordpress-leoo-club-sandbox/css/leooproject.min.css?ver=1.0.0.1585040365'
        ],
      },
    },
  ],
});
